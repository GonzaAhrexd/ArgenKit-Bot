"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const discord_js_2 = require("discord.js");
const { total21 } = require("../../functions/impuestos"); //Impuestos
const { formatoPrecio } = require('../../functions/formato');
const Divisas_1 = require("../../api/Divisas");
const steam = async (client, interaction) => {
    const valorDolar = (await (0, Divisas_1.getDolar)()).oficial.value_sell;
    // Función para calcular el precio con o sin IVA
    const calcularPrecio = (usd, conIVA) => {
        const precio = usd * valorDolar;
        return conIVA ? total21(precio) : precio;
    };
    // Función para crear el embed con los valores
    const crearEmbedSteam = (conIVA) => {
        const embed = new discord_js_1.default.EmbedBuilder()
            .setTitle("Fondos de la Cartera de Steam")
            .setURL("https://store.steampowered.com/steamaccount/addfunds")
            .setDescription(conIVA
            ? "Los precios para recargar la cartera de Steam **con IVA** en Argentina son los siguientes:"
            : "Pagando con dólar cripto (AstroPay o Belo) se puede evitar el IVA y pagar a un valor similar al dólar oficial:")
            .setColor('#306fb5')
            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913860761342836786/steam.png");
        const montosUSD = [5, 10, 25, 50, 100];
        embed.addFields(montosUSD.map(monto => ({
            name: `USD$ ${monto.toFixed(2)}`,
            value: `ARS ${formatoPrecio(calcularPrecio(monto, conIVA), "ARS")}`,
            inline: true
        })));
        return embed;
    };
    const embedConIVA = crearEmbedSteam(true);
    const embedSinIVA = crearEmbedSteam(false);
    const row = new discord_js_2.ActionRowBuilder()
        .addComponents(new discord_js_2.ButtonBuilder()
        .setCustomId('coniva')
        .setLabel("Con IVA")
        .setStyle(discord_js_2.ButtonStyle.Success), new discord_js_2.ButtonBuilder()
        .setCustomId('siniva')
        .setLabel("Sin IVA")
        .setStyle(discord_js_2.ButtonStyle.Primary));
    await interaction.editReply({ embeds: [embedConIVA], components: [row] });
    const collector = interaction.channel.createMessageComponentCollector({
        filter: i => ['coniva', 'siniva'].includes(i.customId),
        time: 15000,
    });
    collector.on('collect', async (i) => {
        await i.deferUpdate();
        if (i.customId === 'coniva') {
            await i.editReply({ embeds: [crearEmbedSteam(true)], components: [row] });
        }
        if (i.customId === 'siniva') {
            await i.editReply({ embeds: [crearEmbedSteam(false)], components: [row] });
        }
    });
};
exports.default = steam;
