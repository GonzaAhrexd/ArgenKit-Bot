const {SlashCommandBuilder} = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("invitar")
    .setDescription("Invita al bot a unirte a tu servidor"),

    async run(client, interaction){

        const embed = new Discord.MessageEmbed()
        .setTitle("¡Invita al bot a tu servidor!")
        .setColor('#0a9ee1')
        .setURL("https://discord.com/api/oauth2/authorize?client_id=796173877981216799&permissions=414464867392&scope=bot%20applications.commands")
        .setDescription("¡Gracias por decidir agregar mi bot a tu servidor!")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/811043646848630786/argboticon-03.png")
      interaction.reply({
  
        embeds: [embed]
  
      })
    }

}