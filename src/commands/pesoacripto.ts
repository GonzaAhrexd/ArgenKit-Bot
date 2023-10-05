import { SlashCommandBuilder } from "@discordjs/builders"
import Discord from "discord.js"
import axios from "axios"
var currencyFormatter = ('currency-formatter'); //Currency formatter
const { total75, total74, total80 } = require("../functions/impuestos"); //Impuestos
module.exports = {
    data: new SlashCommandBuilder()
        .setName('pesoacripto')
        .setDescription('Convierte de Pesos Argentinos a Criptomonedas')
        .addSubcommand(subcommand =>
            subcommand.setName('bitcoin')
                .setDescription('Convierte de Pesos Argentinos a Bitcoin.')
                .addNumberOption(option =>
                    option.setName('ars').setDescription('Monto en Pesos Argentinos.').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('ethereum')
                .setDescription('Convierte de Pesos Argentinos a Ethereum.')
                .addNumberOption(option =>
                    option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('tether')
                .setDescription('Convierte de Pesos Argentinos a Tether.')
                .addNumberOption(option =>
                    option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('axieinfinity')
                .setDescription('Convierte de Pesos Argentinos a Axie Infinity.')
                .addNumberOption(option =>
                    option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('decentraland')
                .setDescription('Convierte de Pesos Argentinos a Decentraland.')
                .addNumberOption(option =>
                    option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('solana')
                .setDescription('Convierte de Pesos Argentinos a Solana.')
                .addNumberOption(option =>
                    option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('dai')
                .setDescription('Convierte de Pesos Argentinos a Dai.')
                .addNumberOption(option =>
                    option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('dogecoin')
                .setDescription('Convierte de Pesos Argentinos a Solana')
                .addNumberOption(option =>
                    option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('terraluna')
                .setDescription('Convierte de Pesos Argentinos a Terraluna 2.0.')
                .addNumberOption(option =>
                    option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)
                )),


    async run(client, interaction, options) {
        let Criptomonedas: Array<{
            id: string,
            nombre: string,
            emoji: string,
            iso: string,
            simbolo: string,
            imagen: string
            color: Discord.ColorResolvable
            apicoingecko: string
            apilemon: string

        }> =
            //BTC
            [{
                id: "bitcoin",
                nombre: "Bitcoin",
                emoji: "<:bitcoin:929073179262074960>",
                iso: "BTC",
                simbolo: "₿",
                imagen: "https://cdn.discordapp.com/attachments/802944543510495292/929076353079328868/bitcoinapeso.png",
                color: "#fddc4d",
                apicoingecko: "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=0",
                apilemon: "https://criptoya.com/api/lemoncash/btc"
            },
            {
                id: "ethereum",
                nombre: "Ethereum",
                emoji: "<:ethereum:963619533271232532>",

                iso: "ETH",
                simbolo: "Ξ",

                imagen: "https://cdn.discordapp.com/attachments/802944543510495292/963885915619610714/convethereum.png",
                color: "#7be0ff",
                apicoingecko: "https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=0",
                apilemon: "https://criptoya.com/api/lemoncash/eth"
            },
            {
                id: "tether",
                nombre: "Tether",
                emoji: "<:tether:964346292815945828>",
                iso: "USDT",
                simbolo: "₮",
                imagen: "https://cdn.discordapp.com/attachments/802944543510495292/964377292568662107/convertirtether.png",
                color: "#27e19e",
                apicoingecko: "https://api.coingecko.com/api/v3/coins/tether/market_chart?vs_currency=usd&days=0",
                apilemon: "https://criptoya.com/api/lemoncash/usdt"
            },
            {
                id: "axieinfinity",
                nombre: "Axie Infinity",
                emoji: "<:axieinfinity:964349059236257852>",
                iso: "AXS",
                simbolo: "AXS",
                imagen: "https://cdn.discordapp.com/attachments/802944543510495292/964380617485742100/convertiraxie.png",
                color: "#555abe",
                apicoingecko: "https://api.coingecko.com/api/v3/coins/axie-infinity/market_chart?vs_currency=usd&days=0",
                apilemon: "https://criptoya.com/api/lemoncash/axs"
            },
            {
                id: "terraluna",
                nombre: "Terra Luna",
                emoji: "<:terraluna2_large:980222259471978526>",
                iso: "LUNA",
                simbolo: "LUNA",
                imagen: "https://cdn.discordapp.com/attachments/802944543510495292/980239559428288592/convertirluna2.png",
                color: "#ffd83a",
                apicoingecko: "https://api.coingecko.com/api/v3/coins/terra-luna-2/market_chart?vs_currency=usd&days=0",
                apilemon: "https://criptoya.com/api/lemoncash/usdt"
            },
            {
                id: "decentraland",
                nombre: "Decentraland",
                emoji: "<:decentraland:964349085089931324>",
                iso: "MANA",
                simbolo: "MANA",
                imagen: "https://cdn.discordapp.com/attachments/802944543510495292/964380633042419722/convertirdecentraland.png",
                color: "#ffa6b7",
                apicoingecko: "https://api.coingecko.com/api/v3/coins/decentraland/market_chart?vs_currency=usd&days=0",
                apilemon: "https://criptoya.com/api/lemoncash/mana"
            },
            {
                id: "solana",
                nombre: "Solana",
                emoji: "<:solana:964349096775282738>",
                iso: "SOL",
                simbolo: "SOL",
                imagen: "https://cdn.discordapp.com/attachments/802944543510495292/964387064240046111/convertirsolana.png",
                color: "#2488ff",
                apicoingecko: "https://api.coingecko.com/api/v3/coins/solana/market_chart?vs_currency=usd&days=0",
                apilemon: "https://criptoya.com/api/lemoncash/sol"
            },
            {
                id: "dai",
                nombre: "DAI",
                emoji: "<:dai:964681594344443904>",
                iso: "DAI",
                simbolo: "DAI",
                imagen: "https://cdn.discordapp.com/attachments/802944543510495292/964691273883742238/dai_1.png",
                color: "#efc637",
                apicoingecko: "https://api.coingecko.com/api/v3/coins/dai/market_chart?vs_currency=usd&days=0",
                apilemon: "https://criptoya.com/api/lemoncash/dai"
            },
            {
                id: "dogecoin",
                nombre: "Dogecoin",
                emoji: "<:dogecoin:964686144530939904>",
                iso: "DOGE",
                simbolo: "Ð",
                imagen: "https://cdn.discordapp.com/attachments/802944543510495292/964691274147979304/dogecoin_1.png",
                color: "#f5a431",
                apicoingecko: "https://api.coingecko.com/api/v3/coins/dogecoin/market_chart?vs_currency=usd&days=0",
                apilemon: "https://criptoya.com/api/bitso/doge"
            }
            ]

        Criptomonedas.forEach(async cripto => {
            if (interaction.options.getSubcommand() === cripto.id) {
                let convertir: number = interaction.options.getNumber('ars')

                axios.get(cripto.apilemon)
                    .then((CONVERTIRLEMON) => {
                        if (cripto.id == "terraluna") {

                            axios.get(cripto.apicoingecko)
                                .then((CONVERTIRCOINGECKO) => {
                    
                                    const embed:Discord.EmbedBuilder = new Discord.EmbedBuilder()
                                        .setTitle(`Peso Argentino <:rightarrow:921907270747570247> ${cripto.nombre}`)
                                        .setColor(cripto.color)
                                        .setDescription(`Pesos argentinos expresado en ${cripto.nombre} a la cotización del mercado`)
                                        .setThumbnail(cripto.imagen)
                                        .addFields(
                                            { name: `Monto original :flag_ar: `, value: `ARS$ ${convertir} `},
                                            { name: "Compra :flag_ar: ", value: `${cripto.simbolo}` + ' ' + ((convertir / CONVERTIRCOINGECKO.data['prices'][0][1]) / CONVERTIRLEMON.data['bid']).toFixed(8), inline: true},
                                            { name: "Venta :flag_ar: ", value: `${cripto.simbolo}` + ' ' + ((convertir / CONVERTIRCOINGECKO.data['prices'][0][1]) / CONVERTIRLEMON.data['ask']).toFixed(8), inline: true})
                                    return interaction.reply({ embeds: [embed] });

                                }).catch((err) => {
                                    console.error('ERR', err)
                                })

                        }
                        else {
                            const embed:Discord.EmbedBuilder = new Discord.EmbedBuilder()
                                .setTitle(`Peso Argentino <:rightarrow:921907270747570247> ${cripto.nombre}`)
                                .setColor(cripto.color)
                                .setDescription(`Pesos argentinos expresado en ${cripto.nombre} a la cotización del mercado`)
                                .setThumbnail(cripto.imagen)
                                .addFields(
                                    { name: `Monto original :flag_ar: `, value: `ARS$ ${convertir} `},
                                    { name: "Compra :flag_ar: ", value: `${cripto.simbolo}` + ' ' + (convertir / CONVERTIRLEMON.data['bid']).toFixed(8), inline: true},
                                    { name: "Venta :flag_ar: ", value: `${cripto.simbolo}` + ' '  + (convertir / CONVERTIRLEMON.data['ask']).toFixed(8), inline: true})
                                    return interaction.reply({ embeds: [embed] });
                        }
                    })

                    .catch((err) => {
                        console.error('ERR', err)


                    })

            }

        })

    } //Async run
} //Module export