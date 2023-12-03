//Plantilla basica de un comando de discord.js para transacciones de videojuegos

import axios from "axios";
import Discord from "discord.js"
import { ActionRowBuilder, ButtonBuilder, StringSelectMenuBuilder } from 'discord.js'
import { ComponentType } from 'discord.js'

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
                .setDescription('Muestra el precio de microtransacciones de Gensin Impact')
        )
        .addSubcommand(subcommand =>
            subcommand.setName('gta')
                .setDescription('Muestra el precio de microtransacciones de Grand theft Auto V')
        ),
    async run(client, interaction) {
        if (interaction.options.getSubcommand() === 'minecraft') {

            try {
                const [oficial] = await Promise.all([
                    axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/oficial'),
                ]);

            const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
            .setTitle("Minecraft")
            .setURL("https://www.minecraft.net/es-es/")
            .setDescription("Los precios de Minecraft en Argentina son los siguientes:")
            .setColor("#00ff00")
            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903103605313351936/Minecraft.png") 

            } catch (error) {
                console.log(error);

                const errorEmbed = new Discord.EmbedBuilder()
                    .setColor("#ff0000")
                    .setTitle("Error")
                    .setDescription("Ha ocurrido un error al obtener los datos del API. Por favor, inténtalo de nuevo más tarde.");

                interaction.reply({ embeds: [errorEmbed] });
            }
        }
    }
}