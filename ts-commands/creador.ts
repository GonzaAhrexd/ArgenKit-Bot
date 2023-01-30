//@ts-ignore
const {SlashCommandBuilder} = require("@discordjs/builders")
//@ts-ignore
const { MessageEmbed } = require("discord.js")
//@ts-ignore
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("creador")
    .setDescription("Muestra información del creador del bot."),

    async run(client, interaction){
        const embed = new MessageEmbed()
      .setTitle("El creador del Bot es Gonzalo Ebel")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/919017432591507537/coding.png")
      .setDescription("Estas son mis redes sociales, podés darme sugerencias o ideas por Twitter o en el servidor oficial del bot!")
      .setColor('#dfe5e8')
      .addField("YouTube <:yt:919017871886123120> ", "https://www.youtube.com/c/GonzaAhrexd")
      .addField("Twitch  <:twitch:919018371134140466> ", "https://www.twitch.tv/gonzaahre")
      .addField("Twitter <:twitter:919018371406762024> ", "https://twitter.com/GonzaloEbel")
      .addField("GitHub <:github:1069752922121961513> ", "https://github.com/GonzaAhrexd")
      .addField("Reddit <:reddit:919018377740177418> ", "https://www.reddit.com/user/GonzaAhre")

    interaction.reply({

      embeds: [embed]

    })
    }

}