
import Discord from "discord.js"
const { diasHasta } = require('../functions/diasHasta')
module.exports = {
  data: new Discord.SlashCommandBuilder()
    .setName("futbol")
    .setDescription("Muestra cuántos días faltan para  los siguientes partidos de la selección"),

  async run(client, interaction) {

    const proximosPartidos = [
      {
        fecha: "2025-03-25",
        rival: ":flag_br:"
      },
      {
        fecha: "2025-06-04",
        rival: ":flag_cl:"
      },
      {
        fecha: "2025-06-09",
        rival: ":flag_co:"
      },
      {
        fecha: "2025-09-09",
        rival: ":flag_ve:"
      },
      {
        fecha: "2025-09-25",
        rival: ":flag_ec:"
      },
    ]

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
      .addFields(
        fields
      )
    return interaction.reply({ embeds: [embed] });

  }
}