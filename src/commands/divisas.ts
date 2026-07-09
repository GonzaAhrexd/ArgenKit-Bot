// Node
const wait = require("node:timers/promises").setTimeout;
// Discord JS
import Discord from "discord.js";
import {
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
} from "discord.js";
import { ButtonStyle } from "discord.js";
// Funciones
import { formatoPrecio } from "../functions/formato";
import { embedError } from "../functions/embedError";
import divisas from "../variables/divisas-valores";
const { total30, total51, total21 } = require("../functions/impuestos"); //Impuestos

import { getAll } from "../api/Divisas";
module.exports = {
  data: new SlashCommandBuilder()
    .setName("divisa")
    .setDescription(
      "Mostrar los datos de una divisa y todos sus tipos de cambio",
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("dolar")
        .setDescription("Muestra los datos y tipos de cambio del dólar"),
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("euro")
        .setDescription("Muestra los datos y tipos de cambio del euro"),
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("real")
        .setDescription("Muestra los datos y tipos de cambio del real"),
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("libra")
        .setDescription("Muestra los datos y tipos de cambio de la libra"),
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("yen")
        .setDescription("Muestra los datos y tipos de cambio del yen"),
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("rublo")
        .setDescription("Muestra los datos y tipos de cambio del rublo"),
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("dolarcanadiense")
        .setDescription(
          "Muestra los datos y tipos de cambio del Dólar Canadiense",
        ),
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("dolaraustraliano")
        .setDescription(
          "Muestra los datos y tipos de cambio del Dólar Australiano",
        ),
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("dolarneozelandes")
        .setDescription(
          "Muestra los datos y tipos de cambio del Dólar Neozelandés",
        ),
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("pesomexicano")
        .setDescription(
          "Muestra los datos y tipos de cambio del Peso Mexicano",
        ),
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("pesochileno")
        .setDescription("Muestra los datos y tipos de cambio del Peso Chileno"),
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("pesouruguayo")
        .setDescription(
          "Muestra los datos y tipos de cambio del Peso Uruguayo",
        ),
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("pesocolombiano")
        .setDescription(
          "Muestra los datos y tipos de cambio del Peso Colombiano",
        ),
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("boliviano")
        .setDescription("Muestra los datos y tipos de cambio del Boliviano"),
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("sol")
        .setDescription("Muestra los datos y tipos de cambio del Sol"),
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("guarani")
        .setDescription("Muestra los datos y tipos de cambio del Guarani"),
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("bolivar")
        .setDescription(
          "Muestra los datos y tipos de cambio del Bolivar Digital Venezolano",
        ),
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("yuan")
        .setDescription("Muestra los datos y tipos de cambio del Yuan chino"),
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("rupia")
        .setDescription("Muestra los datos y tipos de cambio del Rupia rusa"),
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("won")
        .setDescription(
          "Muestra los datos y tipos de cambio del Won surcoreano",
        ),
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("franco")
        .setDescription("Muestra los datos y tipos de cambio del Franco suizo"),
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("lira")
        .setDescription("Muestra los datos y tipos de cambio del Lira turca"),
    ),

  async run(client, interaction, options) {
    function calcularBandas(
      fecha: Date,
      fechaBase: Date,
      inferiorInicial: number,
      superiorInicial: number,
    ) {
      const msPorDia = 1000 * 60 * 60 * 24;
      const dias = Math.floor(
        (fecha.getTime() - fechaBase.getTime()) / msPorDia,
      );

      // tasa mensual 1%
      const tasaMensual = 0.01;

      // aprox 30 días por mes
      const tasaDiaria = tasaMensual / 30;

      // Variación acumulada
      const factor = 1 + dias * tasaDiaria;

      return {
        fecha: fecha.toISOString().split("T")[0],
        inferior: inferiorInicial / factor,
        superior: superiorInicial * factor,
      };
    }

    // Ejemplo de uso
    const fechaBase = new Date("2025-04-13");
    const bandasHoy = calcularBandas(new Date(), fechaBase, 1000, 1400);

    // Itera sobre cada divisa disponible
    divisas.forEach(async (divisa) => {
      // Verifica si el subcomando coincide con la divisa actual
      if (interaction.options.getSubcommand() !== divisa.id) return;

      await interaction.deferReply();

      try {
        const divisasData = (await getAll()).divisas;
        const oficial = (await getAll()).dolar;

        let conversion = 1;
        if (divisa.iso != "USD") {
          conversion = divisasData[divisa.iso.toLowerCase()];
        }

        // Determina si hay que usar 1000 unidades por tema de redondeo visual
        let num = 1;

        // --- EMBED DE CONVERSIÓN ---
        const embed1 = new Discord.EmbedBuilder()
          .setTitle(`${divisa.nombre} ${divisa.bandera} `)
          .setColor(divisa.color)
          // .setDescription(divisa.descripcion)
          .setThumbnail(divisa.img);

        // Solo mostrar si la divisa NO es dólar
        if (divisa.iso !== "USD") {
          embed1.addFields(
            {
              name: "Valor en dólares 💸",
              value: `Valor del ${divisa.nombre} en relación al dólar estadounidense.`,
              inline: false,
            },
            {
              name: `1 DÓLAR <:rightarrow:921907270747570247> ${divisa.nombre.toUpperCase()}`,
              value: formatoPrecio(conversion, divisa.iso),
              inline: true,
            },
            {
              name: `${["COP", "PYG", "KRW"].includes(divisa.iso) ? "1000" : "1"} ${divisa.nombre} <:rightarrow:921907270747570247> DÓLAR`,
              value: formatoPrecio(
                ["COP", "PYG", "KRW"].includes(divisa.iso)
                  ? 1000 / conversion
                  : 1 / conversion,
                "USD",
              ),
              inline: true,
            },
          );
        }
        embed1.addFields(
          {
            name: `Cotización oficial :bank:`,
            value: `Valor del ${divisa.nombre} en pesos argentinos bajo esquema de flotación entre bandas.`,
            inline: false,
          },
          {
            name: "COMPRA",
            value: `ARS ${formatoPrecio((num / conversion) * oficial.oficial.value_buy, "ARS")}`,
            inline: true,
          },
          {
            name: "VENTA",
            value: `ARS ${formatoPrecio((num / conversion) * oficial.oficial.value_sell, "ARS")}`,
            inline: true,
          },
          {
            name: "Impuestos nacionales 📖",
            value: `Impuestos sobre tarjetas de crédito y débito a la compra de ${divisa.nombre}`,
            inline: false,
          },
          {
            name: "IVA (21%)",
            value: `ARS ${formatoPrecio(total21((num / conversion) * oficial.oficial.value_sell), "ARS")}`,
            inline: true,
          },
          {
            name: "Percepción de ganancias (30%)",
            value: `ARS ${formatoPrecio(total30((num / conversion) * oficial.oficial.value_sell), "ARS")}`,
            inline: true,
          },
          {
            name: "Percepción + IVA (51%)",
            value: `ARS ${formatoPrecio(total51((num / conversion) * oficial.oficial.value_sell), "ARS")}`,
            inline: true,
          },
        );

        // if(divisa.iso == "USD"){
        //     embed1.addFields(
        //         { name: "Bandas cambiarias", value: "Valores actuales de las bandas cambiarias para la intervención del BCRA.", inline: false },
        //         { name: "Banda inferior", value: `${formatoPrecio(bandasHoy.inferior, "ARS")}`, inline: true },
        //         { name: "Banda superior", value: `${formatoPrecio(bandasHoy.superior, "ARS")}`, inline: true },
        //     );
        // }

        // --- EMBED DE INFORMACIÓN ADICIONAL ---
        const embed2 = new Discord.EmbedBuilder()
          .setTitle(divisa.nombre)
          .setColor(divisa.color)
          .setDescription(divisa.descripcion)
          .setThumbnail(divisa.img)
          .addFields(
            { name: "Acuñación", value: divisa.ac },
            { name: "Países donde se utiliza:", value: divisa.paises },
            { name: "Código ISO", value: divisa.iso, inline: true },
            { name: "Símbolo", value: divisa.simbolo, inline: true },
            { name: "Billetes :money_with_wings:", value: divisa.billetes },
            { name: "Monedas :coin:", value: divisa.monedas },
            {
              name: "Inflación anual :chart_with_downwards_trend:",
              value: divisa.inflacion,
              inline: true,
            },
            { name: "Emisor :bank:", value: divisa.emisor, inline: true },
          );

        // --- BOTONES ---
        const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
          new ButtonBuilder()
            .setCustomId("conversion")
            .setLabel("💸 Conversión")
            .setStyle(ButtonStyle.Success),
          new ButtonBuilder()
            .setCustomId("informacion")
            .setLabel("📋 Información")
            .setStyle(ButtonStyle.Primary),
        );

        // Espera 3 segundos (efecto visual o para cargar todo bien)
        await wait(3000);
        await interaction.editReply({ embeds: [embed1], components: [row] });

        // Filtro para que solo el autor del comando pueda interactuar con los botones
        const filter = (i) => i.user.id === interaction.user.id;

        const collector = interaction.channel.createMessageComponentCollector({
          filter,
          time: 8000,
        });
        let actualEmbed = embed1;

        // Evento de recolección de botones
        collector.on("collect", async (i) => {
          await i.deferUpdate();

          if (i.customId === "conversion") {
            await i.editReply({ embeds: [embed1], components: [row] });
            actualEmbed = embed1;
          }

          if (i.customId === "informacion") {
            await i.editReply({ embeds: [embed2], components: [row] });
            actualEmbed = embed2;
          }
        });

        // Al finalizar el tiempo del collector, desactiva los botones
        collector.on("end", () => {
          interaction.editReply({ embeds: [actualEmbed], components: [] });
        });
      } catch (error) {
        // Manejador de errores personalizado
        embedError(interaction, error);
      }
    });
  },
};
