"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const Simple_1 = __importDefault(require("./calculadora/Simple"));
const Raiz_1 = __importDefault(require("./calculadora/Raiz"));
const Potencia_1 = __importDefault(require("./calculadora/Potencia"));
const Logaritmo_1 = __importDefault(require("./calculadora/Logaritmo"));
const ConvertirBase_1 = __importDefault(require("./calculadora/ConvertirBase"));
module.exports = {
    data: new discord_js_1.default.SlashCommandBuilder()
        .setName('calcular')
        .setDescription('Realiza una operación matemática')
        .addSubcommand(subcommand => subcommand.setName('simple')
        .setDescription('Realiza una operación matemática escribiendo el cálculo a realizar como texto')
        .addStringOption(option => option.setName('operacion')
        .setDescription('Calculo a realizar').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('raiz')
        .setDescription('Realiza la raíz N-esima de un número')
        .addNumberOption(option => option.setName('indice')
        .setDescription('Indice de la raíz').setRequired(true))
        .addNumberOption(option => option.setName('radicando')
        .setDescription('Radicando de la raíz').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('potencia')
        .setDescription('Realiza la potencia N-esima de un número')
        .addNumberOption(option => option.setName('base')
        .setDescription('Base de la potencia').setRequired(true))
        .addNumberOption(option => option.setName('exponente')
        .setDescription('Exponente de la potencia').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('logaritmo')
        .setDescription('Realiza el logaritmo de un número')
        .addNumberOption(option => option.setName('base')
        .setDescription('Base del logaritmo').setRequired(true))
        .addNumberOption(option => option.setName('numero')
        .setDescription('Número del logaritmo').setRequired(true)))
        .addSubcommand(subcommand => subcommand.setName('convertirbase')
        .setDescription('Convierte un número de una base a otra')
        .addNumberOption(option => option.setName('numero')
        .setDescription('Número a convertir').setRequired(true))
        .addNumberOption(option => option.setName('basedelnumero')
        .setDescription('Base del número a convertir').setRequired(true))
        .addNumberOption(option => option.setName('baseaconvertir')
        .setDescription('Base a la que se quiere convertir').setRequired(true))),
    async run(client, interaction, options) {
        // Calculadora simple
        if (interaction.options.getSubcommand() === 'simple') {
            (0, Simple_1.default)(client, interaction);
        }
        // Raiz
        if (interaction.options.getSubcommand() === 'raiz') {
            (0, Raiz_1.default)(client, interaction);
        }
        // Potencia
        if (interaction.options.getSubcommand() === 'potencia') {
            (0, Potencia_1.default)(client, interaction);
        }
        // Logaritmo
        if (interaction.options.getSubcommand() === 'logaritmo') {
            (0, Logaritmo_1.default)(client, interaction);
        }
        // Convertir base
        if (interaction.options.getSubcommand() === 'convertirbase') {
            (0, ConvertirBase_1.default)(client, interaction);
        }
    }
};
