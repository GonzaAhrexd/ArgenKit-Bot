"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const { formatoPrecio } = require('../../functions/formato');
const paramount = async (client, interaction) => {
    const embed = new discord_js_1.default.EmbedBuilder()
        .setTitle("Paramount+")
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Paramount_Plus.svg/1920px-Paramount_Plus.svg.png")
        .setURL("https://www.paramountplus.com/ar/")
        .setDescription("Los precios de Paramount+ en Argentina con impuestos son los siguientes: ")
        .setColor('#0b67ff')
        .addFields({ name: "Plan  mensual ", value: `ARS${formatoPrecio(1599, "ARS")}` });
    return interaction.reply({ embeds: [embed] });
};
exports.default = paramount;
