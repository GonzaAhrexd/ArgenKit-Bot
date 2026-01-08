"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const embedError_1 = require("../functions/embedError");
const YouTube_1 = __importDefault(require("./servicios/YouTube"));
const Netflix_1 = __importDefault(require("./servicios/Netflix"));
const Spotify_1 = __importDefault(require("./servicios/Spotify"));
const Crunchyroll_1 = __importDefault(require("./servicios/Crunchyroll"));
const Disney_1 = __importDefault(require("./servicios/Disney"));
const GamePass_1 = __importDefault(require("./servicios/GamePass"));
const Primevideo_1 = __importDefault(require("./servicios/Primevideo"));
const AppleTV_1 = __importDefault(require("./servicios/AppleTV"));
const Max_1 = __importDefault(require("./servicios/Max"));
const Paramount_1 = __importDefault(require("./servicios/Paramount"));
const GoogleOne_1 = __importDefault(require("./servicios/GoogleOne"));
const EA_1 = __importDefault(require("./servicios/EA"));
const Steam_1 = __importDefault(require("./servicios/Steam"));
const DiscordNitro_1 = __importDefault(require("./servicios/DiscordNitro"));
const Twitch_1 = __importDefault(require("./servicios/Twitch"));
module.exports = {
    data: new discord_js_1.default.SlashCommandBuilder()
        .setName('servicio')
        .setDescription('Mostrar el precio de un servicio de Streaming')
        .addSubcommand(subcommand => subcommand.setName('netflix')
        .setDescription('Muestra el precio de Netflix + impuestos'))
        .addSubcommand(subcommand => subcommand.setName('youtube')
        .setDescription('Muestra el precio de YouTube + impuestos'))
        .addSubcommand(subcommand => subcommand.setName('spotify')
        .setDescription('Muestra el precio de Spotify + impuestos'))
        .addSubcommand(subcommand => subcommand.setName('crunchyroll')
        .setDescription('Muestra el precio de Crunchyroll + impuestos'))
        .addSubcommand(subcommand => subcommand.setName('disney')
        .setDescription('Muestra el precio de Disney+ + impuestos'))
        .addSubcommand(subcommand => subcommand.setName('xboxgamepass')
        .setDescription('Muestra el precio de Xbox GamePass + impuestos'))
        .addSubcommand(subcommand => subcommand.setName('primevideo')
        .setDescription('Muestra el precio de Prime Video + impuestos'))
        .addSubcommand(subcommand => subcommand.setName('appletv')
        .setDescription('Muestra el precio de Apple TV + impuestos'))
        .addSubcommand(subcommand => subcommand.setName('max')
        .setDescription('Muestra el precio de MAX + impuestos'))
        .addSubcommand(subcommand => subcommand.setName('discordnitro')
        .setDescription('Muestra el precio de Discord Nitro + impuestos'))
        .addSubcommand(subcommand => subcommand.setName('googleone')
        .setDescription('Muestra el precio de Google One + impuestos'))
        .addSubcommand(subcommand => subcommand.setName('ea')
        .setDescription('Muestra el precio de EA + impuestos'))
        .addSubcommand(subcommand => subcommand.setName('steam')
        .setDescription('Muestra el precio de Steam + impuestos'))
        .addSubcommand(subcommand => subcommand.setName('paramount')
        .setDescription('Muestra el precio de Paramount + impuestos'))
        .addSubcommand(subcommand => subcommand.setName('twitch')
        .setDescription('Muestra el precio de Twitch + impuestos')),
    async run(client, interaction, options) {
        const estructuraBasica = async (funcion) => {
            await interaction.deferReply();
            try {
                funcion(client, interaction);
            }
            catch (error) {
                (0, embedError_1.embedError)(interaction, error);
            }
        };
        // Netflix
        if (interaction.options.getSubcommand() === 'netflix') {
            estructuraBasica(Netflix_1.default);
        }
        // YouTube
        if (interaction.options.getSubcommand() === 'youtube') {
            estructuraBasica(YouTube_1.default);
        }
        // Spotify
        if (interaction.options.getSubcommand() === 'spotify') {
            estructuraBasica(Spotify_1.default);
        }
        // Crunchyroll
        if (interaction.options.getSubcommand() === 'crunchyroll') {
            (0, Crunchyroll_1.default)(client, interaction);
        }
        // Disney
        if (interaction.options.getSubcommand() === 'disney') {
            (0, Disney_1.default)(client, interaction);
        }
        // Xbox
        if (interaction.options.getSubcommand() === 'xboxgamepass') {
            (0, GamePass_1.default)(client, interaction);
        }
        //Prime Video
        if (interaction.options.getSubcommand() === 'primevideo') {
            (0, Primevideo_1.default)(client, interaction);
        }
        //AppleTV
        if (interaction.options.getSubcommand() === 'appletv') {
            estructuraBasica(AppleTV_1.default);
        }
        //HBO Max
        if (interaction.options.getSubcommand() === 'max') {
            estructuraBasica(Max_1.default);
        }
        //Nitro
        if (interaction.options.getSubcommand() === 'discordnitro') {
            estructuraBasica(DiscordNitro_1.default);
        }
        //Google One
        if (interaction.options.getSubcommand() === 'googleone') {
            estructuraBasica(GoogleOne_1.default);
        }
        //EA
        if (interaction.options.getSubcommand() === 'ea') {
            estructuraBasica(EA_1.default);
        }
        //Steam
        if (interaction.options.getSubcommand() === 'steam') {
            estructuraBasica(Steam_1.default);
        }
        //Paramount
        if (interaction.options.getSubcommand() === 'paramount') {
            (0, Paramount_1.default)(client, interaction);
        }
        //Twitch
        if (interaction.options.getSubcommand() === 'twitch') {
            estructuraBasica(Twitch_1.default);
        }
    }
};
