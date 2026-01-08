"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const formato_1 = require("../../functions/formato");
const bcraApi_1 = require("../../api/bcraApi");
const wait = require('node:timers/promises').setTimeout;
const Circulante = async (client, interaction) => {
    const circulanteData = await (0, bcraApi_1.getCirculanteData)();
    const embed = new discord_js_1.default.EmbedBuilder()
        .setTitle("Pesos Argentinos en circulación")
        .setDescription("La cantidad de pesos en circulación en la economía.")
        .setColor("#FAD56F")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1210375333761654834/cash-flow.png?ex=65ea54df&is=65d7dfdf&hm=575568c65381ec4dcf3bdf3ad50e08f9be26325e673951f0000c8996242838ea&")
        .addFields({ name: "Valor  :bank: ", value: `${(0, formato_1.formatoPrecio)(circulanteData.valor * 1000000, "ARS")} (${circulanteData.fecha})` });
    await wait(3000);
    await interaction.editReply({ embeds: [embed] });
};
exports.default = Circulante;
