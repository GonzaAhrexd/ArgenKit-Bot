import Discord from "discord.js";
const { total30 } = require('../../functions/impuestos');
import { formatoPrecio } from '../../functions/formato';
import { getDolar } from "../../api/Divisas";

const BrawlStars = async (client: any, interaction: any) => {
 
    const valorDolar = (await getDolar()).oficial.value_sell;

    // Function to create the embed based on perception toggle
    const createBrawlStarsEmbed = (withPerception) => {
        const embedBrawlStars = new Discord.EmbedBuilder()
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
                value: `ARS ${formatoPrecio(price, "ARS")}`,
                inline: true,
            });
        });

        return embedBrawlStars;
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

    collector.on('collect', async i => {
        if (i.customId === 'with_perception') {
            currentEmbed = createBrawlStarsEmbed(true);
        } else if (i.customId === 'without_perception') {
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
        const disabledRow = new Discord.ActionRowBuilder()
            .addComponents(withPerceptionButton, withoutPerceptionButton);

        await interaction.editReply({
            embeds: [currentEmbed],
            components: [disabledRow],
        });
    });

}

export default BrawlStars;