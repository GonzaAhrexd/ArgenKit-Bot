import axios from "axios";
import Discord from "discord.js";
import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
const { total21 } = require('../../functions/impuestos');
import { formatoPrecio } from '../../functions/formato';
const wait = require('node:timers/promises').setTimeout;

const leagueoflegends = async (client: any, interaction: any) => {

        const [oficial] = await Promise.all([
            axios.get('https://api.bluelytics.com.ar/v2/latest'),
        ]);
        let valorDolar = oficial.data['oficial']['value_sell']

        const llenarEmbed = (embed, forma: String) => {
            embed.setTitle("League of Legends")
            embed.setURL("https://lan.leagueoflegends.com/es-ar/")
            embed.setDescription(`Los precios de RP en League of Legends con ${forma} en Argentina son los siguientes:`)
            embed.setColor("#000082")
            embed.setThumbnail("https://static.wikia.nocookie.net/leagueoflegendsoficial/images/8/8c/LOL_Logo.png/revision/latest?cb=20180119195439&path-prefix=es")

        }

        const embedTJ: Discord.EmbedBuilder = new Discord.EmbedBuilder()
        llenarEmbed(embedTJ, "tarjeta de crédito/debito")
        embedTJ.addFields(
            { name: "235 RP + 0 RP", value: "ARS" + formatoPrecio(total21(valorDolar * 3.99), "ARS"), inline: true },
            { name: "645 RP + 45 RP", value: "ARS" + formatoPrecio(total21(valorDolar * 10.99), "ARS"), inline: true },
            { name: "1235 RP + 130 RP", value: "ARS" + formatoPrecio(total21(valorDolar * 20.99), "ARS"), inline: true },
            { name: "2060 RP + 315 RP", value: "ARS" + formatoPrecio(total21(valorDolar * 34.99), "ARS"), inline: true },
            { name: "3535 RP + 715 RP", value: "ARS" + formatoPrecio(total21(valorDolar * 59.99), "ARS"), inline: true },
            { name: "5300 RP + 1450 RP", value: "ARS" + formatoPrecio(total21(valorDolar * 89.99), "ARS"), inline: true },
        )
        const embedPP: Discord.EmbedBuilder = new Discord.EmbedBuilder()
        llenarEmbed(embedPP, "pago a plazos")
        embedPP.addFields(
            { name: "1175 RP + 125 RP", value: "ARS" + formatoPrecio(total21(valorDolar * 19.99), "ARS"), inline: true },
            { name: "2060 RP + 315 RP", value: "ARS" + formatoPrecio(total21(valorDolar * 34.99), "ARS"), inline: true },
            { name: "3535 RP + 715 RP", value: "ARS" + formatoPrecio(total21(valorDolar * 59.99), "ARS"), inline: true },
            { name: "7360 RP + 2540 RP", value: "ARS" + formatoPrecio(total21(valorDolar * 124.99), "ARS"), inline: true },
        )

        const embedPPal: Discord.EmbedBuilder = new Discord.EmbedBuilder()
        llenarEmbed(embedPPal, "PayPal")
        embedPPal.addFields(
            { name: "475 RP + 0 RP", value: "ARS" + formatoPrecio(total21(valorDolar * 3.99), "ARS"), inline: true },
            { name: "1300 RP + 80 RP", value: "ARS" + formatoPrecio(total21(valorDolar * 10.99), "ARS"), inline: true },
            { name: "2375 RP + 225 RP", value: "ARS" + formatoPrecio(total21(valorDolar * 19.99), "ARS"), inline: true },
            { name: "4175 RP + 575 RP", value: "ARS" + formatoPrecio(total21(valorDolar * 34.99), "ARS"), inline: true },
            { name: "7150 RP + 1350 RP", value: "ARS" + formatoPrecio(total21(valorDolar * 59.99), "ARS"), inline: true },
            { name: "10725 RP + 2775 RP", value: "ARS" + formatoPrecio(total21(valorDolar * 89.99), "ARS"), inline: true },

        )

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId("tarjeta")
                    .setLabel("Tarjeta de crédito/debito")
                    .setStyle(ButtonStyle.Success)
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId("plazos")
                    .setLabel("Pago a plazos")
                    .setStyle(ButtonStyle.Success)
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId("paypal")
                    .setLabel("PayPal")
                    .setStyle(ButtonStyle.Success)
            )

        await wait(3000)
        await interaction.editReply({ embeds: [embedTJ], components: [row] });


        client.on('interactionCreate', interaction => {
            if (!interaction.isButton()) return;
        });

        const filter = i => i.user.id === interaction.user.id;

        const collector = interaction.channel.createMessageComponentCollector({ filter, time: 20000 });

        var actual = embedTJ;

        collector.on('collect', async i => {
            if (i.customId === 'tarjeta') {
                await i.deferUpdate();
                await i.editReply({ embeds: [embedTJ], components: [row] });
                actual = embedTJ;
            }
            if (i.customId === 'plazos') {
                await i.deferUpdate();
                await i.editReply({ embeds: [embedPP], components: [row] });
                actual = embedPP;
            }
            if (i.customId === 'paypal') {
                await i.deferUpdate();
                await i.editReply({ embeds: [embedPPal], components: [row] });
                actual = embedPPal;
            }
        });


        collector.on("end", (collected, reason) => {
            if (reason === "time") {
                interaction.editReply({ embeds: [actual], components: [] });
            }
        });

    
}


export default leagueoflegends