
import Discord from "discord.js"

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
    let valorAleatorio:number = Math.floor(Math.random() * 14 + 0);

    let Respuesta: Array<{
        opcion: Number,
        respuesta: string,
        color: Discord.ColorResolvable,
    }> = [
        //Afirmativas ✅
        {opcion: 0, respuesta: "Ma' vale", color: "Green"},
        {opcion: 1, respuesta: "Métele sí", color: "Green"},
        {opcion: 2, respuesta: "Obvioo ", color: "Green"},
        {opcion: 3, respuesta: "Y sí", color: "Green"},
        {opcion: 4, respuesta: "Re sí amigo", color: "Green"},
        //Negativas ❌
        {opcion: 5, respuesta: "Ni empedo", color: "Red"},
        {opcion: 6, respuesta: "Para nada", color: "Red"},
        {opcion: 7, respuesta: "Ni loco", color: "Red"},
        {opcion: 8, respuesta: "Ni ahí", color: "Red"},
        {opcion: 9, respuesta: "Naa", color: "Red"},
        //Neutras ⚠
        {opcion: 10, respuesta: "Puede ser...", color: "Yellow"},
        {opcion: 11, respuesta: "El tiempo lo dirá", color: "Yellow"},
        {opcion: 12, respuesta: "Ya veremos dijo el ciego", color: "Yellow"},
        {opcion: 13, respuesta: "Quizás", color: "Yellow"},
        {opcion: 14, respuesta: "Ni idea amigo", color: "Yellow"},
    ]

    Respuesta.forEach(Respuesta => {
        if (valorAleatorio == Respuesta.opcion) {
        const embed:Discord.EmbedBuilder = new Discord.EmbedBuilder()
        .setColor(Respuesta.color)
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921903283667353610/8ballnew.png")
        .setDescription("Calculando...")
        .addFields(
            { name: 'Consulta:', value: consulta },
            { name: 'La bola 8 mágica dice...', value: Respuesta.respuesta})
      return interaction.reply({ embeds: [embed] });
        }
    });
}
}