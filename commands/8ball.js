const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('8ball')
        .setDescription('Pregúntale a la bola mágica 8')
        .addStringOption(option =>
            option.setName('consulta')
                .setDescription('Consulta a realizar.')
                .setRequired(true)
        ),
    async run(client, interaction, options) {
  
    let consulta2 = interaction.options.getString('consulta')
    let a = Math.floor(Math.random() * 14 + 0);

    Respuesta = [
        //Afirmativas
        {opcion: 0, respuesta: "Ma' vale", color: "GREEN"},
        {opcion: 1, respuesta: "Métele sí", color: "GREEN"},
        {opcion: 2, respuesta: "Obvioo ", color: "GREEN"},
        {opcion: 3, respuesta: "Y sí", color: "GREEN"},
        {opcion: 4, respuesta: "Re sí amigo", color: "GREEN"},
        //Negativas
        {opcion: 5, respuesta: "Ni empedo", color: "RED"},
        {opcion: 6, respuesta: "Para nada", color: "RED"},
        {opcion: 7, respuesta: "Ni loco", color: "RED"},
        {opcion: 8, respuesta: "Ni ahí", color: "RED"},
        {opcion: 9, respuesta: "Naa", color: "RED"},
        //Neutras
        {opcion: 10, respuesta: "Puede ser...", color: "RED"},
        {opcion: 11, respuesta: "El tiempo lo dirá", color: "RED"},
        {opcion: 12, respuesta: "Ya veremos dijo el ciego", color: "RED"},
        {opcion: 13, respuesta: "Quizás", color: "RED"},
        {opcion: 14, respuesta: "Ni idea amigo", color: "RED"},
    ]

    Respuesta.forEach(Respuesta => {
        if (a == Respuesta.opcion) {
        const embed = new Discord.MessageEmbed()
        .setColor(Respuesta.color)
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921903283667353610/8ballnew.png")
        .setDescription("Calculando...")
        .addField("Consulta: ", consulta2)
        .addField("La bola 8 mágica dice... ", Respuesta.respuesta)
      return interaction.reply({ embeds: [embed] });
        }
    });
}
}