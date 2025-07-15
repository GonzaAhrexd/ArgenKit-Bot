
import Discord from "discord.js"
import axios from "axios"
import https from 'https'
const wait = require('node:timers/promises').setTimeout

const baseMonetaria = async (client: any, interaction: any) => {
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
      
}

export default baseMonetaria
