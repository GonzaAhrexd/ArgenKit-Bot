
import Discord from "discord.js"

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName("covidtest")
        .setDescription('Te hace un test de covid'),

    async run(client, interaction) {
        let numeroRandom:number = Math.floor(Math.random() * 2 + 1)
        if (numeroRandom == 1) {
          const embed:Discord.EmbedBuilder = new Discord.EmbedBuilder()
            .setColor("Green")
            .setDescription("Calculando...")
            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/937780157387780116/test-results_1.png")
            .addFields({ name: "RESULTADOS: ", value: ` Positivo (+)` })
            
          return interaction.reply({ embeds: [embed] });
        }
    
        if (numeroRandom == 2) {
          const embed:Discord.EmbedBuilder = new Discord.EmbedBuilder()
            .setColor("Red")
            .setDescription("Calculando...")
            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/937781157196611644/negativotest.png")
            .addFields({ name: "RESULTADOS: ", value: ` NEGATIVO (-)` })
            

          return interaction.reply({ embeds: [embed] });
        }
      }
    }

