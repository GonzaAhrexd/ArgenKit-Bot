import { ChatInputCommandInteraction, Client, EmbedBuilder } from "discord.js";
const ConvertirBase = async (
  _client: Client,
  interaction: ChatInputCommandInteraction,
) => {
  const numero: number = interaction?.options?.getNumber("numero") ?? 0;
  const basedelnumero: number =
    interaction?.options?.getNumber("basedelnumero") ?? 0;
  const baseaconvertir: number =
    interaction?.options?.getNumber("baseaconvertir") ?? 0;
  const resultado: String = parseInt(numero.toString(), basedelnumero).toString(
    baseaconvertir,
  );

  const embed: EmbedBuilder = new EmbedBuilder()
    .setTitle("Convertir base")
    .setColor("#02E885")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/802944543510495292/1181801184705654845/binary-code.png?ex=6582611f&is=656fec1f&hm=7664f5b2998b3a1f95696c2899b74368f3dc76e5d2b09ad5782dd5a9d0c6afd6&",
    )
    .addFields(
      { name: "Número", value: `${numero} base ${basedelnumero}` },
      { name: "Resultado", value: resultado.toString() },
    );
  return await interaction.reply({ embeds: [embed] });
};

export default ConvertirBase;
