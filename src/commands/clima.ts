import Discord from 'discord.js'
import axios from 'axios'
import { embedError } from '../functions/embedError'
const wait = require('node:timers/promises').setTimeout
const API_KEY = process.env.apiKeyOpenWeather
module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('clima')
        .setDescription('Muestra el tiempo meteorologico actual')
        .addSubcommand(subcommand =>
            subcommand
                .setName('capitales')
                .setDescription('Muestra el tiempo de las capitales argentinas')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('consultar')
                .setDescription('Muestra el tiempo de una ciudad')
                .addStringOption(option =>
                    option
                        .setName('ciudad')
                        .setDescription('Ciudad a consultar')
                        .setRequired(true)
                )
        ),
    async run(client, interaction) {
        if (interaction.options.getSubcommand() === 'capitales') {
            const capitales = [
                { nombre: 'Buenos Aires', latitud: -34.61315, longitud: -58.37723, temperatura: 0, sensacion: 0, estado: '' },
                { nombre: 'Catamarca', latitud: -28.46957, longitud: -65.78524, temperatura: 0, sensacion: 0, estado: '' },
                { nombre: 'Cordoba', latitud: -31.4135, longitud: -64.18105, temperatura: 0, sensacion: 0, estado: '' },
                { nombre: 'Corrientes', latitud: -27.4806, longitud: -58.8341, temperatura: 0, sensacion: 0, estado: '' },
                { nombre: 'Formosa', latitud: -26.17753, longitud: -58.17814, temperatura: 0, sensacion: 0, estado: '' },
                { nombre: 'La Plata', latitud: -34.93139, longitud: -57.94864, temperatura: 0, sensacion: 0, estado: '' },
                { nombre: 'La Rioja', latitud: -29.41105, longitud: -66.85067, temperatura: 0, sensacion: 0, estado: '' },
                { nombre: 'Mendoza', latitud: -32.89084, longitud: -68.82717, temperatura: 0, sensacion: 0, estado: '' },
                { nombre: 'Neuquen', latitud: -38.95161, longitud: -68.0591, temperatura: 0, sensacion: 0, estado: '' },
                { nombre: 'Parana', latitud: -31.73197, longitud: -60.5238, temperatura: 0, sensacion: 0, estado: '' },
                { nombre: 'Posadas', latitud: -27.36708, longitud: -55.89608, temperatura: 0, sensacion: 0, estado: '' },
                { nombre: 'Rawson', latitud: -43.30016, longitud: -65.10228, temperatura: 0, sensacion: 0, estado: '' },
                { nombre: 'Resistencia', latitud: -27.46056, longitud: -58.98389, temperatura: 0, sensacion: 0, estado: '' },
                { nombre: 'Rio Gallegos', latitud: -51.62261, longitud: -69.21813, temperatura: 0, sensacion: 0, estado: '' },
                { nombre: 'Salta', latitud: -24.7859, longitud: -65.41166, temperatura: 0, sensacion: 0, estado: '' },
                { nombre: 'San Juan', latitud: -31.5375, longitud: -68.53639, temperatura: 0, sensacion: 0, estado: '' },
                { nombre: 'San Luis', latitud: -33.29501, longitud: -66.33563, temperatura: 0, sensacion: 0, estado: '' },
                { nombre: 'Santa Fe', latitud: -31.63333, longitud: -60.7, temperatura: 0, sensacion: 0, estado: '' },
                { nombre: 'Santa Rosa', latitud: -36.62016, longitud: -64.29029, temperatura: 0, sensacion: 0, estado: '' },
                { nombre: 'Santiago del Estero', latitud: -27.79511, longitud: -64.26149, temperatura: 0, sensacion: 0, estado: '' },
                { nombre: 'Usuahia', latitud: -54.807, longitud: -68.30701, temperatura: 0, sensacion: 0, estado: '' },
            ]

            try {
                const apiRequests = capitales.map(capital =>
                    axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${capital.latitud}&lon=${capital.longitud}&appid=${API_KEY}&units=metric&lang=es`)
                )
                const responses = await Promise.all(apiRequests);

                responses.forEach((response, index) => {
                    capitales[index].temperatura = response.data.main.temp
                    capitales[index].sensacion = response.data.main.feels_like
                    capitales[index].estado = response.data.weather[0].description
                })


                const embedClimaCapitales = new Discord.EmbedBuilder()
                    .setTitle('Clima en las capitales de Argentina')
                    .setColor('#0099ff')
                    .setThumbnail('https://cdn.discordapp.com/attachments/802944543510495292/1181661137020928091/weather-forecast.png?ex=6581deb1&is=656f69b1&hm=3bda713d56232a12d23a36b56a25c021f7eff2b43bccb618913389f9c441bc71&')
                    .setTimestamp()
             

                    for (let capital of capitales) {
                        let field = {
                            name: `${capital.nombre}`,
                            value: `Temperatura: ${capital.temperatura}°C\nSensación térmica: ${capital.sensacion}°C\nEstado: ${capital.estado}`,
                            inline: true,
                        };    
                        embedClimaCapitales.addFields(field);
                    }
                    await interaction.deferReply()
                    await wait(3000)
                    await interaction.editReply({ embeds: [embedClimaCapitales] });
            } catch (Error) {
                embedError(interaction, Error)
            }
        }
        if(interaction.options.getSubcommand() === 'consultar'){
            const ciudad = interaction.options.getString('ciudad')
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`)
                const embedClimaCiudad = new Discord.EmbedBuilder()
                    .setTitle(`Clima en ${ciudad}`)
                    .setColor('#0099ff')
                    .setThumbnail(`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
                    .setTimestamp()
                    .addFields(
                        { name: 'Temperatura :thermometer: ', value: `${response.data.main.temp}°C`, inline: true },
                        { name: 'Sensación térmica :thermometer: ', value: `${response.data.main.feels_like}°C`, inline: true },
                        { name: 'Estado :cloud:', value: `${response.data.weather[0].description}`, inline: true },
                        { name: 'Minima :arrow_down:', value: `${response.data.main.temp_min}°C`, inline: true },
                        { name: 'Maxima :arrow_up:', value: `${response.data.main.temp_max}°C`, inline: true },
                        { name: 'Humedad :bubbles:', value: `${response.data.main.humidity}%`, inline: true },
                        { name: 'Presión :stopwatch:', value: `${response.data.main.pressure}hPa`, inline: true },
                        { name: 'Viento :leaves:', value: `${response.data.wind.speed}km/h`, inline: true },
                        { name: 'Nubosidad :fog:', value: `${response.data.clouds.all}%`, inline: true },
                        { name: 'Latitud :map:', value: `${response.data.coord.lat}`, inline: true },
                        { name: 'Longitud :map: ', value: `${response.data.coord.lon}`, inline: true },
                        { name: 'Visibilidad :eye: ', value: `${response.data.visibility}m`, inline: true },
                        { name: 'Amanecer :sunrise:', value: `${new Date(response.data.sys.sunrise * 1000).toLocaleTimeString()}`, inline: true },
                        { name: 'Atardecer :city_sunset:', value: `${new Date(response.data.sys.sunset * 1000).toLocaleTimeString()}`, inline: true },
                        { name: 'Zona horaria :timer:', value: `${response.data.timezone / 3600}hs`, inline: true },
                    )
                    await interaction.deferReply()
                    await wait(3000)
                    await interaction.editReply({ embeds: [embedClimaCiudad] })
            } catch (Error) {
                embedError(interaction, Error)
            }
        }
    }
}
