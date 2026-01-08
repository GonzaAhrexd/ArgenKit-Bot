import axios from "axios";
import Discord from "discord.js";
import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
const { total30 } = require('../../functions/impuestos');
import { formatoPrecio } from '../../functions/formato';
const wait = require('node:timers/promises').setTimeout;

import { getDolar } from "../../api/Divisas";

const ClashRoyale = async(client: any, interaction: any) => {

     const valorDolar = (await getDolar()).oficial.value_sell;
        

    // Function to create the embed based on perception toggle
    const createClashRoyaleEmbed = (withPerception) => {
        const embedClashRoyale = new Discord.EmbedBuilder()
            .setTitle("Clash Royale")
            .setURL("https://clashroyale.com/es")
            .setDescription(`Los precios en Clash Royale en Argentina son los siguientes:`)
            .setColor("#57EAFF")
            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1181063385966723112/image.png?ex=657fb1fe&is=656d3cfe&hm=77fa2f583d85f9c4b6290adfa300c6fc4d49af6b199d7fe141c1b3c44bbde4a4&");

        const items = [
            { name: "Pass Royale Oro", price: valorDolar * 6.52 },
            { name: "Pass Royale Diamante", price: valorDolar * 13.05 },
            { name: "80 gemas", price: valorDolar * 1.08 },
            { name: "500 gemas", price: valorDolar * 5.43 },
            { name: "1200 gemas", price: valorDolar * 10.87 },
            { name: "2500 gemas", price: valorDolar * 21.76 },
            { name: "6500 gemas", price: valorDolar * 54.41 },
            { name: "14000 gemas", price: valorDolar * 108.83 },
        ];

        items.forEach(item => {
            const price = withPerception ? total30(item.price) : item.price;
            embedClashRoyale.addFields({
                name: item.name,
                value: `ARS ${formatoPrecio(price, "ARS")}`,
                inline: true,
            });
        });

        return embedClashRoyale;
    };

    // Create buttons
    const withPerceptionButton = new Discord.ButtonBuilder()
        .setCustomId('with_perception')
        .setLabel('Con Percepción')
        .setStyle(Discord.ButtonStyle.Primary); // Celeste (Primary)

    const withoutPerceptionButton = new Discord.ButtonBuilder()
        .setCustomId('without_perception')
        .setLabel('Sin Percepción')
        .setStyle(Discord.ButtonStyle.Success); // Green (Success)

    const row = new Discord.ActionRowBuilder()
        .addComponents(withPerceptionButton, withoutPerceptionButton);

    // Initial embed (with perception by default)
    let currentEmbed = createClashRoyaleEmbed(true);

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

    collector.on('collect', async i => {
        if (i.customId === 'with_perception') {
            currentEmbed = createClashRoyaleEmbed(true);
        } else if (i.customId === 'without_perception') {
            currentEmbed = createClashRoyaleEmbed(false);
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
        const disabledRow = new Discord.ActionRowBuilder()
            .addComponents(withPerceptionButton, withoutPerceptionButton);

        await interaction.editReply({
            embeds: [currentEmbed],
            components: [disabledRow],
        });
    });
}

export default ClashRoyale