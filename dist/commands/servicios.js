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
//@ts-ignore
const { SlashCommandBuilder } = require("@discordjs/builders");
//@ts-ignore
const { MessageEmbed } = require("discord.js");
//@ts-ignore
const Discord = require("discord.js");
//@ts-ignore
const axios = require("axios");
//@ts-ignore
var currencyFormatter = require('currency-formatter'); //Currency formatter
//@ts-ignore
const { MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js');
//@ts-ignore
const { total75, total74 } = require("../functions/impuestos"); //Impuestos
module.exports = {
    data: new SlashCommandBuilder()
        .setName('servicio')
        .setDescription('Mostrar el precio de un servicio de Streaming')
        .addSubcommand(subcommand => subcommand.setName('netflix')
        .setDescription('Muestra el precio de Netflix + impuestos'))
        .addSubcommand(subcommand => subcommand.setName('youtube')
        .setDescription('Muestra el precio de YouTube + impuestos'))
        .addSubcommand(subcommand => subcommand.setName('spotify')
        .setDescription('Muestra el precio de Spotify + impuestos'))
        .addSubcommand(subcommand => subcommand.setName('crunchyroll')
        .setDescription('Muestra el precio de Crunchyroll + impuestos'))
        .addSubcommand(subcommand => subcommand.setName('disney')
        .setDescription('Muestra el precio de Disney+ + impuestos'))
        .addSubcommand(subcommand => subcommand.setName('xboxgamepass')
        .setDescription('Muestra el precio de Xbox GamePass + impuestos'))
        .addSubcommand(subcommand => subcommand.setName('primevideo')
        .setDescription('Muestra el precio de Prime Video + impuestos'))
        .addSubcommand(subcommand => subcommand.setName('appletv')
        .setDescription('Muestra el precio de Apple TV + impuestos'))
        .addSubcommand(subcommand => subcommand.setName('hbomax')
        .setDescription('Muestra el precio de HBO MAX + impuestos'))
        .addSubcommand(subcommand => subcommand.setName('discordnitro')
        .setDescription('Muestra el precio de Discord Nitro + impuestos'))
        .addSubcommand(subcommand => subcommand.setName('googleone')
        .setDescription('Muestra el precio de Google One + impuestos'))
        .addSubcommand(subcommand => subcommand.setName('ea')
        .setDescription('Muestra el precio de EA + impuestos'))
        .addSubcommand(subcommand => subcommand.setName('steam')
        .setDescription('Muestra el precio de Steam + impuestos'))
        .addSubcommand(subcommand => subcommand.setName('paramount')
        .setDescription('Muestra el precio de Paramount + impuestos'))
        .addSubcommand(subcommand => subcommand.setName('twitch')
        .setDescription('Muestra el precio de Twitch + impuestos')),
    run(client, interaction, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (interaction.options.getSubcommand() === 'netflix') {
                const embed = new Discord.MessageEmbed()
                    .setTitle("Netflix")
                    .setURL("https://www.netflix.com/ar/")
                    .setDescription("Los precios de Netflix con impuestos en Argentina son los siguientes: ")
                    .setColor('#9a0611')
                    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903356797920894996/netflix_2.png")
                    .addField("Básico:", "ARS$ " + currencyFormatter.format((total74(429)), { locale: 'es-ES', code: ' ' }))
                    .addField("Estándar:", "ARS$" + currencyFormatter.format((total74(799)), { locale: 'es-ES', code: ' ' }))
                    .addField("Premium:", "ARS$" + currencyFormatter.format((total74(1199)), { locale: 'es-ES', code: ' ' }));
                return interaction.reply({ embeds: [embed] });
            }
            if (interaction.options.getSubcommand() === 'youtube') {
                const embed = new Discord.MessageEmbed()
                    .setTitle("YouTube Premium")
                    .setURL("https://www.youtube.com/premium")
                    .setDescription("Los precios de YouTube Premium en Argentina con impuestos son los siguientes:")
                    .setColor('#ff0000')
                    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903357207310127185/youtube.png")
                    .addField("YouTube Music:", "ARS$ " + currencyFormatter.format((total75(299)), { locale: 'es-ES', code: ' ' }))
                    .addField("YouTube Premium Individual:", "ARS$ " + currencyFormatter.format((total75(389)), { locale: 'es-ES', code: ' ' }))
                    .addField("YouTube Premium Familiar:", "ARS$ " + currencyFormatter.format((total75(699)), { locale: 'es-ES', code: ' ' }));
                return interaction.reply({ embeds: [embed] });
            }
            if (interaction.options.getSubcommand() === 'spotify') {
                const embed = new Discord.MessageEmbed()
                    .setTitle("Spotify")
                    .setURL("https://www.spotify.com/ar/premium/")
                    .setDescription("Los precios de Spotify Premium en Argentina con impuestos son los siguientes: ")
                    .setColor('#7ad684')
                    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903358342733389854/spotify_1.png")
                    .addField("Individual:", "ARS$ " + currencyFormatter.format((total74(279)), { locale: 'es-ES', code: ' ' }))
                    .addField("Dúo:", "ARS$ " + currencyFormatter.format((total74(389)), { locale: 'es-ES', code: ' ' }))
                    .addField("Familiar:", "ARS$ " + currencyFormatter.format((total74(489)), { locale: 'es-ES', code: ' ' }))
                    .addField("Estudiantes: ", "ARS$ " + currencyFormatter.format((total74(119)), { locale: 'es-ES', code: ' ' }));
                return interaction.reply({ embeds: [embed] });
            }
            if (interaction.options.getSubcommand() === 'crunchyroll') {
                const embed = new Discord.MessageEmbed()
                    .setTitle("Crunchyroll")
                    .setURL("https://www.crunchyroll.com/es")
                    .setColor('#fec105')
                    .setDescription("Precio  de Crunchyroll  con impuestos en Argentina ")
                    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903849721699913778/crunchyroll.png")
                    .addField("Fan (1 MES):", "ARS$ " + currencyFormatter.format((total74(299)), { locale: 'es-ES', code: ' ' }))
                    .addField("Mega Fan (1 Mes):", "ARS$ " + currencyFormatter.format((total74(379)), { locale: 'es-ES', code: ' ' }))
                    .addField("Mega Fan (1 Año):", "ARS$ " + currencyFormatter.format((total74(3799)), { locale: 'es-ES', code: ' ' }));
                return interaction.reply({ embeds: [embed] });
            }
            if (interaction.options.getSubcommand() === 'disney') {
                const embed = new Discord.MessageEmbed()
                    .setTitle("Disney+")
                    .setURL("https://www.disneyplus.com/home")
                    .setDescription("Debido a que Disney factura en Argentina, este no cobra impuestos internacionales.")
                    .setColor('#3fa5dc')
                    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903852192929288213/icons8-disney-plus-480.png")
                    .addField("1 Mes:", "ARS$ 385,00", true)
                    .addField("1 Año:", "ARS$ 3850,00 ", true)
                    .addField("Combo con Star+ mensual", "ARS$ 995,00 ", true)
                    .addField("Combo con Star+ y StarZPlay mensual", "ARS$ 1150,00 ", true);
                return interaction.reply({ embeds: [embed] });
            }
            //Xbox
            if (interaction.options.getSubcommand() === 'xboxgamepass') {
                const embed = new Discord.MessageEmbed()
                    .setTitle("Xbox Game Pass")
                    .setURL("https://www.xbox.com/es-AR/xbox-game-pass")
                    .setDescription("Los precios de Xbox Game Pass con impuestos en Argentina son los siguientes: ")
                    .setColor('#a6ed75')
                    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903853195443445770/xbox.png")
                    .addField("Xbox Game Pass primer mes", "ARS$ " + currencyFormatter.format((39 * 1.74), { locale: 'es-ES', code: ' ' }))
                    .addField("Xbox Game Pass para PC", "ARS$ " + currencyFormatter.format((599 * 1.74), { locale: 'es-ES', code: ' ' }))
                    .addField("Xbox Game Pass Ultimate", "ARS$ " + currencyFormatter.format((899 * 1.74), { locale: 'es-ES', code: ' ' }));
                return interaction.reply({ embeds: [embed] });
            }
            //Prime Video
            if (interaction.options.getSubcommand() === 'primevideo') {
                const embed = new Discord.MessageEmbed()
                    .setTitle("Prime Video")
                    .setURL("https://www.primevideo.com/")
                    .setDescription("El precio de  Prime Video con impuestos en Argentina es el siguiente: ")
                    .setColor('#1aa6e0')
                    .setThumbnail("https://images.squarespace-cdn.com/content/v1/5dcd9a119133c421eadd4e73/1574287053801-RG0293YPJNWPKOV77KXW/ke17ZwdGBToddI8pDm48kPJXHKy2-mnvrsdpGQjlhod7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmrMDYraMJMCQwFxTSOIP7LpSBEQpA-g5k6VTjWbSuadHJq0dp98hg5AZvIaPb3DoM/Prime+Video+Icon.png")
                    .addField("Costo mensual", "ARS$ " + currencyFormatter.format((total74(319)), { locale: 'es-ES', code: ' ' }));
                return interaction.reply({ embeds: [embed] });
            }
            //AppleTV
            if (interaction.options.getSubcommand() === 'appletv') {
                axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/oficial')
                    .then((oficial) => {
                    const embed = new Discord.MessageEmbed()
                        .setTitle("Apple TV+")
                        .setURL("https://www.apple.com/la/tv/")
                        .setDescription("Los precios de Apple TV en Argentina son los siguientes: ")
                        .setColor('#eeeeee')
                        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913852356771319928/televisor_1.png")
                        .addField("Plan individual", 'ARS$  ' + currencyFormatter.format(((total74(9.95 * oficial.data['venta']))), { locale: 'es-ES', code: ' ' }))
                        .addField("Plan familiar", 'ARS$ ' + currencyFormatter.format(((total74(13.95 * oficial.data['venta']))), { locale: 'es-ES', code: ' ' }));
                    return interaction.reply({ embeds: [embed] });
                })
                    .catch((err) => {
                    console.error('ERR', err);
                });
            }
            //HBO Max
            if (interaction.options.getSubcommand() === 'hbomax') {
                const embed1 = new Discord.MessageEmbed()
                    .setTitle("HBO Max")
                    .setURL("https://www.hbomax.com/latam/es")
                    .setDescription("Precio de HBO Max  en  Argentina con impuestos ")
                    .setColor('#970899')
                    .setThumbnail("https://hbomax-images.warnermediacdn.com/2020-05/square%20social%20logo%20400%20x%20400_0.png")
                    .addField("Suscripción mensual móvil", "ARS$ " + currencyFormatter.format((279 * 1.74), { locale: 'es-ES', code: ' ' }))
                    .addField("Suscripción mensual estándar", "ARS$ " + currencyFormatter.format((399 * 1.74), { locale: 'es-ES', code: ' ' }))
                    .addField("Suscripción trimestral móvil", "ARS$ " + currencyFormatter.format((739 * 1.74), { locale: 'es-ES', code: ' ' }))
                    .addField("Suscripción trimestral estándar", "ARS$ " + currencyFormatter.format((1089 * 1.74), { locale: 'es-ES', code: ' ' }))
                    .addField("Suscripción anual móvil", "ARS$ " + currencyFormatter.format((2279 * 1.74), { locale: 'es-ES', code: ' ' }))
                    .addField("Suscripción anual estándar", "ARS$ " + currencyFormatter.format((3499 * 1.74), { locale: 'es-ES', code: ' ' }));
                return interaction.reply({ embeds: [embed1] });
            }
            //Nitro
            if (interaction.options.getSubcommand() === 'discordnitro') {
                axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/oficial')
                    .then((oficial) => {
                    const embed = new Discord.MessageEmbed()
                        .setTitle("Discord Nitro")
                        .setDescription("Los precios de Discord Nitro en Argentina son los siguientes: ")
                        .setColor('#8aa9fa')
                        .setThumbnail("https://gitdab.com/distok/apkfuckery/raw/commit/ceffadc1723d227e61ee1001a624979fd9c783bb/com.discord/res/drawable-xxxhdpi/img_wumpus_jetpack.png")
                        .addField("Discord Nitro Classic Mensual ", 'ARS$ ' + currencyFormatter.format(total74(216.99), { locale: 'es-ES', code: ' ' }))
                        .addField("Discord Nitro Mensual ", 'ARS$ ' + currencyFormatter.format((total74(584.99)), { locale: 'es-ES', code: ' ' }))
                        .addField("Discord Nitro Classic Anual  ", 'ARS$ ' + currencyFormatter.format((total74(2169.99)), { locale: 'es-ES', code: ' ' }))
                        .addField("Discord Nitro Anual  ", 'ARS$ ' + currencyFormatter.format((total74(5849.99)), { locale: 'es-ES', code: ' ' }));
                    return interaction.reply({ embeds: [embed] });
                })
                    .catch((err) => {
                    console.error('ERR', err);
                });
            }
            //Google One
            if (interaction.options.getSubcommand() === 'googleone') {
                axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/oficial')
                    .then((oficial) => {
                    const embed1 = new Discord.MessageEmbed()
                        .setTitle("Google One")
                        .setDescription("Los precios de Google One mensual en Argentina son los siguientes: ")
                        .setColor('#f1bb1a')
                        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913859037764911174/icons8-google-one-500.png")
                        .addField("Plan de 100GB (USD$ 1,99)", 'ARS$ ' + currencyFormatter.format(((1.99 * oficial.data['venta']) * 1.74), { locale: 'es-ES', code: ' ' }))
                        .addField("Plan de 200GB (USD$ 2,99)", 'ARS$ ' + currencyFormatter.format(((2.99 * oficial.data['venta']) * 1.74), { locale: 'es-ES', code: ' ' }))
                        .addField("Plan de 1TB (USD$ 9.99)", 'ARS$ ' + currencyFormatter.format(((9.99 * oficial.data['venta']) * 1.74), { locale: 'es-ES', code: ' ' }));
                    const embed2 = new Discord.MessageEmbed()
                        .setTitle("Google One")
                        .setDescription("Los precios de Google One anual en Argentina son los siguientes:")
                        .setColor('#f1bb1a')
                        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913859037764911174/icons8-google-one-500.png")
                        .addField("Plan de 100GB (USD$ 19,99)", 'ARS$ ' + currencyFormatter.format(((19.99 * oficial.data['venta']) * 1.74), { locale: 'es-ES', code: ' ' }))
                        .addField("Plan de 200GB (USD$ 29,99)", 'ARS$ ' + currencyFormatter.format(((29.99 * oficial.data['venta']) * 1.74), { locale: 'es-ES', code: ' ' }))
                        .addField("Plan de 1TB (USD$ 99,99)", 'ARS$ ' + currencyFormatter.format(((99.99 * oficial.data['venta']) * 1.74), { locale: 'es-ES', code: ' ' }));
                    const row = new MessageActionRow()
                        .addComponents(new MessageButton()
                        .setCustomId('mensual')
                        .setLabel("Mensual")
                        .setStyle("SUCCESS")).addComponents(new MessageButton()
                        .setCustomId('anual')
                        .setLabel("Anual")
                        .setStyle("PRIMARY"));
                    interaction.reply({ embeds: [embed1], components: [row] });
                    client.on('interactionCreate', interaction => {
                        if (!interaction.isButton())
                            return;
                    });
                    const filter = i => i.customId;
                    const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });
                    collector.on('collect', (i) => __awaiter(this, void 0, void 0, function* () {
                        if (i.customId === 'mensual') {
                            yield i.deferUpdate();
                            yield i.editReply({ embeds: [embed1], components: [row] });
                        }
                        if (i.customId === 'anual') {
                            yield i.deferUpdate();
                            yield i.editReply({ embeds: [embed2], components: [row] });
                        }
                    }));
                })
                    .catch((err) => {
                    console.error('ERR', err);
                });
            }
            //EA
            if (interaction.options.getSubcommand() === 'ea') {
                const embed = new Discord.MessageEmbed()
                    .setTitle("EA Play")
                    .setURL("https://store.steampowered.com/subscriptions/ea?l=latam")
                    .setDescription("Los precios de EA Play con impuestos en Argentina son los siguientes: ")
                    .setColor('#fe4747')
                    .setThumbnail("https://media.contentapi.ea.com/content/dam/eacom/es-mx/common/october-ea-ring.png")
                    .addField("EA Play Mensual", "ARS$  " + currencyFormatter.format((499 * 1.74), { locale: 'es-ES', code: ' ' }))
                    .addField("EA Play Anual:", "ARS$   " + currencyFormatter.format((3099 * 1.74), { locale: 'es-ES', code: ' ' }));
                return interaction.reply({ embeds: [embed] });
            }
            //Steam
            if (interaction.options.getSubcommand() === 'steam') {
                const embed = new Discord.MessageEmbed()
                    .setTitle("Fondos de la Cartera de Steam")
                    .setURL("https://store.steampowered.com/steamaccount/addfunds")
                    .setDescription("Los precios para recargar la cartera de Steam con impuestos en Argentina son los siguientes: ")
                    .setColor('#306fb5')
                    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913860761342836786/steam.png")
                    .addField("ARS$ 100 ", "ARS$ " + currencyFormatter.format((100 * 1.74), { locale: 'es-ES', code: ' ' }))
                    .addField("ARS$ 160 ", "ARS$  " + currencyFormatter.format((160 * 1.74), { locale: 'es-ES', code: ' ' }))
                    .addField("ARS$ 400 ", "ARS$   " + currencyFormatter.format((400 * 1.74), { locale: 'es-ES', code: ' ' }))
                    .addField("ARS$ 800 ", "ARS$  " + currencyFormatter.format((800 * 1.74), { locale: 'es-ES', code: ' ' }))
                    .addField("ARS$ 1600 ", "ARS$   " + currencyFormatter.format((1600 * 1.74), { locale: 'es-ES', code: ' ' }))
                    .addField("ARS$ 3200 ", "ARS$   " + currencyFormatter.format((3200 * 1.74), { locale: 'es-ES', code: ' ' }));
                return interaction.reply({ embeds: [embed] });
            }
            //Paramount
            if (interaction.options.getSubcommand() === 'paramount') {
                const embed = new Discord.MessageEmbed()
                    .setTitle("Paramount+")
                    .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Paramount_Plus.svg/1920px-Paramount_Plus.svg.png")
                    .setURL("https://www.paramountplus.com/ar/")
                    .setDescription("Los precios de Paramount+ en Argentina con impuestos son los siguientes: ")
                    .setColor('#0b67ff')
                    .addField("Plan  mensual ", "ARS$ 299 ");
                return interaction.reply({ embeds: [embed] });
            }
            //Twitch
            if (interaction.options.getSubcommand() === 'twitch') {
                axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/oficial')
                    .then((oficial) => {
                    const embed1 = new Discord.MessageEmbed()
                        .setTitle("Siscripciones de Twitch")
                        .setURL("https://www.twitch.tv/")
                        .setDescription("Los precios de las suscripciones a Twitch en Argentina son los siguientes: ")
                        .setColor('#9246ff')
                        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858126355091030036/twitch_icon_146081.png")
                        .addField("Suscripción de nivel 1", 'ARS$ ' + currencyFormatter.format(((1.99 * oficial.data['venta']) * 1.74), { locale: 'es-ES', code: ' ' }))
                        .addField("Suscripción de nivel 2", 'ARS$ ' + currencyFormatter.format(((3.99 * oficial.data['venta']) * 1.74), { locale: 'es-ES', code: ' ' }))
                        .addField("Suscripción de nivel 3", 'ARS$ ' + currencyFormatter.format(((9.99 * oficial.data['venta']) * 1.74), { locale: 'es-ES', code: ' ' }));
                    const embed2 = new Discord.MessageEmbed()
                        .setTitle("Bits de Twitch")
                        .setDescription("Los precios de los bits de Twitch en Argentina son los siguientes: ")
                        .setColor('#9246ff')
                        .setURL("https://www.twitch.tv/")
                        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858126355091030036/twitch_icon_146081.png")
                        .addField("100 bits", 'ARS$ ' + currencyFormatter.format(((1.40 * oficial.data['venta']) * 1.74), { locale: 'es-ES', code: ' ' }))
                        .addField("300 bits", 'ARS$ ' + currencyFormatter.format(((3.00 * oficial.data['venta']) * 1.74), { locale: 'es-ES', code: ' ' }))
                        .addField("500 bits", 'ARS$ ' + currencyFormatter.format(((7.00 * oficial.data['venta']) * 1.74), { locale: 'es-ES', code: ' ' }))
                        .addField("1.500 bits", 'ARS$ ' + currencyFormatter.format(((19.95 * oficial.data['venta']) * 1.74), { locale: 'es-ES', code: ' ' }))
                        .addField("5.000 bits", 'ARS$ ' + currencyFormatter.format(((64.40 * oficial.data['venta']) * 1.74), { locale: 'es-ES', code: ' ' }))
                        .addField("10.000 bits", 'ARS$ ' + currencyFormatter.format(((126.00 * oficial.data['venta']) * 1.74), { locale: 'es-ES', code: ' ' }))
                        .addField("25.000 bits", 'ARS$ ' + currencyFormatter.format(((308.00 * oficial.data['venta']) * 1.74), { locale: 'es-ES', code: ' ' }));
                    const row = new MessageActionRow()
                        .addComponents(new MessageButton()
                        .setCustomId('suscripciones')
                        .setLabel("Suscripciones")
                        .setStyle("SUCCESS")).addComponents(new MessageButton()
                        .setCustomId('bits')
                        .setLabel("Bits")
                        .setStyle("PRIMARY"));
                    interaction.reply({ embeds: [embed1], components: [row] });
                    client.on('interactionCreate', interaction => {
                        if (!interaction.isButton())
                            return;
                    });
                    const filter = i => i.customId;
                    const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });
                    collector.on('collect', (i) => __awaiter(this, void 0, void 0, function* () {
                        if (i.customId === 'suscripciones') {
                            yield i.deferUpdate();
                            yield i.editReply({ embeds: [embed1], components: [row] });
                        }
                        if (i.customId === 'bits') {
                            yield i.deferUpdate();
                            yield i.editReply({ embeds: [embed2], components: [row] });
                        }
                    }));
                })
                    .catch((err) => {
                    console.error('ERR', err);
                });
            }
        });
    }
};
