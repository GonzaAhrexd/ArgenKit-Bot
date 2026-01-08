"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const discord_js_2 = require("discord.js");
const impuestos = require("../functions/impuestos");
var currencyFormatter = require('currency-formatter'); //Currency formatter
const discord_js_3 = require("discord.js");
const formato_1 = require("../functions/formato");
module.exports = {
    data: new discord_js_1.default.SlashCommandBuilder()
        .setName('impuesto')
        .setDescription('Calcula el impuesto a compras extranjeras con tarjeta')
        .addNumberOption(option => option.setName('monto')
        .setDescription('Valor a calcular.')
        .setRequired(true)),
    async run(client, interaction, options) {
        const monto = interaction.options.getNumber('monto');
        const config = {
            iva: {
                titulo: "Cálculo de IVA (21%)",
                descripcion: "Las plataformas de gaming no están alcanzadas por la percepción de ganancias. Solo tributan IVA",
                color: "#fcd6d6",
                campos: [
                    { name: "I.V.A (21%)", value: (0, formato_1.formatoPrecio)(impuestos.iva(monto), "ARS"), inline: true },
                    { name: "Total con IVA", value: (0, formato_1.formatoPrecio)(monto + impuestos.iva(monto), "ARS"), inline: true }
                ]
            },
            ganancias: {
                titulo: "Impuestos al exterior (30%)",
                descripcion: "Se recomienda pagar con dólar en cuenta bancaria para evitar el 30% de percepción de ganancias.",
                color: "#d6f2fc",
                campos: [
                    { name: "Percepción de Ganancias (30%)", value: (0, formato_1.formatoPrecio)(impuestos.ganancias(monto), "ARS"), inline: true },
                    { name: "Total (30%)", value: (0, formato_1.formatoPrecio)(impuestos.total30(monto), "ARS"), inline: true }
                ]
            },
            servicios: {
                titulo: "Impuestos al exterior en servicios digitales (51%)",
                descripcion: "Algunos servicios digitales tributan IVA y percepción de ganancias.",
                color: "#d6f2fc",
                campos: [
                    { name: "I.V.A (21%)", value: (0, formato_1.formatoPrecio)(impuestos.iva(monto), "ARS"), inline: true },
                    { name: "Percepción de Ganancias (30%)", value: (0, formato_1.formatoPrecio)(impuestos.ganancias(monto), "ARS"), inline: true },
                    { name: "Total (51%)", value: (0, formato_1.formatoPrecio)(impuestos.total51(monto), "ARS"), inline: true }
                ]
            }
        };
        const crearEmbed = (clave) => {
            const { titulo, descripcion, color, campos } = config[clave];
            return new discord_js_1.default.EmbedBuilder()
                .setTitle(titulo)
                .setDescription(descripcion)
                .setColor(color)
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1179850115163373568/taxes.png")
                .addFields([{ name: "Monto original", value: (0, formato_1.formatoPrecio)(monto, "ARS") }, ...campos]);
        };
        const row = new discord_js_2.ActionRowBuilder().addComponents(new discord_js_2.ButtonBuilder().setCustomId('iva').setLabel("📄Solo IVA (21%)").setStyle(discord_js_3.ButtonStyle.Success), new discord_js_2.ButtonBuilder().setCustomId('ganancias').setLabel("📄Ganancias (30%)").setStyle(discord_js_3.ButtonStyle.Primary), new discord_js_2.ButtonBuilder().setCustomId('servicios').setLabel("📄IVA + Ganancias (51%)").setStyle(discord_js_3.ButtonStyle.Danger));
        await interaction.reply({ embeds: [crearEmbed('iva')], components: [row] });
        const filter = i => i.user.id === interaction.user.id;
        const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });
        collector.on('collect', async (i) => {
            await i.deferUpdate();
            if (config[i.customId]) {
                await i.editReply({ embeds: [crearEmbed(i.customId)], components: [row] });
            }
        });
    }
};
