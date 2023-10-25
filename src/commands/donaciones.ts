
import Discord from "discord.js"

module.exports = {
    data: new Discord.SlashCommandBuilder()
    .setName("donaciones")
    .setDescription("Muestra formas de apoyar al creador mediante donaciones."),

    async run(client, interaction){
        const embed:Discord.EmbedBuilder = new Discord.EmbedBuilder()
        .setTitle("DONACIONES")
        .setColor('Gold')
        .setDescription("¡Si decidiste donarme te lo agradezco infinitamente! ¡Cada peso cuenta!")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/919022487377961040/piggy-bank.png")
       await interaction.reply({ embeds: [embed]})
    }

}


