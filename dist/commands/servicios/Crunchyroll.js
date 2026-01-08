"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const { total21 } = require("../../functions/impuestos"); //Impuestos
const { formatoPrecio } = require('../../functions/formato');
const crunchyroll = async (client, interaction) => {
    const embed = new discord_js_1.default.EmbedBuilder()
        .setTitle("Crunchyroll")
        .setURL("https://www.crunchyroll.com/es")
        .setColor('#fec105')
        .setDescription("Precio  de Crunchyroll  con impuestos en Argentina ")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903849721699913778/crunchyroll.png")
        .addFields({ name: "Fan (1 MES):", value: "ARS " + formatoPrecio(total21(3499), "ARS"), inline: true }, { name: "Mega Fan (1 Mes):", value: "ARS " + formatoPrecio(total21(4399), "ARS"), inline: true }, { name: "Mega Fan (1 Año):", value: "ARS " + formatoPrecio(total21(43999), "ARS"), inline: true });
    return interaction.reply({ embeds: [embed] });
};
exports.default = crunchyroll;
