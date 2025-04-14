
import Discord from "discord.js"
import axios from "axios"
import { ButtonStyle } from 'discord.js'
import { ActionRowBuilder, ButtonBuilder, StringSelectMenuBuilder } from 'discord.js'
import { embedError } from "../functions/embedError"
import { formatoPrecio, formatoNum } from '../functions/formato'
const apiKEY = process.env.apiKeyFinnhub
const wait = require('node:timers/promises').setTimeout
interface Accion {
    symbol: string; // el símbolo de la acción, como AAPL o MSFT
    name: string; // el nombre de la empresa, como Apple o Microsoft
    price: number; // el precio actual de la acción
    previousPrice: number; // el precio anterior de la acción
    porcentaje: number; // el porcentaje que cambió la acción
    ratio: number; // el ratio entre acción y cedear
}
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
            await interaction.deferReply();
            try {
                const [estadoMercado] = await Promise.all([
                    axios.get(`https://finnhub.io/api/v1/stock/market-status?exchange=US&token=${apiKEY}`),
                ]);
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
                    await wait(3000)
                    await interaction.editReply({ embeds: [embed] });


            } catch (err) {
                embedError(interaction, err)
            }


        }
        if (interaction.options.getSubcommand() === 'acciones') {
            const populares = ["Apple", "Coca Cola", "Mercado Libre", "SPDR S&P 500", "Tesla.inc"];
            const tecnologia = ["Apple", "Microsoft", "Alphabet", "Amazon", "Intel", "AMD", "Nvidia", "Tesla.inc", "Qualcom"];
            const nacionales = ["YPF", "Mercado Libre", "Globant", "Despegar.com", "Banco Francés", "Banco Supervielle", "Banco Macro", "Edenor", "Galicia"];
            const gaming = ["Electronic Arts", "Intel", "Microsoft", "Nvidia", "Qualcom", "Roblox Corp", "Sony"];
            const travel = ["Airbnb", "American Airlines", "Despegar.com", "Mastercard", "Visa"];
            const automotriz = ["Tesla.inc", "Ford", "General Motors", "Toyota Motor"];
            const consumo = ["Coca Cola", "Jonhson & Johnson", "Mcdonald's", "Nike Inc", "Pepsico", "Starbucks Corporation"];
        
            let acciones = [
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
                { symbol: "JNJ", name: "Jonhson & Johnson", price: 0, previousPrice: 0, porcentaje: 0, ratio: 15 },
                { symbol: "MCD", name: "Mcdonald's", price: 0, previousPrice: 0, porcentaje: 0, ratio: 24 },
                { symbol: "NKE", name: "Nike Inc", price: 0, previousPrice: 0, porcentaje: 0, ratio: 12 },
                { symbol: "PEP", name: "Pepsico", price: 0, previousPrice: 0, porcentaje: 0, ratio: 6 },
                { symbol: "SBUX", name: "Starbucks Corporation", price: 0, previousPrice: 0, porcentaje: 0, ratio: 4 },
                { symbol: "SPY", name: "SPDR S&P 500", price: 0, previousPrice: 0, porcentaje: 0, ratio: 20 },
                { symbol: "RBLX", name: "Roblox Corp", price: 0, previousPrice: 0, porcentaje: 0, ratio: 2 },
                { symbol: "SONY", name: "Sony", price: 0, previousPrice: 0, porcentaje: 0, ratio: 4 },
                { symbol: "ABNB", name: "Airbnb", price: 0, previousPrice: 0, porcentaje: 0, ratio: 15 },
                { symbol: "AAL", name: "American Airlines", price: 0, previousPrice: 0, porcentaje: 0, ratio: 2 },
                { symbol: "MA", name: "Mastercard", price: 0, previousPrice: 0, porcentaje: 0, ratio: 33 },
                { symbol: "V", name: "Visa", price: 0, previousPrice: 0, porcentaje: 0, ratio: 18 },
                { symbol: "F", name: "Ford", price: 0, previousPrice: 0, porcentaje: 0, ratio: 1 },
                { symbol: "GM", name: "General Motors", price: 0, previousPrice: 0, porcentaje: 0, ratio: 18 },
                { symbol: "TM", name: "Toyota Motor", price: 0, previousPrice: 0, porcentaje: 0, ratio: 5 },
            ];
        
            await interaction.deferReply();
            try {
                // Batch API requests to avoid rate limits
                const chunkSize = 10;
                for (let i = 0; i < acciones.length; i += chunkSize) {
                    const chunk = acciones.slice(i, i + chunkSize);
                    const apiRequests = chunk.map(accion =>
                        axios.get(`https://finnhub.io/api/v1/quote?symbol=${accion.symbol}&token=${apiKEY}`)
                    );
                    const responses = await Promise.all(apiRequests);
                    responses.forEach((response, index) => {
                        chunk[index].price = response.data.c;
                        chunk[index].previousPrice = response.data.pc;
                        chunk[index].porcentaje = response.data.dp;
                    });
                    await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay
                }
        
                const [estadoMercado, dolarCCL] = await Promise.all([
                    axios.get(`https://finnhub.io/api/v1/stock/market-status?exchange=US&token=${apiKEY}`),
                    axios.get(`https://dolarapi.com/v1/dolares/contadoconliqui`),
                ]);
        
                const llenarEmbed = (embedRellenar, tipoAcciones) => {
                    embedRellenar.setTitle("Acciones de empresas")
                        .setColor(estadoMercado.data['isOpen'] ? "Green" : "Red")
                        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1178904578763280456/stock.png?ex=6577d772&is=65656272&hm=d31896e4060b95d263afb323da2c5d36687da9f95998a024ab814dcfecb5d04b&")
                        .setDescription(`Estas son algunas acciones del mercado. Los valores en pesos son una estimación tomando de referencia el dólar CCL`);
                    for (let accion of acciones) {
                        if (tipoAcciones.includes(accion.name)) {
                            let field = {
                                name: `${accion.name} ${subioPrecio(accion)} ${(accion.porcentaje).toFixed(2)}%`,
                                value: `${formatoPrecio(accion.price, "USD")} (NYC)\nARS ${formatoPrecio(((accion.price / accion.ratio) * dolarCCL.data['venta']), "ARS")} (CEDEAR ${accion.ratio}:1) `,
                                inline: true,
                            };
                            embedRellenar.addFields(field);
                        }
                    }
                };
        
                const embed = new Discord.EmbedBuilder();
                llenarEmbed(embed, populares);
        
                const embed2 = new Discord.EmbedBuilder();
                llenarEmbed(embed2, nacionales);
        
                const embed3 = new Discord.EmbedBuilder();
                llenarEmbed(embed3, tecnologia);
        
                const embed4 = new Discord.EmbedBuilder();
                llenarEmbed(embed4, gaming);
        
                const embed5 = new Discord.EmbedBuilder();
                llenarEmbed(embed5, travel);
        
                const embed6 = new Discord.EmbedBuilder();
                llenarEmbed(embed6, automotriz);
        
                const embed7 = new Discord.EmbedBuilder();
                llenarEmbed(embed7, consumo);
        
                const row = new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.StringSelectMenuBuilder()
                            .setCustomId('select')
                            .setPlaceholder('¡Selecciona una de categoría!')
                            .addOptions([
                                { label: 'Populares', description: 'Acciones popularmente más operadas.', value: 'populares', emoji: '🌟' },
                                { label: 'Nacionales', description: 'Acciones de empresas nacionales', value: 'nacionales', emoji: '🇦🇷' },
                                { label: 'Tecnología', description: 'Acciones sobre empresas tecnológicas.', value: 'tecnologia', emoji: '💻' },
                                { label: 'Gaming', description: 'Acciones sobre empresas relacionadas al gaming', value: 'gaming', emoji: '🎮' },
                                { label: 'Travel', description: 'Acciones relacionadas a empresas de viajes', value: 'travel', emoji: '🛩️' },
                                { label: 'Automotriz', description: 'Acciones sobre empresas del sector automotriz', value: 'automotriz', emoji: '🚗' },
                                { label: 'Consumo', description: 'Acciones sobre empresas de consumo', value: 'consumo', emoji: '🥤' },
                            ])
                    );
        
                const collector = interaction.channel.createMessageComponentCollector({
                    componentType: Discord.ComponentType.StringSelect,
                    time: 30000,
                });
        
                await interaction.editReply({ embeds: [embed], components: [row] });
        
                collector.on("collect", async (collected) => {
                    const value = collected.values[0];
                    if (value === "populares") await collected.update({ embeds: [embed], components: [row] });
                    if (value === "nacionales") await collected.update({ embeds: [embed2], components: [row] });
                    if (value === "tecnologia") await collected.update({ embeds: [embed3], components: [row] });
                    if (value === "gaming") await collected.update({ embeds: [embed4], components: [row] });
                    if (value === "travel") await collected.update({ embeds: [embed5], components: [row] });
                    if (value === "automotriz") await collected.update({ embeds: [embed6], components: [row] });
                    if (value === "consumo") await collected.update({ embeds: [embed7], components: [row] });
                });
        
            } catch (error) {
                embedError(interaction, error);
            }
        }


        if (interaction.options.getSubcommand() === 'consultar') {
            let activo = interaction.options.getString('activo')
            await interaction.deferReply();
            try {
                const [estadoMercado, activoValores, dolarCCL] = await Promise.all([
                    axios.get(`https://finnhub.io/api/v1/stock/market-status?exchange=US&token=${apiKEY}`),
                    axios.get(`https://finnhub.io/api/v1/quote?symbol=${activo.toUpperCase()}&token=${apiKEY}`),
                    axios.get(`https://dolarapi.com/v1/dolares/contadoconliqui`),
                ]);
                let accion = {symbol: activo, price: activoValores.data['c'],previousPrice: activoValores.data['pc'], lowPrice: activoValores.data['l'], openPrice: activoValores.data['o'], highPrice: activoValores.data['h'], porcentaje: activoValores.data['dp'] }
                const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                    .setTitle(`Acciones de ${accion.symbol}`)
                    .setColor(estadoMercado.data['isOpen'] ? "Green" : "Red")
                    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1178904578763280456/stock.png?ex=6577d772&is=65656272&hm=d31896e4060b95d263afb323da2c5d36687da9f95998a024ab814dcfecb5d04b&")
                    .setDescription(`Valores de ${accion.symbol} en la bolsa de Nueva York. \nLos valores en pesos son una estimación utilizando el dólar CCL`)
                    .addFields(
                        { name: "Precio actual", value: `${formatoPrecio(accion.price,"USD")}\nARS${formatoPrecio(accion.price*dolarCCL.data['venta'],"ARS")}`, inline: true },
                        { name: "Precio anterior", value: `${formatoPrecio(accion.previousPrice,"USD")}\nARS${formatoPrecio(accion.previousPrice*dolarCCL.data['venta'],"ARS")}`, inline: true },
                        { name: "Variación anterior", value: `${formatoNum(accion.porcentaje.toFixed(2))}% ${subioPrecio(accion)}`, inline: true },
                        { name: "Precio de apertura", value: `${formatoPrecio(accion.openPrice,"USD")}\nARS${formatoPrecio(accion.price*dolarCCL.data['venta'],"ARS")}`, inline: true },
                        { name: "Precio más bajo del día", value: `${formatoPrecio(accion.lowPrice,"USD")}\nARS${formatoPrecio(accion.previousPrice*dolarCCL.data['venta'],"ARS")}`, inline: true },
                        { name: "Precio más alto del día", value: `${formatoPrecio(accion.highPrice,"USD")}\nARS${formatoPrecio(accion.previousPrice*dolarCCL.data['venta'],"ARS")}`, inline: true },
                        )
                await wait(3000)
                await interaction.editReply({ embeds: [embed] });

            } catch (error) {
                embedError(interaction, error)
            }
        }


       
        function subioPrecio(activo): String {
            return activo.price > activo.previousPrice ? "<:triangleup:1178914601799270450>" : "🔻"
        }
    }






}
