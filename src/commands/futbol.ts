
import Discord from "discord.js"
const {diasHasta} = require('../functions/diasHasta')
module.exports = {
    data: new Discord.SlashCommandBuilder()
    .setName("futbol")
    .setDescription("Muestra cuántos días faltan para  los siguientes partidos de la selección"),

    async run(client, interaction){
      
      const proximosPartidos = [
        {
          fecha: '2024-06-25',
          rival: ':flag_cl:'
        },
        {
          fecha: '2024-06-29',
          rival: ':flag_pe:'
        },
        {
        fecha: "2024-09-05",
        rival: ":flag_cl:"
      },
      {
        fecha: "2024-09-10",
        rival: ":flag_co:"
      },
      {
        fecha: "2024-10-10",
        rival: ":flag_vz:"
      },
      {
        fecha: "2024-10-15",
        rival: ":flag_bo:"
      },
      {
        fecha: "2024-11-14",
        rival: ":flag_py:"
      },
      {
        fecha: "2024-11-19",
        rival: ":flag_pe:"
      }

    ]

      const fields = proximosPartidos.map(partido => {
        return {
          name: `:flag_ar: vs ${partido.rival} \n(${partido.fecha})`,
          value: `Faltan ${diasHasta(new Date(partido.fecha))} días`,
          inline: true
        }
      })

      console.log(fields)
      const embed:Discord.EmbedBuilder = new Discord.EmbedBuilder()
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