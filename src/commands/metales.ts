

import { ActionRowBuilder, ButtonBuilder, StringSelectMenuBuilder } from 'discord.js'
import Discord from "discord.js"
import axios from "axios"
import { ButtonStyle } from 'discord.js'
var currencyFormatter = require('currency-formatter'); //Currency formatter
const { total155 } = require("../functions/impuestos"); //Impuestos
const { formatoPrecio } = require('../functions/formato')
const wait = require('node:timers/promises').setTimeout
module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('metal')
        .setDescription('Muestra los datos los datos de un metal')
        .addSubcommand(subcommand =>
            subcommand.setName('oro')
                .setDescription('Muestra los datos y precio del oro')
        ).addSubcommand(subcommand =>
            subcommand.setName('plata')
                .setDescription('Muestra los datos y precio de la plata')
        ).addSubcommand(subcommand =>
            subcommand.setName('paladio')
                .setDescription('Muestra los datos y precio del paladio')
        ).addSubcommand(subcommand =>
            subcommand.setName('platino')
                .setDescription('Muestra los datos y precio del platino')
        ),

    async run(client, interaction, options) {
        //Oro
        let Metales: Array<{
            id: String,
            nombre: String,
            emoji: string,
            desc: string,
            iso: string,
            numeroysimboloatomico: string,
            dureza: string,
            masaatomica: string,
            imagen: string
            color: Discord.ColorResolvable
        }>
            = [{
                id: "oro",
                nombre: "Oro",
                emoji: "<:goldingots:964717629484965938>",
                desc: "El oro es un elemento químico cuyo número atómico es 79. Está ubicado en el grupo 11 de la tabla periódica. Es un metal precioso blando de color amarillo dorado. Su símbolo es Au (del latín aurum, ‘brillante amanecer’). Además, es uno de los metales más apreciados en joyería por sus propiedades físicas, al tener baja alterabilidad, ser muy maleable, dúctil y brillante, y valorado por su rareza, al ser un metal difícil de encontrar en la naturaleza.",
                iso: "xau",
                numeroysimboloatomico: "79 - Au",
                dureza: "3,0",
                masaatomica: "196,966569(4) u",
                imagen: "https://cdn.discordapp.com/attachments/802944543510495292/964716664023285870/gold-ingots_1.png",
                color: "#fddc4d"
            },
            {
                id: "plata",
                nombre: "Plata",
                emoji: "<:silver:964717593816600606>",
                desc: "La plata es un elemento químico cuyo número atómico es 47. Está ubicado en el grupo 11 de la tabla periódica. Es un metal blanco plateado y muy valorado por sus propiedades conductoras de electricidad y termo conductoras. Además, es uno de los metales más utilizados en la fabricación de joyas y monedas. Su símbolo es Ag (del latín argentum, ‘plata’).",
                iso: "xag",
                numeroysimboloatomico: "47 - Ag",
                dureza: "2,5",
                masaatomica: "107,8682(2) u",
                imagen: "https://cdn.discordapp.com/attachments/802944543510495292/964713789540958238/silver.png",
                color: "#cccccc"
            },
            {
                id: "paladio",
                nombre: "Paladio",
                emoji: "<:paladio:964717594223456336>",
                desc: "El paladio es un elemento químico cuyo número atómico es 46. Está ubicado en el grupo 10 de la tabla periódica y es un metal blanco plateado. Es valorado por sus propiedades catalíticas y su capacidad para absorber hidrógeno. Se utiliza en la fabricación de catalizadores, joyas y electrónica. Su símbolo es Pd.",
                iso: "xpd",
                numeroysimboloatomico: "46 - Pd",
                dureza: "4",
                masaatomica: "106,42(1) u",
                imagen: "https://cdn.discordapp.com/attachments/802944543510495292/964713789259911218/paladio.png",
                color: "#808080"
            },
            {
                id: "platino",
                nombre: "Platino",
                emoji: "<:platinum:964717592923222017>",
                desc: "El platino es un elemento químico cuyo número atómico es 78. Está ubicado en el grupo 10 de la tabla periódica y es uno de los metales más raros en la corteza terrestre. Es valorado por su alta resistencia a la corrosión y por sus propiedades catalíticas. Se utiliza en la fabricación de joyas, catalizadores y termopares. Su símbolo es Pt.",
                iso: "xpt",
                numeroysimboloatomico: "78 - Pt",
                dureza: "4",
                masaatomica: "195,084(5) u",
                imagen: "https://cdn.discordapp.com/attachments/802944543510495292/964713788978913320/platinum.png",
                color: "#a9f8f7"
            },
            ]
        Metales.forEach(async Metal => {
            if (interaction.options.getSubcommand() === Metal.id) {
                await interaction.deferReply();
                try {
                    const [metal, oficial, blue] = await Promise.all([
                        axios.get('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json'),
                        axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/oficial'),
                        axios.get('https://dolarapi.com/v1/dolares/blue'),
                    ]);

                    const embed1: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                        .setTitle(`${Metal.nombre} ${Metal.emoji}`)
                        .setColor(Metal.color)
                        .setDescription(Metal.desc)
                        .setThumbnail(Metal.imagen)
                        .addFields(
                            { name: 'Precio en dólares ' + Metal.emoji, value: formatoPrecio((1 / metal.data['usd'][Metal.iso]), "USD"), inline: false },
                            //Oficial
                            { name: 'Compra ' + Metal.emoji, value: 'ARS' + formatoPrecio((1 / metal.data['usd'][Metal.iso]) * oficial.data['compra'], "ARS"), inline: true },
                            { name: 'Venta ' + Metal.emoji, value: 'ARS' + formatoPrecio((1 / metal.data['usd'][Metal.iso]) * oficial.data['venta'], "ARS"), inline: true },
                            //Impuestos
                            { name: "Impuestos (155%)", value: "ARS" + formatoPrecio(total155((1 / metal.data['usd'][Metal.iso]) * oficial.data['venta']), "ARS"), inline: true },
                            //Blue
                            { name: Metal.nombre + " a precio blue <:dolarblue:1181095026432938034>", value: "Valor del mercado paralelo establecido por la oferta y la demanda", inline: false },
                            { name: "Compra", value: "ARS" + formatoPrecio((1 / metal.data['usd'][Metal.iso]) * blue.data['compra'], "ARS"), inline: true },
                            { name: "Venta", value: "ARS" + formatoPrecio((1 / metal.data['usd'][Metal.iso]) * blue.data['venta'], "ARS"), inline: true })

                    const embed2: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                        .setTitle("Oro")
                        .setColor("#fddc4d")
                        .setDescription(Metal.desc)
                        .setThumbnail(Metal.imagen)
                        .addFields(
                            { name: "Código ISO", value: Metal.iso, inline: true },
                            { name: "Número y símbolo atómico", value: Metal.numeroysimboloatomico, inline: true },
                            { name: "Dureza", value: Metal.dureza, inline: true },
                            { name: "Masa atómica", value: Metal.masaatomica, inline: true }
                        )

                    const row = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId("conversion")
                                .setLabel("💸 Conversión ")
                                .setStyle(ButtonStyle.Success)
                        )
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId("informacion")
                                .setLabel("📋 Información")
                                .setStyle(ButtonStyle.Primary)
                        )

                    await wait(3000)
                    await interaction.editReply({ embeds: [embed1], components: [row] });



                    client.on('interactionCreate', interaction => {
                        if (!interaction.isButton()) return;
                    });
                    const filter = i => i.user.id === interaction.user.id;
                    const collector = interaction.channel.createMessageComponentCollector({ filter, time: 8000 });
                    var actual = embed1
                    collector.on('collect', async i => {
                        if (i.customId === 'conversion') {
                            await i.deferUpdate()
                            await i.editReply({ embeds: [embed1], components: [row] });
                            actual = embed1
                        }
                        if (i.customId === 'informacion') {
                            await i.deferUpdate();
                            await i.editReply({ embeds: [embed2], components: [row] });
                            actual = embed2
                        }
                    })
                    collector.on("end", (collected, reason) => {
                        if (reason === "time") {
                            interaction.editReply({ embeds: [actual], components: [] });
                        }
                    })
                } catch (err) {
                    console.error('Error en el API de Metales', err)
                    const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                        .setTitle(`Ha ocurrido un error`)
                        .setColor(Metal.color)
                        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1070117134497235005/backup-copy.png")
                        .setDescription("Ha ocurrido un error relacionado con el api de Metales")
                    interaction.reply({ embeds: [embed] });
                }

            }
        })
    }
}



