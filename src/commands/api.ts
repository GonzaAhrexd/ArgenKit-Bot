
import Discord from "discord.js"
module.exports = {
    data: new Discord.SlashCommandBuilder()
    .setName("api")
    .setDescription("Muestra las apis utilizadas por el bot"),
    async run(client, interaction){
        const embed:Discord.EmbedBuilder = new Discord.EmbedBuilder()
        .setTitle("Apis utilizadas para la creación del bot")
        .setColor('#2A2A49')
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1176941785629605988/api.png?ex=6570b374&is=655e3e74&hm=4b02a674c89605d832e4ce9bd129e933fecf3abce061782548ec8b5ae79512da&")
        .addFields(
          { name: 'Cotizaciones del dólar, euro, real', value: "https://github.com/guidospadavecchia/DolarBot-Api" },
          {name: 'Cotizaciones dólar y euro blue', value: "https://api.bluelytics.com.ar/v2/latest"},
          {name: 'Cotizaciones otras monedas', value: 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json'},
          { name: 'Cotizaciones de criptomonedas',  value: "https://www.coingecko.com/es" },
          { name: 'Cotizaciones de criptomonedas', value: "https://criptoya.com/api" },
          { name: 'Cotizaciones de acciones', value: "https://finnhub.io/" })
            
      await interaction.reply({ embeds: [embed]})
    }

}