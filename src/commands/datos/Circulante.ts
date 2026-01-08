
import Discord from "discord.js"
import { formatoPrecio } from '../../functions/formato'
import { getCirculanteData } from "../../api/bcraApi"
const wait = require('node:timers/promises').setTimeout


type CirculanteData = {
  valor: number,
  fecha: string,
}

const Circulante = async (client: any, interaction: any) => {
        
        const circulanteData = await getCirculanteData()
       
      const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
        .setTitle("Pesos Argentinos en circulación")
        .setDescription("La cantidad de pesos en circulación en la economía.")
        .setColor("#FAD56F")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1210375333761654834/cash-flow.png?ex=65ea54df&is=65d7dfdf&hm=575568c65381ec4dcf3bdf3ad50e08f9be26325e673951f0000c8996242838ea&")
        .addFields({ name: "Valor  :bank: ", value: `${formatoPrecio(circulanteData.valor * 1000000, "ARS")} (${circulanteData.fecha})` })

      await wait(3000)
      await interaction.editReply({ embeds: [embed] });
    
}

export default Circulante
