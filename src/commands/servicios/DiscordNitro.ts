
import Discord from "discord.js"
import axios from "axios"
import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js'
const { total30 } = require("../../functions/impuestos"); //Impuestos
const { formatoPrecio } = require('../../functions/formato')
import { embedError } from "../../functions/embedError"


const discordnitro = async (client: any, interaction: any) => {
        const [oficial] = await Promise.all([
          axios.get('https://api.bluelytics.com.ar/v2/latest'),
        ])

      const embed1: Discord.EmbedBuilder = new Discord.EmbedBuilder()
        .setTitle("Discord Nitro")
        .setDescription("Los precios de Discord Nitro en Argentina son los siguientes: \n Debitando en dólares se puede evitar la percepción de ganancias (30%)")
        .setColor('#8aa9fa')
        .setThumbnail("https://gitdab.com/distok/apkfuckery/raw/commit/ceffadc1723d227e61ee1001a624979fd9c783bb/com.discord/res/drawable-xxxhdpi/img_wumpus_jetpack.png")
        .addFields(
          {
            name: "Discord Nitro Basic Mensual",
            value: `ARS${formatoPrecio(total30(1.91 * oficial.data['oficial']['value_sell']), "ARS")}`,
            inline: true
          },
          {
            name: "Discord Nitro Mensual",
            value: `ARS${formatoPrecio(total30(5.15 * oficial.data['oficial']['value_sell']), "ARS")}`,
            inline: true
          },
          {
            name: "Discord Nitro Basic Anual",
            value: `ARS${formatoPrecio(total30(14.76 * oficial.data['oficial']['value_sell']), "ARS")}`,
            inline: true
          },
          {
            name: "Discord Nitro Anual",
            value: `ARS${formatoPrecio(total30(51.48 * oficial.data['oficial']['value_sell']), "ARS")}`,
            inline: true
          }
        )

        const embed2: Discord.EmbedBuilder = new Discord.EmbedBuilder()
        .setTitle("Discord Nitro")
        .setDescription("Los precios de Discord Nitro en Argentina son los siguientes: \n Debitando en dólares se puede evitar la percepción de ganancias (30%)")
        .setColor('#8aa9fa')
        .setThumbnail("https://gitdab.com/distok/apkfuckery/raw/commit/ceffadc1723d227e61ee1001a624979fd9c783bb/com.discord/res/drawable-xxxhdpi/img_wumpus_jetpack.png")
        .addFields(
          {
            name: "Discord Nitro Basic Mensual",
            value: `ARS${formatoPrecio(1.91 * oficial.data['oficial']['value_sell'], "ARS")}`,
            inline: true
          },
          {
            name: "Discord Nitro Mensual",
            value: `ARS${formatoPrecio(5.15 * oficial.data['oficial']['value_sell'], "ARS")}`,
            inline: true
          },
          {
            name: "Discord Nitro Basic Anual",
            value: `ARS${formatoPrecio(14.76 * oficial.data['oficial']['value_sell'], "ARS")}`,
            inline: true
          },
          {
            name: "Discord Nitro Anual",
            value: `ARS${formatoPrecio(51.48 * oficial.data['oficial']['value_sell'], "ARS")}`,
            inline: true
          }
        )

        const row = new ActionRowBuilder()
        .addComponents(
          new ButtonBuilder()
            .setCustomId('percepcion')
            .setLabel("Percepción")
            .setStyle(ButtonStyle.Success)
        ).addComponents(
          new ButtonBuilder()
            .setCustomId('sinpercepcion')
            .setLabel("Sin percepción")
            .setStyle(ButtonStyle.Primary)
        )

      await interaction.editReply({ embeds: [embed1], components: [row] });

      client.on('interactionCreate', interaction => {
        if (!interaction.isButton()) return;
      });


      const filter = i => i.customId;

      const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });

      collector.on('collect', async i => {
        if (i.customId === 'percepcion') {
          await i.deferUpdate()
          await i.editReply({ embeds: [embed1], components: [row] });
        }
        if (i.customId === 'sinpercepcion') {

          await i.deferUpdate();
          await i.editReply({ embeds: [embed2], components: [row] });
        }

      });


           await interaction.editReply({ embeds: [embed1] });
      
}

export default discordnitro
