
import Discord from "discord.js"
const { formatoPrecio } = require('../../functions/formato')

const paramount = async (client: any, interaction: Discord.CommandInteraction) => {
    const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
    .setTitle("Paramount+")
    .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Paramount_Plus.svg/1920px-Paramount_Plus.svg.png")
    .setURL("https://www.paramountplus.com/ar/")
    .setDescription("Los precios de Paramount+ en Argentina con impuestos son los siguientes: ")
    .setColor('#0b67ff')
    .addFields(
      { name: "Plan  mensual ", value: `ARS${formatoPrecio(1599, "ARS")}` })

  return interaction.reply({ embeds: [embed] });
}

export default paramount
