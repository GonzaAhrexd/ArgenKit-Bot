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
  ButtonInteraction,
} from "discord.js";
const { total30 } = require("../../functions/impuestos");
import { formatoPrecio } from "../../functions/formato";
import { getDolar } from "../../api/Divisas";

const BrawlStars = async (
  _client: Client,
  interaction: ChatInputCommandInteraction,
) => {
  const valorDolar = (await getDolar()).oficial.value_sell;

  const createBrawlStarsEmbed = (withPerception: boolean) => {
    const embedBrawlStars = new EmbedBuilder()
      .setTitle("Brawl Stars")
      .setURL("https://supercell.com/en/games/brawlstars/")
      .setDescription(
        `Los precios en Brawl Stars en Argentina son los siguientes: \nAl pagar debitando de dólar en cuenta bancaria se puede evitar la percepción de ganancias:`,
      )
      .setColor("#FFBE20")
      .setThumbnail(
        "https://play-lh.googleusercontent.com/EiElcSrd6-o-19roiswSx0AZPzsq6qF3hUGHsSWDl5UVtj7G23DHkneM8ucwqyOmEg=w480-h960-rw",
      );

    const items = [
      { name: "30 gemas", price: valorDolar * 1.99 },
      { name: "80 gemas", price: valorDolar * 4.99 },
      { name: "170 gemas", price: valorDolar * 9.99 },
      { name: "360 gemas", price: valorDolar * 19.99 },
      { name: "950 gemas", price: valorDolar * 49.99 },
      { name: "2000 gemas", price: valorDolar * 99.99 },
    ];

    items.forEach((item) => {
      const price = withPerception ? total30(item.price) : item.price;
      embedBrawlStars.addFields({
        name: item.name,
        value: `ARS ${formatoPrecio(price, "ARS")}`,
        inline: true,
      });
    });

    return embedBrawlStars;
  };

  const withPerceptionButton = new ButtonBuilder()
    .setCustomId("with_perception")
    .setLabel("Con Percepción")
    .setStyle(ButtonStyle.Primary);

  const withoutPerceptionButton = new ButtonBuilder()
    .setCustomId("without_perception")
    .setLabel("Sin Percepción")
    .setStyle(ButtonStyle.Success);

  const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
    withPerceptionButton,
    withoutPerceptionButton,
  );

  let currentEmbed = createBrawlStarsEmbed(true);

  const message = await interaction.editReply({
    embeds: [currentEmbed],
    components: [row],
  });

  const collector = message.createMessageComponentCollector({
    filter: (i: ButtonInteraction) => i.user.id === interaction.user.id,
    componentType: ComponentType.Button,
    time: 60000,
  });

  collector.on("collect", async (i) => {
    if (i.customId === "with_perception") {
      currentEmbed = createBrawlStarsEmbed(true);
    } else if (i.customId === "without_perception") {
      currentEmbed = createBrawlStarsEmbed(false);
    }

    await i.update({
      embeds: [currentEmbed],
      components: [row],
    });
  });

  collector.on("end", async () => {
    withPerceptionButton.setDisabled(true);
    withoutPerceptionButton.setDisabled(true);
    const disabledRow = new ActionRowBuilder<ButtonBuilder>().addComponents(
      withPerceptionButton,
      withoutPerceptionButton,
    );

    await interaction.editReply({
      embeds: [currentEmbed],
      components: [disabledRow],
    });
  });
};

export default BrawlStars;
