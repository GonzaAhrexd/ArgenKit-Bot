import {SlashCommandBuilder} from "@discordjs/builders"
import Discord from "discord.js"
const {diasHasta} = require('../functions/diasHasta')
import { MessageActionRow, MessageButton } from 'discord.js'
module.exports = {
    data: new SlashCommandBuilder()
    .setName("elecciones")
    .setDescription("Muestra cuántos días faltan para las siguientes elecciones en Argentina"),

    async run(client, interaction){
      const embed:Discord.MessageEmbed = new Discord.MessageEmbed()
        .setTitle("Tiempo hasta las siguientes elecciones y cambios de gobierno")
        .setColor("#0ECFE1")
        .setDescription("Además de presidente y vice, en las elecciones generales de octubre también se elegirán diputados y senadores nacionales ")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/825432782360150047/votar_1.png")
        .addFields(
          { name: "PASO Presidencial 2023 (13/08/2023)",value: "Faltan " + diasHasta(new Date("2023-08-13")) + " días para las siguientes elecciones Primarias, Abiertas, Simultáneas y Obligatorias (PASO) "} ,
          { name: "Elecciones presidenciales 2023 (22/10/2023)" ,value:  "Faltan " + diasHasta(new Date("2023-10-22")) + " días para las siguientes elecciones ejecutivas "},
          { name: "Segunda vuelta presidencial 2023 (19/11/2023)" ,value:  "Faltan " + diasHasta(new Date("2023-11-19")) + " días para la segunda vuelta de las elecciones ejecutivas "},
          { name: "Cambio presidencial 2023 (10/12/2023)", value: "Faltan " + diasHasta(new Date("2023-12-10")) + " días para el siguiente cambio presidencial "})
      const embed2:Discord.MessageEmbed =  new Discord.MessageEmbed()
       .setTitle("Candidatos presidenciales")
       .setColor("#0ECFE1")
       .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/825432782360150047/votar_1.png")
       .addFields(
        { name: "🔵 Unión por la Patria", value: "Sergio Massa/Agustin Rossi\nJuan Grabois/Paula Abal Medina",inline: true },
        { name: "🟡 Juntos por el Cambio", value: "Patricia Bullrich/Luis Petri\nHoracio Rodriguez Larreta/Gerardo Morales",inline: true },
        { name: "🟣 La Libertad Avanza", value: "Javier Milei/Victoria Villaruel",inline: true },
        { name: "⚫ Hacemos por Nuestro País", value: "Juan Schiareti/Florencio Randazzo",inline: true },
        { name: "🔴 Frente de Izquierda y de Trabajadores - Unidad", value: "Myriam Bregman/Nicolás del Caño\nGabriel Solano/Vilma Ripoll",inline: true },
        { name: "⚪ Principios y Valores por tierra, techo y trabajo", value: "Guillermo Moreno/Leonardo Fabre",inline: true },
        { name: "🟠 Frente Liber.AR", value: "Julio Bárbaro/Ramona Pucheta\nNazareno Etchepare/Fernando Lorenzo",inline: true },
        { name: "🟡 Movimiento Izquierda Juventud Dignidad", value: "Raul Castells/Adriana Reinoso\nSantiago Cúneo/Gustavo Barranco",inline: true },
        { name: "🔴 Movimiento Libres del Sur", value: "Jesus Escobar/Marianela Lezama Hid",inline: true },
        { name: "⚫ Política Obrera", value: "Marcelo Ramal/Patricia Urones",inline: true },
        { name: "🔴 Nuevo Movimiento al Socialismo", value: "Manuela Castañeira/Lucas Ruiz",inline: true },
        { name: "🟢 Frente Patriota Federal", value: "Cesar Biondini/Mariel Avendaño",inline: true },
        { name: "🔵 Paz, Democracia y Soberanía", value: "Mempo Giardinelli/Bárbara Solemou",inline: true },
        { name: "🟢 Movimiento de Transición Social", value: "Pablo Gobbi/Julio Archet",inline: true }
      )

        const row = new MessageActionRow()
        .addComponents(
          new MessageButton()
            .setCustomId("elecciones")
            .setLabel("ELECCIONES")
            .setStyle("SUCCESS")
        )
        .addComponents(
          new MessageButton()
            .setCustomId("candidatos")
            .setLabel("CANDIDATOS")
            .setStyle("PRIMARY")
        )

      interaction.reply({ embeds: [embed], components: [row]   });



      client.on('interactionCreate', interaction => {
        if (!interaction.isButton()) return;
      });

      const filter = i => i.user.id === interaction.user.id;

      const collector = interaction.channel.createMessageComponentCollector({ filter, time: 8000 });

      var actual = embed

      collector.on('collect', async i => {
        if (i.customId === 'elecciones') {
          await i.deferUpdate()
          await i.editReply({ embeds: [embed], components: [row] });
          actual = embed
        }
        if (i.customId === 'candidatos') {
          await i.deferUpdate();
          await i.editReply({ embeds: [embed2], components: [row] });
          actual = embed2
        }
      });

      collector.on("end", (collected, reason) => {
        if (reason === "time") {
          interaction.editReply({ embeds: [actual], components: [] });
        }
      })
      return interaction.reply({ embeds: [embed] });
  }
  
}