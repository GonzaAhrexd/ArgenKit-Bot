import { SlashCommandBuilder } from "@discordjs/builders"
import Discord from "discord.js"
import axios from "axios"
var currencyFormatter = require('currency-formatter'); //Currency formatter
const { restar74, restar75, restar100 } = require("../functions/impuestos"); //Impuestos
module.exports = {
  data: new SlashCommandBuilder()
    .setName('pesoa')
    .setDescription('Convierte de pesos a otras divisas')
    .addSubcommand(subcommand =>
      subcommand.setName('dolar')
        .setDescription('Convierte de  Pesos Argentinos a Dólares Estadounidenses')
        .addNumberOption(option =>
          option.setName('ars')
            .setDescription('Monto en Pesos Argentinos.').setRequired(true)
        ))
    .addSubcommand(subcommand =>
      subcommand.setName('euro')
        .setDescription('Convierte Pesos Argentinos a Euros')
        .addNumberOption(option =>
          option.setName('ars')
            .setDescription('Monto en Pesos Argentinos.').setRequired(true)
        ))
    .addSubcommand(subcommand =>
      subcommand.setName("real")
        .setDescription("Convierte de Pesos Argentinos a Reales Brasileños")
        .addNumberOption(option =>
          option.setName("ars")
            .setDescription("Monto en Pesos Argentinos.").setRequired(true)
        ))
    .addSubcommand(subcommand =>
      subcommand.setName("yen")
        .setDescription("Convierte de Pesos Argentinos a Yenes Japoneses")
        .addNumberOption(option =>
          option.setName("ars")
            .setDescription("Monto en Pesos Argentinos.").setRequired(true)
        ))
    .addSubcommand(subcommand =>
      subcommand.setName("libra")
        .setDescription("Convierte de Pesos Argentinos a Libras Esterlinas")
        .addNumberOption(option =>
          option.setName("ars")
            .setDescription("Monto en Pesos Argentinos.").setRequired(true)
        ))
    .addSubcommand(subcommand =>
      subcommand.setName("rublo")
        .setDescription("Convierte de Pesos Argentinos a Rublos Rusos")
        .addNumberOption(option =>
          option.setName("ars")
            .setDescription("Monto en Pesos Argentinos.").setRequired(true)
        ))
    .addSubcommand(subcommand =>
      subcommand.setName("dolarcanadiense")
        .setDescription("Convierte de Pesos Argentinos a Dólares Canadienses")
        .addNumberOption(option =>
          option.setName("ars")
            .setDescription("Monto en Pesos Argentinos.").setRequired(true)
        ))
    .addSubcommand(subcommand =>
      subcommand.setName("dolaraustraliano")
        .setDescription("Convierte de Pesos Argentinos a Dólares Australianos")
        .addNumberOption(option =>
          option.setName("ars")
            .setDescription("Monto en Pesos Argentinos.").setRequired(true)
        ))
    .addSubcommand(subcommand =>
      subcommand.setName("dolarnuevozelandes")
        .setDescription("Convierte de Pesos Argentinos a Dólares Nuevos Zelandaes")
        .addNumberOption(option =>
          option.setName("ars")
            .setDescription("Monto en Pesos Argentinos.").setRequired(true)
        ))
    .addSubcommand(subcommand =>
      subcommand.setName('pesomexicano')
        .setDescription('Convierte de Pesos Argentinos a Pesos Mexicanos')
        .addNumberOption(option =>
          option.setName('ars')
            .setDescription('Monto en Pesos Argentinos.').setRequired(true)
        ))
    .addSubcommand(subcommand =>
      subcommand.setName("pesochileno")
        .setDescription("Convierte de Pesos Argentinos a Pesos Chilenos")
        .addNumberOption(option =>
          option.setName("ars")
            .setDescription("Monto en Pesos Argentinos.").setRequired(true)
        ))
    .addSubcommand(subcommand =>
      subcommand.setName("pesouruguayo")
        .setDescription("Convierte de Pesos Argentinos a Pesos Uruguayos")
        .addNumberOption(option =>
          option.setName("ars")
            .setDescription("Monto en Pesos Argentinos.").setRequired(true)
        ))
    .addSubcommand(subcommand =>
      subcommand.setName("boliviano")
        .setDescription("Convierte de Pesos Argentinos a Bolivianos")
        .addNumberOption(option =>
          option.setName("ars")
            .setDescription("Monto en Pesos Argentinos.").setRequired(true)
        ))
    .addSubcommand(subcommand =>
      subcommand.setName("sol")
        .setDescription("Convierte de Pesos Argentinos a Soles Peruanos")
        .addNumberOption(option =>
          option.setName("ars")
            .setDescription("Monto en Pesos Argentinos.").setRequired(true)
        ))
    .addSubcommand(subcommand =>
      subcommand.setName("guarani")
        .setDescription("Convierte de Pesos Argentinos a Guaraníes Paraguayos")
        .addNumberOption(option =>
          option.setName("ars")
            .setDescription("Monto en Pesos Argentinos.").setRequired(true)
        ))

    .addSubcommand(subcommand =>
      subcommand.setName("bolivar")
        .setDescription("Convierte de Pesos Argentinos a Bolívares Venezolanos")
        .addNumberOption(option =>
          option.setName("ars")
            .setDescription("Monto en Pesos Argentinos.").setRequired(true)
        )
    )
    .addSubcommand(subcommand =>
      subcommand.setName("yuan")
        .setDescription("Convierte de Pesos Argentinos a Yuanes Chinos")
        .addNumberOption(option =>
          option.setName("ars")
            .setDescription("Monto en Pesos Argentinos.").setRequired(true)
        )
    )
    .addSubcommand(subcommand =>
      subcommand.setName("rupia")
        .setDescription("Convierte de Pesos Argentinos a Rupias Indianas")
        .addNumberOption(option =>
          option.setName("ars")
            .setDescription("Monto en Pesos Argentinos.").setRequired(true)
        )
    )
    .addSubcommand(subcommand =>
      subcommand.setName("won")
        .setDescription("Convierte de Pesos Argentinos a Wones Surcoreanos")
        .addNumberOption(option =>
          option.setName("ars")
            .setDescription("Monto en Pesos Argentinos.").setRequired(true)
        )
    )
    .addSubcommand(subcommand =>
      subcommand.setName("franco")
        .setDescription("Convierte de Pesos Argentinos a Francos Suizos")
        .addNumberOption(option =>
          option.setName("ars")
            .setDescription("Monto en Pesos Argentinos.").setRequired(true)
        )
    )
    .addSubcommand(subcommand =>
      subcommand.setName("lira")
        .setDescription("Convierte de Pesos Argentinos a Liras Turcas")
        .addNumberOption(option =>
          option.setName("ars")
            .setDescription("Monto en Pesos Argentinos.").setRequired(true)
        )
    ),



  async run(client, interaction, options) {

    if (interaction.options.getSubcommand() === 'dolar') {
      let convertir: number = interaction.options.getNumber('ars')

      axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/oficial')
        .then((oficial) => {
          axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/blue')
            .then((blue) => {

              const embed:Discord.EmbedBuilder = new Discord.EmbedBuilder()
                .setTitle(" Peso Argentino  <:rightarrow:921907270747570247> Dólar estadounidense")
                .setColor("Green")
                .setDescription("Pesos Argentinos expresados en Dólares Estadounidenses ")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921906513453408286/dolarapeso.png")
                .addFields(
                  { name: "Monto Original :flag_ar:", value: 'ARS$ ' + currencyFormatter.format(convertir, { locale: 'es-ES', code: ' ' }) },

                  //Oficial
                  { name: "Dólar oficial :bank: ", value: "Valor del dólar que se liquida por parte del gobierno nacional y está sujeto a diversos impuestos, sólo se puede retirar USD$200 al mes.", inline: false },
                  { name: "Compra :dollar:", value: 'USD$ ' + currencyFormatter.format((convertir / oficial.data['compra']), { locale: 'es-ES', code: ' ' }), inline: true },
                  { name: "Venta :dollar:", value: 'USD$ ' + currencyFormatter.format((convertir / oficial.data['venta']), { locale: 'es-ES', code: ' ' }), inline: true },

                  //Impuestos
                  {name: "IMPUESTOS <:taxes:1068370368819101746>", value: "\n Impuestos aplicados al dólar oficial en los pagos con tarjeta o compra del banco  ", inline: false},
                  {name: "TARJETA (74%)  ", value: "USD$ " + currencyFormatter.format(restar74(convertir / oficial.data['venta']), { locale: 'es-ES', code: ' ' }), inline: true},
                  {name: "SOLIDARIO (75%)  ", value: "USD$ " + currencyFormatter.format(restar75(convertir / oficial.data['venta']), { locale: 'es-ES', code: ' ' }), inline: true},
                  {name: "Impuestos (100%)  ", value: "USD$ " + currencyFormatter.format(restar100(convertir / oficial.data['venta']), { locale: 'es-ES', code: ' ' }), inline: true},
                
                  //Blue
                  { name: "Dólar blue <:dollarblue:903149186436980767>", value: "Valor del mercado paralelo establecido por la oferta y la demanda", inline: false },
                  { name: "Compra :dollar:", value: 'USD$ ' + currencyFormatter.format((convertir / blue.data['compra']), { locale: 'es-ES', code: ' ' }), inline: true },
                  { name: "Venta :dollar:", value: 'USD$ ' + currencyFormatter.format((convertir / blue.data['venta']), { locale: 'es-ES', code: ' ' }), inline: true }
                )

              interaction.deferReply();
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
        .then((oficial) => {
          axios.get('https://api.bluelytics.com.ar/v2/latest')
            .then((blue) => {

              const embed:Discord.EmbedBuilder = new Discord.EmbedBuilder()
                .setTitle(" Peso Argentino  <:rightarrow:921907270747570247> Euro")
                .setColor("#0153b4")
                .setDescription("Pesos argentinos expresados en Euro")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922548848826654801/euroapeso.png")
                .addFields(
                  { name: "Monto Original :flag_ar:", value: 'ARS$ ' + currencyFormatter.format(convertir, { locale: 'es-ES', code: ' ' }) },

                  //Oficial
                  { name: "Euro oficial :bank: ", value: "Valor del euro que se liquida por parte del gobierno nacional y está sujeto a diversos impuestos, sólo se puede retirar USD$200 al mes.", inline: false },
                  { name: "Compra :euro:", value: 'EUR€ ' + currencyFormatter.format((convertir / oficial.data['compra']), { locale: 'es-ES', code: ' ' }), inline: true },
                  { name: "Venta :euro:", value: 'EUR€ ' + currencyFormatter.format((convertir / oficial.data['venta']), { locale: 'es-ES', code: ' ' }), inline: true },

                  //Impuestos
                  {name: "IMPUESTOS <:taxes:1068370368819101746>", value: "\n Impuestos aplicados al euro oficial en los pagos con tarjeta o compra del banco  ", inline: false},
                  {name: "TARJETA (74%)  ", value: "EUR€ " + currencyFormatter.format(restar74(convertir / oficial.data['venta']), { locale: 'es-ES', code: ' ' }), inline: true},
                  {name: "SOLIDARIO (75%)  ", value: "EUR€ " + currencyFormatter.format(restar75(convertir / oficial.data['venta']), { locale: 'es-ES', code: ' ' }), inline: true},
                  {name: "Impuestos (100%)  ", value: "EUR€ " + currencyFormatter.format(restar100(convertir / oficial.data['venta']), { locale: 'es-ES', code: ' ' }), inline: true},
                
                  //Blue
                  { name: "Euro Blue <:dollarblue:903149186436980767>", value: "Valor del mercado paralelo establecido por la oferta y la demanda", inline: false },
                  { name: "Compra :euro:", value: 'EUR€ ' + currencyFormatter.format((convertir / blue.data['blue_euro']['value_buy']), { locale: 'es-ES', code: ' ' }), inline: true },
                  { name: "Venta :euro:", value: 'EUR€ ' + currencyFormatter.format((convertir / blue.data['blue_euro']['value_sell']), { locale: 'es-ES', code: ' ' }), inline: true }
                )


              interaction.deferReply();
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

              const embed:Discord.EmbedBuilder = new Discord.EmbedBuilder()
                .setTitle(" Peso Argentino  <:rightarrow:921907270747570247> Real Brasileño")
                .setColor("#6da545")
                .setDescription("Pesos argentinos expresados en Reales Brasileños")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922553925243117698/realapeso.png")
                .addFields(
                  { name: "Monto Original :flag_ar:", value: 'ARS$ ' + currencyFormatter.format(convertir, { locale: 'es-ES', code: ' ' }) },
                  //Oficial
                  { name: "Real oficial :bank: ", value: "Valor del Real que se liquida por parte del gobierno nacional y está sujeto a diversos impuestos, sólo se puede retirar el equivalente a USD$200 al mes.", inline: false },
                  { name: "Compra :dollar:", value: 'BRL R$' + currencyFormatter.format((convertir / oficial.data['compra']), { locale: 'es-ES', code: ' ' }), inline: true },
                  { name: "Venta :dollar:", value: 'BRL R$' + currencyFormatter.format((convertir / oficial.data['venta']), { locale: 'es-ES', code: ' ' }), inline: true },

                  //Impuestos
                  {name: "IMPUESTOS <:taxes:1068370368819101746>", value: "\n Impuestos aplicados al Real oficial en los pagos con tarjeta o compra del banco  ", inline: false},
                  {name: "TARJETA (74%)  ", value: "BRL$ " + currencyFormatter.format(restar74(convertir / oficial.data['venta']), { locale: 'es-ES', code: ' ' }), inline: true},
                  {name: "SOLIDARIO (75%)  ", value: "BRL$ " + currencyFormatter.format(restar75(convertir / oficial.data['venta']), { locale: 'es-ES', code: ' ' }), inline: true},
                  {name: "Impuestos (100%)  ", value: "BRL$ " + currencyFormatter.format(restar100(convertir / oficial.data['venta']), { locale: 'es-ES', code: ' ' }), inline:true},
                
                  //Blue
                  { name: "Real blue <:dollarblue:903149186436980767>", value: "Valor del mercado paralelo establecido por la oferta y la demanda", inline: false },
                  { name: "Compra :dollar:", value: 'BRL$ ' + currencyFormatter.format((convertir / blue.data['compra']), { locale: 'es-ES', code: ' ' }), inline: true },
                  { name: "Venta :dollar:", value: 'BRL$ ' + currencyFormatter.format((convertir / blue.data['venta']), { locale: 'es-ES', code: ' ' }), inline: true }
                )

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
        color: Discord.ColorResolvable,
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
      color: "Red",
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
      color: "Blue",
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
      color: "Red",
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
        axios.get('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json')
          .then((ACONVERTIR) => {
            let aconvertir = ACONVERTIR.data['usd'][(divisa.iso).toLowerCase()]
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then(async (oficial) => {
                axios.get('https://api.bluelytics.com.ar/v2/latest')
                  .then(async (blue) => {
                    const embed:Discord.EmbedBuilder = new Discord.EmbedBuilder()
                      .setTitle(`Peso Argentino <:rightarrow:921907270747570247> ${divisa.nombre}`)
                      .setColor(divisa.color)
                      .setDescription(`Pesos argentinos expresados en ${divisa.nombre} `)
                      .setThumbnail(divisa.img)
                      .addFields(
                        { name: "Monto Original :flag_ar:", value: 'ARS$ ' + currencyFormatter.format(convertir, { locale: 'es-ES', code: ' ' }) },

                        //Oficial
                        { name: `${divisa.nombre} oficial :bank: `, value: `Valor del ${divisa.nombre} que se liquida por parte del gobierno nacional y está sujeto a diversos impuestos `, inline: false },
                        { name: `Compra ${divisa.bandera}`, value: `${divisa.iso} ${divisa.simbolo}` + currencyFormatter.format((convertir * aconvertir) / oficial.data['compra'], { locale: 'es-ES', code: ' ' }), inline: true },
                        { name: `Venta ${divisa.bandera}`, value: `${divisa.iso} ${divisa.simbolo}` + currencyFormatter.format((convertir * aconvertir) / oficial.data['venta'], { locale: 'es-ES', code: ' ' }), inline: true },

                        //Impuestos
                        {name:"Impuestos (100%)  ", value:`${divisa.iso} ${divisa.simbolo}`+currencyFormatter.format(restar100((convertir*aconvertir)/oficial.data['venta']),{locale:'es-ES',code:' '}),inline:true},
                      
                        //Blue
                        {name:`${divisa.nombre} <:dollarblue:903149186436980767>`, value:"Valor del mercado paralelo establecido por la oferta y la demanda", inline:false},
                        {name:`Compra ${divisa.bandera}`, value:`${divisa.iso} ${divisa.simbolo}`+currencyFormatter.format((convertir*aconvertir)/blue.data['blue']['value_buy'],{locale:'es-ES',code:' '}),inline:true},
                        {name:`Venta ${divisa.bandera}`, value:`${divisa.iso} ${divisa.simbolo}`+currencyFormatter.format((convertir*aconvertir)/blue.data['blue']['value_sell'],{locale:'es-ES',code:' '}),inline:true}
                      )

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








