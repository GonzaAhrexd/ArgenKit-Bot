
import Discord from "discord.js"
import axios from "axios"
import { formatoPrecio, formatoNum } from '../functions/formato'
import { embedError } from "../functions/embedError"
const wait = require('node:timers/promises').setTimeout
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
    .addSubcommand(subcommand =>
      subcommand.setName('pbi')
      .setDescription('Muestra el Producto Bruto Interno de Argentina')
      )
      .addSubcommand(subcommand =>
        subcommand.setName('gabinete')
        .setDescription('Muestra los integrantes actuales del gabinete de ministros')
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
      
            await interaction.deferReply()
            await wait(3000)
            await interaction.reply({ embeds: [embed] });
        })
        .catch((error) => {
          embedError(interaction, error)
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

            await interaction.deferReply()
            await wait(3000)
            await interaction.reply({ embeds: [embed] });
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

            await interaction.deferReply()
            await wait(3000)
            await interaction.reply({ embeds: [embed] });
        })
        .catch((err) => {
          console.error('ERR', err)

        })
    }

    if(interaction.options.getSubcommand() === 'pbi'){
      try{
        const [PBIArg, PBIPerCapita] = await Promise.all([
          axios.get(`http://api.worldbank.org/v2/country/AR/indicator/NY.GDP.MKTP.CD?date=2022&format=json`),
          axios.get(`http://api.worldbank.org/v2/country/AR/indicator/NY.GDP.PCAP.CD?date=2022&format=json`)
      ]);

      let PBI = PBIArg.data[1][0].value
      let PBIPC = PBIPerCapita.data[1][0].value
      const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
      .setTitle("Producto Bruto Interno")
      .setColor("#FAD56F")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1181792127617867886/gdp.png?ex=658258af&is=656fe3af&hm=978b0f1d092f87d2b881cff2a8eb53a7b85cff4af8ce7cfaa350d083d527e2c0&")
      .addFields(
        { name: "Valor nominal :money_with_wings:  ", value:  formatoPrecio(PBI, "USD") },
        { name: "Valor Per Capita :money_with_wings:  ", value: formatoPrecio(PBIPC, "USD") }
        )
      

        await interaction.deferReply()
        await wait(3000)
        await interaction.reply({ embeds: [embed] })

      }catch(Error){
        embedError(interaction, Error)
      }
    } 
    if(interaction.options.getSubcommand() === 'gabinete'){
      const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
      .setTitle("Gabinete de Ministros")
      .setColor("#B18BC8")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1181795170207924244/networking.png?ex=65825b85&is=656fe685&hm=ef7217d1c75f8aea833ff9cb977cc177eb45c395467a82d082a5dc068ef4fdb7&")
      .addFields(
        {name: "Presidente", value: "Javier Gerardo Milei (LLA 🟣)", inline: true },
        {name: "Vicepresidente", value: "Victoria Villaruel (LLA 🟣)", inline: true},
        {name: "Jefatura de Gabinete", value: "Nicolás Posse (LLA 🟣)", inline: true },
        {name: "Ministerio de Capital Humano", value: "Sandra Pettovello (UCEDE 🔵)", inline: true },
        {name: "Ministerio de Defensa", value: "Luis Petri (UCR 🔴)", inline: true },
        {name: "Ministerio de Economía", value: "Luis Caputo (PRO 🟡)", inline: true },
        {name: "Ministerio de Infraestructura", value: "Guillermo Ferraro (LLA 🟣)", inline: true },
        {name: "Ministerio del Interior", value: "Guillermo Francos (LLA 🟣)", inline: true },
        {name: "Ministerio de Justicia", value: "Mariano Cúneo Libarona (LLA 🟣)", inline: true },
        {name: "Ministerio de Relaciones Exteriores", value: "Diana Mondino (LLA 🟣)", inline: true },
        {name: "Ministerio de Seguridad", value: "Patricia Bullrich (PRO 🟡)", inline: true },
      )
      return await interaction.reply({ embeds: [embed] });
} 
  }
}