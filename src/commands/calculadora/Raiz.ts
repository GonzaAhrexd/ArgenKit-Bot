import { ChatInputCommandInteraction, Client, EmbedBuilder } from "discord.js";

const Raiz = async (
  _client: Client,
  interaction: ChatInputCommandInteraction,
) => {
  const indice: number = interaction.options.getNumber("indice") ?? 0;
  const radicando: number = interaction.options.getNumber("radicando") ?? 0;
  const resultado: number = Math.pow(radicando, 1 / indice);

  const embed: EmbedBuilder = new EmbedBuilder()
    .setTitle("Calcular raíz")
    .setColor("#F77E65")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/802944543510495292/1181801185171226644/square-root_1.png?ex=6582611f&is=656fec1f&hm=9cef6afd7501112ba7f4fe16bff7e76c5bd3d5afb3746e1698970feaa810fd6d&",
    )
    .addFields(
      { name: "Raíz", value: `${indice}√${radicando}` },
      { name: "Resultado", value: resultado.toString() },
    );
  return await interaction.reply({ embeds: [embed] });
};
export default Raiz;
