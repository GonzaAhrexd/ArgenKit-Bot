"use strict";
//@ts-ignore
const { SlashCommandBuilder } = require("@discordjs/builders");
//@ts-ignore
const { MessageEmbed } = require("discord.js");
//@ts-ignore
const Discord = require("discord.js");
//@ts-ignore
const { MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js');
//@ts-ignore
const paginationEmbed = require('discordjs-button-pagination'); //Botones
//@ts-ignore
const { diasHasta } = require('../functions/diasHasta');
module.exports = {
    data: new SlashCommandBuilder()
        .setName("futbol")
        .setDescription("Muestra cuántos días faltan para  los siguientes partidos de la selección"),
    async run(client, interaction) {
        // .addField("  :flag_ar: vs :flag_pl: \n(30/11/2022) ", "Faltan " + diasHasta(new Date("2023-11-30")) + " días ", true)
        const embed = new Discord.MessageEmbed()
            .setTitle("¡ ARGENTINA CAMPEÓN DEL MUNDO!")
            .setColor("#7eb2fa")
            .setDescription("Tiempo hasta los siguientes partidos de la selección Argentina")
            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929121012275093524/camiseta-de-futbol.png")
            .addField("  :flag_ar: vs :flag_sa: \n(22/11/2022) ", "Resultado: \n :flag_ar: 1 - 2 :flag_sa: ", true)
            .addField("  :flag_ar: vs :flag_mx: \n(26/11/2022) ", "Resultado: \n :flag_ar: 2 - 0 :flag_mx: ", true)
            .addField("  :flag_ar: vs :flag_pl: \n(30/11/2022) ", "Resultado: \n :flag_ar: 2 - 0 :flag_pl: ", true)
            .addField("  :flag_ar: vs :flag_au: \n(03/12/2022) ", "Resultado: \n :flag_ar: 2 - 1 :flag_au: ", true)
            .addField("  :flag_ar: vs :flag_nl: \n(09/12/2022) ", "Resultado: \n :flag_ar: 2 (4) - 2 (3) :flag_nl: ", true)
            .addField("  :flag_ar: vs :flag_hr: \n(13/12/2022) ", "Resultado: \n :flag_ar: 3 - 0 :flag_hr:  ", true)
            .addField("  :flag_ar: vs :flag_fr: \n(18/12/2022) ", "Resultado  \n :flag_ar: 3 (4) - 3 (2) :flag_fr: ", true);
        return interaction.reply({ embeds: [embed] });
    }
};
