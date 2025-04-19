
import Discord from "discord.js"
const { formatoPrecio } = require('../../functions/formato')

const disney = async (client: any,interaction: Discord.CommandInteraction) => {
 const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
        .setTitle("Disney+")
        .setURL("https://www.disneyplus.com/home")
        .setDescription("Debido a que Disney factura en Argentina, este no cobra impuestos internacionales.")
        .setColor('#3fa5dc')
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903852192929288213/icons8-disney-plus-480.png")
        .addFields(
          { name: "Estándar:", value: `ARS ${formatoPrecio(10699, "ARS")}`, inline: true },
          { name: "Estándar Anual", value: `ARS ${formatoPrecio(89499, "ARS")}`, inline: true },
          { name: "Miembro Extra Estándar", value: `ARS ${formatoPrecio(6419, "ARS")}`, inline: true },
          { name: "Premium: ", value: `ARS ${formatoPrecio(15299, "ARS")}`, inline: true },
          { name: "Premium Anual: ", value: `ARS ${formatoPrecio(128499, "ARS")}`, inline: true },
          { name: "Miembro Extra Premium", value: `ARS ${formatoPrecio(7649, "ARS")}`, inline: true },
          
        )
      return interaction.reply({ embeds: [embed] });
}

export default disney
