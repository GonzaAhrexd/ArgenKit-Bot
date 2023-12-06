
import Discord from "discord.js"
const { formatoNum } = require("../functions/formato")
module.exports = {
    data: new Discord.SlashCommandBuilder()
    .setName('anualizarinflacion')
    .setDescription('Calcula la inflación anual a partir de la mensual')
    .addNumberOption(option =>
              option.setName('mensual')
              .setDescription('Inflación mensual a anualizar  sin el símbolo de %.')
              .setRequired(true)   
    ),
    async run(client, interaction, options){
      let mensual = interaction.options.getNumber('mensual')
      let anualizado: number = (((mensual / 100) + 1) ** 12 - 1) * 100;
      const embed:Discord.EmbedBuilder = new Discord.EmbedBuilder()
          .setTitle("Inflación mensual anualizada")
          .setDescription("La economía tiene un resago de 18 a 24 meses.")
          .setColor("#f82f40")
          .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1176940661476438077/inflation.png?ex=6570b268&is=655e3d68&hm=8158c1d52bff25b6a78cf72b991a27c96a599b95bb3cd229012c31379da38e02&")
          .addFields(
            { name: 'Inflación mensual:', value:  `${formatoNum(mensual)}%` },
            { name: 'Inflación anual', value: `${formatoNum(anualizado)}%`})
      return await interaction.reply({ embeds: [embed] });

  
    }
}
