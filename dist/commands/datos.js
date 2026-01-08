"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const embedError_1 = require("../functions/embedError");
const wait = require('node:timers/promises').setTimeout;
// Datos módulos
const RiesgoPais_1 = __importDefault(require("./datos/RiesgoPais"));
const Reservas_1 = __importDefault(require("./datos/Reservas"));
const Circulante_1 = __importDefault(require("./datos/Circulante"));
const BaseMonetaria_1 = __importDefault(require("./datos/BaseMonetaria"));
const Inflacion_1 = __importDefault(require("./datos/Inflacion"));
const PBI_1 = __importDefault(require("./datos/PBI"));
const Gabinete_1 = __importDefault(require("./datos/Gabinete"));
module.exports = {
    data: new discord_js_1.default.SlashCommandBuilder()
        .setName('datos')
        .setDescription('Muestra distintos datos de Argentina')
        .addSubcommand(subcommand => subcommand.setName('riesgopais')
        .setDescription('Muestra el Riesgo País de Argentina'))
        .addSubcommand(subcommand => subcommand.setName('reservas')
        .setDescription('Muestra las reservas actuales del Banco Central'))
        .addSubcommand(subcommand => subcommand.setName('circulante')
        .setDescription('Muestra la cantidad de pesos circulantes en la economía')).addSubcommand(subcommand => subcommand.setName('basemonetaria')
        .setDescription('Muestra el valor de la base monetaria actual')).addSubcommand(subcommand => subcommand.setName('inflacion')
        .setDescription('Muestra el Indice de Precios al Consumidor del último mes registrado y comparaciones previas'))
        .addSubcommand(subcommand => subcommand.setName('pbi')
        .setDescription('Muestra el Producto Bruto Interno de Argentina'))
        .addSubcommand(subcommand => subcommand.setName('gabinete')
        .setDescription('Muestra los integrantes actuales del gabinete de ministros')),
    async run(client, interaction, options) {
        const EstructuraBasica = async (funcion) => {
            await interaction.deferReply();
            try {
                funcion(client, interaction);
            }
            catch (error) {
                (0, embedError_1.embedError)(interaction, error);
            }
        };
        //Riesgo País
        if (interaction.options.getSubcommand() === 'riesgopais') {
            EstructuraBasica(RiesgoPais_1.default);
        }
        //Reservas
        if (interaction.options.getSubcommand() === 'reservas') {
            EstructuraBasica(Reservas_1.default);
        }
        //Circulante
        if (interaction.options.getSubcommand() === 'circulante') {
            EstructuraBasica(Circulante_1.default);
        }
        //Base monetaria
        if (interaction.options.getSubcommand() === 'basemonetaria') {
            EstructuraBasica(BaseMonetaria_1.default);
        }
        //Inflación
        if (interaction.options.getSubcommand() === 'inflacion') {
            EstructuraBasica(Inflacion_1.default);
        }
        if (interaction.options.getSubcommand() === 'pbi') {
            EstructuraBasica(PBI_1.default);
        }
        if (interaction.options.getSubcommand() === 'gabinete') {
            (0, Gabinete_1.default)(client, interaction);
        }
    }
};
