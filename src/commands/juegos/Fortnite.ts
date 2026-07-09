import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ComponentType,
  EmbedBuilder,
} from "discord.js";
import type {
  Client,
  ChatInputCommandInteraction,
  ColorResolvable,
  ButtonInteraction,
  APIEmbedField,
} from "discord.js";
const { total21 } = require("../../functions/impuestos");
import { formatoPrecio } from "../../functions/formato";
import { getDolar } from "../../api/Divisas";
import { setTimeout as wait } from "node:timers/promises";

type EmbedKey = "epic" | "switchXbox";

const Fortnite = async (
  _client: Client,
  interaction: ChatInputCommandInteraction,
) => {
  const valorDolar = (await getDolar()).oficial.value_sell;

  const createEmbed = (
    title: string,
    fields: APIEmbedField[],
    color: ColorResolvable,
  ) =>
    new EmbedBuilder()
      .setTitle(title)
      .setURL("https://www.epicgames.com/fortnite/es-ES/home")
      .setDescription("Precios de V-Bucks en Fortnite en Argentina:")
      .setColor(color)
      .setThumbnail(
        "https://static.wikia.nocookie.net/depredador-avp/images/4/4f/Fortnite_F.png/revision/latest?cb=20231126072405&path-prefix=es",
      )
      .addFields(fields);

  const vbucksPricesEpic = [
    { name: "1000 V-Bucks", value: 8.99 },
    { name: "2800 V-Bucks", value: 22.99 },
    { name: "5000 V-Bucks", value: 36.99 },
    { name: "13500 V-Bucks", value: 89.99 },
  ];

  const vbucksPricesSwitchXbox = [
    { name: "1000 V-Bucks", value: 4977 },
    { name: "2800 V-Bucks", value: 12727 },
    { name: "5000 V-Bucks", value: 20477 },
    { name: "13500 V-Bucks", value: 49817 },
  ];

  const embeds: Record<EmbedKey, EmbedBuilder> = {
    epic: createEmbed(
      "Fortnite: PC/Epic Games",
      vbucksPricesEpic.map((p) => ({
        name: p.name,
        value: `ARS${formatoPrecio(total21(valorDolar * p.value), "ARS")}`,
        inline: true,
      })),
      "#77DBF7",
    ),
    switchXbox: createEmbed(
      "Fortnite: Switch/Xbox",
      vbucksPricesSwitchXbox.map((p) => ({
        name: p.name,
        value: `ARS${formatoPrecio(total21(p.value), "ARS")}`,
        inline: true,
      })),
      "#00ff00",
    ),
  };

  const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId("epic")
      .setLabel("PC/Epic Games")
      .setStyle(ButtonStyle.Success),
    new ButtonBuilder()
      .setCustomId("switchXbox")
      .setLabel("Switch/Xbox")
      .setStyle(ButtonStyle.Success),
  );

  await wait(3000);
  await interaction.editReply({ embeds: [embeds.epic], components: [row] });

  const filter = (i: ButtonInteraction) => i.user.id === interaction.user.id;
  const collector = interaction.channel?.createMessageComponentCollector({
    filter,
    componentType: ComponentType.Button,
    time: 20000,
  });
  let actual = embeds.epic;

  collector?.on("collect", async (i) => {
    await i.deferUpdate();
    if (i.customId === "epic" || i.customId === "switchXbox") {
      actual = embeds[i.customId];
      await i.editReply({ embeds: [actual], components: [row] });
    }
  });

  collector?.on("end", async (_collected, reason) => {
    if (reason === "time") {
      await interaction.editReply({ embeds: [actual], components: [] });
    }
  });
};

export default Fortnite;
