
import Discord from "discord.js"
const { porcentaje } = require("../functions/funPorcentaje");

module.exports = {
    data: new Discord.SlashCommandBuilder()
    .setName('odio')
    .setDescription('Calcula tu nivel de odio')
    .addSubcommand(subcommand =>
              subcommand.setName('argentina')
              .setDescription('Muestra tu nivel de odio o bronca a Argentina') 
    )
    .addSubcommand(subcommand =>
        subcommand.setName('latinoamerica')
        .setDescription('Muestra tu nivel de odio o bronca a Latinoamérica')
),
    async run(client, interaction, options){
        
        if (interaction.options.getSubcommand() === 'argentina') {
            
            let odioArg = porcentaje()
     
            const embed:Discord.EmbedBuilder = new Discord.EmbedBuilder()
              .setColor("Red")
              .setDescription("Calculando...")
              .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929069300290027550/odioarg.png")
              .addFields({ name: "Tu odio hacía Argentina es del: ", value: `${odioArg[0]} ${odioArg[1]}%`})
              
            return interaction.reply({ embeds: [embed] });
          }
      
          //LATAM
      
          if (interaction.options.getSubcommand() === 'latinoamerica') {

            let odioLatam = porcentaje()
            const embed:Discord.EmbedBuilder = new Discord.EmbedBuilder()
              .setColor("Red")
              .setDescription("Calculando...")
              .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929069300512329768/odiolatam.png")
              .addFields({ name: "Tu odio hacía Latinoamérica es del: ", value: `${odioLatam[0]} ${odioLatam[1]}%`})
              return await interaction.reply({ embeds: [embed] });
      
          }
      
        
    }
}
