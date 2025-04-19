import Discord from "discord.js"

const Raiz = async (client: any, interaction: any) => {
    let indice: number = interaction.options.getNumber('indice')
    let radicando: number = interaction.options.getNumber('radicando')
    let resultado: number = Math.pow(radicando, 1 / indice)

    const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
        .setTitle("Calcular raíz")
        .setColor("#F77E65")
        .setThumbnail('https://cdn.discordapp.com/attachments/802944543510495292/1181801185171226644/square-root_1.png?ex=6582611f&is=656fec1f&hm=9cef6afd7501112ba7f4fe16bff7e76c5bd3d5afb3746e1698970feaa810fd6d&')
        .addFields(
            { name: 'Raíz', value: `${indice}√${radicando}` },
            { name: 'Resultado', value: resultado.toString() })
    return await interaction.reply({ embeds: [embed] });
}
export default Raiz