
import { SlashCommandBuilder } from "@discordjs/builders"
import { MessageActionRow, MessageButton, MessageSelectMenu } from 'discord.js'
import Discord from "discord.js"
import axios from "axios"
var currencyFormatter = require('currency-formatter'); //Currency formatter
const { total75, total74, total80 } = require("../functions/impuestos"); //Impuestos
module.exports = {
    data: new SlashCommandBuilder()
        .setName('metal')
        .setDescription('Muestra los datos los datos de un metal')
        .addSubcommand(subcommand =>
            subcommand.setName('oro')
                .setDescription('Muestra los datos y precio del oro')
        ).addSubcommand(subcommand =>
            subcommand.setName('plata')
                .setDescription('Muestra los datos y precio de la plata')
        ).addSubcommand(subcommand =>
            subcommand.setName('paladio')
                .setDescription('Muestra los datos y precio del paladio')
        ).addSubcommand(subcommand =>
            subcommand.setName('platino')
                .setDescription('Muestra los datos y precio del platino')
        ),

    async run(client, interaction, options) {
        //Oro
        let Metales: Array<{
            id: String,
            nombre: String,
            emoji: string,
            desc: string,
            iso: string,
            numeroysimboloatomico: string,
            dureza: string,
            masaatomica: string,
            imagen: string
            color: Discord.ColorResolvable
        }>
            = [{
                id: "oro",
                nombre: "Oro",
                emoji: "<:goldingots:964717629484965938>",
                desc: "El oro es un elemento químico cuyo número atómico es 79. Está ubicado en el grupo 11 de la tabla periódica. Es un metal precioso blando de color amarillo dorado. Su símbolo es Au (del latín aurum, ‘brillante amanecer’). Además, es uno de los metales más apreciados en joyería por sus propiedades físicas, al tener baja alterabilidad, ser muy maleable, dúctil y brillante, y valorado por su rareza, al ser un metal difícil de encontrar en la naturaleza.",
                iso: "ARS",
                numeroysimboloatomico: "79 - Au",
                dureza: "3,0",
                masaatomica: "196,966569(4) u",
                imagen: "https://cdn.discordapp.com/attachments/802944543510495292/964716664023285870/gold-ingots_1.png",
                color: "#fddc4d"
            },
            {
                id: "plata",
                nombre: "Plata",
                emoji: "<:silver:964717593816600606>",
                desc: "La plata es un elemento químico cuyo número atómico es 47. Está ubicado en el grupo 11 de la tabla periódica. Es un metal blanco plateado y muy valorado por sus propiedades conductoras de electricidad y termo conductoras. Además, es uno de los metales más utilizados en la fabricación de joyas y monedas. Su símbolo es Ag (del latín argentum, ‘plata’).",
                iso: "XAG",
                numeroysimboloatomico: "47 - Ag",
                dureza: "2,5",
                masaatomica: "107,8682(2) u",
                imagen: "https://cdn.discordapp.com/attachments/802944543510495292/964713789540958238/silver.png",
                color: "#cccccc"
            },
            {
                id: "paladio",
                nombre: "Paladio",
                emoji: "<:paladio:964717594223456336>",
                desc: "El paladio es un elemento químico cuyo número atómico es 46. Está ubicado en el grupo 10 de la tabla periódica y es un metal blanco plateado. Es valorado por sus propiedades catalíticas y su capacidad para absorber hidrógeno. Se utiliza en la fabricación de catalizadores, joyas y electrónica. Su símbolo es Pd.",
                iso: "XPD",
                numeroysimboloatomico: "46 - Pd",
                dureza: "4",
                masaatomica: "106,42(1) u",
                imagen: "https://cdn.discordapp.com/attachments/802944543510495292/964713789259911218/paladio.png",
                color: "#808080"
            },
            {
                id: "platino",
                nombre: "Platino",
                emoji: "<:platinum:964717592923222017>",
                desc: "El platino es un elemento químico cuyo número atómico es 78. Está ubicado en el grupo 10 de la tabla periódica y es uno de los metales más raros en la corteza terrestre. Es valorado por su alta resistencia a la corrosión y por sus propiedades catalíticas. Se utiliza en la fabricación de joyas, catalizadores y termopares. Su símbolo es Pt.",
                iso: "XPT",
                numeroysimboloatomico: "78 - Pt",
                dureza: "4",
                masaatomica: "195,084(5) u",
                imagen: "https://cdn.discordapp.com/attachments/802944543510495292/964713788978913320/platinum.png",
                color: "#a9f8f7"
            },
            ]
        Metales.forEach( Metal => {
            if (interaction.options.getSubcommand() === Metal.id) {
                 axios.get('https://api.metals.live/v1/spot/') //Precio en dólares
                    .then( (precio) => {
                        let conversion: number = 0

                        if (Metal.id == 'oro')
                            conversion = precio.data[0].gold

                        if (Metal.id == 'plata')
                            conversion = precio.data[1].silver

                        if (Metal.id == 'platino')
                            conversion = precio.data[2].platinum

                        if (Metal.id == 'paladio')
                            conversion = precio.data[3].palladium

                         axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/oficial')

                            .then( (oficial) => {
                                axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/blue')
                                    .then( (blue) => {


                                        const embed1 = new Discord.MessageEmbed()
                                            .setTitle(`${Metal.nombre} ${Metal.emoji}`)
                                            .setColor(Metal.color)
                                            .setDescription(Metal.desc)
                                            .setThumbnail(Metal.imagen)
                                            .addField(`Precio en dólares ${Metal.emoji}`, 'USD$ ' + currencyFormatter.format((conversion), { locale: 'es-ES', code: ' ' }), true)


                                            //Oficial
                                            .addField(`Compra ${Metal.emoji}`, 'ARS$ ' + currencyFormatter.format(((conversion)) * oficial.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                                            .addField(`Venta ${Metal.emoji}`, 'ARS$ ' + currencyFormatter.format(((conversion)) * oficial.data['venta'], { locale: 'es-ES', code: ' ' }), true)

                                            //Impuestos
                                            .addField("IMPUESTOS <:taxes:1068370368819101746>", "\n Precio con los  distintos impuestos en transacciones en dólares  ", false)
                                            .addField("TARJETA (74%)  ", "ARS$ " + currencyFormatter.format(total74((conversion) * oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                                            .addField("SOLIDARIO (75%)  ", "ARS$ " + currencyFormatter.format(total75((conversion) * oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                                            .addField("TURISTA (80%)  ", "ARS$ " + currencyFormatter.format(total80((conversion) * oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)

                                            // //Blue

                                            .addField(Metal.nombre + " a precio blue <:dollarblue:903149186436980767>", "Valor del mercado paralelo establecido por la oferta y la demanda", false)
                                            .addField("COMPRA  ", "ARS$ " + currencyFormatter.format((conversion) * blue.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                                            .addField("VENTA ", "ARS$ " + currencyFormatter.format((conversion) * blue.data['venta'], { locale: 'es-ES', code: ' ' }), true)

                                        const embed2 = new Discord.MessageEmbed()
                                            .setTitle("Oro")
                                            .setColor("#fddc4d")
                                            .setDescription(Metal.desc)
                                            .setThumbnail(Metal.imagen)
                                            .addField("Código ISO", Metal.iso, true)
                                            .addField("Número y símbolo atómico ", Metal.numeroysimboloatomico, true)
                                            .addField("Dureza ", Metal.dureza, true)
                                            .addField("Masa atómica", Metal.masaatomica, true)

                                        const row = new MessageActionRow()
                                            .addComponents(
                                                new MessageButton()
                                                    .setCustomId("conversion")
                                                    .setLabel("💸 Conversión ")
                                                    .setStyle("SUCCESS")
                                            )
                                            .addComponents(
                                                new MessageButton()
                                                    .setCustomId("informacion")
                                                    .setLabel("📋 Información")
                                                    .setStyle("PRIMARY")
                                            )



                                         interaction.deferReply();
                                        setTimeout(() => {
                                            interaction.editReply({ embeds: [embed1], components: [row] });
                                        }, 3000)


                                        client.on('interactionCreate', interaction => {
                                            if (!interaction.isButton()) return;
                                        });
                                        const filter = i => i.user.id === interaction.user.id;
                                        const collector = interaction.channel.createMessageComponentCollector({ filter, time: 8000 });
                                        var actual = embed1
                                        collector.on('collect', async i => {
                                            if (i.customId === 'conversion') {
                                                await i.deferUpdate()
                                                await i.editReply({ embeds: [embed1], components: [row] });
                                                actual = embed1
                                            }
                                            if (i.customId === 'informacion') {
                                                await i.deferUpdate();
                                                await i.editReply({ embeds: [embed2], components: [row] });
                                                actual = embed2
                                            }
                                        })
                                        collector.on("end", (collected, reason) => {
                                            if (reason === "time") {
                                                interaction.editReply({ embeds: [actual], components: [] });
                                            }
                                        })
                                    })
                                    .catch((err) => { // Catch del axios precio en dólares
                                        console.error('Error en la API de dolar blue', err)
                                        const embed = new Discord.MessageEmbed()
                                        .setTitle(`Ha ocurrido un error`)
                                        .setColor(Metal.color)
                                        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1070117134497235005/backup-copy.png")
                                        .setDescription("Ha ocurrido un error relacionado con el api de Metales")
                                    interaction.reply({ embeds: [embed] });
                                    })
                                    .catch((err) => { // Catch del axios dólar oficial
                                        console.error('Error en la API de dolar oficial', err)
                                        const embed = new Discord.MessageEmbed()
                                        .setTitle(`Ha ocurrido un error`)
                                        .setColor(Metal.color)
                                        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1070117134497235005/backup-copy.png")
                                        .setDescription("Ha ocurrido un error relacionado con el api de Metales")
                                    interaction.reply({ embeds: [embed] });
                                    })

                                    .catch((err) => { // Catch del axios dólar blue
                                        console.error('Error en el API de Metales', err)
                                        const embed = new Discord.MessageEmbed()
                                            .setTitle(`Ha ocurrido un error`)
                                            .setColor(Metal.color)
                                            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1070117134497235005/backup-copy.png")
                                            .setDescription("Ha ocurrido un error relacionado con el api de Metales")
                                        interaction.reply({ embeds: [embed] });

                                    })
                            }) //Cierra Precio en  dólares


                    }) //Cierra if == id
            }
        }) //Cierra Async Run del inicio


    }



}