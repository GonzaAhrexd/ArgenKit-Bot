"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const embedError_1 = require("../functions/embedError");
const criptomonedas_valores_1 = __importDefault(require("../variables/criptomonedas-valores"));
const cripto_1 = require("../api/cripto");
const wait = require('node:timers/promises').setTimeout;
module.exports = {
    data: new discord_js_1.default.SlashCommandBuilder()
        .setName('pesoacripto')
        .setDescription('Convierte de Pesos Argentinos a Criptomonedas')
        .addSubcommand(subcommand => subcommand.setName('bitcoin')
        .setDescription('Convierte de Pesos Argentinos a Bitcoin.')
        .addNumberOption(option => option.setName('ars').setDescription('Monto en Pesos Argentinos.').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('ethereum')
        .setDescription('Convierte de Pesos Argentinos a Ethereum.')
        .addNumberOption(option => option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('tether')
        .setDescription('Convierte de Pesos Argentinos a Tether.')
        .addNumberOption(option => option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('axieinfinity')
        .setDescription('Convierte de Pesos Argentinos a Axie Infinity.')
        .addNumberOption(option => option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('decentraland')
        .setDescription('Convierte de Pesos Argentinos a Decentraland.')
        .addNumberOption(option => option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('solana')
        .setDescription('Convierte de Pesos Argentinos a Solana.')
        .addNumberOption(option => option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('dai')
        .setDescription('Convierte de Pesos Argentinos a Dai.')
        .addNumberOption(option => option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('dogecoin')
        .setDescription('Convierte de Pesos Argentinos a Solana')
        .addNumberOption(option => option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('terraluna')
        .setDescription('Convierte de Pesos Argentinos a Terraluna 2.0.')
        .addNumberOption(option => option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('litecoin')
        .setDescription('Convierte de Pesos Argentinos a Litecoin.')
        .addNumberOption(option => option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('cardano')
        .setDescription('Convierte de Pesos Argentinos a Cardano.')
        .addNumberOption(option => option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('bnb')
        .setDescription('Convierte de Pesos Argentinos a Binance Coin.')
        .addNumberOption(option => option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('usdcoin')
        .setDescription('Convierte de Pesos Argentinos a USD Coin.')
        .addNumberOption(option => option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('avalanche')
        .setDescription('Convierte de Pesos Argentinos a Avalanche.')
        .addNumberOption(option => option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('polkadot')
        .setDescription('Convierte de Pesos Argentinos a Polkadot.')
        .addNumberOption(option => option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('uniswap')
        .setDescription('Convierte de Pesos Argentinos a Uniswap.')
        .addNumberOption(option => option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('polygon')
        .setDescription('Convierte de Pesos Argentinos a Polygon.')
        .addNumberOption(option => option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('tron')
        .setDescription('Convierte de Pesos Argentinos a Tron.')
        .addNumberOption(option => option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true))),
    async run(client, interaction, options) {
        criptomonedas_valores_1.default.forEach(async (cripto) => {
            if (interaction.options.getSubcommand() === cripto.id) {
                let convertir = interaction.options.getNumber('ars');
                await interaction.deferReply();
                try {
                    const dataCoinGecko = (await (0, cripto_1.getAllCriptoData)(cripto.apicoingecko, cripto.apiCriptoYa)).dataCoingecko;
                    const dataCriptoYa = (await (0, cripto_1.getAllCriptoData)(cripto.apicoingecko, cripto.apiCriptoYa)).dataCriptoYa;
                    const criptodolar = dataCoinGecko.prices;
                    const embed = new discord_js_1.default.EmbedBuilder()
                        .setTitle(`Peso Argentino <:rightarrow:921907270747570247> ${cripto.nombre}`)
                        .setColor(cripto.color)
                        .setDescription(`Pesos argentinos expresado en ${cripto.nombre} a la cotización del mercado`)
                        .setThumbnail(cripto.imagen)
                        .addFields({ name: `Monto original :flag_ar: `, value: `ARS$ ${convertir} ` }, { name: "Compra :flag_ar: ", value: `${cripto.simbolo}` + ' ' + (cripto.id === "terraluna" ? ((convertir / criptodolar / dataCriptoYa.bid).toFixed(8)) : ((convertir / dataCriptoYa.bid).toFixed(8))), inline: true }, { name: "Venta :flag_ar: ", value: `${cripto.simbolo}` + ' ' + (cripto.id === "terraluna" ? ((convertir / criptodolar / dataCriptoYa.ask).toFixed(8)) : ((convertir / dataCriptoYa.ask).toFixed(8))), inline: true });
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
