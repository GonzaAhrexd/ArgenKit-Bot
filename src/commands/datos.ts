
import Discord from "discord.js"
import axios from "axios"
import https from 'https'
import { formatoPrecio, formatoNum } from '../functions/formato'
import { embedError } from "../functions/embedError"
import moment from 'moment-timezone'

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
    ).addSubcommand(subcommand =>
      subcommand.setName('basemonetaria')
        .setDescription('Muestra el valor de la base monetaria actual')
    ).addSubcommand(subcommand =>
      subcommand.setName('inflacion')
        .setDescription('Muestra el Indice de Precios al Consumidor del último mes registrado y comparaciones previas')
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
      await interaction.deferReply();

      try {
        const [riesgo ] = await Promise.all([
          // axios.get('https://api.argentinadatos.com/v1/finanzas/indices/riesgo-pais/ultimo'),
          axios.get('https://api.argentinadatos.com/v1/finanzas/indices/riesgo-pais/')
        ])
        // Toma el último dato del array
        const ultimoDato = riesgo.data[riesgo.data.length - 1]
        // Toma el penúltimo dato del array
        const datoAnterior = riesgo.data[riesgo.data.length - 2]
        // Calcula el porcentaje de cambio entre el último dato y el penúltimo
        let porcentajeCambio = (((ultimoDato['valor'] - datoAnterior['valor']) / datoAnterior['valor']) * 100).toFixed(2)  
        // Calcula si el riesgo país subió, bajó o se mantuvo igual
        let isCambioRiesgo =  ultimoDato['valor'] > datoAnterior['valor'] ? "🔺" : ultimoDato['valor'] == datoAnterior['valor'] ? "⏸️" : "<:flechashaciaabajo:1210747546096369664>"
        const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
          .setTitle("Riesgo País")
          .setColor("#e6306c")
          .setDescription("El riesgo país es todo riesgo inherente a las inversiones y a las financiaciones en un país en contraste con otro.")
          .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1177075689195835422/benchmarking.png?ex=65713029&is=655ebb29&hm=eb99e3c29ae5f5c67de55ede357d6e7501752bb2a5a08f577f4e4395fa6259ee&")
          .addFields({ name: "Valor :chart_with_upwards_trend: ", value: `${ultimoDato['valor']} puntos ${isCambioRiesgo} ${porcentajeCambio}%` })
        await wait(3000)
        await interaction.editReply({ embeds: [embed] });
      } catch (error) {
        embedError(interaction, error)
      }
    }
    //Reservas
    if (interaction.options.getSubcommand() === 'reservas') {
      await interaction.deferReply();
      try {
        // Importar axios
        // Obtener el token de la API de BCRA
        const agent = new https.Agent({  
          rejectUnauthorized: false
        });
        
        const todayDate = new Date().toISOString().split("T")[0]
        //Misma fecha pero 2 semanas antes
        const twoWeeksAgo = new Date(Date.now() - 12096e5).toISOString().split("T")[0]

        let [reservas] = await Promise.all([
          axios.get(`https://api.bcra.gob.ar/estadisticas/v2.0/datosvariable/1/${twoWeeksAgo}/${todayDate}`, { httpsAgent: agent })
        ]);     
        reservas = reservas['data']['results'][reservas['data']['results'].length -1]
        
        // @ts-ignore
        reservas.fecha = reservas.fecha.split("-").reverse().join("/")        
        const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
          .setTitle("Reservas del Banco Central de la República Argentina")
          .setColor("#9bcef7")
          .setDescription("Las reservas constituyen el componente más importante de los activos del Banco Central y se utilizan para financiar los pagos al exterior o para intervenir en el mercado cambiario.")
          .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903122250708963358/bank.png")
         // @ts-ignore
         .addFields({ name: "Valor  :bank: ", value: formatoPrecio(reservas.valor, "USD") + ` (${reservas.fecha})` })

        await wait(3000)
        await interaction.editReply({ embeds: [embed] }); 
      } catch (error) {
        embedError(interaction, error)
      }
    }
    //Circulante
    if (interaction.options.getSubcommand() === 'circulante') {

      await interaction.deferReply();
      try {
        
          // Obtener el token de la API de BCRA
          const agent = new https.Agent({  
            rejectUnauthorized: false
          });
          
          //Dame la fecha actual
          const todayDate = new Date().toISOString().split("T")[0]
          const twoWeeksAgo = new Date(Date.now() - 12096e5).toISOString().split("T")[0]
          

        const [circulante] = await Promise.all([
          axios.get(`https://api.bcra.gob.ar/estadisticas/v2.0/datosvariable/16/${twoWeeksAgo}/${todayDate}`, { httpsAgent: agent }),
         ]);
         const circulanteValor = circulante['data']['results'][circulante['data']['results'].length -1].valor
        const fecha = (circulante['data']['results'][circulante['data']['results'].length -1].fecha).split("-").reverse().join("/")   
       
        const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
          .setTitle("Pesos Argentinos en circulación")
          .setDescription("La cantidad de pesos en circulación en la economía")
          .setColor("#FAD56F")
          .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1210375333761654834/cash-flow.png?ex=65ea54df&is=65d7dfdf&hm=575568c65381ec4dcf3bdf3ad50e08f9be26325e673951f0000c8996242838ea&")
          .addFields({ name: "Valor  :bank: ", value: '$ ' + circulanteValor + ` (${fecha})` })

        await wait(3000)
        await interaction.editReply({ embeds: [embed] });
      } catch (error) {
        embedError(interaction, error)
      }
    }

    //Base monetaria
    if (interaction.options.getSubcommand() === 'basemonetaria') {
      await interaction.deferReply();
      try{
        // Obtener el token de la API de BCRA
       
           // Obtener el token de la API de BCRA
           const agent = new https.Agent({  
            rejectUnauthorized: false
          });
          

      //Dame la fecha actual
      const todayDate = new Date().toISOString().split("T")[0]
      const twoWeeksAgo = new Date(Date.now() - 12096e5).toISOString().split("T")[0]
      

    const [baseMonetaria] = await Promise.all([
      axios.get(`https://api.bcra.gob.ar/estadisticas/v2.0/datosvariable/15/${twoWeeksAgo}/${todayDate}`, { httpsAgent: agent }),
     ]);

     const baseMonetariaValor  = baseMonetaria['data']['results'][baseMonetaria['data']['results'].length -1].valor
       const baseMonetariaValorAnterior = baseMonetaria['data']['results'][baseMonetaria['data']['results'].length -2].valor

       let isAumentoBase = baseMonetariaValor > baseMonetariaValorAnterior ? "🔺" : "<:flechashaciaabajo:1210747546096369664>"

        const fecha = (baseMonetaria['data']['results'][baseMonetaria['data']['results'].length -1].fecha).split("-").reverse().join("/")   
        const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
          .setTitle("Base Monetaria")
          .setDescription("La Base Monetaria está constituida por el dinero legal en circulación (billetes y monedas), más las reservas de bancos en el banco central. La base monetaria es controlada por el banco central y constituye su principal vía para controlar la oferta monetaria. Otra vía para definir la base monetaria es que constituyen los pasivos monetarios del banco central.")
          .setColor("#FAD56F")
          .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1177083051579293696/profits.png?ex=65713704&is=655ec204&hm=7e73a87fbc7549b29a236a1b60cb97a45f421eb3ca79d284109a5694d902a7df&")
         .addFields({ name: "Valor  :bank: ", value: '$ ' + baseMonetariaValor + ` (${fecha})` + isAumentoBase })
                


        await wait(3000)
        await interaction.editReply({ embeds: [embed] });
      } catch (error) {
        embedError(interaction, error)
      }
    }

    //Inflación
    if(interaction.options.getSubcommand() === 'inflacion'){
      await interaction.deferReply();
     try{ 
        function subioInflacion(inflamesActual, inflamesAnterior) {
          return inflamesActual > inflamesAnterior ? "🔺" : "<:flechashaciaabajo:1210747546096369664>";
      }

      function anualizarInflacion(mensual) {
          return (((mensual / 100) + 1) ** 12 - 1) * 100;
      }

      function convertirFecha(fechaAConvertir) {
          const [day, month, year] = fechaAConvertir.split("/");
          return new Date(`${year}-${month}-${day}`);
      }

    

      const agent = new https.Agent({ rejectUnauthorized: false });

      const startMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split("T")[0];
      const startTwelveMonthsBefore = new Date(new Date().getFullYear(), new Date().getMonth() - 12, 1).toISOString().split("T")[0];
    
      const [inflacion, interanual] = await Promise.all([
          axios.get(`https://api.bcra.gob.ar/estadisticas/v2.0/datosvariable/27/${startTwelveMonthsBefore}/${startMonth}`, { httpsAgent: agent }),
          axios.get(`https://api.bcra.gob.ar/estadisticas/v2.0/datosvariable/28/${startTwelveMonthsBefore}/${startMonth}`, { httpsAgent: agent }),
          ]);

      // Inflación datos 
      // Mes actual
      const inflacionActual = inflacion.data.results[inflacion.data.results.length - 1].valor;
      // Fecha del mes
      const inflacionActualMes = new Date(inflacion.data.results[inflacion.data.results.length - 1].fecha);
      // Mes anterior
      const inflacionAnterior = inflacion.data.results[inflacion.data.results.length - 2].valor;
      // Fecha del mes anterior
      const inflacionAnteriorMes = new Date(inflacion.data.results[inflacion.data.results.length - 2].fecha);
      // Inflación interanual
      const inflacionInteranualActual = interanual.data.results[interanual.data.results.length - 1].valor;
      // Fecha del mes interanual
      const inflacionInteranualActualMes = new Date(interanual.data.results[interanual.data.results.length - 1].fecha);
      // Inflación interanual anterior
      const inflacionInteranualAnterior = interanual.data.results[interanual.data.results.length - 2].valor;
      
      // Fecha del mes interanual anterior
      const inflacionInteranualAnteriorMes = new Date(interanual.data.results[interanual.data.results.length - 2].fecha);
      const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
      const inflacionInteranualActualString = `${meses[inflacionInteranualActualMes.getMonth() +1 ]} ${inflacionInteranualActualMes.getFullYear() - 1} - ${meses[inflacionActualMes.getMonth()]} ${inflacionActualMes.getFullYear()}`
      const inflacionInteranualAnteriorString = `${meses[inflacionInteranualAnteriorMes.getMonth()+1]} ${inflacionInteranualAnteriorMes.getFullYear() -1} - ${meses[inflacionInteranualAnteriorMes.getMonth()]} ${inflacionInteranualAnteriorMes.getFullYear()}`


      const embed = new Discord.EmbedBuilder()
          .setTitle("Inflación")
          .setDescription("La inflación es el aumento generalizado y sostenido de los precios de los bienes y servicios existentes en el mercado durante un período de tiempo, generalmente un año.")
          .setColor("#FF0000")
          .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1210388005571928194/interest-rate.png?ex=65ea60ac&is=65d7ebac&hm=583707d60d34e41f7eda6611ee1269a473e5bccc2146ab7138f53c14d68085e1&")
          .addFields(
              { name: `Mensual \n(${meses[inflacionActualMes.getMonth()]})`, value: `${inflacionActual}%`, inline: true },
              { name: `Mes anterior \n(${meses[inflacionAnteriorMes.getMonth()]})`, value: `${inflacionAnterior}%`, inline: true },
              { name: `Variación`, value: `${(inflacionActual - inflacionAnterior).toFixed(2)}% ${subioInflacion(inflacionActual, inflacionAnterior)}`, inline: true },
              { name: `Interanual \n(${inflacionInteranualActualString})`, value: `${inflacionInteranualActual}%`, inline: true },
              { name: `Interanual anterior \n(${inflacionInteranualAnteriorString})`, value: `${inflacionInteranualAnterior}%`, inline: true },
              { name: `Variación`, value: `${(inflacionInteranualActual - inflacionInteranualAnterior).toFixed(2)}% ${subioInflacion(inflacionInteranualActual, inflacionInteranualAnterior)}`, inline: true },
              { name: `Mensual anualizada`, value: `${anualizarInflacion(inflacionActual).toFixed(2)}%`, inline: true },
            );

      await interaction.editReply({ embeds: [embed] });

      }catch(error){
        embedError(interaction, error)
      }

    }

    if (interaction.options.getSubcommand() === 'pbi') {
      await interaction.deferReply()
      try {
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
            { name: "Valor nominal :money_with_wings:  ", value: formatoPrecio(PBI, "USD") },
            { name: "Valor Per Capita :money_with_wings:  ", value: formatoPrecio(PBIPC, "USD") }
          )



        await wait(3000)
        await interaction.editReply({ embeds: [embed] })

      } catch (Error) {
        embedError(interaction, Error)
      }
    }
    if (interaction.options.getSubcommand() === 'gabinete') {
      const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
        .setTitle("Gabinete de Ministros")
        .setColor("#B18BC8")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1181795170207924244/networking.png?ex=65825b85&is=656fe685&hm=ef7217d1c75f8aea833ff9cb977cc177eb45c395467a82d082a5dc068ef4fdb7&")
        .addFields(
          { name: "Presidente", value: "Javier Gerardo Milei (LLA 🟣)", inline: true },
          { name: "Vicepresidente", value: "Victoria Villaruel (LLA 🟣)", inline: true },
          { name: "Jefatura de Gabinete", value: "Guillermo Francos (LLA 🟣)", inline: true },
          { name: "Ministerio de Capital Humano", value: "Sandra Pettovello (LLA 🟣)", inline: true },
          { name: "Ministerio de Defensa", value: "Luis Petri (UCR 🔴)", inline: true },
          { name: "Ministerio de Economía", value: "Luis Caputo (LLA 🟣)", inline: true },
          { name: "Ministerio de Desregulación y Transformación del Estado", value: "Federico Sturzenegger (LLA 🟣)", inline: true },
          { name: "Ministerio de Justicia", value: "Mariano Cúneo Libarona (LLA 🟣)", inline: true },
          { name: "Ministerio de Relaciones Exteriores", value: "Diana Mondino (LLA 🟣)", inline: true },
          { name: "Ministerio de Seguridad", value: "Patricia Bullrich (PRO 🟡)", inline: true },
          { name: "Ministerio de Salud", value: "Mario Iván Lugones	(LLA 🟣)", inline: true }
        )
      return await interaction.reply({ embeds: [embed] });
    }
  }

  

}