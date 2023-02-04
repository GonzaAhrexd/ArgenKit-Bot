import {SlashCommandBuilder} from "@discordjs/builders"
import Discord from "discord.js"
module.exports = {
    data: new SlashCommandBuilder()
    .setName("api")
    .setDescription("Muestra las apis utilizadas por el bot"),
    async run(client, interaction){
        const embed = new Discord.MessageEmbed()
        .setTitle("Apis utilizadas para la creación del bot")
        .setColor('#dfe5e8')
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/919016293481472021/navegador.png")
        .addFields(
          { name: 'Cotizaciones del dólar, euro, real', value: "https://github.com/guidospadavecchia/DolarBot-Api" },
          { name: 'Datos de coronavirus en Argentina y el mundo', value: "https://disease.sh/"},
          { name: 'Cotizaciones de criptomonedas', value: "https://www.coingecko.com/es" },
          { name: 'Cotizaciones de criptomonedas', value: "https://criptoya.com/api" },
          { name: 'Cotizaciones de metales', value: "https://api.metals.live/"})
      interaction.reply({ embeds: [embed]})
    }

}