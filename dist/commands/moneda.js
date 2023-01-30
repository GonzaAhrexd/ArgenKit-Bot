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
module.exports = {
    data: new SlashCommandBuilder()
        .setName("moneda")
        .setDescription('Tira una moneda'),
    run(client, interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            let a = Math.floor(Math.random() * 2 + 1);
            if (a == 1) {
                const embed = new Discord.MessageEmbed()
                    .setColor("#27C5F5")
                    .setDescription("Tirando...")
                    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/805139900768190484/bancario_1.png")
                    .addField("LA MONEDA QUEDÓ EN: ", " **SOL** :sun_with_face: ");
                return interaction.reply({ embeds: [embed] });
            }
            if (a == 2) {
                const embed = new Discord.MessageEmbed()
                    .setColor("#FCFBFB")
                    .setDescription("Tirando...")
                    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/805139082417799168/BancarioEscudo.png")
                    .addField("LA MONEDA QUEDÓ EN: ", " **ESCUDO** :shield:");
                return interaction.reply({ embeds: [embed] });
            }
        });
    }
};
