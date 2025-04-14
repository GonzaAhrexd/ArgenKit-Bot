// DiscordJS
import Discord from "discord.js"
// Funciones
const { diasHasta } = require('../functions/diasHasta')
// Variables
import proximosPartidos from "../variables/partidos-valores"

module.exports = {
  data: new Discord.SlashCommandBuilder()
    .setName("futbol")
    .setDescription("Muestra cuántos días faltan para  los siguientes partidos de la selección"),

  async run(client, interaction) {

    const fields = proximosPartidos
      .filter(partido => new Date(partido.fecha) > new Date())
      .map(partido => ({
        name: `:flag_ar: vs ${partido.rival} \n(${partido.fecha})`,
        value: `Faltan ${diasHasta(new Date(partido.fecha))} días`,
        inline: true
      }));


    console.log(fields)
    const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
      .setTitle("Tiempo hasta los siguientes partidos de la selección Argentina")
      .setColor("#7eb2fa")
      .setDescription("Tiempo hasta los siguientes partidos de la selección Argentina")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929121012275093524/camiseta-de-futbol.png")
      .addFields(fields)
    return interaction.reply({ embeds: [embed] });

  }
}