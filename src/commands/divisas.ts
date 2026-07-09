import { setTimeout as wait } from "node:timers/promises";
import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ComponentType,
  EmbedBuilder,
  SlashCommandBuilder,
} from "discord.js";
import type {
  ButtonInteraction,
  ChatInputCommandInteraction,
  Client,
  ColorResolvable,
} from "discord.js";
import { formatoPrecio } from "../functions/formato";
import { embedError } from "../functions/embedError";
import divisas from "../variables/divisas-valores";
const { total30, total51, total21 } = require("../functions/impuestos");
import { getAll } from "../api/Divisas";

interface DivisaItem {
  id: string;
  nombre: string;
  bandera: string;
  color: ColorResolvable;
  img: string;
  descripcion: string;
  iso: string;
  ac: string;
  paises: string;
  simbolo: string;
  billetes: string;
  monedas: string;
  inflacion: string;
  emisor: string;
}

interface DolarData {
  oficial: {
    value_buy: number;
    value_sell: number;
  };
}

export default {
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

  async run(_client: Client, interaction: ChatInputCommandInteraction) {
    const divisa = (divisas as DivisaItem[]).find(
      (d) => d.id === interaction.options.getSubcommand(),
    );

    if (!divisa) return;

    await interaction.deferReply();

    try {
      const { divisas: divisasData, dolar: oficialData } = (await getAll()) as {
        divisas: Record<string, number>;
        dolar: DolarData;
      };
      const oficial = oficialData;

      let conversion = 1;
      if (divisa.iso !== "USD") {
        conversion = divisasData[divisa.iso.toLowerCase()];
      }

      const num = 1;

      const embed1 = new EmbedBuilder()
        .setTitle(`${divisa.nombre} ${divisa.bandera} `)
        .setColor(divisa.color)
        .setThumbnail(divisa.img);

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

      const embed2 = new EmbedBuilder()
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

      await wait(3000);
      await interaction.editReply({ embeds: [embed1], components: [row] });

      const filter = (i: ButtonInteraction) =>
        i.user.id === interaction.user.id;

      const collector = interaction.channel?.createMessageComponentCollector({
        filter,
        componentType: ComponentType.Button,
        time: 8000,
      });
      let actualEmbed = embed1;

      collector?.on("collect", async (i) => {
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

      collector?.on("end", async () => {
        await interaction.editReply({ embeds: [actualEmbed], components: [] });
      });
    } catch (error) {
      embedError(interaction, error);
    }
  },
};
