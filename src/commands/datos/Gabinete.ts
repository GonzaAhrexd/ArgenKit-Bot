
import Discord from "discord.js"

const Gabinete = async (client: any, interaction: any) => {
    const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
    .setTitle("Gabinete de Ministros")
    .setColor("#B18BC8")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1181795170207924244/networking.png?ex=65825b85&is=656fe685&hm=ef7217d1c75f8aea833ff9cb977cc177eb45c395467a82d082a5dc068ef4fdb7&")
    .addFields(
      { name: "Presidente", value: "Javier Gerardo Milei (LLA 🟣)", inline: true },
      { name: "Vicepresidente", value: "Victoria Villaruel (LLA 🟣)", inline: true },
      { name: "Jefatura de Gabinete", value: "Guillermo Francos (LLA 🟣)", inline: true },
      { name: "Ministerio de Capital Humano", value: "Sandra Pettovello (LLA 🟣)", inline: true },
      { name: "Ministerio de Defensa", value: "Luis Petri (UCR 🔴)", inline: true },
      { name: "Ministerio de Economía", value: "Luis Caputo (LLA 🟣)", inline: true },
      { name: "Ministerio de Desregulación y Transformación del Estado", value: "Federico Sturzenegger (LLA 🟣)", inline: true },
      { name: "Ministerio de Justicia", value: "Mariano Cúneo Libarona (LLA 🟣)", inline: true },
      { name: "Ministerio de Relaciones Exteriores", value: "Gerardo Werthein (LLA 🟣)", inline: true },
      { name: "Ministerio de Seguridad", value: "Patricia Bullrich (LLA 🟣)", inline: true },
      { name: "Ministerio de Salud", value: "Mario Iván Lugones	(LLA 🟣)", inline: true }
    )
  return await interaction.reply({ embeds: [embed] });

}

export default Gabinete
