"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const { total21 } = require('../../functions/impuestos');
const formato_1 = require("../../functions/formato");
const wait = require('node:timers/promises').setTimeout;
const Divisas_1 = require("../../api/Divisas");
const Valorant = async (client, interaction) => {
    const valorDolar = (await (0, Divisas_1.getDolar)()).oficial.value_sell;
    const embedValorant = new discord_js_1.default.EmbedBuilder();
    embedValorant.setTitle("Valorant");
    embedValorant.setURL("https://playvalorant.com/es-es/");
    embedValorant.setDescription(`Los precios en Valorant en Argentina son los siguientes:`);
    embedValorant.setColor("#FF4454");
    embedValorant.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/f/fc/Valorant_logo_-_pink_color_version_%28cropped%29.png");
    embedValorant.addFields({ name: "475 VP", value: "ARS" + (0, formato_1.formatoPrecio)(total21(valorDolar * 4.99), "ARS"), inline: true }, { name: "1000 VP", value: "ARS" + (0, formato_1.formatoPrecio)(total21(valorDolar * 9.99), "ARS"), inline: true }, { name: "2050 VP", value: "ARS" + (0, formato_1.formatoPrecio)(total21(valorDolar * 19.99), "ARS"), inline: true }, { name: "3650 VP", value: "ARS" + (0, formato_1.formatoPrecio)(total21(valorDolar * 34.99), "ARS"), inline: true }, { name: "5350 VP", value: "ARS" + (0, formato_1.formatoPrecio)(total21(valorDolar * 49.99), "ARS"), inline: true }, { name: "11000 VP", value: "ARS" + (0, formato_1.formatoPrecio)(total21(valorDolar * 99.99), "ARS"), inline: true });
    await wait(3000);
    await interaction.editReply({ embeds: [embedValorant] });
};
exports.default = Valorant;
