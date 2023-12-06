
import Discord from "discord.js"
import axios from "axios"
import { ButtonStyle } from 'discord.js'
import { ActionRowBuilder, ButtonBuilder, StringSelectMenuBuilder } from 'discord.js'
import { formatoPrecio } from '../functions/formato'
import { embedError } from "../functions/embedError"
module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('criptomoneda')
        .setDescription('Muestra los datos de una criptomoneda y su cotización')
        .addSubcommand(subcommand =>
            subcommand.setName('bitcoin')
                .setDescription('Muestra los datos y precio actual del bitcoin')
        ).addSubcommand(subcommand =>
            subcommand.setName('ethereum')
                .setDescription('Muestra los datos y precio actual del ethereum')
        )
        .addSubcommand(subcommand =>
            subcommand.setName('tether')
                .setDescription('Muestra los datos y precio actual del Tether')
        ).addSubcommand(subcommand =>
            subcommand.setName('axieinfinity')
                .setDescription('Muestra los datos y precio actual del AxieInfinity')
        ).addSubcommand(subcommand =>
            subcommand.setName('decentraland')
                .setDescription('Muestra los datos y precio actual del Decentraland')
        ).addSubcommand(subcommand =>
            subcommand.setName('solana')
                .setDescription('Muestra los datos y precio actual del Solana')
        ).addSubcommand(subcommand =>
            subcommand.setName('dai')
                .setDescription('Muestra los datos y precio actual del Dai')
        ).addSubcommand(subcommand =>
            subcommand.setName('dogecoin')
                .setDescription('Muestra los datos y precio actual del Dogecoin')
        ).addSubcommand(subcommand =>
            subcommand.setName('terraluna')
                .setDescription('Muestra los datos y precio actual del Terra Luna 2.0')
        ).addSubcommand(subcommand =>
            subcommand.setName('litecoin')
                .setDescription('Muestra los datos y precio actual del Litecoin')
        ).addSubcommand(subcommand =>
            subcommand.setName('cardano')
                .setDescription('Muestra los datos y precio actual del Cardano')
        ).addSubcommand(subcommand =>
            subcommand.setName('bnb')
                .setDescription('Muestra los datos y precio actual del Binance Coin')
        ).addSubcommand(subcommand =>
            subcommand.setName('usdcoin')
                .setDescription('Muestra los datos y precio actual del USD Coin')
        ).addSubcommand(subcommand =>
            subcommand.setName('avalanche')
                .setDescription('Muestra los datos y precio actual del Avalanche')
        ).addSubcommand(subcommand =>
            subcommand.setName('polkadot')
                .setDescription('Muestra los datos y precio actual del Polkadot')
        ).addSubcommand(subcommand =>
            subcommand.setName('uniswap')
                .setDescription('Muestra los datos y precio actual del Uniswap')
        ).addSubcommand(subcommand =>
            subcommand.setName('polygon')
                .setDescription('Muestra los datos y precio actual del Matic Network')
        ).addSubcommand(subcommand =>
            subcommand.setName('tron')
                .setDescription('Muestra los datos y precio actual del Tron')
        ),

    async run(client, interaction, options) {

        let Criptomonedas: Array<{
            id: string,
            nombre: string,
            desc: string,
            lanzamiento: string,
            iso: string,
            simbolo: string,
            desarrollador: string,
            limitedeemision: string,
            imagen: string
            color: Discord.ColorResolvable
            apicoingecko: string
            apilemon?: any

        }> =
            //BTC
            [{
                id: "bitcoin",
                nombre: "Bitcoin",
                desc: "Bitcoin es una criptomoneda  y un sistema de pago sin banco central o administrador único. En principio, los usuarios de bitcoin pueden transferir dinero entre sí a través de una red entre iguales usando software libre y de código abierto. Las transacciones son verificadas y custodiadas criptográficamente por una red descentralizada de nodos",
                lanzamiento: "3  de enero de 2009",
                iso: "BTC",
                simbolo: "₿",
                desarrollador: "Satoshi Nakamoto (seudónimo), Gavin Andresen y otros",
                limitedeemision: "₿21,000,000",
                imagen: "https://cdn.discordapp.com/attachments/802944543510495292/929073343682990150/bitcoin.png",
                color: "#fddc4d",
                apicoingecko: "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=0",
                apilemon: "https://criptoya.com/api/lemoncash/btc"
            },
            {
                id: "ethereum",
                nombre: "Ethereum",
                desc: "Ethereum es una plataforma de código abierto y una criptomoneda descentralizada. Es una red descentralizada que permite la creación y ejecución de contratos inteligentes y aplicaciones descentralizadas (dapps) en su propia blockchain. Ethereum utiliza su propia criptomoneda, Ether (ETH), para pagar por los servicios de la red",
                lanzamiento: "30 de julio de 2015",
                iso: "ETH",
                simbolo: "Ξ",
                desarrollador: "Vitalik Buterin, Gavin Wood, Joseph Lubin",
                limitedeemision: "No tiene límite fijo",
                imagen: "https://cdn.discordapp.com/attachments/802944543510495292/963617030026694716/ethereum.png",
                color: "#7be0ff",
                apicoingecko: "https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=0",
                apilemon: "https://criptoya.com/api/lemoncash/eth"
            },
            {
                id: "tether",
                nombre: "Tether",
                desc: "Tether es una criptomoneda estable respaldada por dólares estadounidenses. Se utiliza para brindar estabilidad en los mercados de criptomonedas al estar respaldado por una moneda fiduciaria. Los usuarios pueden transferir Tether entre sí y cambiarlo por otras criptomonedas en plataformas de intercambio",
                lanzamiento: "2014",
                iso: "USDT",
                simbolo: "₮",
                desarrollador: "Tether Limited",
                limitedeemision: "No tiene límite fijo",
                imagen: "https://cdn.discordapp.com/attachments/802944543510495292/964345365602119782/tether.png",
                color: "#27e19e",
                apicoingecko: "https://api.coingecko.com/api/v3/coins/tether/market_chart?vs_currency=usd&days=0",
                apilemon: "https://criptoya.com/api/lemoncash/usdt"
            },
            {
                id: "axieinfinity",
                nombre: "Axie Infinity",
                desc: "Axie Infinity es un juego descentralizado basado en Ethereum, donde los jugadores pueden criar, competir y comerciar con criaturas llamadas Axies. Los Axies son representados por tokens NFT (non-fungible tokens) únicos que los jugadores pueden poseer y transferir en la cadena de bloques de Ethereum",
                lanzamiento: "Marzo de 2018",
                iso: "AXS",
                simbolo: "AXS",
                desarrollador: "Sky Mavis",
                limitedeemision: "No tiene límite fijo",
                imagen: "https://cdn.discordapp.com/attachments/802944543510495292/964347852946018324/axie-infinity.png",
                color: "#555abe",
                apicoingecko: "https://api.coingecko.com/api/v3/coins/axie-infinity/market_chart?vs_currency=usd&days=0",
                apilemon: "https://criptoya.com/api/lemoncash/axs"
            },
            {
                id: "terraluna",
                nombre: "Terra Luna",
                desc: "Terra Luna es una criptomoneda estable lanzada en el 2019, basada en el protocolo Cosmos, con un enfoque en la estabilidad del precio y la escalabilidad. El objetivo de Terra es ser utilizado como una moneda de uso diario y ofrecer soluciones de pagos a escala global. Terra Luna 2.0 es el nuevo Token de Terra, tras el colapso de Terra USD  y Terra Luna en Abril del 2022.",
                lanzamiento: "27 de mayo  de 2022",
                iso: "LUNA",
                simbolo: "LUNA",
                desarrollador: "Daniel Shin y Do Kwon",
                limitedeemision: "No tiene límite fijo",
                imagen: "https://cdn.discordapp.com/attachments/802944543510495292/980221927308275742/terra-luna-2_large.png",
                color: "#ffd83a",
                apicoingecko: "https://api.coingecko.com/api/v3/coins/terra-luna-2/market_chart?vs_currency=usd&days=0",
                apilemon: "https://criptoya.com/api/lemoncash/usdt"
            },
            {
                id: "decentraland",
                nombre: "Decentraland",
                desc: "Decentraland es una plataforma de mundos virtuales en 3D basada en la tecnología blockchain. Los usuarios pueden crear, experimentar y monetizar contenido y aplicaciones en estos mundos virtuales. Decentraland utiliza su propia criptomoneda, el MANA, como medio de intercambio en la plataforma.",
                lanzamiento: "Febrero de 2017",
                iso: "MANA",
                simbolo: "MANA",
                desarrollador: "Decentraland Foundation",
                limitedeemision: "No tiene límite fijo",
                imagen: "https://cdn.discordapp.com/attachments/802944543510495292/964351096871088128/decentraland.png",
                color: "#ffa6b7",
                apicoingecko: "https://api.coingecko.com/api/v3/coins/decentraland/market_chart?vs_currency=usd&days=0",
                apilemon: "https://criptoya.com/api/lemoncash/mana"
            },
            {
                id: "solana",
                nombre: "Solana",
                desc: "Solana es una blockchain de alta velocidad y escalabilidad. Utiliza un algoritmo de consenso de prueba de participación delegada y un sistema de validación descentralizado para asegurar una alta velocidad de transacción y bajos costos. Solana es utilizado para aplicaciones de cifrado, juegos y aplicaciones descentralizadas.",
                lanzamiento: "Marzo de 2017",
                iso: "SOL",
                simbolo: "SOL",
                desarrollador: "Anatoly Yakovenko, Greg Fitzgerald, Stephen Akridge, Raj Gokal",
                limitedeemision: "No tiene límite fijo",
                imagen: "https://cdn.discordapp.com/attachments/802944543510495292/964351112725540934/solana.png",
                color: "#2488ff",
                apicoingecko: "https://api.coingecko.com/api/v3/coins/solana/market_chart?vs_currency=usd&days=0",
                apilemon: "https://criptoya.com/api/lemoncash/sol"
            },
            {
                id: "dai",
                nombre: "DAI",
                desc: "DAI es una stablecoin respaldada por el dólar estadounidense, que se basa en la red Ethereum. Es emitida por MakerDAO, un sistema descentralizado de préstamos collateralizados que busca proporcionar estabilidad financiera en el ecosistema de criptomonedas.",
                lanzamiento: "18 de diciembre de 2017",
                iso: "DAI",
                simbolo: "DAI",
                desarrollador: "Maker Foundation",
                limitedeemision: "Respaldado en dólares, otras criptomonedas y contratos inteligentes",
                imagen: "https://cdn.discordapp.com/attachments/802944543510495292/964681693292285962/dai.png",
                color: "#efc637",
                apicoingecko: "https://api.coingecko.com/api/v3/coins/dai/market_chart?vs_currency=usd&days=0",
                apilemon: "https://criptoya.com/api/lemoncash/dai"
            },
            {
                id: "dogecoin",
                nombre: "Dogecoin",
                desc: "Dogecoin es una criptomoneda basada en una memea popular en internet. Fue creada en 2013 como una broma pero ha ganado una gran popularidad debido a su comunidad amigable y su uso en transacciones pequeñas. Es conocida por su símbolo de perro Shiba Inu en su logo.",
                lanzamiento: "6 de diciembre de 2013",
                iso: "DOGE",
                simbolo: "Ð",
                desarrollador: "Billy Markus, Jackson Palmer",
                limitedeemision: "No tiene límite fijo",
                imagen: "https://cdn.discordapp.com/attachments/802944543510495292/964686112096391189/dogecoin.png",
                color: "#f5a431",
                apicoingecko: "https://api.coingecko.com/api/v3/coins/dogecoin/market_chart?vs_currency=usd&days=0",
                apilemon: "https://criptoya.com/api/bitso/doge"
            },
            {
                id: "litecoin",
                nombre: "Litecoin",
                desc: "Litecoin es una criptomoneda basada en la red Bitcoin. Fue creada en 2011 por Charlie Lee, un ex empleado de Google. Litecoin es una de las criptomonedas más antiguas y populares. Es conocida por su velocidad de transacción y su uso como moneda de pago.",
                lanzamiento: "7 de octubre de 2011",
                iso: "LTC",
                simbolo: "Ł",
                desarrollador: "Charlie Lee",
                limitedeemision: "84,000,000",
                imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LTC-400.png/2048px-LTC-400.png",
                color: "#bcbcbc",
                apicoingecko: "https://api.coingecko.com/api/v3/coins/litecoin/market_chart?vs_currency=usd&days=0",
                apilemon: "https://criptoya.com/api/lemoncash/ltc"
            },
            {
                id: "cardano",
                nombre: "Cardano",
                desc: "Cardano es una plataforma de contratos inteligentes basada en la tecnología blockchain. Fue creada por Charles Hoskinson, uno de los fundadores de Ethereum. Cardano utiliza su propia criptomoneda, el ADA, para pagar por los servicios de la red.",
                lanzamiento: "29 de septiembre de 2017",
                iso: "ADA",
                simbolo: "₳",
                desarrollador: "Charles Hoskinson, Jeremy Wood",
                limitedeemision: "45,000,000,000",
                imagen: "https://s3.coinmarketcap.com/static-gravity/image/4aec70f6f1254e4f89650cc68ae49f3c.png",
                color: "#0033AD",
                apicoingecko: "https://api.coingecko.com/api/v3/coins/cardano/market_chart?vs_currency=usd&days=0",
                apilemon: "https://criptoya.com/api/lemoncash/ada"
            },
            {
                id: "bnb",
                nombre: "Binance Coin",
                desc: "Binance Coin es una criptomoneda creada por la plataforma de intercambio de criptomonedas Binance. Binance Coin se utiliza para pagar las tarifas de transacción en la plataforma de intercambio de Binance y para acceder a servicios adicionales como Binance Launchpad y Binance Academy.",
                lanzamiento: "21 de julio de 2017",
                iso: "BNB",
                simbolo: "BNB",
                desarrollador: "Changpeng Zhao",
                limitedeemision: "No tiene límite fijo",
                imagen: "https://cryptologos.cc/logos/bnb-bnb-logo.png",
                color: "#f3ba2f",
                apicoingecko: "https://api.coingecko.com/api/v3/coins/binancecoin/market_chart?vs_currency=usd&days=0",
                apilemon: "https://criptoya.com/api/lemoncash/bnb"
            },
            {
                id: "usdcoin",
                nombre: "USD Coin",
                desc: "USD Coin es una criptomoneda estable respaldada por dólares estadounidenses. Se utiliza para brindar estabilidad en los mercados de criptomonedas al estar respaldado por una moneda fiduciaria. Los usuarios pueden transferir USD Coin entre sí y cambiarlo por otras criptomonedas en plataformas de intercambio.",
                lanzamiento: "26 de septiembre de 2018",
                iso: "USDC",
                simbolo: "USDC",
                desarrollador: "Circle Internet Financial y Coinbase",
                limitedeemision: "No tiene límite fijo",
                imagen: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
                color: "#2775CA",
                apicoingecko: "https://api.coingecko.com/api/v3/coins/usd-coin/market_chart?vs_currency=usd&days=0",
                apilemon: "https://criptoya.com/api/lemoncash/usdc"
            },
            {
                id: "avalanche",
                nombre: "Avalanche",
                desc: "Avalanche es una plataforma de contratos inteligentes basada en la tecnología blockchain. Avalanche utiliza un algoritmo de consenso de prueba de participación delegada y un sistema de validación descentralizado para asegurar una alta velocidad de transacción y bajos costos.",
                lanzamiento: "21 de septiembre de 2020",
                iso: "AVAX",
                simbolo: "AVAX",
                desarrollador: "Avalanche Foundation",
                limitedeemision: "720,000,000",
                imagen: "https://cryptologos.cc/logos/avalanche-avax-logo.png",
                color: "#e84142",
                apicoingecko: "https://api.coingecko.com/api/v3/coins/avalanche-2/market_chart?vs_currency=usd&days=0",
                apilemon: "https://criptoya.com/api/lemoncash/avax"
            },
            {
                id: "polkadot",
                nombre: "Polkadot",
                desc: "Polkadot es una plataforma de contratos inteligentes basada en la tecnología blockchain. Polkadot utiliza un algoritmo de consenso de prueba de participación delegada y un sistema de validación descentralizado para asegurar una alta velocidad de transacción y bajos costos.",
                lanzamiento: "26 de mayo de 2020",
                iso: "DOT",
                simbolo: "DOT",
                desarrollador: "Gavin Wood, Peter Czaban, Robert Habermeier",
                limitedeemision: "1,000,000,000",
                imagen: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png",
                color: "#e6007a",
                apicoingecko: "https://api.coingecko.com/api/v3/coins/polkadot/market_chart?vs_currency=usd&days=0",
                apilemon: "https://criptoya.com/api/lemoncash/dot"
            },
            {
                id: "uniswap",
                nombre: "Uniswap",
                desc: "Uniswap es un protocolo de intercambio descentralizado basado en la tecnología blockchain. Uniswap utiliza un algoritmo de consenso de prueba de participación delegada y un sistema de validación descentralizado para asegurar una alta velocidad de transacción y bajos costos.",
                lanzamiento: "2 de noviembre de 2018",
                iso: "UNI",
                simbolo: "UNI",
                desarrollador: "Hayden Adams",
                limitedeemision: "1,000,000,000",
                imagen: "https://s2.coinmarketcap.com/static/img/coins/200x200/7083.png",
                color: "#ff007a",
                apicoingecko: "https://api.coingecko.com/api/v3/coins/uniswap/market_chart?vs_currency=usd&days=0",
                apilemon: "https://criptoya.com/api/lemoncash/uni"
            },
            {
                id: "polygon",
                nombre: "Polygon",
                desc: "Polygon es una plataforma de contratos inteligentes basada en la tecnología blockchain. Polygon utiliza un algoritmo de consenso de prueba de participación delegada y un sistema de validación descentralizado para asegurar una alta velocidad de transacción y bajos costos.",
                lanzamiento: "1 de octubre de 2017",
                iso: "MATIC",
                simbolo: "MATIC",
                desarrollador: "Jaynti Kanani, Sandeep Nailwal, Anurag Arjun, Mihailo Bjelic",
                limitedeemision: "10,000,000,000",
                imagen: "https://altcoinsbox.com/wp-content/uploads/2023/03/matic-logo.webp",
                color: "#8247e5",
                apicoingecko: "https://api.coingecko.com/api/v3/coins/aave-polygon-wmatic/market_chart?vs_currency=usd&days=0",
                apilemon: "https://criptoya.com/api/lemoncash/matic"
            },
            {
                id: "tron",
                nombre: "Tron",
                desc: "Tron es una plataforma de contratos inteligentes basada en la tecnología blockchain. Tron utiliza un algoritmo de consenso de prueba de participación delegada y un sistema de validación descentralizado para asegurar una alta velocidad de transacción y bajos costos.",
                lanzamiento: "31 de agosto de 2017",
                iso: "TRX",
                simbolo: "TRX",
                desarrollador: "Justin Sun",
                limitedeemision: "100,850,743,812",
                imagen: "https://cdn.discordapp.com/attachments/802944543510495292/1181813633110507531/tron-trx-logo.png?ex=65826cb7&is=656ff7b7&hm=3bc8731686026cbf5cc32024c62b6d58d1d6bda5ce710bd2ea0fe246537ee5e2&",
                color: "#d9012c",
                apicoingecko: "https://api.coingecko.com/api/v3/coins/tron/market_chart?vs_currency=usd&days=0",
                apilemon: "https://criptoya.com/api/bybit/trx/ars"
            },
            ]

        Criptomonedas.forEach(async cripto => {
            if (interaction.options.getSubcommand() === cripto.id) {

                try {
                    const [apiCoingecko, apiLemon] = await Promise.all([
                        axios.get(cripto.apicoingecko),
                        axios.get(cripto.apilemon),
                    ]);
                    let criptodolar: number = apiCoingecko.data['prices'][0][1]
                                const embed1 = new Discord.EmbedBuilder()
                                embed1.setTitle(cripto.nombre)
                                .setColor(cripto.color)
                                .setDescription(cripto.desc)
                                .setThumbnail(cripto.imagen)
                                if (cripto.id === "terraluna") {
                                    embed1.addFields(
                                            { name: `Precio `, value: `${formatoPrecio(criptodolar,"USD")}`, inline: true },
                                            { name: `Volumen `, value: `${formatoPrecio(((apiCoingecko.data['total_volumes'][0][1])),"USD")}`, inline: true },
                                            { name: `Capitalización `, value: `${formatoPrecio(((apiCoingecko.data['market_caps'][0][1])),"USD")}`, inline: true },
                                            { name: `Compra `, value: `ARS${formatoPrecio(criptodolar * apiLemon.data['bid'], "ARS")}`, inline: true },
                                            { name: `Venta `, value: `ARS${formatoPrecio(criptodolar * apiLemon.data['ask'], "ARS")}`, inline: true }
                                          )}

                                else {
                                    embed1.addFields(
                                            { name: `Precio `, value: `${formatoPrecio(criptodolar, "USD")}`, inline: true },
                                            { name: `Volumen `, value: `${formatoPrecio(((apiCoingecko.data['total_volumes'][0][1])), "USD")}`, inline: true },
                                            { name: `Capitalización `, value: `${formatoPrecio(((apiCoingecko.data['market_caps'][0][1])), "USD")}`, inline: true },
                                            { name: `Compra `, value: `ARS${formatoPrecio(apiLemon.data['bid'], "ARS")}`, inline: true },
                                            { name: `Venta `, value: `ARS${formatoPrecio(apiLemon.data['ask'], "ARS")}`, inline: true }
                                          )  }

                                const embed2 = new Discord.EmbedBuilder()
                                    .setTitle(cripto.nombre)
                                    .setColor(cripto.color)
                                    .setDescription(cripto.desc)
                                    .setThumbnail(cripto.imagen)
                                    .addFields(
                                        { name: "Lanzamiento inicial", value: cripto.lanzamiento },
                                        { name: "Código ISO", value: cripto.iso, inline: true },
                                        { name: "Símbolo ", value: cripto.simbolo, inline: true },
                                        { name: "Desarrollador ", value: cripto.desarrollador },
                                        { name: "Límite de Emisión  ", value: cripto.limitedeemision }
                                      )

                                const row = new ActionRowBuilder()
                                    .addComponents(
                                        new ButtonBuilder()
                                            .setCustomId("criptodolar")
                                            .setLabel("💸 Conversión ")
                                            .setStyle(ButtonStyle.Success)
                                    )
                                    .addComponents(
                                        new ButtonBuilder()
                                            .setCustomId("informacion")
                                            .setLabel("📋 Información")
                                            .setStyle(ButtonStyle.Primary)
                                    )

                                await interaction.deferReply();
                                setTimeout(async () => {
                                    await interaction.editReply({ embeds: [embed1], components: [row] });
                                }, 3000)
                                client.on('interactionCreate', interaction => {
                                    if (!interaction.isButton()) return;
                                });
                                const filter = i => i.user.id === interaction.user.id;

                                const collector = interaction.channel.createMessageComponentCollector({ filter, time: 8000 });

                                var actual = embed1

                                collector.on('collect', async i => {
                                    if (i.customId === 'criptodolar') {
                                        await i.deferUpdate()
                                        await i.editReply({ embeds: [embed1], components: [row] });
                                        actual = embed1
                                    }
                                    if (i.customId === 'informacion') {
                                        await i.deferUpdate();
                                        await i.editReply({ embeds: [embed2], components: [row] });
                                        actual = embed2
                                    }
                                });

                                collector.on("end", (collected, reason) => {
                                    if (reason === "time") {
                                        interaction.editReply({ embeds: [actual], components: [] });
                                    }
                                })

                            
                        } catch (error) {

                       embedError(interaction, error)
                        }

            }
        })
    }


}