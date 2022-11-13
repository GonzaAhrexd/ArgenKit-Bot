const {SlashCommandBuilder} = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")
const { MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js');
const paginationEmbed = require('discordjs-button-pagination'); //Botones
module.exports = {
    data: new SlashCommandBuilder()
    .setName("futbol")
    .setDescription("Muestra cuántos días faltan para  los siguientes partidos de la selección"),

    async run(client, interaction){
        let restante = 365 * 1; //Años que faltan para el año de la elección (2023)
        let restanteL = 318; //Día  14/11  en el año (365)
        let restanteCL = 344; //Día 10/12  en el año (365)
        let currentDay; //Sumar los meses
        let fecha; //Día actual
        fecha = new Date();
        //message.channel.send(fecha.toString());
        if (fecha.toString()[4] == "J" && fecha.toString()[5] == "a" && fecha.toString()[6] == "n") {
          currentDay = 0
        }
        if (fecha.toString()[4] == "F" && fecha.toString()[5] == "e" && fecha.toString()[6] == "b") {
          currentDay = 31
        }
        if (fecha.toString()[4] == "M" && fecha.toString()[5] == "a" && fecha.toString()[6] == "r") {
          currentDay = 59
        }
        if (fecha.toString()[4] == "A" && fecha.toString()[5] == "p" && fecha.toString()[6] == "r") {
          currentDay = 90
        }
        if (fecha.toString()[4] == "M" && fecha.toString()[5] == "a" && fecha.toString()[6] == "y") {
    
          currentDay = 120
        }
        if (fecha.toString()[4] == "J" && fecha.toString()[5] == "u" && fecha.toString()[6] == "n") {
    
          currentDay = 151
        }
        if (fecha.toString()[4] == "J" && fecha.toString()[5] == "u" && fecha.toString()[6] == "l") {
    
          currentDay = 181
        }
        if (fecha.toString()[4] == "A" && fecha.toString()[5] == "u" && fecha.toString()[6] == "g") {
    
          currentDay = 212
        }
        if (fecha.toString()[4] == "S" && fecha.toString()[5] == "e" && fecha.toString()[6] == "p") {
    
          currentDay = 249
        }
        if (fecha.toString()[4] == "O" && fecha.toString()[5] == "c" && fecha.toString()[6] == "t") {
    
          currentDay = 273
        }
        if (fecha.toString()[4] == "N" && fecha.toString()[5] == "o" && fecha.toString()[6] == "v") {
    
          currentDay = 304
        }
        if (fecha.toString()[4] == "D" && fecha.toString()[5] == "e" && fecha.toString()[6] == "c") {
    
          currentDay = 334
        }
        var day = 0;
    
        day = fecha.toString()[8] + fecha.toString()[9]; //Día actual
    
        day2 = parseInt(day) //Convertir a número
    
        currentDay = currentDay + day2 //Día actual en número sumando mes y día
    
        restante = restante + (344 - currentDay)
    
        restanteL = restanteL - currentDay
    
        restanteCL = restanteCL - currentDay
    
    
        const embed = new Discord.MessageEmbed()
          .setTitle("Tiempo hasta los siguientes partidos de la selección Argentina")
          .setColor("#7eb2fa")
          .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929121012275093524/camiseta-de-futbol.png")
          .addField("  :flag_ar: vs :flag_sa: \n(22/11/2022) ", "Faltan " + (326 - currentDay) + " días ", true)
          .addField("  :flag_ar: vs :flag_mx: \n(26/11/2022) ", "Faltan " + (330 - currentDay) + " días ", true)
          .addField("  :flag_ar: vs :flag_pl: \n(30/11/2022) ", "Faltan " + (334 - currentDay) + " días ", true)
    
        return interaction.reply({ embeds: [embed] });

    }
}