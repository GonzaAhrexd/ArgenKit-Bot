import { Client, CommandInteraction, EmbedBuilder } from "discord.js";
const { total21 } = require("../../functions/impuestos"); //Impuestos
const { formatoPrecio } = require("../../functions/formato");

const gamepass = async (_client: Client, interaction: CommandInteraction) => {
  const embed: EmbedBuilder = new EmbedBuilder()
    .setTitle("Xbox Game Pass")
    .setURL("https://www.xbox.com/es-AR/xbox-game-pass")
    .setDescription(
      "Los precios de Xbox Game Pass con impuestos en Argentina son los siguientes: ",
    )
    .setColor("#a6ed75")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/802944543510495292/903853195443445770/xbox.png",
    )
    .addFields(
      {
        name: "Xbox Game Pass Essential",
        value: "ARS" + formatoPrecio(total21(8999.99), "ARS"),
        inline: true,
      },
      {
        name: "Xbox Game Pass Premium",
        value: "ARS" + formatoPrecio(total21(11999.99), "ARS"),
        inline: true,
      },
      {
        name: "Xbox Game Pass Ultimate",
        value: "ARS" + formatoPrecio(total21(24999.0), "ARS"),
        inline: true,
      },
    );

  return interaction.reply({ embeds: [embed] });
};

export default gamepass;
