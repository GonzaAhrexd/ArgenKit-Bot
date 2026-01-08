
import Discord from "discord.js"
import { getProximoFeriadoData } from "../api/argentinaDatos"
const { diasHasta } = require('../functions/diasHasta')
const wait = require('node:timers/promises').setTimeout

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName("feriado")
        .setDescription("Muestra cuántos días faltan para el siguiente feriado en Argentina"),

    async run(client, interaction) {
        await interaction.deferReply()

        try {
            const proximoFeriado = await getProximoFeriadoData()  
            const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                .setTitle("Días hasta el siguiente feriado")
                .setColor("#bfff00")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1297913530036785225/vacaciones.png?ex=6717a7ab&is=6716562b&hm=e9eb6ddf3753075e130547849e651388f985c8a55de45e3bdda205477c99bd1c&")
                .addFields(
                    { name: `${proximoFeriado?.nombre} (${proximoFeriado?.tipo.charAt(0).toUpperCase() + proximoFeriado?.tipo.slice(1)})`, value: `Faltan ${diasHasta(new Date(proximoFeriado?.fecha))} días para el próximo feriado` }
                )
            await wait(3000)
            await interaction.editReply({ embeds: [embed] });

        } catch (error) {
            console.log(error)
            return interaction.reply("No se pudo obtener la información")
        }
    }

}