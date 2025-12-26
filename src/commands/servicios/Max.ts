import Discord, { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";
const { total21, total51 } = require("../../functions/impuestos"); // Impuestos
const { formatoPrecio } = require("../../functions/formato");

const crearEmbed = (conPercepciones: boolean) => {
  const calcular = conPercepciones ? total51 : total21;
  const descripcion = conPercepciones
    ? "Precios de HBO Max en Argentina con impuestos **y percepciones**:"
    : "Precios de HBO Max en Argentina con impuestos **sin percepciones**:";

  return new Discord.EmbedBuilder()
    .setTitle("MAX")
    .setURL("https://www.max.com/ar/es")
    .setDescription(descripcion)
    .setColor("#0422CB")
    .setThumbnail(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Max_logo.svg/2560px-Max_logo.svg.png"
    )
    .addFields(
      // Mensual
      { name: "Suscripción mensual básico con anuncios", value: `ARS${formatoPrecio(calcular(6490), "ARS")}`, inline: true },
      { name: "Suscripción mensual estándar", value: `ARS${formatoPrecio(calcular(8390), "ARS")}`, inline: true },
      { name: "Suscripción mensual platino", value: `ARS${formatoPrecio(calcular(10090), "ARS")}`, inline: true },
      // Anual
      { name: "Suscripción anual básico con anuncios", value: `ARS${formatoPrecio(calcular(56590), "ARS")}`, inline: true },
      { name: "Suscripción anual estándar", value: `ARS${formatoPrecio(calcular(70590), "ARS")}`, inline: true },
      { name: "Suscripción anual platino", value: `ARS${formatoPrecio(calcular(84090), "ARS")}`, inline: true }
    );
};

const max = async (client: any, interaction: Discord.CommandInteraction) => {
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

export default max;
