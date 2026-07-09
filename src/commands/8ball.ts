import { EmbedBuilder, SlashCommandBuilder } from "discord.js";
import type {
  Client,
  ChatInputCommandInteraction,
  ColorResolvable,
} from "discord.js";
const { generarRandom } = require("../functions/numeroRandom");
import respuestas from "../variables/respuestas-8ball-valores";

interface Respuesta8Ball {
  opcion: number;
  color: ColorResolvable;
  respuesta: string;
}

export default {
  data: new SlashCommandBuilder()
    .setName("8ball")
    .setDescription("Pregúntale a la bola mágica 8")
    .addStringOption((option) =>
      option
        .setName("consulta")
        .setDescription("Consulta a realizar.")
        .setRequired(true),
    ),

  async run(_client: Client, interaction: ChatInputCommandInteraction) {
    const consulta = interaction.options.getString("consulta", true);
    const valorAleatorio = generarRandom(0, 29) as number;

    const respuestaElegida = (respuestas as Respuesta8Ball[]).find(
      (r) => r.opcion === valorAleatorio,
    );

    if (!respuestaElegida) return;

    const embed = new EmbedBuilder()
      .setColor(respuestaElegida.color)
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/802944543510495292/1176940238657040405/8-ball.png?ex=6570b203&is=655e3d03&hm=fa237fa24acd064df581b2b11c63659ca70644ae64efb5c684209f74b1b73b9b&",
      )
      .setDescription("Calculando...")
      .addFields(
        { name: "Consulta:", value: consulta },
        { name: "La bola 8 mágica dice...", value: respuestaElegida.respuesta },
      );

    await interaction.reply({ embeds: [embed] });
  },
};
