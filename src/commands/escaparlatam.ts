import { ChatInputCommandInteraction, Client, EmbedBuilder, SlashCommandBuilder } from "discord.js";
const { porcentaje } = require("../functions/funPorcentaje");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("escaparlatam")
    .setDescription("Muestra tus posibilidades de escapar de latinoamérica"),

  async run(_client: Client, interaction: ChatInputCommandInteraction) {
    const escaparLatam = porcentaje();

    const embed: EmbedBuilder = new EmbedBuilder()
      .setColor("Green")
      .setDescription("Calculando...")
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/802944543510495292/929069300000636958/escaparlatam.png",
      )
      .addFields({
        name: "Tus probabilidades de escapar de latinoamérica son de: ",
        value: `${escaparLatam[0]} ${escaparLatam[1]}%`,
      });
    return await interaction.reply({ embeds: [embed] });
  },
};
