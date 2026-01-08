"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const discord_js_2 = require("discord.js");
const { total30 } = require('../../functions/impuestos');
const formato_1 = require("../../functions/formato");
const Divisas_1 = require("../../api/Divisas");
const GenshinImpact = async (client, interaction) => {
    const valorDolar = (await (0, Divisas_1.getDolar)()).oficial.value_sell;
    // Cálculo del precio con o sin percepción
    const calcularPrecio = (usd, conPercepcion) => {
        const precio = usd * valorDolar;
        return conPercepcion ? total30(precio) : precio;
    };
    // Función para crear el embed
    const crearEmbedGenshin = (conPercepcion) => {
        const embed = new discord_js_1.default.EmbedBuilder()
            .setTitle("Genshin Impact")
            .setURL("https://genshin.mihoyo.com/es/home")
            .setDescription(conPercepcion
            ? "Los precios en Genshin Impact **con percepción (30%)** en Argentina son los siguientes:"
            : "Al pagar debitando directamente en dólares con cuenta en dólar se puede evitar la percepción:")
            .setColor("#7997D3")
            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1181053245804773386/image.png?ex=657fa88c&is=656d338c&hm=ec2dcfd2f9ad4898c65d3b344684da67cdf324916f13c2fabaa5308663a1b4b0&")
            .addFields({ name: "Pase", value: `ARS ${(0, formato_1.formatoPrecio)(calcularPrecio(9.99, conPercepcion), "ARS")}`, inline: true }, { name: "Pase 10 niveles", value: `ARS ${(0, formato_1.formatoPrecio)(calcularPrecio(19.99, conPercepcion), "ARS")}`, inline: true }, { name: "Bendición de la Luna", value: `ARS ${(0, formato_1.formatoPrecio)(calcularPrecio(4.99, conPercepcion), "ARS")}`, inline: true }, { name: "60 Cristales", value: `ARS ${(0, formato_1.formatoPrecio)(calcularPrecio(0.99, conPercepcion), "ARS")}`, inline: true }, { name: "300 Cristales", value: `ARS ${(0, formato_1.formatoPrecio)(calcularPrecio(4.99, conPercepcion), "ARS")}`, inline: true }, { name: "980 Cristales", value: `ARS ${(0, formato_1.formatoPrecio)(calcularPrecio(14.99, conPercepcion), "ARS")}`, inline: true }, { name: "1980 Cristales", value: `ARS ${(0, formato_1.formatoPrecio)(calcularPrecio(29.99, conPercepcion), "ARS")}`, inline: true }, { name: "3280 Cristales", value: `ARS ${(0, formato_1.formatoPrecio)(calcularPrecio(49.99, conPercepcion), "ARS")}`, inline: true }, { name: "6480 Cristales", value: `ARS ${(0, formato_1.formatoPrecio)(calcularPrecio(99.99, conPercepcion), "ARS")}`, inline: true });
        return embed;
    };
    const embedConPercepcion = crearEmbedGenshin(true);
    const row = new discord_js_2.ActionRowBuilder()
        .addComponents(new discord_js_2.ButtonBuilder()
        .setCustomId('conpercepcion_genshin')
        .setLabel("Con percepción")
        .setStyle(discord_js_2.ButtonStyle.Success), new discord_js_2.ButtonBuilder()
        .setCustomId('sinpercepcion_genshin')
        .setLabel("Sin percepción")
        .setStyle(discord_js_2.ButtonStyle.Primary));
    await interaction.editReply({ embeds: [embedConPercepcion], components: [row] });
    const collector = interaction.channel.createMessageComponentCollector({
        filter: i => ['conpercepcion_genshin', 'sinpercepcion_genshin'].includes(i.customId),
        time: 15000,
    });
    collector.on('collect', async (i) => {
        await i.deferUpdate();
        const conPercepcion = i.customId === 'conpercepcion_genshin';
        await i.editReply({ embeds: [crearEmbedGenshin(conPercepcion)], components: [row] });
    });
};
exports.default = GenshinImpact;
