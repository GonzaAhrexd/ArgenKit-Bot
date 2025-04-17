
import Discord from "discord.js"
import { ActionRowBuilder, ButtonBuilder, StringSelectMenuBuilder } from 'discord.js'
const impuestos = require("../functions/impuestos.ts")
var currencyFormatter = require('currency-formatter') //Currency formatter
import { ButtonStyle } from 'discord.js'
import { formatoPrecio } from "../functions/formato"
module.exports = {
  data: new Discord.SlashCommandBuilder()
    .setName('impuesto')
    .setDescription('Calcula el impuesto a compras extranjeras con tarjeta')
    .addNumberOption(option =>
      option.setName('monto')
        .setDescription('Valor a calcular.')
        .setRequired(true)
    ),

    async run(client, interaction, options) {
      const monto = interaction.options.getNumber('monto');
    
      const config = {
        iva: {
          titulo: "Cálculo de IVA (21%)",
          descripcion: "Las plataformas de gaming no están alcanzadas por la percepción de ganancias. Solo tributan IVA",
          color: "#fcd6d6",
          campos: [
            { name: "I.V.A (21%)", value: formatoPrecio(impuestos.iva(monto), "ARS"), inline: true },
            { name: "Total con IVA", value: formatoPrecio(monto + impuestos.iva(monto), "ARS"), inline: true  }
          ]
        },
        ganancias: {
          titulo: "Impuestos al exterior (30%)",
          descripcion: "Se recomienda pagar con dólar en cuenta bancaria para evitar el 30% de percepción de ganancias.",
          color: "#d6f2fc",
          campos: [
            { name: "Percepción de Ganancias (30%)", value: formatoPrecio(impuestos.ganancias(monto), "ARS"), inline: true  },
            { name: "Total (30%)", value: formatoPrecio(impuestos.total30(monto), "ARS"), inline: true  }
          ]
        },
        servicios: {
          titulo: "Impuestos al exterior en servicios digitales (51%)",
          descripcion: "Algunos servicios digitales tributan IVA y percepción de ganancias.",
          color: "#d6f2fc",
          campos: [
            { name: "I.V.A (21%)", value: formatoPrecio(impuestos.iva(monto), "ARS"), inline: true },
            { name: "Percepción de Ganancias (30%)", value: formatoPrecio(impuestos.ganancias(monto), "ARS"), inline: true },
            { name: "Total (51%)", value: formatoPrecio(impuestos.total51(monto), "ARS"), inline: true   }
          ]
        }
      };
    
      const crearEmbed = (clave) => {
        const { titulo, descripcion, color, campos } = config[clave];
        return new Discord.EmbedBuilder()
          .setTitle(titulo)
          .setDescription(descripcion)
          .setColor(color)
          .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1179850115163373568/taxes.png")
          .addFields([{ name: "Monto original", value: formatoPrecio(monto, "ARS") }, ...campos]);
      };
    
      const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder().setCustomId('iva').setLabel("📄Solo IVA (21%)").setStyle(ButtonStyle.Success),
        new ButtonBuilder().setCustomId('ganancias').setLabel("📄Ganancias (30%)").setStyle(ButtonStyle.Primary),
        new ButtonBuilder().setCustomId('servicios').setLabel("📄IVA + Ganancias (51%)").setStyle(ButtonStyle.Danger)
      );
    
      await interaction.reply({ embeds: [crearEmbed('iva')], components: [row] });
    
      const filter = i => i.user.id === interaction.user.id;
      const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });
    
      collector.on('collect', async i => {
        await i.deferUpdate();
        if (config[i.customId]) {
          await i.editReply({ embeds: [crearEmbed(i.customId)], components: [row] });
        }
      });
    }
    
}