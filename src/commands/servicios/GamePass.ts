
import Discord from "discord.js"
const {  total21 } = require("../../functions/impuestos"); //Impuestos
const { formatoPrecio } = require('../../functions/formato')

const gamepass = async (client: any, interaction: Discord.CommandInteraction) => {
 const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
        .setTitle("Xbox Game Pass")
        .setURL("https://www.xbox.com/es-AR/xbox-game-pass")
        .setDescription("Los precios de Xbox Game Pass con impuestos en Argentina son los siguientes: ")
        .setColor('#a6ed75')
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903853195443445770/xbox.png")
        .addFields(
          { name: "Xbox Game Pass Core", value: "ARS" + formatoPrecio((total21(5998.69)), "ARS"), inline: true },
          { name: "Xbox Game Pass para PC / Consola", value: "ARS" + formatoPrecio((total21(6998.69)), "ARS"), inline: true },
          { name: "Xbox Game Pass Ultimate", value: "ARS" + formatoPrecio((total21(10997.39)), "ARS"), inline: true }
        )
        
      return interaction.reply({ embeds: [embed] });

}

export default gamepass
