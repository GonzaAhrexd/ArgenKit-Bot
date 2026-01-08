"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const Simple = async (client, interaction) => {
    let calcular = interaction.options.getString('operacion');
    const embed = new discord_js_1.default.EmbedBuilder()
        .setTitle("Calcular operación")
        .setColor("#18f7ce")
        .setThumbnail('https://cdn.discordapp.com/attachments/802944543510495292/1071230926358581308/calculator.png')
        .addFields({ name: 'Operación', value: calcular }, { name: 'Resultado', value: (eval(calcular)).toString() });
    return await interaction.reply({ embeds: [embed] });
};
exports.default = Simple;
