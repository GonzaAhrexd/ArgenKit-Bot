"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const embedError_1 = require("../functions/embedError");
const wait = require('node:timers/promises').setTimeout;
const Clima_1 = require("../api/Clima");
const climaFunciones_1 = require("../functions/climaFunciones");
module.exports = {
    data: new discord_js_1.default.SlashCommandBuilder()
        .setName('clima')
        .setDescription('Muestra el tiempo meteorologico actual')
        .addSubcommand(subcommand => subcommand
        .setName('capitales')
        .setDescription('Muestra el tiempo de las capitales argentinas'))
        .addSubcommand(subcommand => subcommand
        .setName('consultar')
        .setDescription('Muestra el tiempo de una ciudad')
        .addStringOption(option => option
        .setName('ciudad')
        .setDescription('Ciudad a consultar')
        .setRequired(true))),
    async run(client, interaction) {
        if (interaction.options.getSubcommand() === 'capitales') {
            await interaction.deferReply();
            try {
                const capitalesActualizadas = await (0, Clima_1.getWeatherAllCapitals)();
                const embedClimaCapitales = new discord_js_1.default.EmbedBuilder()
                    .setTitle('Clima en las capitales de Argentina')
                    .setColor('#69D6F4')
                    .setThumbnail('https://cdn.discordapp.com/...') // Tu URL de imagen
                    .setTimestamp();
                for (let capital of capitalesActualizadas) {
                    embedClimaCapitales.addFields({
                        name: `${capital.nombre}`,
                        value: `🌡️ ${capital.temperatura}°C\n<:sensaciontermica:1182840701013201039> ${capital.sensacion}°C\n ${(0, climaFunciones_1.emojiSegunMain)(capital.main)} ${mayusculaPrimerLetra(capital.estado)}`,
                        inline: true,
                    });
                }
                await interaction.editReply({ embeds: [embedClimaCapitales] });
            }
            catch (error) {
                (0, embedError_1.embedError)(interaction, error);
            }
        }
        if (interaction.options.getSubcommand() === 'consultar') {
            const ciudad = interaction.options.getString('ciudad');
            await interaction.deferReply();
            try {
                const weatherData = await (0, Clima_1.getWeatherByCity)(ciudad);
                const embedClimaCiudad = new discord_js_1.default.EmbedBuilder()
                    .setTitle(`Clima en ${ciudad}`)
                    .setColor('#0099ff')
                    .setThumbnail(`${(0, climaFunciones_1.thumbnailSegunMain)(weatherData.weather[0].main)}`)
                    .setTimestamp()
                    .addFields({ name: 'Temperatura :thermometer: ', value: `${weatherData.main.temp}°C`, inline: true }, { name: 'Sensación térmica <:sensaciontermica:1182840701013201039> ', value: `${weatherData.main.feels_like}°C`, inline: true }, { name: `Estado ${(0, climaFunciones_1.emojiSegunMain)(weatherData.weather[0].main)}`, value: `${mayusculaPrimerLetra(weatherData.weather[0].description)}`, inline: true }, { name: 'Minima :arrow_down:', value: `${weatherData.main.temp_min}°C`, inline: true }, { name: 'Maxima :arrow_up:', value: `${weatherData.main.temp_max}°C`, inline: true }, { name: 'Humedad :bubbles:', value: `${weatherData.main.humidity}%`, inline: true }, { name: 'Presión :stopwatch:', value: `${weatherData.main.pressure}hPa`, inline: true }, { name: 'Viento :leaves:', value: `${weatherData.wind.speed}km/h`, inline: true }, { name: 'Nubosidad :fog:', value: `${weatherData.clouds.all}%`, inline: true }, { name: 'Latitud :map:', value: `${weatherData.coord.lat}`, inline: true }, { name: 'Longitud :map: ', value: `${weatherData.coord.lon}`, inline: true }, { name: 'Visibilidad :eye: ', value: `${weatherData.visibility}m`, inline: true }, { name: 'Amanecer :sunrise:', value: `${new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}`, inline: true }, { name: 'Atardecer :city_sunset:', value: `${new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}`, inline: true }, { name: 'Zona horaria :timer:', value: `${weatherData.timezone / 3600}hs`, inline: true });
                await wait(3000);
                await interaction.editReply({ embeds: [embedClimaCiudad] });
            }
            catch (Error) {
                (0, embedError_1.embedError)(interaction, Error);
            }
        }
        function mayusculaPrimerLetra(texto) {
            return texto.charAt(0).toUpperCase() + texto.slice(1);
        }
    }
};
