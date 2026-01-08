
import axios from "axios";
import Discord from "discord.js"
import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js'
import { embedError } from "../../functions/embedError";
const { total51, total21, total30 } = require('../../functions/impuestos')
import { formatoPrecio } from '../../functions/formato'
import { getDolar } from "../../api/Divisas";

const wait = require('node:timers/promises').setTimeout

const FreeFire = async (client: any, interaction: any) => {
        const valorDolar = (await getDolar()).oficial.value_sell;
            

        // Function to create the embed based on perception toggle
        const createFreeFireEmbed = (withPerception) => {
            const embedFreeFire = new Discord.EmbedBuilder()
                .setTitle("Free Fire")
                .setURL("https://www.freefiremobile.com/es/")
                .setDescription(`Los precios en Free Fire en Argentina son los siguientes:`)
                .setColor("#E87914")
                .setThumbnail("https://upload.wikimedia.org/wikipedia/en/c/c5/Logo_of_Garena_Free_Fire.png");

            const items = [
                { name: "Membresia semanal", price: valorDolar * 2.16 },
                { name: "Membresia mensual", price: valorDolar * 10.86 },
                { name: "100 diamantes", price: valorDolar * 1.11 },
                { name: "310 diamantes", price: valorDolar * 3.36 },
                { name: "520 diamantes", price: valorDolar * 5.23 },
                { name: "1060 diamantes", price: valorDolar * 11.22 },
                { name: "2180 diamantes", price: valorDolar * 21.71 },
                { name: "5600 diamantes", price: valorDolar * 51.68 },
            ];

            items.forEach(item => {
                const price = withPerception ? total30(item.price) : item.price;
                embedFreeFire.addFields({
                    name: item.name,
                    value: `ARS ${formatoPrecio(price, "ARS")}`,
                    inline: true,
                });
            });

            return embedFreeFire;
        };

        // Create buttons
        const withPerceptionButton = new Discord.ButtonBuilder()
            .setCustomId('freefire_with_perception')
            .setLabel('Con Percepción')
            .setStyle(Discord.ButtonStyle.Primary); // Celeste (Primary)

        const withoutPerceptionButton = new Discord.ButtonBuilder()
            .setCustomId('freefire_without_perception')
            .setLabel('Sin Percepción')
            .setStyle(Discord.ButtonStyle.Success); // Green (Success)

        const row = new Discord.ActionRowBuilder()
            .addComponents(withPerceptionButton, withoutPerceptionButton);

        // Initial embed (with perception by default)
        let currentEmbed = createFreeFireEmbed(true);

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
            if (i.customId === 'freefire_with_perception') {
                currentEmbed = createFreeFireEmbed(true);
            } else if (i.customId === 'freefire_without_perception') {
                currentEmbed = createFreeFireEmbed(false);
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

export default FreeFire;