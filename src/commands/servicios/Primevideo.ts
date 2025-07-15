
import Discord from "discord.js"
const {  total51 } = require("../../functions/impuestos"); //Impuestos
const { formatoPrecio } = require('../../functions/formato')

const primevideo = async (client: any, interaction: Discord.CommandInteraction) => {
    const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
    .setTitle("Prime Video")
    .setURL("https://www.primevideo.com/")
    .setDescription("El precio de  Prime Video con impuestos en Argentina es el siguiente: ")
    .setColor('#1aa6e0')
    .setThumbnail("https://images.squarespace-cdn.com/content/v1/5dcd9a119133c421eadd4e73/1574287053801-RG0293YPJNWPKOV77KXW/ke17ZwdGBToddI8pDm48kPJXHKy2-mnvrsdpGQjlhod7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmrMDYraMJMCQwFxTSOIP7LpSBEQpA-g5k6VTjWbSuadHJq0dp98hg5AZvIaPb3DoM/Prime+Video+Icon.png")
    .addFields(
      { name: "Costo mensual", value: "ARS" + formatoPrecio(total51(6499), "ARS") })
  return interaction.reply({ embeds: [embed] });


}

export default primevideo
