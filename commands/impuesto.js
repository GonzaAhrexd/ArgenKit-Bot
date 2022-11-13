const {SlashCommandBuilder} = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")
const impuestos = require("../functions/impuestos.js")
var currencyFormatter = require('currency-formatter') //Currency formatter
const { MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js');
const paginationEmbed = require('discordjs-button-pagination'); //Botones
module.exports = {
    data: new SlashCommandBuilder()
    .setName('impuesto')
    .setDescription('Calcula el impuesto a compras online del 74% o 75%')
    .addNumberOption(option =>
              option.setName('monto')
              .setDescription('Valor a calcular.')
              .setRequired(true)   
    ),

    async run(client, interaction, options){
        let imp = interaction.options.getNumber('monto')

        const embed1 = new Discord.MessageEmbed()
        .setTitle("Impuestos a la compra Online (74%)")
        .setDescription("Se puede aplicar más impuestos dependiendo la provincia")
        .setColor("#d6f2fc")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903113482835197972/taxes.png")
        .addField("Monto original", "$" + currencyFormatter.format(imp, { locale: 'es-ES', code: ' ' }))
        .addField("I.V.A (21%) ", "$" + currencyFormatter.format(impuestos.iva(imp), { locale: 'es-ES', code: ' ' }), true)
        .addField("P.A.I.S (8%) ", "$" + currencyFormatter.format(impuestos.pais8(imp), { locale: 'es-ES', code: ' ' }), true)
        .addField("Adelanto de Ganancias (45%)", "$" + currencyFormatter.format(impuestos.ganancias(imp), { locale: 'es-ES', code: ' ' }), true)
        .addField("Total (74%)", "$" + currencyFormatter.format(impuestos.total74(imp), { locale: 'es-ES', code: ' ' }))
  
      const embed2 = new Discord.MessageEmbed()
        .setTitle("Impuesto a la compra Online (75%)")
        .setDescription("Se puede aplicar más impuestos dependiendo la provincia")
        .setColor("#d6f2fc")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903113482835197972/taxes.png")
        .setDescription("Cuando no se aplica IVA, el impuesto P.A.I.S pasa a ser del  30% ")
        .addField("Monto original", "$" + currencyFormatter.format(imp, { locale: 'es-ES', code: ' ' }))
        .addField("P.A.I.S (30%) ", "$" + currencyFormatter.format(impuestos.pais30(imp), { locale: 'es-ES', code: ' ' }), true)
        .addField("Adelanto de Ganancias (45%)", "$" + currencyFormatter.format(impuestos.ganancias(imp), { locale: 'es-ES', code: ' ' }), true)
        .addField("TOTAL (75%)", "$" + currencyFormatter.format(impuestos.total75(imp), { locale: 'es-ES', code: ' ' }))
  
  
      const button1 = new MessageButton()
        .setCustomId("previousbtn")
        .setLabel("📄74%")
        .setStyle("SUCCESS");
  
      const button2 = new MessageButton()
        .setCustomId("nextbtn")
        .setLabel("📄75%")
        .setStyle("DANGER");
  
  
      const pages = [
        embed1,
        embed2,
      ];
  
  
      const buttonList = [button1, button2];
  
      const timeout = 120000;
      paginationEmbed(interaction, pages, buttonList, timeout);

        // interaction.reply({content: `Pong! ${client.ws.ping}`})
    }

}