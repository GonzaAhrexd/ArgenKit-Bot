"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const discord_js_2 = require("discord.js");
const discord_js_3 = require("discord.js");
const formato_1 = require("../functions/formato");
const embedError_1 = require("../functions/embedError");
const criptomonedas_valores_1 = __importDefault(require("../variables/criptomonedas-valores"));
const wait = require('node:timers/promises').setTimeout;
const cripto_1 = require("../api/cripto");
module.exports = {
    data: new discord_js_1.default.SlashCommandBuilder()
        .setName('criptomoneda')
        .setDescription('Muestra los datos de una criptomoneda y su cotización')
        .addSubcommand(subcommand => subcommand.setName('bitcoin')
        .setDescription('Muestra los datos y precio actual del bitcoin')).addSubcommand(subcommand => subcommand.setName('ethereum')
        .setDescription('Muestra los datos y precio actual del ethereum'))
        .addSubcommand(subcommand => subcommand.setName('tether')
        .setDescription('Muestra los datos y precio actual del Tether')).addSubcommand(subcommand => subcommand.setName('axieinfinity')
        .setDescription('Muestra los datos y precio actual del AxieInfinity')).addSubcommand(subcommand => subcommand.setName('decentraland')
        .setDescription('Muestra los datos y precio actual del Decentraland')).addSubcommand(subcommand => subcommand.setName('solana')
        .setDescription('Muestra los datos y precio actual del Solana')).addSubcommand(subcommand => subcommand.setName('dai')
        .setDescription('Muestra los datos y precio actual del Dai')).addSubcommand(subcommand => subcommand.setName('dogecoin')
        .setDescription('Muestra los datos y precio actual del Dogecoin')).addSubcommand(subcommand => subcommand.setName('terraluna')
        .setDescription('Muestra los datos y precio actual del Terra Luna 2.0')).addSubcommand(subcommand => subcommand.setName('litecoin')
        .setDescription('Muestra los datos y precio actual del Litecoin')).addSubcommand(subcommand => subcommand.setName('cardano')
        .setDescription('Muestra los datos y precio actual del Cardano')).addSubcommand(subcommand => subcommand.setName('bnb')
        .setDescription('Muestra los datos y precio actual del Binance Coin')).addSubcommand(subcommand => subcommand.setName('usdcoin')
        .setDescription('Muestra los datos y precio actual del USD Coin')).addSubcommand(subcommand => subcommand.setName('avalanche')
        .setDescription('Muestra los datos y precio actual del Avalanche')).addSubcommand(subcommand => subcommand.setName('polkadot')
        .setDescription('Muestra los datos y precio actual del Polkadot')).addSubcommand(subcommand => subcommand.setName('uniswap')
        .setDescription('Muestra los datos y precio actual del Uniswap')).addSubcommand(subcommand => subcommand.setName('polygon')
        .setDescription('Muestra los datos y precio actual del Matic Network')).addSubcommand(subcommand => subcommand.setName('tron')
        .setDescription('Muestra los datos y precio actual del Tron')),
    async run(client, interaction, options) {
        criptomonedas_valores_1.default.forEach(async (cripto) => {
            if (interaction.options.getSubcommand() === cripto.id) {
                try {
                    const dataCoinGecko = (await (0, cripto_1.getAllCriptoData)(cripto.apicoingecko, cripto.apiCriptoYa)).dataCoingecko;
                    const dataCriptoYa = (await (0, cripto_1.getAllCriptoData)(cripto.apicoingecko, cripto.apiCriptoYa)).dataCriptoYa;
                    const criptodolar = dataCoinGecko.prices;
                    const embed1 = new discord_js_1.default.EmbedBuilder();
                    embed1.setTitle(cripto.nombre)
                        .setColor(cripto.color)
                        .setDescription(cripto.desc)
                        .setThumbnail(cripto.imagen);
                    if (cripto.id === "terraluna") {
                        embed1.addFields({ name: `Precio `, value: `${(0, formato_1.formatoPrecio)(criptodolar, "USD")}`, inline: true }, { name: `Volumen `, value: `${(0, formato_1.formatoPrecio)(((dataCoinGecko.total_volumes)), "USD")}`, inline: true }, { name: `Capitalización `, value: `${(0, formato_1.formatoPrecio)(((dataCoinGecko.market_caps)), "USD")}`, inline: true }, { name: `Compra `, value: `ARS${(0, formato_1.formatoPrecio)(criptodolar * dataCriptoYa.bid, "ARS")}`, inline: true }, { name: `Venta `, value: `ARS${(0, formato_1.formatoPrecio)(criptodolar * dataCriptoYa.ask, "ARS")}`, inline: true });
                    }
                    else {
                        embed1.addFields({ name: `Precio `, value: `${(0, formato_1.formatoPrecio)(criptodolar, "USD")}`, inline: true }, { name: `Volumen `, value: `${(0, formato_1.formatoPrecio)(((dataCoinGecko.total_volumes)), "USD")}`, inline: true }, { name: `Capitalización `, value: `${(0, formato_1.formatoPrecio)(((dataCoinGecko.market_caps)), "USD")}`, inline: true }, { name: `Compra `, value: `ARS${(0, formato_1.formatoPrecio)(dataCriptoYa.bid, "ARS")}`, inline: true }, { name: `Venta `, value: `ARS${(0, formato_1.formatoPrecio)(dataCriptoYa.ask, "ARS")}`, inline: true });
                    }
                    const embed2 = new discord_js_1.default.EmbedBuilder()
                        .setTitle(cripto.nombre)
                        .setColor(cripto.color)
                        .setDescription(cripto.desc)
                        .setThumbnail(cripto.imagen)
                        .addFields({ name: "Lanzamiento inicial", value: cripto.lanzamiento }, { name: "Código ISO", value: cripto.iso, inline: true }, { name: "Símbolo ", value: cripto.simbolo, inline: true }, { name: "Desarrollador ", value: cripto.desarrollador }, { name: "Límite de Emisión  ", value: cripto.limitedeemision });
                    const row = new discord_js_3.ActionRowBuilder()
                        .addComponents(new discord_js_3.ButtonBuilder()
                        .setCustomId("criptodolar")
                        .setLabel("💸 Conversión ")
                        .setStyle(discord_js_2.ButtonStyle.Success))
                        .addComponents(new discord_js_3.ButtonBuilder()
                        .setCustomId("informacion")
                        .setLabel("📋 Información")
                        .setStyle(discord_js_2.ButtonStyle.Primary));
                    await interaction.deferReply();
                    await wait(4000);
                    await interaction.editReply({ embeds: [embed1], components: [row] });
                    client.on('interactionCreate', interaction => {
                        if (!interaction.isButton())
                            return;
                    });
                    const filter = i => i.user.id === interaction.user.id;
                    const collector = interaction.channel.createMessageComponentCollector({ filter, time: 8000 });
                    var actual = embed1;
                    collector.on('collect', async (i) => {
                        if (i.customId === 'criptodolar') {
                            await i.deferUpdate();
                            await i.editReply({ embeds: [embed1], components: [row] });
                            actual = embed1;
                        }
                        if (i.customId === 'informacion') {
                            await i.deferUpdate();
                            await i.editReply({ embeds: [embed2], components: [row] });
                            actual = embed2;
                        }
                    });
                    collector.on("end", (collected, reason) => {
                        if (reason === "time") {
                            interaction.editReply({ embeds: [actual], components: [] });
                        }
                    });
                }
                catch (error) {
                    (0, embedError_1.embedError)(interaction, error);
                }
            }
        });
    }
};
