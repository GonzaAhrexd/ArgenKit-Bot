import Discord from "discord.js";
import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
const { total21 } = require('../../functions/impuestos');
import { formatoPrecio } from '../../functions/formato';
import { getDolar } from "../../api/Divisas";
const wait = require('node:timers/promises').setTimeout;

const Fortnite = async (client, interaction) => {
    const valorDolar = (await getDolar()).oficial.value_sell;
       

    const createEmbed = (title, fields, color) => new Discord.EmbedBuilder()
        .setTitle("Fortnite")
        .setURL("https://www.epicgames.com/fortnite/es-ES/home")
        .setDescription("Precios de V-Bucks en Fortnite en Argentina:")
        .setColor(color)
        .setThumbnail("https://static.wikia.nocookie.net/depredador-avp/images/4/4f/Fortnite_F.png/revision/latest?cb=20231126072405&path-prefix=es")
        .addFields(fields);

    // Precios para PC/Epic Games (calculados con total21)
    const vbucksPricesEpic = [
        { name: "1000 V-Bucks", value: 8.99 },
        { name: "2800 V-Bucks", value: 22.99 },
        { name: "5000 V-Bucks", value: 36.99 },
        { name: "13500 V-Bucks", value: 89.99 }
    ];

    // Precios para Switch/Xbox (definidos manualmente, cámbialos según necesites)
    const vbucksPricesSwitchXbox = [
        { name: "1000 V-Bucks", value: 4977 },  // Cambia este valor (en ARS)
        { name: "2800 V-Bucks", value: 12727 },  // Cambia este valor (en ARS)
        { name: "5000 V-Bucks", value: 20477 },  // Cambia este valor (en ARS)
        { name: "13500 V-Bucks", value: 49817 } // Cambia este valor (en ARS)
    ];

    const embeds = {
        epic: createEmbed("Fortnite: PC/Epic Games", vbucksPricesEpic.map(p => ({
            name: p.name,
            value: `ARS${formatoPrecio(total21(valorDolar * p.value), "ARS")}`,
            inline: true
        })), "#77DBF7"),
        switchXbox: createEmbed("Fortnite: Switch/Xbox", vbucksPricesSwitchXbox.map(p => ({
            name: p.name,
            value: `ARS${formatoPrecio(total21(p.value), "ARS")}`, // Usamos el valor manual directamente
            inline: true
        })), "#00ff00")
    };

    const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder().setCustomId("epic").setLabel("PC/Epic Games").setStyle(ButtonStyle.Success),
            new ButtonBuilder().setCustomId("switchXbox").setLabel("Switch/Xbox").setStyle(ButtonStyle.Success)
        );

    await wait(3000);
    await interaction.editReply({ embeds: [embeds.epic], components: [row] });

    const filter = i => i.user.id === interaction.user.id;
    const collector = interaction.channel.createMessageComponentCollector({ filter, time: 20000 });
    let actual = embeds.epic;

    collector.on('collect', async i => {
        if (!i.isButton()) return;
        await i.deferUpdate();
        actual = embeds[i.customId];
        await i.editReply({ embeds: [actual], components: [row] });
    });

    collector.on("end", (collected, reason) => {
        if (reason === "time") {
            interaction.editReply({ embeds: [actual], components: [] });
        }
    });
};

export default Fortnite;