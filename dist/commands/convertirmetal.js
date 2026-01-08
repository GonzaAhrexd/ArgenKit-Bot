"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
var currencyFormatter = require('currency-formatter'); //Currency formatter
const formato_1 = require("../functions/formato");
const embedError_1 = require("../functions/embedError");
const metales_valores_1 = __importDefault(require("../variables/metales-valores")); //Divisas
const Divisas_1 = require("../api/Divisas");
const wait = require('node:timers/promises').setTimeout;
module.exports = {
    data: new discord_js_1.default.SlashCommandBuilder()
        .setName('convertirmetal')
        .setDescription('Convierte de un metal a Pesos Argentinos')
        .addSubcommand(subcommand => subcommand.setName('oro')
        .setDescription('Convierte de Oro a Pesos Argentinos')
        .addNumberOption(option => option.setName('xau')
        .setDescription('Monto en onza de Oro').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('plata')
        .setDescription('Convierte de Plata a Pesos Argentinos')
        .addNumberOption(option => option.setName('xag')
        .setDescription('Monto en onza de Plata').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('platino')
        .setDescription('Convierte de Platino a Pesos Argentinos')
        .addNumberOption(option => option.setName('xpt')
        .setDescription('Monto en onza de Platino.').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('paladio')
        .setDescription('Convierte de Paladio a Pesos Argentinos')
        .addNumberOption(option => option.setName('xpd')
        .setDescription('Monto en onza de Paladio').setRequired(true))),
    async run(client, interaction, options) {
        metales_valores_1.default.forEach(async (Metal) => {
            if (interaction.options.getSubcommand() === Metal.id) {
                let convertir = interaction.options.getNumber((Metal.iso).toLowerCase());
                await interaction.deferReply();
                try {
                    const metalData = (await (0, Divisas_1.getAll)()).divisas[Metal.iso];
                    const dolarData = (await (0, Divisas_1.getAll)()).dolar;
                    const embed = new discord_js_1.default.EmbedBuilder()
                        .setTitle(`${Metal.nombre} <:rightarrow:921907270747570247> Peso Argentino`)
                        .setColor(Metal.color)
                        .setDescription(`${Metal.nombre}  expresado en pesos argentinos `)
                        .setThumbnail(Metal.imagen)
                        .addFields({ name: `Monto Original ${Metal.emoji}`, value: `${Metal.iso} ${currencyFormatter.format(convertir, { locale: 'es-ES', code: ' ' })}` }, 
                    //Oficial
                    { name: `${Metal.nombre} a precio del dólar oficial :bank: `, value: `Valor del ${Metal.nombre} a precio del dólar oficial, liquidado por parte del gobierno nacional sujeto a diversos impuestos ` }, { name: "Compra :flag_ar: ", value: `ARS${(0, formato_1.formatoPrecio)(((convertir / metalData)) * dolarData.oficial.value_buy, "ARS")}`, inline: true }, { name: "Venta :flag_ar: ", value: `ARS${(0, formato_1.formatoPrecio)(((convertir / metalData)) * dolarData.oficial.value_sell, "ARS")}`, inline: true });
                    await wait(4000);
                    await interaction.editReply({ embeds: [embed] });
                }
                catch (error) {
                    (0, embedError_1.embedError)(interaction, error);
                }
            }
        });
    }
};
