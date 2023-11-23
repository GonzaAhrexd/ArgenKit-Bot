
import { EmbedBuilder } from "discord.js"
import Discord from "discord.js"

module.exports = {
    data: new Discord.SlashCommandBuilder()
    .setName("creador")
    .setDescription("Muestra información del creador del bot."),

    async run(client, interaction){
        const embed:Discord.EmbedBuilder = new EmbedBuilder()
      .setTitle("El creador del Bot es Gonzalo Ebel")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1177068140140707950/coding.png?ex=65712921&is=655eb421&hm=d7444a3c3d4e1fa2b025c7904de09389416160811f862ed5c99b0b56cdf71bb8&")
      .setDescription("Estas son mis redes sociales, podés darme sugerencias o ideas por Twitter o en el servidor oficial del bot!")
      .setColor('#2D4D83')
      .addFields(
        { name: "YouTube <:yt:919017871886123120>", value: `https://www.youtube.com/c/GonzaAhrexd`},
        { name: "Twitch  <:twitch:919018371134140466>", value: `https://www.twitch.tv/gonzaahre`},
        { name: "Twitter <:twitter:919018371406762024>", value: `https://twitter.com/GonzaloEbel`},
        { name: "GitHub <:github:1069752922121961513>", value: `https://github.com/GonzaAhrexd`},
        { name: "Reddit <:reddit:919018377740177418>", value: `https://www.reddit.com/user/GonzaAhre`})
    await interaction.reply({embeds: [embed] })
    }

}