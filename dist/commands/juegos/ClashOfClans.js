"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const { total30 } = require('../../functions/impuestos');
const formato_1 = require("../../functions/formato");
const Divisas_1 = require("../../api/Divisas");
const wait = require('node:timers/promises').setTimeout;
const ClashOfClans = async (client, interaction) => {
    const valorDolar = (await (0, Divisas_1.getDolar)()).oficial.value_sell;
    // Function to create the embed based on perception toggle
    const createClashOfClansEmbed = (withPerception) => {
        const embedClashOfClans = new discord_js_1.default.EmbedBuilder()
            .setTitle("Clash of Clans")
            .setURL("https://clashofclans.com/es")
            .setDescription(`Los precios en Clash of Clans en Argentina son los siguientes:`)
            .setColor("#FFF956")
            .setThumbnail("https://play-lh.googleusercontent.com/LByrur1mTmPeNr0ljI-uAUcct1rzmTve5Esau1SwoAzjBXQUby6uHIfHbF9TAT51mgHm=w240-h480-rw");
        const items = [
            { name: "80 gemas", price: valorDolar * 1.08 },
            { name: "500 gemas", price: valorDolar * 5.43 },
            { name: "1200 gemas", price: valorDolar * 10.87 },
            { name: "2500 gemas", price: valorDolar * 21.76 },
            { name: "6500 gemas", price: valorDolar * 54.41 },
            { name: "14000 gemas", price: valorDolar * 108.83 },
        ];
        items.forEach(item => {
            const price = withPerception ? total30(item.price) : item.price;
            embedClashOfClans.addFields({
                name: item.name,
                value: `ARS ${(0, formato_1.formatoPrecio)(price, "ARS")}`,
                inline: true,
            });
        });
        return embedClashOfClans;
    };
    // Create buttons
    const withPerceptionButton = new discord_js_1.default.ButtonBuilder()
        .setCustomId('with_perception')
        .setLabel('Con Percepción')
        .setStyle(discord_js_1.default.ButtonStyle.Primary); // Celeste (Primary)
    const withoutPerceptionButton = new discord_js_1.default.ButtonBuilder()
        .setCustomId('without_perception')
        .setLabel('Sin Percepción')
        .setStyle(discord_js_1.default.ButtonStyle.Success); // Green (Success)
    const row = new discord_js_1.default.ActionRowBuilder()
        .addComponents(withPerceptionButton, withoutPerceptionButton);
    // Initial embed (with perception by default)
    let currentEmbed = createClashOfClansEmbed(true);
    // Send initial reply
    const message = await interaction.editReply({
        embeds: [currentEmbed],
        components: [row],
    });
    // Create a collector for button interactions
    const collector = message.createMessageComponentCollector({
        filter: i => i.user.id === interaction.user.id,
        time: 60000, // 60 seconds
    });
    collector.on('collect', async (i) => {
        if (i.customId === 'with_perception') {
            currentEmbed = createClashOfClansEmbed(true);
        }
        else if (i.customId === 'without_perception') {
            currentEmbed = createClashOfClansEmbed(false);
        }
        await i.update({
            embeds: [currentEmbed],
            components: [row],
        });
    });
    collector.on('end', async () => {
        // Disable buttons after collector ends
        withPerceptionButton.setDisabled(true);
        withoutPerceptionButton.setDisabled(true);
        const disabledRow = new discord_js_1.default.ActionRowBuilder()
            .addComponents(withPerceptionButton, withoutPerceptionButton);
        await interaction.editReply({
            embeds: [currentEmbed],
            components: [disabledRow],
        });
    });
};
exports.default = ClashOfClans;
