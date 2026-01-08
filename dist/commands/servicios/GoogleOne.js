"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const discord_js_2 = require("discord.js");
const Divisas_1 = require("../../api/Divisas");
const { total30 } = require("../../functions/impuestos"); //Impuestos
const { formatoPrecio } = require('../../functions/formato');
const googleone = async (client, interaction) => {
    const valorDolar = (await (0, Divisas_1.getDolar)()).oficial.value_sell;
    const embed1 = new discord_js_1.default.EmbedBuilder()
        .setTitle("Google One")
        .setDescription("Los precios de Google One mensual en Argentina son los siguientes: \n Debitando con dólares se puede obtener un precio más bajo.")
        .setColor('#f1bb1a')
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913859037764911174/icons8-google-one-500.png")
        .addFields({ name: "Plan de 100GB (USD$ 1,99)", value: `ARS${formatoPrecio(total30(1.99 * valorDolar), "ARS")}`, inline: true }, { name: "Plan de 200GB (USD$ 2,99)", value: `ARS${formatoPrecio(total30(2.99 * valorDolar), "ARS")}`, inline: true }, { name: "Plan de 1TB  (USD$ 9,99)", value: `ARS${formatoPrecio(total30(9.99 * valorDolar), "ARS")}`, inline: true }, { name: "Plan de 100GB Anual (USD$ 19,99)", value: `ARS${formatoPrecio(total30(19.99 * valorDolar), "ARS")}`, inline: true }, { name: "Plan de 200GB Anual (USD$ 29,99)", value: `ARS${formatoPrecio(total30(29.99 * valorDolar), "ARS")}`, inline: true }, { name: "Plan de 1TB Anual (USD$ 99,99)", value: `ARS${formatoPrecio(total30(99.99 * valorDolar), "ARS")}`, inline: true });
    const embed2 = new discord_js_1.default.EmbedBuilder()
        .setTitle("Google One")
        .setDescription("Los precios de Google One anual en Argentina son los siguientes:\n Debitando con dólares se puede obtener un precio más bajo.")
        .setColor('#f1bb1a')
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913859037764911174/icons8-google-one-500.png")
        .addFields({ name: "Plan de 100GB (USD$ 1,99)", value: `ARS${formatoPrecio((1.99 * valorDolar), "ARS")}`, inline: true }, { name: "Plan de 200GB (USD$ 2,99)", value: `ARS${formatoPrecio((2.99 * valorDolar), "ARS")}`, inline: true }, { name: "Plan de 1TB (USD$ 9,99)", value: `ARS${formatoPrecio((9.99 * valorDolar), "ARS")}`, inline: true }, { name: "Plan de 100GB Anual (USD$ 19,99)", value: `ARS${formatoPrecio((19.99 * valorDolar), "ARS")}`, inline: true }, { name: "Plan de 200GB Anual (USD$ 29,99)", value: `ARS${formatoPrecio((29.99 * valorDolar), "ARS")}`, inline: true }, { name: "Plan de 1TB Anual (USD$ 99,99)", value: `ARS${formatoPrecio((99.99 * valorDolar), "ARS")}`, inline: true });
    const row = new discord_js_2.ActionRowBuilder()
        .addComponents(new discord_js_2.ButtonBuilder()
        .setCustomId('percepciones')
        .setLabel("Percepciones")
        .setStyle(discord_js_2.ButtonStyle.Success)).addComponents(new discord_js_2.ButtonBuilder()
        .setCustomId('sinpercepciones')
        .setLabel("Sin percepciones")
        .setStyle(discord_js_2.ButtonStyle.Primary));
    await interaction.editReply({ embeds: [embed1], components: [row] });
    client.on('interactionCreate', interaction => {
        if (!interaction.isButton())
            return;
    });
    const filter = i => i.customId;
    const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });
    collector.on('collect', async (i) => {
        if (i.customId === 'percepciones') {
            await i.deferUpdate();
            await i.editReply({ embeds: [embed1], components: [row] });
        }
        if (i.customId === 'sinpercepciones') {
            await i.deferUpdate();
            await i.editReply({ embeds: [embed2], components: [row] });
        }
    });
};
exports.default = googleone;
