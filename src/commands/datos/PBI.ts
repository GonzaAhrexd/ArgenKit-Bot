
import Discord from "discord.js"
import axios from "axios"
import { formatoPrecio } from '../../functions/formato'
const wait = require('node:timers/promises').setTimeout

const PBI = async (client: any, interaction: any) => {
        const [PBIArg, PBIPerCapita] = await Promise.all([
          axios.get(`https://api.worldbank.org/v2/country/AR/indicator/NY.GDP.MKTP.CD?date=2024&format=json`),
          axios.get(`http://api.worldbank.org/v2/country/AR/indicator/NY.GDP.PCAP.CD?date=2024&format=json`)
        ]);

        let PBI = PBIArg.data[1][0].value
        let PBIPC = PBIPerCapita.data[1][0].value
        const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
          .setTitle("Producto Bruto Interno (2023)")
          .setColor("#FAD56F")
          .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1181792127617867886/gdp.png?ex=658258af&is=656fe3af&hm=978b0f1d092f87d2b881cff2a8eb53a7b85cff4af8ce7cfaa350d083d527e2c0&")
          .addFields(
            { name: "Valor nominal :money_with_wings:  ", value: formatoPrecio(PBI, "USD") },
            { name: "Valor Per Capita :money_with_wings:  ", value: formatoPrecio(PBIPC, "USD") }
          )



        await wait(3000)
        await interaction.editReply({ embeds: [embed] })

      
}

export default PBI
