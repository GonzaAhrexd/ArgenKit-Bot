const {SlashCommandBuilder} = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")
const { MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js');
const paginationEmbed = require('discordjs-button-pagination'); //Botones
module.exports = {
    data: new SlashCommandBuilder()
    .setName("elecciones")
    .setDescription("Muestra cuántos días faltan para las siguientes elecciones en Argentina"),

    async run(client, interaction){
    var restante = 365 * 1; //Años que faltan para el año de la elección (2023)
    var restanteL = 318; //Día  14/11  en el año (365)
    var restanteCL = 344; //Día 10/12  en el año (365)
    let currentDay;
    let fecha;
    fecha = new Date();
    //message.channel.send(fecha.toString());
    console.log(fecha)
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

    day = fecha.toString()[8] + fecha.toString()[9];

    day2 = parseInt(day)



    currentDay = currentDay + day2

    restante = restante + (344 - currentDay)

    restanteL = restanteL - currentDay

    restanteCL = restanteCL - currentDay

    const embed = new Discord.MessageEmbed()
      .setTitle("Tiempo hasta las siguientes elecciones y cambios de gobierno")
      .setColor("0ECFE1")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/825432782360150047/votar_1.png")
      .addField("Elecciones presidenciales 2023 (27/10/2023) ", "Faltan " + (restante - 44) + " días para las siguientes elecciones ejecutivas ")
      .addField("Cambio presidencial 2023 (10/12/2023) ", "Faltan " + restante + " días para el siguiente cambio presidencial ")

    return interaction.reply({ embeds: [embed] });


    }
}