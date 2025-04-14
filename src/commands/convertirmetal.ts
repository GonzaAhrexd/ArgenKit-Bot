
import Discord from "discord.js"
import axios from "axios"
var currencyFormatter = require('currency-formatter'); //Currency formatter
const { total30 } = require("../functions/impuestos"); //Impuestos
import { formatoPrecio } from '../functions/formato'
import { embedError } from "../functions/embedError"
import Metales from "../variables/metales-valores" //Divisas
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
       
        Metales.forEach(async Metal => {
            if (interaction.options.getSubcommand() === Metal.id) {

                let convertir: number = interaction.options.getNumber((Metal.iso).toLowerCase())
                await interaction.deferReply();
                try {
                    const [metal, oficial ] = await Promise.all([
                        axios.get('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json'),
                        axios.get('https://api.bluelytics.com.ar/v2/latest'),
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
                            { name: "Compra :flag_ar: ", value: `ARS${formatoPrecio(((convertir / metal.data['usd'][Metal.iso])) * oficial.data['oficial']['value_buy'], "ARS")}`, inline: true },
                            { name: "Venta :flag_ar: ", value: `ARS${formatoPrecio(((convertir / metal.data['usd'][Metal.iso])) * oficial.data['oficial']['value_sell'], "ARS")}`, inline: true },
                            //Impuestos
                            { name: "Impuestos (30%) ", value: `ARS${formatoPrecio(total30((convertir / metal.data['usd'][Metal.iso]) * oficial.data['oficial']['value_sell']), "ARS")}`, inline: true },
                            //Blue
                            { name: `${Metal.nombre} a precio del Dólar Blue <:dolarblue:1181095026432938034>  `, value: `Valor del mercado paralelo establecido por la oferta y la demanda` },
                        )
                    await wait(4000)
                    await interaction.editReply({ embeds: [embed] });
               

                } catch (error) {
                    embedError(interaction, error)
                }
            }  
        }) 
    } 
} 