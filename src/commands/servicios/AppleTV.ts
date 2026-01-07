import Discord, { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";
import axios from "axios";
import { getDolar } from "../../api/Divisas";
const { total21, total51 } = require("../../functions/impuestos"); // Impuestos
const { formatoPrecio } = require("../../functions/formato");

const crearEmbed = (conPercepciones: boolean, precioARS: number) => {
  const calcular = conPercepciones ? total51 : total21;
  const descripcion = conPercepciones
    ? "Los precios de Apple TV+ en Argentina con impuestos **y percepciones** son los siguientes:"
    : "Los precios de Apple TV+ en Argentina con impuestos **sin percepciones** son los siguientes:";

  return new Discord.EmbedBuilder()
    .setTitle("Apple TV+")
    .setURL("https://www.apple.com/la/tv/")
    .setDescription(descripcion)
    .setColor("#eeeeee")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/802944543510495292/913852356771319928/televisor_1.png"
    )
    .addFields({
      name: "Costo mensual (USD 6.99)",
      value: `ARS${formatoPrecio(calcular(precioARS), "ARS")}`,
      inline: true,
    });
};

const appletv = async (client: any, interaction: Discord.CommandInteraction) => {
  // Traer cotización oficial
   const valorDolar = (await getDolar()).oficial.value_sell;
      
  const precioARS = 6.99 * valorDolar; // USD * valor oficial

  const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId("sinpercepciones")
      .setLabel("Sin percepciones")
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId("percepciones")
      .setLabel("Percepciones")
      .setStyle(ButtonStyle.Success)
  );

  // Embed inicial (sin percepciones)
  await interaction.editReply({ embeds: [crearEmbed(false, precioARS)], components: [row] });

  const filter = (i: any) => i.user.id === interaction.user.id;
  const collector = interaction.channel?.createMessageComponentCollector({
    filter,
    time: 15000,
  });

  collector?.on("collect", async (i: any) => {
    await i.deferUpdate();

    if (i.customId === "percepciones") {
      await i.editReply({ embeds: [crearEmbed(true, precioARS)], components: [row] });
    } else if (i.customId === "sinpercepciones") {
      await i.editReply({ embeds: [crearEmbed(false, precioARS)], components: [row] });
    }
  });
};

export default appletv;
