
import Discord from "discord.js"
import axios from "axios"
const { total60 } = require("../functions/impuestos"); //Impuestos
import { formatoPrecio } from '../functions/formato'
import { embedError } from "../functions/embedError"
const wait = require('node:timers/promises').setTimeout
module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('convertirdivisa')
        .setDescription('Convierte de Dolar Estadounidense a Pesos Argentinos')
        .addSubcommand(subcommand =>
            subcommand.setName('dolar')
                .setDescription('Convierte de Dólares Estadounidenses a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('usd')
                        .setDescription('Monto en Dólares.').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('euro')
                .setDescription('Convierte de Euros a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('eur')
                        .setDescription('Monto en Euros.').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('real')
                .setDescription('Convierte de Reales Brasileños a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('brl')
                        .setDescription('Monto en Reales.').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('yen')
                .setDescription('Convierte de Yenes Japoneses a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('jpy')
                        .setDescription('Monto en Yenes.').setRequired(true)
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('libra')
                .setDescription('Convierte de Libras Esterlinas a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('gbp')
                        .setDescription('Monto en Libras.').setRequired(true)
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('rublo')
                .setDescription('Convierte de Rublos Rusos a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('rub')
                        .setDescription('Monto en Rublos.').setRequired(true)
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('dolarcanadiense')
                .setDescription('Convierte de Dólares Canadianos a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('cad')
                        .setDescription('Monto en Dólares Canadianos.').setRequired(true)
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('dolaraustraliano')
                .setDescription('Convierte de Dólares Australianos a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('aud')
                        .setDescription('Monto en Dólares Australianos.').setRequired(true)
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('dolarneozelandes')
                .setDescription('Convierte de Dólares Neozelandeses a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('nzd')
                        .setDescription('Monto en Dólares Neozelandeses.').setRequired(true)
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('pesomexicano')
                .setDescription('Convierte de Pesos Mexicanos a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('mxn')
                        .setDescription('Monto en Pesos Mexicanos.').setRequired(true)
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('pesochileno')
                .setDescription('Convierte de Pesos Chilenos a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('clp')
                        .setDescription('Monto en Pesos Chilenos.').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('pesocolombiano')
                .setDescription('Convierte de Pesos Colombianos a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('cop')
                        .setDescription('Monto en Pesos Colombianos.').setRequired(true)
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('pesouruguayo')
                .setDescription('Convierte de Pesos Uruguayos a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('uyu')
                        .setDescription('Monto en Pesos Uruguayos.').setRequired(true)
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('boliviano')
                .setDescription('Convierte de Bolivianos a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('bob')
                        .setDescription('Monto en Bolivianos.').setRequired(true)
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('sol')
                .setDescription('Convierte de Soles a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('pen')
                        .setDescription('Monto en Soles.').setRequired(true)
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('guarani')
                .setDescription('Convierte de Guaraníes a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('pyg')
                        .setDescription('Monto en Guaraníes.').setRequired(true)
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('bolivar')
                .setDescription('Convierte de Bolívares a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('ves')
                        .setDescription('Monto en Bolívares.').setRequired(true)
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('yuan')
                .setDescription('Convierte de Yuanes a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('cny')
                        .setDescription('Monto en Yuanes.').setRequired(true)
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('rupia')
                .setDescription('Convierte de Rupias a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('inr')
                        .setDescription('Monto en Rupias.').setRequired(true)
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('won')
                .setDescription('Convierte de Wons a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('krw')
                        .setDescription('Monto en Wons.').setRequired(true)
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('franco')
                .setDescription('Convierte de Francos Suizos a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('chf')
                        .setDescription('Monto en Francos.').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('lira')
                .setDescription('Convierte de Liras Turcas a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('try')
                        .setDescription('Monto en Liras.').setRequired(true)
                )),


    async run(client, interaction, options) {

        if (interaction.options.getSubcommand() === 'dolar') {
            let convertir: number = interaction.options.getNumber('usd')
            await interaction.deferReply();
            try {
                const [oficial, blue, mep, ccl] = await Promise.all([
                    axios.get('https://bluepy.vercel.app/api/dolar/oficial'),
                    axios.get('https://dolarapi.com/v1/dolares/blue'),
                    axios.get('https://dolarapi.com/v1/dolares/bolsa'),
                    axios.get('https://dolarapi.com/v1/dolares/contadoconliqui'),
                ]);
                const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()

                    .setTitle("Dólar estadounidense <:rightarrow:921907270747570247> Peso Argentino")
                    .setColor("Green")
                    .setDescription("Dólares estadounidenses expresado en pesos argentinos")
                    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921906513453408286/dolarapeso.png")
                    .addFields(
                        //Monto Original
                        { name: `Monto original :dollar:  `, value: `${formatoPrecio(convertir, "USD")} ` },
                        //Oficial
                        { name: "Dólar oficial :bank: ", value: `Valor del dólar que se liquida por parte del gobierno nacional y está sujeto a diversos impuestos, sólo se puede retirar USD$200 al mes.` },
                        { name: "Compra :flag_ar: ", value: `ARS${formatoPrecio((convertir * oficial.data['compra']), "ARS")}`, inline: true },
                        { name: "Venta :flag_ar: ", value: `ARS${formatoPrecio((convertir * oficial.data['venta']), "ARS")}`, inline: true },
                        //Impuestos
                        { name: "Impuestos (60%) ", value: `ARS${formatoPrecio(total60(convertir * oficial.data['venta']), "ARS")}`, inline: true },
                        //Blue
                        { name: `Dólar blue <:dolarblue:1181095026432938034>  `, value: `Valor del mercado paralelo establecido por la oferta y la demanda` },
                        { name: "Compra :flag_ar: ", value: `ARS${formatoPrecio((convertir * blue.data['compra']), "ARS")}`, inline: true },
                        { name: "Venta :flag_ar:", value: `ARS${formatoPrecio((convertir * blue.data['venta']), "ARS")}`, inline: true },
                        //Financieros
                        { name: `Financieros <:finanzas:1068357650380755045>  `, value: `Son el resultante de operaciones bursátiles que implican comprar una acción o un bono en pesos y vender ese mismo papel en dólares.` },
                        { name: "Dólar MEP ", value: `ARS${formatoPrecio((convertir * mep.data['venta']), "ARS")}`, inline: true },
                        { name: "Contado con Liqui.", value: `ARS${formatoPrecio((convertir * ccl.data['venta']), "ARS")}`, inline: true })


                await wait(3000)
                await interaction.editReply({ embeds: [embed] });

            } catch (error) {

                embedError(interaction, error)

            }

        }

        if (interaction.options.getSubcommand() === 'euro') {
            let convertir = interaction.options.getNumber('eur')
            await interaction.deferReply();
            try {
                const [oficial, blue, valorUSD] = await Promise.all([
                    axios.get('https://dolarapi.com/v1/cotizaciones/eur'),
                    axios.get('https://api.bluelytics.com.ar/v2/latest'),
                    axios.get('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json')

                ]);
                const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()

                    .setTitle("Euro <:rightarrow:921907270747570247> Peso Argentino")
                    .setColor("#0153b4")
                    .setDescription("Euro expresado en pesos argentinos")
                    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922548848826654801/euroapeso.png")
                    .addFields(
                        //Monto Original
                        { name: `Monto original :euro:  `, value: `${formatoPrecio(convertir, "EUR")} ` },
                        //Oficial
                        { name: `Valor en dólares 💸`, value: `Valor del euro en relación al dólar estadounidense.`, inline: false },
                        { name: `EURO <:rightarrow:921907270747570247> DÓLAR`, value: ` ${formatoPrecio(convertir / valorUSD.data['usd']['eur'], "USD")} `, inline: true },
                        { name: "Euro oficial :bank: ", value: `Valor del euro que se liquida por parte del gobierno nacional y está sujeto a diversos impuestos, sólo se puede retirar USD$200 al mes.` },
                        { name: "Compra :flag_ar: ", value: `ARS$ ${formatoPrecio((convertir * oficial.data['compra']), "ARS")}`, inline: true },
                        { name: "Venta :flag_ar: ", value: `ARS$ ${formatoPrecio((convertir * oficial.data['venta']), "ARS")}`, inline: true },
                        //Impuestos
                        { name: "Impuestos (60%) ", value: `ARS$ ${formatoPrecio(total60(convertir * oficial.data['venta']), "ARS")}`, inline: true },
                        //Blue
                        { name: `Euro blue <:dolarblue:1181095026432938034>  `, value: `Valor del mercado paralelo establecido por la oferta y la demanda` },
                        { name: "Compra :flag_ar: ", value: `ARS$ ${formatoPrecio((convertir * blue.data['blue_euro']['value_buy']), "ARS")}`, inline: true },
                        { name: "Venta :flag_ar:", value: `ARS$ ${formatoPrecio((convertir * blue.data['blue_euro']['value_sell']), "ARS")}`, inline: true })

                await wait(3000)
                await interaction.editReply({ embeds: [embed] });



            } catch (error) {

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
        > = [{
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
        }]

        divisas.forEach(async divisa => {

            if (interaction.options.getSubcommand() === divisa.id) {
                let convertir = interaction.options.getNumber((divisa.iso).toLowerCase())
                await interaction.deferReply();
                try {
                    
                    const [DIVISA, oficial, blue] = await Promise.all([
                        axios.get('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json'),
                        axios.get('https://bluepy.vercel.app/api/dolar/oficial'),
                        axios.get('https://dolarapi.com/v1/dolares/blue')
                    ]);
                    let aconvertir = DIVISA.data['usd'][(divisa.iso).toLowerCase()]
                    const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                        .setTitle(`${divisa.nombre} <:rightarrow:921907270747570247> Peso Argentino`)
                        .setColor(divisa.color)
                        .setDescription(`${divisa.nombre} expresado en pesos argentinos`)
                        .setThumbnail(divisa.img)
                        .addFields(
                            //Monto Original
                            { name: `Monto original ${divisa.bandera}`, value: `${divisa.simbolo} ${formatoPrecio(convertir, divisa.iso)}` },
                            //Dólares
                            { name: `Valor en dólares 💸`, value: `Valor del ${divisa.nombre} en relación al dólar estadounidense.`, inline: false },
                            { name: `${divisa.nombre.toUpperCase()} <:rightarrow:921907270747570247> DÓLAR`, value: ` ${formatoPrecio(convertir / aconvertir, "USD")} `, inline: true },
                            //Oficial

                            { name: `${divisa.nombre} oficial :bank: `, value: `Valor del ${divisa.nombre} que se liquida por parte del gobierno nacional y está sujeto a diversos impuestos ` },
                            { name: "Compra :flag_ar: ", value: `ARS${formatoPrecio(((convertir / aconvertir) * oficial.data['compra']), "ARS")}`, inline: true },
                            { name: "Venta :flag_ar: ", value: `ARS${formatoPrecio(((convertir / aconvertir) * oficial.data['venta']), "ARS")}`, inline: true },
                            { name: "Impuestos (60%) ", value: `ARS${formatoPrecio(total60((convertir / aconvertir) * oficial.data['venta']), "ARS")}`, inline: true },
                            //Blue
                            { name: `${divisa.nombre} Blue <:dolarblue:1181095026432938034>  `, value: `Valor del mercado paralelo establecido por la oferta y la demanda` },
                            { name: "Compra :flag_ar: ", value: `ARS${formatoPrecio(((convertir / aconvertir) * blue.data['compra']), "ARS")}`, inline: true },
                            { name: "Venta :flag_ar: ", value: `ARS${formatoPrecio(((convertir / aconvertir) * blue.data['venta']), "ARS")}`, inline: true },
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
