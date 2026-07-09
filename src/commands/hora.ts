import {
  EmbedBuilder,
  SlashCommandBuilder,
} from "discord.js";
import type {
  Client,
  ChatInputCommandInteraction,
  ColorResolvable,
  APIEmbedField,
} from "discord.js";
import zonas from "../variables/zonas-valores";

interface ZonaHoraria {
  nombre: string;
  codigo: string;
}

interface LugarItem {
  codigo: string;
  nombre: string;
  color: ColorResolvable;
  zonas: ZonaHoraria[];
}

export default {
  data: new SlashCommandBuilder()
    .setName("hora")
    .setDescription("Muestra la hora actual de distintos paises")
    .addStringOption((option) =>
      option
        .setName("zona")
        .setDescription("Muestra .")
        .setRequired(true)
        .addChoices(
          { name: "Estados Unidos", value: "usa" },
          { name: "Canadá", value: "canada" },
          { name: "México", value: "mexico" },
          { name: "Brasil", value: "brasil" },
          { name: "Europa", value: "europa" },
          { name: "Asia", value: "asia" },
          { name: "Rusia", value: "rusia" },
          { name: "Centroamérica", value: "centroamerica" },
          { name: "Sudamérica", value: "sudamerica" },
        ),
    ),

  async run(_client: Client, interaction: ChatInputCommandInteraction) {
    const zona = interaction.options.getString("zona", true);

    const lugar = (zonas as LugarItem[]).find((l) => l.codigo === zona);

    if (!lugar) return;

    const zonasEmbedField: APIEmbedField[] = lugar.zonas.map((zonita) => ({
      name: zonita.nombre,
      value: new Date().toLocaleTimeString("es-AR", {
        timeZone: zonita.codigo,
        hour: "2-digit",
        minute: "2-digit",
      }),
      inline: true,
    }));

    const embed = new EmbedBuilder()
      .setTitle(`Zonas horarias de ${lugar.nombre}`)
      .setDescription(`${lugar.nombre} tiene distintas zonas horarias`)
      .setColor(lugar.color)
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/802944543510495292/1071523614265970849/clock.png",
      )
      .addFields(zonasEmbedField);

    await interaction.reply({ embeds: [embed] });
  },
};