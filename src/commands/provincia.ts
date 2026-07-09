import Discord from "discord.js";
import { ActionRowBuilder, ButtonBuilder } from "discord.js";
import { ButtonStyle } from "discord.js";
import provincias from "../variables/provincias-valores";
module.exports = {
  data: new Discord.SlashCommandBuilder()
    .setName("provinciainfo")
    .setDescription(
      "Muestra información sobre las 23 provincias de Argentina y la Ciudad Autonoma de Buenos Aires",
    )
    .addStringOption((option) =>
      option
        .setName("provincia")
        .setDescription(
          "Ingresa la provincia de la que quieres saber información .",
        )
        .setRequired(false)
        .addChoices(
          { name: "CABA", value: "caba" },
          { name: "Buenos Aires", value: "buenos aires" },
          { name: "Catamarca", value: "catamarca" },
          { name: "Chaco", value: "chaco" },
          { name: "Chubut", value: "chubut" },
          { name: "Córdoba", value: "cordoba" },
          { name: "Corrientes", value: "corrientes" },
          { name: "Entre Ríos", value: "entre ríos" },
          { name: "Formosa", value: "formosa" },
          { name: "Jujuy", value: "jujuy" },
          { name: "La Pampa", value: "la pampa" },
          { name: "La Rioja", value: "la rioja" },
          { name: "Mendoza", value: "mendoza" },
          { name: "Misiones", value: "misiones" },
          { name: "Neuquén", value: "neuquén" },
          { name: "Río Negro", value: "río negro" },
          { name: "Salta", value: "salta" },
          { name: "San Juan", value: "san juan" },
          { name: "San Luis", value: "san luis" },
          { name: "Santa Cruz", value: "santa cruz" },
          { name: "Santa Fé", value: "santa fe" },
          { name: "Santiago del Estero", value: "santiago del estero" },
          { name: "Tierra del Fuego", value: "tierra del fuego" },
          { name: "Tucuman", value: "tucuman" },
        ),
    ),

  async run(client, interaction, options) {
    let provincia = interaction.options.getString("provincia");

    if (provincia != null) {
      var provincia2 = provincia.toLowerCase();
    }
    if (provincia == null) {
      const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
        .setTitle("Provincias de Argentina")
        .setURL("https://es.wikipedia.org/wiki/Provincias_de_Argentina")
        .setDescription(
          "En Argentina se denomina provincia a cada uno de los 23 estados federados denominados así en la Constitución de la Nación Argentina, que junto a la Ciudad Autónoma de Buenos Aires constituyen las divisiones territoriales de primer orden del país. Las provincias tienen autonomía plena, forman parte de la Nación y son jurídicamente preexistentes a ella, según los principios del federalismo establecidos en la Constitución Nacional. \n  \n Para información individual de cada provincia utilice el comando `*ar provincia [Nombre de la provincia]`",
        )
        .setColor("#0b67ff")
        .setThumbnail(
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/800px-Flag_of_Argentina.svg.png",
        )

        .addFields(
          {
            name: "Ciudad Autonoma",
            value:
              "Ciudad Autonoma de Buenos Aires (CABA) <:CABA:936062758422708244>",
          },
          {
            name: "Lista de provincias",
            value:
              "Buenos Aires <:buenosaires:936063770684457001>  \n Catamarca <:Catamarca:936062789053726720> \n Chaco <:Chaco:936063772706107443> \n Chubut <:chubut:936063771288408094>  \n Córdoba <:cordoba:936063769233207336> \n Corrientes <:corrientes:936063765936504892> \n Entre Ríos <:entrerios:936063766087495720> \n Formosa <:formosa:936063765420597268>\n Jujuy <:jujuy:936063774031511592> \n La Pampa <:lapampa:936063767542890596> \n La Rioja <:larioja:936063771712053309> \n Mendoza <:mendoza:936063776447422495> \n Misiones <:misiones:936063766477566052> \n Neuquén <:neuquen:936063770046890055>\n Río Negro <:rionegro:936063766498537573>\n Salta <:salta:936063770709606460>\n San Juan <:sanjuan:936064424890998844>\n San Luis <:sanluis:936064423511089184>\n Santa Cruz <:santacruz:936064424144429106>\n Santa Fe <:santafe:936064421392961637>\n Santiago del Estero <:santiagodelestero:936064420231127042>\n Tierra del Fuego, Antártida e Islas del Atlántico Sur <:tierradelfuego:936064421082570762>\n Tucuman <:tucuman:936064420331782164>",
          },
        );

      return interaction.reply({ embeds: [embed] });
    }

    provincias.forEach(async (province) => {
      if (provincia2 == province.identificacion) {
        let isCaba: boolean = provincia2 == "caba";
        const embed1: Discord.EmbedBuilder = new Discord.EmbedBuilder()
          .setTitle(province.nombre)
          .setURL(province.url)
          .setDescription(province.descripcion)
          .setColor(province.color)
          .setThumbnail(province.bandera)
          .addFields(
            {
              name: isCaba ? "Jefe de Gobierno" : "Gobernador",
              value: province.gobernador,
              inline: true,
            },
            {
              name: isCaba ? "Área metropolitana" : "Capital",
              value: province.capital,
              inline: true,
            },
            {
              name: isCaba ? "Subdivisiones" : "Ciudad más poblada",
              value: province.poblada,
              inline: true,
            },
            { name: "Fundación", value: province.fundacion, inline: true },
            {
              name: "Declaración de autonomía",
              value: province.autonomia,
              inline: true,
            },
            { name: "Superficie", value: province.superficie, inline: true },
            { name: "Población", value: province.poblacion, inline: true },
            { name: "Gentilicio", value: province.gentillicio, inline: true },
            { name: "Clima", value: province.clima, inline: true },
          );

        const embed2: Discord.EmbedBuilder = new Discord.EmbedBuilder()
          .setTitle("Ubicación de " + province.nombre)
          .setURL(province.ubicacion)
          .setDescription(province.ubicacionDesc)
          .setColor(province.color)
          .setImage(province.ubicacionImg);

        const row = new ActionRowBuilder()
          .addComponents(
            new ButtonBuilder()
              .setCustomId("informacion")
              .setLabel("❓ Información")
              .setStyle(ButtonStyle.Success),
          )
          .addComponents(
            new ButtonBuilder()
              .setCustomId("ubicacion")
              .setLabel("🗺️ Ubicación")
              .setStyle(ButtonStyle.Primary),
          );

        await interaction.reply({ embeds: [embed1], components: [row] });

        client.on("interactionCreate", (interaction) => {
          if (!interaction.isButton()) return;
        });

        const filter = (i) => i.user.id === interaction.user.id;

        const collector = interaction.channel.createMessageComponentCollector({
          filter,
          time: 8000,
        });

        var actual = embed1;

        collector.on("collect", async (i) => {
          if (i.customId === "informacion") {
            await i.deferUpdate();
            await i.editReply({ embeds: [embed1], components: [row] });
            actual = embed1;
          }
          if (i.customId === "ubicacion") {
            await i.deferUpdate();
            await i.editReply({ embeds: [embed2], components: [row] });
            actual = embed2;
          }
        });

        collector.on("end", (collected, reason) => {
          if (reason === "time") {
            interaction.editReply({ embeds: [actual], components: [] });
          }
        });
      }
    });
  },
};
