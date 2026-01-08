
import Discord from "discord.js"
import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js'
import { getDolar } from "../../api/Divisas";
const {  total21 } = require("../../functions/impuestos"); //Impuestos
const { formatoPrecio } = require('../../functions/formato')

const EA = async (client: any, interaction: any) => {
 
       const valorDolar = (await getDolar()).oficial.value_sell;
    
    
        // Función para calcular el precio con o sin IVA
        const calcularPrecio = (usd: number, conIVA: boolean) => {
          const precio = usd * valorDolar;
          return conIVA ? total21(precio) : precio;
        };
    
        // Función para crear el embed de EA Play
        const crearEmbedEA = (conIVA: boolean) => {
          const embed = new Discord.EmbedBuilder()
            .setTitle("EA Play")
            .setURL("https://store.steampowered.com/subscriptions/ea?l=latam")
            .setDescription(
              conIVA
                ? "Los precios de EA Play **con IVA** en Argentina son los siguientes:"
                : "Los precios de EA Play **sin IVA** en Argentina son los siguientes:"
            )
            .setColor('#fe4747')
            .setThumbnail("https://media.contentapi.ea.com/content/dam/eacom/es-mx/common/october-ea-ring.png")
            .addFields(
              {
                name: "EA Play Mensual",
                value: `ARS ${formatoPrecio(calcularPrecio(4.99, conIVA), "ARS")}`,
                inline: true
              },
              {
                name: "EA Play Anual",
                value: `ARS ${formatoPrecio(calcularPrecio(29.99, conIVA), "ARS")}`,
                inline: true
              }
            );
          return embed;
        };
    
        const embedConIVA = crearEmbedEA(true);
    
        const row = new ActionRowBuilder<ButtonBuilder>()
          .addComponents(
            new ButtonBuilder()
              .setCustomId('coniva_ea')
              .setLabel("Con IVA")
              .setStyle(ButtonStyle.Success),
            new ButtonBuilder()
              .setCustomId('siniva_ea')
              .setLabel("Sin IVA")
              .setStyle(ButtonStyle.Primary)
          );
    
        await interaction.editReply({ embeds: [embedConIVA], components: [row] });
    
        const collector = interaction.channel.createMessageComponentCollector({
          filter: i => ['coniva_ea', 'siniva_ea'].includes(i.customId),
          time: 15000,
        });
    
        collector.on('collect', async i => {
          await i.deferUpdate();
          const conIVA = i.customId === 'coniva_ea';
          await i.editReply({ embeds: [crearEmbedEA(conIVA)], components: [row] });
        });
    
    

}

export default EA
