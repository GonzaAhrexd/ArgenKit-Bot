"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const argentinaDatos_1 = require("../../api/argentinaDatos");
const wait = require('node:timers/promises').setTimeout;
const RiesgoPais = async (client, interaction) => {
    const riesgoPaisData = await (0, argentinaDatos_1.getRiesgoPaisData)();
    const embed = new discord_js_1.default.EmbedBuilder()
        .setTitle("Riesgo País")
        .setColor("#e6306c")
        .setDescription("El riesgo país es todo riesgo inherente a las inversiones y a las financiaciones en un país en contraste con otro.")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1177075689195835422/benchmarking.png?ex=65713029&is=655ebb29&hm=eb99e3c29ae5f5c67de55ede357d6e7501752bb2a5a08f577f4e4395fa6259ee&")
        .addFields({ name: "Valor :chart_with_upwards_trend: ", value: `${riesgoPaisData.ultimoDato} puntos ${riesgoPaisData.isCambioRiesgo} ${riesgoPaisData.porcentajeCambio}%` });
    await wait(3000);
    await interaction.editReply({ embeds: [embed] });
};
exports.default = RiesgoPais;
