import { EmbedBuilder, SlashCommandBuilder } from "discord.js";
import type { Client, ChatInputCommandInteraction } from "discord.js";
import { setTimeout as wait } from "node:timers/promises";
import { getProximoFeriadoData } from "../api/argentinaDatos";
import { diasHasta } from "../functions/diasHasta";

export default {
  data: new SlashCommandBuilder()
    .setName("feriado")
    .setDescription(
      "Muestra cuántos días faltan para el siguiente feriado en Argentina",
    ),

  async run(_client: Client, interaction: ChatInputCommandInteraction) {
    await interaction.deferReply();

    try {
      const proximoFeriado = await getProximoFeriadoData();

      if (!proximoFeriado) {
        await interaction.editReply("No se pudo obtener la información");
        return;
      }

      const tipoCapitalizado =
        proximoFeriado.tipo.charAt(0).toUpperCase() +
        proximoFeriado.tipo.slice(1);

      const embed = new EmbedBuilder()
        .setTitle("Días hasta el siguiente feriado")
        .setColor("#bfff00")
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/802944543510495292/1297913530036785225/vacaciones.png?ex=6717a7ab&is=6716562b&hm=e9eb6ddf3753075e130547849e651388f985c8a55de45e3bdda205477c99bd1c&",
        )
        .addFields({
          name: `${proximoFeriado.nombre} (${tipoCapitalizado})`,
          value: `Faltan ${diasHasta(new Date(proximoFeriado.fecha))} días para el próximo feriado`,
        });

      await wait(3000);
      await interaction.editReply({ embeds: [embed] });
    } catch (error) {
      console.log(error);
      await interaction.editReply("No se pudo obtener la información");
    }
  },
};
