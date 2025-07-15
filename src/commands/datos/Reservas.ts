
import Discord from "discord.js"
import axios from "axios"
import https from 'https'
import { formatoPrecio, formatoNum } from '../../functions/formato'
import { embedError } from "../../functions/embedError"
const wait = require('node:timers/promises').setTimeout


const Reservas = async (client: any, interaction: any) => {
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
      
}

export default Reservas
