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
        .setName("dados")
        .setDescription('Tira un dado'),
    run(client, interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            let a = Math.floor(Math.random() * 6 + 1);
            let Dado = [{
                    number: 1, img: 'https://cdn.discordapp.com/attachments/802944543510495292/921904012138258452/dado.png', emoji: "one"
                },
                { number: 2, img: 'https://cdn.discordapp.com/attachments/802944543510495292/921904011915952160/dado_1.png', emoji: "two" },
                { number: 3, img: 'https://cdn.discordapp.com/attachments/802944543510495292/921904011685294090/dado_2.png', emoji: "three" },
                { number: 4, img: 'https://cdn.discordapp.com/attachments/802944543510495292/921904286303133807/dado_5.png', emoji: "four" },
                { number: 5, img: 'https://cdn.discordapp.com/attachments/802944543510495292/921904011479769180/dado_3.png', emoji: "five" },
                { number: 6, img: 'https://cdn.discordapp.com/attachments/802944543510495292/921904011244871730/dado_4.png', emoji: "six" } //5
            ];
            Dado.forEach(Dado => {
                if (a == Dado.number) {
                    const embed = new Discord.MessageEmbed()
                        .setColor("#ffe082")
                        .setThumbnail(Dado.img)
                        .setDescription("Tirando dados...")
                        .addField("El dado cayó en... ", ` Número :${Dado.emoji}:`);
                    return interaction.reply({ embeds: [embed] });
                }
            });
        });
    }
};
