
import Discord from "discord.js"
import { embedError } from "../functions/embedError";
var currencyFormatter = require('currency-formatter'); //Currency formatter
const wait = require('node:timers/promises').setTimeout
import Metales from "../variables/metales-valores";

import { getAll } from "../api/Divisas";
module.exports = {
    data: new Discord.SlashCommandBuilder()
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

        Metales.forEach(async Metal => {
            if (interaction.options.getSubcommand() === Metal.id) {
                let convertir: number = interaction.options.getNumber('ars')
                await interaction.deferReply();

                try {
                  

                    const metalData = (await getAll()).divisas[Metal.iso];
                    const dolarData = (await getAll()).dolar;


                    const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                        .setTitle(` Peso Argentino <:rightarrow:921907270747570247> ${Metal.nombre}`)
                        .setColor(Metal.color)
                        .setDescription(`Pesos Argentinos expresado en ${Metal.nombre} `)
                        .setThumbnail(Metal.imagen)
                        .addFields(
                            { name: `Monto Original :flag_ar:`, value: `ARS$ ` + currencyFormatter.format(convertir, { locale: 'es-ES', code: ' ' }), inline: false },
                            { name: `Compra ${Metal.emoji} `, value: `${Metal.iso} ` + currencyFormatter.format(((convertir * metalData)) / dolarData.oficial.value_buy, { locale: 'es-ES', code: ' ', precision: 8 }), inline: true },
                            { name: `Venta ${Metal.emoji} `, value: `${Metal.iso} ` + currencyFormatter.format(((convertir * metalData) / dolarData.oficial.value_sell), { locale: 'es-ES', code: ' ', precision: 8 }), inline: true },
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