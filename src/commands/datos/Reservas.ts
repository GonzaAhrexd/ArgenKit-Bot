
import Discord from "discord.js"
import axios from "axios"
import https from 'https'
import { formatoPrecio, formatoNum } from '../../functions/formato'
import { embedError } from "../../functions/embedError"
const wait = require('node:timers/promises').setTimeout

type ReservasData = {
  valor: number,
  fecha: string,
}

const Reservas = async (client: any, interaction: any) => {
        // Importar axios
        // Obtener el token de la API de BCRA
        const agent = new https.Agent({  
          rejectUnauthorized: false
        });
        
        const todayDate = new Date().toISOString().split("T")[0]
        //Misma fecha pero 2 semanas antes
        const twoWeeksAgo = new Date(Date.now() - 12096e5).toISOString().split("T")[0]

        
        const reservas = await axios.get(`https://api.bcra.gob.ar/estadisticas/v4.0/Monetarias/1/`, {
            params: {
              desde: twoWeeksAgo,
              hasta: todayDate,
            },
            httpsAgent: agent 
      })


      const reservasDataLatest:ReservasData = {
        valor: reservas.data.results[0].detalle[0].valor, 
        fecha: reservas.data.results[0].detalle[0].fecha.split("T")[0].split("-").reverse().join("/")

      }


        const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
          .setTitle("Reservas del Banco Central de la República Argentina")
          .setColor("#9bcef7")
          .setDescription("Las reservas constituyen el componente más importante de los activos del Banco Central y se utilizan para financiar los pagos al exterior o para intervenir en el mercado cambiario.")
          .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903122250708963358/bank.png")
         .addFields({ name: "Valor  :bank: ", value: formatoPrecio(reservasDataLatest.valor * 1000000, "USD") + ` (${reservasDataLatest.fecha})` })

        await wait(3000)
        await interaction.editReply({ embeds: [embed] }); 
      
}

export default Reservas
