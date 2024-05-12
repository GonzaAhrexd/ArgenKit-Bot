
import Discord from "discord.js"
import axios from "axios"
var currencyFormatter = require('currency-formatter'); //Currency formatter
const { total60 } = require("../functions/impuestos"); //Impuestos
import { formatoPrecio } from '../functions/formato'
import { embedError } from "../functions/embedError"
const wait = require('node:timers/promises').setTimeout
module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('convertirmetal')
        .setDescription('Convierte de un metal a Pesos Argentinos')
        .addSubcommand(subcommand =>
            subcommand.setName('oro')
                .setDescription('Convierte de Oro a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('xau')
                        .setDescription('Monto en onza de Oro').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('plata')
                .setDescription('Convierte de Plata a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('xag')
                        .setDescription('Monto en onza de Plata').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('platino')
                .setDescription('Convierte de Platino a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('xpt')
                        .setDescription('Monto en onza de Platino.').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('paladio')
                .setDescription('Convierte de Paladio a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('xpd')
                        .setDescription('Monto en onza de Paladio').setRequired(true)
                )),

    async run(client, interaction, options) {
        let Metales: Array<{
            id: string,
            nombre: string,
            emoji: string,
            desc: string,
            iso: string,
            imagen: string,
            color: Discord.ColorResolvable
        }>
            = [{
                id: "oro",
                nombre: "Oro",
                emoji: "<:goldingots:964717629484965938>",
                desc: "El oro es un elemento químico cuyo número atómico es 79. Está ubicado en el grupo 11 de la tabla periódica. Es un metal precioso blando de color amarillo dorado. Su símbolo es Au (del latín aurum, ‘brillante amanecer’). Además, es uno de los metales más apreciados en joyería por sus propiedades físicas, al tener baja alterabilidad, ser muy maleable, dúctil y brillante, y valorado por su rareza, al ser un metal difícil de encontrar en la naturaleza.",
                iso: "xau",
                imagen: "https://cdn.discordapp.com/attachments/802944543510495292/964738102771990648/convertiroro.png",
                color: "#fddc4d"
            },
            {
                id: "plata",
                nombre: "Plata",
                emoji: "<:silver:964717593816600606>",
                desc: "La plata es un elemento químico cuyo número atómico es 47. Está ubicado en el grupo 11 de la tabla periódica. Es un metal blanco plateado y muy valorado por sus propiedades conductoras de electricidad y termo conductoras. Además, es uno de los metales más utilizados en la fabricación de joyas y monedas. Su símbolo es Ag (del latín argentum, ‘plata’).",
                iso: "xag",
                imagen: "https://cdn.discordapp.com/attachments/802944543510495292/964739866707492884/convertirplata_1.png",
                color: "#cccccc"
            },
            {
                id: "paladio",
                nombre: "Paladio",
                emoji: "<:paladio:964717594223456336>",
                desc: "El paladio es un elemento químico cuyo número atómico es 46. Está ubicado en el grupo 10 de la tabla periódica y es un metal blanco plateado. Es valorado por sus propiedades catalíticas y su capacidad para absorber hidrógeno. Se utiliza en la fabricación de catalizadores, joyas y electrónica. Su símbolo es Pd.",
                iso: "xpd",
                imagen: "https://cdn.discordapp.com/attachments/802944543510495292/964739251159859230/convertirpaladio.png",
                color: "#808080"
            },
            {
                id: "platino",
                nombre: "Platino",
                emoji: "<:platinum:964717592923222017>",
                desc: "El platino es un elemento químico cuyo número atómico es 78. Está ubicado en el grupo 10 de la tabla periódica y es uno de los metales más raros en la corteza terrestre. Es valorado por su alta resistencia a la corrosión y por sus propiedades catalíticas. Se utiliza en la fabricación de joyas, catalizadores y termopares. Su símbolo es Pt.",
                iso: "xpt",
                imagen: "https://cdn.discordapp.com/attachments/802944543510495292/964739250899804180/convertirplatinoxd.png",
                color: "#a9f8f7"
            },
            ]

        Metales.forEach(async Metal => {
            if (interaction.options.getSubcommand() === Metal.id) {

                let convertir: number = interaction.options.getNumber((Metal.iso).toLowerCase())
                await interaction.deferReply();
                try {
                    const [metal, oficial, blue] = await Promise.all([
                        axios.get('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json'),
                        axios.get('https://bluepy.vercel.app/api/dolar/oficial'),
                        axios.get('https://dolarapi.com/v1/dolares/blue'),
                    ]);


                    const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                        .setTitle(`${Metal.nombre} <:rightarrow:921907270747570247> Peso Argentino`)
                        .setColor(Metal.color)
                        .setDescription(`${Metal.nombre}  expresado en pesos argentinos `)
                        .setThumbnail(Metal.imagen)
                        .addFields(
                            { name: `Monto Original ${Metal.emoji}`, value: `${Metal.iso} ${currencyFormatter.format(convertir, { locale: 'es-ES', code: ' ' })}` },
                            //Oficial
                            { name: `${Metal.nombre} a precio del dólar oficial :bank: `, value: `Valor del ${Metal.nombre} a precio del dólar oficial, liquidado por parte del gobierno nacional sujeto a diversos impuestos ` },
                            { name: "Compra :flag_ar: ", value: `ARS${formatoPrecio(((convertir / metal.data['usd'][Metal.iso])) * oficial.data['compra'], "ARS")}`, inline: true },
                            { name: "Venta :flag_ar: ", value: `ARS${formatoPrecio(((convertir / metal.data['usd'][Metal.iso])) * oficial.data['venta'], "ARS")}`, inline: true },
                            //Impuestos
                            { name: "Impuestos (60%) ", value: `ARS${formatoPrecio(total60((convertir / metal.data['usd'][Metal.iso]) * oficial.data['venta']), "ARS")}`, inline: true },
                            //Blue
                            { name: `${Metal.nombre} a precio del Dólar Blue <:dolarblue:1181095026432938034>  `, value: `Valor del mercado paralelo establecido por la oferta y la demanda` },
                            { name: "Compra :flag_ar: ", value: `ARS${formatoPrecio(((convertir / metal.data['usd'][Metal.iso])) * blue.data['compra'], "ARS")}`, inline: true },
                            { name: "Venta :flag_ar: ", value: `ARS${formatoPrecio(((convertir / metal.data['usd'][Metal.iso])) * blue.data['venta'], "ARS")}`, inline: true })
                            
                    await wait(4000)
                    await interaction.editReply({ embeds: [embed] });
               

                } catch (error) {
                    embedError(interaction, error)
                }
            }  
        }) 
    } 
} 