const {SlashCommandBuilder} = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("donaciones")
    .setDescription("Muestra formas de apoyar al creador mediante donaciones."),

    async run(client, interaction){
        const embed = new Discord.MessageEmbed()
        .setTitle("DONACIONES")
        .setColor('GOLD')
        .setDescription("¡Si decidiste donarme te lo agradezco infinitamente! ¡Cada peso cuenta!")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/919022487377961040/piggy-bank.png")
        .addField("PAYPAL ", "http://paypal.me/GonzaAhre")
        .addField("LEMONCASH ", " LemonTag: $gonzaahre \n  CVU: 0000168300000008383352")
        .addField("UALA ", " Usuario: gonzajajaxd \n CVU: 0000007900204494414446 \n Código QR: ")
        .setImage("https://cdn.discordapp.com/attachments/802944543510495292/814641023870697482/codigo_qr.png")
      interaction.reply({
  
        embeds: [embed]
  
      })
    }

}