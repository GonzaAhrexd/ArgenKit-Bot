const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("moneda")
        .setDescription('Tira una moneda'),

    async run(client, interaction) {
        let a = Math.floor(Math.random() * 2 + 1)

    if (a == 1) {
      const embed = new Discord.MessageEmbed()
        .setColor("#27C5F5")
        .setDescription("Tirando...")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/805139900768190484/bancario_1.png")
        .addField("LA MONEDA QUEDÓ EN: ", " **SOL** :sun_with_face: ")

      return interaction.reply({ embeds: [embed] });
    }
    if (a == 2) {
      const embed = new Discord.MessageEmbed()
        .setColor("#FCFBFB")
        .setDescription("Tirando...")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/805139082417799168/BancarioEscudo.png")
        .addField("LA MONEDA QUEDÓ EN: ", " **ESCUDO** :shield:")

      return interaction.reply({ embeds: [embed] });
    }
    }
}

