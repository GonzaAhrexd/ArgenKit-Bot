
import Discord from "discord.js"
const {diasHasta} = require('../functions/diasHasta')
import { ActionRowBuilder, ButtonBuilder } from 'discord.js'
import { ButtonStyle } from 'discord.js'
module.exports = {
    data: new Discord.SlashCommandBuilder()
    .setName("elecciones")
    .setDescription("Muestra cuántos días faltan para las siguientes elecciones en Argentina"),

    async run(client, interaction){
      const embed:Discord.EmbedBuilder = new Discord.EmbedBuilder()
        .setTitle("Tiempo hasta las siguientes elecciones y cambios de gobierno")
        .setColor("#C20CB6")
        .setDescription("Presidente y vicepresidente electos:\n 🟣Javier Milei y Victoria Villaruel ")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/825432782360150047/votar_1.png")
        .addFields(
          { name: "Cambio presidencial 2023 (10/12/2023)", value: "Faltan " + diasHasta(new Date("2023-12-10")) + " días para el siguiente cambio presidencial "})
    

      return interaction.reply({ embeds: [embed] });
  }
  
}