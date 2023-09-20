import {SlashCommandBuilder} from "@discordjs/builders"
import Discord from "discord.js"

module.exports = {
    data: new SlashCommandBuilder()
    .setName('calcular')
    .setDescription('Realiza una operación matemática')
    .addStringOption(option =>
              option.setName('operacion')
              .setDescription('Calculo a realizar')
              .setRequired(true)   
    ),
    async run(client, interaction, options){
        let calcular:string = interaction.options.getString('operacion')
        const embed:Discord.MessageEmbed = new Discord.MessageEmbed()
        .setTitle("Calcular operación")
        .setColor("#18f7ce")
        .setThumbnail('https://cdn.discordapp.com/attachments/802944543510495292/1071230926358581308/calculator.png')
        .addFields(
            { name: 'Operación', value: calcular },
            { name: 'Resultado', value: (eval(calcular)).toString()})
            return interaction.reply({ embeds: [embed] });
    }
}