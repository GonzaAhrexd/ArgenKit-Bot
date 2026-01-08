
import Discord from "discord.js"
import { formatoPrecio } from '../../functions/formato'
import { getReservasData } from "../../api/bcraApi"
const wait = require('node:timers/promises').setTimeout

type ReservasData = {
  valor: number,
  fecha: string,
}

const Reservas = async (client: any, interaction: any) => {
        const reservasData = await getReservasData()


        const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
          .setTitle("Reservas del Banco Central de la República Argentina")
          .setColor("#9bcef7")
          .setDescription("Las reservas constituyen el componente más importante de los activos del Banco Central y se utilizan para financiar los pagos al exterior o para intervenir en el mercado cambiario.")
          .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903122250708963358/bank.png")
         .addFields({ name: "Valor  :bank: ", value: formatoPrecio(reservasData.valor * 1000000, "USD") + ` (${reservasData.fecha})` })

        await wait(3000)
        await interaction.editReply({ embeds: [embed] }); 
      
}

export default Reservas
