
import Discord from "discord.js"
import axios from "axios"
const { total51 } = require("../../functions/impuestos"); //Impuestos
const { formatoPrecio } = require('../../functions/formato')

const appletv = async (client: any, interaction: Discord.CommandInteraction) => {

    const [oficial] = await Promise.all([
        axios.get('https://api.bluelytics.com.ar/v2/latest'),
    ]);
    const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
        .setTitle("Apple TV+")
        .setURL("https://www.apple.com/la/tv/")
        .setDescription("Los precios de Apple TV en Argentina son los siguientes: ")
        .setColor('#eeeeee')
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913852356771319928/televisor_1.png")
        .addFields(
            { name: "Costo mensual", value: `ARS${formatoPrecio(total51(6.99 * oficial.data['oficial']['value_sell']), "ARS")}`, inline: true },
        )
    await interaction.editReply({ embeds: [embed] });

}

export default appletv
