
import Discord, { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";
const { total51, total21 } = require("../../functions/impuestos"); //Impuestos
const { formatoPrecio } = require("../../functions/formato");

const crearEmbed = (conPercepciones: boolean) => {
  const calcular = conPercepciones ? total51 : total21;
  const descripcion = conPercepciones
    ? "El precio de Prime Video con impuestos **y percepciones** en Argentina es el siguiente:"
    : "El precio de Prime Video con impuestos **sin percepciones** en Argentina es el siguiente:";

  return new Discord.EmbedBuilder()
    .setTitle("Prime Video")
    .setURL("https://www.primevideo.com/")
    .setDescription(descripcion)
    .setColor("#1aa6e0")
    .setThumbnail(
      "https://images.squarespace-cdn.com/content/v1/5dcd9a119133c421eadd4e73/1574287053801-RG0293YPJNWPKOV77KXW/ke17ZwdGBToddI8pDm48kPJXHKy2-mnvrsdpGQjlhod7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmrMDYraMJMCQwFxTSOIP7LpSBEQpA-g5k6VTjWbSuadHJq0dp98hg5AZvIaPb3DoM/Prime+Video+Icon.png"
    )
    .addFields({ name: "Costo mensual", value: "ARS" + formatoPrecio(calcular(6499), "ARS") });
};

const primevideo = async (client: any, interaction: any) => {
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

export default primevideo;
