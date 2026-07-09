import { ChatInputCommandInteraction, Client, EmbedBuilder, SlashCommandBuilder } from "discord.js";
import { diasHasta } from "../functions/diasHasta";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("elecciones")
    .setDescription(
      "Muestra cuántos días faltan para las siguientes elecciones en Argentina",
    ),

  async run(_client: Client, interaction: ChatInputCommandInteraction) {
    const embed: EmbedBuilder = new EmbedBuilder()
      .setTitle("Tiempo hasta las siguientes elecciones y cambios de gobierno")
      .setColor("#B18BC8")
      .setDescription(
        "Presidente y vicepresidente en el cargo:\n 🟣Javier Milei y Victoria Villaruel ",
      )
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/802944543510495292/1177087620187181207/vote.png?ex=65713b45&is=655ec645&hm=9a58b3df161529243080c52f67b28a49c4b7433a130e431a1646b81bf173dacb&",
      )
      .addFields({
        name: "Elecciones presidenciales (24 de octubre 2027)",
        value:
          "Faltan " +
          diasHasta(new Date("2027-10-24")) +
          " días para las siguientes elecciones presidenciales.",
      });

    return interaction.reply({ embeds: [embed] });
  },
};
