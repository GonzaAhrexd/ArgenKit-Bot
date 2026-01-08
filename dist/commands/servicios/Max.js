"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importStar(require("discord.js"));
const { total21, total51 } = require("../../functions/impuestos"); // Impuestos
const { formatoPrecio } = require("../../functions/formato");
const crearEmbed = (conPercepciones) => {
    const calcular = conPercepciones ? total51 : total21;
    const descripcion = conPercepciones
        ? "Precios de HBO Max en Argentina con impuestos **y percepciones**:"
        : "Precios de HBO Max en Argentina con impuestos **sin percepciones**:";
    return new discord_js_1.default.EmbedBuilder()
        .setTitle("MAX")
        .setURL("https://www.max.com/ar/es")
        .setDescription(descripcion)
        .setColor("#0422CB")
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Max_logo.svg/2560px-Max_logo.svg.png")
        .addFields(
    // Mensual
    { name: "Suscripción mensual básico con anuncios", value: `ARS${formatoPrecio(calcular(6490), "ARS")}`, inline: true }, { name: "Suscripción mensual estándar", value: `ARS${formatoPrecio(calcular(8390), "ARS")}`, inline: true }, { name: "Suscripción mensual platino", value: `ARS${formatoPrecio(calcular(10090), "ARS")}`, inline: true }, 
    // Anual
    { name: "Suscripción anual básico con anuncios", value: `ARS${formatoPrecio(calcular(56590), "ARS")}`, inline: true }, { name: "Suscripción anual estándar", value: `ARS${formatoPrecio(calcular(70590), "ARS")}`, inline: true }, { name: "Suscripción anual platino", value: `ARS${formatoPrecio(calcular(84090), "ARS")}`, inline: true });
};
const max = async (client, interaction) => {
    const row = new discord_js_1.ActionRowBuilder().addComponents(new discord_js_1.ButtonBuilder()
        .setCustomId("sinpercepciones")
        .setLabel("Sin percepciones")
        .setStyle(discord_js_1.ButtonStyle.Primary), new discord_js_1.ButtonBuilder()
        .setCustomId("percepciones")
        .setLabel("Percepciones")
        .setStyle(discord_js_1.ButtonStyle.Success));
    // Embed inicial (sin percepciones)
    await interaction.editReply({ embeds: [crearEmbed(false)], components: [row] });
    const filter = (i) => i.user.id === interaction.user.id;
    const collector = interaction.channel?.createMessageComponentCollector({
        filter,
        time: 15000,
    });
    collector?.on("collect", async (i) => {
        await i.deferUpdate();
        if (i.customId === "percepciones") {
            await i.editReply({ embeds: [crearEmbed(true)], components: [row] });
        }
        else if (i.customId === "sinpercepciones") {
            await i.editReply({ embeds: [crearEmbed(false)], components: [row] });
        }
    });
};
exports.default = max;
