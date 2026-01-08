
import Discord from "discord.js"
import { formatoPrecio } from '../../functions/formato'
import { getAllPbiData } from "../../api/WorldBank"
const wait = require('node:timers/promises').setTimeout

const PBI = async (client: any, interaction: any) => {
        const PBIData = await getAllPbiData()

        
        const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
          .setTitle("Producto Bruto Interno (2023)")
          .setColor("#FAD56F")
          .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1181792127617867886/gdp.png?ex=658258af&is=656fe3af&hm=978b0f1d092f87d2b881cff2a8eb53a7b85cff4af8ce7cfaa350d083d527e2c0&")
          .addFields(
            { name: "Valor nominal :money_with_wings:  ", value: formatoPrecio(PBIData.PBI, "USD") },
            { name: "Valor Per Capita :money_with_wings:  ", value: formatoPrecio(PBIData.PBIPerCapita, "USD") }
          )



        await wait(3000)
        await interaction.editReply({ embeds: [embed] })

      
}

export default PBI
