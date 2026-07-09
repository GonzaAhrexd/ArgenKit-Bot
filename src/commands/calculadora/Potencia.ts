import { ChatInputCommandInteraction, Client, EmbedBuilder } from "discord.js";
const Potencia = async (
  _client: Client,
  interaction: ChatInputCommandInteraction,
) => {
  const base: number = interaction.options.getNumber("base") ?? 0;
  const exponente: number = interaction.options.getNumber("exponente") ?? 0;
  const resultado: number = Math.pow(base, exponente);

  const embed: EmbedBuilder = new EmbedBuilder()
    .setTitle("Calcular potencia")
    .setColor("#FF801F")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/802944543510495292/1181801185427075152/power_1.png?ex=6582611f&is=656fec1f&hm=8d103dcea6e8333d5b48c7bb773eb54409e6b2ee4afcf405b12ffd7300a4ce2d&",
    )
    .addFields(
      { name: "Potencia", value: `${base}^${exponente}` },
      { name: "Resultado", value: resultado.toString() },
    );
  return await interaction.reply({ embeds: [embed] });
};

export default Potencia;
