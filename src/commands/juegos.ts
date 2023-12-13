//Plantilla basica de un comando de discord.js para transacciones de videojuegos

import axios from "axios";
import Discord from "discord.js"
import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js'
import { embedError } from "../functions/embedError";
const { total59 } = require('../functions/impuestos')
import { formatoPrecio } from '../functions/formato'
const wait = require('node:timers/promises').setTimeout
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
                    axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/oficial'),
                ]);
                let valorDolar = oficial.data['venta']

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
                    { name: "Minecraft Java & Bedrock Edition for PC", value: "ARS" + formatoPrecio(total59(5995), "ARS"), inline: true },
                    { name: "Minecraft Realms (Java)", value: "ARS" + formatoPrecio(total59(valorDolar * 7.99), "ARS"), inline: true },
                )

                const embedBedrock: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                llenarEmbed(embedBedrock, "Minecraft Bedrock Edition")
                embedBedrock.addFields(
                    { name: "Minecraft Java & Bedrock Edition for PC", value: "ARS" + formatoPrecio(total59(5995), "ARS"), inline: true },
                    { name: "Minecraft Bedrock (Android/iOS)", value: "ARS" + formatoPrecio(total59(valorDolar * 7.99), "ARS"), inline: true },
                    { name: "Minecraft Bedrock (Xbox)", value: "ARS" + formatoPrecio(total59(3999), "ARS"), inline: true },
                    { name: "Minecraft Bedrock (PlayStation)", value: "ARS" + formatoPrecio(total59(valorDolar * 19.99), "ARS"), inline: true },
                    { name: "Minecraft Bedrock (Nintendo Switch)", value: "ARS" + formatoPrecio(total59(5999), "ARS"), inline: true },
                    { name: "Minecraft Realms Plus (Bedrock)", value: "ARS" + formatoPrecio(total59(115), "ARS"), inline: true },
                    { name: "320 minecoin", value: "ARS" + formatoPrecio(total59(397), "ARS"), inline: true },
                    { name: "960 + 60 minecoin", value: "ARS" + formatoPrecio(total59(1206), "ARS"), inline: true },
                    { name: "1600 + 120 minecoin", value: "ARS" + formatoPrecio(total59(1986), "ARS"), inline: true },
                    { name: "3200 + 300 minecoin", value: "ARS" + formatoPrecio(total59(4008), "ARS"), inline: true },
                    { name: "8000 + 800 minecoin", value: "ARS" + formatoPrecio(total59(9999), "ARS"), inline: true },
                )

                const embedDungeons: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                llenarEmbed(embedDungeons, "Minecraft Dungeons")
                embedDungeons.addFields(
                    { name: "Minecraft Dungeons(<:MSTore:1181093660272635914><:Xbox:1181092947949801492><:Switch:1181093657491816528>)", value: "ARS" + formatoPrecio(total59(3999), "ARS"), inline: true },
                    { name: "Minecraft Dungeons Edición Definitiva (<:MSTore:1181093660272635914><:Xbox:1181092947949801492>/<:Switch:1181093657491816528>)", value: "ARS" + formatoPrecio(total59(7999), "ARS"), inline: true },
                    { name: "Minecraft Dungeons(<:Steam:1181092950567038996><:Playstation:1181092944682426452>)", value: `ARS${formatoPrecio(total59(valorDolar * 19.99), "ARS")}`, inline: true },
                    { name: "Minecraft Dungeons Edición Definitiva(<:Steam:1181092950567038996><:Playstation:1181092944682426452>)", value: `ARS${formatoPrecio(total59(valorDolar * 39.99), "ARS")}`, inline: true },
                )

                const embedLegends: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                llenarEmbed(embedLegends, "Minecraft Legends")
                embedLegends.addFields(
                    { name: "Minecraft Legends (<:MSTore:1181093660272635914><:Xbox:1181092947949801492><:Switch:1181093657491816528>)", value: `ARS${formatoPrecio(total59(7999), "ARS")}`, inline: true },
                    { name: "Minecraft Legends Definitive Edition (<:MSTore:1181093660272635914><:Xbox:1181092947949801492>/<:Switch:1181093657491816528>)", value: `ARS${formatoPrecio(total59(9999), "ARS")}`, inline: true },
                    { name: "Minecraft Legends (<:Steam:1181092950567038996><:Playstation:1181092944682426452>)", value: `ARS${formatoPrecio(total59(valorDolar * 39.99), "ARS")}`, inline: true },
                    { name: "Minecraft Legends Definitive Edition (<:Steam:1181092950567038996><:Playstation:1181092944682426452>)", value: `ARS${formatoPrecio(total59(valorDolar * 49.99), "ARS")}`, inline: true },

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
                await interaction.editReply({ embeds: [embedJava] });


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
                    axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/oficial'),
                ]);
                let valorDolar = oficial.data['venta']

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
                    { name: "Roblox Premium 450", value: "ARS" + formatoPrecio(total59(valorDolar * 4.99), "ARS"), inline: true },
                    { name: "Roblox Premium 1000", value: "ARS" + formatoPrecio(total59(valorDolar * 9.99), "ARS"), inline: true },
                    { name: "Roblox Premium 2200", value: "ARS" + formatoPrecio(total59(valorDolar * 19.99), "ARS"), inline: true },
                )

                const embedRobux: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                llenarEmbed(embedRobux, "Robux")
                embedRobux.addFields(
                    { name: "Robux 400", value: "ARS" + formatoPrecio(total59(valorDolar * 4.99), "ARS"), inline: true },
                    { name: "Robux 800", value: "ARS" + formatoPrecio(total59(valorDolar * 9.99), "ARS"), inline: true },
                    { name: "Robux 1700", value: "ARS" + formatoPrecio(total59(valorDolar * 19.99), "ARS"), inline: true },
                    { name: "Robux 4500", value: "ARS" + formatoPrecio(total59(valorDolar * 49.99), "ARS"), inline: true },
                    { name: "Robux 10000", value: "ARS" + formatoPrecio(total59(valorDolar * 99.99), "ARS"), inline: true },
                    { name: "Robux 22500", value: "ARS" + formatoPrecio(total59(valorDolar * 199.99), "ARS"), inline: true },
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
                    axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/oficial'),
                ]);
                let valorDolar = oficial.data['venta']

                const embedVbucks: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                embedVbucks.setTitle("Fortnite")
                embedVbucks.setURL("https://www.epicgames.com/fortnite/es-ES/home")
                embedVbucks.setDescription(`Los precios de V-Bucks en Fortnite en Argentina son los siguientes:`)
                embedVbucks.setColor("#77DBF7")
                embedVbucks.setThumbnail("https://static.wikia.nocookie.net/depredador-avp/images/4/4f/Fortnite_F.png/revision/latest?cb=20231126072405&path-prefix=es")
                embedVbucks.addFields(
                    { name: "1000 V-Bucks", value: "ARS" + formatoPrecio(total59(valorDolar * 8.99), "ARS"), inline: true },
                    { name: "2800 V-Bucks", value: "ARS" + formatoPrecio(total59(valorDolar * 22.99), "ARS"), inline: true },
                    { name: "5000 V-Bucks", value: "ARS" + formatoPrecio(total59(valorDolar * 36.99), "ARS"), inline: true },
                    { name: "13500 V-Bucks", value: "ARS" + formatoPrecio(total59(valorDolar * 89.99), "ARS"), inline: true },
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
                    axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/oficial'),
                ]);
                let valorDolar = oficial.data['venta']

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
                    { name: "235 RP + 0 RP", value: "ARS" + formatoPrecio(total59(valorDolar * 3.99), "ARS"), inline: true },
                    { name: "645 RP + 45 RP", value: "ARS" + formatoPrecio(total59(valorDolar * 10.99), "ARS"), inline: true },
                    { name: "1235 RP + 130 RP", value: "ARS" + formatoPrecio(total59(valorDolar * 20.99), "ARS"), inline: true },
                    { name: "2060 RP + 315 RP", value: "ARS" + formatoPrecio(total59(valorDolar * 34.99), "ARS"), inline: true },
                    { name: "3535 RP + 715 RP", value: "ARS" + formatoPrecio(total59(valorDolar * 59.99), "ARS"), inline: true },
                    { name: "5300 RP + 1450 RP", value: "ARS" + formatoPrecio(total59(valorDolar * 89.99), "ARS"), inline: true },
                )
                const embedPP: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                llenarEmbed(embedPP, "pago a plazos")
                embedPP.addFields(
                    { name: "1175 RP + 125 RP", value: "ARS" + formatoPrecio(total59(valorDolar * 19.99), "ARS"), inline: true },
                    { name: "2060 RP + 315 RP", value: "ARS" + formatoPrecio(total59(valorDolar * 34.99), "ARS"), inline: true },
                    { name: "3535 RP + 715 RP", value: "ARS" + formatoPrecio(total59(valorDolar * 59.99), "ARS"), inline: true },
                    { name: "7360 RP + 2540 RP", value: "ARS" + formatoPrecio(total59(valorDolar * 124.99), "ARS"), inline: true },
                )

                const embedPPal: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                llenarEmbed(embedPPal, "PayPal")
                embedPPal.addFields(
                    { name: "475 RP + 0 RP", value: "ARS" + formatoPrecio(total59(valorDolar * 3.99), "ARS"), inline: true },
                    { name: "1300 RP + 80 RP", value: "ARS" + formatoPrecio(total59(valorDolar * 10.99), "ARS"), inline: true },
                    { name: "2375 RP + 225 RP", value: "ARS" + formatoPrecio(total59(valorDolar * 19.99), "ARS"), inline: true },
                    { name: "4175 RP + 575 RP", value: "ARS" + formatoPrecio(total59(valorDolar * 34.99), "ARS"), inline: true },
                    { name: "7150 RP + 1350 RP", value: "ARS" + formatoPrecio(total59(valorDolar * 59.99), "ARS"), inline: true },
                    { name: "10725 RP + 2775 RP", value: "ARS" + formatoPrecio(total59(valorDolar * 89.99), "ARS"), inline: true },

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
                    axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/oficial'),
                ]);
                let valorDolar = oficial.data['venta']

                const embedGenesis: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                embedGenesis.setTitle("Genshin Impact")
                embedGenesis.setURL("https://genshin.mihoyo.com/es/home")
                embedGenesis.setDescription(`Los precios en Genshin Impact en Argentina son los siguientes:`)
                embedGenesis.setColor("#7997D3")
                embedGenesis.setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1181053245804773386/image.png?ex=657fa88c&is=656d338c&hm=ec2dcfd2f9ad4898c65d3b344684da67cdf324916f13c2fabaa5308663a1b4b0&")

                embedGenesis.addFields(
                    { name: "Pase de Batalla", value: "ARS" + formatoPrecio(total59(valorDolar * 9.99), "ARS"), inline: true },
                    { name: "Pase de Batalla + 10 niveles", value: "ARS" + formatoPrecio(total59(valorDolar * 19.99), "ARS"), inline: true },
                    { name: "Bendición de la Luna", value: "ARS" + formatoPrecio(total59(valorDolar * 4.99), "ARS"), inline: true },
                    { name: "60 Cristales ", value: "ARS" + formatoPrecio(total59(valorDolar * 0.99), "ARS"), inline: true },
                    { name: "300 Cristales ", value: "ARS" + formatoPrecio(total59(valorDolar * 4.99), "ARS"), inline: true },
                    { name: "980 Cristales ", value: "ARS" + formatoPrecio(total59(valorDolar * 14.99), "ARS"), inline: true },
                    { name: "1980 Cristales ", value: "ARS" + formatoPrecio(total59(valorDolar * 29.99), "ARS"), inline: true },
                    { name: "3280 Cristales ", value: "ARS" + formatoPrecio(total59(valorDolar * 49.99), "ARS"), inline: true },
                    { name: "6480 Cristales ", value: "ARS" + formatoPrecio(total59(valorDolar * 99.99), "ARS"), inline: true },
                )

        
                await wait(3000)
                await interaction.editReply({ embeds: [embedGenesis] });
               


            }
            catch (error) {
                embedError(interaction, error)
            }

        }

        //Clash Royale
        if (interaction.options.getSubcommand() === 'clashroyale') {
            await interaction.deferReply();
            try {
                const [oficial] = await Promise.all([
                    axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/oficial'),
                ]);
                let valorDolar = oficial.data['venta']

                const embedClashRoyale: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                embedClashRoyale.setTitle("Clash Royale")
                embedClashRoyale.setURL("https://clashroyale.com/es")
                embedClashRoyale.setDescription(`Los precios en Clash Royale en Argentina son los siguientes:`)
                embedClashRoyale.setColor("#57EAFF")
                embedClashRoyale.setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1181063385966723112/image.png?ex=657fb1fe&is=656d3cfe&hm=77fa2f583d85f9c4b6290adfa300c6fc4d49af6b199d7fe141c1b3c44bbde4a4&")

                embedClashRoyale.addFields(
                    { name: "Pass Royale Oro", value: "ARS" + formatoPrecio(total59(valorDolar * 6.52), "ARS"), inline: true },
                    { name: "Pass Royale Diamante", value: "ARS" + formatoPrecio(total59(valorDolar * 13.05), "ARS"), inline: true },
                    { name: "80 gemas", value: "ARS" + formatoPrecio(total59(valorDolar * 1.08), "ARS"), inline: true },
                    { name: "500 gemas", value: "ARS" + formatoPrecio(total59(valorDolar * 5.43), "ARS"), inline: true },
                    { name: "1200 gemas", value: "ARS" + formatoPrecio(total59(valorDolar * 10.87), "ARS"), inline: true },
                    { name: "2500 gemas", value: "ARS" + formatoPrecio(total59(valorDolar * 21.76), "ARS"), inline: true },
                    { name: "6500 gemas", value: "ARS" + formatoPrecio(total59(valorDolar * 54.41), "ARS"), inline: true },
                    { name: "14000 gemas", value: "ARS" + formatoPrecio(total59(valorDolar * 108.83), "ARS"), inline: true },
                )
  
                await wait(3000)
                await interaction.editReply({ embeds: [embedClashRoyale] });

            }
            catch (error) {
                embedError(interaction, error)
            }
        }
        //Clash of Clans
        if (interaction.options.getSubcommand() === 'clashofclans') {
            await interaction.deferReply();
            try {
                const [oficial] = await Promise.all([
                    axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/oficial'),
                ]);
                let valorDolar = oficial.data['venta']

                const embedClashOfClans: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                embedClashOfClans.setTitle("Clash of Clans")
                embedClashOfClans.setURL("https://clashofclans.com/es")
                embedClashOfClans.setDescription(`Los precios en Clash of Clans en Argentina son los siguientes:`)
                embedClashOfClans.setColor("#FFF956")
                embedClashOfClans.setThumbnail("https://play-lh.googleusercontent.com/LByrur1mTmPeNr0ljI-uAUcct1rzmTve5Esau1SwoAzjBXQUby6uHIfHbF9TAT51mgHm=w240-h480-rw")
                embedClashOfClans.addFields(
                    { name: "80 gemas", value: "ARS" + formatoPrecio(total59(valorDolar * 1.08), "ARS"), inline: true },
                    { name: "500 gemas", value: "ARS" + formatoPrecio(total59(valorDolar * 5.43), "ARS"), inline: true },
                    { name: "1200 gemas", value: "ARS" + formatoPrecio(total59(valorDolar * 10.87), "ARS"), inline: true },
                    { name: "2500 gemas", value: "ARS" + formatoPrecio(total59(valorDolar * 21.76), "ARS"), inline: true },
                    { name: "6500 gemas", value: "ARS" + formatoPrecio(total59(valorDolar * 54.41), "ARS"), inline: true },
                    { name: "14000 gemas", value: "ARS" + formatoPrecio(total59(valorDolar * 108.83), "ARS"), inline: true },
                )
                
        
                await wait(3000)
                await interaction.editReply({ embeds: [embedClashOfClans] });

            }
            catch (error) {
                embedError(interaction, error)
            }
        }
        //Counter Strike 2
        if (interaction.options.getSubcommand() === 'counterstrike') {
            await interaction.deferReply();
            try {
                const [oficial] = await Promise.all([
                    axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/oficial'),
                ]);
                let valorDolar = oficial.data['venta']

                const embedCounterStrike: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                embedCounterStrike.setTitle("Counter Strike 2")
                embedCounterStrike.setURL("https://www.counter-strike.net/")
                embedCounterStrike.setDescription(`Los precios en Counter Strike 2 en Argentina son los siguientes:`)
                embedCounterStrike.setColor("#FBAC18")
                embedCounterStrike.setThumbnail("https://static.wikia.nocookie.net/logopedia/images/4/49/Counter-Strike_2_%28Icon%29.png/revision/latest/scale-to-width-down/150?cb=20230330015359")
                embedCounterStrike.addFields(
                    { name: "Counter Strike 2 Status Prime", value: "ARS" + formatoPrecio(total59(valorDolar * 14.99), "ARS"), inline: true },
                    { name: "Llaves para abrir cajas", value: "ARS" + formatoPrecio(total59(valorDolar * 2.49), "ARS"), inline: true },
                )
       
                await wait(3000)
                await interaction.editReply({ embeds: [embedCounterStrike] });
            }
            catch (error) {
                embedError(interaction, error)
            }
        }

        //Brawl Stars
        if (interaction.options.getSubcommand() === 'brawlstars') {
            await interaction.deferReply();
            try {
                const [oficial] = await Promise.all([
                    axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/oficial'),
                ]);
                let valorDolar = oficial.data['venta']

                const embedBrawlStars: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                embedBrawlStars.setTitle("Brawl Stars")
                embedBrawlStars.setURL("https://supercell.com/en/games/brawlstars/")
                embedBrawlStars.setDescription(`Los precios en Brawl Stars en Argentina son los siguientes:`)
                embedBrawlStars.setColor("#FFBE20")
                embedBrawlStars.setThumbnail("https://play-lh.googleusercontent.com/EiElcSrd6-o-19roiswSx0AZPzsq6qF3hUGHsSWDl5UVtj7G23DHkneM8ucwqyOmEg=w480-h960-rw")
                embedBrawlStars.addFields(
                    { name: "30 gemas", value: "ARS" + formatoPrecio(total59(valorDolar * 1.99), "ARS"), inline: true },
                    { name: "80 gemas", value: "ARS" + formatoPrecio(total59(valorDolar * 4.99), "ARS"), inline: true },
                    { name: "170 gemas", value: "ARS" + formatoPrecio(total59(valorDolar * 9.99), "ARS"), inline: true },
                    { name: "360 gemas", value: "ARS" + formatoPrecio(total59(valorDolar * 19.99), "ARS"), inline: true },
                    { name: "950 gemas", value: "ARS" + formatoPrecio(total59(valorDolar * 49.99), "ARS"), inline: true },
                    { name: "2000 gemas", value: "ARS" + formatoPrecio(total59(valorDolar * 99.99), "ARS"), inline: true },
                )

               
                await wait(3000)
                await interaction.editReply({ embeds: [embedBrawlStars] });
            }
            catch (error) {
                embedError(interaction, error)
            }
        }
        if (interaction.options.getSubcommand() === 'valorant') {
            await interaction.deferReply();
            try {
                const [oficial] = await Promise.all([
                    axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/oficial'),
                ]);
                let valorDolar = oficial.data['venta']

                const embedValorant: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                embedValorant.setTitle("Valorant")
                embedValorant.setURL("https://playvalorant.com/es-es/")
                embedValorant.setDescription(`Los precios en Valorant en Argentina son los siguientes:`)
                embedValorant.setColor("#FF4454")
                embedValorant.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/f/fc/Valorant_logo_-_pink_color_version_%28cropped%29.png")
                embedValorant.addFields(
                    { name: "475 VP", value: "ARS" + formatoPrecio(total59(valorDolar * 4.99), "ARS"), inline: true },
                    { name: "1000 VP", value: "ARS" + formatoPrecio(total59(valorDolar * 9.99), "ARS"), inline: true },
                    { name: "2050 VP", value: "ARS" + formatoPrecio(total59(valorDolar * 19.99), "ARS"), inline: true },
                    { name: "3650 VP", value: "ARS" + formatoPrecio(total59(valorDolar * 34.99), "ARS"), inline: true },
                    { name: "5350 VP", value: "ARS" + formatoPrecio(total59(valorDolar * 49.99), "ARS"), inline: true },
                    { name: "11000 VP", value: "ARS" + formatoPrecio(total59(valorDolar * 99.99), "ARS"), inline: true },
                )

                await wait(3000)
                await interaction.editReply({ embeds: [embedValorant] });
            }
            catch (error) {
                embedError(interaction, error)
            }
        }

        if (interaction.options.getSubcommand() === "freefire") {
            await interaction.deferReply();
            try {
                const [oficial] = await Promise.all([
                    axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/oficial'),
                ]);
                let valorDolar = oficial.data['venta']

                const embedFreeFire: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                embedFreeFire.setTitle("Free Fire")
                embedFreeFire.setURL("https://www.freefiremobile.com/es/")
                embedFreeFire.setDescription(`Los precios en Free Fire en Argentina son los siguientes:`)
                embedFreeFire.setColor("#E87914")
                embedFreeFire.setThumbnail("https://upload.wikimedia.org/wikipedia/en/c/c5/Logo_of_Garena_Free_Fire.png")
                embedFreeFire.addFields(
                    { name: "Membresia semanal", value: "ARS" + formatoPrecio(total59(valorDolar * 2.16), "ARS"), inline: true },
                    { name: "Membresia mensual", value: "ARS" + formatoPrecio(total59(valorDolar * 10.86), "ARS"), inline: true },
                    { name: "100 diamantes", value: "ARS" + formatoPrecio(total59(valorDolar * 1.11), "ARS"), inline: true },
                    { name: "310 diamantes", value: "ARS" + formatoPrecio(total59(valorDolar * 3.36), "ARS"), inline: true },
                    { name: "520 diamantes", value: "ARS" + formatoPrecio(total59(valorDolar * 5.23), "ARS"), inline: true },
                    { name: "1060 diamantes", value: "ARS" + formatoPrecio(total59(valorDolar * 11.22), "ARS"), inline: true },
                    { name: "2180 diamantes", value: "ARS" + formatoPrecio(total59(valorDolar * 21.71), "ARS"), inline: true },
                    { name: "5600 diamantes", value: "ARS" + formatoPrecio(total59(valorDolar * 51.68), "ARS"), inline: true },
                )

                await wait(3000)
                await interaction.editReply({ embeds: [embedFreeFire] });
            }
            catch (error) {
                embedError(interaction, error)
            }
        }

    }

}