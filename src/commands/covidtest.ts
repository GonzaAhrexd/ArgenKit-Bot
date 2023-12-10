
import Discord from "discord.js"
const {generarRandom} = require('../functions/numeroRandom')  
module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName("covidtest")
        .setDescription('Te hace un test de covid'),

    async run(client, interaction) {
      let numeroRandom: number = generarRandom(1, 3);
      const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
        .setColor(numeroRandom === 1 ? "Green" : "Red")
        .setDescription("Calculando...")
        .setThumbnail(numeroRandom === 1 ? "https://cdn.discordapp.com/attachments/802944543510495292/937780157387780116/test-results_1.png" : "https://cdn.discordapp.com/attachments/802944543510495292/937781157196611644/negativotest.png")
        .addFields({ name: "RESULTADOS: ", value: numeroRandom === 1 ? "Positivo (+)" : "NEGATIVO (-)" });

      return interaction.reply({ embeds: [embed] });
    }
    }

