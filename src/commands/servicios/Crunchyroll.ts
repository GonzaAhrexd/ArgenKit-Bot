import { Client, CommandInteraction, EmbedBuilder } from "discord.js";
const { total21 } = require("../../functions/impuestos"); //Impuestos
const { formatoPrecio } = require("../../functions/formato");

const crunchyroll = async (_client: Client, interaction: CommandInteraction) => {
  const embed: EmbedBuilder = new EmbedBuilder()
    .setTitle("Crunchyroll")
    .setURL("https://www.crunchyroll.com/es")
    .setColor("#fec105")
    .setDescription("Precio  de Crunchyroll  con impuestos en Argentina ")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/802944543510495292/903849721699913778/crunchyroll.png",
    )
    .addFields(
      {
        name: "Fan (1 MES):",
        value: "ARS " + formatoPrecio(total21(3499), "ARS"),
        inline: true,
      },
      {
        name: "Mega Fan (1 Mes):",
        value: "ARS " + formatoPrecio(total21(4399), "ARS"),
        inline: true,
      },
      {
        name: "Mega Fan (1 Año):",
        value: "ARS " + formatoPrecio(total21(43999), "ARS"),
        inline: true,
      },
    );

  return interaction.reply({ embeds: [embed] });
};

export default crunchyroll;
