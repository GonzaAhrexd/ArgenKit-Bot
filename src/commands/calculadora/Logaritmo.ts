import Discord from "discord.js"

const Logaritmo = async (client: any, interaction: any) => {
    let base: number = interaction.options.getNumber('base')
    let numero: number = interaction.options.getNumber('numero')
    let resultado: number = Math.log(numero) / Math.log(base)

    const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
        .setTitle("Calcular logaritmo")
        .setColor("#97E4F9")
        .setThumbnail('https://cdn.discordapp.com/attachments/802944543510495292/1181801184957300757/logarithm.png?ex=6582611f&is=656fec1f&hm=6158f0933a0f954db8abfae6376a603435c1ba931234923a62d8701d2f0b2b3f&')
        .addFields(
            { name: 'Logaritmo', value: `log${base}(${numero})` },
            { name: 'Resultado', value: resultado.toString() })
    return await interaction.reply({ embeds: [embed] });
}

export default Logaritmo
