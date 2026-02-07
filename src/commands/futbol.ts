// DiscordJS
import Discord from "discord.js"
// Funciones
const { diasHasta } = require('../functions/diasHasta')
// Variables
import proximosPartidos from "../variables/partidos-valores"
module.exports = {
  data: new Discord.SlashCommandBuilder()
    .setName("futbol")
    .setDescription("Muestra cuántos días faltan para  los siguientes partidos de la selección"),

  async run(client, interaction) {

    const partidosFuturos = proximosPartidos.filter(partido => new Date(partido.fecha) > new Date());

    // Agrupar partidos por categoría
    const partidosPorCategoria = partidosFuturos.reduce((acc, partido) => {
      const categoria = partido.categoria;
      if (!acc[categoria]) {
        acc[categoria] = [];
      }
      acc[categoria].push(partido);
      return acc;
    }, {} as Record<string, typeof partidosFuturos>);

    // Crear fields agrupados por categoría
    const fields: Discord.EmbedField[] = [];
    
    for (const [categoria, partidos] of Object.entries(partidosPorCategoria)) {
      // Agregar separador de categoría
      fields.push({
        name: `${categoria == "Amistoso" ? "🤝" : "🏆"} ${categoria}`,
        value: '\u200B',
        inline: false
      });
      
      // Agregar cada partido de la categoría
      partidos.forEach(partido => {
        fields.push({
          name: `:flag_ar: vs ${partido.rival} \n(${partido.fecha})`,
          value: `Faltan ${diasHasta(new Date(partido.fecha))} días`,
          inline: true
        });
      });
    }

    const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
      .setTitle("Tiempo hasta los siguientes partidos de la selección Argentina")
      .setColor("#7eb2fa")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929121012275093524/camiseta-de-futbol.png")
      .addFields(fields)
    return interaction.reply({ embeds: [embed] });

  }
}