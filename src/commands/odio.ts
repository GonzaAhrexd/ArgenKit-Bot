//@ts-ignore
const {SlashCommandBuilder} = require("@discordjs/builders")
//@ts-ignore
const { MessageEmbed } = require("discord.js")
//@ts-ignore
const Discord = require("discord.js");
//@ts-ignore
const { porcentaje } = require("../functions/funPorcentaje");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('odio')
    .setDescription('Calcula el impuesto a compras online del 74% o 75%')
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
     
            const embed = new Discord.MessageEmbed()
              .setColor("RED")
              .setDescription("Calculando...")
              .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929069300290027550/odioarg.png")
              .addField("Tu odio hacía Argentina es del: ", odioArg[0] + ' ' + odioArg[1] + '%')
      
            return interaction.reply({ embeds: [embed] });
          }
      
          //LATAM
      
          if (interaction.options.getSubcommand() === 'latinoamerica') {

            let odioLatam = porcentaje()
   
            const embed = new Discord.MessageEmbed()
              .setColor("RED")
              .setDescription("Calculando...")
              .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929069300512329768/odiolatam.png")
              .addField("Tu odio hacía Latinoamérica es del: ", odioLatam[0] + ' ' + odioLatam[1] + '%')
            return interaction.reply({ embeds: [embed] });
      
          }
      
        
    }
}