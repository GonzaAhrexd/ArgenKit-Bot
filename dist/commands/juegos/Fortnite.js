"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const discord_js_2 = require("discord.js");
const { total21 } = require('../../functions/impuestos');
const formato_1 = require("../../functions/formato");
const Divisas_1 = require("../../api/Divisas");
const wait = require('node:timers/promises').setTimeout;
const Fortnite = async (client, interaction) => {
    const valorDolar = (await (0, Divisas_1.getDolar)()).oficial.value_sell;
    const createEmbed = (title, fields, color) => new discord_js_1.default.EmbedBuilder()
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
        { name: "1000 V-Bucks", value: 4977 },
        { name: "2800 V-Bucks", value: 12727 },
        { name: "5000 V-Bucks", value: 20477 },
        { name: "13500 V-Bucks", value: 49817 } // Cambia este valor (en ARS)
    ];
    const embeds = {
        epic: createEmbed("Fortnite: PC/Epic Games", vbucksPricesEpic.map(p => ({
            name: p.name,
            value: `ARS${(0, formato_1.formatoPrecio)(total21(valorDolar * p.value), "ARS")}`,
            inline: true
        })), "#77DBF7"),
        switchXbox: createEmbed("Fortnite: Switch/Xbox", vbucksPricesSwitchXbox.map(p => ({
            name: p.name,
            value: `ARS${(0, formato_1.formatoPrecio)(total21(p.value), "ARS")}`,
            inline: true
        })), "#00ff00")
    };
    const row = new discord_js_2.ActionRowBuilder()
        .addComponents(new discord_js_2.ButtonBuilder().setCustomId("epic").setLabel("PC/Epic Games").setStyle(discord_js_2.ButtonStyle.Success), new discord_js_2.ButtonBuilder().setCustomId("switchXbox").setLabel("Switch/Xbox").setStyle(discord_js_2.ButtonStyle.Success));
    await wait(3000);
    await interaction.editReply({ embeds: [embeds.epic], components: [row] });
    const filter = i => i.user.id === interaction.user.id;
    const collector = interaction.channel.createMessageComponentCollector({ filter, time: 20000 });
    let actual = embeds.epic;
    collector.on('collect', async (i) => {
        if (!i.isButton())
            return;
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
exports.default = Fortnite;
