
import Discord from "discord.js"
import axios from "axios"
import https from 'https'
import { formatoPrecio, formatoNum } from '../../functions/formato'
import { embedError } from "../../functions/embedError"
const wait = require('node:timers/promises').setTimeout

const Circulante = async (client: any, interaction: any) => {
        
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
    
}

export default Circulante
