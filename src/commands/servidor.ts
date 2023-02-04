import {SlashCommandBuilder} from "@discordjs/builders"
import Discord from "discord.js"

module.exports = {
    data: new SlashCommandBuilder()
    .setName("servidor")
    .setDescription("¡Unete al servidor oficial del bot!"),

    async run(client, interaction){

        const embed = new Discord.MessageEmbed()
        .setTitle("¡Unete al servidor oficial de Argenkit Bot!")
        .setURL("https://discord.gg/68jsHeTRYa")
        .setColor('#0a9ee1')
        .setDescription("¡Puedes unirte al servidor oficial de Argenkit bot para aportar ideas o dar reportes de bugs! ¡O simplemente hablar con otras personas! ")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/811043646848630786/argboticon-03.png")
      interaction.reply({ embeds: [embed] })
    }

}