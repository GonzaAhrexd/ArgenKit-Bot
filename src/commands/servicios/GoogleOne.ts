
import Discord from "discord.js"
import axios from "axios"
import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js'
const { total30 } = require("../../functions/impuestos"); //Impuestos
const { formatoPrecio } = require('../../functions/formato')

const googleone = async (client: any, interaction: any) => {

        const [oficial] = await Promise.all([
          axios.get('https://api.bluelytics.com.ar/v2/latest'),
        ]);
        const embed1: Discord.EmbedBuilder = new Discord.EmbedBuilder()
          .setTitle("Google One")
          .setDescription("Los precios de Google One mensual en Argentina son los siguientes: \n Debitando con dólares se puede obtener un precio más bajo.")
          .setColor('#f1bb1a')
          .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913859037764911174/icons8-google-one-500.png")
          .addFields(
            { name: "Plan de 100GB (USD$ 1,99)", value: `ARS${formatoPrecio(total30(1.99 * oficial.data['oficial']['value_sell']), "ARS")}`, inline: true },
            { name: "Plan de 200GB (USD$ 2,99)", value: `ARS${formatoPrecio(total30(2.99 * oficial.data['oficial']['value_sell']), "ARS")}`, inline: true },
            { name: "Plan de 1TB  (USD$ 9,99)", value: `ARS${formatoPrecio(total30(9.99 * oficial.data['oficial']['value_sell']), "ARS")}`, inline: true },
            { name: "Plan de 100GB Anual (USD$ 19,99)", value: `ARS${formatoPrecio(total30(19.99 * oficial.data['oficial']['value_sell']), "ARS")}`, inline: true },
            { name: "Plan de 200GB Anual (USD$ 29,99)", value: `ARS${formatoPrecio(total30(29.99 * oficial.data['oficial']['value_sell']), "ARS")}`, inline: true },
            { name: "Plan de 1TB Anual (USD$ 99,99)", value: `ARS${formatoPrecio(total30(99.99 * oficial.data['oficial']['value_sell']), "ARS")}`, inline: true }
       
          )

        const embed2: Discord.EmbedBuilder = new Discord.EmbedBuilder()
          .setTitle("Google One")
          .setDescription("Los precios de Google One anual en Argentina son los siguientes:\n Debitando con dólares se puede obtener un precio más bajo.")
          .setColor('#f1bb1a')
          .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913859037764911174/icons8-google-one-500.png")
          .addFields(
            { name: "Plan de 100GB (USD$ 1,99)", value: `ARS${formatoPrecio((1.99 * oficial.data['oficial']['value_sell']), "ARS")}`, inline: true },
            { name: "Plan de 200GB (USD$ 2,99)", value: `ARS${formatoPrecio((2.99 * oficial.data['oficial']['value_sell']), "ARS")}`, inline: true },
            { name: "Plan de 1TB (USD$ 9,99)", value: `ARS${formatoPrecio((9.99 * oficial.data['oficial']['value_sell']), "ARS")}`, inline: true },
            { name: "Plan de 100GB Anual (USD$ 19,99)", value: `ARS${formatoPrecio((19.99 * oficial.data['oficial']['value_sell']), "ARS")}`, inline: true },
            { name: "Plan de 200GB Anual (USD$ 29,99)", value: `ARS${formatoPrecio((29.99 * oficial.data['oficial']['value_sell']), "ARS")}`, inline: true },
            { name: "Plan de 1TB Anual (USD$ 99,99)", value: `ARS${formatoPrecio((99.99 * oficial.data['oficial']['value_sell']), "ARS")}`, inline: true }
          )


        const row = new ActionRowBuilder()
          .addComponents(
            new ButtonBuilder()
              .setCustomId('percepciones')
              .setLabel("Percepciones")
              .setStyle(ButtonStyle.Success)
          ).addComponents(
            new ButtonBuilder()
              .setCustomId('sinpercepciones')
              .setLabel("Sin percepciones")
              .setStyle(ButtonStyle.Primary)
          )

        await interaction.editReply({ embeds: [embed1], components: [row] });

        client.on('interactionCreate', interaction => {
          if (!interaction.isButton()) return;
        });


        const filter = i => i.customId;

        const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });

        collector.on('collect', async i => {
          if (i.customId === 'percepciones') {
            await i.deferUpdate()
            await i.editReply({ embeds: [embed1], components: [row] });
          }
          if (i.customId === 'sinpercepciones') {

            await i.deferUpdate();
            await i.editReply({ embeds: [embed2], components: [row] });
          }

        });
 
}

export default googleone
