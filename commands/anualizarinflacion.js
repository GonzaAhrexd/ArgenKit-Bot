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
module.exports = {
    data: new SlashCommandBuilder()
        .setName('anualizarinflacion')
        .setDescription('Calcula la inflación anual a partir de la mensual')
        .addNumberOption(option => option.setName('mensual')
        .setDescription('Inflación mensual a anualizar  sin el símbolo de %.')
        .setRequired(true)),
    run(client, interaction, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let mes = (((interaction.options.getNumber('mensual') / 100) + 1) ** 12 - 1) * 100;
            const embed1 = new Discord.MessageEmbed()
                .setTitle("Inflación mensual anualizada")
                .setColor("#f82f40")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964701743504044072/loss.png")
                .addField("Inflación anual", mes.toFixed(2) + "%");
            return interaction.reply({ embeds: [embed1] });
        });
    }
};
