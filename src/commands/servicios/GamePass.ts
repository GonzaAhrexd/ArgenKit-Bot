
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
          { name: "Xbox Game Pass Core (Consola)", value: "ARS" + formatoPrecio((total21(5999.99)), "ARS"), inline: true },
          { name: "Xbox Game Pass Standard (Consola)", value: "ARS" + formatoPrecio((total21(8999.99)), "ARS"), inline: true },
          { name: "Xbox Game Pass para PC", value: "ARS" + formatoPrecio((total21(6999.00)), "ARS"), inline: true },
          { name: "Xbox Game Pass Ultimate (PC y Consola)", value: "ARS" + formatoPrecio((total21(10999.00)), "ARS"), inline: true }
        )
        
      return interaction.reply({ embeds: [embed] });

}

export default gamepass
