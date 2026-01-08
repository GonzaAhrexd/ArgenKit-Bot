"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
module.exports = {
    data: new discord_js_1.default.SlashCommandBuilder()
        .setName("servidor")
        .setDescription("¡Unete al servidor oficial del bot!"),
    async run(client, interaction) {
        const embed = new discord_js_1.default.EmbedBuilder()
            .setTitle("¡Unete al servidor oficial de Argenkit Bot!")
            .setURL("https://discord.gg/68jsHeTRYa")
            .setColor('#0a9ee1')
            .setDescription("¡Puedes unirte al servidor oficial de Argenkit bot para aportar ideas o dar reportes de bugs! ¡O simplemente hablar con otras personas! ")
            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/811043646848630786/argboticon-03.png");
        await interaction.reply({ embeds: [embed] });
    }
};
