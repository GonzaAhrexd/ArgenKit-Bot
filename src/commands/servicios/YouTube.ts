import Discord, { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";
import axios from "axios";
const { total51, total21 } = require("../../functions/impuestos"); //Impuestos
const { formatoPrecio } = require("../../functions/formato");

const crearEmbed = (conPercepciones: boolean) => {
  const calcular = conPercepciones ? total51 : total21;
  const descripcion = conPercepciones
    ? "Los precios de YouTube Premium en Argentina con impuestos **y percepciones** son los siguientes:"
    : "Los precios de YouTube Premium en Argentina con impuestos **sin percepciones** son los siguientes:";

  return new Discord.EmbedBuilder()
    .setTitle("YouTube Premium")
    .setURL("https://www.youtube.com/premium")
    .setDescription(descripcion)
    .setColor("#ff0000")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/802944543510495292/903357207310127185/youtube.png"
    )
    .addFields(
      { name: "YouTube Music:", value: "ARS" + formatoPrecio(calcular(2499), "ARS"), inline: true },
      { name: "YouTube Premium Individual:", value: "ARS" + formatoPrecio(calcular(3399), "ARS"), inline: true },
      { name: "YouTube Premium Familiar:", value: "ARS" + formatoPrecio(calcular(6799), "ARS"), inline: true }
    );
};

const youtube = async (client: any, interaction: any) => {
  const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder().setCustomId("sinpercepciones").setLabel("Sin percepciones").setStyle(ButtonStyle.Primary),
    new ButtonBuilder().setCustomId("percepciones").setLabel("Percepciones").setStyle(ButtonStyle.Success)
  );

  // Embed inicial sin percepciones
  await interaction.editReply({ embeds: [crearEmbed(false)], components: [row] });

  const filter = (i: any) => i.user.id === interaction.user.id;
  const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });

  collector.on("collect", async (i: any) => {
    await i.deferUpdate();

    if (i.customId === "percepciones") {
      await i.editReply({ embeds: [crearEmbed(true)], components: [row] });
    } else if (i.customId === "sinpercepciones") {
      await i.editReply({ embeds: [crearEmbed(false)], components: [row] });
    }
  });
};

export default youtube;
