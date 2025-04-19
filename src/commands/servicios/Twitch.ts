
import Discord from "discord.js"
import axios from "axios"
import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js'
const {  total51 } = require("../../functions/impuestos"); //Impuestos
const { formatoPrecio } = require('../../functions/formato')

const twitch = async (client: any, interaction: any) => {

        const [oficial] = await Promise.all([
          axios.get('https://api.bluelytics.com.ar/v2/latest'),
        ]);
        const embed1: Discord.EmbedBuilder = new Discord.EmbedBuilder()
          .setTitle("Siscripciones de Twitch")
          .setURL("https://www.twitch.tv/")
          .setDescription("Los precios de las suscripciones a Twitch en Argentina son los siguientes: ")
          .setColor('#9246ff')
          .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858126355091030036/twitch_icon_146081.png")
          .addFields(
            { name: "Suscripción de nivel 1", value: `ARS$ ${formatoPrecio(total51(1.99 * oficial.data['oficial']['value_sell']), "ARS")}`, inline: true },
            { name: "Suscripción de nivel 2", value: `ARS$ ${formatoPrecio(total51(3.99 * oficial.data['oficial']['value_sell']), "ARS")}`, inline: true },
            { name: "Suscripción de nivel 3", value: `ARS$ ${formatoPrecio(total51(9.99 * oficial.data['oficial']['value_sell']), "ARS")}`, inline: true }
          )


        const embed2: Discord.EmbedBuilder = new Discord.EmbedBuilder()
          .setTitle("Bits de Twitch")
          .setDescription("Los precios de los bits de Twitch en Argentina son los siguientes: ")
          .setColor('#9246ff')
          .setURL("https://www.twitch.tv/")
          .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858126355091030036/twitch_icon_146081.png")
          .addFields(
            { name: "100 bits", value: `ARS$ ${formatoPrecio(total51(1.40 * oficial.data['oficial']['value_sell']), "ARS")}`, inline: true },
            { name: "300 bits", value: `ARS$ ${formatoPrecio(total51(3.00 * oficial.data['oficial']['value_sell']), "ARS")}`, inline: true },
            { name: "500 bits", value: `ARS$ ${formatoPrecio(total51(7.00 * oficial.data['oficial']['value_sell']), "ARS")}`, inline: true },
            { name: "1.500 bits", value: `ARS$ ${formatoPrecio(total51(19.95 * oficial.data['oficial']['value_sell']), "ARS")}`, inline: true },
            { name: "5.000 bits", value: `ARS$ ${formatoPrecio(total51(64.40 * oficial.data['oficial']['value_sell']), "ARS")}`, inline: true },
            { name: "10.000 bits", value: `ARS$ ${formatoPrecio(total51(126.00 * oficial.data['oficial']['value_sell']), "ARS")}`, inline: true },
            { name: "25.000 bits", value: `ARS$ ${formatoPrecio(total51(308.00 * oficial.data['oficial']['value_sell']), "ARS")}`, inline: true }
          )



        const row = new ActionRowBuilder()
          .addComponents(
            new ButtonBuilder()
              .setCustomId('suscripciones')
              .setLabel("Suscripciones")
              .setStyle(ButtonStyle.Success)
          ).addComponents(
            new ButtonBuilder()
              .setCustomId('bits')
              .setLabel("Bits")
              .setStyle(ButtonStyle.Primary)
          )

        interaction.reply({ embeds: [embed1], components: [row] });

        client.on('interactionCreate', interaction => {
          if (!interaction.isButton()) return;
        });


        const filter = i => i.customId;

        const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });

        collector.on('collect', async i => {
          if (i.customId === 'suscripciones') {
            await i.deferUpdate()
            await i.editReply({ embeds: [embed1], components: [row] });
          }
          if (i.customId === 'bits') {

            await i.deferUpdate();
            await i.editReply({ embeds: [embed2], components: [row] });
          }

        });
      

}

export default twitch
