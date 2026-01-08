"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const Logaritmo = async (client, interaction) => {
    let base = interaction.options.getNumber('base');
    let numero = interaction.options.getNumber('numero');
    let resultado = Math.log(numero) / Math.log(base);
    const embed = new discord_js_1.default.EmbedBuilder()
        .setTitle("Calcular logaritmo")
        .setColor("#97E4F9")
        .setThumbnail('https://cdn.discordapp.com/attachments/802944543510495292/1181801184957300757/logarithm.png?ex=6582611f&is=656fec1f&hm=6158f0933a0f954db8abfae6376a603435c1ba931234923a62d8701d2f0b2b3f&')
        .addFields({ name: 'Logaritmo', value: `log${base}(${numero})` }, { name: 'Resultado', value: resultado.toString() });
    return await interaction.reply({ embeds: [embed] });
};
exports.default = Logaritmo;
