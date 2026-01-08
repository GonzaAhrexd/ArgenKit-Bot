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
const { total51, total21 } = require("../../functions/impuestos"); //Impuestos
const { formatoPrecio } = require("../../functions/formato");
const crearEmbed = (conPercepciones) => {
    const calcular = conPercepciones ? total51 : total21;
    const descripcion = conPercepciones
        ? "Los precios de Netflix con impuestos **y percepciones** en Argentina son los siguientes:"
        : "Los precios de Netflix con impuestos **sin percepciones** en Argentina son los siguientes:";
    return new discord_js_1.default.EmbedBuilder()
        .setTitle("Netflix")
        .setURL("https://www.netflix.com/ar/")
        .setDescription(descripcion)
        .setColor("#9a0611")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1180334885953609810/netflix.png?ex=657d0b86&is=656a9686&hm=711e7fc4fb8376b9efed01f54bc53c131331ae4d611e773840537a3f0d8925d3&")
        .addFields({ name: "Básico:", value: "ARS" + formatoPrecio(calcular(8999), "ARS"), inline: true }, { name: "Estándar:", value: "ARS" + formatoPrecio(calcular(14999), "ARS"), inline: true }, { name: "Premium:", value: "ARS" + formatoPrecio(calcular(19999), "ARS"), inline: true }, { name: "Casa extra:", value: "ARS" + formatoPrecio(calcular(4299), "ARS"), inline: true });
};
const netflix = async (client, interaction) => {
    const row = new discord_js_1.ActionRowBuilder().addComponents(new discord_js_1.ButtonBuilder().setCustomId("sinpercepciones").setLabel("Sin percepciones").setStyle(discord_js_1.ButtonStyle.Primary), new discord_js_1.ButtonBuilder().setCustomId("percepciones").setLabel("Percepciones").setStyle(discord_js_1.ButtonStyle.Success));
    // Embed inicial sin percepciones
    await interaction.editReply({ embeds: [crearEmbed(false)], components: [row] });
    const filter = (i) => i.user.id === interaction.user.id; // solo el usuario que ejecuta
    const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });
    collector.on("collect", async (i) => {
        await i.deferUpdate();
        if (i.customId === "percepciones") {
            await i.editReply({ embeds: [crearEmbed(true)], components: [row] });
        }
        else if (i.customId === "sinpercepciones") {
            await i.editReply({ embeds: [crearEmbed(false)], components: [row] });
        }
    });
};
exports.default = netflix;
