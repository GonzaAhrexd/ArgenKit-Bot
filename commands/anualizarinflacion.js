const {SlashCommandBuilder} = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")
const impuestos = require("../functions/impuestos.js")
var currencyFormatter = require('currency-formatter') //Currency formatter
const { MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js');
const paginationEmbed = require('discordjs-button-pagination'); //Botones
module.exports = {
    data: new SlashCommandBuilder()
    .setName('anualizarinflacion')
    .setDescription('Calcula la inflación anual a partir de la mensual')
    .addNumberOption(option =>
              option.setName('mensual')
              .setDescription('Inflación mensual a anualizar  sin el símbolo de %.')
              .setRequired(true)   
    ),
    async run(client, interaction, options){
    let mes2 = interaction.options.getNumber('mensual')
    mes = mes2 / 100
    mes = mes + 1
    mes = Math.pow(mes, 12)
    mes = mes - 1
    mes = mes * 100


    const embed1 = new Discord.MessageEmbed()
      .setTitle("Inflación mensual anualizada")
      .setColor("#f82f40")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964701743504044072/loss.png")
      .addField("Inflación mensual", mes2.toFixed(2) + "%")
      .addField("Inflación anual ", mes.toFixed(2) + "%")


    return interaction.reply({ embeds: [embed1] });

  
    }
}
