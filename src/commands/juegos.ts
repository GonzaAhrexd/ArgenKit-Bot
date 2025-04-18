//Plantilla basica de un comando de discord.js para transacciones de videojuegos

import axios from "axios";
import Discord from "discord.js"
import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js'
import { embedError } from "../functions/embedError";
const { total51, total21, total30 } = require('../functions/impuestos')
import { formatoPrecio } from '../functions/formato'
const wait = require('node:timers/promises').setTimeout

// Juegos
import FreeFire from './juegos/FreeFire'
module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName("juegos")
        .setDescription("Muestra el precio de  microtransacciones de videojuegos")
        .addSubcommand(subcommand =>
            subcommand.setName('minecraft')
                .setDescription('Muestra el precio de microtransacciones de Minecraft')
        )
        .addSubcommand(subcommand =>
            subcommand.setName('roblox')
                .setDescription('Muestra el precio de microtransacciones de Roblox')
        )
        .addSubcommand(subcommand =>
            subcommand.setName('fortnite')
                .setDescription('Muestra el precio de microtransacciones de Fortnite')
        )
        .addSubcommand(subcommand =>
            subcommand.setName('leagueoflegends')
                .setDescription('Muestra el precio de microtransacciones de League of Legends')
        )
        .addSubcommand(subcommand =>
            subcommand.setName('valorant')
                .setDescription('Muestra el precio de microtransacciones de Valorant')
        ).addSubcommand(subcommand =>
            subcommand.setName('clashroyale')
                .setDescription('Muestra el precio de microtransacciones de Clash Royale')
        )
        .addSubcommand(subcommand =>
            subcommand.setName('clashofclans')
                .setDescription('Muestra el precio de microtransacciones de Clash of Clans')
        )
        .addSubcommand(subcommand =>
            subcommand.setName('freefire')
                .setDescription('Muestra el precio de microtransacciones de Free Fire')
        )
        .addSubcommand(subcommand =>
            subcommand.setName('brawlstars')
                .setDescription('Muestra el precio de microtransacciones de Brawl Stars')
        )
        .addSubcommand(subcommand =>
            subcommand.setName('genshinimpact')
                .setDescription('Muestra el precio de microtransacciones de Genshin Impact')
        )
        .addSubcommand(subcommand =>
            subcommand.setName('counterstrike')
                .setDescription('Muestra el precio de microtransacciones de Counter Strike 2')
        )
    ,
    async run(client, interaction) {
        if (interaction.options.getSubcommand() === 'minecraft') {
            await interaction.deferReply();
            try {
                const [oficial] = await Promise.all([
                    axios.get('https://api.bluelytics.com.ar/v2/latest'),
                ]);
                let valorDolar = oficial.data['oficial']['value_sell']

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


            } catch (error) {
                embedError(interaction, error)
            }
        }
        //Roblox
        if (interaction.options.getSubcommand() === 'roblox') {
            await interaction.deferReply();
            try {
                const [oficial] = await Promise.all([
                    axios.get('https://api.bluelytics.com.ar/v2/latest'),
                ]);
                let valorDolar = oficial.data['oficial']['value_sell']

                const llenarEmbed = (embed, juego) => {
                    embed.setTitle(juego)
                    embed.setURL("https://www.roblox.com/")
                    embed.setDescription(`Los precios de Roblox en Argentina son los siguientes:`)
                    embed.setColor("#ff0000")
                    embed.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/7/7e/Roblox_Logo_2022.jpg")
                }
                const embedPremium: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                llenarEmbed(embedPremium, "Roblox Premium")
                embedPremium.addFields(
                    { name: "Roblox Premium 450", value: "ARS" + formatoPrecio(total51(valorDolar * 4.99), "ARS"), inline: true },
                    { name: "Roblox Premium 1000", value: "ARS" + formatoPrecio(total51(valorDolar * 9.99), "ARS"), inline: true },
                    { name: "Roblox Premium 2200", value: "ARS" + formatoPrecio(total51(valorDolar * 19.99), "ARS"), inline: true },
                )

                const embedRobux: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                llenarEmbed(embedRobux, "Robux")
                embedRobux.addFields(
                    { name: "Robux 400", value: "ARS" + formatoPrecio(total51(valorDolar * 4.99), "ARS"), inline: true },
                    { name: "Robux 800", value: "ARS" + formatoPrecio(total51(valorDolar * 9.99), "ARS"), inline: true },
                    { name: "Robux 1700", value: "ARS" + formatoPrecio(total51(valorDolar * 19.99), "ARS"), inline: true },
                    { name: "Robux 4500", value: "ARS" + formatoPrecio(total51(valorDolar * 49.99), "ARS"), inline: true },
                    { name: "Robux 10000", value: "ARS" + formatoPrecio(total51(valorDolar * 99.99), "ARS"), inline: true },
                    { name: "Robux 22500", value: "ARS" + formatoPrecio(total51(valorDolar * 199.99), "ARS"), inline: true },
                )

                const row = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId("premium")
                            .setLabel("Roblox Premium")
                            .setStyle(ButtonStyle.Success)
                    )
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId("robux")
                            .setLabel("Robux")
                            .setStyle(ButtonStyle.Success)
                    )

                await wait(3000)
                await interaction.editReply({ embeds: [embedPremium], components: [row] });


                client.on('interactionCreate', interaction => {
                    if (!interaction.isButton()) return;
                });

                const filter = i => i.user.id === interaction.user.id;

                const collector = interaction.channel.createMessageComponentCollector({ filter, time: 20000 });

                var actual = embedPremium;

                collector.on('collect', async i => {
                    if (i.customId === 'premium') {
                        await i.deferUpdate();
                        await i.editReply({ embeds: [embedPremium], components: [row] });
                        actual = embedPremium;
                    }
                    if (i.customId === 'robux') {
                        await i.deferUpdate();
                        await i.editReply({ embeds: [embedRobux], components: [row] });
                        actual = embedRobux;
                    }
                });

                collector.on("end", (collected, reason) => {
                    if (reason === "time") {
                        interaction.editReply({ embeds: [actual], components: [] });
                    }
                });


            } catch (error) {
                embedError(interaction, error)
            }
        }

        //Fortnite

        if (interaction.options.getSubcommand() === 'fortnite') {
            await interaction.deferReply();
            try {
                const [oficial] = await Promise.all([
                    axios.get('https://api.bluelytics.com.ar/v2/latest'),
                ]);
                let valorDolar = oficial.data['oficial']['value_sell']

                const embedVbucks: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                embedVbucks.setTitle("Fortnite")
                embedVbucks.setURL("https://www.epicgames.com/fortnite/es-ES/home")
                embedVbucks.setDescription(`Los precios de V-Bucks en Fortnite en Argentina son los siguientes:`)
                embedVbucks.setColor("#77DBF7")
                embedVbucks.setThumbnail("https://static.wikia.nocookie.net/depredador-avp/images/4/4f/Fortnite_F.png/revision/latest?cb=20231126072405&path-prefix=es")
                embedVbucks.addFields(
                    { name: "1000 V-Bucks", value: "ARS" + formatoPrecio(total21(valorDolar * 8.99), "ARS"), inline: true },
                    { name: "2800 V-Bucks", value: "ARS" + formatoPrecio(total21(valorDolar * 22.99), "ARS"), inline: true },
                    { name: "5000 V-Bucks", value: "ARS" + formatoPrecio(total21(valorDolar * 36.99), "ARS"), inline: true },
                    { name: "13500 V-Bucks", value: "ARS" + formatoPrecio(total21(valorDolar * 89.99), "ARS"), inline: true },
                )

                await wait(3000)
                await interaction.editReply({ embeds: [embedVbucks] });


            }
            catch (error) {
                embedError(interaction, error)

            }

        }

        //League of Legends

        if (interaction.options.getSubcommand() === 'leagueoflegends') {
            await interaction.deferReply();
            try {
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
            catch (error) {
                embedError(interaction, error)
            }

        }

        //Genshin Impact
        if (interaction.options.getSubcommand() === 'genshinimpact') {
            await interaction.deferReply();
            try {
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

            } catch (error) {
                embedError(interaction, error);
            }
        }

        // Clash Royale
        if (interaction.options.getSubcommand() === 'clashroyale') {
            await interaction.deferReply();
            try {
                const [oficial] = await Promise.all([
                    axios.get('https://api.bluelytics.com.ar/v2/latest'),
                ]);
                let valorDolar = oficial.data['oficial']['value_sell'];
        
                // Function to create the embed based on perception toggle
                const createClashRoyaleEmbed = (withPerception) => {
                    const embedClashRoyale = new Discord.EmbedBuilder()
                        .setTitle("Clash Royale")
                        .setURL("https://clashroyale.com/es")
                        .setDescription(`Los precios en Clash Royale en Argentina son los siguientes:`)
                        .setColor("#57EAFF")
                        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1181063385966723112/image.png?ex=657fb1fe&is=656d3cfe&hm=77fa2f583d85f9c4b6290adfa300c6fc4d49af6b199d7fe141c1b3c44bbde4a4&");
        
                    const items = [
                        { name: "Pass Royale Oro", price: valorDolar * 6.52 },
                        { name: "Pass Royale Diamante", price: valorDolar * 13.05 },
                        { name: "80 gemas", price: valorDolar * 1.08 },
                        { name: "500 gemas", price: valorDolar * 5.43 },
                        { name: "1200 gemas", price: valorDolar * 10.87 },
                        { name: "2500 gemas", price: valorDolar * 21.76 },
                        { name: "6500 gemas", price: valorDolar * 54.41 },
                        { name: "14000 gemas", price: valorDolar * 108.83 },
                    ];
        
                    items.forEach(item => {
                        const price = withPerception ? total30(item.price) : item.price;
                        embedClashRoyale.addFields({
                            name: item.name,
                            value: `ARS ${formatoPrecio(price, "ARS")}`,
                            inline: true,
                        });
                    });
        
                    return embedClashRoyale;
                };
        
                // Create buttons
                const withPerceptionButton = new Discord.ButtonBuilder()
                    .setCustomId('with_perception')
                    .setLabel('Con Percepción')
                    .setStyle(Discord.ButtonStyle.Primary); // Celeste (Primary)
        
                const withoutPerceptionButton = new Discord.ButtonBuilder()
                    .setCustomId('without_perception')
                    .setLabel('Sin Percepción')
                    .setStyle(Discord.ButtonStyle.Success); // Green (Success)
        
                const row = new Discord.ActionRowBuilder()
                    .addComponents(withPerceptionButton, withoutPerceptionButton);
        
                // Initial embed (with perception by default)
                let currentEmbed = createClashRoyaleEmbed(true);
        
                // Send initial reply
                const message = await interaction.editReply({
                    embeds: [currentEmbed],
                    components: [row],
                });
        
                // Create a collector for button interactions
                const collector = message.createMessageComponentCollector({
                    filter: i => i.user.id === interaction.user.id,
                    time: 60000, // 60 seconds
                });
        
                collector.on('collect', async i => {
                    if (i.customId === 'with_perception') {
                        currentEmbed = createClashRoyaleEmbed(true);
                    } else if (i.customId === 'without_perception') {
                        currentEmbed = createClashRoyaleEmbed(false);
                    }
        
                    await i.update({
                        embeds: [currentEmbed],
                        components: [row],
                    });
                });
        
                collector.on('end', async () => {
                    // Disable buttons after collector ends
                    withPerceptionButton.setDisabled(true);
                    withoutPerceptionButton.setDisabled(true);
                    const disabledRow = new Discord.ActionRowBuilder()
                        .addComponents(withPerceptionButton, withoutPerceptionButton);
        
                    await interaction.editReply({
                        embeds: [currentEmbed],
                        components: [disabledRow],
                    });
                });
            } catch (error) {
                embedError(interaction, error);
            }
        }

        if (interaction.options.getSubcommand() === 'clashofclans') {
            await interaction.deferReply();
            try {
                const [oficial] = await Promise.all([
                    axios.get('https://api.bluelytics.com.ar/v2/latest'),
                ]);
                let valorDolar = oficial.data['oficial']['value_sell'];
        
                // Function to create the embed based on perception toggle
                const createClashOfClansEmbed = (withPerception) => {
                    const embedClashOfClans = new Discord.EmbedBuilder()
                        .setTitle("Clash of Clans")
                        .setURL("https://clashofclans.com/es")
                        .setDescription(`Los precios en Clash of Clans en Argentina son los siguientes:`)
                        .setColor("#FFF956")
                        .setThumbnail("https://play-lh.googleusercontent.com/LByrur1mTmPeNr0ljI-uAUcct1rzmTve5Esau1SwoAzjBXQUby6uHIfHbF9TAT51mgHm=w240-h480-rw");
        
                    const items = [
                        { name: "80 gemas", price: valorDolar * 1.08 },
                        { name: "500 gemas", price: valorDolar * 5.43 },
                        { name: "1200 gemas", price: valorDolar * 10.87 },
                        { name: "2500 gemas", price: valorDolar * 21.76 },
                        { name: "6500 gemas", price: valorDolar * 54.41 },
                        { name: "14000 gemas", price: valorDolar * 108.83 },
                    ];
        
                    items.forEach(item => {
                        const price = withPerception ? total30(item.price) : item.price;
                        embedClashOfClans.addFields({
                            name: item.name,
                            value: `ARS ${formatoPrecio(price, "ARS")}`,
                            inline: true,
                        });
                    });
        
                    return embedClashOfClans;
                };
        
                // Create buttons
                const withPerceptionButton = new Discord.ButtonBuilder()
                    .setCustomId('with_perception')
                    .setLabel('Con Percepción')
                    .setStyle(Discord.ButtonStyle.Primary); // Celeste (Primary)
        
                const withoutPerceptionButton = new Discord.ButtonBuilder()
                    .setCustomId('without_perception')
                    .setLabel('Sin Percepción')
                    .setStyle(Discord.ButtonStyle.Success); // Green (Success)
        
                const row = new Discord.ActionRowBuilder()
                    .addComponents(withPerceptionButton, withoutPerceptionButton);
        
                // Initial embed (with perception by default)
                let currentEmbed = createClashOfClansEmbed(true);
        
                // Send initial reply
                const message = await interaction.editReply({
                    embeds: [currentEmbed],
                    components: [row],
                });
        
                // Create a collector for button interactions
                const collector = message.createMessageComponentCollector({
                    filter: i => i.user.id === interaction.user.id,
                    time: 60000, // 60 seconds
                });
        
                collector.on('collect', async i => {
                    if (i.customId === 'with_perception') {
                        currentEmbed = createClashOfClansEmbed(true);
                    } else if (i.customId === 'without_perception') {
                        currentEmbed = createClashOfClansEmbed(false);
                    }
        
                    await i.update({
                        embeds: [currentEmbed],
                        components: [row],
                    });
                });
        
                collector.on('end', async () => {
                    // Disable buttons after collector ends
                    withPerceptionButton.setDisabled(true);
                    withoutPerceptionButton.setDisabled(true);
                    const disabledRow = new Discord.ActionRowBuilder()
                        .addComponents(withPerceptionButton, withoutPerceptionButton);
        
                    await interaction.editReply({
                        embeds: [currentEmbed],
                        components: [disabledRow],
                    });
                });
            } catch (error) {
                embedError(interaction, error);
            }
        }


        //Counter Strike 2
        if (interaction.options.getSubcommand() === 'counterstrike') {
            await interaction.deferReply();
            try {
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

            } catch (error) {
                embedError(interaction, error);
            }
        }


        if (interaction.options.getSubcommand() === 'brawlstars') {
            await interaction.deferReply();
            try {
                const [oficial] = await Promise.all([
                    axios.get('https://api.bluelytics.com.ar/v2/latest'),
                ]);
                let valorDolar = oficial.data['oficial']['value_sell'];
        
                // Function to create the embed based on perception toggle
                const createBrawlStarsEmbed = (withPerception) => {
                    const embedBrawlStars = new Discord.EmbedBuilder()
                        .setTitle("Brawl Stars")
                        .setURL("https://supercell.com/en/games/brawlstars/")
                        .setDescription(`Los precios en Brawl Stars en Argentina son los siguientes: \nAl pagar debitando de dólar en cuenta bancaria se puede evitar la percepción de ganancias:`)
                        .setColor("#FFBE20")
                        .setThumbnail("https://play-lh.googleusercontent.com/EiElcSrd6-o-19roiswSx0AZPzsq6qF3hUGHsSWDl5UVtj7G23DHkneM8ucwqyOmEg=w480-h960-rw");
        
                    const items = [
                        { name: "30 gemas", price: valorDolar * 1.99 },
                        { name: "80 gemas", price: valorDolar * 4.99 },
                        { name: "170 gemas", price: valorDolar * 9.99 },
                        { name: "360 gemas", price: valorDolar * 19.99 },
                        { name: "950 gemas", price: valorDolar * 49.99 },
                        { name: "2000 gemas", price: valorDolar * 99.99 },
                    ];
        
                    items.forEach(item => {
                        const price = withPerception ? total30(item.price) : item.price;
                        embedBrawlStars.addFields({
                            name: item.name,
                            value: `ARS ${formatoPrecio(price, "ARS")}`,
                            inline: true,
                        });
                    });
        
                    return embedBrawlStars;
                };
        
                // Create buttons
                const withPerceptionButton = new Discord.ButtonBuilder()
                    .setCustomId('with_perception')
                    .setLabel('Con Percepción')
                    .setStyle(Discord.ButtonStyle.Primary); // Celeste (Primary)
        
                const withoutPerceptionButton = new Discord.ButtonBuilder()
                    .setCustomId('without_perception')
                    .setLabel('Sin Percepción')
                    .setStyle(Discord.ButtonStyle.Success); // Green (Success)
        
                const row = new Discord.ActionRowBuilder()
                    .addComponents(withPerceptionButton, withoutPerceptionButton);
        
                // Initial embed (with perception by default)
                let currentEmbed = createBrawlStarsEmbed(true);
        
                // Send initial reply
                const message = await interaction.editReply({
                    embeds: [currentEmbed],
                    components: [row],
                });
        
                // Create a collector for button interactions
                const collector = message.createMessageComponentCollector({
                    filter: i => i.user.id === interaction.user.id,
                    time: 60000, // 60 seconds
                });
        
                collector.on('collect', async i => {
                    if (i.customId === 'with_perception') {
                        currentEmbed = createBrawlStarsEmbed(true);
                    } else if (i.customId === 'without_perception') {
                        currentEmbed = createBrawlStarsEmbed(false);
                    }
        
                    await i.update({
                        embeds: [currentEmbed],
                        components: [row],
                    });
                });
        
                collector.on('end', async () => {
                    // Disable buttons after collector ends
                    withPerceptionButton.setDisabled(true);
                    withoutPerceptionButton.setDisabled(true);
                    const disabledRow = new Discord.ActionRowBuilder()
                        .addComponents(withPerceptionButton, withoutPerceptionButton);
        
                    await interaction.editReply({
                        embeds: [currentEmbed],
                        components: [disabledRow],
                    });
                });
            } catch (error) {
                embedError(interaction, error);
            }
        }
        if (interaction.options.getSubcommand() === 'valorant') {
            await interaction.deferReply();
            try {
                const [oficial] = await Promise.all([
                    axios.get('https://api.bluelytics.com.ar/v2/latest'),
                ]);
                let valorDolar = oficial.data['oficial']['value_sell']

                const embedValorant: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                embedValorant.setTitle("Valorant")
                embedValorant.setURL("https://playvalorant.com/es-es/")
                embedValorant.setDescription(`Los precios en Valorant en Argentina son los siguientes:`)
                embedValorant.setColor("#FF4454")
                embedValorant.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/f/fc/Valorant_logo_-_pink_color_version_%28cropped%29.png")
                embedValorant.addFields(
                    { name: "475 VP", value: "ARS" + formatoPrecio(total21(valorDolar * 4.99), "ARS"), inline: true },
                    { name: "1000 VP", value: "ARS" + formatoPrecio(total21(valorDolar * 9.99), "ARS"), inline: true },
                    { name: "2050 VP", value: "ARS" + formatoPrecio(total21(valorDolar * 19.99), "ARS"), inline: true },
                    { name: "3650 VP", value: "ARS" + formatoPrecio(total21(valorDolar * 34.99), "ARS"), inline: true },
                    { name: "5350 VP", value: "ARS" + formatoPrecio(total21(valorDolar * 49.99), "ARS"), inline: true },
                    { name: "11000 VP", value: "ARS" + formatoPrecio(total21(valorDolar * 99.99), "ARS"), inline: true },
                )

                await wait(3000)
                await interaction.editReply({ embeds: [embedValorant] });
            }
            catch (error) {
                embedError(interaction, error)
            }
        }

        if (interaction.options.getSubcommand() === 'freefire') {
            await interaction.deferReply();
            try{                
                FreeFire(client, interaction)
            } catch (error) {
                embedError(interaction, error);
            }
        }

    }

}