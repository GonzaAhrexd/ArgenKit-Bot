"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.embedError = void 0;
const discord_js_1 = __importDefault(require("discord.js"));
function embedError(interaction, error) {
    console.log(error);
    const errorEmbed = new discord_js_1.default.EmbedBuilder()
        .setColor("#ff0000")
        .setTitle("Error")
        .setDescription("Ha ocurrido un error al obtener los datos del API. Por favor, inténtalo de nuevo más tarde.");
    interaction.editReply({ embeds: [errorEmbed] });
}
exports.embedError = embedError;
