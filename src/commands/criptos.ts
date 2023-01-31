// @ts-ignore
const { SlashCommandBuilder } = require("@discordjs/builders")
// @ts-ignore
const { MessageEmbed } = require("discord.js")
// @ts-ignore
const { MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js');
// @ts-ignore
const paginationEmbed = require('discordjs-button-pagination'); //Botones
// @ts-ignore
const Discord = require("discord.js");
// @ts-ignore
const axios = require("axios")
// @ts-ignore
var currencyFormatter = require('currency-formatter'); //Currency formatter
// @ts-ignore
const { total75, total74, total100 } = require("../functions/impuestos"); //Impuestos
module.exports = {
    data: new SlashCommandBuilder()
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
        ),

    async run(client, interaction, options) {

        let Criptomonedas: Array<{
            id: String,
            nombre: String,
            emoji: string,
            desc: string,
            lanzamiento: string,
            iso: string,
            simbolo: string,
            desarrollador: string,
            limitedeemision: string,
            imagen: String
            color: String
            apicoingecko: string
            apilemon?: string

        }> =
            //BTC
            [{
                id: "bitcoin",
                nombre: "Bitcoin",
                emoji: "<:bitcoin:929073179262074960>",
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
                emoji: "<:ethereum:963619533271232532>",
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
                emoji: "<:tether:964346292815945828>",
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
                emoji: "<:axieinfinity:964349059236257852>",
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
                emoji: "<:terraluna2_large:980222259471978526>",
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
                emoji: "<:decentraland:964349085089931324>",
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
                emoji: "<:solana:964349096775282738>",
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
                emoji: "<:dai:964681594344443904>",
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
                emoji: "<:dogecoin:964686144530939904>",
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
            }
            ]

        Criptomonedas.forEach(async cripto => {
            if (interaction.options.getSubcommand() === cripto.id) {
                await axios.get(cripto.apicoingecko)
                    .then(async (CRIPTOINFO) => {
                        let conversion: number = CRIPTOINFO.data['prices'][0][1];

                        await axios.get(cripto.apilemon)
                            .then(async (LEMON) => {
                                const embed1 = new Discord.MessageEmbed()

                                if (cripto.id === "terraluna") {
                                    embed1
                                        .setTitle(cripto.nombre)
                                        .setColor(cripto.color)
                                        .setDescription(cripto.desc)
                                        .setThumbnail(cripto.imagen)
                                        .addField(`Precio ${cripto.emoji}`, 'USD$ ' + currencyFormatter.format(conversion, { locale: 'es-ES', code: ' ' }), true)
                                        .addField(`Volumen ${cripto.emoji}`, 'USD$ ' + currencyFormatter.format(((CRIPTOINFO.data['total_volumes'][0][1])), { locale: 'es-ES', code: ' ' }), true)
                                        .addField(`Capitalización ${cripto.emoji}`, 'USD$ ' + currencyFormatter.format(((CRIPTOINFO.data['market_caps'][0][1])), { locale: 'es-ES', code: ' ' }), true)
                                        .addField(`Compra ${cripto.emoji}`, 'ARS$ ' + currencyFormatter.format(conversion * LEMON.data['bid'], { locale: 'es-ES', code: ' ' }), true)
                                        .addField(`Venta ${cripto.emoji}`, 'ARS$ ' + currencyFormatter.format(conversion * LEMON.data['ask'], { locale: 'es-ES', code: ' ' }), true);
                                }

                                else {
                                    embed1
                                        .setTitle(cripto.nombre)
                                        .setColor(cripto.color)
                                        .setDescription(cripto.desc)
                                        .setThumbnail(cripto.imagen)
                                        .addField(`Precio ${cripto.emoji}`, 'USD$ ' + currencyFormatter.format(conversion, { locale: 'es-ES', code: ' ' }), true)
                                        .addField(`Volumen ${cripto.emoji}`, 'USD$ ' + currencyFormatter.format(((CRIPTOINFO.data['total_volumes'][0][1])), { locale: 'es-ES', code: ' ' }), true)
                                        .addField(`Capitalización ${cripto.emoji}`, 'USD$ ' + currencyFormatter.format(((CRIPTOINFO.data['market_caps'][0][1])), { locale: 'es-ES', code: ' ' }), true)
                                        .addField(`Compra ${cripto.emoji}`, 'ARS$ ' + currencyFormatter.format(LEMON.data['bid'], { locale: 'es-ES', code: ' ' }), true)
                                        .addField(`Venta ${cripto.emoji}`, 'ARS$ ' + currencyFormatter.format(LEMON.data['ask'], { locale: 'es-ES', code: ' ' }), true);
                                }

                                const embed2 = new Discord.MessageEmbed()
                                    .setTitle(cripto.nombre)
                                    .setColor(cripto.color)
                                    .setDescription(cripto.desc)
                                    .setThumbnail(cripto.imagen)
                                    .addField("Lanzamiento inicial", cripto.lanzamiento)
                                    .addField("Código ISO", cripto.iso, true)
                                    .addField("Símbolo ", cripto.simbolo, true)
                                    .addField("Desarrollador ", cripto.desarrollador)
                                    .addField("Límite de Emisión  ", cripto.limitedeemision);


                                const row = new MessageActionRow()
                                    .addComponents(
                                        new MessageButton()
                                            .setCustomId("conversion")
                                            .setLabel("💸 Conversión ")
                                            .setStyle("SUCCESS")
                                    )
                                    .addComponents(
                                        new MessageButton()
                                            .setCustomId("informacion")
                                            .setLabel("📋 Información")
                                            .setStyle("PRIMARY")
                                    )




                                    await interaction.deferReply();
                                    setTimeout(() => {
                                        interaction.editReply({ embeds: [embed1], components: [row] });
                                    }, 3000)
                                client.on('interactionCreate', interaction => {
                                    if (!interaction.isButton()) return;
                                });
                                const filter = i => i.user.id === interaction.user.id;

                                const collector = interaction.channel.createMessageComponentCollector({ filter, time: 8000 });

                                var actual = embed1

                                collector.on('collect', async i => {
                                    if (i.customId === 'conversion') {
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

                            })
                            .catch((err) => {
                                console.error('ERR', err);
                            });
                    })
                    .catch((err) => {
                        console.error('ERR', err);
                    });

            }
        })



        //Decentraland
        //Solana
        //DAI//Dogecoin

          }


}