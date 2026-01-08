"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
module.exports = {
    data: new discord_js_1.default.SlashCommandBuilder()
        .setName("votar")
        .setDescription("Vota al bot en top.gg"),
    async run(client, interaction) {
        const embed = new discord_js_1.default.EmbedBuilder()
            .setTitle("¡Apoya al bot votando en top.gg!")
            .setURL("https://top.gg/bot/796173877981216799")
            .setColor('#7289d9')
            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/919023182269280266/logoinverted.png")
            .setDescription("¡Votar al bot en top.gg es otra forma de mostrar tu apoyo al bot!");
        return await interaction.reply({ embeds: [embed] });
    }
};
