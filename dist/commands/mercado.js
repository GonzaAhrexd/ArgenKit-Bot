"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const embedError_1 = require("../functions/embedError");
const formato_1 = require("../functions/formato");
const Mercado_1 = require("../api/Mercado");
const Divisas_1 = require("../api/Divisas");
const wait = require('node:timers/promises').setTimeout;
module.exports = {
    data: new discord_js_1.default.SlashCommandBuilder()
        .setName('mercado')
        .setDescription('Muestra los datos del mercado')
        .addSubcommand(subcommand => subcommand.setName('estado')
        .setDescription('Muestra el estado actual del mercado')).addSubcommand(subcommand => subcommand.setName('acciones')
        .setDescription('Muestra el precio de algunas acciones')).addSubcommand(subcommand => subcommand.setName('consultar')
        .setDescription('Consulta los valores de un activo del mercado')
        .addStringOption(option => option.setName('activo')
        .setDescription('Ingrese el simbolo del activo a consultar.')
        .setRequired(true))),
    async run(client, interaction, options) {
        if (interaction.options.getSubcommand() === 'estado') {
            await interaction.deferReply();
            try {
                const estadoMercado = await (0, Mercado_1.getEstadoMercado)();
                const embed = new discord_js_1.default.EmbedBuilder()
                    .setTitle("Estado del mercado actual")
                    .setColor(estadoMercado.isOpen ? "Green" : "Red")
                    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1178904578763280456/stock.png?ex=6577d772&is=65656272&hm=d31896e4060b95d263afb323da2c5d36687da9f95998a024ab814dcfecb5d04b&")
                    .setDescription(`El mercado se encuentra  ${estadoMercado.isOpen ? "abierto" : "cerrado"}`)
                    .addFields({ name: 'Feriado ', value: ` ${estadoMercado.holiday == null ? "Ninguno" : estadoMercado.holiday}` }, { name: "Estado", value: estadoMercado.isOpen ? "Abierto" : "Cerrado" }, { name: "Sesión", value: `${estadoMercado.session == null ? "Ninguno" : estadoMercado.session}` });
                await wait(3000);
                await interaction.editReply({ embeds: [embed] });
            }
            catch (err) {
                (0, embedError_1.embedError)(interaction, err);
            }
        }
        if (interaction.options.getSubcommand() === 'acciones') {
            // const populares = ["Apple", "Coca Cola", "Mercado Libre", "SPDR S&P 500", "Tesla.inc"];
            // const tecnologia = ["Apple", "Microsoft", "Alphabet", "Amazon", "Intel", "AMD", "Nvidia", "Tesla.inc", "Qualcom"];
            // const nacionales = ["YPF", "Mercado Libre", "Globant", "Despegar.com", "Banco Francés", "Banco Supervielle", "Banco Macro", "Edenor", "Galicia"];
            // const gaming = ["Electronic Arts", "Intel", "Microsoft", "Nvidia", "Qualcom", "Roblox Corp", "Sony"];
            // const travel = ["Airbnb", "American Airlines", "Despegar.com", "Mastercard", "Visa"];
            // const automotriz = ["Tesla.inc", "Ford", "General Motors", "Toyota Motor"];
            // const consumo = ["Coca Cola", "Jonhson & Johnson", "Mcdonald's", "Nike Inc", "Pepsico", "Starbucks Corporation"];
            // let acciones:Accion[] = [
            //     { symbol: "AAPL", name: "Apple", price: 0, previousPrice: 0, porcentaje: 0, ratio: 10 },
            //     { symbol: "MSFT", name: "Microsoft", price: 0, previousPrice: 0, porcentaje: 0, ratio: 30 },
            //     { symbol: "GOOG", name: "Alphabet", price: 0, previousPrice: 0, porcentaje: 0, ratio: 58 },
            //     { symbol: "TSLA", name: "Tesla.inc", price: 0, previousPrice: 0, porcentaje: 0, ratio: 15 },
            //     { symbol: "AMZN", name: "Amazon", price: 0, previousPrice: 0, porcentaje: 0, ratio: 144 },
            //     { symbol: "QCOM", name: "Qualcom", price: 0, previousPrice: 0, porcentaje: 0, ratio: 11 },
            //     { symbol: "INTC", name: "Intel", price: 0, previousPrice: 0, porcentaje: 0, ratio: 5 },
            //     { symbol: "AMD", name: "AMD", price: 0, previousPrice: 0, porcentaje: 0, ratio: 10 },
            //     { symbol: "NVDA", name: "Nvidia", price: 0, previousPrice: 0, porcentaje: 0, ratio: 24 },
            //     { symbol: "YPF", name: "YPF", price: 0, previousPrice: 0, porcentaje: 0, ratio: 1 },
            //     { symbol: "MELI", name: "Mercado Libre", price: 0, previousPrice: 0, porcentaje: 0, ratio: 60 },
            //     { symbol: "GLOB", name: "Globant", price: 0, previousPrice: 0, porcentaje: 0, ratio: 18 },
            //     { symbol: "DESP", name: "Despegar.com", price: 0, previousPrice: 0, porcentaje: 0, ratio: 18 },
            //     { symbol: "BBAR", name: "Banco Francés", price: 0, previousPrice: 0, porcentaje: 0, ratio: 1 },
            //     { symbol: "BMA", name: "Banco Macro", price: 0, previousPrice: 0, porcentaje: 0, ratio: 1 },
            //     { symbol: "SUPV", name: "Banco Supervielle", price: 0, previousPrice: 0, porcentaje: 0, ratio: 1 },
            //     { symbol: "EDN", name: "Edenor", price: 0, previousPrice: 0, porcentaje: 0, ratio: 1 },
            //     { symbol: "GGAL", name: "Galicia", price: 0, previousPrice: 0, porcentaje: 0, ratio: 1 },
            //     { symbol: "KO", name: "Coca Cola", price: 0, previousPrice: 0, porcentaje: 0, ratio: 5 },
            //     { symbol: "JNJ", name: "Jonhson & Johnson", price: 0, previousPrice: 0, porcentaje: 0, ratio: 15 },
            //     { symbol: "MCD", name: "Mcdonald's", price: 0, previousPrice: 0, porcentaje: 0, ratio: 24 },
            //     { symbol: "NKE", name: "Nike Inc", price: 0, previousPrice: 0, porcentaje: 0, ratio: 12 },
            //     { symbol: "PEP", name: "Pepsico", price: 0, previousPrice: 0, porcentaje: 0, ratio: 6 },
            //     { symbol: "SBUX", name: "Starbucks Corporation", price: 0, previousPrice: 0, porcentaje: 0, ratio: 4 },
            //     { symbol: "SPY", name: "SPDR S&P 500", price: 0, previousPrice: 0, porcentaje: 0, ratio: 20 },
            //     { symbol: "RBLX", name: "Roblox Corp", price: 0, previousPrice: 0, porcentaje: 0, ratio: 2 },
            //     { symbol: "SONY", name: "Sony", price: 0, previousPrice: 0, porcentaje: 0, ratio: 4 },
            //     { symbol: "ABNB", name: "Airbnb", price: 0, previousPrice: 0, porcentaje: 0, ratio: 15 },
            //     { symbol: "AAL", name: "American Airlines", price: 0, previousPrice: 0, porcentaje: 0, ratio: 2 },
            //     { symbol: "MA", name: "Mastercard", price: 0, previousPrice: 0, porcentaje: 0, ratio: 33 },
            //     { symbol: "V", name: "Visa", price: 0, previousPrice: 0, porcentaje: 0, ratio: 18 },
            //     { symbol: "F", name: "Ford", price: 0, previousPrice: 0, porcentaje: 0, ratio: 1 },
            //     { symbol: "GM", name: "General Motors", price: 0, previousPrice: 0, porcentaje: 0, ratio: 18 },
            //     { symbol: "TM", name: "Toyota Motor", price: 0, previousPrice: 0, porcentaje: 0, ratio: 5 },
            // ];
            await interaction.deferReply();
            try {
                // Batch API requests to avoid rate limits
                // const chunkSize = 10;
                // for (let i = 0; i < acciones.length; i += chunkSize) {
                //     const chunk = acciones.slice(i, i + chunkSize);
                //     const apiRequests = chunk.map(accion =>
                //         // Utiliza getPrecioAccion(activo); en lugar de axios directamente para ir obteniendo los datos
                //         axios.get(`https://finnhub.io/api/v1/quote?symbol=${accion.symbol}&token=${apiKEY}`)
                //     );
                //     const responses = await Promise.all(apiRequests);
                //     responses.forEach((response, index) => {
                //         chunk[index].price = response.data.c;
                //         chunk[index].previousPrice = response.data.pc;
                //         chunk[index].porcentaje = response.data.dp;
                //     });
                //     await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay
                // }
                // const estadoMercado = await getEstadoMercado();
                // const dolarMep = await getDolarMep();
                // const llenarEmbed = (embedRellenar, tipoAcciones) => {
                //     embedRellenar.setTitle("Acciones de empresas")
                //         .setColor(estadoMercado.isOpen ? "Green" : "Red")
                //         .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1178904578763280456/stock.png?ex=6577d772&is=65656272&hm=d31896e4060b95d263afb323da2c5d36687da9f95998a024ab814dcfecb5d04b&")
                //         .setDescription(`Estas son algunas acciones del mercado.`);
                //     for (let accion of acciones) {
                //         if (tipoAcciones.includes(accion.name)) {
                //             let field = {
                //                 name: `${accion.name} ${subioPrecio(accion)} ${(accion.porcentaje).toFixed(2)}%`,
                //                 value: `${formatoPrecio(accion.price, "USD")} (NYC)\nARS ${formatoPrecio(((accion.price / accion.ratio) * dolarMep.venta), "ARS")} (CEDEAR ${accion.ratio}:1) `,
                //                 inline: true,
                //             };
                //             embedRellenar.addFields(field);
                //         }
                //     }
                // };
                // const embed = new Discord.EmbedBuilder();
                // llenarEmbed(embed, populares);
                // const embed2 = new Discord.EmbedBuilder();
                // llenarEmbed(embed2, nacionales);
                // const embed3 = new Discord.EmbedBuilder();
                // llenarEmbed(embed3, tecnologia);
                // const embed4 = new Discord.EmbedBuilder();
                // llenarEmbed(embed4, gaming);
                // const embed5 = new Discord.EmbedBuilder();
                // llenarEmbed(embed5, travel);
                // const embed6 = new Discord.EmbedBuilder();
                // llenarEmbed(embed6, automotriz);
                // const embed7 = new Discord.EmbedBuilder();
                // llenarEmbed(embed7, consumo);
                // const row = new Discord.ActionRowBuilder()
                //     .addComponents(
                //         new Discord.StringSelectMenuBuilder()
                //             .setCustomId('select')
                //             .setPlaceholder('¡Selecciona una de categoría!')
                //             .addOptions([
                //                 { label: 'Populares', description: 'Acciones popularmente más operadas.', value: 'populares', emoji: '🌟' },
                //                 { label: 'Nacionales', description: 'Acciones de empresas nacionales', value: 'nacionales', emoji: '🇦🇷' },
                //                 { label: 'Tecnología', description: 'Acciones sobre empresas tecnológicas.', value: 'tecnologia', emoji: '💻' },
                //                 { label: 'Gaming', description: 'Acciones sobre empresas relacionadas al gaming', value: 'gaming', emoji: '🎮' },
                //                 { label: 'Travel', description: 'Acciones relacionadas a empresas de viajes', value: 'travel', emoji: '🛩️' },
                //                 { label: 'Automotriz', description: 'Acciones sobre empresas del sector automotriz', value: 'automotriz', emoji: '🚗' },
                //                 { label: 'Consumo', description: 'Acciones sobre empresas de consumo', value: 'consumo', emoji: '🥤' },
                //             ])
                //     );
                // const collector = interaction.channel.createMessageComponentCollector({
                //     componentType: Discord.ComponentType.StringSelect,
                //     time: 30000,
                // });
                // await interaction.editReply({ embeds: [embed], components: [row] });
                // collector.on("collect", async (collected) => {
                //     const value = collected.values[0];
                //     if (value === "populares") await collected.update({ embeds: [embed], components: [row] });
                //     if (value === "nacionales") await collected.update({ embeds: [embed2], components: [row] });
                //     if (value === "tecnologia") await collected.update({ embeds: [embed3], components: [row] });
                //     if (value === "gaming") await collected.update({ embeds: [embed4], components: [row] });
                //     if (value === "travel") await collected.update({ embeds: [embed5], components: [row] });
                //     if (value === "automotriz") await collected.update({ embeds: [embed6], components: [row] });
                //     if (value === "consumo") await collected.update({ embeds: [embed7], components: [row] });
                // });
                const embedMantenimiento = new discord_js_1.default.EmbedBuilder()
                    .setTitle("Comando en mantenimiento")
                    .setColor("Yellow")
                    .setDescription("Este comando se encuentra en proceso de mantenimiento y optimización. Pronto estará disponible nuevamente. ¡Gracias por tu paciencia! De momento, se puede  seguir utilizando el subcomando `/mercado consultar` para consultar acciones específicas.");
                await interaction.editReply({ embeds: [embedMantenimiento] });
            }
            catch (error) {
                (0, embedError_1.embedError)(interaction, error);
            }
        }
        if (interaction.options.getSubcommand() === 'consultar') {
            let activo = interaction.options.getString('activo');
            await interaction.deferReply();
            try {
                const estadoMercado = await (0, Mercado_1.getEstadoMercado)();
                const activoValores = await (0, Mercado_1.getPrecioAccion)(activo);
                const dolarMep = await (0, Divisas_1.getDolarMep)();
                const embed = new discord_js_1.default.EmbedBuilder()
                    .setTitle(`Acciones de ${activo}`)
                    .setColor(estadoMercado.isOpen ? "Green" : "Red")
                    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1178904578763280456/stock.png?ex=6577d772&is=65656272&hm=d31896e4060b95d263afb323da2c5d36687da9f95998a024ab814dcfecb5d04b&")
                    .setDescription(`Valores de ${activo} en la bolsa de Nueva York.`)
                    .addFields({ name: "Precio actual", value: `${(0, formato_1.formatoPrecio)(activoValores.currentPrice, "USD")}\nARS${(0, formato_1.formatoPrecio)(activoValores.currentPrice * dolarMep.venta, "ARS")}`, inline: true }, { name: "Precio anterior", value: `${(0, formato_1.formatoPrecio)(activoValores.previousClosePrice, "USD")}\nARS${(0, formato_1.formatoPrecio)(activoValores.previousClosePrice * dolarMep.venta, "ARS")}`, inline: true }, { name: "Variación anterior", value: `${(0, formato_1.formatoNum)(activoValores.percentChange)}% ${subioPrecio(activoValores)}`, inline: true }, { name: "Precio de apertura", value: `${(0, formato_1.formatoPrecio)(activoValores.openPriceOfDay, "USD")}\nARS${(0, formato_1.formatoPrecio)(activoValores.openPriceOfDay * dolarMep.venta, "ARS")}`, inline: true }, { name: "Precio más bajo del día", value: `${(0, formato_1.formatoPrecio)(activoValores.lowPriceOfDay, "USD")}\nARS${(0, formato_1.formatoPrecio)(activoValores.lowPriceOfDay * dolarMep.venta, "ARS")}`, inline: true }, { name: "Precio más alto del día", value: `${(0, formato_1.formatoPrecio)(activoValores.highPriceOfDay, "USD")}\nARS${(0, formato_1.formatoPrecio)(activoValores.highPriceOfDay * dolarMep.venta, "ARS")}`, inline: true });
                await wait(3000);
                await interaction.editReply({ embeds: [embed] });
            }
            catch (error) {
                (0, embedError_1.embedError)(interaction, error);
            }
        }
        function subioPrecio(activo) {
            return activo.price > activo.previousPrice ? "<:triangleup:1178914601799270450>" : "🔻";
        }
    }
};
