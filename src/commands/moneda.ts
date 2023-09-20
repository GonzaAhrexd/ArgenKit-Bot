import { SlashCommandBuilder } from "@discordjs/builders"
import Discord from "discord.js"

module.exports = {
    data: new SlashCommandBuilder()
        .setName("moneda")
        .setDescription('Tira una moneda'),

    async run(client, interaction) {
        let a = Math.floor(Math.random() * 2 + 1)
        switch (a) {
          case 1:
            const embed1:Discord.MessageEmbed = new Discord.MessageEmbed()
              .setColor("#27C5F5")
              .setDescription("Tirando...")
              .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/805139900768190484/bancario_1.png")
              .addFields({ name: "LA MONEDA QUEDÓ EN: ", value: `**SOL** :sun_with_face:`});
              
            return interaction.reply({ embeds: [embed1] });
        
          case 2:
            const embed2:Discord.MessageEmbed = new Discord.MessageEmbed()
              .setColor("#FCFBFB")
              .setDescription("Tirando...")
              .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/805139082417799168/BancarioEscudo.png")
              .addFields({ name: "LA MONEDA QUEDÓ EN: ", value: `**ESCUDO** :shield:`});
                  
            return interaction.reply({ embeds: [embed2] });
        
          default:
            // En caso de que 'a' no coincida con ningún caso
            return interaction.reply("El valor de 'a' no es válido.");
        }
        
    }
}

