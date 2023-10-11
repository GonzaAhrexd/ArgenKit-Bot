
import Discord from "discord.js"
const {diasHasta} = require('../functions/diasHasta')
import { ActionRowBuilder, ButtonBuilder } from 'discord.js'
import { ButtonStyle } from 'discord.js'
module.exports = {
    data: new Discord.SlashCommandBuilder()
    .setName("elecciones")
    .setDescription("Muestra cuántos días faltan para las siguientes elecciones en Argentina"),

    async run(client, interaction){
      const embed:Discord.EmbedBuilder = new Discord.EmbedBuilder()
        .setTitle("Tiempo hasta las siguientes elecciones y cambios de gobierno")
        .setColor("#0ECFE1")
        .setDescription("Además de presidente y vice, en las elecciones generales de octubre también se elegirán diputados y senadores nacionales ")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/825432782360150047/votar_1.png")
        .addFields(
          { name: "Elecciones presidenciales 2023 (22/10/2023)" ,value:  "Faltan " + diasHasta(new Date("2023-10-22")) + " días para las siguientes elecciones ejecutivas "},
          { name: "Segunda vuelta presidencial 2023 (19/11/2023)" ,value:  "Faltan " + diasHasta(new Date("2023-11-19")) + " días para la segunda vuelta de las elecciones ejecutivas "},
          { name: "Cambio presidencial 2023 (10/12/2023)", value: "Faltan " + diasHasta(new Date("2023-12-10")) + " días para el siguiente cambio presidencial "})
      const embed2:Discord.EmbedBuilder =  new Discord.EmbedBuilder()
       .setTitle("Candidatos presidenciales")
       .setColor("#0ECFE1")
       .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/825432782360150047/votar_1.png")
       .addFields(
        { name: "🟣 La Libertad Avanza", value: "Javier Milei/Victoria Villaruel"},
        { name: "🟡 Juntos por el Cambio", value: "Patricia Bullrich/Luis Petri" },
        { name: "🔵 Unión por la Patria", value: "Sergio Massa/Agustin Rossi" },
        { name: "⚫ Hacemos por Nuestro País", value: "Juan Schiareti/Florencio Randazzo"},
        { name: "🔴 Frente de Izquierda y de Trabajadores - Unidad", value: "Myriam Bregman/Nicolás del Caño" },
      )

        const row = new ActionRowBuilder()
        .addComponents(
          new ButtonBuilder()
            .setCustomId("elecciones")
            .setLabel("ELECCIONES")
            .setStyle(ButtonStyle.Success)
        )
        .addComponents(
          new ButtonBuilder()
            .setCustomId("candidatos")
            .setLabel("CANDIDATOS")
            .setStyle(ButtonStyle.Primary)
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