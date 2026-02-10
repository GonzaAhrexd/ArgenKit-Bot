// Discord.js
import { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, EmbedBuilder, ButtonStyle } from 'discord.js'
// Divisas
import divisas from '../variables/divisas-valores';
// Funciones
import { total21, total30, total51 } from '../functions/impuestos'; 
import { embedError } from "../functions/embedError"
// APIs
import { getAll } from '../api/Divisas';
// Canvas
import { generateDolarImage } from '../canvas/Divisas/canvasDivisas'; // Ajusta la ruta
import { generateImpuestosGuiaImage } from '../canvas/ImpuestosGuia/CanvasImpuestos'; // Ajusta la ruta
module.exports = {

    data: new SlashCommandBuilder()

        .setName('divisa')
        .setDescription('Mostrar los datos de una divisa y todos sus tipos de cambio')
        .addSubcommand(subcommand =>
            subcommand.setName('dolar')
                .setDescription('Muestra los datos y tipos de cambio del dólar')
        ).addSubcommand(subcommand =>
            subcommand.setName('euro')
                .setDescription('Muestra los datos y tipos de cambio del euro')
        ).addSubcommand(subcommand =>
            subcommand.setName('real')
                .setDescription('Muestra los datos y tipos de cambio del real')
        ).addSubcommand(subcommand =>
            subcommand.setName('libra')
                .setDescription('Muestra los datos y tipos de cambio de la libra')
        ).addSubcommand(subcommand =>
            subcommand.setName('yen')
                .setDescription('Muestra los datos y tipos de cambio del yen')
        ).addSubcommand(subcommand =>
            subcommand.setName('rublo')
                .setDescription('Muestra los datos y tipos de cambio del rublo')
        ).addSubcommand(subcommand =>
            subcommand.setName('dolarcanadiense')
                .setDescription('Muestra los datos y tipos de cambio del Dólar Canadiense')
        ).addSubcommand(subcommand =>
            subcommand.setName('dolaraustraliano')
                .setDescription('Muestra los datos y tipos de cambio del Dólar Australiano')
        ).addSubcommand(subcommand =>
            subcommand.setName('dolarneozelandes')
                .setDescription('Muestra los datos y tipos de cambio del Dólar Neozelandés')
        ).addSubcommand(subcommand =>
            subcommand.setName('pesomexicano')
                .setDescription('Muestra los datos y tipos de cambio del Peso Mexicano')
        ).addSubcommand(subcommand =>
            subcommand.setName('pesochileno')
                .setDescription('Muestra los datos y tipos de cambio del Peso Chileno')
        ).addSubcommand(subcommand =>
            subcommand.setName('pesouruguayo')
                .setDescription('Muestra los datos y tipos de cambio del Peso Uruguayo')
        ).addSubcommand(subcommand =>
            subcommand.setName('pesocolombiano')
                .setDescription('Muestra los datos y tipos de cambio del Peso Colombiano')
        ).addSubcommand(subcommand =>
            subcommand.setName('boliviano')
                .setDescription('Muestra los datos y tipos de cambio del Boliviano')
        ).addSubcommand(subcommand =>
            subcommand.setName('sol')
                .setDescription('Muestra los datos y tipos de cambio del Sol')
        ).addSubcommand(subcommand =>
            subcommand.setName('guarani')
                .setDescription('Muestra los datos y tipos de cambio del Guarani')
        ).addSubcommand(subcommand =>
            subcommand.setName('bolivar')
                .setDescription('Muestra los datos y tipos de cambio del Bolivar Digital Venezolano')
        ).addSubcommand(subcommand =>
            subcommand.setName('yuan')
                .setDescription('Muestra los datos y tipos de cambio del Yuan chino')
        ).addSubcommand(subcommand =>
            subcommand.setName('rupia')
                .setDescription('Muestra los datos y tipos de cambio del Rupia rusa')
        ).addSubcommand(subcommand =>
            subcommand.setName('won')
                .setDescription('Muestra los datos y tipos de cambio del Won surcoreano')
        ).addSubcommand(subcommand =>
            subcommand.setName('franco')
                .setDescription('Muestra los datos y tipos de cambio del Franco suizo')
        ).addSubcommand(subcommand =>
            subcommand.setName('lira')
                .setDescription('Muestra los datos y tipos de cambio del Lira turca')
        ),

    async run(client, interaction) {
        const subCommand = interaction.options.getSubcommand();
        
        // Buscamos la divisa específica en lugar de usar forEach
        const divisa = divisas.find(d => d.id === subCommand);
        if (!divisa) return;

        await interaction.deferReply();

        try {
            const allData = await getAll();
            const divisasData = allData.divisas;
            const oficial = allData.dolar;

            let conversion = 1;
            if (divisa.iso !== "USD") {
                conversion = divisasData[divisa.iso.toLowerCase()];
            }

            let num = 1;

            // --- CÁLCULOS DE VALORES ---
            const compra = (num / conversion) * oficial.oficial.value_buy;
            const venta = (num / conversion) * oficial.oficial.value_sell;
            
           

            // --- GENERACIÓN DE IMAGEN CANVAS ---
            // Le pasamos los datos a la función que creamos antes
            const imagenResumen = await generateDolarImage({
                nombre: divisa.nombre,
                bandera: divisa.bandera,
                iso: divisa.iso,
                simbolo: divisa.simbolo, 
                color: divisa.color,
                gradient: divisa.gradient,
                gradientBox: divisa.gradientBox,
                img: divisa.img,
                compra: compra,
                venta: venta,
                conversionDolares: conversion,
                iva: total21(venta),
                ganancias: total30(venta),
                totalImpuestos: total51(venta),
                
                cantidadLabel: num > 1 ? "(1000 Unidades)" : ""
            });

            // Valores para los botones de copiar
            const valores = {
                compra: compra.toFixed(2),
                venta: venta.toFixed(2),
                iva: total21(venta).toFixed(2),
                ganancias: total30(venta).toFixed(2),
                total: total51(venta).toFixed(2)
            };

            // --- BOTONES ---
            const row = new ActionRowBuilder<ButtonBuilder>()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId("conversion")
                        .setLabel("💸 Cotización")
                        .setStyle(ButtonStyle.Success),
                    new ButtonBuilder()
                        .setCustomId("guiaimpuestos")
                        .setLabel("📖 Guía de Impuestos")
                        .setStyle(ButtonStyle.Success),
                    new ButtonBuilder()
                        .setCustomId("informacion")
                        .setLabel("📋 Información")
                        .setStyle(ButtonStyle.Primary),
                    new ButtonBuilder()
                        .setCustomId("ver_valores")
                        .setLabel("📊 Ver Valores")
                        .setStyle(ButtonStyle.Secondary)
                );

            // Enviamos la imagen generada
            await interaction.editReply({ 
                files: [imagenResumen], 
                components: [row] 
            });

            // --- LÓGICA DEL COLLECTOR ---
            const filter = (i) => i.user.id === interaction.user.id;
            const collector = interaction.channel.createMessageComponentCollector({ filter, time: 30000 });

            collector.on('collect', async (i) => {
                // Botón ver valores - respuesta efímera
                if (i.customId === 'ver_valores') {
                    await i.reply({ 
                        content: `**${divisa.nombre} (${divisa.iso})**\n\n` +
                            `📥 **Compra:** \`${valores.compra}\`\n` +
                            `📤 **Venta:** \`${valores.venta}\`\n\n` +
                            `💰 **IVA (21%):** \`${valores.iva}\`\n` +
                            `💸 **Ganancias (30%):** \`${valores.ganancias}\`\n` +
                            `📊 **Total (51%):** \`${valores.total}\``, 
                        ephemeral: true 
                    });
                    return;
                }

                await i.deferUpdate();
                
                if (i.customId === 'informacion') {
                    // Aquí puedes seguir usando el embed2 que tenías para los datos técnicos
                    // o crear otra imagen de Canvas para la info.
                    const embed2 = new EmbedBuilder()
                        .setTitle(`Detalles: ${divisa.nombre}`)
                        .setColor(divisa.color)
                        .addFields(
                            { name: "Países", value: divisa.paises },
                            { name: "Emisor", value: divisa.emisor, inline: true }
                        );
                    
                    await i.editReply({ embeds: [embed2], files: [], components: [row] });
                }


                if (i.customId === 'conversion') {
                    // Volvemos a mostrar la imagen principal
                    await i.editReply({ embeds: [], files: [imagenResumen], components: [row] });
                }

                if(i.customId === 'guiaimpuestos') {
                    const guiaImpuestosImage = await generateImpuestosGuiaImage()

                    await i.editReply({ 
                        embeds: [], 
                        files: [guiaImpuestosImage], 
                        components: [row] 
                     });

                }
            });

            collector.on("end", () => {
                interaction.editReply({ components: [] });
            });

        } catch (error) {
            console.error(error);
            embedError(interaction, error);
        }
    }
}