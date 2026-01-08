"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const discord_js_2 = require("discord.js");
const Divisas_1 = require("../../api/Divisas");
const { total51, total21 } = require("../../functions/impuestos"); //Impuestos
const { formatoPrecio } = require("../../functions/formato");
const crearEmbedSuscripciones = (tipoImpuesto, valorDolar) => {
    let calcular;
    let descripcion;
    if (tipoImpuesto === "sin") {
        calcular = (valor) => valor;
        descripcion = "Los precios de las suscripciones a Twitch **sin impuestos** en Argentina son los siguientes:";
    }
    else if (tipoImpuesto === "sinPercepciones") {
        calcular = total21;
        descripcion = "Los precios de las suscripciones a Twitch con impuestos **sin percepciones** en Argentina son los siguientes:";
    }
    else {
        calcular = total51;
        descripcion = "Los precios de las suscripciones a Twitch con impuestos **y percepciones** en Argentina son los siguientes:";
    }
    return new discord_js_1.default.EmbedBuilder()
        .setTitle("Suscripciones de Twitch")
        .setURL("https://www.twitch.tv/")
        .setDescription(descripcion)
        .setColor("#9246ff")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858126355091030036/twitch_icon_146081.png")
        .addFields({ name: "Suscripción de nivel 1", value: `ARS$ ${formatoPrecio(calcular(1.99 * valorDolar), "ARS")}`, inline: true }, { name: "Suscripción de nivel 2", value: `ARS$ ${formatoPrecio(calcular(3.99 * valorDolar), "ARS")}`, inline: true }, { name: "Suscripción de nivel 3", value: `ARS$ ${formatoPrecio(calcular(9.99 * valorDolar), "ARS")}`, inline: true });
};
const crearEmbedBits = (tipoImpuesto, valorDolar) => {
    let calcular;
    let descripcion;
    if (tipoImpuesto === "sin") {
        calcular = (valor) => valor;
        descripcion = "Los precios de los bits de Twitch **sin impuestos** en Argentina son los siguientes:";
    }
    else if (tipoImpuesto === "sinPercepciones") {
        calcular = total21;
        descripcion = "Los precios de los bits de Twitch con impuestos **sin percepciones** en Argentina son los siguientes:";
    }
    else {
        calcular = total51;
        descripcion = "Los precios de los bits de Twitch con impuestos **y percepciones** en Argentina son los siguientes:";
    }
    return new discord_js_1.default.EmbedBuilder()
        .setTitle("Bits de Twitch")
        .setDescription(descripcion)
        .setColor("#9246ff")
        .setURL("https://www.twitch.tv/")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858126355091030036/twitch_icon_146081.png")
        .addFields({ name: "100 bits", value: `ARS$ ${formatoPrecio(calcular(1.40 * valorDolar), "ARS")}`, inline: true }, { name: "300 bits", value: `ARS$ ${formatoPrecio(calcular(3.00 * valorDolar), "ARS")}`, inline: true }, { name: "500 bits", value: `ARS$ ${formatoPrecio(calcular(7.00 * valorDolar), "ARS")}`, inline: true }, { name: "1.500 bits", value: `ARS$ ${formatoPrecio(calcular(19.95 * valorDolar), "ARS")}`, inline: true }, { name: "5.000 bits", value: `ARS$ ${formatoPrecio(calcular(64.40 * valorDolar), "ARS")}`, inline: true }, { name: "10.000 bits", value: `ARS$ ${formatoPrecio(calcular(126.00 * valorDolar), "ARS")}`, inline: true }, { name: "25.000 bits", value: `ARS$ ${formatoPrecio(calcular(308.00 * valorDolar), "ARS")}`, inline: true });
};
const twitch = async (client, interaction) => {
    const valorDolar = (await (0, Divisas_1.getDolar)()).oficial.value_sell;
    let tipoImpuesto = "sinPercepciones";
    let tipoContenido = "suscripciones";
    const rowTipo = new discord_js_2.ActionRowBuilder().addComponents(new discord_js_2.ButtonBuilder().setCustomId("suscripciones").setLabel("Suscripciones").setStyle(discord_js_2.ButtonStyle.Success), new discord_js_2.ButtonBuilder().setCustomId("bits").setLabel("Bits").setStyle(discord_js_2.ButtonStyle.Primary));
    const rowImpuestos = new discord_js_2.ActionRowBuilder().addComponents(new discord_js_2.ButtonBuilder().setCustomId("sinimpuestos").setLabel("Sin impuestos").setStyle(discord_js_2.ButtonStyle.Secondary), new discord_js_2.ButtonBuilder().setCustomId("sinpercepciones").setLabel("Sin percepciones").setStyle(discord_js_2.ButtonStyle.Primary), new discord_js_2.ButtonBuilder().setCustomId("percepciones").setLabel("Percepciones").setStyle(discord_js_2.ButtonStyle.Success));
    const obtenerEmbed = () => {
        if (tipoContenido === "suscripciones") {
            return crearEmbedSuscripciones(tipoImpuesto, valorDolar);
        }
        else {
            return crearEmbedBits(tipoImpuesto, valorDolar);
        }
    };
    await interaction.editReply({ embeds: [obtenerEmbed()], components: [rowTipo, rowImpuestos] });
    const filter = (i) => i.user.id === interaction.user.id;
    const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });
    collector.on("collect", async (i) => {
        await i.deferUpdate();
        if (i.customId === "suscripciones") {
            tipoContenido = "suscripciones";
        }
        else if (i.customId === "bits") {
            tipoContenido = "bits";
        }
        else if (i.customId === "sinimpuestos") {
            tipoImpuesto = "sin";
        }
        else if (i.customId === "sinpercepciones") {
            tipoImpuesto = "sinPercepciones";
        }
        else if (i.customId === "percepciones") {
            tipoImpuesto = "percepciones";
        }
        await i.editReply({ embeds: [obtenerEmbed()], components: [rowTipo, rowImpuestos] });
    });
};
exports.default = twitch;
