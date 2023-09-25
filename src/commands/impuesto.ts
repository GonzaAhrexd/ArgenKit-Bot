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

    function defaultEmbed(embed: Discord.MessageEmbed, porcentaje: number): void {
      embed.setTitle(`Impuestos a la compra al exterior (${porcentaje}%)`)
        .setDescription("Se puede aplicar más impuestos dependiendo la provincia")
        .setColor("#d6f2fc")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903113482835197972/taxes.png")
    }

    function llenarEmbed(embed, variante) {
      let arrayEmbed = [
        { name: "Monto original", value: "$" + currencyFormatter.format(imp, { locale: 'es-ES', code: ' ' }) },
        variante == 1 ? { name: "I.V.A (21%) ", value: "$" + currencyFormatter.format(impuestos.iva(imp), { locale: 'es-ES', code: ' ' }), inline: true } : null,
        { name: `P.A.I.S ${variante == 1 ? "(8%)" : "(30%)"}`, value: "$" + currencyFormatter.format((variante == 1 ? impuestos.pais8(imp) : impuestos.pais30(imp)), { locale: 'es-ES', code: ' ' }), inline: true },
        { name: "Adelanto de Ganancias (45%)", value: "$" + currencyFormatter.format(impuestos.ganancias(imp), { locale: 'es-ES', code: ' ' }), inline: true },
        variante === 3 ?   { name: "Cuenta de Bienes Personales (5%)", value: "$" + currencyFormatter.format(impuestos.bienes(imp), { locale: 'es-ES', code: ' ' }), inline: true } : null,
        { name: `Total ${variante === 1 ? "(74%)" : ""} ${variante === 2 ? "(75%)" : ""} ${variante === 3 ? "(80%)" : ""}`, value: "$" + currencyFormatter.format((variante == 1 && impuestos.total74(imp)) || (variante == 2 && impuestos.total75(imp)) || (variante == 3 && impuestos.total80(imp)), { locale: 'es-ES', code: ' ' }) }
      ]
      arrayEmbed = arrayEmbed.filter(Boolean);
      embed.addFields(arrayEmbed);
    }
    //IVA + PAIS + GANANCIAS
    const embed1: Discord.MessageEmbed = new Discord.MessageEmbed()
    defaultEmbed(embed1, 74)
    llenarEmbed(embed1, 1)
    //PAIS + GANANCIAS
    const embed2: Discord.MessageEmbed = new Discord.MessageEmbed()
    defaultEmbed(embed2, 75)
    embed2.setDescription("Cuando no se aplica IVA, el impuesto P.A.I.S pasa a ser del  30% ")
    llenarEmbed(embed2, 2)
    //PAIS + GANANCIA + BIENES PERSONALES
    const embed3 = new Discord.MessageEmbed()
    defaultEmbed(embed3, 80)
    embed3.setDescription("Cuando el monto supera los 300 dólares, se agrega 5% de Cuenta de Bienes Personales")
    llenarEmbed(embed3,3)
  
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
          .setLabel("📄80%")
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
        await i.editReply({ embeds: [embed1], components: [row] });
      }
      if (i.customId === 'solidario') {

        await i.deferUpdate();
        await i.editReply({ embeds: [embed2], components: [row] });
      }
      if (i.customId === 'qatar') {
        await i.deferUpdate()
        await i.editReply({ embeds: [embed3], components: [row] });
      }
    });


  }

}