
import Discord from "discord.js"
import axios from "axios"
var currencyFormatter = require('currency-formatter'); //Currency formatter
const { restar60 } = require("../functions/impuestos"); //Impuestos
import { formatoPrecio } from '../functions/formato'
import { embedError } from "../functions/embedError"
const wait = require('node:timers/promises').setTimeout
module.exports = {
  data: new Discord.SlashCommandBuilder()
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
      await interaction.deferReply();
      try {
        const [oficial, blue, mep, ccl] = await Promise.all([
          axios.get('https://bluepy.vercel.app/api/dolar/oficial'),
          axios.get('https://dolarapi.com/v1/dolares/blue'),
          axios.get('https://dolarapi.com/v1/dolares/bolsa'),
          axios.get('https://dolarapi.com/v1/dolares/contadoconliqui'),
        ]);

        const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
          .setTitle(" Peso Argentino  <:rightarrow:921907270747570247> Dólar estadounidense")
          .setColor("Green")
          .setDescription("Pesos Argentinos expresados en Dólares Estadounidenses ")
          .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921906513453408286/dolarapeso.png")
          .addFields(
            { name: "Monto Original :flag_ar:", value: 'ARS' + formatoPrecio(convertir, "ARS") },

            //Oficial
            { name: "Dólar oficial :bank: ", value: "Valor del dólar que se liquida por parte del gobierno nacional y está sujeto a diversos impuestos, sólo se puede retirar USD$200 al mes.", inline: false },
            { name: "Compra :dollar:", value: formatoPrecio((convertir / oficial.data['compra']), "USD"), inline: true },
            { name: "Venta :dollar:", value: formatoPrecio((convertir / oficial.data['venta']), "USD"), inline: true },

            //Impuestos
            { name: "Impuestos (60%)  ", value: formatoPrecio(restar60(convertir / oficial.data['venta']), "USD"), inline: true },

            //Blue
            { name: "Dólar blue <:dolarblue:1181095026432938034>", value: "Valor del mercado paralelo establecido por la oferta y la demanda", inline: false },
            { name: "Compra :dollar:", value: formatoPrecio((convertir / blue.data['compra']), "USD"), inline: true },
            { name: "Venta :dollar:", value: formatoPrecio((convertir / blue.data['venta']), "USD"), inline: true },
            //CCL
            { name: `Financieros <:finanzas:1068357650380755045>  `, value: `Son el resultante de operaciones bursátiles que implican comprar una acción o un bono en pesos y vender ese mismo papel en dólares.`, inline: false },
            { name: "Dólar MEP", value: formatoPrecio((convertir / mep.data['venta']), "USD"), inline: true },
            { name: "Contado con Liqui", value: formatoPrecio((convertir / ccl.data['venta']), "USD"), inline: true },

          )

          await wait(3000)
          await interaction.editReply({ embeds: [embed] });


      } catch (error) {

        embedError(interaction, error)

      }
    }


    if (interaction.options.getSubcommand() === 'euro') {
      let convertir: number = interaction.options.getNumber('ars')
      await interaction.deferReply();
      try {
        const [oficial, blue] = await Promise.all([
          axios.get('https://dolarapi.com/v1/cotizaciones/eur'),
          axios.get('https://api.bluelytics.com.ar/v2/latest'),


        ]);

        const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
          .setTitle(" Peso Argentino  <:rightarrow:921907270747570247> Euro")
          .setColor("#0153b4")
          .setDescription("Pesos argentinos expresados en Euro")
          .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922548848826654801/euroapeso.png")
          .addFields(
            { name: "Monto Original :flag_ar:", value: 'ARS$ ' + formatoPrecio(convertir, "ARS") },

            //Oficial
            { name: "Euro oficial :bank: ", value: "Valor del euro que se liquida por parte del gobierno nacional y está sujeto a diversos impuestos, sólo se puede retirar USD$200 al mes.", inline: false },
            { name: "Compra :euro:", value: 'EUR€ ' + formatoPrecio((convertir / oficial.data['compra']), "EUR"), inline: true },
            { name: "Venta :euro:", value: 'EUR€ ' + formatoPrecio((convertir / oficial.data['venta']), "EUR"), inline: true },

            //Impuestos
            { name: "Impuestos (60%)  ", value: "EUR€ " + formatoPrecio(restar60(convertir / oficial.data['venta']), "EUR"), inline: true },

            //Blue
            { name: "Euro Blue <:dolarblue:1181095026432938034>", value: "Valor del mercado paralelo establecido por la oferta y la demanda", inline: false },
            { name: "Compra :euro:", value: 'EUR€ ' + formatoPrecio((convertir / blue.data['blue_euro']['value_buy']), "EUR"), inline: true },
            { name: "Venta :euro:", value: 'EUR€ ' + formatoPrecio((convertir / blue.data['blue_euro']['value_sell']), "EUR"), inline: true }
          )


        await wait(3000)
        await interaction.editReply({ embeds: [embed] });

      }
      catch (error) {
        embedError(interaction, error)
      }

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

    > = [
        {
          id: "real",
          nombre: "Real Brasilero",
          iso: "BRL",
          bandera: ":flag_br:",
          color: "#e8ce6c",
          img: "https://cdn.discordapp.com/attachments/802944543510495292/922553925243117698/realapeso.png",
          simbolo: "R$"
        },
        {
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
        await interaction.deferReply();
        try {
          const [DIVISA, oficial, blue] = await Promise.all([
            axios.get('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json'),
            axios.get('https://bluepy.vercel.app/api/dolar/oficial'),
            axios.get('https://dolarapi.com/v1/dolares/blue')
          ]);
          let aconvertir = DIVISA.data['usd'][(divisa.iso).toLowerCase()]
                    
          const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
            .setTitle(`Peso Argentino <:rightarrow:921907270747570247> ${divisa.nombre}`)
            .setColor(divisa.color)
            .setDescription(`Pesos argentinos expresados en ${divisa.nombre} `)
            .setThumbnail(divisa.img)
            .addFields(
              { name: "Monto Original :flag_ar:", value: 'ARS$ ' + formatoPrecio(convertir, "ARS") },

              //Oficial
              { name: `${divisa.nombre} oficial :bank: `, value: `Valor del ${divisa.nombre} que se liquida por parte del gobierno nacional y está sujeto a diversos impuestos `, inline: false },
              { name: `Compra ${divisa.bandera}`, value: `${divisa.iso} ${divisa.simbolo}` + formatoPrecio((convertir * aconvertir) / oficial.data['compra'], divisa.iso), inline: true },
              { name: `Venta ${divisa.bandera}`, value: `${divisa.iso} ${divisa.simbolo}` + formatoPrecio((convertir * aconvertir) / oficial.data['venta'], divisa.iso), inline: true },

              //Impuestos
              { name: "Impuestos (60%)  ", value: `${divisa.iso} ${divisa.simbolo}` + formatoPrecio(restar60((convertir * aconvertir) / oficial.data['venta']), divisa.iso), inline: true },

              //Blue
              { name: `${divisa.nombre} blue <:dolarblue:1181095026432938034>`, value: "Valor del mercado paralelo establecido por la oferta y la demanda", inline: false },
              { name: `Compra ${divisa.bandera}`, value: `${divisa.iso} ${divisa.simbolo}` + formatoPrecio((convertir * aconvertir) / blue.data['compra'], divisa.iso), inline: true },
              { name: `Venta ${divisa.bandera}`, value: `${divisa.iso} ${divisa.simbolo}` + formatoPrecio((convertir * aconvertir) / blue.data['venta'], divisa.iso), inline: true }
            )

          await wait(3000)
          await interaction.editReply({ embeds: [embed] });


        } catch (error) {
          embedError(interaction, error)
        }


      }
    })

  }








}








