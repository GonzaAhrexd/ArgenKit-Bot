
import Discord from "discord.js"
import axios from "axios"
import { embedError } from "../functions/embedError";
var currencyFormatter = ('currency-formatter'); //Currency formatter
const { total75, total154, total155 } = require("../functions/impuestos"); //Impuestos
module.exports = {
    data: new Discord.SlashCommandBuilder()
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
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('litecoin')
                .setDescription('Convierte de Pesos Argentinos a Litecoin.')
                .addNumberOption(option =>
                    option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)
                )),
                


    async run(client, interaction, options) {
        let Criptomonedas: Array<{
            id: string,
            nombre: string,
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
                iso: "DOGE",
                simbolo: "Ð",
                imagen: "https://cdn.discordapp.com/attachments/802944543510495292/964691274147979304/dogecoin_1.png",
                color: "#f5a431",
                apicoingecko: "https://api.coingecko.com/api/v3/coins/dogecoin/market_chart?vs_currency=usd&days=0",
                apilemon: "https://criptoya.com/api/bitso/doge"
            },
            {
                id: "litecoin",
                nombre: "Litecoin",
                iso: "LTC",
                simbolo: "Ł",
                imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LTC-400.png/2048px-LTC-400.png",
                color: "#f5a431",
                apicoingecko: "https://api.coingecko.com/api/v3/coins/litecoin/market_chart?vs_currency=usd&days=0",
                apilemon: "https://criptoya.com/api/bitso/ltc"
            },
          
            ]

        Criptomonedas.forEach(async cripto => {
            if (interaction.options.getSubcommand() === cripto.id) {
                let convertir: number = interaction.options.getNumber('ars');

                try {
                    const [apiCoingecko, apiLemon] = await Promise.all([
                        axios.get(cripto.apicoingecko),
                        axios.get(cripto.apilemon),
                    ]);

                    let criptodolar: number = apiCoingecko.data['prices'][0][1];

                    const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                        .setTitle(`Peso Argentino <:rightarrow:921907270747570247> ${cripto.nombre}`)
                        .setColor(cripto.color)
                        .setDescription(`Pesos argentinos expresado en ${cripto.nombre} a la cotización del mercado`)
                        .setThumbnail(cripto.imagen)
                        .addFields(
                            { name: `Monto original :flag_ar: `, value: `ARS$ ${convertir} `},
                            { name: "Compra :flag_ar: ", value: `${cripto.simbolo}` + ' ' + (cripto.id === "terraluna" ? ((convertir / criptodolar / apiLemon.data['bid']).toFixed(8)) : ((convertir / apiLemon.data['bid']).toFixed(8))), inline: true},
                            { name: "Venta :flag_ar: ", value: `${cripto.simbolo}` + ' ' + (cripto.id === "terraluna" ? ((convertir / criptodolar / apiLemon.data['ask']).toFixed(8)) : ((convertir / apiLemon.data['ask']).toFixed(8))), inline: true}
                        );

                    return await interaction.reply({ embeds: [embed] });
                } catch (error: any) {
                    embedError(interaction, error);
                }
            }
        });

    } //Async run
} //Module export