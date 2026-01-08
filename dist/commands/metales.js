"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// DiscordJS
const discord_js_1 = __importDefault(require("discord.js"));
const discord_js_2 = require("discord.js");
const discord_js_3 = require("discord.js");
// Funciones y variables
const { formatoPrecio } = require('../functions/formato');
const metales_valores_1 = __importDefault(require("../variables/metales-valores")); //Divisas
const Divisas_1 = require("../api/Divisas");
const wait = require('node:timers/promises').setTimeout;
module.exports = {
    data: new discord_js_1.default.SlashCommandBuilder()
        .setName('metal')
        .setDescription('Muestra los datos los datos de un metal')
        .addSubcommand(subcommand => subcommand.setName('oro')
        .setDescription('Muestra los datos y precio del oro')).addSubcommand(subcommand => subcommand.setName('plata')
        .setDescription('Muestra los datos y precio de la plata')).addSubcommand(subcommand => subcommand.setName('paladio')
        .setDescription('Muestra los datos y precio del paladio')).addSubcommand(subcommand => subcommand.setName('platino')
        .setDescription('Muestra los datos y precio del platino')),
    async run(client, interaction, options) {
        //Oro
        metales_valores_1.default.forEach(async (Metal) => {
            if (interaction.options.getSubcommand() === Metal.id) {
                await interaction.deferReply();
                try {
                    const metalData = (await (0, Divisas_1.getAll)()).divisas[Metal.iso];
                    const dolarData = (await (0, Divisas_1.getAll)()).dolar;
                    const embed1 = new discord_js_1.default.EmbedBuilder()
                        .setTitle(`${Metal.nombre} ${Metal.emoji}`)
                        .setColor(Metal.color)
                        .setDescription(Metal.desc)
                        .setThumbnail(Metal.imagen)
                        .addFields({ name: 'Valor en dólares ' + Metal.emoji, value: formatoPrecio((1 / metalData), "USD"), inline: true }, { name: 'Compra ' + Metal.emoji, value: 'ARS' + formatoPrecio((1 / metalData) * dolarData.oficial.value_buy, "ARS"), inline: true }, { name: 'Venta ' + Metal.emoji, value: 'ARS' + formatoPrecio((1 / metalData) * dolarData.oficial.value_sell, "ARS"), inline: true });
                    const embed2 = new discord_js_1.default.EmbedBuilder()
                        .setTitle("Oro")
                        .setColor("#fddc4d")
                        .setDescription(Metal.desc)
                        .setThumbnail(Metal.imagen)
                        .addFields({ name: "Código ISO", value: Metal.iso, inline: true }, { name: "Número y símbolo atómico", value: Metal.numeroysimboloatomico, inline: true }, { name: "Dureza", value: Metal.dureza, inline: true }, { name: "Masa atómica", value: Metal.masaatomica, inline: true });
                    const row = new discord_js_2.ActionRowBuilder()
                        .addComponents(new discord_js_2.ButtonBuilder()
                        .setCustomId("conversion")
                        .setLabel("💸 Conversión ")
                        .setStyle(discord_js_3.ButtonStyle.Success))
                        .addComponents(new discord_js_2.ButtonBuilder()
                        .setCustomId("informacion")
                        .setLabel("📋 Información")
                        .setStyle(discord_js_3.ButtonStyle.Primary));
                    await wait(3000);
                    await interaction.editReply({ embeds: [embed1], components: [row] });
                    client.on('interactionCreate', interaction => {
                        if (!interaction.isButton())
                            return;
                    });
                    const filter = i => i.user.id === interaction.user.id;
                    const collector = interaction.channel.createMessageComponentCollector({ filter, time: 8000 });
                    var actual = embed1;
                    collector.on('collect', async (i) => {
                        if (i.customId === 'conversion') {
                            await i.deferUpdate();
                            await i.editReply({ embeds: [embed1], components: [row] });
                            actual = embed1;
                        }
                        if (i.customId === 'informacion') {
                            await i.deferUpdate();
                            await i.editReply({ embeds: [embed2], components: [row] });
                            actual = embed2;
                        }
                    });
                    collector.on("end", (collected, reason) => {
                        if (reason === "time") {
                            interaction.editReply({ embeds: [actual], components: [] });
                        }
                    });
                }
                catch (err) {
                    console.error('Error en el API de Metales', err);
                    const embed = new discord_js_1.default.EmbedBuilder()
                        .setTitle(`Ha ocurrido un error`)
                        .setColor(Metal.color)
                        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1070117134497235005/backup-copy.png")
                        .setDescription("Ha ocurrido un error relacionado con el api de Metales");
                    interaction.reply({ embeds: [embed] });
                }
            }
        });
    }
};
