import Discord, { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";
const { total51, total21 } = require("../../functions/impuestos"); // Impuestos
const { formatoPrecio } = require("../../functions/formato");

const crearEmbed = (conPercepciones: boolean) => {
  const calcular = conPercepciones ? total51 : total21;
  const descripcion = conPercepciones
    ? "Los precios de Spotify Premium en Argentina con impuestos **y percepciones** son los siguientes:"
    : "Los precios de Spotify Premium en Argentina con impuestos **sin percepciones** son los siguientes:";

  return new Discord.EmbedBuilder()
    .setTitle("Spotify")
    .setURL("https://www.spotify.com/ar/premium/")
    .setDescription(descripcion)
    .setColor("#7ad684")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/802944543510495292/903358342733389854/spotify_1.png"
    )
    .addFields(
      { name: "Individual:", value: "ARS" + formatoPrecio(calcular(3299), "ARS"), inline: true },
      { name: "Dúo:", value: "ARS" + formatoPrecio(calcular(4399), "ARS"), inline: true },
      { name: "Familiar:", value: "ARS" + formatoPrecio(calcular(5499), "ARS"), inline: true },
      { name: "Estudiantes:", value: "ARS" + formatoPrecio(calcular(1799), "ARS"), inline: true }
    );
};

const spotify = async (client: any, interaction: Discord.CommandInteraction) => {
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

  // Embed inicial (ej: sin percepciones)
  await interaction.editReply({ embeds: [crearEmbed(false)], components: [row] });

  const filter = (i: any) => i.user.id === interaction.user.id;
  const collector = interaction.channel?.createMessageComponentCollector({
    filter,
    time: 15000,
  });

  collector?.on("collect", async (i: any) => {
    await i.deferUpdate();

    if (i.customId === "percepciones") {
      await i.editReply({ embeds: [crearEmbed(true)], components: [row] });
    } else if (i.customId === "sinpercepciones") {
      await i.editReply({ embeds: [crearEmbed(false)], components: [row] });
    }
  });
};

export default spotify;
