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
        ? "El precio de Prime Video con impuestos **y percepciones** en Argentina es el siguiente:"
        : "El precio de Prime Video con impuestos **sin percepciones** en Argentina es el siguiente:";
    return new discord_js_1.default.EmbedBuilder()
        .setTitle("Prime Video")
        .setURL("https://www.primevideo.com/")
        .setDescription(descripcion)
        .setColor("#1aa6e0")
        .setThumbnail("https://images.squarespace-cdn.com/content/v1/5dcd9a119133c421eadd4e73/1574287053801-RG0293YPJNWPKOV77KXW/ke17ZwdGBToddI8pDm48kPJXHKy2-mnvrsdpGQjlhod7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmrMDYraMJMCQwFxTSOIP7LpSBEQpA-g5k6VTjWbSuadHJq0dp98hg5AZvIaPb3DoM/Prime+Video+Icon.png")
        .addFields({ name: "Costo mensual", value: "ARS" + formatoPrecio(calcular(6499), "ARS") });
};
const primevideo = async (client, interaction) => {
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
exports.default = primevideo;
