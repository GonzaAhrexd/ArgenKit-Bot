import {SlashCommandBuilder} from "@discordjs/builders"
import Discord from "discord.js"
const {diasHasta} = require('../functions/diasHasta')
module.exports = {
    data: new SlashCommandBuilder()
    .setName("elecciones")
    .setDescription("Muestra cuántos días faltan para las siguientes elecciones en Argentina"),

    async run(client, interaction){
      const embed = new Discord.MessageEmbed()
        .setTitle("Tiempo hasta las siguientes elecciones y cambios de gobierno")
        .setColor("#0ECFE1")
        .setDescription("Además de presidente y vice, en las elecciones generales de octubre también se elegirán 130 diputados nacionales, la mitad de la Cámara baja, y 24 senadores nacionales, un tercio de la Cámara alta, para renovar parcialmente el Congreso. ")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/825432782360150047/votar_1.png")
        .addFields(
          { name: "Candidatos",value: "🔵Unión por la Patria\n *Sergio Massa/Agustin Rossi\n*Juan Grabois/Paula Abal Medina\n🟡Juntos por el Cambio:\n*Patricia Bullrich/Luis Petri\n*Horacio Rodriguez Larreta/Gerardo Morales\n🟣La Libertad Avanza\n*Javier Milei/Victoria Villaruel\n⚫Hacemos por Nuestro País\n*Juan Schiareti/Florencio Randazzo\n🔴Frente de Izquierda y de Trabajadores - Unidad\n*Myriam Bregman/Nicolás del Caño\n*Gabriel Solano/Vilma  Ripoll\n⚪Principios y Valores por tierra, techo y trabajo\n*Guillermo Moreno/Leonardo Fabre\n🟠Frente Liber.AR\n*Julio Bárbaro/Ramona Pucheta\n*Nazareno Etchepare/Fernando Lorenzo\n🟡Movimiento Izquierda Juventud Dignidad\n*Raul Castells/Adriana Reinoso\n*Santiago Cúneo/Gustavo Barranco\n🔴Movimiento Libres del Sur\n*Jesus Escobar/Marianela Lezama Hid\n⚫Política Obrera\n*Marcelo Ramal/Patricia Urones\n🔴Nuevo Movimiento al Socialismo\n*Manuela Castañeira/Lucas Ruiz\n🟢Frente Patriota Federal\n*Cesar Biondini/Mariel Avendaño\n🔵Paz, Democracia y Soberanía\n*Mempo Giardinelli/Bárbara Solemou\n🟢Movimiento de Transición Social\nPablo Gobbi/Julio Archet "} ,
          { name: "PASO Presidencial 2023 (13/08/2023)",value: "Faltan " + diasHasta(new Date("2023-08-13")) + " días para las siguientes elecciones Primarias, Abiertas, Simultáneas y Obligatorias (PASO) "} ,
          { name: "Elecciones presidenciales 2023 (22/10/2023)" ,value:  "Faltan " + diasHasta(new Date("2023-10-22")) + " días para las siguientes elecciones ejecutivas "},
          { name: "Segunda vuelta presidencial 2023 (19/11/2023)" ,value:  "Faltan " + diasHasta(new Date("2023-11-19")) + " días para la segunda vuelta de las elecciones ejecutivas "},
          { name: "Cambio presidencial 2023 (10/12/2023)", value: "Faltan " + diasHasta(new Date("2023-12-10")) + " días para el siguiente cambio presidencial "})

      return interaction.reply({ embeds: [embed] });
  }
  
}