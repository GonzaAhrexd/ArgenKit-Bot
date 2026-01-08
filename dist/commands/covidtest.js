"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const { generarRandom } = require('../functions/numeroRandom');
module.exports = {
    data: new discord_js_1.default.SlashCommandBuilder()
        .setName("covidtest")
        .setDescription('Te hace un test de covid'),
    async run(client, interaction) {
        let numeroRandom = generarRandom(1, 3);
        const embed = new discord_js_1.default.EmbedBuilder()
            .setColor(numeroRandom === 1 ? "Green" : "Red")
            .setDescription("Calculando...")
            .setThumbnail(numeroRandom === 1 ? "https://cdn.discordapp.com/attachments/802944543510495292/937780157387780116/test-results_1.png" : "https://cdn.discordapp.com/attachments/802944543510495292/937781157196611644/negativotest.png")
            .addFields({ name: "RESULTADOS: ", value: numeroRandom === 1 ? "Positivo (+)" : "NEGATIVO (-)" });
        return interaction.reply({ embeds: [embed] });
    }
};
