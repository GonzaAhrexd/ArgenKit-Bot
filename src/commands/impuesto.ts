import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ComponentType,
  EmbedBuilder,
  SlashCommandBuilder,
} from "discord.js";
import type {
  ButtonInteraction,
  ChatInputCommandInteraction,
  Client,
  ColorResolvable,
} from "discord.js";
const impuestos = require("../functions/impuestos");
import { formatoPrecio } from "../functions/formato";

type ImpuestoKey = "iva" | "ganancias" | "servicios";

interface ImpuestoConfig {
  titulo: string;
  descripcion: string;
  color: ColorResolvable;
  campos: { name: string; value: string; inline?: boolean }[];
}

export default {
  data: new SlashCommandBuilder()
    .setName("impuesto")
    .setDescription("Calcula el impuesto a compras extranjeras con tarjeta")
    .addNumberOption((option) =>
      option
        .setName("monto")
        .setDescription("Valor a calcular.")
        .setRequired(true),
    ),

  async run(_client: Client, interaction: ChatInputCommandInteraction) {
    const monto = interaction.options.getNumber("monto", true);

    const config: Record<ImpuestoKey, ImpuestoConfig> = {
      iva: {
        titulo: "Cálculo de IVA (21%)",
        descripcion:
          "Las plataformas de gaming no están alcanzadas por la percepción de ganancias. Solo tributan IVA",
        color: "#fcd6d6",
        campos: [
          {
            name: "I.V.A (21%)",
            value: formatoPrecio(impuestos.iva(monto), "ARS"),
            inline: true,
          },
          {
            name: "Total con IVA",
            value: formatoPrecio(monto + impuestos.iva(monto), "ARS"),
            inline: true,
          },
        ],
      },
      ganancias: {
        titulo: "Impuestos al exterior (30%)",
        descripcion:
          "Se recomienda pagar con dólar en cuenta bancaria para evitar el 30% de percepción de ganancias.",
        color: "#d6f2fc",
        campos: [
          {
            name: "Percepción de Ganancias (30%)",
            value: formatoPrecio(impuestos.ganancias(monto), "ARS"),
            inline: true,
          },
          {
            name: "Total (30%)",
            value: formatoPrecio(impuestos.total30(monto), "ARS"),
            inline: true,
          },
        ],
      },
      servicios: {
        titulo: "Impuestos al exterior en servicios digitales (51%)",
        descripcion:
          "Algunos servicios digitales tributan IVA y percepción de ganancias.",
        color: "#d6f2fc",
        campos: [
          {
            name: "I.V.A (21%)",
            value: formatoPrecio(impuestos.iva(monto), "ARS"),
            inline: true,
          },
          {
            name: "Percepción de Ganancias (30%)",
            value: formatoPrecio(impuestos.ganancias(monto), "ARS"),
            inline: true,
          },
          {
            name: "Total (51%)",
            value: formatoPrecio(impuestos.total51(monto), "ARS"),
            inline: true,
          },
        ],
      },
    };

    const crearEmbed = (clave: ImpuestoKey) => {
      const { titulo, descripcion, color, campos } = config[clave];
      return new EmbedBuilder()
        .setTitle(titulo)
        .setDescription(descripcion)
        .setColor(color)
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/802944543510495292/1179850115163373568/taxes.png",
        )
        .addFields([
          { name: "Monto original", value: formatoPrecio(monto, "ARS") },
          ...campos,
        ]);
    };

    const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
      new ButtonBuilder()
        .setCustomId("iva")
        .setLabel("📄Solo IVA (21%)")
        .setStyle(ButtonStyle.Success),
      new ButtonBuilder()
        .setCustomId("ganancias")
        .setLabel("📄Ganancias (30%)")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("servicios")
        .setLabel("📄IVA + Ganancias (51%)")
        .setStyle(ButtonStyle.Danger),
    );

    await interaction.reply({ embeds: [crearEmbed("iva")], components: [row] });

    const filter = (i: ButtonInteraction) => i.user.id === interaction.user.id;
    const collector = interaction.channel?.createMessageComponentCollector({
      filter,
      componentType: ComponentType.Button,
      time: 15000,
    });

    collector?.on("collect", async (i) => {
      await i.deferUpdate();
      if (
        i.customId === "iva" ||
        i.customId === "ganancias" ||
        i.customId === "servicios"
      ) {
        await i.editReply({
          embeds: [crearEmbed(i.customId)],
          components: [row],
        });
      }
    });
  },
};
