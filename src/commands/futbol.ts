import {SlashCommandBuilder} from "@discordjs/builders"
import Discord from "discord.js"
const {diasHasta} = require('../functions/diasHasta')
module.exports = {
    data: new SlashCommandBuilder()
    .setName("futbol")
    .setDescription("Muestra cuántos días faltan para  los siguientes partidos de la selección"),

    async run(client, interaction){
        
 
      // .addField("  :flag_ar: vs :flag_pl: \n(30/11/2022) ", "Faltan " + diasHasta(new Date("2023-11-30")) + " días ", true)
        
      
      const embed = new Discord.MessageEmbed()
          .setTitle("Tiempo hasta los siguientes partidos de la selección Argentina")
          .setColor("#7eb2fa")
          .setDescription("Tiempo hasta los siguientes partidos de la selección Argentina")
          .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929121012275093524/camiseta-de-futbol.png")

           .addField("  :flag_ar: vs :flag_bo: \n(12/09/2023) ", "Faltan " + diasHasta(new Date("2023-09-12")) + " días ", true)
           .addField("  :flag_ar: vs :flag_py: \n(12/10/2023) ", "Faltan " + diasHasta(new Date("2023-10-12")) + " días ", true)
           .addField("  :flag_ar: vs :flag_pe: \n(17/10/2023) ", "Faltan " + diasHasta(new Date("2023-10-17")) + " días ", true)
           .addField("  :flag_ar: vs :flag_uy: \n(16/11/2023) ", "Faltan " + diasHasta(new Date("2023-11-16")) + " días ", true)
           .addField("  :flag_ar: vs :flag_br: \n(21/1/2023) ", "Faltan " + diasHasta(new Date("2023-11-21")) + " días ", true)
           .addField("  :flag_ar: vs :flag_cl: \n(05/09/2024) ", "Faltan " + diasHasta(new Date("2024-09-05")) + " días ", true)
           .addField("  :flag_ar: vs :flag_co: \n(10/09/2024) ", "Faltan " + diasHasta(new Date("2024-09-10")) + " días ", true)
           .addField("  :flag_ar: vs :flag_ve: \n(10/10/2024) ", "Faltan " + diasHasta(new Date("2024-10-10")) + " días ", true)
           .addField("  :flag_ar: vs :flag_bo: \n(15/10/2024) ", "Faltan " + diasHasta(new Date("2024-10-15")) + " días ", true)
           .addField("  :flag_ar: vs :flag_py: \n(14/11/2024) ", "Faltan " + diasHasta(new Date("2024-11-14")) + " días ", true)
           .addField("  :flag_ar: vs :flag_pe: \n(19/11/2024) ", "Faltan " + diasHasta(new Date("2024-11-24")) + " días ", true)
           .addField("  :flag_ar: vs :flag_uy: \n(20/03/2025) ", "Faltan " + diasHasta(new Date("2025-03-20")) + " días ", true)
           .addField("  :flag_ar: vs :flag_br: \n(25/03/2025) ", "Faltan " + diasHasta(new Date("2025-03-25")) + " días ", true)
           .addField("  :flag_ar: vs :flag_cl: \n(04/06/2025) ", "Faltan " + diasHasta(new Date("2025-04-06")) + " días ", true)
           .addField("  :flag_ar: vs :flag_br: \n(09/06/2025) ", "Faltan " + diasHasta(new Date("2025-06-09")) + " días ", true)
       
          
          return interaction.reply({ embeds: [embed] });

    }
}