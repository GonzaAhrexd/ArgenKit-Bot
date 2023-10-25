
import Discord from "discord.js"

module.exports = {
    data: new Discord.SlashCommandBuilder()
    .setName("servidor")
    .setDescription("¡Unete al servidor oficial del bot!"),

    async run(client, interaction){

        const embed:Discord.EmbedBuilder = new Discord.EmbedBuilder()
        .setTitle("¡Unete al servidor oficial de Argenkit Bot!")
        .setURL("https://discord.gg/68jsHeTRYa")
        .setColor('#0a9ee1')
        .setDescription("¡Puedes unirte al servidor oficial de Argenkit bot para aportar ideas o dar reportes de bugs! ¡O simplemente hablar con otras personas! ")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/811043646848630786/argboticon-03.png")
      await interaction.reply({ embeds: [embed] })
    }

}