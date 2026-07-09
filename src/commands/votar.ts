import { ChatInputCommandInteraction, Client, EmbedBuilder, SlashCommandBuilder } from "discord.js";
module.exports = {
  data: new SlashCommandBuilder()
    .setName("votar")
    .setDescription("Vota al bot en top.gg"),

  async run(_client: Client, interaction: ChatInputCommandInteraction) {
    const embed: EmbedBuilder = new EmbedBuilder()
      .setTitle("¡Apoya al bot votando en top.gg!")
      .setURL("https://top.gg/bot/796173877981216799")
      .setColor("#7289d9")
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/802944543510495292/919023182269280266/logoinverted.png",
      )
      .setDescription(
        "¡Votar al bot en top.gg es otra forma de mostrar tu apoyo al bot!",
      );
    return await interaction.reply({ embeds: [embed] });
  },
};
