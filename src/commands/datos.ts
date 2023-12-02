
import Discord from "discord.js"
import axios from "axios"
const { formatoPrecio, formatoNum } = require('../functions/formato')
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
        .then(async(riesgo) => {
          const embed:Discord.EmbedBuilder = new Discord.EmbedBuilder()
            .setTitle("Riesgo País")
            .setColor("#e6306c")
            .setDescription("El riesgo país es todo riesgo inherente a las inversiones y a las financiaciones en un país en contraste con otro.")
            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1177075689195835422/benchmarking.png?ex=65713029&is=655ebb29&hm=eb99e3c29ae5f5c67de55ede357d6e7501752bb2a5a08f577f4e4395fa6259ee&")
            .addFields({ name: "Valor :chart_with_upwards_trend: ", value: formatoNum(riesgo.data['valor']) + " puntos"})
      
          return await interaction.reply({ embeds: [embed] });

        })
        .catch((err) => {
          console.error('ERR', err)
        })
    }



    //Reservas

    if (interaction.options.getSubcommand() === 'reservas') {
      axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/bcra/reservas')
        .then(async (reservas) => {
          const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
            .setTitle("Reservas del Banco Central de la República Argentina")
            .setColor("#9bcef7")
            .setDescription("Las reservas constituyen el componente más importante de los activos del Banco Central y se utilizan para financiar los pagos al exterior o para intervenir en el mercado cambiario.")
            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903122250708963358/bank.png")
            .addFields({ name: "Valor  :bank: ", value: formatoPrecio(reservas.data['valor'],"USD") })

          return await interaction.reply({ embeds: [embed] });
        })
        .catch((err) => {
          console.error('ERR', err)
        })
    }
    //Circulante
    if (interaction.options.getSubcommand() === 'circulante') {
      axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/bcra/circulante')
        .then(async (circulante) => {
          const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
            .setTitle("Pesos Argentinos en circulación")
            .setColor("#FAD56F")
            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1177083051579293696/profits.png?ex=65713704&is=655ec204&hm=7e73a87fbc7549b29a236a1b60cb97a45f421eb3ca79d284109a5694d902a7df&")
            .addFields({ name: "Cantidad :money_with_wings:  ", value: "ARS" + formatoPrecio(circulante.data['valor'], "ARS") })

          return await interaction.reply({ embeds: [embed] });
        })
        .catch((err) => {
          console.error('ERR', err)

        })
    }
  }
}