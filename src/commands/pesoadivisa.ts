//@ts-ignore
const { SlashCommandBuilder } = require("@discordjs/builders")
//@ts-ignore
const { MessageEmbed } = require("discord.js")
//@ts-ignore
const { MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js');
//@ts-ignore
const paginationEmbed = require('discordjs-button-pagination'); //Botones
//@ts-ignore
const Discord = require("discord.js");
//@ts-ignore
const axios = require("axios")
//@ts-ignore
var currencyFormatter = require('currency-formatter'); //Currency formatter
//@ts-ignore
const { total75, total74, total100 } = require("../functions/impuestos"); //Impuestos
module.exports = {
    data: new SlashCommandBuilder()
        .setName('pesoa')
        .setDescription('Convierte de pesos a otras divisas')
        .addSubcommand(subcommand =>
            subcommand.setName('dolar')
                .setDescription('Convierte de  Pesos Argentinos a Dólares Estadounidenses')
                .addStringOption(option =>
                    option.setName('ars')
                        .setDescription('Monto en Pesos Argentinos.')
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('euro')
                .setDescription('Convierte Pesos Argentinos a Euros')
                .addStringOption(option =>
                    option.setName('ars')
                        .setDescription('Monto en Pesos Argentinos.')
                ))
        .addSubcommand(subcommand =>
            subcommand.setName("real")
                .setDescription("Convierte de Pesos Argentinos a Reales Brasileños")
                .addStringOption(option =>
                    option.setName("ars")
                        .setDescription("Monto en Pesos Argentinos.")
                ))
        .addSubcommand(subcommand =>
            subcommand.setName("yen")
                .setDescription("Convierte de Pesos Argentinos a Yenes Japoneses")
                .addStringOption(option =>
                    option.setName("ars")
                        .setDescription("Monto en Pesos Argentinos.")
                ))
        .addSubcommand(subcommand =>
            subcommand.setName("libra")
                .setDescription("Convierte de Pesos Argentinos a Libras Esterlinas")
                .addStringOption(option =>
                    option.setName("ars")
                        .setDescription("Monto en Pesos Argentinos.")
                ))
        .addSubcommand(subcommand =>
            subcommand.setName("rublo")
                .setDescription("Convierte de Pesos Argentinos a Rublos Rusos")
                .addStringOption(option =>
                    option.setName("ars")
                        .setDescription("Monto en Pesos Argentinos.")
                ))
        .addSubcommand(subcommand =>
            subcommand.setName("dolarcanadiense")
                .setDescription("Convierte de Pesos Argentinos a Dólares Canadienses")
                .addStringOption(option =>
                    option.setName("ars")
                        .setDescription("Monto en Pesos Argentinos.")
                ))
        .addSubcommand(subcommand =>
            subcommand.setName("dolaraustraliano")
                .setDescription("Convierte de Pesos Argentinos a Dólares Australianos")
                .addStringOption(option =>
                    option.setName("ars")
                        .setDescription("Monto en Pesos Argentinos.")
                ))
        .addSubcommand(subcommand =>
            subcommand.setName("dolarnuevozelandes")
                .setDescription("Convierte de Pesos Argentinos a Dólares Nuevos Zelandaes")
                .addStringOption(option =>
                    option.setName("ars")
                        .setDescription("Monto en Pesos Argentinos.")
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('pesomexicano')
                .setDescription('Convierte de Pesos Mexicanos a Pesos Argentinos')
                .addStringOption(option =>
                    option.setName('mxn')
                        .setDescription('Monto en Pesos Mexicanos.')
                ))

        .addSubcommand(subcommand =>
            subcommand.setName("pesomexicano")
                .setDescription("Convierte de Pesos Argentinos a Pesos Mexicanos")
                .addStringOption(option =>
                    option.setName("ars")
                        .setDescription("Monto en Pesos Argentinos.")
                ))
        .addSubcommand(subcommand =>
            subcommand.setName("pesochileno")
                .setDescription("Convierte de Pesos Argentinos a Pesos Chilenos")
                .addStringOption(option =>
                    option.setName("ars")
                        .setDescription("Monto en Pesos Argentinos.")
                ))
        .addSubcommand(subcommand =>
            subcommand.setName("pesouruguayo")
                .setDescription("Convierte de Pesos Argentinos a Pesos Uruguayos")
                .addStringOption(option =>
                    option.setName("ars")
                        .setDescription("Monto en Pesos Argentinos.")
                ))
        .addSubcommand(subcommand =>
            subcommand.setName("boliviano")
                .setDescription("Convierte de Pesos Argentinos a Bolivianos")
                .addStringOption(option =>
                    option.setName("ars")
                        .setDescription("Monto en Pesos Argentinos.")
                ))
        .addSubcommand(subcommand =>
            subcommand.setName("sol")
                .setDescription("Convierte de Pesos Argentinos a Soles Peruanos")
                .addStringOption(option =>
                    option.setName("ars")
                        .setDescription("Monto en Pesos Argentinos.")
                ))
        .addSubcommand(subcommand =>
            subcommand.setName("guarani")
                .setDescription("Convierte de Pesos Argentinos a Guaraníes Paraguayos")
                .addStringOption(option =>
                    option.setName("ars")
                        .setDescription("Monto en Pesos Argentinos.")
                ))

        .addSubcommand(subcommand =>
            subcommand.setName("bolivar")
                .setDescription("Convierte de Pesos Argentinos a Bolívares Venezolanos")
                .addStringOption(option =>
                    option.setName("ars")
                        .setDescription("Monto en Pesos Argentinos.")
                )
        )
        .addSubcommand(subcommand =>
            subcommand.setName("yuan")
                .setDescription("Convierte de Pesos Argentinos a Yuanes Chinos")
                .addStringOption(option =>
                    option.setName("ars")
                        .setDescription("Monto en Pesos Argentinos.")
                )
        )
        .addSubcommand(subcommand =>
            subcommand.setName("rupia")
                .setDescription("Convierte de Pesos Argentinos a Rupias Indianas")
                .addStringOption(option =>
                    option.setName("ars")
                        .setDescription("Monto en Pesos Argentinos.")
                )
        )
        .addSubcommand(subcommand =>
            subcommand.setName("won")
                .setDescription("Convierte de Pesos Argentinos a Wones Surcoreanos")
                .addStringOption(option =>
                    option.setName("ars")
                        .setDescription("Monto en Pesos Argentinos.")
                )
        )
        .addSubcommand(subcommand =>
            subcommand.setName("franco")
                .setDescription("Convierte de Pesos Argentinos a Francos Suizos")
                .addStringOption(option =>
                    option.setName("ars")
                        .setDescription("Monto en Pesos Argentinos.")
                )
        )
        .addSubcommand(subcommand =>
            subcommand.setName("lira")
                .setDescription("Convierte de Pesos Argentinos a Liras Turcas")
                .addStringOption(option =>
                    option.setName("ars")
                        .setDescription("Monto en Pesos Argentinos.")
                )
        ),
        


    async run(client, interaction, options) {

     

            if (interaction.options.getSubcommand() === 'dolar') {
              var conv2 = options.getNumber('ars')
              axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/oficial')
                .then((oficial) => {
                  const embed = new Discord.MessageEmbed()
                    .setTitle(" Peso Argentino  <:rightarrow:921907270747570247> Dólar estadounidense")
                    .setColor("GREEN")
                    .setDescription("Pesos argentinos expresados en dolares estadounideneses a tasa oficial + impuestos (PAIS (30%) y adelanto de ganancias (45%))")
                    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921906513453408286/dolarapeso.png")
                    .addField("Monto Original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv2, { locale: 'es-ES', code: ' ' }))
                    .addField("Compra :dollar:", 'USD$ ' + currencyFormatter.format((conv2 / oficial.data['compra']), { locale: 'es-ES', code: ' ' }), true)
                    .addField("Venta :dollar:", 'USD$ ' + currencyFormatter.format((conv2 / oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                    .addField("Impuestos :dollar: ", 'USD$ ' + currencyFormatter.format(((conv2 / oficial.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)
      
                  return interaction.reply({ embeds: [embed] });
      
                })
                .catch((err) => {
                  console.error('ERR', err)
      
      
                })
      
            }
      
            if (interaction.options.getSubcommand() === 'dolarblue') {
              var conv2 = options.getNumber('ars')
              axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolarblue')
                .then((blue) => {
                  const embed = new Discord.MessageEmbed()
                    .setTitle(" Peso Argentino  <:rightarrow:921907270747570247> Dólar Blue")
                    .setColor("BLUE")
                    .setDescription("Pesos argentinos expresados en dólares estadounidenses a precio del mercado paralelo (Dólar blue)")
                    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922553537978855524/blueapeso.png")
                    .addField("Monto Original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv2, { locale: 'es-ES', code: ' ' }))
                    .addField("Compra :dollar:", 'USD$ ' + currencyFormatter.format((conv2 / blue.data['compra']), { locale: 'es-ES', code: ' ' }), true)
                    .addField("Venta :dollar:", 'USD$ ' + currencyFormatter.format((conv2 / blue.data['venta']), { locale: 'es-ES', code: ' ' }), true)
      
                  return interaction.reply({ embeds: [embed] });
      
                })
                .catch((err) => {
                  console.error('ERR', err)
      
      
                })
      
            }
      
            if (interaction.options.getSubcommand() === 'euro') {
              var conv2 = options.getNumber('ars')
              axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
                .then((euro) => {
                  const embed = new Discord.MessageEmbed()
                    .setTitle(" Peso Argentino  <:rightarrow:921907270747570247> Euro ")
                    .setColor("#083499")
                    .setDescription("Pesos argentinos expresados en euros a tasa oficial + impuestos (PAIS (30%) y adelanto de ganancias (45%)).")
                    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922548848826654801/euroapeso.png")
                    .addField("Monto Original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv2, { locale: 'es-ES', code: ' ' }))
                    .addField("Compra :euro:", 'EUR€  ' + currencyFormatter.format((conv2 / euro.data['compra']), { locale: 'es-ES', code: ' ' }), true)
                    .addField("Venta :euro:", 'EUR€ ' + currencyFormatter.format((conv2 / euro.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                    .addField("Impuestos :euro: ", 'EUR€  ' + currencyFormatter.format(((conv2 / euro.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)
      
                  return interaction.reply({ embeds: [embed] });
      
                })
                .catch((err) => {
                  console.error('ERR', err)
      
      
                })
      
            }
      
            if (interaction.options.getSubcommand() === 'real') {
              var conv2 = options.getNumber('ars')
              axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/real/oficial')
                .then((real) => {
                  const embed = new Discord.MessageEmbed()
                    .setTitle(" Peso Argentino  <:rightarrow:921907270747570247> Real Brasileño")
                    .setColor("#6da545")
                    .setDescription("Pesos argentinos expresados en reales brasileños a tasa oficial + impuestos (PAIS (30%) y adelanto de ganancias (45%)).")
                    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922553925243117698/realapeso.png")
                    .addField("Monto Original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv2, { locale: 'es-ES', code: ' ' }))
                    .addField("Compra :flag_br:", 'BRL R$ ' + currencyFormatter.format((conv2 / real.data['compra']), { locale: 'es-ES', code: ' ' }), true)
                    .addField("Venta :flag_br:", 'BRL R$ ' + currencyFormatter.format((conv2 / real.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                    .addField("Impuestos :flag_br: ", 'BRL R$ ' + currencyFormatter.format(((conv2 / real.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)
      
                  return interaction.reply({ embeds: [embed] });
      
                })
                .catch((err) => {
                  console.error('ERR', err)
      
      
                })
      
            }
      
      
            if (interaction.options.getSubcommand() === 'yen') {
              var conv5 = options.getNumber('ars')
              axios.get('https://api.exchangerate.host/latest')
                .then((YEN) => {
      
                    let     yen1 = YEN.data['rates']['JPY']
                  axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
                    .then((EUR) => {
                      const embed = new Discord.MessageEmbed()
                        .setTitle("Peso Argentino <:rightarrow:921907270747570247> Yen Japonés")
                        .setColor("#FDFD0D")
                        .setDescription("Pesos argentinos expresados en Yen japonés al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922556125809872936/yenapeso_1.png")
                        .addField("Monto Original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                        .addField("Compra :yen: ", 'JPY¥ ' + currencyFormatter.format(((conv5 * yen1)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                        .addField("Venta :yen: ", 'JPY¥ ' + currencyFormatter.format(((conv5 * yen1) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                        .addField("Impuestos (75%) :yen: ", 'JPY¥ ' + currencyFormatter.format((((conv5 * yen1) / EUR.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)
      
                      return interaction.reply({ embeds: [embed] });
      
                    })
                    .catch((err) => {
                      console.error('ERR', err)
      
      
                    })
                })
                .catch((err) => {
                  console.error('ERR', err)
      
      
                })
            }
      
      
            if (interaction.options.getSubcommand() === 'libra') {
              var conv5 = options.getNumber('ars')
              axios.get('https://api.exchangerate.host/latest')
                .then((LIBRA) => {
      
                    let      libra1 = LIBRA.data['rates']['GBP']
                  axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
                    .then((EUR) => {
                      const embed = new Discord.MessageEmbed()
                        .setTitle("Peso Argentino <:rightarrow:921907270747570247> Libra Esterlina")
                        .setColor("#D605F6")
                        .setDescription("Pesos argentinos expresado en Libras esterlinas al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922561706838868049/libraapeso.png")
                        .addField("Monto Original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                        .addField("Compra :pound: ", 'GBP£ ' + currencyFormatter.format(((conv5 * libra1)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                        .addField("Venta :pound: ", 'GBP£ ' + currencyFormatter.format(((conv5 * libra1) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                        .addField("Impuestos (75%) :pound: ", 'GBP£ ' + currencyFormatter.format((((conv5 * libra1) / EUR.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)
      
                      return interaction.reply({ embeds: [embed] });
      
                    })
                    .catch((err) => {
                      console.error('ERR', err)
      
      
                    })
                })
                .catch((err) => {
                  console.error('ERR', err)
      
      
                })
      
      
            }
      
            if (interaction.options.getSubcommand() === 'rublo') {
              var conv5 = options.getNumber('ars')
              axios.get('https://api.exchangerate.host/latest')
                .then((RUBLO) => {
      
                    let      rublo = RUBLO.data['rates']['RUB']
                  axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
                    .then((EUR) => {
                      const embed = new Discord.MessageEmbed()
                        .setTitle("Peso Argentino <:rightarrow:921907270747570247> Rublo Ruso")
                        .setColor("RED")
                        .setDescription("Pesos argentinos expresado en Rublos rusos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928344880995008602/rubloapeso.png")
                        .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                        .addField("Compra :flag_ru: ", 'RUB₽ ' + currencyFormatter.format(((conv5 * rublo)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                        .addField("Venta :flag_ru: ", 'RUB₽ ' + currencyFormatter.format(((conv5 * rublo) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                        .addField("Impuestos (75%) :flag_ru: ", 'RUB₽ ' + currencyFormatter.format((((conv5 * rublo) / EUR.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)
      
                      return interaction.reply({ embeds: [embed] });
      
                    })
                    .catch((err) => {
                      console.error('ERR', err)
      
      
                    })
                })
                .catch((err) => {
                  console.error('ERR', err)
      
      
                })
            }
      
      
            if (interaction.options.getSubcommand() === 'dolarcanadiense') {
              var conv5 = options.getNumber('ars')
              axios.get('https://api.exchangerate.host/latest')
                .then((CAD) => {
      
                    let      canadiense = CAD.data['rates']['CAD']
                  axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
                    .then((EUR) => {
                      const embed = new Discord.MessageEmbed()
                        .setTitle("Peso Argentino <:rightarrow:921907270747570247> Dólar Canadiense")
                        .setColor("#fc0201")
                        .setDescription("Pesos argentinos expresado en dólares canadienses al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928345276857606194/cadapeso.png")
                        .addField("PRECIO ORIGINAL :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                        .addField("COMPRA :flag_ca: ", 'CAD$ ' + currencyFormatter.format(((conv5 * canadiense)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                        .addField("VENTA :flag_ca: ", 'CAD$ ' + currencyFormatter.format(((conv5 * canadiense) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                        .addField("IMPUESTOS (75%) :flag_ca: ", 'CAD$ ' + currencyFormatter.format((((conv5 * canadiense) / EUR.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)
      
                      return interaction.reply({ embeds: [embed] });
      
                    })
                    .catch((err) => {
                      console.error('ERR', err)
      
      
                    })
                })
                .catch((err) => {
                  console.error('ERR', err)
      
      
                })
      
            }
      
            if (interaction.options.getSubcommand() === 'dolaraustraliano') {
              var conv5 = options.getNumber('ars')
              axios.get('https://api.exchangerate.host/latest')
                .then((AUD) => {
      
                    let      dolar = AUD.data['rates']['AUD']
                  axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
                    .then((EUR) => {
                      const embed = new Discord.MessageEmbed()
                        .setTitle("Peso Argentino <:rightarrow:921907270747570247> Dólar Australiano")
                        .setColor("#000346")
                        .setDescription("Pesos argentinos expresado en dólares australianos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928345614805246013/audapeso.png")
                        .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                        .addField("Compra :flag_au: ", 'AUD$ ' + currencyFormatter.format(((conv5 * dolar)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                        .addField("Venta :flag_au: ", 'AUD$ ' + currencyFormatter.format(((conv5 * dolar) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                        .addField("Impuestos (75%) :flag_au: ", 'AUD$ ' + currencyFormatter.format((((conv5 * dolar) / EUR.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)
      
      
                      return interaction.reply({ embeds: [embed] });
      
                    })
                    .catch((err) => {
                      console.error('ERR', err)
      
      
                    })
                })
                .catch((err) => {
                  console.error('ERR', err)
      
      
                })
      
      
            }
      
            if (interaction.options.getSubcommand() === 'dolarneozelandes') {
              var conv5 = options.getNumber('ars')
              axios.get('https://api.exchangerate.host/latest')
                .then((NZD) => {
      
                    let   dolar = NZD.data['rates']['NZD']
                  axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
                    .then((EUR) => {
                      const embed = new Discord.MessageEmbed()
                        .setTitle("Peso Argentino <:rightarrow:921907270747570247> Dólar Neozelandes")
                        .setColor("#000346")
                        .setDescription("Pesos argentinos expresado en dólares neozelandeses al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928348263235604560/nzapeso.png")
                        .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                        .addField("Compar :flag_nz: ", 'NZD$ ' + currencyFormatter.format(((conv5 * dolar)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                        .addField("Venta :flag_nz: ", 'NZD$ ' + currencyFormatter.format(((conv5 * dolar) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                        .addField("Impuestos (75%) :flag_nz: ", 'NZD$ ' + currencyFormatter.format((((conv5 * dolar) / EUR.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)
      
      
                      return interaction.reply({ embeds: [embed] });
      
                    })
                    .catch((err) => {
                      console.error('ERR', err)
      
      
                    })
                })
                .catch((err) => {
                  console.error('ERR', err)
      
      
                })
      
      
      
            }
      
            if (interaction.options.getSubcommand() === 'pesomexicano') {
              var conv5 = options.getNumber('ars')
              axios.get('https://api.exchangerate.host/latest')
                .then((mxn) => {
      
                    let    peso = mxn.data['rates']['MXN']
                  axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
                    .then((EUR) => {
                      const embed = new Discord.MessageEmbed()
                        .setTitle("Peso Argentino <:rightarrow:921907270747570247> Peso Méxicano")
                        .setColor("#24944c")
                        .setDescription("Pesos argentinos expresado en Pesos méxicanos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928349418023968918/mxnapeso.png")
                        .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                        .addField("Compra :flag_mx: ", 'MXN$ ' + currencyFormatter.format(((conv5 * peso)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                        .addField("Venta :flag_mx: ", 'MXN$ ' + currencyFormatter.format(((conv5 * peso) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                        .addField("Impuestos (75%) :flag_mx: ", 'MXN$ ' + currencyFormatter.format((((conv5 * peso) / EUR.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)
      
      
                      return interaction.reply({ embeds: [embed] });
      
                    })
                    .catch((err) => {
                      console.error('ERR', err)
      
      
                    })
                })
                .catch((err) => {
                  console.error('ERR', err)
      
      
                })
      
            }
      
      
            if (interaction.options.getSubcommand() === 'pesochileno') {
              var conv5 = options.getNumber('ars')
              axios.get('https://api.exchangerate.host/latest')
                .then((CLP) => {
      
                    let     peso = CLP.data['rates']['CLP']
                  axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
                    .then((EUR) => {
                      const embed = new Discord.MessageEmbed()
                        .setTitle("Peso Argentino <:rightarrow:921907270747570247> Peso Chileno")
                        .setColor("#fa0100")
                        .setDescription("Pesos argentinos expresado en pesos chilenos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928350035324842035/chileapeso.png")
                        .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                        .addField("Compra :flag_cl: ", 'CLP$ ' + currencyFormatter.format(((conv5 * peso)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                        .addField("Venta :flag_cl: ", 'CLP$ ' + currencyFormatter.format(((conv5 * peso) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                        .addField("Impuestos (75%) :flag_cl: ", 'CLP$ ' + currencyFormatter.format((((conv5 * peso) / EUR.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)
      
                      return interaction.reply({ embeds: [embed] });
      
                    })
                    .catch((err) => {
                      console.error('ERR', err)
      
      
                    })
                })
                .catch((err) => {
                  console.error('ERR', err)
      
      
                })
            }
      
      
            if (interaction.options.getSubcommand() === 'pesouruguayo') {
              var conv5 = options.getNumber('ars')
              axios.get('https://api.exchangerate.host/latest')
                .then((UYU) => {
      
                    let     peso = UYU.data['rates']['UYU']
                  axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
                    .then((EUR) => {
                      const embed = new Discord.MessageEmbed()
                        .setTitle("Peso Argentino <:rightarrow:921907270747570247> Peso Uruguayo")
                        .setColor("BLUE")
                        .setDescription("Pesos argentinos expresado en pesos uruguayos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928350035744288878/uyuapeso.png")
                        .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                        .addField("Compra :flag_uy: ", 'UYU$ ' + currencyFormatter.format(((conv5 * peso)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                        .addField("Venta :flag_uy: ", 'UYU$ ' + currencyFormatter.format(((conv5 * peso) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                        .addField("Impuestos (75%) :flag_uy: ", 'UYU$ ' + currencyFormatter.format((((conv5 * peso) / EUR.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)
      
                      return interaction.reply({ embeds: [embed] });
      
                    })
                    .catch((err) => {
                      console.error('ERR', err)
      
      
                    })
                })
                .catch((err) => {
                  console.error('ERR', err)
      
      
                })
            }
            if (interaction.options.getSubcommand() === 'pesocolombiano') {
              var conv5 = options.getNumber('ars')
              axios.get('https://api.exchangerate.host/latest')
                .then((COP) => {
      
                    let     pesos = COP.data['rates']['COP']
                  axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
                    .then((EUR) => {
                      const embed = new Discord.MessageEmbed()
                        .setTitle("Peso Argentino <:rightarrow:921907270747570247> Peso Colombiano")
                        .setColor("#fecb04")
                        .setDescription("Pesos argentinos expresado en pesos colombianos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928349550970822716/copapeso.png")
                        .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                        .addField("Compra :flag_co: ", 'COP$ ' + currencyFormatter.format(((conv5 * pesos)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                        .addField("Venta :flag_co: ", 'COP$ ' + currencyFormatter.format(((conv5 * pesos) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                        .addField("Impuestos (75%) :flag_co: ", 'COP$ ' + currencyFormatter.format((((conv5 * pesos) / EUR.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)
      
                      return interaction.reply({ embeds: [embed] });
      
                    })
                    .catch((err) => {
                      console.error('ERR', err)
      
      
                    })
                })
                .catch((err) => {
                  console.error('ERR', err)
      
      
                })
      
      
            }
      
            if (interaction.options.getSubcommand() === 'boliviano') {
              var conv5 = options.getNumber('ars')
              axios.get('https://api.exchangerate.host/latest')
                .then((BOB) => {
      
                    let   peso = BOB.data['rates']['BOB']
                  axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
                    .then((EUR) => {
                      const embed = new Discord.MessageEmbed()
                        .setTitle("Peso Argentino <:rightarrow:921907270747570247> Boliviano")
                        .setColor("#6da544")
                        .setDescription("Pesos argentinos expresado en bolivianos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928352180296122388/bolivianoapeso.png")
                        .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                        .addField("Compra :flag_bo: ", 'BOB Bs. ' + currencyFormatter.format(((conv5 * peso)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                        .addField("Venta :flag_bo: ", 'BOB Bs.' + currencyFormatter.format(((conv5 * peso) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                        .addField("Impuestos (75%) :flag_bo: ", 'BOB Bs. ' + currencyFormatter.format((((conv5 * peso) / EUR.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)
      
                      return interaction.reply({ embeds: [embed] });
      
                    })
                    .catch((err) => {
                      console.error('ERR', err)
      
      
                    })
                })
                .catch((err) => {
                  console.error('ERR', err)
      
      
                })
            }
      
            if (interaction.options.getSubcommand() === 'sol') {
              var conv5 = options.getNumber('ars')
              axios.get('https://api.exchangerate.host/latest')
                .then((PEN) => {
      
                    let    sol = PEN.data['rates']['PEN']
                  axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
                    .then((EUR) => {
                      const embed = new Discord.MessageEmbed()
                        .setTitle("Peso Argentino <:rightarrow:921907270747570247> Sol")
                        .setColor("#cd0400")
                        .setDescription("Pesos argentinos expresado en soles peruanos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928352555736633374/solapeso.png")
                        .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                        .addField("Compra :flag_pe: ", 'PEN S/ ' + currencyFormatter.format(((conv5 * sol)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                        .addField("Venta :flag_pe: ", 'PEN S/ ' + currencyFormatter.format(((conv5 * sol) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                        .addField("Impuestos (75%) :flag_pe: ", 'PEN S/ ' + currencyFormatter.format((((conv5 * sol) / EUR.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)
      
                      return interaction.reply({ embeds: [embed] });
      
                    })
                    .catch((err) => {
                      console.error('ERR', err)
      
      
                    })
                })
                .catch((err) => {
                  console.error('ERR', err)
      
      
                })
      
            }
      
            //Guarani
      
            if (interaction.options.getSubcommand() === 'guarani') {
              var conv5 = options.getNumber('ars')
      
              axios.get('https://api.exchangerate.host/latest')
                .then((PYG) => {
      
                    let  guarani = PYG.data['rates']['PYG']
                  axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
                    .then((EUR) => {
                      const embed = new Discord.MessageEmbed()
                        .setTitle("Peso Argentino <:rightarrow:921907270747570247> Guaraní Paraguayo")
                        .setColor("#d80027")
                        .setDescription("Pesos argentinos expresado en guaranies paraguayos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928353654342299709/guaraniapeso.png")
                        .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                        .addField("Compra :flag_py: ", 'PYG₲ ' + currencyFormatter.format(((conv5 * guarani)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                        .addField("Venta :flag_py: ", 'PYG₲ ' + currencyFormatter.format(((conv5 * guarani) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                        .addField("Impuestos (75%) :flag_py: ", 'PYG₲ ' + currencyFormatter.format((((conv5 * guarani) / EUR.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)
      
                      return interaction.reply({ embeds: [embed] });
      
                    })
                    .catch((err) => {
                      console.error('ERR', err)
      
      
                    })
                })
                .catch((err) => {
                  console.error('ERR', err)
      
      
                })
      
            }
      
            //Bolivar
            if (interaction.options.getSubcommand() === 'bolivar') {
              var conv5 = options.getNumber('ars')
              axios.get('https://api.exchangerate.host/latest')
                .then((VES) => {
      
                    let    bolivar = VES.data['rates']['VES']
                  axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
                    .then((USD) => {
                      const embed = new Discord.MessageEmbed()
                        .setTitle("Peso Argentino <:rightarrow:921907270747570247> Bolivar Digital Venezolano")
                        .setColor("RED")
                        .setDescription("Pesos argentinos expresado en bolivares digitales venezolanos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928354779887960105/bolivarapeso.png")
                        .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                        .addField("Compar :flag_ve: ", 'VED B$ ' + currencyFormatter.format(((conv5 * bolivar)) / USD.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                        .addField("Venta :flag_ve: ", 'VED B$ ' + currencyFormatter.format(((conv5 * bolivar) / USD.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                        .addField("Impuestos (75%) :flag_ve: ", 'VED B$ ' + currencyFormatter.format((((conv5 * bolivar) / USD.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)
      
                      return interaction.reply({ embeds: [embed] });
      
                    })
                    .catch((err) => {
                      console.error('ERR', err)
      
      
                    })
                })
                .catch((err) => {
                  console.error('ERR', err)
      
      
                })
            }
      
            if (interaction.options.getSubcommand() === 'yuan') {
              var conv5 = options.getNumber('ars')
              axios.get('https://api.exchangerate.host/latest')
                .then((CNY) => {
      
                    let  yuan = CNY.data['rates']['CNY']
                  axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
                    .then((EUR) => {
                      const embed = new Discord.MessageEmbed()
                        .setTitle("Peso Argentino <:rightarrow:921907270747570247> Renminbi")
                        .setColor("#cd0400")
                        .setDescription("Pesos argentinos expresado en renminbi (yuanes) chinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928356456087048234/yuanapeso.png")
                        .addField("Precio original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                        .addField("Compra :flag_cn: ", 'CNY¥ ' + currencyFormatter.format(((conv5 * yuan)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                        .addField("Venta :flag_cn: ", 'CNY¥ ' + currencyFormatter.format(((conv5 * yuan) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                        .addField("Impuestos (75%) :flag_cn: ", 'CNY¥ ' + currencyFormatter.format((((conv5 * yuan) / EUR.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)
      
                      return interaction.reply({ embeds: [embed] });
      
                    })
                    .catch((err) => {
                      console.error('ERR', err)
      
      
                    })
                })
                .catch((err) => {
                  console.error('ERR', err)
      
      
                })
            }
      
            if (interaction.options.getSubcommand() === 'rupia') {
              var conv5 = options.getNumber('ars')
              axios.get('https://api.exchangerate.host/latest')
                .then((INR) => {
      
                    let   rupia = INR.data['rates']['INR']
                  axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
                    .then((EUR) => {
                      const embed = new Discord.MessageEmbed()
                        .setTitle("Peso Argentino <:rightarrow:921907270747570247> Rupia India")
                        .setColor("#fc9836")
                        .setDescription("Pesos argentinos expresado en rupias indias al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928356536307314718/indiaapeso.png")
                        .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                        .addField("Compra :flag_in: ", 'INR₹ ' + currencyFormatter.format(((conv5 * rupia)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                        .addField("Venta :flag_in: ", 'INR₹ ' + currencyFormatter.format(((conv5 * rupia) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                        .addField("Impuestos (75%) :flag_in: ", 'INR₹ ' + currencyFormatter.format((((conv5 * rupia) / EUR.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)
      
                      return interaction.reply({ embeds: [embed] });
      
                    })
                    .catch((err) => {
                      console.error('ERR', err)
      
      
                    })
                })
                .catch((err) => {
                  console.error('ERR', err)
      
      
                })
      
            }
      
            if (interaction.options.getSubcommand() === 'won') {
              var conv5 = options.getNumber('ars')
              axios.get('https://api.exchangerate.host/latest')
                .then((KRW) => {
      
                    let won = KRW.data['rates']['KRW']
                  axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
                    .then((EUR) => {
                      const embed = new Discord.MessageEmbed()
                        .setTitle("Peso Argentino <:rightarrow:921907270747570247> Won Surcoreano")
                        .setColor("#FFFFFF")
                        .setDescription("Pesos argentinos expresado en won surcoreano al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928356536735117312/wonapeso.png")
                        .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                        .addField("Compra :flag_kr: ", 'KRW ₩ ' + currencyFormatter.format(((conv5 * won)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                        .addField("Venta :flag_kr: ", 'KRW ₩ ' + currencyFormatter.format(((conv5 * won) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                        .addField("Impuestos (75%) :flag_kr: ", 'KRW ₩ ' + currencyFormatter.format((((conv5 * won) / EUR.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)
      
                      return interaction.reply({ embeds: [embed] });
      
                    })
                    .catch((err) => {
                      console.error('ERR', err)
      
      
                    })
                })
                .catch((err) => {
                  console.error('ERR', err)
      
      
                })
      
            }
      
            if (interaction.options.getSubcommand() === 'franco') {
              var conv5 = options.getNumber('ars')
              axios.get('https://api.exchangerate.host/latest')
                .then((suizo) => {
      
                    let franco = suizo.data['rates']['CHF']
                  axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
                    .then((EUR) => {
                      const embed = new Discord.MessageEmbed()
                        .setTitle("Peso Argentino <:rightarrow:921907270747570247> Franco Suizo")
                        .setColor("#d80027")
                        .setDescription("Pesos argentinos expresado en francos suizos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/930966649710985286/francoapeso.png")
                        .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                        .addField("Compra :flag_ch: ", 'CHF Fr. ' + currencyFormatter.format(((conv5 * franco)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                        .addField("Venta :flag_ch: ", 'CHF Fr. ' + currencyFormatter.format(((conv5 * franco) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                        .addField("Impuestos (75%) :flag_ch: ", 'CHF Fr. ' + currencyFormatter.format((((conv5 * franco) / EUR.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)
      
                      return interaction.reply({ embeds: [embed] });
      
                    })
                    .catch((err) => {
                      console.error('ERR', err)
      
      
                    })
                })
                .catch((err) => {
                  console.error('ERR', err)
      
      
                })
      
            }
      
            if (interaction.options.getSubcommand() === 'lira') {
              var conv5 = options.getNumber('ars')
      
              axios.get('https://api.exchangerate.host/latest')
                .then((turca) => {
      
                  let lira = turca.data['rates']['TRY']
                  axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
                    .then((EUR) => {
                      const embed = new Discord.MessageEmbed()
                        .setTitle("Peso Argentino <:rightarrow:921907270747570247> Lira Turca")
                        .setColor("#d70224")
                        .setDescription("Pesos argentinos expresado en liras turcas al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/930966650122014740/liraapeso.png")
                        .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                        .addField("Compra :flag_tr: ", 'TRY₺ ' + currencyFormatter.format(((conv5 * lira)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                        .addField("Venta :flag_tr: ", 'TRY₺ ' + currencyFormatter.format(((conv5 * lira) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                        .addField("Impuestos (75%) :flag_tr: ", 'TRY₺ ' + currencyFormatter.format((((conv5 * lira) / EUR.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)
      
                      return interaction.reply({ embeds: [embed] });
      
                    })
                    .catch((err) => {
                      console.error('ERR', err)
      
      
                    })
                })
                .catch((err) => {
                  console.error('ERR', err)
      
      
                })
      
            }
          }








    }








