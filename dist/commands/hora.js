"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const zonas_valores_1 = __importDefault(require("../variables/zonas-valores"));
module.exports = {
    data: new discord_js_1.default.SlashCommandBuilder()
        .setName('hora')
        .setDescription('Muestra la hora actual de distintos paises')
        .addStringOption(option => option.setName('zona')
        .setDescription('Muestra .')
        .setRequired(true)
        .addChoices({ name: 'Estados Unidos', value: 'usa' }, { name: 'Canadá', value: 'canada' }, { name: 'México', value: 'mexico' }, { name: 'Brasil', value: 'brasil' }, { name: 'Europa', value: 'europa' }, { name: 'Asia', value: 'asia' }, { name: 'Rusia', value: 'rusia' }, { name: 'Centroamérica', value: 'centroamerica' }, { name: 'Sudamérica', value: 'sudamerica' })),
    async run(client, interaction, options) {
        let zona = interaction.options.getString('zona');
        zonas_valores_1.default.forEach(async (lugar) => {
            if (zona == lugar.codigo) {
                const zonasEmbedField = [];
                lugar.zonas.forEach(zonita => {
                    zonasEmbedField.push({ name: zonita.nombre, value: new Date().toLocaleTimeString("es-AR", { timeZone: zonita.codigo, hour: '2-digit', minute: '2-digit' }), inline: true });
                });
                const embed = new discord_js_1.default.EmbedBuilder()
                    .setTitle(`Zonas horarias de ${lugar.nombre}`)
                    .setDescription(`${lugar.nombre} tiene distintas zonas horarias`)
                    .setColor(lugar.color)
                    .setThumbnail('https://cdn.discordapp.com/attachments/802944543510495292/1071523614265970849/clock.png')
                    .addFields(zonasEmbedField);
                return await interaction.reply({ embeds: [embed] });
            }
        });
    }
};
