
import Discord from "discord.js"
import axios from "axios"
import { ButtonStyle } from 'discord.js'
import { ActionRowBuilder, ButtonBuilder, StringSelectMenuBuilder } from 'discord.js'
import { formatoPrecio } from '../functions/formato'
import { embedError } from "../functions/embedError"
import Criptomonedas from "../variables/criptomonedas-valores"
const wait = require('node:timers/promises').setTimeout
module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('criptomoneda')
        .setDescription('Muestra los datos de una criptomoneda y su cotización')
        .addSubcommand(subcommand =>
            subcommand.setName('bitcoin')
                .setDescription('Muestra los datos y precio actual del bitcoin')
        ).addSubcommand(subcommand =>
            subcommand.setName('ethereum')
                .setDescription('Muestra los datos y precio actual del ethereum')
        )
        .addSubcommand(subcommand =>
            subcommand.setName('tether')
                .setDescription('Muestra los datos y precio actual del Tether')
        ).addSubcommand(subcommand =>
            subcommand.setName('axieinfinity')
                .setDescription('Muestra los datos y precio actual del AxieInfinity')
        ).addSubcommand(subcommand =>
            subcommand.setName('decentraland')
                .setDescription('Muestra los datos y precio actual del Decentraland')
        ).addSubcommand(subcommand =>
            subcommand.setName('solana')
                .setDescription('Muestra los datos y precio actual del Solana')
        ).addSubcommand(subcommand =>
            subcommand.setName('dai')
                .setDescription('Muestra los datos y precio actual del Dai')
        ).addSubcommand(subcommand =>
            subcommand.setName('dogecoin')
                .setDescription('Muestra los datos y precio actual del Dogecoin')
        ).addSubcommand(subcommand =>
            subcommand.setName('terraluna')
                .setDescription('Muestra los datos y precio actual del Terra Luna 2.0')
        ).addSubcommand(subcommand =>
            subcommand.setName('litecoin')
                .setDescription('Muestra los datos y precio actual del Litecoin')
        ).addSubcommand(subcommand =>
            subcommand.setName('cardano')
                .setDescription('Muestra los datos y precio actual del Cardano')
        ).addSubcommand(subcommand =>
            subcommand.setName('bnb')
                .setDescription('Muestra los datos y precio actual del Binance Coin')
        ).addSubcommand(subcommand =>
            subcommand.setName('usdcoin')
                .setDescription('Muestra los datos y precio actual del USD Coin')
        ).addSubcommand(subcommand =>
            subcommand.setName('avalanche')
                .setDescription('Muestra los datos y precio actual del Avalanche')
        ).addSubcommand(subcommand =>
            subcommand.setName('polkadot')
                .setDescription('Muestra los datos y precio actual del Polkadot')
        ).addSubcommand(subcommand =>
            subcommand.setName('uniswap')
                .setDescription('Muestra los datos y precio actual del Uniswap')
        ).addSubcommand(subcommand =>
            subcommand.setName('polygon')
                .setDescription('Muestra los datos y precio actual del Matic Network')
        ).addSubcommand(subcommand =>
            subcommand.setName('tron')
                .setDescription('Muestra los datos y precio actual del Tron')
        ),

    async run(client, interaction, options) {


        Criptomonedas.forEach(async cripto => {
            if (interaction.options.getSubcommand() === cripto.id) {

                try {
                    const [apiCoingecko, apiLemon] = await Promise.all([
                        axios.get(cripto.apicoingecko),
                        axios.get(cripto.apilemon),
                    ]);
                    let criptodolar: number = apiCoingecko.data['prices'][0][1]
                    const embed1 = new Discord.EmbedBuilder()
                    embed1.setTitle(cripto.nombre)
                        .setColor(cripto.color)
                        .setDescription(cripto.desc)
                        .setThumbnail(cripto.imagen)
                    if (cripto.id === "terraluna") {
                        embed1.addFields(
                            { name: `Precio `, value: `${formatoPrecio(criptodolar, "USD")}`, inline: true },
                            { name: `Volumen `, value: `${formatoPrecio(((apiCoingecko.data['total_volumes'][0][1])), "USD")}`, inline: true },
                            { name: `Capitalización `, value: `${formatoPrecio(((apiCoingecko.data['market_caps'][0][1])), "USD")}`, inline: true },
                            { name: `Compra `, value: `ARS${formatoPrecio(criptodolar * apiLemon.data['bid'], "ARS")}`, inline: true },
                            { name: `Venta `, value: `ARS${formatoPrecio(criptodolar * apiLemon.data['ask'], "ARS")}`, inline: true }
                        )
                    }

                    else {
                        embed1.addFields(
                            { name: `Precio `, value: `${formatoPrecio(criptodolar, "USD")}`, inline: true },
                            { name: `Volumen `, value: `${formatoPrecio(((apiCoingecko.data['total_volumes'][0][1])), "USD")}`, inline: true },
                            { name: `Capitalización `, value: `${formatoPrecio(((apiCoingecko.data['market_caps'][0][1])), "USD")}`, inline: true },
                            { name: `Compra `, value: `ARS${formatoPrecio(apiLemon.data['bid'], "ARS")}`, inline: true },
                            { name: `Venta `, value: `ARS${formatoPrecio(apiLemon.data['ask'], "ARS")}`, inline: true }
                        )
                    }

                    const embed2 = new Discord.EmbedBuilder()
                        .setTitle(cripto.nombre)
                        .setColor(cripto.color)
                        .setDescription(cripto.desc)
                        .setThumbnail(cripto.imagen)
                        .addFields(
                            { name: "Lanzamiento inicial", value: cripto.lanzamiento },
                            { name: "Código ISO", value: cripto.iso, inline: true },
                            { name: "Símbolo ", value: cripto.simbolo, inline: true },
                            { name: "Desarrollador ", value: cripto.desarrollador },
                            { name: "Límite de Emisión  ", value: cripto.limitedeemision }
                        )

                    const row = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId("criptodolar")
                                .setLabel("💸 Conversión ")
                                .setStyle(ButtonStyle.Success)
                        )
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId("informacion")
                                .setLabel("📋 Información")
                                .setStyle(ButtonStyle.Primary)
                        )

                    await interaction.deferReply();
                    await wait(4000)
                    await interaction.editReply({ embeds: [embed1], components: [row] });

                    client.on('interactionCreate', interaction => {
                        if (!interaction.isButton()) return;
                    });
                    const filter = i => i.user.id === interaction.user.id;

                    const collector = interaction.channel.createMessageComponentCollector({ filter, time: 8000 });

                    var actual = embed1

                    collector.on('collect', async i => {
                        if (i.customId === 'criptodolar') {
                            await i.deferUpdate()
                            await i.editReply({ embeds: [embed1], components: [row] });
                            actual = embed1
                        }
                        if (i.customId === 'informacion') {
                            await i.deferUpdate();
                            await i.editReply({ embeds: [embed2], components: [row] });
                            actual = embed2
                        }
                    });

                    collector.on("end", (collected, reason) => {
                        if (reason === "time") {
                            interaction.editReply({ embeds: [actual], components: [] });
                        }
                    })


                } catch (error) {

                    embedError(interaction, error)
                }

            }
        })
    }


}