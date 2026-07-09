import { ChatInputCommandInteraction, Client, EmbedBuilder } from "discord.js";

const Simple = async (
  _client: Client,
  interaction: ChatInputCommandInteraction,
) => {
  const calcular: string = interaction.options.getString("operacion") ?? "";
  const embed: EmbedBuilder = new EmbedBuilder()
    .setTitle("Calcular operación")
    .setColor("#18f7ce")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/802944543510495292/1071230926358581308/calculator.png",
    )
    .addFields(
      { name: "Operación", value: calcular },
      { name: "Resultado", value: eval(calcular).toString() },
    );
  return await interaction.reply({ embeds: [embed] });
};

export default Simple;
