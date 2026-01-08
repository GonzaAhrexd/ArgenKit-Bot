"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// DiscordJS
const discord_js_1 = __importDefault(require("discord.js"));
// Funciones
const { diasHasta } = require('../functions/diasHasta');
// Variables
const partidos_valores_1 = __importDefault(require("../variables/partidos-valores"));
module.exports = {
    data: new discord_js_1.default.SlashCommandBuilder()
        .setName("futbol")
        .setDescription("Muestra cuántos días faltan para  los siguientes partidos de la selección"),
    async run(client, interaction) {
        const fields = partidos_valores_1.default
            .filter(partido => new Date(partido.fecha) > new Date())
            .map(partido => ({
            name: `:flag_ar: vs ${partido.rival} \n(${partido.fecha})`,
            value: `Faltan ${diasHasta(new Date(partido.fecha))} días`,
            inline: true
        }));
        console.log(fields);
        const embed = new discord_js_1.default.EmbedBuilder()
            .setTitle("Tiempo hasta los siguientes partidos de la selección Argentina")
            .setColor("#7eb2fa")
            .setDescription("Tiempo hasta los siguientes partidos de la selección Argentina")
            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929121012275093524/camiseta-de-futbol.png")
            .addFields(fields);
        return interaction.reply({ embeds: [embed] });
    }
};
