"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
module.exports = {
    data: new discord_js_1.default.SlashCommandBuilder()
        .setName("api")
        .setDescription("Muestra las apis utilizadas por el bot"),
    async run(client, interaction) {
        const embed = new discord_js_1.default.EmbedBuilder()
            .setTitle("Apis utilizadas para la creación del bot")
            .setColor('#2A2A49')
            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1176941785629605988/api.png?ex=6570b374&is=655e3e74&hm=4b02a674c89605d832e4ce9bd129e933fecf3abce061782548ec8b5ae79512da&")
            .addFields({ name: 'Cotizaciones del dólar', value: "https://dolarapi.com/docs/" }, { name: 'Riesgo País, Feriados y otros datos', value: "https://api.argentinadatos.com/v1/finanzas/indices/riesgo-pais/" }, { name: 'Cotizaciones otras monedas', value: 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json' }, { name: 'Cotizaciones de criptomonedas', value: "https://www.coingecko.com/es" }, { name: 'Cotizaciones de criptomonedas', value: "https://criptoya.com/api" }, { name: 'Cotizaciones de acciones', value: "https://finnhub.io/" }, { name: 'Clima', value: 'https://openweathermap.org/' }, { name: 'PBI y otros datos', value: 'https://datahelpdesk.worldbank.org/knowledgebase/topics/125589-developer-information' }, { name: 'Datos variados sobre variables del BCRA', value: 'https://www.bcra.gob.ar/Catalogo/apis.asp?fileName=principales-variables-v2' });
        await interaction.reply({ embeds: [embed] });
    }
};
