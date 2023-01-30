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
const translate = require("translate"); //Translate
module.exports = {
    data: new SlashCommandBuilder()
        .setName('traducir')
        .setDescription('Traduce rápidamente de un idioma a otro')
        .addStringOption(option => option.setName('origen')
        .setDescription('Idioma del texto ingresado.')
        .setRequired(true)
        .addChoices({ name: 'Español', value: 'es' }, { name: 'Inglés', value: 'en' }, { name: 'Portugués', value: 'pt' }, { name: 'Francés', value: 'fr' }, { name: 'Italiano', value: 'it' }, { name: 'Alemán', value: 'de' }, { name: 'Japonés', value: 'ja' }))
        .addStringOption(option => option.setName('destino')
        .setDescription('Idioma al que se desea traducir.')
        .setRequired(true)
        .addChoices({ name: 'Español', value: 'es' }, { name: 'Inglés', value: 'en' }, { name: 'Portugués', value: 'pt' }, { name: 'Francés', value: 'fr' }, { name: 'Italiano', value: 'it' }, { name: 'Alemán', value: 'de' }, { name: 'Japonés', value: 'ja' }))
        .addStringOption(option => option.setName('texto')
        .setDescription('Texto a traducir.')
        .setRequired(true)),
    run(client, interaction, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let texto = yield interaction.options.getString('texto');
            let origen = yield interaction.options.getString('origen');
            let destino = yield interaction.options.getString('destino');
            let textoTraducido = yield translate(texto, { from: origen, to: destino });
            const embed1 = new Discord.MessageEmbed()
                .setTitle("Traducción")
                .setColor("#ff9e53")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1041196755670274058/translate.png")
                .addField("Texto Original", texto)
                .addField("Texto traducido", textoTraducido);
            return interaction.reply({ embeds: [embed1] });
        });
    }
};
