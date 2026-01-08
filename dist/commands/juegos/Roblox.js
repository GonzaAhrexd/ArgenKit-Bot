"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const discord_js_2 = require("discord.js");
const { total51, total30 } = require('../../functions/impuestos');
const formato_1 = require("../../functions/formato");
const wait = require('node:timers/promises').setTimeout;
const Divisas_1 = require("../../api/Divisas");
const Roblox = async (client, interaction) => {
    const valorDolar = (await (0, Divisas_1.getDolar)()).oficial.value_sell;
    const createEmbed = (title, descripcion, fields, color) => new discord_js_1.default.EmbedBuilder()
        .setTitle(title)
        .setURL("https://www.roblox.com/")
        .setDescription(descripcion)
        .setColor(color)
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/7/7e/Roblox_Logo_2022.jpg")
        .addFields(fields);
    const premiumPrices = [
        { name: "Premium 450", value: 4.99 },
        { name: "Premium 1000", value: 9.99 },
        { name: "Premium 2200", value: 19.99 }
    ];
    const robuxPrices = [
        { name: "Robux 400", value: 4.99 },
        { name: "Robux 800", value: 9.99 },
        { name: "Robux 1700", value: 19.99 },
        { name: "Robux 4500", value: 49.99 },
        { name: "Robux 10000", value: 99.99 },
        { name: "Robux 22500", value: 199.99 }
    ];
    const embeds = {
        ivaPercepcion: createEmbed("Roblox: IVA + Percepción", "Comprando desde Roblox.com cobra IVA y Percepción de Ganancias", [
            ...premiumPrices.map(p => ({ name: p.name, value: `ARS${(0, formato_1.formatoPrecio)(total51(valorDolar * p.value), "ARS")}`, inline: true })),
            ...robuxPrices.map(r => ({ name: r.name, value: `ARS${(0, formato_1.formatoPrecio)(total51(valorDolar * r.value), "ARS")}`, inline: true }))
        ], "#ff0000"),
        percepcion: createEmbed("Roblox: Percepción", "Comprando desde la PlayStore solamente cobra percepción de ganancias (30%)", [
            ...premiumPrices.map(p => ({ name: p.name, value: `ARS${(0, formato_1.formatoPrecio)(total30(valorDolar * p.value), "ARS")}`, inline: true })),
            ...robuxPrices.map(r => ({ name: r.name, value: `ARS${(0, formato_1.formatoPrecio)(total30(valorDolar * r.value), "ARS")}`, inline: true }))
        ], "#00ff00"),
        sinImpuestos: createEmbed("Roblox: Sin Impuestos", "Pagando con dólares en cuenta bancaria se puede evitar la percepción de ganancias", [
            ...premiumPrices.map(p => ({ name: p.name, value: `ARS${(0, formato_1.formatoPrecio)(valorDolar * p.value, "ARS")}`, inline: true })),
            ...robuxPrices.map(r => ({ name: r.name, value: `ARS${(0, formato_1.formatoPrecio)(valorDolar * r.value, "ARS")}`, inline: true }))
        ], "#0000ff")
    };
    const row = new discord_js_2.ActionRowBuilder()
        .addComponents(new discord_js_2.ButtonBuilder().setCustomId("ivaPercepcion").setLabel("IVA + Percepción").setStyle(discord_js_2.ButtonStyle.Success), new discord_js_2.ButtonBuilder().setCustomId("percepcion").setLabel("Percepción").setStyle(discord_js_2.ButtonStyle.Success), new discord_js_2.ButtonBuilder().setCustomId("sinImpuestos").setLabel("Sin Impuestos").setStyle(discord_js_2.ButtonStyle.Success));
    await wait(3000);
    await interaction.editReply({ embeds: [embeds.ivaPercepcion], components: [row] });
    const filter = i => i.user.id === interaction.user.id;
    const collector = interaction.channel.createMessageComponentCollector({ filter, time: 20000 });
    let actual = embeds.ivaPercepcion;
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
exports.default = Roblox;
