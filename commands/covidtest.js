const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("covidtest")
        .setDescription('Te hace un test de covid'),

    async run(client, interaction) {
        let a = Math.floor(Math.random() * 2 + 1)
        if (a == 1) {
          const embed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setDescription("Calculando...")
            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/937780157387780116/test-results_1.png")
            .addField("RESULTADOS: ", "POSITIVO (+)")
          return interaction.reply({ embeds: [embed] });
        }
    
        if (a == 2) {
          const embed = new Discord.MessageEmbed()
            .setColor("RED")
            .setDescription("Calculando...")
            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/937781157196611644/negativotest.png")
            .addField("RESULTADOS: ", "NEGATIVO (-)")
          return interaction.reply({ embeds: [embed] });
        }
      }
    }

