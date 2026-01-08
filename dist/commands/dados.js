"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const { generarRandom } = require('../functions/numeroRandom');
const dado_valores_1 = __importDefault(require("../variables/dado-valores"));
module.exports = {
    data: new discord_js_1.default.SlashCommandBuilder()
        .setName("dados")
        .setDescription('Tira un dado'),
    async run(client, interaction) {
        let numeroRandom = generarRandom(1, 7);
        dado_valores_1.default.forEach(async (Dado) => {
            if (numeroRandom == Dado.number) {
                const embed = new discord_js_1.default.EmbedBuilder()
                    .setColor("#F7F5FB")
                    .setThumbnail(Dado.img)
                    .setDescription("Tirando dados...")
                    .addFields({ name: "El dado cayó en...  ", value: ` Número :${Dado.emoji}:` });
                return await interaction.reply({ embeds: [embed] });
            }
        });
    }
};
