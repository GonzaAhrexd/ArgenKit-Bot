
import Discord from "discord.js"
const {generarRandom} = require('../functions/numeroRandom')
import opcionesDado from "../variables/dado-valores"
module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName("dados")
        .setDescription('Tira un dado'),
        async run(client, interaction) {
        let numeroRandom:number = generarRandom(1,7)
      
        opcionesDado.forEach(async Dado => {
            if (numeroRandom == Dado.number) {
                const embed:Discord.EmbedBuilder = new Discord.EmbedBuilder()
                .setColor("#F7F5FB")
                .setThumbnail(Dado.img)
                .setDescription("Tirando dados...")
                .addFields({ name: "El dado cayó en...  ", value: ` Número :${Dado.emoji}:` })
            
              return await interaction.reply({ embeds: [embed] });
            
        }
    })
}
}