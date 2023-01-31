import { disableValidators } from "@discordjs/builders";

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
const { restar74, restar75, restar100 } = require("../functions/impuestos"); //Impuestos
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
      let convertir: number = interaction.options.getNumber('ars')

      axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/oficial')
        .then(async (oficial) => {
          await axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/blue')
            .then(async (blue) => {

              const embed = new Discord.MessageEmbed()
                .setTitle(" Peso Argentino  <:rightarrow:921907270747570247> Dólar estadounidense")
                .setColor("GREEN")
                .setDescription("Pesos argentinos expresados en dolares estadounideneses a tasa oficial + impuestos (PAIS (30%) y adelanto de ganancias (45%))")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921906513453408286/dolarapeso.png")
                .addField("Monto Original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(convertir, { locale: 'es-ES', code: ' ' }))

                //Oficial
                .addField("Dólar oficial :bank: ", "Valor del dólar que se liquida por parte del gobierno nacional y está sujeto a diversos impuestos, sólo se puede retirar USD$200 al mes.", false)
                .addField("Compra :dollar:", 'USD$ ' + currencyFormatter.format((convertir / oficial.data['compra']), { locale: 'es-ES', code: ' ' }), true)
                .addField("Venta :dollar:", 'USD$ ' + currencyFormatter.format((convertir / oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)

                //Impuestos
                .addField("IMPUESTOS <:taxes:1068370368819101746>", "\n Impuestos aplicados al dólar oficial en los pagos con tarjeta o compra del banco  ", false)
                .addField("TARJETA (74%)  ", "ARS$ " + currencyFormatter.format(restar74(convertir / oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                .addField("SOLIDARIO (75%)  ", "ARS$ " + currencyFormatter.format(restar75(convertir / oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                .addField("TURISTA (100%)  ", "ARS$ " + currencyFormatter.format(restar100(convertir / oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)

                //Blue
                .addField("Dólar blue <:dollarblue:903149186436980767>", "Valor del mercado paralelo establecido por la oferta y la demanda", false)
                .addField("Compra :dollar:", 'USD$ ' + currencyFormatter.format((convertir / blue.data['compra']), { locale: 'es-ES', code: ' ' }), true)
                .addField("Venta :dollar:", 'USD$ ' + currencyFormatter.format((convertir / blue.data['venta']), { locale: 'es-ES', code: ' ' }), true)


              await interaction.deferReply();
              setTimeout(() => {
                interaction.editReply({ embeds: [embed] });
              }, 3000)

            })
            .catch((err) => {
              console.error('ERR', err)
            })
            .catch((err) => {
              console.error('ERR', err)
            })

        })
    }

    if (interaction.options.getSubcommand() === 'euro') {
      let convertir: number = interaction.options.getNumber('ars')
      axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
        .then(async (oficial) => {
          await axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/blue')
            .then(async (blue) => {

              const embed = new Discord.MessageEmbed()
                .setTitle(" Peso Argentino  <:rightarrow:921907270747570247> Euro")
                .setColor("#0153b4")
                .setDescription("Pesos argentinos expresados en Euro")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922548848826654801/euroapeso.png")
                .addField("Monto Original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(convertir, { locale: 'es-ES', code: ' ' }))

                //Oficial
                .addField("Dólar oficial :bank: ", "Valor del dólar que se liquida por parte del gobierno nacional y está sujeto a diversos impuestos, sólo se puede retirar USD$200 al mes.", false)
                .addField("Compra :dollar:", 'USD$ ' + currencyFormatter.format((convertir / oficial.data['compra']), { locale: 'es-ES', code: ' ' }), true)
                .addField("Venta :dollar:", 'USD$ ' + currencyFormatter.format((convertir / oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)

                //Impuestos
                .addField("IMPUESTOS <:taxes:1068370368819101746>", "\n Impuestos aplicados al dólar oficial en los pagos con tarjeta o compra del banco  ", false)
                .addField("TARJETA (74%)  ", "ARS$ " + currencyFormatter.format(restar74(convertir / oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                .addField("SOLIDARIO (75%)  ", "ARS$ " + currencyFormatter.format(restar75(convertir / oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                .addField("TURISTA (100%)  ", "ARS$ " + currencyFormatter.format(restar100(convertir / oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)

                //Blue
                .addField("Euro Blue <:dollarblue:903149186436980767>", "Valor del mercado paralelo establecido por la oferta y la demanda", false)
                .addField("Compra :dollar:", 'USD$ ' + currencyFormatter.format((convertir / blue.data['compra']), { locale: 'es-ES', code: ' ' }), true)
                .addField("Venta :dollar:", 'USD$ ' + currencyFormatter.format((convertir / blue.data['venta']), { locale: 'es-ES', code: ' ' }), true)


              await interaction.deferReply();
              setTimeout(() => {
                interaction.editReply({ embeds: [embed] });
              }, 3000)

            })
            .catch((err) => {
              console.error('ERR', err)
            })
            .catch((err) => {
              console.error('ERR', err)
            })

        })


    }
    if (interaction.options.getSubcommand() === 'real') {
      let convertir: number = interaction.options.getNumber('ars')
      axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/real/oficial')
        .then(async (oficial) => {
          await axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/real/blue')
            .then(async (blue) => {

              const embed = new Discord.MessageEmbed()
                .setTitle(" Peso Argentino  <:rightarrow:921907270747570247> Real Brasileño")
                .setColor("#6da545")
                .setDescription("Pesos argentinos expresados en reales brasileños")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922553925243117698/realapeso.png")
                .addField("Monto Original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(convertir, { locale: 'es-ES', code: ' ' }))

                //Oficial
                .addField("Dólar oficial :bank: ", "Valor del dólar que se liquida por parte del gobierno nacional y está sujeto a diversos impuestos, sólo se puede retirar el equivalente a USD$200 al mes.", false)
                .addField("Compra :dollar:", 'BRL R$' + currencyFormatter.format((convertir / oficial.data['compra']), { locale: 'es-ES', code: ' ' }), true)
                .addField("Venta :dollar:", 'BRL R$' + currencyFormatter.format((convertir / oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)

                //Impuestos
                .addField("IMPUESTOS <:taxes:1068370368819101746>", "\n Impuestos aplicados al dólar oficial en los pagos con tarjeta o compra del banco  ", false)
                .addField("TARJETA (74%)  ", "BRL$ " + currencyFormatter.format(restar74(convertir / oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                .addField("SOLIDARIO (75%)  ", "BRL$ " + currencyFormatter.format(restar75(convertir / oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                .addField("TURISTA (100%)  ", "BRL$ " + currencyFormatter.format(restar100(convertir / oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)

                //Blue
                .addField("Dólar blue <:dollarblue:903149186436980767>", "Valor del mercado paralelo establecido por la oferta y la demanda", false)
                .addField("Compra :dollar:", 'BRL$ ' + currencyFormatter.format((convertir / blue.data['compra']), { locale: 'es-ES', code: ' ' }), true)
                .addField("Venta :dollar:", 'BRL$ ' + currencyFormatter.format((convertir / blue.data['venta']), { locale: 'es-ES', code: ' ' }), true)


              await interaction.deferReply();
              setTimeout(() => {
                interaction.editReply({ embeds: [embed] });
              }, 3000)

            })
            .catch((err) => {
              console.error('ERR', err)
            })
            .catch((err) => {
              console.error('ERR', err)
            })

        })
    }


    let divisas: Array<
      {
        id: string,
        nombre: string,
        iso: string,
        bandera: string,
        color: string,
        img: string,
        simbolo: string,

      }

    > = [{
      id: "yen",
      nombre: "Yen Japonés",
      iso: "JPY",
      bandera: ":yen:",
      color: "#FDFD0D",
      img: "https://cdn.discordapp.com/attachments/802944543510495292/922556125809872936/yenapeso_1.png",
      simbolo: "¥"
    },
    {
      id: "libra",
      nombre: "Libra",
      iso: "GBP",
      bandera: ":pound:",
      color: "#D605F6",
      img: "https://cdn.discordapp.com/attachments/802944543510495292/922561706838868049/libraapeso.png",
      simbolo: "£"
    },
    {
      id: "rublo",
      nombre: "Rublo",
      iso: "RUB",
      bandera: "<:rublo:913901788531417229>",
      color: "RED",
      img: "https://cdn.discordapp.com/attachments/802944543510495292/928344880995008602/rubloapeso.png",
      simbolo: "₽"
    },
    {
      id: "dolarcanadiense",
      nombre: "Dólar Canadiano",
      iso: "CAD",
      bandera: ":flag_ca:",
      color: "#fc0201",
      img: "https://cdn.discordapp.com/attachments/802944543510495292/928345276857606194/cadapeso.png",
      simbolo: "$"
    },
    {
      id: "dolaraustraliano",
      nombre: "Dólar Australiano",
      iso: "AUD",
      bandera: ":flag_au:",
      color: "#000346",
      img: "https://cdn.discordapp.com/attachments/802944543510495292/928345614805246013/audapeso.png",
      simbolo: "$"
    },
    {
      id: "dolarneozelandes",
      nombre: "Dólar neozelandés",
      iso: "NZD",
      bandera: ":flag_nz:",
      color: "#000346",
      img: "https://cdn.discordapp.com/attachments/802944543510495292/928348263235604560/nzapeso.png",
      simbolo: "$",
    },
    {
      id: "pesomexicano",
      nombre: "Peso mexicano",
      iso: "MXN",
      bandera: ":flag_mx:",
      color: "#24944c",
      img: "https://cdn.discordapp.com/attachments/802944543510495292/928349418023968918/mxnapeso.png",
      simbolo: "$",
    },
    {
      id: "pesochileno",
      nombre: "Peso chileno",
      iso: "CLP",
      bandera: ":flag_cl:",
      color: "#fc0201",
      img: "https://cdn.discordapp.com/attachments/802944543510495292/928350035324842035/chileapeso.png",
      simbolo: "$",
    },
    {
      id: "pesouruguayo",
      nombre: "Peso uruguayo",
      iso: "UYU",
      bandera: ":flag_uy:",
      color: "BLUE",
      img: "https://cdn.discordapp.com/attachments/802944543510495292/928350035744288878/uyuapeso.png",
      simbolo: "$",
    },
    {
      id: "pesocolombiano",
      nombre: "Peso colombiano",
      iso: "COP",
      bandera: ":flag_co:",
      color: "#fecb04",
      img: "https://cdn.discordapp.com/attachments/802944543510495292/928349550970822716/copapeso.png",
      simbolo: "$",
    },
    {
      id: "boliviano",
      nombre: "Boliviano",
      iso: "BOB",
      bandera: ":flag_bo:",
      color: "#6da544",
      img: "https://cdn.discordapp.com/attachments/802944543510495292/928352180296122388/bolivianoapeso.png",
      simbolo: "Bs",

    },
    {
      id: "sol",
      nombre: "Sol",
      iso: "PEN",
      bandera: ":flag_pe:",
      color: "#cd0400",
      img: "https://cdn.discordapp.com/attachments/802944543510495292/928352555736633374/solapeso.png",
      simbolo: "S/.",

    },
    {
      id: "guarani",
      nombre: "Guaraní",
      iso: "PYG",
      bandera: ":flag_py:",
      color: "#d80027",
      img: "https://cdn.discordapp.com/attachments/802944543510495292/928353654342299709/guaraniapeso.png",
      simbolo: "₲",

    },
    {
      id: "bolivar",
      nombre: "Bolívar",
      iso: "VES",
      bandera: ":flag_ve:",
      color: "RED",
      img: "https://cdn.discordapp.com/attachments/802944543510495292/928354779887960105/bolivarapeso.png",
      simbolo: "Bs S",

    },
    {
      id: "yuan",
      nombre: "Yuan",
      iso: "CNY",
      bandera: ":flag_cn:",
      color: "#cd0400",
      img: "https://cdn.discordapp.com/attachments/802944543510495292/928356456087048234/yuanapeso.png",
      simbolo: "¥",
    },
    {
      id: "rupia",
      nombre: "Rupia India",
      iso: "INR",
      bandera: ":flag_in:",
      color: "#fc9836",
      img: "https://cdn.discordapp.com/attachments/802944543510495292/928356536307314718/indiaapeso.png",
      simbolo: "₹",

    },
    {
      id: "won",
      nombre: "Won surcoreano",
      iso: "KRW",
      bandera: ":flag_kr:",
      color: "#FFFFFF",
      img: "https://cdn.discordapp.com/attachments/802944543510495292/928356536735117312/wonapeso.png",
      simbolo: "₩",
    },
    {
      id: "franco",
      nombre: "Franco Suizo",
      iso: "CHF",
      bandera: ":flag_ch:",
      color: "#d80027",
      img: "https://cdn.discordapp.com/attachments/802944543510495292/930966649710985286/francoapeso.png",
      simbolo: "CHF Fr.",
    },
    {
      id: "lira",
      nombre: "Lira Turca",
      iso: "TRY",
      bandera: ":flag_tr:",
      color: "#d70224",
      img: "https://cdn.discordapp.com/attachments/802944543510495292/930966650122014740/liraapeso.png",
      simbolo: "TRY₺",
    }
      ]

    divisas.forEach(async divisa => {
      if (interaction.options.getSubcommand() === divisa.id) {
        let convertir: number = interaction.options.getNumber('ars')
        axios.get('https://api.exchangerate.host/latest')
          .then((ACONVERTIR) => {

            let aconvertir = ACONVERTIR.data['rates'][divisa.iso]
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then(async (oficial) => {
                axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/blue')
                  .then(async (blue) => {
                    const embed = new Discord.MessageEmbed()
                      .setTitle(`Peso Argentino <:rightarrow:921907270747570247> ${divisa.nombre}`)
                      .setColor(divisa.color)
                      .setDescription("Pesos argentinos expresados en Yen japonés al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                      .setThumbnail(divisa.img)
                      .addField("Monto Original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(convertir, { locale: 'es-ES', code: ' ' }))

                      .addField(`${divisa.nombre} oficial :bank: `, `Valor del ${divisa.nombre} que se liquida por parte del gobierno nacional y está sujeto a diversos impuestos `, false)
                      .addField(`Compra ${divisa.bandera}`, `${divisa.iso} ${divisa.simbolo}` + currencyFormatter.format((convertir * aconvertir) / oficial.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                      .addField(`Venta ${divisa.bandera}`, `${divisa.iso} ${divisa.simbolo}` + currencyFormatter.format((convertir * aconvertir) / oficial.data['venta'], { locale: 'es-ES', code: ' ' }), true)


                      .addField("IMPUESTOS <:taxes:1068370368819101746>", "\n Impuestos aplicados al dólar oficial en los pagos con tarjeta o compra del banco  ", false)
                      .addField("TARJETA (74%)  ", `${divisa.iso} ${divisa.simbolo}` + currencyFormatter.format(restar74((convertir * aconvertir) / oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                      .addField("SOLIDARIO (75%)  ", `${divisa.iso} ${divisa.simbolo}` + currencyFormatter.format(restar75((convertir * aconvertir) / oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                      .addField("TURISTA (100%)  ", `${divisa.iso} ${divisa.simbolo}` + currencyFormatter.format(restar100((convertir * aconvertir) / oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)

                      .addField(`${divisa.nombre} <:dollarblue:903149186436980767>`, "Valor del mercado paralelo establecido por la oferta y la demanda", false)
                      .addField(`Compra ${divisa.bandera}`, `${divisa.iso} ${divisa.simbolo}` + currencyFormatter.format((convertir * aconvertir) / blue.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                      .addField(`Venta ${divisa.bandera}`, `${divisa.iso} ${divisa.simbolo}` + currencyFormatter.format((convertir * aconvertir) / blue.data['venta'], { locale: 'es-ES', code: ' ' }), true)


                    await interaction.deferReply();
                    setTimeout(() => {
                      interaction.editReply({ embeds: [embed] });
                    }, 3000)

                  })
                  .catch((err) => {
                    console.error('ERR', err)
              })
              .catch((err) => {
                console.error('ERR', err)
              })
            })
              .catch((err) => {
                console.error('ERR', err)
              })
          })
  }
})

}








}








