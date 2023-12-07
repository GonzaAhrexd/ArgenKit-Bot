
import Discord from "discord.js"
import axios from "axios"
import { formatoPrecio } from '../functions/formato'
import { embedError } from "../functions/embedError"
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
            {
                id: "cardano",
                nombre: "Cardano",
                iso: "ADA",
                simbolo: "₳",
                imagen: "https://s3.coinmarketcap.com/static-gravity/image/4aec70f6f1254e4f89650cc68ae49f3c.png",
                color: "#0033AD",
                apicoingecko: "https://api.coingecko.com/api/v3/coins/cardano/market_chart?vs_currency=usd&days=0",
                apilemon: "https://criptoya.com/api/lemoncash/ada"
            },
            {
                id: "bnb",
                nombre: "Binance Coin",
                iso: "BNB",
                simbolo: "BNB",
                imagen: "https://cryptologos.cc/logos/bnb-bnb-logo.png",
                color: "#f3ba2f",
                apicoingecko: "https://api.coingecko.com/api/v3/coins/binancecoin/market_chart?vs_currency=usd&days=0",
                apilemon: "https://criptoya.com/api/lemoncash/bnb"
            },
            {
                id: "usdcoin",
                nombre: "USD Coin",
                iso: "USDC",
                simbolo: "USDC",
                imagen: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
                color: "#2775CA",
                apicoingecko: "https://api.coingecko.com/api/v3/coins/usd-coin/market_chart?vs_currency=usd&days=0",
                apilemon: "https://criptoya.com/api/lemoncash/usdc"
            },
            {
                id: "avalanche",
                nombre: "Avalanche",
                iso: "AVAX",
                simbolo: "AVAX",
                imagen: "https://cryptologos.cc/logos/avalanche-avax-logo.png",
                color: "#e84142",
                apicoingecko: "https://api.coingecko.com/api/v3/coins/avalanche-2/market_chart?vs_currency=usd&days=0",
                apilemon: "https://criptoya.com/api/lemoncash/avax"
            },
            {
                id: "polkadot",
                nombre: "Polkadot",
                iso: "DOT",
                simbolo: "DOT",
                imagen: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png",
                color: "#e6007a",
                apicoingecko: "https://api.coingecko.com/api/v3/coins/polkadot/market_chart?vs_currency=usd&days=0",
                apilemon: "https://criptoya.com/api/lemoncash/dot"
            },
            {
                id: "uniswap",
                nombre: "Uniswap",
                iso: "UNI",
                simbolo: "UNI",
                imagen: "https://s2.coinmarketcap.com/static/img/coins/200x200/7083.png",
                color: "#ff007a",
                apicoingecko: "https://api.coingecko.com/api/v3/coins/uniswap/market_chart?vs_currency=usd&days=0",
                apilemon: "https://criptoya.com/api/lemoncash/uni"
            },
            {
                id: "polygon",
                nombre: "Polygon",
                iso: "MATIC",
                simbolo: "MATIC",
                imagen: "https://altcoinsbox.com/wp-content/uploads/2023/03/matic-logo.webp",
                color: "#8247e5",
                apicoingecko: "https://api.coingecko.com/api/v3/coins/aave-polygon-wmatic/market_chart?vs_currency=usd&days=0",
                apilemon: "https://criptoya.com/api/lemoncash/matic"
            },
            {
                id: "tron",
                nombre: "Tron",
                iso: "TRX",
                simbolo: "TRX",
                imagen: "https://cdn.discordapp.com/attachments/802944543510495292/1181813633110507531/tron-trx-logo.png?ex=65826cb7&is=656ff7b7&hm=3bc8731686026cbf5cc32024c62b6d58d1d6bda5ce710bd2ea0fe246537ee5e2&",
                color: "#d9012c",
                apicoingecko: "https://api.coingecko.com/api/v3/coins/tron/market_chart?vs_currency=usd&days=0",
                apilemon: "https://criptoya.com/api/bybit/trx/ars"
            },
            ]

        Criptomonedas.forEach(async cripto => {
            if (interaction.options.getSubcommand() === cripto.id) {
                let convertir: number = interaction.options.getNumber((cripto.iso).toLowerCase())

                try {
                    const [apiCoingecko, apiLemon] = await Promise.all([
                        axios.get(cripto.apicoingecko),
                        axios.get(cripto.apilemon),
                    ]);

                    let criptodolar: number = apiCoingecko.data['prices'][0][1]


                    if (cripto.id == "terraluna") {
                        const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                            .setTitle(`${cripto.nombre} <:rightarrow:921907270747570247> Peso Argentino`)
                            .setColor(cripto.color)
                            .setDescription(`${cripto.nombre} expresado en pesos argentinos a la cotización del mercado`)
                            .setThumbnail(cripto.imagen)
                            .addFields(
                                { name: `Monto original  `, value: `${cripto.simbolo} ${convertir} ` },
                                { name: "Dólares :dollar: ", value: formatoPrecio(((convertir * criptodolar)), "USD"), inline: true },
                                { name: "Compra :flag_ar: ", value: 'ARS' + formatoPrecio((((convertir * criptodolar) * apiLemon.data['bid'])), "ARS"), inline: true },
                                { name: "Venta :flag_ar: ", value: 'ARS' + formatoPrecio((((convertir * criptodolar) * apiLemon.data['ask'])), "ARS"), inline: true })
                                await interaction.deferReply();
                                await interaction.editReply({ embeds: [embed] });
                    }
                    else {
                        const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                            .setTitle(`${cripto.nombre} <:rightarrow:921907270747570247> Peso Argentino`)
                            .setColor(cripto.color)
                            .setDescription(`${cripto.nombre} expresado en pesos argentinos a la cotización del mercado`)
                            .setThumbnail(cripto.imagen)
                            .addFields(
                                { name: `Monto original  `, value: `${cripto.simbolo} ${convertir} ` },
                                { name: "Dólares :dollar: ", value: formatoPrecio(((convertir * criptodolar)), "USD"), inline: true },
                                { name: "Compra :flag_ar: ", value: 'ARS' + formatoPrecio(((convertir * apiLemon.data['bid'])), "ARS"), inline: true },
                                { name: "Venta :flag_ar: ", value: 'ARS' + formatoPrecio(((convertir * apiLemon.data['ask'])), "ARS"), inline: true })
                                await interaction.deferReply();
                                await interaction.editReply({ embeds: [embed] });
                    }
                } catch (error:any) {
                  
                    embedError(interaction, error)
                }

            }

        })

    } //Async run
} //Module export