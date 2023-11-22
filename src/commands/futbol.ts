
import Discord from "discord.js"
const {diasHasta} = require('../functions/diasHasta')
module.exports = {
    data: new Discord.SlashCommandBuilder()
    .setName("futbol")
    .setDescription("Muestra cuántos días faltan para  los siguientes partidos de la selección"),

    async run(client, interaction){   
      const embed:Discord.EmbedBuilder = new Discord.EmbedBuilder()
          .setTitle("Tiempo hasta los siguientes partidos de la selección Argentina")
          .setColor("#7eb2fa")
          .setDescription("Tiempo hasta los siguientes partidos de la selección Argentina")
          .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929121012275093524/camiseta-de-futbol.png")
          .addFields(
            { 
              name: ":flag_ar: vs :flag_cl: \n(05/09/2024)", 
              value: "Faltan " + diasHasta(new Date("2024-09-05")) + " días",  inline: true 
            },
            { 
              name: ":flag_ar: vs :flag_co: \n(10/09/2024)", 
              value: "Faltan " + diasHasta(new Date("2024-09-10")) + " días",  inline: true 
            },
            { 
              name: ":flag_ar: vs :flag_ve: \n(10/10/2024)", 
              value: "Faltan " + diasHasta(new Date("2024-10-10")) + " días",  inline: true 
            },
            { 
              name: ":flag_ar: vs :flag_bo: \n(15/10/2024)", 
              value: "Faltan " + diasHasta(new Date("2024-10-15")) + " días",  inline: true 
            },
            { 
              name: ":flag_ar: vs :flag_py: \n(14/11/2024)", 
              value: "Faltan " + diasHasta(new Date("2024-11-14")) + " días",  inline: true 
            },
            { 
              name: ":flag_ar: vs :flag_pe: \n(19/11/2024)", 
              value: "Faltan " + diasHasta(new Date("2024-11-24")) + " días",  inline: true 
            },
            { 
              name: ":flag_ar: vs :flag_uy: \n(20/03/2025)", 
              value: "Faltan " + diasHasta(new Date("2025-03-20")) + " días",  inline: true 
            },
            { 
              name: ":flag_ar: vs :flag_br: \n(25/03/2025)", 
              value: "Faltan " + diasHasta(new Date("2025-03-25")) + " días",  inline: true 
            })         
          return interaction.reply({ embeds: [embed] });

    }
}