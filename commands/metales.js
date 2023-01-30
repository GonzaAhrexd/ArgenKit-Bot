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
// @ts-ignore
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
        .setName('metal')
        .setDescription('Muestra los datos los datos de un metal')
        .addSubcommand(subcommand => subcommand.setName('oro')
        .setDescription('Muestra los datos y precio del oro')).addSubcommand(subcommand => subcommand.setName('plata')
        .setDescription('Muestra los datos y precio de la plata')).addSubcommand(subcommand => subcommand.setName('paladio')
        .setDescription('Muestra los datos y precio del paladio')).addSubcommand(subcommand => subcommand.setName('platino')
        .setDescription('Muestra los datos y precio del platino')),
    run(client, interaction, options) {
        return __awaiter(this, void 0, void 0, function* () {
            //Oro
            let Metales = [{
                    id: "oro",
                    nombre: "Oro",
                    emoji: "<:goldingots:964717629484965938>",
                    desc: "El oro es un elemento químico cuyo número atómico es 79. Está ubicado en el grupo 11 de la tabla periódica. Es un metal precioso blando de color amarillo dorado. Su símbolo es Au (del latín aurum, ‘brillante amanecer’). Además, es uno de los metales más apreciados en joyería por sus propiedades físicas, al tener baja alterabilidad, ser muy maleable, dúctil y brillante, y valorado por su rareza, al ser un metal difícil de encontrar en la naturaleza.",
                    iso: "XAU",
                    numeroysimboloatomico: "79 - Au",
                    dureza: "3,0",
                    masaatomica: "196,966569(4) u",
                    imagen: "https://cdn.discordapp.com/attachments/802944543510495292/964716664023285870/gold-ingots_1.png",
                    color: "#fddc4d"
                },
                {
                    id: "plata",
                    nombre: "Plata",
                    emoji: "<:silver:964717593816600606>",
                    desc: "La plata es un elemento químico cuyo número atómico es 47. Está ubicado en el grupo 11 de la tabla periódica. Es un metal blanco plateado y muy valorado por sus propiedades conductoras de electricidad y termo conductoras. Además, es uno de los metales más utilizados en la fabricación de joyas y monedas. Su símbolo es Ag (del latín argentum, ‘plata’).",
                    iso: "XAG",
                    numeroysimboloatomico: "47 - Ag",
                    dureza: "2,5",
                    masaatomica: "107,8682(2) u",
                    imagen: "https://cdn.discordapp.com/attachments/802944543510495292/964713789540958238/silver.png",
                    color: "#cccccc"
                },
            ];
            Metales.forEach(Metal => {
                if (interaction.options.getSubcommand() === Metal.id) {
                    axios.get('https://api.exchangerate.host/latest')
                        .then((METAL) => {
                        let conversion = METAL.data['rates'][Metal.iso];
                        axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
                            .then((oficial) => {
                            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/blue')
                                .then((blue) => {
                                console.log(conversion);
                                const embed1 = new Discord.MessageEmbed()
                                    .setTitle(`${Metal.nombre} ${Metal.emoji}`)
                                    .setColor(Metal.color)
                                    .setDescription(Metal.desc)
                                    .setThumbnail(Metal.imagen)
                                    .addField(`Precio en dólares ${Metal.emoji}`, 'USD$ ' + currencyFormatter.format((1 / conversion), { locale: 'es-ES', code: ' ' }), true)
                                    //Oficial
                                    .addField(`Compra ${Metal.emoji}`, 'ARS$ ' + currencyFormatter.format(((1 / conversion)) * oficial.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                                    .addField(`Venta ${Metal.emoji}`, 'ARS$ ' + currencyFormatter.format(((1 / conversion)) * oficial.data['venta'], { locale: 'es-ES', code: ' ' }), true)
                                    //Impuestos
                                    .addField("IMPUESTOS <:taxes:1068370368819101746>", "\n Impuestos aplicados al valor oficial en los pagos con tarjeta o compra del banco  ", false)
                                    .addField("TARJETA (74%)  ", "ARS$ " + currencyFormatter.format(total74((1 / conversion) * oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                                    .addField("SOLIDARIO (75%)  ", "ARS$ " + currencyFormatter.format(total75((1 / conversion) * oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                                    .addField("TURISTA (100%)  ", "ARS$ " + currencyFormatter.format(total100((1 / conversion) * oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                                    //Blue
                                    .addField(Metal.nombre + "a precio blue <:dollarblue:903149186436980767>", "Valor del mercado paralelo establecido por la oferta y la demanda", false)
                                    .addField("COMPRA  ", "ARS$ " + currencyFormatter.format((1 / conversion) * blue.data['venta'], { locale: 'es-ES', code: ' ' }), true)
                                    .addField("VENTA ", "ARS$ " + currencyFormatter.format((1 / conversion) * blue.data['venta'], { locale: 'es-ES', code: ' ' }), true);
                                const embed2 = new Discord.MessageEmbed()
                                    .setTitle("Oro")
                                    .setColor("#fddc4d")
                                    .setDescription(Metal.desc)
                                    .setThumbnail(Metal.imagen)
                                    .addField("Código ISO", Metal.iso, true)
                                    .addField("Número y símbolo atómico ", Metal.numeroysimboloatomico, true)
                                    .addField("Dureza ", Metal.dureza, true)
                                    .addField("Masa atómica", Metal.masaatomica, true);
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
                        })
                            .catch((err) => {
                            console.error('ERR', err);
                        });
                    });
                }
            });
            //Paladio
            if (interaction.options.getSubcommand() === 'paladio') {
                axios.get('https://api.exchangerate.host/latest')
                    .then((ladio) => {
                    let paladio = ladio.data['rates']['XPD'];
                    axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
                        .then((EUR) => {
                        const embed1 = new Discord.MessageEmbed()
                            .setTitle("Paladio <:silver:964717593816600606>  ")
                            .setColor("#808080")
                            .setDescription("Paladio + impuestos (PAIS (30%) y adelanto de ganancias (45%)")
                            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964713789259911218/paladio.png")
                            .addField("Compra <:paladio:964717594223456336>  ", 'ARS$ ' + currencyFormatter.format(((1 / paladio)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                            .addField("Venta <:paladio:964717594223456336> ", 'ARS$ ' + currencyFormatter.format(((1 / paladio)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' }), true)
                            .addField("Impuestos <:paladio:964717594223456336> ", 'ARS$ ' + currencyFormatter.format((((1 / paladio)) * EUR.data['venta'] * 1.75), { locale: 'es-ES', code: ' ' }), true);
                        const embed2 = new Discord.MessageEmbed()
                            .setTitle("Paladio")
                            .setColor("#808080")
                            .setDescription("El paladio es un elemento químico de número atómico 46 situado en el grupo 10 de la tabla periódica de los elementos. Su símbolo es Pd. Es un metal de transición del grupo del platino, blando, dúctil, maleable y poco abundante. Se parece químicamente al platino y se extrae de algunas minas de cobre y níquel. Se emplea principalmente como catalizador y en joyería.")
                            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964713789259911218/paladio.png")
                            .addField("Código ISO", "XPD ", true)
                            .addField("Número y símbolo atómico ", "46 - Pd ", true)
                            .addField("Dureza ", "4,75", true)
                            .addField("Masa atómica", "106,42 u", true);
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
            //Platino
            if (interaction.options.getSubcommand() === 'platino') {
                axios.get('https://api.exchangerate.host/latest')
                    .then((pl) => {
                    let platino = pl.data['rates']['XPT'];
                    axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
                        .then((EUR) => {
                        const embed1 = new Discord.MessageEmbed()
                            .setTitle("Platino <:platinum:964717592923222017>")
                            .setColor("#a9f8f7")
                            .setDescription("Paladio + impuestos (PAIS (30%) y adelanto de ganancias (45%)")
                            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964713788978913320/platinum.png")
                            .addField("Compra  <:platinum:964717592923222017>  ", 'ARS$ ' + currencyFormatter.format(((1 / platino)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                            .addField("Venta  <:platinum:964717592923222017> ", 'ARS$ ' + currencyFormatter.format(((1 / platino)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' }), true)
                            .addField("Impuestos  <:platinum:964717592923222017> ", 'ARS$ ' + currencyFormatter.format((((1 / platino)) * EUR.data['venta'] * 1.75), { locale: 'es-ES', code: ' ' }), true);
                        const embed2 = new Discord.MessageEmbed()
                            .setTitle("Platino")
                            .setColor("#a9f8f7")
                            .setDescription("El platino es un elemento químico de número atómico 78, situado en el grupo 10 de la tabla periódica de los elementos. Su símbolo es Pt. Se trata de un metal de transición blanco grisáceo, precioso, pesado, maleable y dúctil. Es resistente a la corrosión y se encuentra en distintos minerales, frecuentemente junto con níquel y cobre; también se puede encontrar como metal. Se emplea en joyería, equipamiento de laboratorio, contactos eléctricos, empastes y catalizadores de automóviles.")
                            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964713788978913320/platinum.png")
                            .addField("Código ISO", "XPT ", true)
                            .addField("Número y símbolo atómico ", "78 - Pt ", true)
                            .addField("Dureza ", "4,3", true)
                            .addField("Masa atómica", "195.084 u", true);
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
