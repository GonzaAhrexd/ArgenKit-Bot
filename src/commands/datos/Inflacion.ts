
import Discord from "discord.js"
import axios from "axios"
import https from 'https'


const subioInflacion = (inflamesActual, inflamesAnterior) => {
    return inflamesActual > inflamesAnterior ? "🔺" : "<:flechashaciaabajo:1210747546096369664>";
}

const anualizarInflacion = (mensual) => {
    return (((mensual / 100) + 1) ** 12 - 1) * 100;
}


const Inflacion = async (client: any, interaction: any) => {
    
      const agent = new https.Agent({ rejectUnauthorized: false });

      const startMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split("T")[0];
      const startTwelveMonthsBefore = new Date(new Date().getFullYear(), new Date().getMonth() - 12, 1).toISOString().split("T")[0];
    
      const [inflacion, interanual] = await Promise.all([
          axios.get(`https://api.bcra.gob.ar/estadisticas/v2.0/datosvariable/27/${startTwelveMonthsBefore}/${startMonth}`, { httpsAgent: agent }),
          axios.get(`https://api.bcra.gob.ar/estadisticas/v2.0/datosvariable/28/${startTwelveMonthsBefore}/${startMonth}`, { httpsAgent: agent }),
          ]);

      // Inflación datos 
      // Mes actual
      const inflacionActual = inflacion.data.results[inflacion.data.results.length - 1].valor;
      // Fecha del mes
      const inflacionActualMes = new Date(inflacion.data.results[inflacion.data.results.length - 1].fecha);
      // Mes anterior
      const inflacionAnterior = inflacion.data.results[inflacion.data.results.length - 2].valor;
      // Fecha del mes anterior
      const inflacionAnteriorMes = new Date(inflacion.data.results[inflacion.data.results.length - 2].fecha);
      // Inflación interanual
      const inflacionInteranualActual = interanual.data.results[interanual.data.results.length - 1].valor;
      // Fecha del mes interanual
      const inflacionInteranualActualMes = new Date(interanual.data.results[interanual.data.results.length - 1].fecha);
      // Inflación interanual anterior
      const inflacionInteranualAnterior = interanual.data.results[interanual.data.results.length - 2].valor;
      
      // Fecha del mes interanual anterior
      const inflacionInteranualAnteriorMes = new Date(interanual.data.results[interanual.data.results.length - 2].fecha);
      const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
      const inflacionInteranualActualString = `${meses[inflacionInteranualActualMes.getMonth() +1 ]} ${inflacionInteranualActualMes.getFullYear() - 1} - ${meses[inflacionActualMes.getMonth()]} ${inflacionActualMes.getFullYear()}`
      const inflacionInteranualAnteriorString = `${meses[inflacionInteranualAnteriorMes.getMonth()+1]} ${inflacionInteranualAnteriorMes.getFullYear() -1} - ${meses[inflacionInteranualAnteriorMes.getMonth()]} ${inflacionInteranualAnteriorMes.getFullYear()}`


      const embed = new Discord.EmbedBuilder()
          .setTitle("Inflación")
          .setDescription("La inflación es el aumento generalizado y sostenido de los precios de los bienes y servicios existentes en el mercado durante un período de tiempo, generalmente un año.")
          .setColor("#FF0000")
          .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1210388005571928194/interest-rate.png?ex=65ea60ac&is=65d7ebac&hm=583707d60d34e41f7eda6611ee1269a473e5bccc2146ab7138f53c14d68085e1&")
          .addFields(
              { name: `Mensual \n(${meses[inflacionActualMes.getMonth()]})`, value: `${inflacionActual}%`, inline: true },
              { name: `Mes anterior \n(${meses[inflacionAnteriorMes.getMonth()]})`, value: `${inflacionAnterior}%`, inline: true },
              { name: `Variación`, value: `${(inflacionActual - inflacionAnterior).toFixed(2)}% ${subioInflacion(inflacionActual, inflacionAnterior)}`, inline: true },
              { name: `Interanual \n(${inflacionInteranualActualString})`, value: `${inflacionInteranualActual}%`, inline: true },
              { name: `Interanual anterior \n(${inflacionInteranualAnteriorString})`, value: `${inflacionInteranualAnterior}%`, inline: true },
              { name: `Variación`, value: `${(inflacionInteranualActual - inflacionInteranualAnterior).toFixed(2)}% ${subioInflacion(inflacionInteranualActual, inflacionInteranualAnterior)}`, inline: true },
              { name: `Mensual anualizada`, value: `${anualizarInflacion(inflacionActual).toFixed(2)}%`, inline: true },
            );

      await interaction.editReply({ embeds: [embed] });

      
}

export default Inflacion
