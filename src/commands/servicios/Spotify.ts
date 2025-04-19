
import Discord from "discord.js"
const { total51 } = require("../../functions/impuestos"); //Impuestos
const { formatoPrecio } = require('../../functions/formato')

const spotify = async (client: any, interaction: Discord.CommandInteraction) => {
    const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
    .setTitle("Spotify")
    .setURL("https://www.spotify.com/ar/premium/")
    .setDescription("Los precios de Spotify Premium en Argentina con impuestos son los siguientes: ")
    .setColor('#7ad684')
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903358342733389854/spotify_1.png")
    .addFields(
      { name: "Individual:", value: "ARS" + formatoPrecio((total51(2499)), "ARS"), inline: true },
      { name: "Dúo:", value: "ARS" + formatoPrecio((total51(3299)), "ARS"), inline: true },
      { name: "Familiar:", value: "ARS" + formatoPrecio((total51(4199)), "ARS"), inline: true },
      { name: "Estudiantes:", value: "ARS" + formatoPrecio((total51(1299)), "ARS"), inline: true }
    )

  return interaction.reply({ embeds: [embed] });

}

export default spotify
