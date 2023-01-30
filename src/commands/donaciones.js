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
        .setName("donaciones")
        .setDescription("Muestra formas de apoyar al creador mediante donaciones."),
    run(client, interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const embed = new Discord.MessageEmbed()
                .setTitle("DONACIONES")
                .setColor('GOLD')
                .setDescription("¡Si decidiste donarme te lo agradezco infinitamente! ¡Cada peso cuenta!")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/919022487377961040/piggy-bank.png")
                .addField("PAYPAL ", "http://paypal.me/GonzaAhre")
                .addField("LEMONCASH ", " LemonTag: $gonzaahre \n  CVU: 0000168300000008383352 \n Alias: gonzaahre.LEMON");
            interaction.reply({
                embeds: [embed]
            });
        });
    }
};
