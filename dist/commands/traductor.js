"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const translate_1 = __importDefault(require("translate")); //Translate
module.exports = {
    data: new discord_js_1.default.SlashCommandBuilder()
        .setName('traducir')
        .setDescription('Traduce rápidamente de un idioma a otro')
        .addStringOption(option => option.setName('origen')
        .setDescription('Idioma del texto ingresado.')
        .setRequired(true)
        .addChoices({ name: 'Español', value: 'es' }, { name: 'Inglés', value: 'en' }, { name: 'Portugués', value: 'pt' }, { name: 'Francés', value: 'fr' }, { name: 'Italiano', value: 'it' }, { name: 'Alemán', value: 'de' }, { name: 'Japonés', value: 'ja' }))
        .addStringOption(option => option.setName('destino')
        .setDescription('Idioma al que se desea traducir.')
        .setRequired(true)
        .addChoices({ name: 'Español', value: 'es' }, { name: 'Inglés', value: 'en' }, { name: 'Portugués', value: 'pt' }, { name: 'Francés', value: 'fr' }, { name: 'Italiano', value: 'it' }, { name: 'Alemán', value: 'de' }, { name: 'Japonés', value: 'ja' }))
        .addStringOption(option => option.setName('texto')
        .setDescription('Texto a traducir.')
        .setRequired(true)),
    async run(client, interaction, options) {
        const texto = await interaction.options.getString('texto');
        const origen = await interaction.options.getString('origen');
        const destino = await interaction.options.getString('destino');
        const textoTraducido = await (0, translate_1.default)(texto, { from: origen, to: destino });
        const embed1 = new discord_js_1.default.EmbedBuilder()
            .setTitle("Traducción")
            .setColor("#ff9e53")
            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1041196755670274058/translate.png")
            .addFields({ name: "Texto Original", value: texto }, { name: "Texto traducido", value: textoTraducido });
        return await interaction.reply({ embeds: [embed1] });
    }
};
