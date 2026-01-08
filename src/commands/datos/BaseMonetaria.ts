
import Discord from "discord.js"
import { formatoPrecio } from "../../functions/formato"
import { getBaseMonetariaData } from "../../api/bcraApi"
const wait = require('node:timers/promises').setTimeout


const baseMonetaria = async (client: any, interaction: any) => {


    const baseMonetariaData = await getBaseMonetariaData()

    const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
      .setTitle("Base Monetaria")
      .setDescription("La Base Monetaria está constituida por el dinero legal en circulación (billetes y monedas), más las reservas de bancos en el banco central. La base monetaria es controlada por el banco central y constituye su principal vía para controlar la oferta monetaria. Otra vía para definir la base monetaria es que constituyen los pasivos monetarios del banco central.")
      .setColor("#FAD56F")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1177083051579293696/profits.png?ex=65713704&is=655ec204&hm=7e73a87fbc7549b29a236a1b60cb97a45f421eb3ca79d284109a5694d902a7df&")
      .addFields({ name: "Valor  :bank: ", value: `${formatoPrecio(baseMonetariaData.baseMonetariaValor * 1000000, "ARS")} (${baseMonetariaData.fecha}) ${baseMonetariaData.isAumentoBase}` })


    await wait(3000)
    await interaction.editReply({ embeds: [embed] });

}

export default baseMonetaria
