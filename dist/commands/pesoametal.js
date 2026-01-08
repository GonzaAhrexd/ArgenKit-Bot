"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const embedError_1 = require("../functions/embedError");
var currencyFormatter = require('currency-formatter'); //Currency formatter
const wait = require('node:timers/promises').setTimeout;
const metales_valores_1 = __importDefault(require("../variables/metales-valores"));
const Divisas_1 = require("../api/Divisas");
module.exports = {
    data: new discord_js_1.default.SlashCommandBuilder()
        .setName('pesoametal')
        .setDescription('Convierte de Pesos Argentinos a un metal')
        .addSubcommand(subcommand => subcommand.setName('oro')
        .setDescription('Convierte de Pesos Argentinos a Oro')
        .addNumberOption(option => option.setName('ars')
        .setDescription('Monto en Pesos Argentinos').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('plata')
        .setDescription('Convierte de Pesos Argentinos a Plata')
        .addNumberOption(option => option.setName('ars')
        .setDescription('Monto en Pesos Argentinos').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('platino')
        .setDescription('Convierte de Pesos Argentinos a Platino')
        .addNumberOption(option => option.setName('ars')
        .setDescription('Monto en Pesos Argentinos.').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('paladio')
        .setDescription('Convierte de Pesos Argentinos a Paladio')
        .addNumberOption(option => option.setName('ars')
        .setDescription('Monto en Pesos Argentinos').setRequired(true))),
    async run(client, interaction, options) {
        metales_valores_1.default.forEach(async (Metal) => {
            if (interaction.options.getSubcommand() === Metal.id) {
                let convertir = interaction.options.getNumber('ars');
                await interaction.deferReply();
                try {
                    const metalData = (await (0, Divisas_1.getAll)()).divisas[Metal.iso];
                    const dolarData = (await (0, Divisas_1.getAll)()).dolar;
                    const embed = new discord_js_1.default.EmbedBuilder()
                        .setTitle(` Peso Argentino <:rightarrow:921907270747570247> ${Metal.nombre}`)
                        .setColor(Metal.color)
                        .setDescription(`Pesos Argentinos expresado en ${Metal.nombre} `)
                        .setThumbnail(Metal.imagen)
                        .addFields({ name: `Monto Original :flag_ar:`, value: `ARS$ ` + currencyFormatter.format(convertir, { locale: 'es-ES', code: ' ' }), inline: false }, { name: `Compra ${Metal.emoji} `, value: `${Metal.iso} ` + currencyFormatter.format(((convertir * metalData)) / dolarData.oficial.value_buy, { locale: 'es-ES', code: ' ', precision: 8 }), inline: true }, { name: `Venta ${Metal.emoji} `, value: `${Metal.iso} ` + currencyFormatter.format(((convertir * metalData) / dolarData.oficial.value_sell), { locale: 'es-ES', code: ' ', precision: 8 }), inline: true });
                    await wait(3000);
                    await interaction.editReply({ embeds: [embed] });
                }
                catch (error) {
                    (0, embedError_1.embedError)(interaction, error);
                }
            }
        });
    }
};
