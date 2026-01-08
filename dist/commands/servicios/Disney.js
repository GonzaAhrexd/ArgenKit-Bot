"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const { formatoPrecio } = require('../../functions/formato');
const disney = async (client, interaction) => {
    const embed = new discord_js_1.default.EmbedBuilder()
        .setTitle("Disney+")
        .setURL("https://www.disneyplus.com/home")
        .setDescription("Debido a que Disney factura en Argentina, este no cobra impuestos internacionales.")
        .setColor('#3fa5dc')
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903852192929288213/icons8-disney-plus-480.png")
        .addFields({ name: "Estándar con anuncios:", value: `ARS ${formatoPrecio(9999, "ARS")}`, inline: true }, { name: "Miembro Extra Estándar con anuncios", value: `ARS ${formatoPrecio(6999, "ARS")}`, inline: true }, { name: "Estándar:", value: `ARS ${formatoPrecio(12299, "ARS")}`, inline: true }, { name: "Estándar Anual", value: `ARS ${formatoPrecio(103299, "ARS")}`, inline: true }, { name: "Miembro Extra Estándar ", value: `ARS ${formatoPrecio(7399, "ARS")}`, inline: true }, { name: "Premium: ", value: `ARS ${formatoPrecio(18399, "ARS")}`, inline: true }, { name: "Premium Anual: ", value: `ARS ${formatoPrecio(154499, "ARS")}`, inline: true }, { name: "Miembro Extra Premium", value: `ARS ${formatoPrecio(9200, "ARS")}`, inline: true });
    return interaction.reply({ embeds: [embed] });
};
exports.default = disney;
