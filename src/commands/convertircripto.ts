
// DiscordJS
import Discord from "discord.js"
// Node
const wait = require('node:timers/promises').setTimeout
// Funciones
import { formatoPrecio } from '../functions/formato'
import { embedError } from "../functions/embedError"
// Constantes
import Criptomonedas from "../variables/criptomonedas-valores"
import { getAllCriptoData } from "../api/cripto"

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('convertircripto')
        .setDescription('Convierte de Criptomonedas a Pesos Argentinos')
        .addSubcommand(subcommand =>
            subcommand.setName('bitcoin')
                .setDescription('Convierte de Bitcoin a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('btc').setDescription('Monto en Bitcoins.').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('ethereum')
                .setDescription('Convierte de Ethereum a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('eth').setDescription('Monto en Ethereum.').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('tether')
                .setDescription('Convierte de Tether a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('usdt').setDescription('Monto en Tether.').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('axieinfinity')
                .setDescription('Convierte de Axie Infinity a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('axs').setDescription('Monto en Axie Infinity.').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('decentraland')
                .setDescription('Convierte de Decentraland a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('mana').setDescription('Monto en Decentraland.').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('solana')
                .setDescription('Convierte de Solana a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('sol').setDescription('Monto en Solana.').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('dai')
                .setDescription('Convierte de Dai a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('dai').setDescription('Monto en Dai').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('dogecoin')
                .setDescription('Convierte de Solana a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('doge').setDescription('Monto en Dogecoin.').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('terraluna')
                .setDescription('Convierte de Terraluna 2.0 a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('luna').setDescription('Monto en Terra Luna 2.0.').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('litecoin')
                .setDescription('Convierte de Litecoin a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('ltc').setDescription('Monto en Litecoin.').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('cardano')
                .setDescription('Convierte de Cardano a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('ada').setDescription('Monto en Cardano.').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('bnb')
                .setDescription('Convierte de Binance Coin a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('bnb').setDescription('Monto en Binance Coin.').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('usdcoin')
                .setDescription('Convierte de USD Coin a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('usdc').setDescription('Monto en USD Coin.').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('avalanche')
                .setDescription('Convierte de Avalanche a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('avax').setDescription('Monto en Avalanche.').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('polkadot')
                .setDescription('Convierte de Polkadot a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('dot').setDescription('Monto en Polkadot.').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('uniswap')
                .setDescription('Convierte de Uniswap a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('uni').setDescription('Monto en Uniswap.').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('polygon')
                .setDescription('Convierte de Polygon a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('matic').setDescription('Monto en Polygon.').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('tron')
                .setDescription('Convierte de Tron a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('trx').setDescription('Monto en Tron.').setRequired(true)
                ))
    ,


    async run(client, interaction, options) {

        Criptomonedas.forEach(async cripto => {
            if (interaction.options.getSubcommand() === cripto.id) {
                let convertir: number = interaction.options.getNumber((cripto.iso).toLowerCase())
                await interaction.deferReply()
                try {
                
                    const dataCoinGecko = (await getAllCriptoData(cripto.apicoingecko, cripto.apiCriptoYa)).dataCoingecko
                    const dataCriptoYa = (await getAllCriptoData(cripto.apicoingecko, cripto.apiCriptoYa)).dataCriptoYa

                    let criptodolar: number = dataCoinGecko.prices
                    const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                        .setTitle(`${cripto.nombre} <:rightarrow:921907270747570247> Peso Argentino`)
                        .setColor(cripto.color)
                        .setDescription(`${cripto.nombre} expresado en pesos argentinos a la cotización del mercado`)
                        .setThumbnail(cripto.imagen)
                        .addFields(
                            { name: `Monto original  `, value: `${cripto.simbolo} ${convertir} ` },
                            { name: "Dólares :dollar: ", value: formatoPrecio(((convertir * criptodolar)), "USD"), inline: true },
                            { name: "Compra :flag_ar: ", value: 'ARS' + formatoPrecio(((cripto.id === "terraluna" ? ((convertir * criptodolar) * dataCriptoYa.bid) : convertir * dataCriptoYa.bid)), "ARS"), inline: true },
                            { name: "Venta :flag_ar: ", value: 'ARS' + formatoPrecio(((cripto.id === "terraluna" ? ((convertir * criptodolar) * dataCriptoYa.bid) : convertir * dataCriptoYa.ask)), "ARS"), inline: true })

                    await wait(3000)
                    await interaction.editReply({ embeds: [embed] })
                } catch (error: any) {
                    embedError(interaction, error)
                }
            }
        })
    }
} 