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
            const capitales: Array<{
                nombre: string,
                latitud: number,
                longitud: number,
                temperatura: number,
                sensacion: number,
                main: string,
                estado: string
            }> = [
                    { nombre: 'Buenos Aires <:CABA:936062758422708244>', latitud: -34.61315, longitud: -58.37723, temperatura: 0, sensacion: 0, main: '', estado: '' },
                    { nombre: 'Catamarca <:Catamarca:936062789053726720>', latitud: -28.46957, longitud: -65.78524, temperatura: 0, sensacion: 0, main: '', estado: '' },
                    { nombre: 'Cordoba <:cordoba:936063769233207336>', latitud: -31.4135, longitud: -64.18105, temperatura: 0, sensacion: 0, main: '', estado: '' },
                    { nombre: 'Corrientes <:corrientes:936063765936504892>', latitud: -27.4806, longitud: -58.8341, temperatura: 0, sensacion: 0, main: '', estado: '' },
                    { nombre: 'Formosa <:formosa:936063765420597268>', latitud: -26.17753, longitud: -58.17814, temperatura: 0, sensacion: 0, main: '', estado: '' },
                    { nombre: 'La Plata <:buenosaires:936063770684457001>', latitud: -34.93139, longitud: -57.94864, temperatura: 0, sensacion: 0, main: '', estado: '' },
                    { nombre: 'La Rioja <:larioja:936063771712053309>', latitud: -29.41105, longitud: -66.85067, temperatura: 0, sensacion: 0, main: '', estado: '' },
                    { nombre: 'Mendoza <:mendoza:936063776447422495>', latitud: -32.89084, longitud: -68.82717, temperatura: 0, sensacion: 0, main: '', estado: '' },
                    { nombre: 'Neuquen <:neuquen:936063770046890055>', latitud: -38.95161, longitud: -68.0591, temperatura: 0, sensacion: 0, main: '', estado: '' },
                    { nombre: 'Parana <:entrerios:936063766087495720>', latitud: -31.73197, longitud: -60.5238, temperatura: 0, sensacion: 0, main: '', estado: '' },
                    { nombre: 'Posadas <:misiones:936063766477566052>', latitud: -27.36708, longitud: -55.89608, temperatura: 0, sensacion: 0, main: '', estado: '' },
                    { nombre: 'Rawson <:chubut:936063771288408094>', latitud: -43.30016, longitud: -65.10228, temperatura: 0, sensacion: 0, main: '', estado: '' },
                    { nombre: 'Resistencia <:Chaco:936063772706107443>', latitud: -27.46056, longitud: -58.98389, temperatura: 0, sensacion: 0, main: '', estado: '' },
                    { nombre: 'Rio Gallegos <:santacruz:936064424144429106>', latitud: -51.62261, longitud: -69.21813, temperatura: 0, sensacion: 0, main: '', estado: '' },
                    { nombre: 'Salta <:salta:936063770709606460>', latitud: -24.7859, longitud: -65.41166, temperatura: 0, sensacion: 0, main: '', estado: '' },
                    { nombre: 'San Juan <:sanjuan:936064424890998844>', latitud: -31.5375, longitud: -68.53639, temperatura: 0, sensacion: 0, main: '', estado: '' },
                    { nombre: 'San Luis <:sanluis:936064423511089184>', latitud: -33.29501, longitud: -66.33563, temperatura: 0, sensacion: 0, main: '', estado: '' },
                    { nombre: 'Santa Fe <:santafe:936064421392961637>', latitud: -31.63333, longitud: -60.7, temperatura: 0, sensacion: 0, main: '', estado: '' },
                    { nombre: 'Santa Rosa <:lapampa:936063767542890596>', latitud: -36.62016, longitud: -64.29029, temperatura: 0, sensacion: 0, main: '', estado: '' },
                    { nombre: 'Santiago del Estero <:santiagodelestero:936064420231127042>', latitud: -27.79511, longitud: -64.26149, temperatura: 0, sensacion: 0, main: '', estado: '' },
                    { nombre: 'Usuahia <:tierradelfuego:936064421082570762>', latitud: -54.807, longitud: -68.30701, temperatura: 0, sensacion: 0, main: '', estado: '' },
                ]

            try {
                const apiRequests = capitales.map(capital =>
                    axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${capital.latitud}&lon=${capital.longitud}&appid=${API_KEY}&units=metric&lang=es`)
                )
                const responses = await Promise.all(apiRequests);

                responses.forEach((response, index) => {
                    capitales[index].temperatura = response.data.main.temp
                    capitales[index].sensacion = response.data.main.feels_like
                    capitales[index].main = response.data.weather[0].main
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
                        value: `🌡️ ${capital.temperatura}°C\n<:sensaciontermica:1182840701013201039> ${capital.sensacion}°C\n ${emojiSegunMain(capital.main)} ${mayusculaPrimerLetra(capital.estado)}`,
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
        if (interaction.options.getSubcommand() === 'consultar') {
            const ciudad = interaction.options.getString('ciudad')
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`)
                const embedClimaCiudad = new Discord.EmbedBuilder()
                    .setTitle(`Clima en ${ciudad}`)
                    .setColor('#0099ff')
                    .setThumbnail(`${thumbnailSegunMain(response.data.weather[0].main)}`)
                    .setTimestamp()
                    .addFields(
                        { name: 'Temperatura :thermometer: ', value: `${response.data.main.temp}°C`, inline: true },
                        { name: 'Sensación térmica <:sensaciontermica:1182840701013201039> ', value: `${response.data.main.feels_like}°C`, inline: true },
                        { name: `Estado ${emojiSegunMain(response.data.weather[0].main)}`, value: `${mayusculaPrimerLetra(response.data.weather[0].description)}`, inline: true },
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
        function mayusculaPrimerLetra(texto) {
            return texto.charAt(0).toUpperCase() + texto.slice(1);
        }
        function thumbnailSegunMain(main: string): String {
            switch (main) {
                case 'Thunderstorm':
                    return 'https://cdn.discordapp.com/attachments/802944543510495292/1182547250342281279/rain.png?ex=658517f3&is=6572a2f3&hm=7c37ce52ef23b3069a8f97e6d7aa055ce6637e64af963db0acef4cb96b4d9939&'
                case 'Drizzle':
                    return 'https://cdn.discordapp.com/attachments/802944543510495292/1182547248970743849/water.png?ex=658517f2&is=6572a2f2&hm=5cfdddfdd7f7e7910a254e43da8081ac04434ff051208d0858c7117856ed35c2&'
                case 'Rain':
                    return 'https://cdn.discordapp.com/attachments/802944543510495292/1182547249218191410/raining.png?ex=658517f2&is=6572a2f2&hm=abfc21064013402cf2b9de9c4511794b8c2e4e9d4e1484ef62de47cfca8f20f7&'
                case 'Snow':
                    return 'https://cdn.discordapp.com/attachments/802944543510495292/1182547249469866125/snow.png?ex=658517f2&is=6572a2f2&hm=e52610ed4b08ed0717171284cc4d3c9c4700988d233edc5df931136870ed47f7&'
                case 'Atmosphere':
                    return 'https://cdn.discordapp.com/attachments/802944543510495292/1182774555345952808/mist.png?ex=6585eba4&is=657376a4&hm=bd960c892506d0a20430740972d7de323fa56bef762ec8ecf161e83188d6bee5&'
                case 'Clear':
                    return 'https://cdn.discordapp.com/attachments/802944543510495292/1182547249750868038/sun.png?ex=658517f3&is=6572a2f3&hm=d2fdf10429242b726333e07674dba8e070fcb7a990fd26cc2844012470a39154&'
                case 'Clouds':
                    return 'https://cdn.discordapp.com/attachments/802944543510495292/1182547250061254716/cloud.png?ex=658517f3&is=6572a2f3&hm=8013842c63f6612592b7cca91b65255dc62f83a1f537c9fe55126d6af449f545&'
                default:
                    return 'https://cdn.discordapp.com/attachments/802944543510495292/1182547249750868038/sun.png?ex=658517f3&is=6572a2f3&hm=d2fdf10429242b726333e07674dba8e070fcb7a990fd26cc2844012470a39154&'
            }
        }

        function emojiSegunMain(main: string): String {
            switch (main) {
                case 'Thunderstorm':
                    return ':thunder_cloud_rain:'
                case 'Drizzle':
                    return ':cloud_rain:'
                case 'Rain':
                    return ':cloud_rain:'
                case 'Snow':
                    return ':cloud_snow:'
                case 'Atmosphere':
                    return ':fog:'
                case 'Clear':
                    return ':sunny:'
                case 'Clouds':
                    return ':cloud:'
                default:
                    return ':sunny:'
            }
        }

    }
}
