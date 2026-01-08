
import Discord from "discord.js";
import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";
import { getDolar } from "../../api/Divisas";
const { total51, total21 } = require("../../functions/impuestos"); //Impuestos
const { formatoPrecio } = require("../../functions/formato");

type TipoImpuesto = "sin" | "sinPercepciones" | "percepciones";
type TipoContenido = "suscripciones" | "bits";

const crearEmbedSuscripciones = (tipoImpuesto: TipoImpuesto, valorDolar: number) => {
  let calcular: (valor: number) => number;
  let descripcion: string;

  if (tipoImpuesto === "sin") {
    calcular = (valor: number) => valor;
    descripcion = "Los precios de las suscripciones a Twitch **sin impuestos** en Argentina son los siguientes:";
  } else if (tipoImpuesto === "sinPercepciones") {
    calcular = total21;
    descripcion = "Los precios de las suscripciones a Twitch con impuestos **sin percepciones** en Argentina son los siguientes:";
  } else {
    calcular = total51;
    descripcion = "Los precios de las suscripciones a Twitch con impuestos **y percepciones** en Argentina son los siguientes:";
  }

  return new Discord.EmbedBuilder()
    .setTitle("Suscripciones de Twitch")
    .setURL("https://www.twitch.tv/")
    .setDescription(descripcion)
    .setColor("#9246ff")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858126355091030036/twitch_icon_146081.png")
    .addFields(
      { name: "Suscripción de nivel 1", value: `ARS$ ${formatoPrecio(calcular(1.99 * valorDolar), "ARS")}`, inline: true },
      { name: "Suscripción de nivel 2", value: `ARS$ ${formatoPrecio(calcular(3.99 * valorDolar), "ARS")}`, inline: true },
      { name: "Suscripción de nivel 3", value: `ARS$ ${formatoPrecio(calcular(9.99 * valorDolar), "ARS")}`, inline: true }
    );
};

const crearEmbedBits = (tipoImpuesto: TipoImpuesto, valorDolar: number) => {
  let calcular: (valor: number) => number;
  let descripcion: string;

  if (tipoImpuesto === "sin") {
    calcular = (valor: number) => valor;
    descripcion = "Los precios de los bits de Twitch **sin impuestos** en Argentina son los siguientes:";
  } else if (tipoImpuesto === "sinPercepciones") {
    calcular = total21;
    descripcion = "Los precios de los bits de Twitch con impuestos **sin percepciones** en Argentina son los siguientes:";
  } else {
    calcular = total51;
    descripcion = "Los precios de los bits de Twitch con impuestos **y percepciones** en Argentina son los siguientes:";
  }

  return new Discord.EmbedBuilder()
    .setTitle("Bits de Twitch")
    .setDescription(descripcion)
    .setColor("#9246ff")
    .setURL("https://www.twitch.tv/")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858126355091030036/twitch_icon_146081.png")
    .addFields(
      { name: "100 bits", value: `ARS$ ${formatoPrecio(calcular(1.40 * valorDolar), "ARS")}`, inline: true },
      { name: "300 bits", value: `ARS$ ${formatoPrecio(calcular(3.00 * valorDolar), "ARS")}`, inline: true },
      { name: "500 bits", value: `ARS$ ${formatoPrecio(calcular(7.00 * valorDolar), "ARS")}`, inline: true },
      { name: "1.500 bits", value: `ARS$ ${formatoPrecio(calcular(19.95 * valorDolar), "ARS")}`, inline: true },
      { name: "5.000 bits", value: `ARS$ ${formatoPrecio(calcular(64.40 * valorDolar), "ARS")}`, inline: true },
      { name: "10.000 bits", value: `ARS$ ${formatoPrecio(calcular(126.00 * valorDolar), "ARS")}`, inline: true },
      { name: "25.000 bits", value: `ARS$ ${formatoPrecio(calcular(308.00 * valorDolar), "ARS")}`, inline: true }
    );
};

const twitch = async (client: any, interaction: any) => {
 
  const valorDolar = (await getDolar()).oficial.value_sell;

  let tipoImpuesto: TipoImpuesto = "sinPercepciones";
  let tipoContenido: TipoContenido = "suscripciones";

  const rowTipo = new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder().setCustomId("suscripciones").setLabel("Suscripciones").setStyle(ButtonStyle.Success),
    new ButtonBuilder().setCustomId("bits").setLabel("Bits").setStyle(ButtonStyle.Primary)
  );

  const rowImpuestos = new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder().setCustomId("sinimpuestos").setLabel("Sin impuestos").setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId("sinpercepciones").setLabel("Sin percepciones").setStyle(ButtonStyle.Primary),
    new ButtonBuilder().setCustomId("percepciones").setLabel("Percepciones").setStyle(ButtonStyle.Success)
  );

  const obtenerEmbed = () => {
    if (tipoContenido === "suscripciones") {
      return crearEmbedSuscripciones(tipoImpuesto, valorDolar);
    } else {
      return crearEmbedBits(tipoImpuesto, valorDolar);
    }
  };

  await interaction.editReply({ embeds: [obtenerEmbed()], components: [rowTipo, rowImpuestos] });

  const filter = (i: any) => i.user.id === interaction.user.id;
  const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });

  collector.on("collect", async (i: any) => {
    await i.deferUpdate();

    if (i.customId === "suscripciones") {
      tipoContenido = "suscripciones";
    } else if (i.customId === "bits") {
      tipoContenido = "bits";
    } else if (i.customId === "sinimpuestos") {
      tipoImpuesto = "sin";
    } else if (i.customId === "sinpercepciones") {
      tipoImpuesto = "sinPercepciones";
    } else if (i.customId === "percepciones") {
      tipoImpuesto = "percepciones";
    }

    await i.editReply({ embeds: [obtenerEmbed()], components: [rowTipo, rowImpuestos] });
  });
};

export default twitch;
