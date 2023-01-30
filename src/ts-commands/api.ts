// @ts-ignore
const {SlashCommandBuilder} = require("@discordjs/builders")
// @ts-ignore
const { MessageEmbed } = require("discord.js")
// @ts-ignore
const Discord = require("discord.js")
// @ts-ignore
const axios = require("axios")
module.exports = {
    data: new SlashCommandBuilder()
    .setName("api")
    .setDescription("Muestra las apis utilizadas por el bot"),





    async run(client, interaction){
        


        const embed = new Discord.MessageEmbed()
        .setTitle("Apis utilizadas para la creación del bot")
        .setColor('#dfe5e8')
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/919016293481472021/navegador.png")
        .addField("Cotizaciones del dólar, euro, real", "https://github.com/guidospadavecchia/DolarBot-Api")
        .addField("Valores de coronavirus en Argentina y el mundo: ", "https://disease.sh/")
        .addField("Cotizaciones de otras divisas", "  https://exchangerate.host/#/")
        .addField("Cotizaciones de criptomonedas", "https://www.coingecko.com/es")
        .addField("Cotizaciones de criptomonedas", "https://criptoya.com/api")
        .addField("Cotizaciones de metales", "https://api.metals.live/")
      interaction.reply({
  
        embeds: [embed]
  
      })

      
    }

}