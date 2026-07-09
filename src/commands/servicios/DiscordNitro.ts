import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  Client,
  ChatInputCommandInteraction,
} from "discord.js";
const { total30 } = require("../../functions/impuestos"); //Impuestos
const { formatoPrecio } = require("../../functions/formato");
import { getDolar } from "../../api/Divisas";

const discordnitro = async (
  _client: Client,
  interaction: ChatInputCommandInteraction,
) => {
  void _client;
  const valorDolar = (await getDolar()).oficial.value_sell;

  const embed1: EmbedBuilder = new EmbedBuilder()
    .setTitle("Discord Nitro")
    .setDescription(
      "Los precios de Discord Nitro en Argentina son los siguientes: \n Debitando en dólares se puede evitar la percepción de ganancias (30%)",
    )
    .setColor("#8aa9fa")
    .setThumbnail(
      "https://gitdab.com/distok/apkfuckery/raw/commit/ceffadc1723d227e61ee1001a624979fd9c783bb/com.discord/res/drawable-xxxhdpi/img_wumpus_jetpack.png",
    )
    .addFields(
      {
        name: "Discord Nitro Basic Mensual",
        value: `ARS${formatoPrecio(total30(1.91 * valorDolar), "ARS")}`,
        inline: true,
      },
      {
        name: "Discord Nitro Mensual",
        value: `ARS${formatoPrecio(total30(5.15 * valorDolar), "ARS")}`,
        inline: true,
      },
      {
        name: "Discord Nitro Basic Anual",
        value: `ARS${formatoPrecio(total30(14.76 * valorDolar), "ARS")}`,
        inline: true,
      },
      {
        name: "Discord Nitro Anual",
        value: `ARS${formatoPrecio(total30(51.48 * valorDolar), "ARS")}`,
        inline: true,
      },
    );

  const embed2: EmbedBuilder = new EmbedBuilder()
    .setTitle("Discord Nitro")
    .setDescription(
      "Los precios de Discord Nitro en Argentina son los siguientes: \n Debitando en dólares se puede evitar la percepción de ganancias (30%)",
    )
    .setColor("#8aa9fa")
    .setThumbnail(
      "https://gitdab.com/distok/apkfuckery/raw/commit/ceffadc1723d227e61ee1001a624979fd9c783bb/com.discord/res/drawable-xxxhdpi/img_wumpus_jetpack.png",
    )
    .addFields(
      {
        name: "Discord Nitro Basic Mensual",
        value: `ARS${formatoPrecio(1.91 * valorDolar, "ARS")}`,
        inline: true,
      },
      {
        name: "Discord Nitro Mensual",
        value: `ARS${formatoPrecio(5.15 * valorDolar, "ARS")}`,
        inline: true,
      },
      {
        name: "Discord Nitro Basic Anual",
        value: `ARS${formatoPrecio(14.76 * valorDolar, "ARS")}`,
        inline: true,
      },
      {
        name: "Discord Nitro Anual",
        value: `ARS${formatoPrecio(51.48 * valorDolar, "ARS")}`,
        inline: true,
      },
    );

  const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId("percepcion")
      .setLabel("Percepción")
      .setStyle(ButtonStyle.Success),
    new ButtonBuilder()
      .setCustomId("sinpercepcion")
      .setLabel("Sin percepción")
      .setStyle(ButtonStyle.Primary),
  );

  await interaction.editReply({ embeds: [embed1], components: [row] });

  const filter = () => true;

  const collector = interaction.channel?.createMessageComponentCollector({
    filter,
    time: 15000,
  });

  collector?.on("collect", async (i) => {
    if (!i.isButton()) return;
    if (i.customId === "percepcion") {
      await i.deferUpdate();
      await i.editReply({ embeds: [embed1], components: [row] });
    }
    if (i.customId === "sinpercepcion") {
      await i.deferUpdate();
      await i.editReply({ embeds: [embed2], components: [row] });
    }
  });

  await interaction.editReply({ embeds: [embed1] });
};

export default discordnitro;
