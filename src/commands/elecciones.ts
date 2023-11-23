
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
        .setColor("#31A7FB")
        .setDescription("Presidente y vicepresidente electos:\n 🟣Javier Milei y Victoria Villaruel ")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1177087620187181207/vote.png?ex=65713b45&is=655ec645&hm=9a58b3df161529243080c52f67b28a49c4b7433a130e431a1646b81bf173dacb&")
        .addFields(
          { name: "Cambio presidencial 2023 (10/12/2023)", value: "Faltan " + diasHasta(new Date("2023-12-10")) + " días para el siguiente cambio presidencial "},
          { name: "Elecciones legislativas 2025 (Noviembre 2025, aún sin definir)", value: "Faltan " + diasHasta(new Date("2025-11-01")) + " días para las siguientes elecciones legislativas "})


      return interaction.reply({ embeds: [embed] });
  }
  
}