"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const ConvertirBase = async (client, interaction) => {
    let numero = interaction.options.getNumber('numero');
    let basedelnumero = interaction.options.getNumber('basedelnumero');
    let baseaconvertir = interaction.options.getNumber('baseaconvertir');
    let resultado = parseInt(numero.toString(), basedelnumero).toString(baseaconvertir);
    const embed = new discord_js_1.default.EmbedBuilder()
        .setTitle("Convertir base")
        .setColor("#02E885")
        .setThumbnail('https://cdn.discordapp.com/attachments/802944543510495292/1181801184705654845/binary-code.png?ex=6582611f&is=656fec1f&hm=7664f5b2998b3a1f95696c2899b74368f3dc76e5d2b09ad5782dd5a9d0c6afd6&')
        .addFields({ name: 'Número', value: `${numero} base ${basedelnumero}` }, { name: 'Resultado', value: resultado.toString() });
    return await interaction.reply({ embeds: [embed] });
};
exports.default = ConvertirBase;
