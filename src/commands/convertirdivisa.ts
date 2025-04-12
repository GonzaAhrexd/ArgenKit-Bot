
import Discord from "discord.js"
import axios from "axios"
const { total30, total51 } = require("../functions/impuestos"); //Impuestos
import { formatoPrecio } from '../functions/formato'
import { embedError } from "../functions/embedError"
import divisas from "../variables/divisas-valores";
const wait = require('node:timers/promises').setTimeout
module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('convertirdivisa')
        .setDescription('Convierte de Dolar Estadounidense a Pesos Argentinos')
        .addSubcommand(subcommand =>
            subcommand.setName('dolar')
                .setDescription('Convierte de Dólares Estadounidenses a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('usd')
                        .setDescription('Monto en Dólares.').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('euro')
                .setDescription('Convierte de Euros a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('eur')
                        .setDescription('Monto en Euros.').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('real')
                .setDescription('Convierte de Reales Brasileños a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('brl')
                        .setDescription('Monto en Reales.').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('yen')
                .setDescription('Convierte de Yenes Japoneses a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('jpy')
                        .setDescription('Monto en Yenes.').setRequired(true)
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('libra')
                .setDescription('Convierte de Libras Esterlinas a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('gbp')
                        .setDescription('Monto en Libras.').setRequired(true)
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('rublo')
                .setDescription('Convierte de Rublos Rusos a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('rub')
                        .setDescription('Monto en Rublos.').setRequired(true)
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('dolarcanadiense')
                .setDescription('Convierte de Dólares Canadianos a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('cad')
                        .setDescription('Monto en Dólares Canadianos.').setRequired(true)
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('dolaraustraliano')
                .setDescription('Convierte de Dólares Australianos a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('aud')
                        .setDescription('Monto en Dólares Australianos.').setRequired(true)
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('dolarneozelandes')
                .setDescription('Convierte de Dólares Neozelandeses a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('nzd')
                        .setDescription('Monto en Dólares Neozelandeses.').setRequired(true)
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('pesomexicano')
                .setDescription('Convierte de Pesos Mexicanos a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('mxn')
                        .setDescription('Monto en Pesos Mexicanos.').setRequired(true)
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('pesochileno')
                .setDescription('Convierte de Pesos Chilenos a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('clp')
                        .setDescription('Monto en Pesos Chilenos.').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('pesocolombiano')
                .setDescription('Convierte de Pesos Colombianos a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('cop')
                        .setDescription('Monto en Pesos Colombianos.').setRequired(true)
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('pesouruguayo')
                .setDescription('Convierte de Pesos Uruguayos a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('uyu')
                        .setDescription('Monto en Pesos Uruguayos.').setRequired(true)
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('boliviano')
                .setDescription('Convierte de Bolivianos a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('bob')
                        .setDescription('Monto en Bolivianos.').setRequired(true)
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('sol')
                .setDescription('Convierte de Soles a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('pen')
                        .setDescription('Monto en Soles.').setRequired(true)
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('guarani')
                .setDescription('Convierte de Guaraníes a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('pyg')
                        .setDescription('Monto en Guaraníes.').setRequired(true)
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('bolivar')
                .setDescription('Convierte de Bolívares a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('ves')
                        .setDescription('Monto en Bolívares.').setRequired(true)
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('yuan')
                .setDescription('Convierte de Yuanes a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('cny')
                        .setDescription('Monto en Yuanes.').setRequired(true)
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('rupia')
                .setDescription('Convierte de Rupias a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('inr')
                        .setDescription('Monto en Rupias.').setRequired(true)
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('won')
                .setDescription('Convierte de Wons a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('krw')
                        .setDescription('Monto en Wons.').setRequired(true)
                ))

        .addSubcommand(subcommand =>
            subcommand.setName('franco')
                .setDescription('Convierte de Francos Suizos a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('chf')
                        .setDescription('Monto en Francos.').setRequired(true)
                ))
        .addSubcommand(subcommand =>
            subcommand.setName('lira')
                .setDescription('Convierte de Liras Turcas a Pesos Argentinos')
                .addNumberOption(option =>
                    option.setName('try')
                        .setDescription('Monto en Liras.').setRequired(true)
                )),


    async run(client, interaction, options) {


        divisas.forEach(async divisa => {

            if (interaction.options.getSubcommand() === divisa.id) {
                let convertir = interaction.options.getNumber((divisa.iso).toLowerCase())
                await interaction.deferReply();
                try {

                    const [DIVISA, oficial, blue] = await Promise.all([
                        axios.get('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json'),
                        axios.get('https://dolarapi.com/v1/dolares/oficial'),
                        axios.get('https://dolarapi.com/v1/dolares/blue')
                    ]);
                    let aconvertir = 1
                    if (divisa.iso != "USD") {
                         aconvertir = DIVISA.data['usd'][(divisa.iso).toLowerCase()]
                    }
                    const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                        .setTitle(`${divisa.nombre} <:rightarrow:921907270747570247> Peso Argentino`)
                        .setColor(divisa.color)
                        .setDescription(`${divisa.nombre} expresado en pesos argentinos`)
                        .setThumbnail(divisa.img)
                        .addFields(
                            { name: `Monto original ${divisa.bandera}`, value: `${divisa.simbolo} ${formatoPrecio(convertir, divisa.iso)}` },
                        )
                       
                        if(divisa.iso != "USD"){
                            embed.addFields(
                                { name: `Valor en dólares 💸`, value: `Valor del ${divisa.nombre} en relación al dólar estadounidense.`, inline: false },
                                { name: `${divisa.nombre.toUpperCase()} <:rightarrow:921907270747570247> DÓLAR`, value: ` ${formatoPrecio(convertir / aconvertir, "USD")} `, inline: true },
                            )
                        }    

                        embed.addFields(
                            { name: `${divisa.nombre} oficial :bank: `, value: `Valor del ${divisa.nombre} en pesos argentinos bajo esquema de flotación entre bandas. ` },
                            { name: "Compra :flag_ar: ", value: `ARS${formatoPrecio(((convertir / aconvertir) * oficial.data['compra']), "ARS")}`, inline: true },
                            { name: "Venta :flag_ar: ", value: `ARS${formatoPrecio(((convertir / aconvertir) * oficial.data['venta']), "ARS")}`, inline: true },
                            { name: "Impuestos nacionales", value: `Impuestos sobre tarjetas de crédito y débito a la compra de ${divisa.nombre}`, inline: false },
                            { name: "Percepción de ganancias (30%) ", value: `ARS${formatoPrecio(total30((convertir / aconvertir) * oficial.data['venta']), "ARS")}`, inline: true },
                            { name: "Percepción + IVA (51%) ", value: `ARS${formatoPrecio(total51((convertir / aconvertir) * oficial.data['venta']), "ARS")}`, inline: true },
                            
                        )
                    await wait(3000)
                    await interaction.editReply({ embeds: [embed] });

                } catch (error) {
                    embedError(interaction, error)
                }

            }
        })
    }
}
