
import Discord from "discord.js"
import axios from "axios"
import { embedError } from "../functions/embedError";
import Criptomonedas from "../variables/criptomonedas-valores"

const wait = require('node:timers/promises').setTimeout
module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('pesoacripto')
        .setDescription('Convierte de Pesos Argentinos a Criptomonedas')
        .addSubcommand(subcommand =>
            subcommand.setName('bitcoin')
                .setDescription('Convierte de Pesos Argentinos a Bitcoin.')
                .addNumberOption(option =>
                    option.setName('ars').setDescription('Monto en Pesos Argentinos.').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('ethereum')
                .setDescription('Convierte de Pesos Argentinos a Ethereum.')
                .addNumberOption(option =>
                    option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('tether')
                .setDescription('Convierte de Pesos Argentinos a Tether.')
                .addNumberOption(option =>
                    option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('axieinfinity')
                .setDescription('Convierte de Pesos Argentinos a Axie Infinity.')
                .addNumberOption(option =>
                    option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('decentraland')
                .setDescription('Convierte de Pesos Argentinos a Decentraland.')
                .addNumberOption(option =>
                    option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('solana')
                .setDescription('Convierte de Pesos Argentinos a Solana.')
                .addNumberOption(option =>
                    option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('dai')
                .setDescription('Convierte de Pesos Argentinos a Dai.')
                .addNumberOption(option =>
                    option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('dogecoin')
                .setDescription('Convierte de Pesos Argentinos a Solana')
                .addNumberOption(option =>
                    option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('terraluna')
                .setDescription('Convierte de Pesos Argentinos a Terraluna 2.0.')
                .addNumberOption(option =>
                    option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('litecoin')
                .setDescription('Convierte de Pesos Argentinos a Litecoin.')
                .addNumberOption(option =>
                    option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('cardano')
                .setDescription('Convierte de Pesos Argentinos a Cardano.')
                .addNumberOption(option =>
                    option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('bnb')
                .setDescription('Convierte de Pesos Argentinos a Binance Coin.')
                .addNumberOption(option =>
                    option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('usdcoin')
                .setDescription('Convierte de Pesos Argentinos a USD Coin.')
                .addNumberOption(option =>
                    option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('avalanche')
                .setDescription('Convierte de Pesos Argentinos a Avalanche.')
                .addNumberOption(option =>
                    option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('polkadot')
                .setDescription('Convierte de Pesos Argentinos a Polkadot.')
                .addNumberOption(option =>
                    option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('uniswap')
                .setDescription('Convierte de Pesos Argentinos a Uniswap.')
                .addNumberOption(option =>
                    option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('polygon')
                .setDescription('Convierte de Pesos Argentinos a Polygon.')
                .addNumberOption(option =>
                    option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('tron')
                .setDescription('Convierte de Pesos Argentinos a Tron.')
                .addNumberOption(option =>
                    option.setName('ars').setDescription('Monto en Pesos Argentinos').setRequired(true)
                )),

    async run(client, interaction, options) {

        Criptomonedas.forEach(async cripto => {
            if (interaction.options.getSubcommand() === cripto.id) {
                let convertir: number = interaction.options.getNumber('ars');
                await interaction.deferReply();
                try {
                    const [apiCoingecko, apiLemon] = await Promise.all([
                        axios.get(cripto.apicoingecko),
                        axios.get(cripto.apilemon),
                    ]);

                    let criptodolar: number = apiCoingecko.data['prices'][0][1];

                    const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                        .setTitle(`Peso Argentino <:rightarrow:921907270747570247> ${cripto.nombre}`)
                        .setColor(cripto.color)
                        .setDescription(`Pesos argentinos expresado en ${cripto.nombre} a la cotización del mercado`)
                        .setThumbnail(cripto.imagen)
                        .addFields(
                            { name: `Monto original :flag_ar: `, value: `ARS$ ${convertir} ` },
                            { name: "Compra :flag_ar: ", value: `${cripto.simbolo}` + ' ' + (cripto.id === "terraluna" ? ((convertir / criptodolar / apiLemon.data['bid']).toFixed(8)) : ((convertir / apiLemon.data['bid']).toFixed(8))), inline: true },
                            { name: "Venta :flag_ar: ", value: `${cripto.simbolo}` + ' ' + (cripto.id === "terraluna" ? ((convertir / criptodolar / apiLemon.data['ask']).toFixed(8)) : ((convertir / apiLemon.data['ask']).toFixed(8))), inline: true }
                        );
                     
                        await wait(3000)
                        await interaction.editReply({ embeds: [embed] });

                } catch (error: any) {
                    embedError(interaction, error);
                }
            }
        });

    } 
}