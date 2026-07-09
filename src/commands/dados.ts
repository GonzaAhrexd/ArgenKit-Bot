import { EmbedBuilder, SlashCommandBuilder } from "discord.js";
import type { Client, ChatInputCommandInteraction } from "discord.js";
const { generarRandom } = require("../functions/numeroRandom");
import opcionesDado from "../variables/dado-valores";

interface DadoItem {
  number: number;
  img: string;
  emoji: string;
}

export default {
  data: new SlashCommandBuilder()
    .setName("dados")
    .setDescription("Tira un dado"),

  async run(_client: Client, interaction: ChatInputCommandInteraction) {
    const numeroRandom = generarRandom(1, 7) as number;

    const dado = (opcionesDado as DadoItem[]).find(
      (d) => d.number === numeroRandom,
    );

    if (!dado) return;

    const embed = new EmbedBuilder()
      .setColor("#F7F5FB")
      .setThumbnail(dado.img)
      .setDescription("Tirando dados...")
      .addFields({
        name: "El dado cayó en...  ",
        value: ` Número :${dado.emoji}:`,
      });

    await interaction.reply({ embeds: [embed] });
  },
};
