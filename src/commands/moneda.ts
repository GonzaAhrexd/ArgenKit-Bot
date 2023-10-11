
import Discord from "discord.js"

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName("moneda")
        .setDescription('Tira una moneda'),

    async run(client, interaction) {
        let randomizar:number = Math.floor(Math.random() * 2 + 1)
        
            const embed:Discord.EmbedBuilder = new Discord.EmbedBuilder()
              .setColor(`${randomizar == 1 ? "#27C5F5" : "#FCFBFB" } `)
              .setDescription("Tirando...")
              .setThumbnail(`${randomizar == 1 ? "https://cdn.discordapp.com/attachments/802944543510495292/805139900768190484/bancario_1.png" : "https://cdn.discordapp.com/attachments/802944543510495292/805139082417799168/BancarioEscudo.png"}`)
              .addFields({ name: "LA MONEDA QUEDÓ EN: ", value: `${ randomizar === 1 ? "**SOL** :sun_with_face:" :"**ESCUDO** :shield:"}`});
              
            return interaction.reply({ embeds: [embed] });
        
        
    }
}

