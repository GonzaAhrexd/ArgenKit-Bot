"use strict";
//Plantilla basica de un comando de discord.js para transacciones de videojuegos
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const embedError_1 = require("../functions/embedError");
const wait = require('node:timers/promises').setTimeout;
// Juegos
const Minecraft_1 = __importDefault(require("./juegos/Minecraft"));
const Roblox_1 = __importDefault(require("./juegos/Roblox"));
const Fortnite_1 = __importDefault(require("./juegos/Fortnite"));
const LeagueOfLegends_1 = __importDefault(require("./juegos/LeagueOfLegends"));
const GenshinImpact_1 = __importDefault(require("./juegos/GenshinImpact"));
const ClashRoyale_1 = __importDefault(require("./juegos/ClashRoyale"));
const ClashOfClans_1 = __importDefault(require("./juegos/ClashOfClans"));
const CounterStrike_1 = __importDefault(require("./juegos/CounterStrike"));
const BrawlStars_1 = __importDefault(require("./juegos/BrawlStars"));
const FreeFire_1 = __importDefault(require("./juegos/FreeFire"));
const Valorant_1 = __importDefault(require("./juegos/Valorant"));
module.exports = {
    data: new discord_js_1.default.SlashCommandBuilder()
        .setName("juegos")
        .setDescription("Muestra el precio de  microtransacciones de videojuegos")
        .addSubcommand(subcommand => subcommand.setName('minecraft')
        .setDescription('Muestra el precio de microtransacciones de Minecraft'))
        .addSubcommand(subcommand => subcommand.setName('roblox')
        .setDescription('Muestra el precio de microtransacciones de Roblox'))
        .addSubcommand(subcommand => subcommand.setName('fortnite')
        .setDescription('Muestra el precio de microtransacciones de Fortnite'))
        .addSubcommand(subcommand => subcommand.setName('leagueoflegends')
        .setDescription('Muestra el precio de microtransacciones de League of Legends'))
        .addSubcommand(subcommand => subcommand.setName('valorant')
        .setDescription('Muestra el precio de microtransacciones de Valorant')).addSubcommand(subcommand => subcommand.setName('clashroyale')
        .setDescription('Muestra el precio de microtransacciones de Clash Royale'))
        .addSubcommand(subcommand => subcommand.setName('clashofclans')
        .setDescription('Muestra el precio de microtransacciones de Clash of Clans'))
        .addSubcommand(subcommand => subcommand.setName('freefire')
        .setDescription('Muestra el precio de microtransacciones de Free Fire'))
        .addSubcommand(subcommand => subcommand.setName('brawlstars')
        .setDescription('Muestra el precio de microtransacciones de Brawl Stars'))
        .addSubcommand(subcommand => subcommand.setName('genshinimpact')
        .setDescription('Muestra el precio de microtransacciones de Genshin Impact'))
        .addSubcommand(subcommand => subcommand.setName('counterstrike')
        .setDescription('Muestra el precio de microtransacciones de Counter Strike 2')),
    async run(client, interaction) {
        const estructuraBasica = async (embed) => {
            await interaction.deferReply();
            try {
                embed(client, interaction);
            }
            catch (error) {
                (0, embedError_1.embedError)(interaction, error);
            }
        };
        // Minecraft
        if (interaction.options.getSubcommand() === 'minecraft') {
            estructuraBasica(Minecraft_1.default);
        }
        //Roblox
        if (interaction.options.getSubcommand() === 'roblox') {
            estructuraBasica(Roblox_1.default);
        }
        //Fortnite
        if (interaction.options.getSubcommand() === 'fortnite') {
            estructuraBasica(Fortnite_1.default);
        }
        //League of Legends
        if (interaction.options.getSubcommand() === 'leagueoflegends') {
            estructuraBasica(LeagueOfLegends_1.default);
        }
        //Genshin Impact
        if (interaction.options.getSubcommand() === 'genshinimpact') {
            estructuraBasica(GenshinImpact_1.default);
        }
        // Clash Royale
        if (interaction.options.getSubcommand() === 'clashroyale') {
            estructuraBasica(ClashRoyale_1.default);
        }
        // Clash of Clans
        if (interaction.options.getSubcommand() === 'clashofclans') {
            estructuraBasica(ClashOfClans_1.default);
        }
        //Counter Strike 2
        if (interaction.options.getSubcommand() === 'counterstrike') {
            estructuraBasica(CounterStrike_1.default);
        }
        // BrawlStars
        if (interaction.options.getSubcommand() === 'brawlstars') {
            estructuraBasica(BrawlStars_1.default);
        }
        // Valorant
        if (interaction.options.getSubcommand() === 'valorant') {
            estructuraBasica(Valorant_1.default);
        }
        // FreeFire
        if (interaction.options.getSubcommand() === 'freefire') {
            estructuraBasica(FreeFire_1.default);
        }
    }
};
