import { ChatInputCommandInteraction, Client, EmbedBuilder, SlashCommandBuilder } from "discord.js";
const { generarRandom } = require("../functions/numeroRandom");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("covidtest")
    .setDescription("Te hace un test de covid"),

  async run(_client: Client, interaction: ChatInputCommandInteraction) {
    let numeroRandom: number = generarRandom(1, 3);
    const embed: EmbedBuilder = new EmbedBuilder()
      .setColor(numeroRandom === 1 ? "Green" : "Red")
      .setDescription("Calculando...")
      .setThumbnail(
        numeroRandom === 1
          ? "https://cdn.discordapp.com/attachments/802944543510495292/937780157387780116/test-results_1.png"
          : "https://cdn.discordapp.com/attachments/802944543510495292/937781157196611644/negativotest.png",
      )
      .addFields({
        name: "RESULTADOS: ",
        value: numeroRandom === 1 ? "Positivo (+)" : "NEGATIVO (-)",
      });

    return interaction.reply({ embeds: [embed] });
  },
};
