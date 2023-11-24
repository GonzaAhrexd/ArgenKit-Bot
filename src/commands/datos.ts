
import Discord from "discord.js"
import axios from "axios"
import puppeteer from 'puppeteer'
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

    const obtenerRiesgoPais = async ()  =>  {
      const browser = await puppeteer.launch({
        headless: 'new' // Establecer el nuevo modo headless
      });
      const page = await browser.newPage();
      const url = 'https://www.ambito.com/contenidos/riesgo-pa%C3%ADs.html';

      await page.goto(url);

      const element = await page.$('span.variation-last__value.value.data-ultimo');
      const textContent = await element?.evaluate(el => el.textContent);
      
      // Cierra el navegador
      await browser.close();

      
      return textContent
    }
    //Riesgo País

    if (interaction.options.getSubcommand() === 'riesgopais') {
      
      obtenerRiesgoPais().then((valorRiesgoPais) => {
        const stringValorRiesgoPais = valorRiesgoPais?.toString();          
          const embed = new Discord.EmbedBuilder()
            .setTitle("Riesgo País")
            .setColor("#e6306c")
            .setDescription("El riesgo país es todo riesgo inherente a las inversiones y a las financiaciones en un país en contraste con otro.")
            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903121332810690570/RiesgoPais.png")
            .addFields({ name: "Valor :chart_with_upwards_trend: ", value: stringValorRiesgoPais ? stringValorRiesgoPais : "error" });
      
          // Aquí puedes enviar el embed como respuesta a la interacción
          return interaction.reply({ embeds: [embed] });
        }).catch((error) => {
            console.error('Error al obtener el riesgo país:', error);
          });


    
  }

    //Reservas

    if (interaction.options.getSubcommand() === 'reservas') {
      axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/bcra/reservas')
        .then(async (RESERVAS) => {
          const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
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
          const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
            .setTitle("Pesos Argentinos en circulación")
            .setColor("#FAD56F")
            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1177083051579293696/profits.png?ex=65713704&is=655ec204&hm=7e73a87fbc7549b29a236a1b60cb97a45f421eb3ca79d284109a5694d902a7df&")
            .addFields({ name: "Cantidad :money_with_wings:  ", value: currencyFormatter.format(CIRCULANTE.data['valor'], { locale: 'es-ES', code: ' ', precision: 0 }) })

          return await interaction.reply({ embeds: [embed] });
        })
        .catch((err) => {
          console.error('ERR', err)

        })
    }
  }
}