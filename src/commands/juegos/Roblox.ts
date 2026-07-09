import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  ComponentType,
} from "discord.js";
import type {
  Client,
  ChatInputCommandInteraction,
  ButtonInteraction,
  ColorResolvable,
} from "discord.js";
const { total51, total30 } = require("../../functions/impuestos");
import { setTimeout as wait } from "node:timers/promises";
import { getDolar } from "../../api/Divisas";
import { formatoPrecio } from "../../functions/formato";

type EmbedKey = "ivaPercepcion" | "percepcion" | "sinImpuestos";

interface PrecioItem {
  name: string;
  value: number;
}

interface EmbedField {
  name: string;
  value: string;
  inline?: boolean;
}

const Roblox = async (
  _client: Client,
  interaction: ChatInputCommandInteraction,
) => {
  const valorDolar = (await getDolar()).oficial.value_sell;

  const createEmbed = (
    title: string,
    descripcion: string,
    fields: EmbedField[],
    color: ColorResolvable,
  ) =>
    new EmbedBuilder()
      .setTitle(title)
      .setURL("https://www.roblox.com/")
      .setDescription(descripcion)
      .setColor(color)
      .setThumbnail(
        "https://upload.wikimedia.org/wikipedia/commons/7/7e/Roblox_Logo_2022.jpg",
      )
      .addFields(fields);

  const premiumPrices: PrecioItem[] = [
    { name: "Premium 450", value: 4.99 },
    { name: "Premium 1000", value: 9.99 },
    { name: "Premium 2200", value: 19.99 },
  ];

  const robuxPrices: PrecioItem[] = [
    { name: "Robux 400", value: 4.99 },
    { name: "Robux 800", value: 9.99 },
    { name: "Robux 1700", value: 19.99 },
    { name: "Robux 4500", value: 49.99 },
    { name: "Robux 10000", value: 99.99 },
    { name: "Robux 22500", value: 199.99 },
  ];

  const embeds: Record<EmbedKey, EmbedBuilder> = {
    ivaPercepcion: createEmbed(
      "Roblox: IVA + Percepción",
      "Comprando desde Roblox.com cobra IVA y Percepción de Ganancias",
      [
        ...premiumPrices.map((p) => ({
          name: p.name,
          value: `ARS${formatoPrecio(total51(valorDolar * p.value), "ARS")}`,
          inline: true,
        })),
        ...robuxPrices.map((r) => ({
          name: r.name,
          value: `ARS${formatoPrecio(total51(valorDolar * r.value), "ARS")}`,
          inline: true,
        })),
      ],
      "#ff0000",
    ),
    percepcion: createEmbed(
      "Roblox: Percepción",
      "Comprando desde la PlayStore solamente cobra percepción de ganancias (30%)",
      [
        ...premiumPrices.map((p) => ({
          name: p.name,
          value: `ARS${formatoPrecio(total30(valorDolar * p.value), "ARS")}`,
          inline: true,
        })),
        ...robuxPrices.map((r) => ({
          name: r.name,
          value: `ARS${formatoPrecio(total30(valorDolar * r.value), "ARS")}`,
          inline: true,
        })),
      ],
      "#00ff00",
    ),
    sinImpuestos: createEmbed(
      "Roblox: Sin Impuestos",
      "Pagando con dólares en cuenta bancaria se puede evitar la percepción de ganancias",
      [
        ...premiumPrices.map((p) => ({
          name: p.name,
          value: `ARS${formatoPrecio(valorDolar * p.value, "ARS")}`,
          inline: true,
        })),
        ...robuxPrices.map((r) => ({
          name: r.name,
          value: `ARS${formatoPrecio(valorDolar * r.value, "ARS")}`,
          inline: true,
        })),
      ],
      "#0000ff",
    ),
  };

  const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId("ivaPercepcion")
      .setLabel("IVA + Percepción")
      .setStyle(ButtonStyle.Success),
    new ButtonBuilder()
      .setCustomId("percepcion")
      .setLabel("Percepción")
      .setStyle(ButtonStyle.Success),
    new ButtonBuilder()
      .setCustomId("sinImpuestos")
      .setLabel("Sin Impuestos")
      .setStyle(ButtonStyle.Success),
  );

  await wait(3000);
  await interaction.editReply({
    embeds: [embeds.ivaPercepcion],
    components: [row],
  });

  const filter = (i: ButtonInteraction) => i.user.id === interaction.user.id;
  const collector = interaction.channel?.createMessageComponentCollector({
    filter,
    componentType: ComponentType.Button,
    time: 20000,
  });
  let actual = embeds.ivaPercepcion;

  collector?.on("collect", async (i) => {
    await i.deferUpdate();
    actual = embeds[i.customId as EmbedKey];
    await i.editReply({ embeds: [actual], components: [row] });
  });

  collector?.on("end", async (_collected, reason) => {
    if (reason === "time") {
      await interaction.editReply({ embeds: [actual], components: [] });
    }
  });
};

export default Roblox;
