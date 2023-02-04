import { SlashCommandBuilder } from "@discordjs/builders"
import Discord from "discord.js"
import { MessageActionRow, MessageButton, MessageSelectMenu } from 'discord.js'
const impuestos = require("../functions/impuestos.ts")
var currencyFormatter = require('currency-formatter') //Currency formatter
module.exports = {
  data: new SlashCommandBuilder()
    .setName('impuesto')
    .setDescription('Calcula el impuesto a compras extranjeras con tarjeta')
    .addNumberOption(option =>
      option.setName('monto')
        .setDescription('Valor a calcular.')
        .setRequired(true)
    ),

  async run(client, interaction, options) {
    let imp = interaction.options.getNumber('monto')

    const embed1 = new Discord.MessageEmbed()
      .setTitle("Impuestos a la compra al exterior (74%)")
      .setDescription("Se puede aplicar más impuestos dependiendo la provincia")
      .setColor("#d6f2fc")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903113482835197972/taxes.png")
      .addField("Monto original", "$" + currencyFormatter.format(imp, { locale: 'es-ES', code: ' ' }))
      .addField("I.V.A (21%) ", "$" + currencyFormatter.format(impuestos.iva(imp), { locale: 'es-ES', code: ' ' }), true)
      .addField("P.A.I.S (8%) ", "$" + currencyFormatter.format(impuestos.pais8(imp), { locale: 'es-ES', code: ' ' }), true)
      .addField("Adelanto de Ganancias (45%)", "$" + currencyFormatter.format(impuestos.ganancias(imp), { locale: 'es-ES', code: ' ' }), true)
      .addField("Total (74%)", "$" + currencyFormatter.format(impuestos.total74(imp), { locale: 'es-ES', code: ' ' }))

    const embed2 = new Discord.MessageEmbed()
      .setTitle("Impuesto a la compra al exterior (75%)")
      .setDescription("Se puede aplicar más impuestos dependiendo la provincia")
      .setColor("#d6f2fc")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903113482835197972/taxes.png")
      .setDescription("Cuando no se aplica IVA, el impuesto P.A.I.S pasa a ser del  30% ")
      .addField("Monto original", "$" + currencyFormatter.format(imp, { locale: 'es-ES', code: ' ' }))
      .addField("P.A.I.S (30%) ", "$" + currencyFormatter.format(impuestos.pais30(imp), { locale: 'es-ES', code: ' ' }), true)
      .addField("Adelanto de Ganancias (45%)", "$" + currencyFormatter.format(impuestos.ganancias(imp), { locale: 'es-ES', code: ' ' }), true)
      .addField("Total (75%)", "$" + currencyFormatter.format(impuestos.total75(imp), { locale: 'es-ES', code: ' ' }))

      const embed3 = new Discord.MessageEmbed()
      .setTitle("Impuesto a la compra al exterior de más de 300 dólares (100%)")
      .setDescription("Se puede aplicar más impuestos dependiendo la provincia")
      .setColor("#d6f2fc")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903113482835197972/taxes.png")
      .setDescription("Cuando el monto supera los 300 dólares, se agrega 25% de Cuenta de Bienes Personales")
      .addField("Monto original", "$" + currencyFormatter.format(imp, { locale: 'es-ES', code: ' ' }))
      .addField("P.A.I.S (30%) ", "$" + currencyFormatter.format(impuestos.pais30(imp), { locale: 'es-ES', code: ' ' }), true)
      .addField("Adelanto de Ganancias (45%)", "$" + currencyFormatter.format(impuestos.ganancias(imp), { locale: 'es-ES', code: ' ' }), true)
      .addField("Cuenta de Bienes Personales (25%)", "$" + currencyFormatter.format(impuestos.bienes(imp), { locale: 'es-ES', code: ' ' }), true)
      .addField("Total (100%)", "$" + currencyFormatter.format(impuestos.total100(imp), { locale: 'es-ES', code: ' ' }))


    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('tarjeta')
          .setLabel("📄74%")
          .setStyle("SUCCESS")
      ).addComponents(
        new MessageButton()
        .setCustomId('solidario')
          .setLabel("📄75%")
          .setStyle("PRIMARY")
      )
      .addComponents(
        new MessageButton()
          .setCustomId('qatar')
          .setLabel("📄100%")
          .setStyle("DANGER")
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
        await i.editReply({ embeds: [embed1] , components: [row] });
      }
      if (i.customId === 'solidario') {
       
        await i.deferUpdate();
        await i.editReply({ embeds: [embed2] , components: [row] });
      }
      if (i.customId === 'qatar') {
        await i.deferUpdate()
        await i.editReply({ embeds: [embed3] , components: [row] });
      }
    });


  }

}