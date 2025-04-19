import Discord from "discord.js"
import Zonas from "../variables/zonas-valores"


module.exports = {
  data: new Discord.SlashCommandBuilder()
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



    Zonas.forEach(async lugar => {
      
        if(zona == lugar.codigo){
            const zonasEmbedField: any = []

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
            return await interaction.reply({ embeds: [embed] });
        }
        
    })


  }
}

