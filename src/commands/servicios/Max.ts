
import Discord from "discord.js"
const {  total51 } = require("../../functions/impuestos"); //Impuestos
const { formatoPrecio } = require('../../functions/formato')

const max = async (client: any, interaction: Discord.CommandInteraction) => {
    const embed1: Discord.EmbedBuilder = new Discord.EmbedBuilder()
    .setTitle("MAX")
    .setURL("https://www.max.com/ar/es")
    .setDescription("Precio de HBO Max  en  Argentina con impuestos ")
    .setColor('#0422CB')
    .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Max_logo.svg/2560px-Max_logo.svg.png")
    .addFields(
      // Mensual
      { name: "Suscripción mensual básico con anuncios", value: `ARS${formatoPrecio(total51(5690), "ARS")}`, inline: true },
      { name: "Suscripción mensual estándar", value: `ARS${formatoPrecio(total51(7290), "ARS")}`, inline: true },
      { name: "Suscripción mensual platino", value: `ARS${formatoPrecio(total51(8790), "ARS")}`, inline: true },
      // Anual
      { name: "Suscripción anual básico con anuncios", value: `ARS${formatoPrecio(total51(49590), "ARS")}`, inline: true },
      { name: "Suscripción anual estándar", value: `ARS${formatoPrecio(total51(61290), "ARS")}`, inline: true },
      { name: "Suscripción anual platino", value: `ARS${formatoPrecio(total51(72890), "ARS")}`, inline: true }
    )
  return interaction.reply({ embeds: [embed1] });


}

export default max
