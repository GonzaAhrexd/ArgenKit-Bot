"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const { total21 } = require("../../functions/impuestos"); //Impuestos
const { formatoPrecio } = require('../../functions/formato');
const gamepass = async (client, interaction) => {
    const embed = new discord_js_1.default.EmbedBuilder()
        .setTitle("Xbox Game Pass")
        .setURL("https://www.xbox.com/es-AR/xbox-game-pass")
        .setDescription("Los precios de Xbox Game Pass con impuestos en Argentina son los siguientes: ")
        .setColor('#a6ed75')
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903853195443445770/xbox.png")
        .addFields({ name: "Xbox Game Pass Essential", value: "ARS" + formatoPrecio((total21(8999.99)), "ARS"), inline: true }, { name: "Xbox Game Pass Premium", value: "ARS" + formatoPrecio((total21(11999.99)), "ARS"), inline: true }, { name: "Xbox Game Pass Ultimate", value: "ARS" + formatoPrecio((total21(24999.00)), "ARS"), inline: true });
    return interaction.reply({ embeds: [embed] });
};
exports.default = gamepass;
