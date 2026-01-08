
import Discord from "discord.js"
import { getInflacionData } from "../../api/bcraApi"

const subioInflacion = (inflamesActual, inflamesAnterior) => {
    return inflamesActual > inflamesAnterior ? "🔺" : "<:flechashaciaabajo:1210747546096369664>";
}

const anualizarInflacion = (mensual) => {
    return (((mensual / 100) + 1) ** 12 - 1) * 100;
}



const Inflacion = async (client: any, interaction: any) => {
      
      const inflacionData = await getInflacionData();
      const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

      const embed = new Discord.EmbedBuilder()
          .setTitle("Inflación")
          .setDescription("La inflación es el aumento generalizado y sostenido de los precios de los bienes y servicios existentes en el mercado durante un período de tiempo, generalmente un año.")
          .setColor("#FF0000")
          .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1210388005571928194/interest-rate.png?ex=65ea60ac&is=65d7ebac&hm=583707d60d34e41f7eda6611ee1269a473e5bccc2146ab7138f53c14d68085e1&")
          .addFields(
              { name: `Mensual \n(${meses[inflacionData.mensual.fecha.getMonth()]})`, value: `${inflacionData.mensual.valor}%`, inline: true },
              { name: `Mes anterior \n(${meses[inflacionData.mensual.fecha.getMonth() - 1]})`, value: `${inflacionData.mensual.valorAnterior}%`, inline: true },
              { name: `Variación`, value: `${(inflacionData.mensual.valor - inflacionData.mensual.valorAnterior).toFixed(2)}% ${subioInflacion(inflacionData.mensual.valor, inflacionData.mensual.valorAnterior)}`, inline: true },
              { name: `Interanual \n(${meses[inflacionData.interanual.fecha.getMonth()]})`, value: `${inflacionData.interanual.valor}%`, inline: true },
              { name: `Interanual anterior \n(${meses[inflacionData.interanual.fecha.getMonth() - 1]})`, value: `${inflacionData.interanual.valorAnterior}%`, inline: true },
              { name: `Variación`, value: `${(inflacionData.interanual.valor - inflacionData.interanual.valorAnterior).toFixed(2)}% ${subioInflacion(inflacionData.interanual.valor, inflacionData.interanual.valorAnterior)}`, inline: true },
              { name: `Mensual anualizada`, value: `${anualizarInflacion(inflacionData.mensual.valor).toFixed(2)}%`, inline: true },
            );

      await interaction.editReply({ embeds: [embed] });

      
}

export default Inflacion
