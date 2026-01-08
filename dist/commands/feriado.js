"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const axios_1 = __importDefault(require("axios"));
const { diasHasta } = require('../functions/diasHasta');
const wait = require('node:timers/promises').setTimeout;
module.exports = {
    data: new discord_js_1.default.SlashCommandBuilder()
        .setName("feriado")
        .setDescription("Muestra cuántos días faltan para el siguiente feriado en Argentina"),
    async run(client, interaction) {
        await interaction.deferReply();
        try {
            const [feriados] = await Promise.all([
                axios_1.default.get('https://api.argentinadatos.com/v1/feriados/2025')
            ]);
            const today = new Date();
            // Busca el próximo feriado más cercano a la fecha actual
            const proximoFeriado = feriados.data.find(feriado => new Date(feriado['fecha']) > today);
            console.log(proximoFeriado);
            const embed = new discord_js_1.default.EmbedBuilder()
                .setTitle("Días hasta el siguiente feriado")
                .setColor("#bfff00")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1297913530036785225/vacaciones.png?ex=6717a7ab&is=6716562b&hm=e9eb6ddf3753075e130547849e651388f985c8a55de45e3bdda205477c99bd1c&")
                .addFields({ name: `${proximoFeriado['nombre']} (${proximoFeriado['tipo'].charAt(0).toUpperCase() + proximoFeriado['tipo'].slice(1)})`, value: `Faltan ${diasHasta(new Date(proximoFeriado['fecha']))} días para el próximo feriado` });
            await wait(3000);
            await interaction.editReply({ embeds: [embed] });
        }
        catch (error) {
            console.log(error);
            return interaction.reply("No se pudo obtener la información");
        }
    }
};
