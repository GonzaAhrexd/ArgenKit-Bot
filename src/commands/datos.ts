
import Discord from "discord.js"
import { embedError } from "../functions/embedError"

const wait = require('node:timers/promises').setTimeout

// Datos módulos
import RiesgoPais from "./datos/RiesgoPais"
import Reservas from "./datos/Reservas"
import Circulante from "./datos/Circulante"
import BaseMonetaria from "./datos/BaseMonetaria"
import Inflacion from "./datos/Inflacion"
import PBI from "./datos/PBI"
import Gabinete from "./datos/Gabinete"

module.exports = {
  data: new Discord.SlashCommandBuilder()
    .setName('datos')
    .setDescription('Muestra distintos datos de Argentina')
    .addSubcommand(subcommand =>
      subcommand.setName('riesgopais')
        .setDescription('Muestra el Riesgo País de Argentina')
    )
    .addSubcommand(subcommand =>
      subcommand.setName('reservas')
        .setDescription('Muestra las reservas actuales del Banco Central')
    )
    .addSubcommand(subcommand =>
      subcommand.setName('circulante')
        .setDescription('Muestra la cantidad de pesos circulantes en la economía')
    ).addSubcommand(subcommand =>
      subcommand.setName('basemonetaria')
        .setDescription('Muestra el valor de la base monetaria actual')
    ).addSubcommand(subcommand =>
      subcommand.setName('inflacion')
        .setDescription('Muestra el Indice de Precios al Consumidor del último mes registrado y comparaciones previas')
    )
    .addSubcommand(subcommand =>
      subcommand.setName('pbi')
        .setDescription('Muestra el Producto Bruto Interno de Argentina')
    )
    .addSubcommand(subcommand =>
      subcommand.setName('gabinete')
        .setDescription('Muestra los integrantes actuales del gabinete de ministros')
    )
  ,
  async run(client, interaction, options) {
    const EstructuraBasica = async (funcion: any) => {
      await interaction.deferReply()
      try {
        funcion(client, interaction)
      } catch (error) {
        embedError(interaction, error)
      }
    }
    //Riesgo País
    if (interaction.options.getSubcommand() === 'riesgopais') {
      EstructuraBasica(RiesgoPais)
    }
    //Reservas
    if (interaction.options.getSubcommand() === 'reservas') {
      EstructuraBasica(Reservas)
    }
    //Circulante
    if (interaction.options.getSubcommand() === 'circulante') {
      EstructuraBasica(Circulante)
    }
    //Base monetaria
    if (interaction.options.getSubcommand() === 'basemonetaria') {
      EstructuraBasica(BaseMonetaria)
    }
    //Inflación
    if (interaction.options.getSubcommand() === 'inflacion') {
      EstructuraBasica(Inflacion)
    }

    if (interaction.options.getSubcommand() === 'pbi') {
      EstructuraBasica(PBI)
    }
    if (interaction.options.getSubcommand() === 'gabinete') {
      Gabinete(client, interaction)
    }
  }



}