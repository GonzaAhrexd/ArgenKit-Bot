"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const { formatoNum } = require("../functions/formato");
module.exports = {
    data: new discord_js_1.default.SlashCommandBuilder()
        .setName('anualizarinflacion')
        .setDescription('Calcula la inflación anual a partir de la mensual')
        .addNumberOption(option => option.setName('mensual')
        .setDescription('Inflación mensual a anualizar  sin el símbolo de %.')
        .setRequired(true)),
    async run(client, interaction, options) {
        const mensual = interaction.options.getNumber('mensual');
        const anualizado = (((mensual / 100) + 1) ** 12 - 1) * 100;
        const embed = new discord_js_1.default.EmbedBuilder()
            .setTitle("Inflación mensual anualizada")
            .setDescription("La economía tiene un resago de 18 a 24 meses.")
            .setColor("#f82f40")
            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1176940661476438077/inflation.png?ex=6570b268&is=655e3d68&hm=8158c1d52bff25b6a78cf72b991a27c96a599b95bb3cd229012c31379da38e02&")
            .addFields({ name: 'Inflación mensual:', value: `${formatoNum(mensual)}%` }, { name: 'Inflación anual', value: `${formatoNum(anualizado)}%` });
        return await interaction.reply({ embeds: [embed] });
    }
};
