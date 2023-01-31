"use strict";
//@ts-ignore
const { SlashCommandBuilder } = require("@discordjs/builders");
//@ts-ignore
const { MessageEmbed } = require("discord.js");
//@ts-ignore
const Discord = require("discord.js");
//@ts-ignore
const { porcentaje } = require("../functions/funPorcentaje");
module.exports = {
    data: new SlashCommandBuilder()
        .setName("escaparlatam")
        .setDescription("Muestra tus posibilidades de escapar de latinoamérica"),
    async run(client, interaction) {
        let escaparLatam = porcentaje();
        const embed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setDescription("Calculando...")
            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929069300000636958/escaparlatam.png")
            .addField("Tus probabilidades de escapar de latinoamérica son de: ", escaparLatam[0] + ' ' + escaparLatam[1] + '%');
        return interaction.reply({ embeds: [embed] });
    }
};
