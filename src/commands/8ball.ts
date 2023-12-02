
import Discord from "discord.js"
const {generarRandom} = require('../functions/numeroRandom')
module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('8ball')
        .setDescription('Pregúntale a la bola mágica 8')
        .addStringOption(option =>
            option.setName('consulta')
                .setDescription('Consulta a realizar.')
                .setRequired(true)
        ),
    async run(client, interaction, options) {
    let consulta:string = interaction.options.getString('consulta')
    let valorAleatorio:number = generarRandom(0, 29)
    let Respuesta: Array<{opcion: Number,respuesta: string, color: Discord.ColorResolvable}> = [
        //Afirmativas ✅
        {opcion: 0, respuesta: "Ma' vale", color: "Green"},
        {opcion: 1, respuesta: "Métele sí", color: "Green"},
        {opcion: 2, respuesta: "Obvioo ", color: "Green"},
        {opcion: 3, respuesta: "Y sí", color: "Green"},
        {opcion: 4, respuesta: "Re sí amigo", color: "Green"},
        {opcion: 5, respuesta: "Sabelo, papucho", color: "Green"},
        {opcion: 6, respuesta: "Daleeeee", color: "Green"},
        {opcion: 7, respuesta: "Posta loco", color: "Green"},
        {opcion: 8, respuesta: "Por supuesto, vieja", color: "Green"},
        {opcion: 9, respuesta: "Re mil sí, amigo", color: "Green"},
        //Negativas ❌
        {opcion: 10, respuesta: "Ni empedo", color: "Red"},
        {opcion: 11, respuesta: "Para nada", color: "Red"},
        {opcion: 12, respuesta: "Ni loco", color: "Red"},
        {opcion: 13, respuesta: "Ni ahí", color: "Red"},
        {opcion: 14, respuesta: "Naa", color: "Red"},
        {opcion: 15, respuesta: "Ni en pedo, guacho", color: "Red"},
        {opcion: 16, respuesta: "Naaaa, ni a palos", color: "Red"},
        {opcion: 17, respuesta: "Olvidate, hermano", color: "Red"},
        {opcion: 18, respuesta: "Jamás en la vida", color: "Red"},
        {opcion: 19, respuesta: "Nada que ver, pibe", color: "Red"},
        //Neutras ⚠
        {opcion: 20, respuesta: "Puede ser...", color: "Yellow"},
        {opcion: 21, respuesta: "El tiempo lo dirá", color: "Yellow"},
        {opcion: 22, respuesta: "Ya veremos dijo el ciego", color: "Yellow"},
        {opcion: 23, respuesta: "Quizás", color: "Yellow"},
        {opcion: 24, respuesta: "Ni idea amigo", color: "Yellow"},
        {opcion: 25, respuesta: "Capaz, quién sabe", color: "Yellow"},
        {opcion: 26, respuesta: "El tiempo va a decir, che", color: "Yellow"},
        {opcion: 27, respuesta: "Veremos qué onda, dijo el tuerto", color: "Yellow"},
        {opcion: 28, respuesta: "Tal vez, boludo", color: "Yellow"},
        {opcion: 29, respuesta: "Ni idea, compañero", color: "Yellow"},     
    ]

    Respuesta.forEach(async Respuesta =>  {
        if (valorAleatorio == Respuesta.opcion) {
        const embed:Discord.EmbedBuilder = new Discord.EmbedBuilder()
        .setColor(Respuesta.color)
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1176940238657040405/8-ball.png?ex=6570b203&is=655e3d03&hm=fa237fa24acd064df581b2b11c63659ca70644ae64efb5c684209f74b1b73b9b&")
        .setDescription("Calculando...")
        .addFields(
            { name: 'Consulta:', value: consulta },
            { name: 'La bola 8 mágica dice...', value: Respuesta.respuesta})
      return await interaction.reply({ embeds: [embed] });
        }
    });
}
}