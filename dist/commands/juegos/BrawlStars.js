"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const { total30 } = require('../../functions/impuestos');
const formato_1 = require("../../functions/formato");
const Divisas_1 = require("../../api/Divisas");
const BrawlStars = async (client, interaction) => {
    const valorDolar = (await (0, Divisas_1.getDolar)()).oficial.value_sell;
    // Function to create the embed based on perception toggle
    const createBrawlStarsEmbed = (withPerception) => {
        const embedBrawlStars = new discord_js_1.default.EmbedBuilder()
            .setTitle("Brawl Stars")
            .setURL("https://supercell.com/en/games/brawlstars/")
            .setDescription(`Los precios en Brawl Stars en Argentina son los siguientes: \nAl pagar debitando de dólar en cuenta bancaria se puede evitar la percepción de ganancias:`)
            .setColor("#FFBE20")
            .setThumbnail("https://play-lh.googleusercontent.com/EiElcSrd6-o-19roiswSx0AZPzsq6qF3hUGHsSWDl5UVtj7G23DHkneM8ucwqyOmEg=w480-h960-rw");
        const items = [
            { name: "30 gemas", price: valorDolar * 1.99 },
            { name: "80 gemas", price: valorDolar * 4.99 },
            { name: "170 gemas", price: valorDolar * 9.99 },
            { name: "360 gemas", price: valorDolar * 19.99 },
            { name: "950 gemas", price: valorDolar * 49.99 },
            { name: "2000 gemas", price: valorDolar * 99.99 },
        ];
        items.forEach(item => {
            const price = withPerception ? total30(item.price) : item.price;
            embedBrawlStars.addFields({
                name: item.name,
                value: `ARS ${(0, formato_1.formatoPrecio)(price, "ARS")}`,
                inline: true,
            });
        });
        return embedBrawlStars;
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
    let currentEmbed = createBrawlStarsEmbed(true);
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
            currentEmbed = createBrawlStarsEmbed(true);
        }
        else if (i.customId === 'without_perception') {
            currentEmbed = createBrawlStarsEmbed(false);
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
exports.default = BrawlStars;
