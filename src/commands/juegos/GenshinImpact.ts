
import axios from "axios";
import Discord from "discord.js";
import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
const { total30 } = require('../../functions/impuestos');
import { formatoPrecio } from '../../functions/formato';
const wait = require('node:timers/promises').setTimeout;

const GenshinImpact = async (client: any, interaction: any) => {
        const [oficial] = await Promise.all([
            axios.get('https://api.bluelytics.com.ar/v2/latest'),
        ]);
        const valorDolar = oficial.data['oficial']['value_sell'];

        // Cálculo del precio con o sin percepción
        const calcularPrecio = (usd: number, conPercepcion: boolean) => {
            const precio = usd * valorDolar;
            return conPercepcion ? total30(precio) : precio;
        };

        // Función para crear el embed
        const crearEmbedGenshin = (conPercepcion: boolean) => {
            const embed = new Discord.EmbedBuilder()
                .setTitle("Genshin Impact")
                .setURL("https://genshin.mihoyo.com/es/home")
                .setDescription(
                    conPercepcion
                        ? "Los precios en Genshin Impact **con percepción (30%)** en Argentina son los siguientes:"
                        : "Al pagar debitando directamente en dólares con cuenta en dólar se puede evitar la percepción:"
                )
                .setColor("#7997D3")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1181053245804773386/image.png?ex=657fa88c&is=656d338c&hm=ec2dcfd2f9ad4898c65d3b344684da67cdf324916f13c2fabaa5308663a1b4b0&")
                .addFields(
                    { name: "Pase", value: `ARS ${formatoPrecio(calcularPrecio(9.99, conPercepcion), "ARS")}`, inline: true },
                    { name: "Pase 10 niveles", value: `ARS ${formatoPrecio(calcularPrecio(19.99, conPercepcion), "ARS")}`, inline: true },
                    { name: "Bendición de la Luna", value: `ARS ${formatoPrecio(calcularPrecio(4.99, conPercepcion), "ARS")}`, inline: true },
                    { name: "60 Cristales", value: `ARS ${formatoPrecio(calcularPrecio(0.99, conPercepcion), "ARS")}`, inline: true },
                    { name: "300 Cristales", value: `ARS ${formatoPrecio(calcularPrecio(4.99, conPercepcion), "ARS")}`, inline: true },
                    { name: "980 Cristales", value: `ARS ${formatoPrecio(calcularPrecio(14.99, conPercepcion), "ARS")}`, inline: true },
                    { name: "1980 Cristales", value: `ARS ${formatoPrecio(calcularPrecio(29.99, conPercepcion), "ARS")}`, inline: true },
                    { name: "3280 Cristales", value: `ARS ${formatoPrecio(calcularPrecio(49.99, conPercepcion), "ARS")}`, inline: true },
                    { name: "6480 Cristales", value: `ARS ${formatoPrecio(calcularPrecio(99.99, conPercepcion), "ARS")}`, inline: true }
                );

            return embed;
        };

        const embedConPercepcion = crearEmbedGenshin(true);

        const row = new ActionRowBuilder<ButtonBuilder>()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('conpercepcion_genshin')
                    .setLabel("Con percepción")
                    .setStyle(ButtonStyle.Success),
                new ButtonBuilder()
                    .setCustomId('sinpercepcion_genshin')
                    .setLabel("Sin percepción")
                    .setStyle(ButtonStyle.Primary)
            );

        await interaction.editReply({ embeds: [embedConPercepcion], components: [row] });

        const collector = interaction.channel.createMessageComponentCollector({
            filter: i => ['conpercepcion_genshin', 'sinpercepcion_genshin'].includes(i.customId),
            time: 15000,
        });

        collector.on('collect', async i => {
            await i.deferUpdate();
            const conPercepcion = i.customId === 'conpercepcion_genshin';
            await i.editReply({ embeds: [crearEmbedGenshin(conPercepcion)], components: [row] });
        });

    } 

export default GenshinImpact