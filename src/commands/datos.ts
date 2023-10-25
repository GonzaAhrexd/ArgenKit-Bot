
import  Discord from "discord.js"
import axios from "axios"
var currencyFormatter = require('currency-formatter') //Currency formatter
module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('datos')
        .setDescription('Muestra distintos datos de Argentina')
        .addSubcommand(subcommand =>
            subcommand.setName('riesgopais')
                .setDescription('Muestra el Riesgo País de Argentina')
        )
        .addSubcommand(subcommand =>
            subcommand.setName('reservas')
                .setDescription('Muestra las reservas actuales del Banco Central')
        )
        .addSubcommand(subcommand =>
            subcommand.setName('circulante')
                .setDescription('Muestra la cantidad de pesos circulantes en la economía')
        )
    ,
    async run(client, interaction, options) {

        //Riesgo País

        if (interaction.options.getSubcommand() === 'riesgopais') {
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/bcra/riesgopais')
              .then(async(RIESGO) => {
                const embed:Discord.EmbedBuilder = new Discord.EmbedBuilder()
                  .setTitle("Riesgo País")
                  .setColor("#e6306c")
                  .setDescription("El riesgo país es todo riesgo inherente a las inversiones y a las financiaciones en un país en contraste con otro.")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903121332810690570/RiesgoPais.png")
                  .addFields({ name: "Valor :chart_with_upwards_trend: ", value: RIESGO.data['valor']})
            
                return await interaction.reply({ embeds: [embed] });
      
              })
              .catch((err) => {
                console.error('ERR', err)
              })
          }
      
          //Reservas
      
          if (interaction.options.getSubcommand() === 'reservas') {
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/bcra/reservas')
              .then(async (RESERVAS) => {
                const embed:Discord.EmbedBuilder = new Discord.EmbedBuilder()
                  .setTitle("Reservas del Banco Central de la República Argentina")
                  .setColor("#9bcef7")
                  .setDescription("Las reservas constituyen el componente más importante de los activos del Banco Central y se utilizan para financiar los pagos al exterior o para intervenir en el mercado cambiario.")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903122250708963358/bank.png")
                  .addFields({ name: "Valor  :bank: ", value: 'USD ' + currencyFormatter.format(RESERVAS.data['valor'], { locale: 'es-ES', code: ' ', precision: 0 }) })
            
                return await interaction.reply({ embeds: [embed] });
              })
              .catch((err) => {
                console.error('ERR', err)
              })
          }
          //Circulante
          if (interaction.options.getSubcommand() === 'circulante') {
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/bcra/circulante')
              .then(async (CIRCULANTE) => {
                const embed:Discord.EmbedBuilder = new Discord.EmbedBuilder()
                  .setTitle("Pesos Argentinos en circulación")
                  .setColor("#FAD56F")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903124593483583499/money.png")
                  .addFields({ name: "Cantidad :money_with_wings:  ", value: currencyFormatter.format(CIRCULANTE.data['valor'], { locale: 'es-ES', code: ' ', precision: 0 }) })
            
                return await interaction.reply({ embeds: [embed] });
              })
              .catch((err) => {
                console.error('ERR', err)

              })
          }   
    }
}