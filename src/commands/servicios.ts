
import Discord from "discord.js"
import axios from "axios"
import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js'
const { total30, total51, total21 } = require("../functions/impuestos"); //Impuestos
const { formatoPrecio } = require('../functions/formato')
import { embedError } from "../functions/embedError"
import youtube from "./servicios/YouTube";
import netflix from "./servicios/Netflix";
import spotify from "./servicios/Spotify";
import crunchyroll from "./servicios/Crunchyroll";
import disney from "./servicios/Disney";
import gamepass from "./servicios/GamePass";
import primevideo from "./servicios/Primevideo";
import appletv from "./servicios/AppleTV";
import max from "./servicios/Max";
import paramount from "./servicios/Paramount";
import nitro from "./servicios/DiscordNitro";
import googleone from "./servicios/GoogleOne";
import ea from "./servicios/EA";
import steam from "./servicios/Steam";
import discordnitro from "./servicios/DiscordNitro";
import twitch from "./servicios/Twitch";

module.exports = {
  data: new Discord.SlashCommandBuilder()
    .setName('servicio')
    .setDescription('Mostrar el precio de un servicio de Streaming')
    .addSubcommand(subcommand =>
      subcommand.setName('netflix')
        .setDescription('Muestra el precio de Netflix + impuestos')
    )
    .addSubcommand(subcommand =>
      subcommand.setName('youtube')
        .setDescription('Muestra el precio de YouTube + impuestos')
    )
    .addSubcommand(subcommand =>
      subcommand.setName('spotify')
        .setDescription('Muestra el precio de Spotify + impuestos')
    )
    .addSubcommand(subcommand =>
      subcommand.setName('crunchyroll')
        .setDescription('Muestra el precio de Crunchyroll + impuestos')
    )
    .addSubcommand(subcommand =>
      subcommand.setName('disney')
        .setDescription('Muestra el precio de Disney+ + impuestos')
    )
    .addSubcommand(subcommand =>
      subcommand.setName('xboxgamepass')
        .setDescription('Muestra el precio de Xbox GamePass + impuestos')
    )
    .addSubcommand(subcommand =>
      subcommand.setName('primevideo')
        .setDescription('Muestra el precio de Prime Video + impuestos')
    )
    .addSubcommand(subcommand =>
      subcommand.setName('appletv')
        .setDescription('Muestra el precio de Apple TV + impuestos')
    )
    .addSubcommand(subcommand =>
      subcommand.setName('max')
        .setDescription('Muestra el precio de MAX + impuestos')
    )
    .addSubcommand(subcommand =>
      subcommand.setName('discordnitro')
        .setDescription('Muestra el precio de Discord Nitro + impuestos')
    )
    .addSubcommand(subcommand =>
      subcommand.setName('googleone')
        .setDescription('Muestra el precio de Google One + impuestos')
    )
    .addSubcommand(subcommand =>
      subcommand.setName('ea')
        .setDescription('Muestra el precio de EA + impuestos')
    )
    .addSubcommand(subcommand =>
      subcommand.setName('steam')
        .setDescription('Muestra el precio de Steam + impuestos')
    )
    .addSubcommand(subcommand =>
      subcommand.setName('paramount')
        .setDescription('Muestra el precio de Paramount + impuestos')
    )
    .addSubcommand(subcommand =>
      subcommand.setName('twitch')
        .setDescription('Muestra el precio de Twitch + impuestos')
    ),
  async run(client, interaction, options) {


    const estructuraBasica = async (funcion: any) => {

      await interaction.deferReply()
      try {
        funcion(client, interaction)
      }
      catch (error) {
        embedError(interaction, error)
      }
    }


    // Netflix
    if (interaction.options.getSubcommand() === 'netflix') {
      netflix(client, interaction)
    }
    // YouTube
    if (interaction.options.getSubcommand() === 'youtube') {
      youtube(client, interaction)
    }
    // Spotify
    if (interaction.options.getSubcommand() === 'spotify') {
      spotify(client, interaction)
    }
    // Crunchyroll
    if (interaction.options.getSubcommand() === 'crunchyroll') {
      crunchyroll(client, interaction)
    }
    // Disney
    if (interaction.options.getSubcommand() === 'disney') {
      disney(client, interaction)
    }
    // Xbox
    if (interaction.options.getSubcommand() === 'xboxgamepass') {
      gamepass(client, interaction)
    }
    //Prime Video
    if (interaction.options.getSubcommand() === 'primevideo') {
      primevideo(client, interaction)
    }
    //AppleTV
    if (interaction.options.getSubcommand() === 'appletv') {
      estructuraBasica(appletv)
    }
    //HBO Max
    if (interaction.options.getSubcommand() === 'hbomax') {
      max(client, interaction)
    }
    //Nitro
    if (interaction.options.getSubcommand() === 'discordnitro') {
      estructuraBasica(discordnitro)
    }
    //Google One
    if (interaction.options.getSubcommand() === 'googleone') {
      estructuraBasica(googleone)
    }
    //EA
    if (interaction.options.getSubcommand() === 'ea') {
      estructuraBasica(ea)
    }
    //Steam
    if (interaction.options.getSubcommand() === 'steam') {
      estructuraBasica(steam)
    }
    //Paramount
    if (interaction.options.getSubcommand() === 'paramount') {
      paramount(client, interaction)
    }
    //Twitch
    if (interaction.options.getSubcommand() === 'twitch') {
      estructuraBasica(twitch)


    }
  }

}
