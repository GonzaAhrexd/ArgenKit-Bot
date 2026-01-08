"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const Raiz = async (client, interaction) => {
    let indice = interaction.options.getNumber('indice');
    let radicando = interaction.options.getNumber('radicando');
    let resultado = Math.pow(radicando, 1 / indice);
    const embed = new discord_js_1.default.EmbedBuilder()
        .setTitle("Calcular raíz")
        .setColor("#F77E65")
        .setThumbnail('https://cdn.discordapp.com/attachments/802944543510495292/1181801185171226644/square-root_1.png?ex=6582611f&is=656fec1f&hm=9cef6afd7501112ba7f4fe16bff7e76c5bd3d5afb3746e1698970feaa810fd6d&')
        .addFields({ name: 'Raíz', value: `${indice}√${radicando}` }, { name: 'Resultado', value: resultado.toString() });
    return await interaction.reply({ embeds: [embed] });
};
exports.default = Raiz;
