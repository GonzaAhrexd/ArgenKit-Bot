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
const Divisas_1 = require("../../api/Divisas");
const { total21, total51 } = require("../../functions/impuestos"); // Impuestos
const { formatoPrecio } = require("../../functions/formato");
const crearEmbed = (conPercepciones, precioARS) => {
    const calcular = conPercepciones ? total51 : total21;
    const descripcion = conPercepciones
        ? "Los precios de Apple TV+ en Argentina con impuestos **y percepciones** son los siguientes:"
        : "Los precios de Apple TV+ en Argentina con impuestos **sin percepciones** son los siguientes:";
    return new discord_js_1.default.EmbedBuilder()
        .setTitle("Apple TV+")
        .setURL("https://www.apple.com/la/tv/")
        .setDescription(descripcion)
        .setColor("#eeeeee")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913852356771319928/televisor_1.png")
        .addFields({
        name: "Costo mensual (USD 6.99)",
        value: `ARS${formatoPrecio(calcular(precioARS), "ARS")}`,
        inline: true,
    });
};
const appletv = async (client, interaction) => {
    // Traer cotización oficial
    const valorDolar = (await (0, Divisas_1.getDolar)()).oficial.value_sell;
    const precioARS = 6.99 * valorDolar; // USD * valor oficial
    const row = new discord_js_1.ActionRowBuilder().addComponents(new discord_js_1.ButtonBuilder()
        .setCustomId("sinpercepciones")
        .setLabel("Sin percepciones")
        .setStyle(discord_js_1.ButtonStyle.Primary), new discord_js_1.ButtonBuilder()
        .setCustomId("percepciones")
        .setLabel("Percepciones")
        .setStyle(discord_js_1.ButtonStyle.Success));
    // Embed inicial (sin percepciones)
    await interaction.editReply({ embeds: [crearEmbed(false, precioARS)], components: [row] });
    const filter = (i) => i.user.id === interaction.user.id;
    const collector = interaction.channel?.createMessageComponentCollector({
        filter,
        time: 15000,
    });
    collector?.on("collect", async (i) => {
        await i.deferUpdate();
        if (i.customId === "percepciones") {
            await i.editReply({ embeds: [crearEmbed(true, precioARS)], components: [row] });
        }
        else if (i.customId === "sinpercepciones") {
            await i.editReply({ embeds: [crearEmbed(false, precioARS)], components: [row] });
        }
    });
};
exports.default = appletv;
