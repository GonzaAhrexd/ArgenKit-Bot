
import Discord from "discord.js"
const {  total51 } = require("../../functions/impuestos"); //Impuestos
const { formatoPrecio } = require('../../functions/formato')

const netflix = async (client: any, interaction: Discord.CommandInteraction) => {
    const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
    .setTitle("Netflix")
    .setURL("https://www.netflix.com/ar/")
    .setDescription("Los precios de Netflix con impuestos en Argentina son los siguientes: ")
    .setColor('#9a0611')
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1180334885953609810/netflix.png?ex=657d0b86&is=656a9686&hm=711e7fc4fb8376b9efed01f54bc53c131331ae4d611e773840537a3f0d8925d3&")
    .addFields(
      { name: "Básico:", value: "ARS" + formatoPrecio(total51(5999), "ARS"), inline: true },
      { name: "Estándar:", value: "ARS" + formatoPrecio(total51(9999), "ARS"), inline: true },
      { name: "Premium:", value: "ARS" + formatoPrecio(total51(13499), "ARS"), inline: true },
      { name: "Casa extra:", value: "ARS" + formatoPrecio(total51(3599), "ARS"), inline: true }
    )


  return interaction.reply({ embeds: [embed] });

}

export default netflix
