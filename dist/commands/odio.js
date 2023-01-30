"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        .setName('odio')
        .setDescription('Calcula el impuesto a compras online del 74% o 75%')
        .addSubcommand(subcommand => subcommand.setName('argentina')
        .setDescription('Muestra tu nivel de odio o bronca a Argentina'))
        .addSubcommand(subcommand => subcommand.setName('latinoamerica')
        .setDescription('Muestra tu nivel de odio o bronca a Latinoamérica')),
    run(client, interaction, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (interaction.options.getSubcommand() === 'argentina') {
                let odioArg = porcentaje();
                const embed = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setDescription("Calculando...")
                    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929069300290027550/odioarg.png")
                    .addField("Tu odio hacía Argentina es del: ", odioArg[0] + ' ' + odioArg[1] + '%');
                return interaction.reply({ embeds: [embed] });
            }
            //LATAM
            if (interaction.options.getSubcommand() === 'latinoamerica') {
                let odioLatam = porcentaje();
                const embed = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setDescription("Calculando...")
                    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929069300512329768/odiolatam.png")
                    .addField("Tu odio hacía Latinoamérica es del: ", odioLatam[0] + ' ' + odioLatam[1] + '%');
                return interaction.reply({ embeds: [embed] });
            }
        });
    }
};
