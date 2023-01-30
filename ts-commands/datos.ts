//@ts-ignore
const { SlashCommandBuilder } = require("@discordjs/builders")
//@ts-ignore
const { MessageEmbed } = require("discord.js")
//@ts-ignore
const Discord = require("discord.js");
//@ts-ignore
const axios = require ("axios")
var currencyFormatter = require('currency-formatter') //Currency formatter
module.exports = {
    data: new SlashCommandBuilder()
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
              .then((RIESGO) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Riesgo País")
                  .setColor("#e6306c")
                  .setDescription("El riesgo país es todo riesgo inherente a las inversiones y a las financiaciones en un país en contraste con otro.")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903121332810690570/RiesgoPais.png")
                  .addField("Valor :chart_with_upwards_trend: ", currencyFormatter.format(RIESGO.data['valor'], { locale: 'es-ES', code: ' ', precision: 0 }) + 'puntos', true)
      
                return interaction.reply({ embeds: [embed] });
      
              })
              .catch((err) => {
                console.error('ERR', err)
              })
          }
      
          //Reservas
      
          if (interaction.options.getSubcommand() === 'reservas') {
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/bcra/reservas')
              .then((RESERVAS) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Reservas del Banco Central de la República Argentina")
                  .setColor("#9bcef7")
                  .setDescription("Las reservas constituyen el componente más importante de los activos del Banco Central y se utilizan para financiar los pagos al exterior o para intervenir en el mercado cambiario.")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903122250708963358/bank.png")
                  .addField("Valor :bank: ", 'USD ' + currencyFormatter.format(RESERVAS.data['valor'], { locale: 'es-ES', code: ' ' }), true)
                return interaction.reply({ embeds: [embed] });
              })
              .catch((err) => {
                console.error('ERR', err)
              })
          }
          //Circulante
          if (interaction.options.getSubcommand() === 'circulante') {
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/bcra/circulante')
              .then((CIRCULANTE) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Pesos Argentinos en circulación")
                  .setColor("fad56f")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903124593483583499/money.png")
                  .addField("Cantidad :money_with_wings: ", 'ARS ' + currencyFormatter.format(CIRCULANTE.data['valor'], { locale: 'es-ES', code: ' ' }), true)
                return interaction.reply({ embeds: [embed] });
              })
              .catch((err) => {
                console.error('ERR', err)

              })
          }   
    }
}