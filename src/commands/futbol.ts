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
          .addField("  :flag_ar: vs :flag_pa: \n(23/03/2023) ", "Faltan " + diasHasta(new Date("2023-03-23")) + " días ", true)
          .addField("  :flag_ar: vs :flag_cw:  \n(28/03/2023) ", "Faltan " + diasHasta(new Date("2023-03-28")) + " días ", true)
        
          return interaction.reply({ embeds: [embed] });

    }
}