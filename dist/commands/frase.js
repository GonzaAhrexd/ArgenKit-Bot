"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const { generarRandom } = require("../functions/numeroRandom");
const frase_valores_1 = __importDefault(require("../variables/frase-valores"));
module.exports = {
    data: new discord_js_1.default.SlashCommandBuilder()
        .setName("frase")
        .setDescription("Muestra una frase de un argentino de manera aleatoria"),
    async run(client, interaction) {
        let numeroAleatorio = generarRandom(1, 32);
        frase_valores_1.default.forEach(frase => {
            if (frase.id == numeroAleatorio) {
                const embed = new discord_js_1.default.EmbedBuilder()
                    .setTitle("Frase aleatoria")
                    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1181312199189348402/businessman.png?ex=658099b8&is=656e24b8&hm=9ba43bdc6c82bacb913a63a23348c9c793afe78c3d116fb5b0b8b03b526f479c&")
                    .setColor('#385E7F')
                    .setDescription('"' + frase.frase + '"')
                    .setFooter({ text: "-" + frase.autor });
                interaction.reply({ embeds: [embed] });
            }
        });
    }
};
