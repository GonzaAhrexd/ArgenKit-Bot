"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js');
const paginationEmbed = require('discordjs-button-pagination'); //Botones
const Discord = require("discord.js");
const { porcentaje } = require("../functions/funPorcentaje");
const axios = require("axios");
var currencyFormatter = require('currency-formatter'); //Currency formatter
const { total75, total74, total100 } = require("../functions/impuestos"); //Impuestos
const infobox = require('wiki-infobox');
module.exports = {
    data: new SlashCommandBuilder()
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
        .setDescription('Muestra los datos y precio actual del Terra Luna 2.0')),
    run(client, interaction, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let Criptomonedas = 
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
                }
            ];
            Criptomonedas.forEach(cripto => {
                if (interaction.options.getSubcommand() === cripto.id) {
                    axios.get(cripto.apicoingecko)
                        .then((CRIPTOINFO) => {
                        let conversion = CRIPTOINFO.data['prices'][0][1];
                        axios.get(cripto.apilemon)
                            .then((LEMON) => {
                            const embed1 = new Discord.MessageEmbed();
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
                                .addComponents(new MessageButton()
                                .setCustomId("conversion")
                                .setLabel("💸 Conversión ")
                                .setStyle("SUCCESS"))
                                .addComponents(new MessageButton()
                                .setCustomId("informacion")
                                .setLabel("📋 Información")
                                .setStyle("PRIMARY"));
                            interaction.reply({ embeds: [embed1], components: [row] });
                            client.on('interactionCreate', interaction => {
                                if (!interaction.isButton())
                                    return;
                            });
                            const filter = i => i.user.id === interaction.user.id;
                            const collector = interaction.channel.createMessageComponentCollector({ filter, time: 8000 });
                            var actual = embed1;
                            collector.on('collect', (i) => __awaiter(this, void 0, void 0, function* () {
                                if (i.customId === 'conversion') {
                                    yield i.deferUpdate();
                                    yield i.editReply({ embeds: [embed1], components: [row] });
                                    actual = embed1;
                                }
                                if (i.customId === 'informacion') {
                                    yield i.deferUpdate();
                                    yield i.editReply({ embeds: [embed2], components: [row] });
                                    actual = embed2;
                                }
                            }));
                            collector.on("end", (collected, reason) => {
                                if (reason === "time") {
                                    interaction.editReply({ embeds: [actual], components: [] });
                                }
                            });
                        })
                            .catch((err) => {
                            console.error('ERR', err);
                        });
                    })
                        .catch((err) => {
                        console.error('ERR', err);
                    });
                }
            });
            //Decentraland
            if (interaction.options.getSubcommand() === 'decentraland') {
                axios.get('https://api.coingecko.com/api/v3/coins/decentraland/market_chart?vs_currency=usd&days=0')
                    .then((MANA) => {
                    let tl = MANA.data['prices'][0][1];
                    axios.get('https://criptoya.com/api/lemoncash/mana')
                        .then((USD) => {
                        const embed1 = new Discord.MessageEmbed()
                            .setTitle("Decentraland")
                            .setColor("#ffa6b7")
                            .setDescription("Decentraland + impuestos (PAIS (30%) y adelanto de ganancias (45%)")
                            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964351096871088128/decentraland.png")
                            .addField("Precio <:decentraland:964349085089931324>", 'USD$ ' + currencyFormatter.format(((tl)), { locale: 'es-ES', code: ' ' }), true)
                            .addField("Volumen  <:decentraland:964349085089931324>", 'USD$ ' + currencyFormatter.format(((MANA.data['total_volumes'][0][1])), { locale: 'es-ES', code: ' ' }), true)
                            .addField("Capitalización <:decentraland:964349085089931324>", 'USD$ ' + currencyFormatter.format(((MANA.data['market_caps'][0][1])), { locale: 'es-ES', code: ' ' }), true)
                            .addField("Compra <:decentraland:964349085089931324>", 'ARS$ ' + currencyFormatter.format(USD.data['bid'], { locale: 'es-ES', code: ' ' }), true)
                            .addField("Venta <:decentraland:964349085089931324>", 'ARS$ ' + currencyFormatter.format(USD.data['ask'], { locale: 'es-ES', code: ' ' }), true);
                        const embed2 = new Discord.MessageEmbed()
                            .setTitle("Decentraland")
                            .setColor("#ffa6b7")
                            .setDescription("Decentraland es una plataforma de realidad virtual descentralizada 3D que consiste en 90601 parcelas de tierra. La propiedad virtual en decentraland son los NFT que se pueden comprar por medio de la criptomoneda MANA, que está basada en la Blockchain de Ethereum. Fue inauguarada de manera pública en febrero de 2020,​ y se es supervisada por la organización sin ánimo de lucro Decentraland Foundation .Fue desarrollada por los argentinos Ari Meilich y Esteban Ordano ")
                            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964351096871088128/decentraland.png")
                            .addField("Lanzamiento inicial", "20 de febrero de 2020")
                            .addField("Código ISO", "MANA ", true)
                            .addField("Símbolo ", "	- ", true)
                            .addField("Desarrollador ", "Ari Meilich y Esteban Ordano")
                            .addField("Límite de Emisión  ", "Sin límite");
                        const button1 = new MessageButton()
                            .setCustomId("previousbtn")
                            .setLabel("💸 Conversión ")
                            .setStyle("SUCCESS");
                        const button2 = new MessageButton()
                            .setCustomId("nextbtn")
                            .setLabel("📋 Información")
                            .setStyle("PRIMARY");
                        const pages = [
                            embed1,
                            embed2,
                        ];
                        const buttonList = [button1, button2];
                        const timeout = 30000;
                        paginationEmbed(interaction, pages, buttonList, timeout);
                    })
                        .catch((err) => {
                        console.error('ERR', err);
                    });
                })
                    .catch((err) => {
                    console.error('ERR', err);
                });
            }
            //Solana
            if (interaction.options.getSubcommand() === 'solana') {
                axios.get('https://api.coingecko.com/api/v3/coins/solana/market_chart?vs_currency=usd&days=0')
                    .then((MANA) => {
                    let tl = MANA.data['prices'][0][1];
                    axios.get('https://criptoya.com/api/lemoncash/sol')
                        .then((USD) => {
                        const embed1 = new Discord.MessageEmbed()
                            .setTitle("Solana")
                            .setColor("#2488ff")
                            .setDescription("Decentraland + impuestos (PAIS (30%) y adelanto de ganancias (45%)")
                            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964351112725540934/solana.png")
                            .addField("Precio <:solana:964349096775282738>", 'USD$ ' + currencyFormatter.format(((tl)), { locale: 'es-ES', code: ' ' }), true)
                            .addField("Volumen  <:solana:964349096775282738>", 'USD$ ' + currencyFormatter.format(((MANA.data['total_volumes'][0][1])), { locale: 'es-ES', code: ' ' }), true)
                            .addField("Capitalización  <:solana:964349096775282738>", 'USD$ ' + currencyFormatter.format(((MANA.data['market_caps'][0][1])), { locale: 'es-ES', code: ' ' }), true)
                            .addField("Compra <:solana:964349096775282738>", 'ARS$ ' + currencyFormatter.format(USD.data['bid'], { locale: 'es-ES', code: ' ' }), true)
                            .addField("Venta <:solana:964349096775282738>", 'ARS$ ' + currencyFormatter.format(USD.data['ask'], { locale: 'es-ES', code: ' ' }), true);
                        const embed2 = new Discord.MessageEmbed()
                            .setTitle("Solana")
                            .setColor("#2488ff")
                            .setDescription("Solana ")
                            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964351112725540934/solana.png")
                            .addField("Lanzamiento inicial", "Abril de 2019")
                            .addField("Código ISO", "SOL", true)
                            .addField("Símbolo ", "	◎ ", true)
                            .addField("Desarrollador ", "Anatoly Yakovenko, Greg Fitzgerald, Stephen Akridge, Raj Gokal")
                            .addField("Límite de Emisión  ", "$40.000.000.000 (Abril de 2022)");
                        const button1 = new MessageButton()
                            .setCustomId("previousbtn")
                            .setLabel("💸 Conversión ")
                            .setStyle("SUCCESS");
                        const button2 = new MessageButton()
                            .setCustomId("nextbtn")
                            .setLabel("📋 Información")
                            .setStyle("PRIMARY");
                        const pages = [
                            embed1,
                            embed2,
                        ];
                        const buttonList = [button1, button2];
                        const timeout = 30000;
                        paginationEmbed(interaction, pages, buttonList, timeout);
                    })
                        .catch((err) => {
                        console.error('ERR', err);
                    });
                })
                    .catch((err) => {
                    console.error('ERR', err);
                });
            }
            //DAI
            if (interaction.options.getSubcommand() === 'dai') {
                axios.get('https://api.coingecko.com/api/v3/coins/dai/market_chart?vs_currency=usd&days=0')
                    .then((DAI) => {
                    let dai = DAI.data['prices'][0][1];
                    axios.get('https://criptoya.com/api/lemoncash/dai')
                        .then((USD) => {
                        const embed1 = new Discord.MessageEmbed()
                            .setTitle("DAI")
                            .setColor("#efc637")
                            .setDescription("DAI + impuestos (PAIS (30%) y adelanto de ganancias (45%)")
                            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964681693292285962/dai.png")
                            .addField("Precio <:dai:964681594344443904>", 'USD$ ' + currencyFormatter.format(((dai)), { locale: 'es-ES', code: ' ' }), true)
                            .addField("Volumen  <:dai:964681594344443904>", 'USD$ ' + currencyFormatter.format(((DAI.data['total_volumes'][0][1])), { locale: 'es-ES', code: ' ' }), true)
                            .addField("Capitalización  <:dai:964681594344443904>", 'USD$ ' + currencyFormatter.format(((DAI.data['market_caps'][0][1])), { locale: 'es-ES', code: ' ' }), true)
                            .addField("Compra <:dai:964681594344443904>", 'ARS$ ' + currencyFormatter.format(USD.data['bid'], { locale: 'es-ES', code: ' ' }), true)
                            .addField("Venta <:dai:964681594344443904>", 'ARS$ ' + currencyFormatter.format(USD.data['ask'], { locale: 'es-ES', code: ' ' }), true);
                        const embed2 = new Discord.MessageEmbed()
                            .setTitle("DAI")
                            .setColor("#efc637")
                            .setDescription("Dai (o DAI) es una criptomoneda estable que tiene como objetivo mantener su valor lo más cercano posible al dólar estadounidense (USD) a través de un sistema automatizado de contratos inteligentes en la cadena de bloques de Ethereum. ")
                            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964681693292285962/dai.png")
                            .addField("Lanzamiento inicial", "18 de diciembre de 2017")
                            .addField("Código ISO", "DAI", true)
                            .addField("Símbolo ", "	DAI ", true)
                            .addField("Desarrollador ", "Maker Foundation")
                            .addField("Límite de Emisión  ", "Respaldado en dólares, otras criptomonedas y contratos inteligentes");
                        const button1 = new MessageButton()
                            .setCustomId("previousbtn")
                            .setLabel("💸 Conversión ")
                            .setStyle("SUCCESS");
                        const button2 = new MessageButton()
                            .setCustomId("nextbtn")
                            .setLabel("📋 Información")
                            .setStyle("PRIMARY");
                        const pages = [
                            embed1,
                            embed2,
                        ];
                        const buttonList = [button1, button2];
                        const timeout = 30000;
                        paginationEmbed(interaction, pages, buttonList, timeout);
                    })
                        .catch((err) => {
                        console.error('ERR', err);
                    });
                })
                    .catch((err) => {
                    console.error('ERR', err);
                });
            }
            //Dogecoin
            if (interaction.options.getSubcommand() === 'dogecoin') {
                axios.get('https://api.coingecko.com/api/v3/coins/dogecoin/market_chart?vs_currency=usd&days=0')
                    .then((DAI) => {
                    let dogecoin = DAI.data['prices'][0][1];
                    axios.get('https://criptoya.com/api/bitso/doge')
                        .then((USD) => {
                        const embed1 = new Discord.MessageEmbed()
                            .setTitle("DOGECOIN")
                            .setColor("#f5a431")
                            .setDescription("Dogecoin a precio del mercado (Cotización bitso)")
                            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964686112096391189/dogecoin.png")
                            .addField("Precio <:dogecoin:964686144530939904>", 'USD$ ' + currencyFormatter.format(((dogecoin)), { locale: 'es-ES', code: ' ' }), true)
                            .addField("Volumen  <:dogecoin:964686144530939904>", 'USD$ ' + currencyFormatter.format(((DAI.data['total_volumes'][0][1])), { locale: 'es-ES', code: ' ' }), true)
                            .addField("Capitalización  <:dogecoin:964686144530939904>", 'USD$ ' + currencyFormatter.format(((DAI.data['market_caps'][0][1])), { locale: 'es-ES', code: ' ' }), true)
                            .addField("Compra <:dogecoin:964686144530939904>", 'ARS$ ' + currencyFormatter.format(((dogecoin)) * USD.data['bid'], { locale: 'es-ES', code: ' ' }), true)
                            .addField("Venta <:dogecoin:964686144530939904>", 'ARS$ ' + currencyFormatter.format(((dogecoin)) * USD.data['ask'], { locale: 'es-ES', code: ' ' }), true);
                        const embed2 = new Discord.MessageEmbed()
                            .setTitle("Dogecoin")
                            .setColor("#f5a431")
                            .setDescription("Dogecoin (código: DOGE, símbolo: Ð y D) es una criptodivisa derivada de Bitcoin que usa como mascota un perro Shiba Inu del meme de Internet «Doge». Es una criptomoneda inflacionaria porque no tiene límite de emisión. La segunda quincena de junio de 2014, se había minado más de 100 mil millones (100,000,000,000) de Dogecoins. Tiene un coste energético por transacción de de 0.12 kWh por transacción frente a los 707 kWh por transacción de Bitcoin. Energéticamente, Dogecoin es 5892 veces más eficiente que Bitcoin.7")
                            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964686112096391189/dogecoin.png")
                            .addField("Lanzamiento inicial", "6 de diciembre de 2013 ")
                            .addField("Código ISO", "DOGE", true)
                            .addField("Símbolo ", "	Ð ", true)
                            .addField("Desarrollador ", "Billy Markus (Shibetoshi Nakamoto), Jackson Palmer")
                            .addField("Límite de Emisión  ", "Sin límite ");
                        const button1 = new MessageButton()
                            .setCustomId("previousbtn")
                            .setLabel("💸 Conversión ")
                            .setStyle("SUCCESS");
                        const button2 = new MessageButton()
                            .setCustomId("nextbtn")
                            .setLabel("📋 Información")
                            .setStyle("PRIMARY");
                        const pages = [
                            embed1,
                            embed2,
                        ];
                        const buttonList = [button1, button2];
                        const timeout = 30000;
                        paginationEmbed(interaction, pages, buttonList, timeout);
                    })
                        .catch((err) => {
                        console.error('ERR', err);
                    });
                })
                    .catch((err) => {
                    console.error('ERR', err);
                });
            }
        });
    }
};
