
import Discord from "discord.js"
import axios from "axios"
import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js'
const { total30, total51, total21 } = require("../../functions/impuestos"); //Impuestos
const { formatoPrecio } = require('../../functions/formato')
import { embedError } from "../../functions/embedError"

const youtube = async (client: any, interaction: Discord.CommandInteraction) => {
    const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
    .setTitle("YouTube Premium")
    .setURL("https://www.youtube.com/premium")
    .setDescription("Los precios de YouTube Premium en Argentina con impuestos son los siguientes:")
    .setColor('#ff0000')
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903357207310127185/youtube.png")
    .addFields(
      { name: "YouTube Music:", value: "ARS" + formatoPrecio(total51(2499), "ARS"), inline: true },
      { name: "YouTube Premium Individual:", value: "ARS" + formatoPrecio(total51(3399), "ARS"), inline: true },
      { name: "YouTube Premium Familiar:", value: "ARS" + formatoPrecio(total51(6799), "ARS"), inline: true }
    )

  return interaction.reply({ embeds: [embed] });
}

export default youtube
