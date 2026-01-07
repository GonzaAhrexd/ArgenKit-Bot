// Node
const wait = require('node:timers/promises').setTimeout
// Discord
import Discord from "discord.js"
import axios from "axios"
// Funciones
import { formatoPrecio } from '../functions/formato'
import { embedError } from "../functions/embedError"
// Variables
import divisas from "../variables/divisas-valores" //Divisas

import { getAll } from '../api/Divisas'

module.exports = {
  data: new Discord.SlashCommandBuilder()
    .setName('pesoa')
    .setDescription('Convierte de pesos a otras divisas')
    .addSubcommand(subcommand =>
      subcommand.setName('dolar')
        .setDescription('Convierte de  Pesos Argentinos a Dólares Estadounidenses')
        .addNumberOption(option =>
          option.setName('ars')
            .setDescription('Monto en Pesos Argentinos.').setRequired(true)
        ))
    .addSubcommand(subcommand =>
      subcommand.setName('euro')
        .setDescription('Convierte Pesos Argentinos a Euros')
        .addNumberOption(option =>
          option.setName('ars')
            .setDescription('Monto en Pesos Argentinos.').setRequired(true)
        ))
    .addSubcommand(subcommand =>
      subcommand.setName("real")
        .setDescription("Convierte de Pesos Argentinos a Reales Brasileños")
        .addNumberOption(option =>
          option.setName("ars")
            .setDescription("Monto en Pesos Argentinos.").setRequired(true)
        ))
    .addSubcommand(subcommand =>
      subcommand.setName("yen")
        .setDescription("Convierte de Pesos Argentinos a Yenes Japoneses")
        .addNumberOption(option =>
          option.setName("ars")
            .setDescription("Monto en Pesos Argentinos.").setRequired(true)
        ))
    .addSubcommand(subcommand =>
      subcommand.setName("libra")
        .setDescription("Convierte de Pesos Argentinos a Libras Esterlinas")
        .addNumberOption(option =>
          option.setName("ars")
            .setDescription("Monto en Pesos Argentinos.").setRequired(true)
        ))
    .addSubcommand(subcommand =>
      subcommand.setName("rublo")
        .setDescription("Convierte de Pesos Argentinos a Rublos Rusos")
        .addNumberOption(option =>
          option.setName("ars")
            .setDescription("Monto en Pesos Argentinos.").setRequired(true)
        ))
    .addSubcommand(subcommand =>
      subcommand.setName("dolarcanadiense")
        .setDescription("Convierte de Pesos Argentinos a Dólares Canadienses")
        .addNumberOption(option =>
          option.setName("ars")
            .setDescription("Monto en Pesos Argentinos.").setRequired(true)
        ))
    .addSubcommand(subcommand =>
      subcommand.setName("dolaraustraliano")
        .setDescription("Convierte de Pesos Argentinos a Dólares Australianos")
        .addNumberOption(option =>
          option.setName("ars")
            .setDescription("Monto en Pesos Argentinos.").setRequired(true)
        ))
    .addSubcommand(subcommand =>
      subcommand.setName("dolarnuevozelandes")
        .setDescription("Convierte de Pesos Argentinos a Dólares Nuevos Zelandaes")
        .addNumberOption(option =>
          option.setName("ars")
            .setDescription("Monto en Pesos Argentinos.").setRequired(true)
        ))
    .addSubcommand(subcommand =>
      subcommand.setName('pesomexicano')
        .setDescription('Convierte de Pesos Argentinos a Pesos Mexicanos')
        .addNumberOption(option =>
          option.setName('ars')
            .setDescription('Monto en Pesos Argentinos.').setRequired(true)
        ))
    .addSubcommand(subcommand =>
      subcommand.setName("pesochileno")
        .setDescription("Convierte de Pesos Argentinos a Pesos Chilenos")
        .addNumberOption(option =>
          option.setName("ars")
            .setDescription("Monto en Pesos Argentinos.").setRequired(true)
        ))
    .addSubcommand(subcommand =>
      subcommand.setName("pesouruguayo")
        .setDescription("Convierte de Pesos Argentinos a Pesos Uruguayos")
        .addNumberOption(option =>
          option.setName("ars")
            .setDescription("Monto en Pesos Argentinos.").setRequired(true)
        ))
    .addSubcommand(subcommand =>
      subcommand.setName("boliviano")
        .setDescription("Convierte de Pesos Argentinos a Bolivianos")
        .addNumberOption(option =>
          option.setName("ars")
            .setDescription("Monto en Pesos Argentinos.").setRequired(true)
        ))
    .addSubcommand(subcommand =>
      subcommand.setName("sol")
        .setDescription("Convierte de Pesos Argentinos a Soles Peruanos")
        .addNumberOption(option =>
          option.setName("ars")
            .setDescription("Monto en Pesos Argentinos.").setRequired(true)
        ))
    .addSubcommand(subcommand =>
      subcommand.setName("guarani")
        .setDescription("Convierte de Pesos Argentinos a Guaraníes Paraguayos")
        .addNumberOption(option =>
          option.setName("ars")
            .setDescription("Monto en Pesos Argentinos.").setRequired(true)
        ))

    .addSubcommand(subcommand =>
      subcommand.setName("bolivar")
        .setDescription("Convierte de Pesos Argentinos a Bolívares Venezolanos")
        .addNumberOption(option =>
          option.setName("ars")
            .setDescription("Monto en Pesos Argentinos.").setRequired(true)
        )
    )
    .addSubcommand(subcommand =>
      subcommand.setName("yuan")
        .setDescription("Convierte de Pesos Argentinos a Yuanes Chinos")
        .addNumberOption(option =>
          option.setName("ars")
            .setDescription("Monto en Pesos Argentinos.").setRequired(true)
        )
    )
    .addSubcommand(subcommand =>
      subcommand.setName("rupia")
        .setDescription("Convierte de Pesos Argentinos a Rupias Indianas")
        .addNumberOption(option =>
          option.setName("ars")
            .setDescription("Monto en Pesos Argentinos.").setRequired(true)
        )
    )
    .addSubcommand(subcommand =>
      subcommand.setName("won")
        .setDescription("Convierte de Pesos Argentinos a Wones Surcoreanos")
        .addNumberOption(option =>
          option.setName("ars")
            .setDescription("Monto en Pesos Argentinos.").setRequired(true)
        )
    )
    .addSubcommand(subcommand =>
      subcommand.setName("franco")
        .setDescription("Convierte de Pesos Argentinos a Francos Suizos")
        .addNumberOption(option =>
          option.setName("ars")
            .setDescription("Monto en Pesos Argentinos.").setRequired(true)
        )
    )
    .addSubcommand(subcommand =>
      subcommand.setName("lira")
        .setDescription("Convierte de Pesos Argentinos a Liras Turcas")
        .addNumberOption(option =>
          option.setName("ars")
            .setDescription("Monto en Pesos Argentinos.").setRequired(true)
        )
    ),



  async run(client, interaction, options) {

    divisas.forEach(async divisa => {
      if (interaction.options.getSubcommand() === divisa.id) {
        let convertir: number = interaction.options.getNumber('ars')
        await interaction.deferReply();
        try {
         
          const divisasData = (await getAll()).divisas;
          const dolarData = (await getAll()).dolar;

          let aconvertir = 1 
          if(divisa.id != "USD"){ 
             aconvertir = divisasData[(divisa.iso).toLowerCase()]
          }
                    
          const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
            .setTitle(`Peso Argentino <:rightarrow:921907270747570247> ${divisa.nombre}`)
            .setColor(divisa.color)
            .setDescription(`Pesos argentinos expresados en ${divisa.nombre} `)
            .setThumbnail(divisa.img)
            .addFields(
              { name: "Monto Original :flag_ar:", value: 'ARS$ ' + formatoPrecio(convertir, "ARS") },

              //Oficial
              { name: `${divisa.nombre} oficial :bank: `, value: `Valor del peso argentino expresado en ${divisa.nombre}`, inline: false },
              { name: `Compra ${divisa.bandera}`, value:  formatoPrecio((convertir * aconvertir) / dolarData.oficial.value_buy, divisa.iso), inline: true },
              { name: `Venta ${divisa.bandera}`, value:  formatoPrecio((convertir * aconvertir) / dolarData.oficial.value_sell, divisa.iso), inline: true },
          )

          await wait(3000)
          await interaction.editReply({ embeds: [embed] });


        } catch (error) {
          embedError(interaction, error)
        }


      }
    })

  }








}








