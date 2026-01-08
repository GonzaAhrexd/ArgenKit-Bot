"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const { generarRandom } = require('../functions/numeroRandom');
const respuestas_8ball_valores_1 = __importDefault(require("../variables/respuestas-8ball-valores"));
module.exports = {
    data: new discord_js_1.default.SlashCommandBuilder()
        .setName('8ball')
        .setDescription('Pregúntale a la bola mágica 8')
        .addStringOption(option => option.setName('consulta')
        .setDescription('Consulta a realizar.')
        .setRequired(true)),
    async run(client, interaction, options) {
        const consulta = interaction.options.getString('consulta');
        const valorAleatorio = generarRandom(0, 29);
        respuestas_8ball_valores_1.default.forEach(async (Respuesta) => {
            if (valorAleatorio == Respuesta.opcion) {
                const embed = new discord_js_1.default.EmbedBuilder()
                    .setColor(Respuesta.color)
                    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1176940238657040405/8-ball.png?ex=6570b203&is=655e3d03&hm=fa237fa24acd064df581b2b11c63659ca70644ae64efb5c684209f74b1b73b9b&")
                    .setDescription("Calculando...")
                    .addFields({ name: 'Consulta:', value: consulta }, { name: 'La bola 8 mágica dice...', value: Respuesta.respuesta });
                return await interaction.reply({ embeds: [embed] });
            }
        });
    }
};
