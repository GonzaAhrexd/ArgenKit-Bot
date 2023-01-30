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
// @ts-ignore
const { SlashCommandBuilder } = require("@discordjs/builders");
// @ts-ignore
const { MessageEmbed } = require("discord.js");
// @ts-ignore
const Discord = require("discord.js");
// @ts-ignore
const axios = require("axios");
module.exports = {
    data: new SlashCommandBuilder()
        .setName("api")
        .setDescription("Muestra las apis utilizadas por el bot"),
    run(client, interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const embed = new Discord.MessageEmbed()
                .setTitle("Apis utilizadas para la creación del bot")
                .setColor('#dfe5e8')
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/919016293481472021/navegador.png")
                .addField("Cotizaciones del dólar, euro, real", "https://github.com/guidospadavecchia/DolarBot-Api")
                .addField("Valores de coronavirus en Argentina y el mundo: ", "https://disease.sh/")
                .addField("Cotizaciones de otras divisas", "  https://exchangerate.host/#/")
                .addField("Cotizaciones de criptomonedas", "https://www.coingecko.com/es")
                .addField("Cotizaciones de criptomonedas", "https://criptoya.com/api")
                .addField("Cotizaciones de metales", "https://api.metals.live/");
            interaction.reply({
                embeds: [embed]
            });
        });
    }
};
