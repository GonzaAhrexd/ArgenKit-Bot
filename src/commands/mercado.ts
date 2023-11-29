
import Discord from "discord.js"
import axios from "axios"
import { ButtonStyle } from 'discord.js'
import { ActionRowBuilder, ButtonBuilder, StringSelectMenuBuilder } from 'discord.js'
const { formatoPrecio } = require('../functions/formatoPrecio')
const apiKEY = process.env.apiKeyFinnhub
module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('mercado')
        .setDescription('Muestra los datos del mercado')
        .addSubcommand(subcommand =>
            subcommand.setName('estado')
                .setDescription('Muestra el estado actual del mercado')
        ).addSubcommand(subcommand =>
            subcommand.setName('acciones')
                .setDescription('Muestra el precio de algunas acciones')
        ).addSubcommand(subcommand =>
            subcommand.setName('consultar')
                .setDescription('Consulta los valores de un activo del mercado')
                .addStringOption(option =>
                    option.setName('activo')
                        .setDescription('Ingrese el simbolo del activo a consultar.')
                        .setRequired(true)
                )
        ),
    async run(client, interaction, options) {
        if (interaction.options.getSubcommand() === 'estado') {
            try {
                const [estadoMercado] = await Promise.all([
                    axios.get(`https://finnhub.io/api/v1/stock/market-status?exchange=US&token=${apiKEY}`),
                ]);
                console.log(estadoMercado.data['isOpen'])
                const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                    .setTitle("Estado del mercado actual")
                    .setColor(estadoMercado.data['isOpen'] ? "Green" : "Red")
                    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1178904578763280456/stock.png?ex=6577d772&is=65656272&hm=d31896e4060b95d263afb323da2c5d36687da9f95998a024ab814dcfecb5d04b&")
                    .setDescription(`El mercado se encuentra  ${estadoMercado.data['isOpen'] ? "abierto" : "cerrado"}`)
                    .addFields(
                        { name: 'Feriado ', value: ` ${estadoMercado.data['holiday'] == null ? "Ninguno" : estadoMercado.data['holiday']}` },
                        { name: "Estado", value: estadoMercado.data['isOpen'] ? "Abierto" : "Cerrado" },
                        { name: "Sesión", value: `${estadoMercado.data['session'] == null ? "Ninguno" : estadoMercado.data['session']}` },
                    )
                return await interaction.reply({ embeds: [embed] });


            } catch (err) {
                console.error('ERR', err);

                const errorEmbed = new Discord.EmbedBuilder()
                    .setColor("#ff0000")
                    .setTitle("Error")
                    .setDescription("Ha ocurrido un error al obtener los datos desde el API. Por favor, inténtalo de nuevo más tarde.");

                interaction.reply({ embeds: [errorEmbed] });
            }


        }
        if (interaction.options.getSubcommand() === 'acciones') {
            interface Accion {
                symbol: string; // el símbolo de la acción, como AAPL o MSFT
                name: string; // el nombre de la empresa, como Apple o Microsoft
                price: number; // el precio actual de la acción
                previousPrice: number; // el precio anterior de la acción
                porcentaje: number; // el porcentaje que cambió la acción
                ratio: number; // el ratio entre acción y cedear
            }
            const populares: String[] = ["Apple", "Coca Cola", "Mercado Libre", "SPDR S&P 500",  "Tesla.inc"]
            const tecnologia: String[] = ["Apple", "Microsoft", "Alphabet", "Amazon", "Intel", "AMD", "Nvidia", "Tesla.inc", "Qualcom"]
            const nacionales: String[] = ["YPF", "Mercado Libre", "Globant", "Despegar.com", "Banco Francés", "Banco Supervielle", "Banco Macro", "Edenor", "Galicia"]         
            const gaming: String[] = ["Electronic Arts", "Intel", "Microsoft", "Nvidia", "Qualcom", "Roblox Corp", "Sony"]         
            const travel: String[] = ["Airbnb", "American Airlines", "Despegar.com", "Mastercard", "Visa"]         
            const automotriz: String[] = ["Tesla.inc", "Ford", "General Motors", "Toyota Motor"]         
          
            let acciones: Accion[] = [
                { symbol: "AAPL", name: "Apple", price: 0, previousPrice: 0, porcentaje: 0, ratio: 10 },
                { symbol: "MSFT", name: "Microsoft", price: 0, previousPrice: 0, porcentaje: 0, ratio: 30 },
                { symbol: "GOOG", name: "Alphabet", price: 0, previousPrice: 0, porcentaje: 0, ratio: 58 },

                { symbol: "TSLA", name: "Tesla.inc", price: 0, previousPrice: 0, porcentaje: 0, ratio: 15 },
                { symbol: "AMZN", name: "Amazon", price: 0, previousPrice: 0, porcentaje: 0, ratio: 144 },
                { symbol: "QCOM", name: "Qualcom", price: 0, previousPrice: 0, porcentaje: 0, ratio: 11 },
             
                { symbol: "INTC", name: "Intel", price: 0, previousPrice: 0, porcentaje: 0, ratio: 5 },
                { symbol: "AMD", name: "AMD", price: 0, previousPrice: 0, porcentaje: 0, ratio: 10 },
                { symbol: "NVDA", name: "Nvidia", price: 0, previousPrice: 0, porcentaje: 0, ratio: 24 },

                { symbol: "YPF", name: "YPF", price: 0, previousPrice: 0, porcentaje: 0, ratio: 1 },
                { symbol: "MELI", name: "Mercado Libre", price: 0, previousPrice: 0, porcentaje: 0, ratio: 60 },
                { symbol: "GLOB", name: "Globant", price: 0, previousPrice: 0, porcentaje: 0, ratio: 18 },
                { symbol: "DESP", name: "Despegar.com", price: 0, previousPrice: 0, porcentaje: 0, ratio: 18 },
               
                { symbol: "BBAR", name: "Banco Francés", price: 0, previousPrice: 0, porcentaje: 0, ratio: 1 },
                { symbol: "BMA", name: "Banco Macro", price: 0, previousPrice: 0, porcentaje: 0, ratio: 1 },

                { symbol: "SUPV", name: "Banco Supervielle", price: 0, previousPrice: 0, porcentaje: 0, ratio: 1 },
                { symbol: "EDN", name: "Edenor", price: 0, previousPrice: 0, porcentaje: 0, ratio: 1 },
                { symbol: "GGAL", name: "Galicia", price: 0, previousPrice: 0, porcentaje: 0, ratio: 1 },
                
                { symbol: "KO", name: "Coca Cola", price: 0, previousPrice: 0, porcentaje: 0, ratio: 5 },
                { symbol: "SPY", name: "SPDR S&P 500", price: 0, previousPrice: 0, porcentaje: 0, ratio: 20},
                { symbol: "RBLX", name: "Roblox Corp", price: 0, previousPrice: 0, porcentaje: 0, ratio: 2},

                
                { symbol: "SONY", name: "Sony", price: 0, previousPrice: 0, porcentaje: 0, ratio: 4},
                { symbol: "ABNB", name: "Airbnb", price: 0, previousPrice: 0, porcentaje: 0, ratio: 15},
                { symbol: "AAL", name: "American Airlines", price: 0, previousPrice: 0, porcentaje: 0, ratio: 2},
                { symbol: "MA", name: "Mastercard", price: 0, previousPrice: 0, porcentaje: 0, ratio: 33},
                { symbol: "V", name: "Visa", price: 0, previousPrice: 0, porcentaje: 0, ratio: 18},

                { symbol: "F", name: "Ford", price: 0, previousPrice: 0, porcentaje: 0, ratio: 1},
                { symbol: "GM", name: "General  Motors", price: 0, previousPrice: 0, porcentaje: 0, ratio: 18},
                { symbol: "TM", name: "Toyota Motor", price: 0, previousPrice: 0, porcentaje: 0, ratio: 5},

            ]


            try {
                const apiRequests = acciones.map(accion =>
                    axios.get(`https://finnhub.io/api/v1/quote?symbol=${accion.symbol}&token=${apiKEY}`)
                );
                const responses = await Promise.all(apiRequests);

                responses.forEach((response, index) => {
                    acciones[index].price = response.data.c;
                    acciones[index].previousPrice = response.data.pc;
                    acciones[index].porcentaje = response.data.dp;
                });

                const [estadoMercado, dolarMEP] = await Promise.all([
                    axios.get(`https://finnhub.io/api/v1/stock/market-status?exchange=US&token=${apiKEY}`),
                    axios.get(`https://dolarapi.com/v1/dolares/contadoconliqui`),

                ]);


                const llenarEmbed = (embedRellenar, tipoAcciones: String[]) => {
                    embedRellenar.setTitle("Acciones de empresas")
                        .setColor(estadoMercado.data['isOpen'] ? "Green" : "Red")
                        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1178904578763280456/stock.png?ex=6577d772&is=65656272&hm=d31896e4060b95d263afb323da2c5d36687da9f95998a024ab814dcfecb5d04b&")
                        .setDescription(`Estas son algunas acciones del mercado. Los valores en pesos son una estimación tomando de referencia el dólar CCL`)
                    for (let accion of acciones) {
                        // crear un objeto con los campos name, value e inline
                        if (tipoAcciones.includes(accion.name)) {
                            let field = {
                                name: `${accion.name} ${subioPrecio(accion)} ${(accion.porcentaje).toFixed(2)}%`,
                                value: `${formatoPrecio(accion.price, "USD")} (NYC)\nARS ${formatoPrecio(((accion.price / accion.ratio) * dolarMEP.data['venta']), "ARS")} (CEDEAR ${accion.ratio}:1) `,
                                inline: true,
                            };

                            // agregar el objeto al método .addFields()
                            embedRellenar.addFields(field);
                        }
                    }
                }

                const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                llenarEmbed(embed, populares)

                const embed2: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                llenarEmbed(embed2, nacionales)

                const embed3: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                llenarEmbed(embed3, tecnologia)

                const embed4: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                llenarEmbed(embed4, gaming)
                
                const embed5: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                llenarEmbed(embed5, travel)
                 
                // const embed6: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                // llenarEmbed(embed6, automotriz)



                const row = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('populares')
                            .setLabel("Populares")
                            .setStyle(ButtonStyle.Success)
                    ).addComponents(
                        new ButtonBuilder()
                            .setCustomId('nacionales')
                            .setLabel("Nacionales")
                            .setStyle(ButtonStyle.Success)
                    ).addComponents(
                        new ButtonBuilder()
                            .setCustomId('tecnologia')
                            .setLabel("Tecnologia")
                            .setStyle(ButtonStyle.Success)
                    ).addComponents(
                        new ButtonBuilder()
                            .setCustomId('gaming')
                            .setLabel("Gaming")
                            .setStyle(ButtonStyle.Success)
                    ).addComponents(
                        new ButtonBuilder()
                            .setCustomId('travel')
                            .setLabel("Travel")
                            .setStyle(ButtonStyle.Success)
                    )
                    // .addComponents(
                    //     new ButtonBuilder()
                    //         .setCustomId('automotriz')
                    //         .setLabel("Automotriz")
                    //         .setStyle(ButtonStyle.Success)
                    // )

                interaction.deferReply();
                setTimeout(() => {
                    interaction.editReply({ embeds: [embed], components: [row] });
                }, 3000)

                client.on('interactionCreate', interaction => {
                    if (!interaction.isButton()) return;
                });

                const filter = i => i.user.id === interaction.user.id;
                const collector = interaction.channel.createMessageComponentCollector({ filter, time: 30000 });

                collector.on('collect', async i => {
                    if (i.customId === 'populares') {
                        await i.deferUpdate()
                        await i.editReply({ embeds: [embed], components: [row] });
                    }
                    if (i.customId === 'nacionales') {
                        await i.deferUpdate();
                        await i.editReply({ embeds: [embed2], components: [row] });
                    }
                    if (i.customId === 'tecnologia') {
                        await i.deferUpdate();
                        await i.editReply({ embeds: [embed3], components: [row] });
                    }
                    
                    if (i.customId === 'gaming') {
                        await i.deferUpdate();
                        await i.editReply({ embeds: [embed4], components: [row] });
                    }
                    if (i.customId === 'travel') {
                        await i.deferUpdate();
                        await i.editReply({ embeds: [embed5], components: [row] });
                    }
                    // if (i.customId === 'automotriz') {
                    //     await i.deferUpdate();
                    //     await i.editReply({ embeds: [embed6], components: [row] });
                    // }




                    })
                 
                    

            } catch (err) {
                console.error('ERR', err);

                const errorEmbed = new Discord.EmbedBuilder()
                    .setColor("#ff0000")
                    .setTitle("Error")
                    .setDescription("Ha ocurrido un error al obtener los datos desde el API. Por favor, inténtalo de nuevo más tarde.");

                interaction.reply({ embeds: [errorEmbed] });
            }


        }


        function subioPrecio(activo): String {
            return activo.price > activo.previousPrice ? "<:triangleup:1178914601799270450>" : "🔻"
        }

    }


}
