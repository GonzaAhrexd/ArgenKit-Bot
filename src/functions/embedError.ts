import { CommandInteraction, EmbedBuilder } from "discord.js";
export function embedError(interaction: CommandInteraction, error: any) {
  console.log(error);
  const errorEmbed = new EmbedBuilder()
    .setColor("#ff0000")
    .setTitle("Error")
    .setDescription(
      "Ha ocurrido un error al obtener los datos del API. Por favor, inténtalo de nuevo más tarde.",
    );

  interaction.editReply({ embeds: [errorEmbed] });
}
