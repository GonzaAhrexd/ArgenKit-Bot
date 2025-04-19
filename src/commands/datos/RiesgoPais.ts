
import Discord from "discord.js"
import axios from "axios"
import https from 'https'
import { formatoPrecio, formatoNum } from '../../functions/formato'
import { embedError } from "../../functions/embedError"
const wait = require('node:timers/promises').setTimeout

const RiesgoPais = async (client: any, interaction: any) => {
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

}

export default RiesgoPais
