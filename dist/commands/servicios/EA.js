"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const discord_js_2 = require("discord.js");
const Divisas_1 = require("../../api/Divisas");
const { total21 } = require("../../functions/impuestos"); //Impuestos
const { formatoPrecio } = require('../../functions/formato');
const EA = async (client, interaction) => {
    const valorDolar = (await (0, Divisas_1.getDolar)()).oficial.value_sell;
    // Función para calcular el precio con o sin IVA
    const calcularPrecio = (usd, conIVA) => {
        const precio = usd * valorDolar;
        return conIVA ? total21(precio) : precio;
    };
    // Función para crear el embed de EA Play
    const crearEmbedEA = (conIVA) => {
        const embed = new discord_js_1.default.EmbedBuilder()
            .setTitle("EA Play")
            .setURL("https://store.steampowered.com/subscriptions/ea?l=latam")
            .setDescription(conIVA
            ? "Los precios de EA Play **con IVA** en Argentina son los siguientes:"
            : "Los precios de EA Play **sin IVA** en Argentina son los siguientes:")
            .setColor('#fe4747')
            .setThumbnail("https://media.contentapi.ea.com/content/dam/eacom/es-mx/common/october-ea-ring.png")
            .addFields({
            name: "EA Play Mensual",
            value: `ARS ${formatoPrecio(calcularPrecio(4.99, conIVA), "ARS")}`,
            inline: true
        }, {
            name: "EA Play Anual",
            value: `ARS ${formatoPrecio(calcularPrecio(29.99, conIVA), "ARS")}`,
            inline: true
        });
        return embed;
    };
    const embedConIVA = crearEmbedEA(true);
    const row = new discord_js_2.ActionRowBuilder()
        .addComponents(new discord_js_2.ButtonBuilder()
        .setCustomId('coniva_ea')
        .setLabel("Con IVA")
        .setStyle(discord_js_2.ButtonStyle.Success), new discord_js_2.ButtonBuilder()
        .setCustomId('siniva_ea')
        .setLabel("Sin IVA")
        .setStyle(discord_js_2.ButtonStyle.Primary));
    await interaction.editReply({ embeds: [embedConIVA], components: [row] });
    const collector = interaction.channel.createMessageComponentCollector({
        filter: i => ['coniva_ea', 'siniva_ea'].includes(i.customId),
        time: 15000,
    });
    collector.on('collect', async (i) => {
        await i.deferUpdate();
        const conIVA = i.customId === 'coniva_ea';
        await i.editReply({ embeds: [crearEmbedEA(conIVA)], components: [row] });
    });
};
exports.default = EA;
