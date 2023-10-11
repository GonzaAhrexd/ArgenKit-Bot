
import Discord from "discord.js"
module.exports = {
    data: new Discord.SlashCommandBuilder()
    .setName("api")
    .setDescription("Muestra las apis utilizadas por el bot"),
    async run(client, interaction){
        const embed:Discord.EmbedBuilder = new Discord.EmbedBuilder()
        .setTitle("Apis utilizadas para la creación del bot")
        .setColor('#dfe5e8')
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/919016293481472021/navegador.png")
        .addFields(
          { name: 'Cotizaciones del dólar, euro, real', value: "https://github.com/guidospadavecchia/DolarBot-Api" },
          {name: 'Cotizaciones dólar y euro blue', value: "https://api.bluelytics.com.ar/v2/latest"},
          {name: 'Cotizaciones otras monedas', value: 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json'},
          { name: 'Datos de coronavirus en Argentina y el mundo', value: "https://disease.sh/"},
          { name: 'Cotizaciones de criptomonedas',  value: "https://www.coingecko.com/es" },
          { name: 'Cotizaciones de criptomonedas', value: "https://criptoya.com/api" },
          { name: 'Cotizaciones de metales', value: "https://api.metals.live/"})
              
      interaction.reply({ embeds: [embed]})
    }

}