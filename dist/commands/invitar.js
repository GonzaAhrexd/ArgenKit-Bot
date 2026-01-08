"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
module.exports = {
    data: new discord_js_1.default.SlashCommandBuilder()
        .setName("invitar")
        .setDescription("Invita al bot a unirte a tu servidor"),
    async run(client, interaction) {
        const embed = new discord_js_1.default.EmbedBuilder()
            .setTitle("¡Invita al bot a tu servidor!")
            .setColor('#0a9ee1')
            .setURL("https://discord.com/api/oauth2/authorize?client_id=796173877981216799&permissions=414464867392&scope=bot%20applications.commands")
            .setDescription("¡Gracias por decidir agregar mi bot a tu servidor!")
            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/811043646848630786/argboticon-03.png");
        await interaction.reply({ embeds: [embed] });
    }
};
