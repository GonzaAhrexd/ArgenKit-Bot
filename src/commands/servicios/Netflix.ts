import Discord, { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";
const { total51, total21 } = require("../../functions/impuestos"); //Impuestos
const { formatoPrecio } = require("../../functions/formato");

const crearEmbed = (conPercepciones: boolean) => {
  const calcular = conPercepciones ? total51 : total21;
  const descripcion = conPercepciones
    ? "Los precios de Netflix con impuestos **y percepciones** en Argentina son los siguientes:"
    : "Los precios de Netflix con impuestos **sin percepciones** en Argentina son los siguientes:";

  return new Discord.EmbedBuilder()
    .setTitle("Netflix")
    .setURL("https://www.netflix.com/ar/")
    .setDescription(descripcion)
    .setColor("#9a0611")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/802944543510495292/1180334885953609810/netflix.png?ex=657d0b86&is=656a9686&hm=711e7fc4fb8376b9efed01f54bc53c131331ae4d611e773840537a3f0d8925d3&"
    )
    .addFields(
      { name: "Básico:", value: "ARS" + formatoPrecio(calcular(7199), "ARS"), inline: true },
      { name: "Estándar:", value: "ARS" + formatoPrecio(calcular(11999), "ARS"), inline: true },
      { name: "Premium:", value: "ARS" + formatoPrecio(calcular(15999), "ARS"), inline: true },
      { name: "Casa extra:", value: "ARS" + formatoPrecio(calcular(4299), "ARS"), inline: true }
    );
};

const netflix = async (client: any, interaction: any) => {
  const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder().setCustomId("sinpercepciones").setLabel("Sin percepciones").setStyle(ButtonStyle.Primary),
    new ButtonBuilder().setCustomId("percepciones").setLabel("Percepciones").setStyle(ButtonStyle.Success)
  );

  // Embed inicial sin percepciones
  await interaction.editReply({ embeds: [crearEmbed(false)], components: [row] });

  const filter = (i: any) => i.user.id === interaction.user.id; // solo el usuario que ejecuta
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

export default netflix;
