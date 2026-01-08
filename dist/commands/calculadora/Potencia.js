"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const Potencia = async (client, interaction) => {
    let base = interaction.options.getNumber('base');
    let exponente = interaction.options.getNumber('exponente');
    let resultado = Math.pow(base, exponente);
    const embed = new discord_js_1.default.EmbedBuilder()
        .setTitle("Calcular potencia")
        .setColor("#FF801F")
        .setThumbnail('https://cdn.discordapp.com/attachments/802944543510495292/1181801185427075152/power_1.png?ex=6582611f&is=656fec1f&hm=8d103dcea6e8333d5b48c7bb773eb54409e6b2ee4afcf405b12ffd7300a4ce2d&')
        .addFields({ name: 'Potencia', value: `${base}^${exponente}` }, { name: 'Resultado', value: resultado.toString() });
    return await interaction.reply({ embeds: [embed] });
};
exports.default = Potencia;
