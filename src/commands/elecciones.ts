//@ts-ignore
const {SlashCommandBuilder} = require("@discordjs/builders")
//@ts-ignore
const { MessageEmbed } = require("discord.js")
//@ts-ignore
const Discord = require("discord.js")
//@ts-ignore
const {diasHasta} = require('../functions/diasHasta')
module.exports = {
    data: new SlashCommandBuilder()
    .setName("elecciones")
    .setDescription("Muestra cuántos días faltan para las siguientes elecciones en Argentina"),

    async run(client, interaction){
      const embed = new Discord.MessageEmbed()
        .setTitle("Tiempo hasta las siguientes elecciones y cambios de gobierno")
        .setColor("0ECFE1")
        .setDescription("Además de presidente y vice, en las elecciones generales de octubre también se elegirán 130 diputados nacionales, la mitad de la Cámara baja, y 24 senadores nacionales, un tercio de la Cámara alta, para renovar parcialmente el Congreso. ")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/825432782360150047/votar_1.png")
        .addField("Elecciones presidenciales 2023 (13/08/2023) ", "Faltan " + diasHasta(new Date("2023-08-13")) + " días para las siguientes elecciones Primarias, Abiertas, Simultáneas y Obligatorias (PASO) ")
        .addField("Elecciones presidenciales 2023 (22/10/2023) ", "Faltan " + diasHasta(new Date("2023-10-22")) + " días para las siguientes elecciones ejecutivas ")
        .addField("Cambio presidencial 2023 (10/12/2023) ", "Faltan " + diasHasta(new Date("2023-12-10")) + " días para el siguiente cambio presidencial ")
  
      return interaction.reply({ embeds: [embed] });
  }
  
}