const {SlashCommandBuilder} = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("api")
    .setDescription("Muestra las apis utilizadas por el bot"),

    async run(client, interaction){
        const embed = new Discord.MessageEmbed()
        .setTitle("Apis utilizadas para la creación del bot")
        .setColor('#dfe5e8')
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/919016293481472021/navegador.png")
        .addField("Cotizaciones del dólar, euro, real", "https://github.com/Castrogiovanni20/api-dolar-argentina")
        .addField("Valores de coronavirus en Argentina y el mundo: ", "https://disease.sh/")
        .addField("Cotizaciones de otras divisas", "  https://exchangerate.host/#/")
        .addField("Cotizaciones de criptomonedas", "https://www.coingecko.com/es")
        .addField("Cotizaciones de criptomonedas", "https://criptoya.com/api")
      interaction.reply({
  
        embeds: [embed]
  
      })
    }

}