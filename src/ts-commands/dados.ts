// @ts-ignore
const { SlashCommandBuilder } = require("@discordjs/builders")
// @ts-ignore
const { MessageEmbed } = require("discord.js")
// @ts-ignore
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("dados")
        .setDescription('Tira un dado'),
        async run(client, interaction) {
        let a = Math.floor(Math.random() * 6 + 1);
        let Dado:Array<{
            number: Number,
            img: String,
            emoji: string,
        }> = [{
            number: 1, img: 'https://cdn.discordapp.com/attachments/802944543510495292/921904012138258452/dado.png', emoji: "one"}, //0
            {number: 2, img: 'https://cdn.discordapp.com/attachments/802944543510495292/921904011915952160/dado_1.png', emoji: "two"}, //1
            {number: 3, img: 'https://cdn.discordapp.com/attachments/802944543510495292/921904011685294090/dado_2.png', emoji: "three"}, //2
            {number: 4, img: 'https://cdn.discordapp.com/attachments/802944543510495292/921904286303133807/dado_5.png', emoji: "four"}, //3
            {number: 5, img: 'https://cdn.discordapp.com/attachments/802944543510495292/921904011479769180/dado_3.png', emoji: "five"}, //4
            {number: 6, img: 'https://cdn.discordapp.com/attachments/802944543510495292/921904011244871730/dado_4.png', emoji: "six"} //5
        ]
        Dado.forEach(Dado => {
            if (a == Dado.number) {
                const embed = new Discord.MessageEmbed()
                .setColor("#ffe082")
                .setThumbnail(Dado.img)
                .setDescription("Tirando dados...")
                .addField("El dado cayó en... ", ` Número :${Dado.emoji}:` )
              return interaction.reply({ embeds: [embed] });
            
        }
    })
}
}