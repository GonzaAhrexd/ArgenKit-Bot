
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
    let imp = interaction.options.getNumber('monto')

    function llenarEmbed(embed, porcentaje) {
      let arrayEmbed = [
        { name: "Monto original", value:  formatoPrecio(imp, "ARS") },
        porcentaje == 51 ? { name: "I.V.A (21%) ", value: formatoPrecio(impuestos.iva(imp), "ARS"), inline: true } : null,
        { name: "Percepción de Ganancias (30%)", value:  formatoPrecio(impuestos.ganancias(imp), "ARS"), inline: true },
        { name: `Total ${porcentaje === 51 ? "(51%)" : ""} ${porcentaje === 30 ? "(30%)" : ""} `, value: formatoPrecio((porcentaje == 51 && impuestos.total51(imp)) || (porcentaje == 30 && impuestos.total30(imp)), "ARS") }
      ]
      arrayEmbed = arrayEmbed.filter(Boolean);
      embed.setTitle(`Impuestos a la compra al exterior (${porcentaje}%)`)
        .setDescription(`Se puede aplicar más impuestos dependiendo la provincia ${porcentaje === 30 && "\n Para estos casos, se recomienda realizar el pago utilizando Dólar MEP"}`)
        .setColor("#d6f2fc")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1179850115163373568/taxes.png?ex=657b480c&is=6568d30c&hm=0fc5a87affc32a471bd77d05f31d35a3a782dfb3f48d44a14d1e50d34fb9b2c8&")
      embed.addFields(arrayEmbed);
    }
    //IVA + PAIS + GANANCIAS + BIENES PERSONALES
    const embed1: Discord.EmbedBuilder = new Discord.EmbedBuilder()
    llenarEmbed(embed1, 51)
    ////PAIS + GANANCIA + BIENES PERSONALES
    const embed2: Discord.EmbedBuilder = new Discord.EmbedBuilder()
    llenarEmbed(embed2, 30)
    //PAIS + GANANCIA + BIENES PERSONALES
    
    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('tarjeta')
          .setLabel("📄51%")
          .setStyle(ButtonStyle.Success)
      ).addComponents(
        new ButtonBuilder()
          .setCustomId('solidario')
          .setLabel("📄30%")
          .setStyle(ButtonStyle.Primary)
      )
    

    await interaction.reply({ embeds: [embed1], components: [row] });

    client.on('interactionCreate', interaction => {
      if (!interaction.isButton()) return;
    });

    const filter = i => i.user.id === interaction.user.id;
    const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });

    collector.on('collect', async i => {
      if (i.customId === 'tarjeta') {
        await i.deferUpdate()
        await i.editReply({ embeds: [embed1], components: [row] });
      }
      if (i.customId === 'solidario') {
        await i.deferUpdate();
        await i.editReply({ embeds: [embed2], components: [row] });
      }
 
    });
  }
}