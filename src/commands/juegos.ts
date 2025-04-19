//Plantilla basica de un comando de discord.js para transacciones de videojuegos

import Discord from "discord.js"
import { embedError } from "../functions/embedError";

const wait = require('node:timers/promises').setTimeout

// Juegos
import Minecraft from './juegos/Minecraft'
import Roblox  from './juegos/Roblox'
import Fortnite from './juegos/Fortnite'
import leagueoflegends from "./juegos/LeagueOfLegends";
import GenshinImpact from "./juegos/GenshinImpact";
import ClashRoyale from "./juegos/ClashRoyale";
import ClashOfClans from "./juegos/ClashOfClans";
import CounterStrike from "./juegos/CounterStrike";
import BrawlStars from "./juegos/BrawlStars";
import FreeFire from './juegos/FreeFire'
import Valorant from "./juegos/Valorant";

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName("juegos")
        .setDescription("Muestra el precio de  microtransacciones de videojuegos")
        .addSubcommand(subcommand =>
            subcommand.setName('minecraft')
                .setDescription('Muestra el precio de microtransacciones de Minecraft')
        )
        .addSubcommand(subcommand =>
            subcommand.setName('roblox')
                .setDescription('Muestra el precio de microtransacciones de Roblox')
        )
        .addSubcommand(subcommand =>
            subcommand.setName('fortnite')
                .setDescription('Muestra el precio de microtransacciones de Fortnite')
        )
        .addSubcommand(subcommand =>
            subcommand.setName('leagueoflegends')
                .setDescription('Muestra el precio de microtransacciones de League of Legends')
        )
        .addSubcommand(subcommand =>
            subcommand.setName('valorant')
                .setDescription('Muestra el precio de microtransacciones de Valorant')
        ).addSubcommand(subcommand =>
            subcommand.setName('clashroyale')
                .setDescription('Muestra el precio de microtransacciones de Clash Royale')
        )
        .addSubcommand(subcommand =>
            subcommand.setName('clashofclans')
                .setDescription('Muestra el precio de microtransacciones de Clash of Clans')
        )
        .addSubcommand(subcommand =>
            subcommand.setName('freefire')
                .setDescription('Muestra el precio de microtransacciones de Free Fire')
        )
        .addSubcommand(subcommand =>
            subcommand.setName('brawlstars')
                .setDescription('Muestra el precio de microtransacciones de Brawl Stars')
        )
        .addSubcommand(subcommand =>
            subcommand.setName('genshinimpact')
                .setDescription('Muestra el precio de microtransacciones de Genshin Impact')
        )
        .addSubcommand(subcommand =>
            subcommand.setName('counterstrike')
                .setDescription('Muestra el precio de microtransacciones de Counter Strike 2')
        )
    ,
    async run(client, interaction) {

        const estructuraBasica = async (embed: any) =>{
            await interaction.deferReply();
            try{
             embed(client, interaction)
            }
             catch (error) {
                 embedError(interaction, error);
             }
         }
    
        // Minecraft
        if (interaction.options.getSubcommand() === 'minecraft') {
          estructuraBasica(Minecraft)
        }
        //Roblox
        if (interaction.options.getSubcommand() === 'roblox') {
          estructuraBasica(Roblox)
        }
        //Fortnite
        if (interaction.options.getSubcommand() === 'fortnite') {
           estructuraBasica(Fortnite)
        }
        //League of Legends
        if (interaction.options.getSubcommand() === 'leagueoflegends') {
           estructuraBasica(leagueoflegends)
        }
        //Genshin Impact
        if (interaction.options.getSubcommand() === 'genshinimpact') {
         estructuraBasica(GenshinImpact)
        }
        // Clash Royale
        if (interaction.options.getSubcommand() === 'clashroyale') {
           estructuraBasica(ClashRoyale)
        }
        // Clash of Clans
        if (interaction.options.getSubcommand() === 'clashofclans') {
            estructuraBasica(ClashOfClans)
        }
        //Counter Strike 2
        if (interaction.options.getSubcommand() === 'counterstrike') {
           estructuraBasica(CounterStrike)
        }
        // BrawlStars
        if (interaction.options.getSubcommand() === 'brawlstars') {
         estructuraBasica(BrawlStars)
        }
        // Valorant
        if (interaction.options.getSubcommand() === 'valorant') {
          estructuraBasica(Valorant)
        }
        // FreeFire
        if (interaction.options.getSubcommand() === 'freefire') {
            estructuraBasica(FreeFire)
        }

    }

}