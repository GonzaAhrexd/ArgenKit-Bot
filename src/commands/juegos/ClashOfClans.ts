import Discord from "discord.js";
const { total30 } = require('../../functions/impuestos');
import { formatoPrecio } from '../../functions/formato';
import { getDolar } from "../../api/Divisas";
const wait = require('node:timers/promises').setTimeout;

const ClashOfClans = async (client: any, interaction: any) => {
        
        const valorDolar = (await getDolar()).oficial.value_sell;
    

        // Function to create the embed based on perception toggle
        const createClashOfClansEmbed = (withPerception) => {
            const embedClashOfClans = new Discord.EmbedBuilder()
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
                    value: `ARS ${formatoPrecio(price, "ARS")}`,
                    inline: true,
                });
            });

            return embedClashOfClans;
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

        collector.on('collect', async i => {
            if (i.customId === 'with_perception') {
                currentEmbed = createClashOfClansEmbed(true);
            } else if (i.customId === 'without_perception') {
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
            const disabledRow = new Discord.ActionRowBuilder()
                .addComponents(withPerceptionButton, withoutPerceptionButton);

            await interaction.editReply({
                embeds: [currentEmbed],
                components: [disabledRow],
            });
        });
    
}
export default ClashOfClans