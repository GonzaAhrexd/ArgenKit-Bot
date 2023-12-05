import Discord from "discord.js"

export function embedError(interaction: Discord.CommandInteraction, error: any) {
    console.log(error)
    const errorEmbed = new Discord.EmbedBuilder()
    .setColor("#ff0000")
    .setTitle("Error")
    .setDescription("Ha ocurrido un error al obtener los datos del API. Por favor, inténtalo de nuevo más tarde.");

    interaction.reply({ embeds: [errorEmbed] });
}
