
import Discord from "discord.js"
import axios from "axios"
import https from 'https'
import { formatoPrecio } from '../../functions/formato'
const wait = require('node:timers/promises').setTimeout


type CirculanteData = {
  valor: number,
  fecha: string,
}

const Circulante = async (client: any, interaction: any) => {
        
        // Obtener el token de la API de BCRA
        const agent = new https.Agent({  
          rejectUnauthorized: false
        });
        
        //Dame la fecha actual
        const todayDate = new Date().toISOString().split("T")[0]
        const twoWeeksAgo = new Date(Date.now() - 12096e5).toISOString().split("T")[0]
    
       const circulante = await axios.get(`https://api.bcra.gob.ar/estadisticas/v4.0/Monetarias/16/`, {
         httpsAgent: agent,
         params: {
           desde: twoWeeksAgo,
           hasta: todayDate,
          }
      })

      const circulanteDataLatest:CirculanteData = {
        valor: circulante.data.results[0].detalle[0].valor,
        fecha: circulante.data.results[0].detalle[0].fecha.split("T")[0].split("-").reverse().join("/")
      }
       
      const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
        .setTitle("Pesos Argentinos en circulación")
        .setDescription("La cantidad de pesos en circulación en la economía.")
        .setColor("#FAD56F")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1210375333761654834/cash-flow.png?ex=65ea54df&is=65d7dfdf&hm=575568c65381ec4dcf3bdf3ad50e08f9be26325e673951f0000c8996242838ea&")
        .addFields({ name: "Valor  :bank: ", value: `${formatoPrecio(circulanteDataLatest.valor * 1000000, "ARS")} (${circulanteDataLatest.fecha})` })

      await wait(3000)
      await interaction.editReply({ embeds: [embed] });
    
}

export default Circulante
