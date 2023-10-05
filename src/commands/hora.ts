import Discord from "discord.js"
import { ActionRowBuilder, ButtonBuilder } from 'discord.js'
// import { SlashCommandBuilder } from '@discordjs/builders'
import { SlashCommandBuilder } from '@discordjs/builders'


module.exports = {
  data: new SlashCommandBuilder()
    .setName('hora')
    .setDescription('Muestra la hora actual de distintos paises')
    .addStringOption(option =>
      option.setName('zona')
        .setDescription('Muestra .')
        .setRequired(true)
        .addChoices(
          { name: 'Estados Unidos', value: 'usa' },
          { name: 'Canadá', value: 'canada' },
          { name: 'México', value: 'mexico' },
          { name: 'Brasil', value: 'brasil' },
          { name: 'Europa', value: 'europa' },
          { name: 'Asia', value: 'asia' },
          { name: 'Rusia', value: 'rusia' },
          { name: 'Centroamérica', value: 'centroamerica' },
          { name: 'Sudamérica', value: 'sudamerica' },
        )),

  async run(client, interaction, options) {

    let zona = interaction.options.getString('zona')


    const zonas:Array<{
        codigo: string,
        nombre: string,
        color: Discord.ColorResolvable,
        zonas: Array<{nombre: string, codigo:string}>
    }> = [{
        codigo: "usa",
        nombre: "Estados Unidos de América",
        color: "Red",
        zonas: [
            {nombre: "Nueva York", codigo: "America/New_York"},
            {nombre: "Chicago", codigo: "America/Chicago"},
            {nombre: "Denver", codigo: "America/Denver"},
            {nombre: "Los Angeles", codigo: "America/Los_Angeles"},
            {nombre: "Anchorage", codigo: "America/Anchorage"},
            {nombre: "Honolulu", codigo: "Pacific/Honolulu"}]
    },
    {
        codigo: "canada",
        nombre: "Canadá",
        color: "Red",
        zonas: [
            {nombre: "Newfoundland", codigo: "America/St_Johns"},          
            {nombre: "Toronto", codigo: "America/Toronto"},
            {nombre: "Municipalidad Regional de Halifax", codigo: "America/Halifax"},
            {nombre: "Winnipeg", codigo: "America/Winnipeg"},
            {nombre: "Regina", codigo: "America/Regina"},
            {nombre: "Edmonton", codigo: "America/Edmonton"},
            {nombre: "Vancouver", codigo: "America/Vancouver"}
        ]
    },
    {
        codigo: "mexico",
        nombre: "México",
        color: "Green",
        zonas: [
            {nombre: "Ciudad de México", codigo: "America/Mexico_City"},          
            {nombre: "Monterrey", codigo: "America/Monterrey"},
            {nombre: "Matamoros", codigo: "America/Matamoros"},
            {nombre: "Hermosillo", codigo: "America/Hermosillo"},
            {nombre: "Tijuana", codigo: "America/Tijuana"},
        ]
    },
    {
        codigo: "brasil",
        nombre: "Brasil",
        color: "Yellow",
        zonas: [
            {nombre: "Brasilia", codigo: "America/Sao_Paulo"},          
            {nombre: "São Paulo", codigo: "America/Sao_Paulo"},
            {nombre: "Río de Janeiro", codigo: "America/Sao_Paulo"},
            {nombre: "Isla de Fernando de Noronha", codigo: "America/Noronha"},
            {nombre: "Estado de Amazonas", codigo: "America/Manaus"},
            {nombre: "Rio Branco", codigo: "America/Rio_Branco"}
        ]
    },
    {
        codigo: "europa",
        nombre: "Europa",
        color: "Blue",
        zonas: [
            {nombre: ":flag_gb: Reino Unido", codigo: "Europe/London"},          
            {nombre: ":flag_de: Alemania", codigo: "Europe/Berlin"},
            {nombre: ":flag_fr: Francia", codigo: "Europe/Paris"},
            {nombre: ":flag_es: España", codigo: "Europe/Madrid"},
            {nombre: ":flag_it: Italia", codigo: "Europe/Rome"},
            {nombre: ":flag_gr: Grecia", codigo: "Europe/Athens"},
        ]
    },
    {
        codigo: "asia",
        nombre: "Asia",
        color: "Yellow",
        zonas: [
            {nombre: "🇰🇷 Corea del Sur", codigo: "Asia/Seoul"},
            {nombre: "🇯🇵 Japón", codigo: "Asia/Tokyo"},          
            {nombre: "🇨🇳 República Popular de China", codigo: "Asia/Shanghai"}, 
            {nombre: "🇹🇼 República de China (Taiwan)", codigo: "Asia/Taipei"},
            {nombre: "🇭🇰 Hong Kong", codigo: "Asia/Hong_Kong"},
            {nombre: "🇹🇭 Tailandia", codigo: "Asia/Bangkok"},
            {nombre: "🇮🇳 India", codigo: "Asia/Kolkata"},
            {nombre: "🇵🇰 Pakistan", codigo: "Asia/Karachi"},
        ]
    },
    {
        codigo: "rusia",
        nombre: "Rusia",
        color: "Red",
        zonas: [
        {nombre: "Moscú", codigo: "Europe/Moscow"},
        {nombre: "Kamchatka Krai", codigo: "Asia/Kamchatka"},
        {nombre: "Magadan", codigo: "Asia/Magadan"},
        {nombre: "Sakhalin", codigo: "Asia/Sakhalin"},
        {nombre: "Vladivostok", codigo: "Asia/Vladivostok"},
        {nombre: "Yakutsk", codigo: "Asia/Yakutsk"},
        {nombre: "Irkutsk", codigo: "Asia/Irkutsk"},
        {nombre: "Novosibirsk", codigo: "Asia/Novosibirsk"},
        {nombre: "Samara", codigo: "Europe/Samara"},
        {nombre: "Kalingrado", codigo: "Europe/Kaliningrad"}
        ]
        },
        {
        codigo: "centroamerica",
        nombre: "Centroamérica y el Caribe",
        color: "Blue",
        zonas: [
            {nombre: "🇩🇴 República Dominicana", codigo: "America/Santo_Domingo"},
            {nombre: "🇵🇦 Panamá", codigo: "America/Panama"},
            {nombre: "🇧🇸 Bahamas", codigo: "America/Nassau"},
            {nombre: "🇯🇲 Jamaica", codigo: "America/Jamaica"},
            {nombre: "🇭🇹 Haití", codigo: "America/Port-au-Prince"},
            {nombre: "🇭🇳 Honduras", codigo: "America/Tegucigalpa"},          
            {nombre: "🇨🇷 Costa Rica", codigo: "America/Costa_Rica"}
        ]
    },
    {
        codigo: "sudamerica",
        nombre: "Sudamérica",
        color: "Green",
        zonas: [
            {nombre: "🇦🇷 Argentina", codigo: "America/Buenos_Aires"},
            {nombre: "🇺🇾 Uruguay", codigo: "America/Montevideo"},
            {nombre: "🇵🇾 Paraguay", codigo: "America/Asuncion"},
            {nombre: "🇨🇱 Chile", codigo: "America/Santiago"},
            {nombre: "🇧🇴 Bolivia", codigo: "America/La_Paz"},
            {nombre: "🇵🇪 Perú", codigo: "America/Lima"},
            {nombre: ":flag_ec: Ecuador", codigo: "America/Guayaquil"},
            {nombre: "🇨🇴 Colombia", codigo: "America/Bogota"}
        ]
    }
]

    zonas.forEach(lugar => {
      
     
        if(zona == lugar.codigo){
            var zonasEmbedField: any = []

            lugar.zonas.forEach(zonita =>
                {
                    zonasEmbedField.push({name: zonita.nombre, value: new Date().toLocaleTimeString("es-AR", {timeZone: zonita.codigo, hour: '2-digit', minute: '2-digit'}), inline: true})
                })
          
            const embed:Discord.EmbedBuilder = new Discord.EmbedBuilder()
            .setTitle(`Zonas horarias de ${lugar.nombre}`)
            .setDescription(`${lugar.nombre} tiene distintas zonas horarias`)
            .setColor(lugar.color)
            .setThumbnail('https://cdn.discordapp.com/attachments/802944543510495292/1071523614265970849/clock.png')
            .addFields(zonasEmbedField)
            return interaction.reply({ embeds: [embed] });
        }
        
    })


  }
}

