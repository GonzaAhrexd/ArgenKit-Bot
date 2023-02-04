import {SlashCommandBuilder} from "@discordjs/builders"
import Discord from "discord.js"

module.exports = {
    data: new SlashCommandBuilder()
    .setName('anualizarinflacion')
    .setDescription('Calcula la inflación anual a partir de la mensual')
    .addNumberOption(option =>
              option.setName('mensual')
              .setDescription('Inflación mensual a anualizar  sin el símbolo de %.')
              .setRequired(true)   
    ),
    async run(client, interaction, options){
      let mes: number = (((interaction.options.getNumber('mensual') / 100) + 1) ** 12 - 1) * 100;
      const embed = new Discord.MessageEmbed()
          .setTitle("Inflación mensual anualizada")
          .setColor("#f82f40")
          .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964701743504044072/loss.png")
          .addFields(
            { name: 'Inflación mensual:', value:  `${interaction.options.getNumber('mensual')}%` },
            { name: 'Inflación anual', value: mes.toFixed(2) + "%"})

      return interaction.reply({ embeds: [embed] });

  
    }
}
