
import axios from "axios";
import Discord from "discord.js"
import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js'
const { total21, total30 } = require('../../functions/impuestos')
import { formatoPrecio } from '../../functions/formato'
const wait = require('node:timers/promises').setTimeout
import { getDolar } from "../../api/Divisas";

const Minecraft = async (client: any, interaction: any ) => {


         const valorDolar = (await getDolar()).oficial.value_sell;
            

        const llenarEmbed = (embed, juego) => {
            embed.setTitle(juego)
            embed.setURL("https://www.minecraft.net/es-es/")
            embed.setDescription(`Los precios de ${juego} en Argentina son los siguientes:`)
            embed.setColor("#00ff00")
            embed.setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1180944033753866350/juego.png?ex=657f42d6&is=656ccdd6&hm=6f2387887ec9d78b7d53397cad2cd39cd8d3b029384d96afebd3bf946c83aa67&")
        }
        const embedJava: Discord.EmbedBuilder = new Discord.EmbedBuilder()
        llenarEmbed(embedJava, "Minecraft Java Edition")
        embedJava.addFields(
            { name: "Minecraft Java & Bedrock Edition for PC", value: "ARS" + formatoPrecio(total21(13199), "ARS"), inline: true },
            { name: "Minecraft Realms (Java)", value: "ARS" + formatoPrecio(total21(valorDolar * 7.99), "ARS"), inline: true },
        )

        const embedBedrock: Discord.EmbedBuilder = new Discord.EmbedBuilder()
        llenarEmbed(embedBedrock, "Minecraft Bedrock Edition")
        embedBedrock.addFields(
            { name: "Minecraft Java & Bedrock Edition for PC", value: "ARS" + formatoPrecio(total21(13199), "ARS"), inline: true },
            { name: "Minecraft Bedrock (Android/iOS)", value: `ARS" + ${formatoPrecio(total30(valorDolar * 7.99), "ARS")} \n${formatoPrecio(valorDolar * 7.99, "ARS")} (Sin percepción)`, inline: true },
            { name: "Minecraft Bedrock (Xbox)", value: "ARS" + formatoPrecio(total21(8799), "ARS"), inline: true },
            { name: "Minecraft Bedrock (PlayStation)", value: "ARS" + formatoPrecio(total21(valorDolar * 19.99), "ARS"), inline: true },
            { name: "Minecraft Bedrock (Nintendo Switch)", value: "ARS" + formatoPrecio(total21(13199), "ARS"), inline: true },
            { name: "Minecraft Realms Plus (Bedrock)", value: "ARS" + formatoPrecio(total21(115), "ARS"), inline: true },
            { name: "320 minecoin", value: "ARS" + formatoPrecio(total21(397), "ARS"), inline: true },
            { name: "960 + 60 minecoin", value: "ARS" + formatoPrecio(total21(1206), "ARS"), inline: true },
            { name: "1600 + 120 minecoin", value: "ARS" + formatoPrecio(total21(1986), "ARS"), inline: true },
            { name: "3200 + 300 minecoin", value: "ARS" + formatoPrecio(total21(4008), "ARS"), inline: true },
            { name: "8000 + 800 minecoin", value: "ARS" + formatoPrecio(total21(9999), "ARS"), inline: true },
        )

        const embedDungeons: Discord.EmbedBuilder = new Discord.EmbedBuilder()
        llenarEmbed(embedDungeons, "Minecraft Dungeons")
        embedDungeons.addFields(
            { name: "Minecraft Dungeons(<:MSTore:1181093660272635914><:Xbox:1181092947949801492><:Switch:1181093657491816528>)", value: "ARS" + formatoPrecio(total21(3999), "ARS"), inline: true },
            { name: "Minecraft Dungeons Edición Definitiva (<:MSTore:1181093660272635914><:Xbox:1181092947949801492>/<:Switch:1181093657491816528>)", value: "ARS" + formatoPrecio(total21(17739), "ARS"), inline: true },
            { name: "Minecraft Dungeons(<:Steam:1181092950567038996><:Playstation:1181092944682426452>)", value: `ARS${formatoPrecio(total21(valorDolar * 19.99), "ARS")}`, inline: true },
            { name: "Minecraft Dungeons Edición Definitiva(<:Steam:1181092950567038996><:Playstation:1181092944682426452>)", value: `ARS${formatoPrecio(total21(valorDolar * 39.99), "ARS")}`, inline: true },
        )

        const embedLegends: Discord.EmbedBuilder = new Discord.EmbedBuilder()
        llenarEmbed(embedLegends, "Minecraft Legends")
        embedLegends.addFields(
            { name: "Minecraft Legends (<:MSTore:1181093660272635914><:Xbox:1181092947949801492><:Switch:1181093657491816528>)", value: `ARS${formatoPrecio(total21(7999), "ARS")}`, inline: true },
            { name: "Minecraft Legends Definitive Edition (<:MSTore:1181093660272635914><:Xbox:1181092947949801492>/<:Switch:1181093657491816528>)", value: `ARS${formatoPrecio(total21(9999), "ARS")}`, inline: true },
            { name: "Minecraft Legends (<:Steam:1181092950567038996><:Playstation:1181092944682426452>)", value: `ARS${formatoPrecio(total21(valorDolar * 39.99), "ARS")}`, inline: true },
            { name: "Minecraft Legends Definitive Edition (<:Steam:1181092950567038996><:Playstation:1181092944682426452>)", value: `ARS${formatoPrecio(total21(valorDolar * 49.99), "ARS")}`, inline: true },

        )


        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId("java")
                    .setLabel("Minecraft Java ")
                    .setStyle(ButtonStyle.Success)
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId("bedrock")
                    .setLabel("Minecraft Bedrock")
                    .setStyle(ButtonStyle.Success)
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId("dungeons")
                    .setLabel("Minecraft Dungeons")
                    .setStyle(ButtonStyle.Danger)
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId("legends")
                    .setLabel("Minecraft Legends")
                    .setStyle(ButtonStyle.Secondary)
            )


        await wait(3000)
        await interaction.editReply({ embeds: [embedJava], components: [row] });


        client.on('interactionCreate', interaction => {
            if (!interaction.isButton()) return;
        });

        const filter = i => i.user.id === interaction.user.id;

        const collector = interaction.channel.createMessageComponentCollector({ filter, time: 20000 });

        var actual = embedJava;

        collector.on('collect', async i => {
            if (i.customId === 'java') {
                await i.deferUpdate();
                await i.editReply({ embeds: [embedJava], components: [row] });
                actual = embedJava;
            }
            if (i.customId === 'bedrock') {
                await i.deferUpdate();
                await i.editReply({ embeds: [embedBedrock], components: [row] });
                actual = embedBedrock;
            }
            if (i.customId === 'dungeons') {
                await i.deferUpdate();
                await i.editReply({ embeds: [embedDungeons], components: [row] });
                actual = embedDungeons;
            }
            if (i.customId === 'legends') {
                await i.deferUpdate();
                await i.editReply({ embeds: [embedLegends], components: [row] });
                actual = embedLegends;
            }
        });

        collector.on("end", (collected, reason) => {
            if (reason === "time") {
                interaction.editReply({ embeds: [actual], components: [] });
            }
        });


    
}

export default Minecraft;