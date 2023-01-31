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
        .setName('convertirdivisa')
        .setDescription('Convierte de Dolar Estadounidense a Pesos Argentinos')
        .addSubcommand(subcommand =>
            subcommand.setName('dolar')
                .setDescription('Convierte de Dólares Estadounidenses a Pesos Argentinos')
                .addStringOption(option =>
                    option.setName('usd')
                        .setDescription('Monto en Dólares.')
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('euro')
                .setDescription('Convierte de Euros a Pesos Argentinos')
                .addStringOption(option =>
                    option.setName('eur')
                        .setDescription('Monto en Euros.')
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('real')
                .setDescription('Convierte de Reales Brasileños a Pesos Argentinos')
                .addStringOption(option =>
                    option.setName('brl')
                        .setDescription('Monto en Reales.')
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('yen')
                .setDescription('Convierte de Yenes Japoneses a Pesos Argentinos')
                .addStringOption(option =>
                    option.setName('jpy')
                        .setDescription('Monto en Yenes.')
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('libra')
                .setDescription('Convierte de Libras Esterlinas a Pesos Argentinos')
                .addStringOption(option =>
                    option.setName('gbp')
                        .setDescription('Monto en Libras.')
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('rublo')
                .setDescription('Convierte de Rublos Rusos a Pesos Argentinos')
                .addStringOption(option =>
                    option.setName('rub')
                        .setDescription('Monto en Rublos.')
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('dolarcanadiense')
                .setDescription('Convierte de Dólares Canadianos a Pesos Argentinos')
                .addStringOption(option =>
                    option.setName('cad')
                        .setDescription('Monto en Dólares Canadianos.')
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('dolaraustraliano')
                .setDescription('Convierte de Dólares Australianos a Pesos Argentinos')
                .addStringOption(option =>
                    option.setName('aud')
                        .setDescription('Monto en Dólares Australianos.')
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('dolarneozelandes')
                .setDescription('Convierte de Dólares Neozelandeses a Pesos Argentinos')
                .addStringOption(option =>
                    option.setName('nzd')
                        .setDescription('Monto en Dólares Neozelandeses.')
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('pesomexicano')
                .setDescription('Convierte de Pesos Mexicanos a Pesos Argentinos')
                .addStringOption(option =>
                    option.setName('mxn')
                        .setDescription('Monto en Pesos Mexicanos.')
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('pesochileno')
                .setDescription('Convierte de Pesos Chilenos a Pesos Argentinos')
                .addStringOption(option =>
                    option.setName('clp')
                        .setDescription('Monto en Pesos Chilenos.')
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('pesocolombiano')
                .setDescription('Convierte de Pesos Colombianos a Pesos Argentinos')
                .addStringOption(option =>
                    option.setName('cop')
                        .setDescription('Monto en Pesos Colombianos.')
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('pesouruguayo')
                .setDescription('Convierte de Pesos Uruguayos a Pesos Argentinos')
                .addStringOption(option =>
                    option.setName('uyu')
                        .setDescription('Monto en Pesos Uruguayos.')
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('boliviano')
                .setDescription('Convierte de Bolivianos a Pesos Argentinos')
                .addStringOption(option =>
                    option.setName('bob')
                        .setDescription('Monto en Bolivianos.')
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('sol')
                .setDescription('Convierte de Soles a Pesos Argentinos')
                .addStringOption(option =>
                    option.setName('pen')
                        .setDescription('Monto en Soles.')
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('guarani')
                .setDescription('Convierte de Guaraníes a Pesos Argentinos')
                .addStringOption(option =>
                    option.setName('pyg')
                        .setDescription('Monto en Guaraníes.')
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('bolivar')
                .setDescription('Convierte de Bolívares a Pesos Argentinos')
                .addStringOption(option =>
                    option.setName('vef')
                        .setDescription('Monto en Bolívares.')
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('yuan')
                .setDescription('Convierte de Yuanes a Pesos Argentinos')
                .addStringOption(option =>
                    option.setName('cny')
                        .setDescription('Monto en Yuanes.')
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('rupia')
                .setDescription('Convierte de Rupias a Pesos Argentinos')
                .addStringOption(option =>
                    option.setName('inr')
                        .setDescription('Monto en Rupias.')
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('won')
                .setDescription('Convierte de Wons a Pesos Argentinos')
                .addStringOption(option =>
                    option.setName('krw')
                        .setDescription('Monto en Wons.')
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('franco')
                .setDescription('Convierte de Francos Suizos a Pesos Argentinos')
                .addStringOption(option =>
                    option.setName('chf')
                        .setDescription('Monto en Francos.')
                ))
                .addSubcommand(subcommand =>
                    subcommand.setName('lira')
                        .setDescription('Convierte de Liras Turcas a Pesos Argentinos')
                        .addStringOption(option =>
                            option.setName('try')
                                .setDescription('Monto en Liras.')
                        )),


    async run(client, interaction, options) {

        if (interaction.options.getSubcommand() === 'dolar') {
            let conv2 = interaction.options.getNumber('usd')
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/oficial')
                .then(async (oficial) => {
                    await axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/blue')
                        .then(async (blue) => {
                            await axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/bolsa')
                                .then(async (mep) => {
                                    await axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/contadoliqui')
                                        .then(async (ccl) => {

                                            const embed = new Discord.MessageEmbed()

                                                .setTitle("Dólar estadounidense <:rightarrow:921907270747570247> Peso Argentino")
                                                .setColor("GREEN")
                                                .setDescription("Dólares estadounidenses expresado en pesos argentinos")
                                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921906513453408286/dolarapeso.png")
                                                .addField("Monto original :dollar: ", 'USD$ ' + currencyFormatter.format(conv2, { locale: 'es-ES', code: ' ' }))
                                                //Oficial
                                                .addField("Dólar oficial :bank: ", "Valor del dólar que se liquida por parte del gobierno nacional y está sujeto a diversos impuestos, sólo se puede retirar USD$200 al mes.", false)
                                                .addField("Compra :flag_ar:", 'ARS$ ' + currencyFormatter.format((conv2 * oficial.data['compra']), { locale: 'es-ES', code: ' ' }), true)
                                                .addField("Venta :flag_ar:", 'ARS$ ' + currencyFormatter.format((conv2 * oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)

                                                //Impuestos
                                                .addField("IMPUESTOS <:taxes:1068370368819101746>", "\n Impuestos aplicados al dólar oficial en los pagos con tarjeta o compra del banco  ", false)
                                                .addField("TARJETA (74%)  ", "ARS$ " + currencyFormatter.format(total74(conv2 * oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                                                .addField("SOLIDARIO (75%)  ", "ARS$ " + currencyFormatter.format(total75(conv2 * oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                                                .addField("TURISTA (100%)  ", "ARS$ " + currencyFormatter.format(total100(conv2 * oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)

                                                //Blue
                                                .addField("Dólar blue <:dollarblue:903149186436980767>", "Valor del mercado paralelo establecido por la oferta y la demanda", false)
                                                .addField("Compra :flag_ar:", 'ARS$ ' + currencyFormatter.format((conv2 * blue.data['compra']), { locale: 'es-ES', code: ' ' }), true)
                                                .addField("Venta :flag_ar:", 'ARS$ ' + currencyFormatter.format((conv2 * blue.data['venta']), { locale: 'es-ES', code: ' ' }), true)

                                                //Financieros
                                                .addField("Financieros <:finanzas:1068357650380755045>", "Son el resultante de operaciones bursátiles que implican comprar una acción o un bono en pesos y vender ese mismo papel en dólares.", false)
                                                .addField("Compra :flag_ar:", 'ARS$ ' + currencyFormatter.format((conv2 * mep.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                                                .addField("Venta :flag_ar:", 'ARS$ ' + currencyFormatter.format((conv2 * ccl.data['venta']), { locale: 'es-ES', code: ' ' }), true)


                                                await interaction.deferReply();
                                                setTimeout( () => {
                                                 interaction.editReply({ embeds: [embed] });
                                                }, 3000)

                                        })
                                        .catch((err) => {
                                            console.error('ERR', err)
                                        })
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

        if (interaction.options.getSubcommand() === 'euro') {
            let conv2 = interaction.options.getNumber('eur')
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
                .then(async (oficial) => {
                    await axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/blue')
                        .then(async (blue) => {


                            const embed = new Discord.MessageEmbed()

                                .setTitle("Euro <:rightarrow:921907270747570247> Peso Argentino")
                                .setColor("#0153b4")
                                .setDescription("Euro expresado en pesos argentinos")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922548848826654801/euroapeso.png")
                                .addField("Monto original :euro: ", 'EUR€ ' + currencyFormatter.format(conv2, { locale: 'es-ES', code: ' ' }))
                                //Oficial
                                .addField("Dólar oficial :bank: ", "Valor del euro que se liquida por parte del gobierno nacional y está sujeto a diversos impuestos, sólo se puede retirar USD$200 al mes.", false)
                                .addField("Compra :flag_ar:", 'ARS$ ' + currencyFormatter.format((conv2 * oficial.data['compra']), { locale: 'es-ES', code: ' ' }), true)
                                .addField("Venta :flag_ar:", 'ARS$ ' + currencyFormatter.format((conv2 * oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)

                                //Impuestos
                                .addField("IMPUESTOS <:taxes:1068370368819101746>", "\n Impuestos aplicados en los pagos con tarjeta o compra del banco  ", false)
                                .addField("TARJETA (74%)  ", "ARS$ " + currencyFormatter.format(total74(conv2 * oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                                .addField("SOLIDARIO (75%)  ", "ARS$ " + currencyFormatter.format(total75(conv2 * oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                                .addField("TURISTA (100%)  ", "ARS$ " + currencyFormatter.format(total100(conv2 * oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)

                                //Blue
                                .addField("Euro Blue <:dollarblue:903149186436980767>", "Valor del mercado paralelo establecido por la oferta y la demanda", false)
                                .addField("Compra :flag_ar:", 'ARS$ ' + currencyFormatter.format((conv2 * blue.data['compra']), { locale: 'es-ES', code: ' ' }), true)
                                .addField("Venta :flag_ar:", 'ARS$ ' + currencyFormatter.format((conv2 * blue.data['venta']), { locale: 'es-ES', code: ' ' }), true)


                       

                                await interaction.deferReply();
                                setTimeout( () => {
                                 interaction.editReply({ embeds: [embed] });
                                }, 3000)


                        })
                        .catch((err) => {
                            console.error('ERR', err)
                        })
                })


                .catch((err) => {
                    console.error('ERR', err)
                })

        }

        if (interaction.options.getSubcommand() === 'real') {
            let conv2 = interaction.options.getNumber('brl')
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/real/oficial')
                .then(async (oficial) => {
                    await axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/real/blue')
                        .then(async (blue) => {


                            const embed = new Discord.MessageEmbed()

                                .setTitle("Euro <:rightarrow:921907270747570247> Peso Argentino")
                                .setColor("#6da545")
                                .setDescription("Euro expresado en pesos argentinos")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922553925243117698/realapeso.png")
                                .addField("Monto original :flag_br: ", 'BRL R$ ' + currencyFormatter.format(conv2, { locale: 'es-ES', code: ' ' }))
                                //Oficial
                                .addField("Dólar oficial :bank: ", "Valor del euro que se liquida por parte del gobierno nacional y está sujeto a diversos impuestos, sólo se puede retirar USD$200 al mes.", false)
                                .addField("Compra :flag_ar:", 'ARS$ ' + currencyFormatter.format((conv2 * oficial.data['compra']), { locale: 'es-ES', code: ' ' }), true)
                                .addField("Venta :flag_ar:", 'ARS$ ' + currencyFormatter.format((conv2 * oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)

                                //Impuestos
                                .addField("IMPUESTOS <:taxes:1068370368819101746>", "\n Impuestos aplicados en los pagos con tarjeta o compra del banco  ", false)
                                .addField("TARJETA (74%)  ", "ARS$ " + currencyFormatter.format(total74(conv2 * oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                                .addField("SOLIDARIO (75%)  ", "ARS$ " + currencyFormatter.format(total75(conv2 * oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                                .addField("TURISTA (100%)  ", "ARS$ " + currencyFormatter.format(total100(conv2 * oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)

                                //Blue
                                .addField("Real Blue <:dollarblue:903149186436980767>", "Valor del mercado paralelo establecido por la oferta y la demanda", false)
                                .addField("Compra :flag_ar:", 'ARS$ ' + currencyFormatter.format((conv2 * blue.data['compra']), { locale: 'es-ES', code: ' ' }), true)
                                .addField("Venta :flag_ar:", 'ARS$ ' + currencyFormatter.format((conv2 * blue.data['venta']), { locale: 'es-ES', code: ' ' }), true)


                           

                                await interaction.deferReply();
                                setTimeout( () => {
                                 interaction.editReply({ embeds: [embed] });
                                }, 3000)


                        })
                        .catch((err) => {
                            console.error('ERR', err)
                        })
                })


                .catch((err) => {
                    console.error('ERR', err)
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
            color: "red",
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
            color: "blue",
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
            color: "red",
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

                let convertir = interaction.options.getNumber((divisa.iso).toLowerCase())

                axios.get('https://api.exchangerate.host/latest')
                    .then((DIVISA) => {
                        let aconvertir = DIVISA.data['rates'][divisa.iso]

                        axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
                            .then((oficial) => {
                                axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/blue')
                                    .then(async (blue) => {

                                        //Aquí el código
                                        const embed = new Discord.MessageEmbed()
                                            .setTitle(`${divisa.nombre} <:rightarrow:921907270747570247> Peso Argentino`)
                                            .setColor(divisa.color)
                                            .setDescription(`${divisa.nombre} expresado en pesos argentinos`)
                                            .setThumbnail(divisa.img)
                                            .addField(`Monto original ${divisa.bandera}`, divisa.simbolo + currencyFormatter.format(convertir, { locale: 'es-ES', code: ' ' }))
                                            //Oficial
                                            .addField("Dólar oficial :bank: ", `Valor del ${divisa.nombre} que se liquida por parte del gobierno nacional y está sujeto a diversos impuestos `, false)
                                            .addField("Compra :flag_ar:", 'ARS$ ' + currencyFormatter.format(((convertir / aconvertir) * oficial.data['compra']), { locale: 'es-ES', code: ' ' }), true)
                                            .addField("Venta :flag_ar:", 'ARS$ ' + currencyFormatter.format(((convertir / aconvertir) * oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)

                                            //Impuestos
                                            .addField("IMPUESTOS <:taxes:1068370368819101746>", "\n Impuestos aplicados en los pagos con tarjeta o compra del banco  ", false)
                                            .addField("TARJETA (74%)  ", "ARS$ " + currencyFormatter.format(total74((convertir / aconvertir) * oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                                            .addField("SOLIDARIO (75%)  ", "ARS$ " + currencyFormatter.format(total75((convertir / aconvertir) * oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                                            .addField("TURISTA (100%)  ", "ARS$ " + currencyFormatter.format(total100((convertir / aconvertir) * oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)

                                            //Blue
                                            .addField(`${divisa.nombre} Blue <:dollarblue:903149186436980767>`, "Valor del mercado paralelo establecido por la oferta y la demanda", false)
                                            .addField("Compra :flag_ar:", 'ARS$ ' + currencyFormatter.format(((convertir / aconvertir) * blue.data['compra']), { locale: 'es-ES', code: ' ' }), true)
                                            .addField("Venta :flag_ar:", 'ARS$ ' + currencyFormatter.format(((convertir / aconvertir) * blue.data['venta']), { locale: 'es-ES', code: ' ' }), true)

                                            await interaction.deferReply();
                                            setTimeout( () => {
                                             interaction.editReply({ embeds: [embed] });
                                            }, 3000)
                                    }).catch((err) => {
                                        console.error('ERR', err)
                                    })
                            }).catch((err) => {
                                console.error('ERR', err)
                            })
                    }).catch((err) => {
                        console.error('ERR', err)
                    })
            }
        })
    }
}