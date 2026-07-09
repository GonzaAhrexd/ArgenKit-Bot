import { setTimeout as wait } from "node:timers/promises";
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
import { formatoPrecio } from "../functions/formato";
import metales from "../variables/metales-valores";
import { getAll } from "../api/Divisas";

interface MetalItem {
  id: string;
  nombre: string;
  emoji: string;
  color: ColorResolvable;
  desc: string;
  imagen: string;
  iso: string;
  numeroysimboloatomico: string;
  dureza: string;
  masaatomica: string;
}

interface DolarData {
  oficial: {
    value_buy: number;
    value_sell: number;
  };
}

export default {
  data: new SlashCommandBuilder()
    .setName("metal")
    .setDescription("Muestra los datos los datos de un metal")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("oro")
        .setDescription("Muestra los datos y precio del oro"),
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("plata")
        .setDescription("Muestra los datos y precio de la plata"),
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("paladio")
        .setDescription("Muestra los datos y precio del paladio"),
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("platino")
        .setDescription("Muestra los datos y precio del platino"),
    ),

  async run(_client: Client, interaction: ChatInputCommandInteraction) {
    const metal = (metales as MetalItem[]).find(
      (m) => m.id === interaction.options.getSubcommand(),
    );

    if (!metal) return;

    await interaction.deferReply();

    try {
      const { divisas: divisasData, dolar: dolarData } = (await getAll()) as {
        divisas: Record<string, number>;
        dolar: DolarData;
      };
      const metalData = divisasData[metal.iso];

      const embed1 = new EmbedBuilder()
        .setTitle(`${metal.nombre} ${metal.emoji}`)
        .setColor(metal.color)
        .setDescription(metal.desc)
        .setThumbnail(metal.imagen)
        .addFields(
          {
            name: "Valor en dólares " + metal.emoji,
            value: formatoPrecio(1 / metalData, "USD"),
            inline: true,
          },
          {
            name: "Compra " + metal.emoji,
            value:
              "ARS" +
              formatoPrecio(
                (1 / metalData) * dolarData.oficial.value_buy,
                "ARS",
              ),
            inline: true,
          },
          {
            name: "Venta " + metal.emoji,
            value:
              "ARS" +
              formatoPrecio(
                (1 / metalData) * dolarData.oficial.value_sell,
                "ARS",
              ),
            inline: true,
          },
        );

      const embed2 = new EmbedBuilder()
        .setTitle("Oro")
        .setColor("#fddc4d")
        .setDescription(metal.desc)
        .setThumbnail(metal.imagen)
        .addFields(
          { name: "Código ISO", value: metal.iso, inline: true },
          {
            name: "Número y símbolo atómico",
            value: metal.numeroysimboloatomico,
            inline: true,
          },
          { name: "Dureza", value: metal.dureza, inline: true },
          { name: "Masa atómica", value: metal.masaatomica, inline: true },
        );

      const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
        new ButtonBuilder()
          .setCustomId("conversion")
          .setLabel("💸 Conversión ")
          .setStyle(ButtonStyle.Success),
        new ButtonBuilder()
          .setCustomId("informacion")
          .setLabel("📋 Información")
          .setStyle(ButtonStyle.Primary),
      );

      await wait(3000);
      await interaction.editReply({ embeds: [embed1], components: [row] });

      const filter = (i: ButtonInteraction) =>
        i.user.id === interaction.user.id;
      const collector = interaction.channel?.createMessageComponentCollector({
        filter,
        componentType: ComponentType.Button,
        time: 8000,
      });

      let actual = embed1;

      collector?.on("collect", async (i) => {
        if (i.customId === "conversion") {
          await i.deferUpdate();
          await i.editReply({ embeds: [embed1], components: [row] });
          actual = embed1;
        }
        if (i.customId === "informacion") {
          await i.deferUpdate();
          await i.editReply({ embeds: [embed2], components: [row] });
          actual = embed2;
        }
      });

      collector?.on("end", async (_collected, reason) => {
        if (reason === "time") {
          await interaction.editReply({ embeds: [actual], components: [] });
        }
      });
    } catch (err) {
      console.error("Error en el API de Metales", err);
      const embed = new EmbedBuilder()
        .setTitle(`Ha ocurrido un error`)
        .setColor(metal.color)
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/802944543510495292/1070117134497235005/backup-copy.png",
        )
        .setDescription(
          "Ha ocurrido un error relacionado con el api de Metales",
        );
      await interaction.editReply({ embeds: [embed] });
    }
  },
};
