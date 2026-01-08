"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const { total21 } = require('../../functions/impuestos');
const formato_1 = require("../../functions/formato");
const wait = require('node:timers/promises').setTimeout;
const Divisas_1 = require("../../api/Divisas");
const CounterStrike = async (client, interaction) => {
    const valorDolar = (await (0, Divisas_1.getDolar)()).oficial.value_sell;
    const valorConPercepcion = (usd) => total21(valorDolar * usd);
    const valorSinPercepcion = (usd) => valorDolar * usd;
    const crearEmbed = (conPercepcion) => {
        const precio = (usd) => conPercepcion ? valorConPercepcion(usd) : valorSinPercepcion(usd);
        return new discord_js_1.default.EmbedBuilder()
            .setTitle("Counter Strike 2")
            .setURL("https://www.counter-strike.net/")
            .setDescription("Los precios en Counter Strike 2 en Argentina son los siguientes:")
            .setColor("#FBAC18")
            .setThumbnail("https://static.wikia.nocookie.net/logopedia/images/4/49/Counter-Strike_2_%28Icon%29.png/revision/latest/scale-to-width-down/150?cb=20230330015359")
            .addFields({ name: "Counter Strike 2 Status Prime", value: `ARS ${(0, formato_1.formatoPrecio)(precio(14.99), "ARS")}`, inline: true }, { name: "Llaves para abrir cajas", value: `ARS ${(0, formato_1.formatoPrecio)(precio(2.49), "ARS")}`, inline: true });
    };
    const crearBotones = () => {
        return new discord_js_1.default.ActionRowBuilder().addComponents(new discord_js_1.default.ButtonBuilder()
            .setCustomId('conpercepcion_cs')
            .setLabel('Mostrar con IVA')
            .setStyle(discord_js_1.default.ButtonStyle.Primary), new discord_js_1.default.ButtonBuilder()
            .setCustomId('sinpercepcion_cs')
            .setLabel('Mostrar sin IVA')
            .setStyle(discord_js_1.default.ButtonStyle.Success) // Estilo verde para "sin percepción"
        );
    };
    await wait(1000);
    await interaction.editReply({
        embeds: [crearEmbed(true)],
        components: [crearBotones()]
    });
    const collector = interaction.channel.createMessageComponentCollector({
        filter: i => i.user.id === interaction.user.id,
        time: 60000
    });
    collector.on('collect', async (i) => {
        const conPercepcion = i.customId === 'conpercepcion_cs';
        await i.update({
            embeds: [crearEmbed(conPercepcion)],
            components: [crearBotones()]
        });
    });
};
exports.default = CounterStrike;
