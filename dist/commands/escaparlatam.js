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
        .setName("escaparlatam")
        .setDescription("Muestra tus posibilidades de escapar de latinoamérica"),
    run(client, interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            let escaparLatam = porcentaje();
            const embed = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setDescription("Calculando...")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929069300000636958/escaparlatam.png")
                .addField("Tus probabilidades de escapar de latinoamérica son de: ", escaparLatam[0] + ' ' + escaparLatam[1] + '%');
            return interaction.reply({ embeds: [embed] });
        });
    }
};
