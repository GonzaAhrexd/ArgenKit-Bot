
// DiscordJS
import Discord from "discord.js"
import { ActionRowBuilder, ButtonBuilder } from 'discord.js'
import { ButtonStyle } from 'discord.js'
// Axios
import axios from "axios"
// Funciones y variables
const { formatoPrecio } = require('../functions/formato')
import Metales from "../variables/metales-valores" //Divisas
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
      
        Metales.forEach(async Metal => {
            if (interaction.options.getSubcommand() === Metal.id) {
                await interaction.deferReply();
                try {
                    const [metal, oficial ] = await Promise.all([
                        axios.get('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json'),
                        axios.get('https://api.bluelytics.com.ar/v2/latest'),
                    ]);

                    const embed1: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                        .setTitle(`${Metal.nombre} ${Metal.emoji}`)
                        .setColor(Metal.color)
                        .setDescription(Metal.desc)
                        .setThumbnail(Metal.imagen)
                        .addFields(
                            { name: 'Valor en dólares ' + Metal.emoji, value: formatoPrecio((1 / metal.data['usd'][Metal.iso]), "USD"), inline: true},
                            { name: 'Compra ' + Metal.emoji, value: 'ARS' + formatoPrecio((1 / metal.data['usd'][Metal.iso]) * oficial.data['oficial']['value_buy'], "ARS"), inline: true },
                            { name: 'Venta ' + Metal.emoji, value: 'ARS' + formatoPrecio((1 / metal.data['usd'][Metal.iso]) * oficial.data['oficial']['value_sell'], "ARS"), inline: true },   
                        )


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



