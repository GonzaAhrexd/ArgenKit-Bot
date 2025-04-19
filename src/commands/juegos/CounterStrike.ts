import axios from "axios";
import Discord from "discord.js";
import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
const { total21 } = require('../../functions/impuestos');
import { formatoPrecio } from '../../functions/formato';
const wait = require('node:timers/promises').setTimeout;

const CounterStrike = async (client: any, interaction: any) => {
        const [oficial] = await Promise.all([
            axios.get('https://api.bluelytics.com.ar/v2/latest'),
        ]);
        const valorDolar = oficial.data['oficial']['value_sell'];

        const valorConPercepcion = (usd: number) => total21(valorDolar * usd);
        const valorSinPercepcion = (usd: number) => valorDolar * usd;

        const crearEmbed = (conPercepcion: boolean) => {
            const precio = (usd: number) => conPercepcion ? valorConPercepcion(usd) : valorSinPercepcion(usd);

            return new Discord.EmbedBuilder()
                .setTitle("Counter Strike 2")
                .setURL("https://www.counter-strike.net/")
                .setDescription("Los precios en Counter Strike 2 en Argentina son los siguientes:")
                .setColor("#FBAC18")
                .setThumbnail("https://static.wikia.nocookie.net/logopedia/images/4/49/Counter-Strike_2_%28Icon%29.png/revision/latest/scale-to-width-down/150?cb=20230330015359")
                .addFields(
                    { name: "Counter Strike 2 Status Prime", value: `ARS ${formatoPrecio(precio(14.99), "ARS")}`, inline: true },
                    { name: "Llaves para abrir cajas", value: `ARS ${formatoPrecio(precio(2.49), "ARS")}`, inline: true },
                );
        };

        const crearBotones = () => {
            return new Discord.ActionRowBuilder<Discord.ButtonBuilder>().addComponents(
                new Discord.ButtonBuilder()
                    .setCustomId('conpercepcion_cs')
                    .setLabel('Mostrar con IVA')
                    .setStyle(Discord.ButtonStyle.Primary),
                new Discord.ButtonBuilder()
                    .setCustomId('sinpercepcion_cs')
                    .setLabel('Mostrar sin IVA')
                    .setStyle(Discord.ButtonStyle.Success) // Estilo verde para "sin percepción"
            );
        };

        await wait(1000);
        await interaction.editReply({
            embeds: [crearEmbed(true)], // Por defecto con percepción
            components: [crearBotones()]
        });

        const collector = interaction.channel.createMessageComponentCollector({
            filter: i => i.user.id === interaction.user.id,
            time: 60000
        });

        collector.on('collect', async i => {
            const conPercepcion = i.customId === 'conpercepcion_cs';
            await i.update({
                embeds: [crearEmbed(conPercepcion)],
                components: [crearBotones()]
            });
        });

    
}

export default CounterStrike