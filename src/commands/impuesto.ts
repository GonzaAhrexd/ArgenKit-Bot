
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
        porcentaje == 59 ? { name: "I.V.A (21%) ", value: formatoPrecio(impuestos.iva(imp), "ARS"), inline: true } : null,
        { name: `P.A.I.S ${porcentaje == 59 ? "(8%)" : "(30%)"}`, value:  formatoPrecio((porcentaje == 59 ? impuestos.pais8(imp) : impuestos.pais30(imp)), "ARS"), inline: true },
        { name: "Adelanto de Ganancias (30%)", value:  formatoPrecio(impuestos.ganancias(imp), "ARS"), inline: true },
        { name: `Total ${porcentaje === 59 ? "(59%)" : ""} ${porcentaje === 60 ? "(60%)" : ""} `, value: formatoPrecio((porcentaje == 59 && impuestos.total59(imp)) || (porcentaje == 60 && impuestos.total60(imp)), "ARS") }
      ]
      arrayEmbed = arrayEmbed.filter(Boolean);
      embed.setTitle(`Impuestos a la compra al exterior (${porcentaje}%)`)
        .setDescription("Se puede aplicar más impuestos dependiendo la provincia")
        .setColor("#d6f2fc")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1179850115163373568/taxes.png?ex=657b480c&is=6568d30c&hm=0fc5a87affc32a471bd77d05f31d35a3a782dfb3f48d44a14d1e50d34fb9b2c8&")
      embed.addFields(arrayEmbed);
    }
    //IVA + PAIS + GANANCIAS + BIENES PERSONALES
    const embed1: Discord.EmbedBuilder = new Discord.EmbedBuilder()
    llenarEmbed(embed1, 59)
    ////PAIS + GANANCIA + BIENES PERSONALES
    const embed2: Discord.EmbedBuilder = new Discord.EmbedBuilder()
    embed2.setDescription("Cuando no se aplica IVA, el impuesto P.A.I.S pasa a ser del  30% ")
    llenarEmbed(embed2, 60)
    //PAIS + GANANCIA + BIENES PERSONALES
    
    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('tarjeta')
          .setLabel("📄59%")
          .setStyle(ButtonStyle.Success)
      ).addComponents(
        new ButtonBuilder()
          .setCustomId('solidario')
          .setLabel("📄60%")
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