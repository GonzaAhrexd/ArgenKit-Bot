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
const { restar75, restar74, restar100 } = require("../functions/impuestos"); //Impuestos
module.exports = {
    data: new SlashCommandBuilder()
        .setName('pesoametal')
        .setDescription('Convierte de Pesos Argentinos a un metal')
        .addSubcommand(subcommand =>
            subcommand.setName('oro')
                .setDescription('Convierte de Pesos Argentinos a Oro')
                .addNumberOption(option =>
                    option.setName('ars')
                        .setDescription('Monto en Pesos Argentinos').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('plata')
                .setDescription('Convierte de Pesos Argentinos a Plata')
                .addNumberOption(option =>
                    option.setName('ars')
                        .setDescription('Monto en Pesos Argentinos').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('platino')
                .setDescription('Convierte de Pesos Argentinos a Platino')
                .addNumberOption(option =>
                    option.setName('ars')
                        .setDescription('Monto en Pesos Argentinos.').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('paladio')
                .setDescription('Convierte de Pesos Argentinos a Paladio')
                .addNumberOption(option =>
                    option.setName('ars')
                        .setDescription('Monto en Pesos Argentinos').setRequired(true)
                )),

    async run(client, interaction, options) {
        let Metales: Array<{
            id: String,
            nombre: String,
            emoji: string,
            desc: string,
            iso: string,
            imagen: String
            color: String
        }>
            = [{
                id: "oro",
                nombre: "Oro",
                emoji: "<:goldingots:964717629484965938>",
                desc: "El oro es un elemento químico cuyo número atómico es 79. Está ubicado en el grupo 11 de la tabla periódica. Es un metal precioso blando de color amarillo dorado. Su símbolo es Au (del latín aurum, ‘brillante amanecer’). Además, es uno de los metales más apreciados en joyería por sus propiedades físicas, al tener baja alterabilidad, ser muy maleable, dúctil y brillante, y valorado por su rareza, al ser un metal difícil de encontrar en la naturaleza.",
                iso: "XAU",
                imagen: "https://cdn.discordapp.com/attachments/802944543510495292/964738102771990648/convertiroro.png",
                color: "#fddc4d"
            },
            {
                id: "plata",
                nombre: "Plata",
                emoji: "<:silver:964717593816600606>",
                desc: "La plata es un elemento químico cuyo número atómico es 47. Está ubicado en el grupo 11 de la tabla periódica. Es un metal blanco plateado y muy valorado por sus propiedades conductoras de electricidad y termo conductoras. Además, es uno de los metales más utilizados en la fabricación de joyas y monedas. Su símbolo es Ag (del latín argentum, ‘plata’).",
                iso: "XAG",
                imagen: "https://cdn.discordapp.com/attachments/802944543510495292/964739866707492884/convertirplata_1.png",
                color: "#cccccc"
            },
            {
                id: "paladio",
                nombre: "Paladio",
                emoji: "<:paladio:964717594223456336>",
                desc: "El paladio es un elemento químico cuyo número atómico es 46. Está ubicado en el grupo 10 de la tabla periódica y es un metal blanco plateado. Es valorado por sus propiedades catalíticas y su capacidad para absorber hidrógeno. Se utiliza en la fabricación de catalizadores, joyas y electrónica. Su símbolo es Pd.",
                iso: "XPD",
                imagen: "https://cdn.discordapp.com/attachments/802944543510495292/964739251159859230/convertirpaladio.png",
                color: "#808080"
            },
            {
                id: "platino",
                nombre: "Platino",
                emoji: "<:platinum:964717592923222017>",
                desc: "El platino es un elemento químico cuyo número atómico es 78. Está ubicado en el grupo 10 de la tabla periódica y es uno de los metales más raros en la corteza terrestre. Es valorado por su alta resistencia a la corrosión y por sus propiedades catalíticas. Se utiliza en la fabricación de joyas, catalizadores y termopares. Su símbolo es Pt.",
                iso: "XPT",
                imagen: "https://cdn.discordapp.com/attachments/802944543510495292/964739250899804180/convertirplatinoxd.png",
                color: "#a9f8f7"
            },
            ]

        Metales.forEach(async Metal => {
            if (interaction.options.getSubcommand() === Metal.id) {

                let convertir: number = interaction.options.getNumber('ars')
                console.log(convertir)
                axios.get('https://api.metals.live/v1/spot/')
                    .then(async (ACONVERTIR) => {

                        var conversion: number = 0

                        if (Metal.id == 'oro')
                            conversion = ACONVERTIR.data[0].gold

                        if (Metal.id == 'plata')
                            conversion = ACONVERTIR.data[1].silver

                        if (Metal.id == 'platino')
                            conversion = ACONVERTIR.data[2].platinum

                        if (Metal.id == 'paladio')
                            conversion = ACONVERTIR.data[3].palladium

                        await axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/oficial')

                            .then(async (oficial) => {
                                await axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/blue')
               
                                    .then(async (blue) => {

                                        const embed = new Discord.MessageEmbed()
                                            .setTitle(` Peso Argentino <:rightarrow:921907270747570247> ${Metal.nombre}`)
                                            .setColor(Metal.color)
                                            .setDescription(`Pesos Argentinos expresado en ${Metal.nombre} `)
                                            .setThumbnail(Metal.imagen)
                                            .addField(`Monto Original :flag_ar:`, `ARS$ ` + currencyFormatter.format(convertir, { locale: 'es-ES', code: ' ' }), false)
                                            .addField(`Compra ${Metal.emoji} `, `${Metal.iso} ` + currencyFormatter.format(((convertir / conversion)) / oficial.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                                            .addField(`Venta ${Metal.emoji} `, `${Metal.iso} ` + currencyFormatter.format(((convertir / conversion) / oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)

                                            .addField("IMPUESTOS <:taxes:1068370368819101746>", "\n Impuestos aplicados al dólar oficial en los pagos con tarjeta o compra del banco  ", false)
                                            .addField("TARJETA (74%)  ", `${Metal.iso} ` + currencyFormatter.format(restar74((convertir / conversion) / oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                                            .addField("SOLIDARIO (75%)  ",`${Metal.iso} ` + currencyFormatter.format(restar75((convertir / conversion) / oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                                            .addField("TURISTA (100%)  ", `${Metal.iso} ` + currencyFormatter.format(restar100((convertir / conversion) / oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)

                                            .addField("Dólar blue <:dollarblue:903149186436980767>", "Valor del mercado paralelo establecido por la oferta y la demanda", false)
                                            .addField("Compra :flag_ar:", `${Metal.iso} ` + currencyFormatter.format((convertir / conversion) / blue.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                                            .addField("Venta :flag_ar:", `${Metal.iso} ` + currencyFormatter.format((convertir / conversion) / blue.data['venta'], { locale: 'es-ES', code: ' ' }), true)

                                        await interaction.deferReply();
                                        setTimeout(() => {
                                            interaction.editReply({ embeds: [embed] });
                                        }, 3000)

                                    }).catch((err) => {
                                        console.error('Error en el API de Blue', err)
                                    })
                            }).catch((err) => {
                                console.error('Error en el de oficial', err)
                            })

                    }).catch((err) => {
                        console.error('Error en el API de Metales', err)
                        const embed = new Discord.MessageEmbed()
                        .setTitle(`Ha ocurrido un error`)
                        .setColor(Metal.color)
                        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1070117134497235005/backup-copy.png")
                        .setDescription("Ha ocurrido un error relacionado con el api de Metales")
                        interaction.reply({ embeds: [embed] });

                    })


            }  //Cierra if
        }) //Cierra forEach

   


    } //Async run
} //Module export