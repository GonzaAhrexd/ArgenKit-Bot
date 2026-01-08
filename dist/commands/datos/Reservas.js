"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const formato_1 = require("../../functions/formato");
const bcraApi_1 = require("../../api/bcraApi");
const wait = require('node:timers/promises').setTimeout;
const Reservas = async (client, interaction) => {
    const reservasData = await (0, bcraApi_1.getReservasData)();
    const embed = new discord_js_1.default.EmbedBuilder()
        .setTitle("Reservas del Banco Central de la República Argentina")
        .setColor("#9bcef7")
        .setDescription("Las reservas constituyen el componente más importante de los activos del Banco Central y se utilizan para financiar los pagos al exterior o para intervenir en el mercado cambiario.")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903122250708963358/bank.png")
        .addFields({ name: "Valor  :bank: ", value: (0, formato_1.formatoPrecio)(reservasData.valor * 1000000, "USD") + ` (${reservasData.fecha})` });
    await wait(3000);
    await interaction.editReply({ embeds: [embed] });
};
exports.default = Reservas;
