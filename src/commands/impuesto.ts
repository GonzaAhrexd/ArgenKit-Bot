
import Discord from "discord.js"
import { ActionRowBuilder, ButtonBuilder, StringSelectMenuBuilder } from 'discord.js'
const impuestos = require("../functions/impuestos.ts")
var currencyFormatter = require('currency-formatter') //Currency formatter
import { ButtonStyle } from 'discord.js'
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
        { name: "Monto original", value: "$" + currencyFormatter.format(imp, { locale: 'es-ES', code: ' ' }) },
        porcentaje == 99 ? { name: "I.V.A (21%) ", value: "$" + currencyFormatter.format(impuestos.iva(imp), { locale: 'es-ES', code: ' ' }), inline: true } : null,
        { name: `P.A.I.S ${porcentaje == 99 ? "(8%)" : "(30%)"}`, value: "$" + currencyFormatter.format((porcentaje == 99 ? impuestos.pais8(imp) : impuestos.pais30(imp)), { locale: 'es-ES', code: ' ' }), inline: true },
        { name: "Adelanto de Ganancias (45%)", value: "$" + currencyFormatter.format(impuestos.ganancias(imp), { locale: 'es-ES', code: ' ' }), inline: true },
        porcentaje === 100 ?   { name: "Cuenta de Bienes Personales (25%)", value: "$" + currencyFormatter.format(impuestos.bienes(imp), { locale: 'es-ES', code: ' ' }), inline: true } : null,
        { name: `Total ${porcentaje === 99 ? "(99%)" : ""} ${porcentaje === 100 ? "(100%)" : ""} `, value: "$" + currencyFormatter.format((porcentaje == 99 && impuestos.total99(imp)) || (porcentaje == 100 && impuestos.total100(imp)), { locale: 'es-ES', code: ' ' }) }
      ]
      arrayEmbed = arrayEmbed.filter(Boolean);
      embed.setTitle(`Impuestos a la compra al exterior (${porcentaje}%)`)
        .setDescription("Se puede aplicar más impuestos dependiendo la provincia")
        .setColor("#d6f2fc")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903113482835197972/taxes.png")
      embed.addFields(arrayEmbed);
    }
    //IVA + PAIS + GANANCIAS + BIENES PERSONALES
    const embed1: Discord.EmbedBuilder = new Discord.EmbedBuilder()
    llenarEmbed(embed1, 99)
    ////PAIS + GANANCIA + BIENES PERSONALES
    const embed2: Discord.EmbedBuilder = new Discord.EmbedBuilder()
    embed2.setDescription("Cuando no se aplica IVA, el impuesto P.A.I.S pasa a ser del  30% ")
    llenarEmbed(embed2, 100)
    //PAIS + GANANCIA + BIENES PERSONALES
    
    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('tarjeta')
          .setLabel("📄99%")
          .setStyle(ButtonStyle.Success)
      ).addComponents(
        new ButtonBuilder()
          .setCustomId('solidario')
          .setLabel("📄100%")
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