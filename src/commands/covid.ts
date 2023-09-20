import { SlashCommandBuilder } from "@discordjs/builders"
import Discord from "discord.js"
import axios from "axios"
import translate from "translate"//Translate
import { MessageActionRow, MessageButton, MessageSelectMenu } from 'discord.js'
var currencyFormatter = require('currency-formatter'); //Currency formatter
module.exports = {
    data: new SlashCommandBuilder()
        .setName('covid')
        .setDescription('Muestra comandos relacionados a la infección SARS-CoV-2')
        .addSubcommand(subcommand =>
            subcommand.setName('casos')
                .setDescription('Muestra los casos de covid19 en Argentina.')
        )
        .addSubcommand(subcommand =>
            subcommand.setName('global')
                .setDescription('Muestra los casos de covid19  actuales en el mundo')
        )
        .addSubcommand(subcommand =>
            subcommand.setName('recomendaciones')
                .setDescription('Muestra las recomendaciones con respecto al covid19')
        )
        .addSubcommand(subcommand =>
            subcommand.setName('sintomas')
                .setDescription('Muestra los síntomas del covid19')
        )
        .addSubcommand(subcommand =>
            subcommand.setName('covidpais')
                .setDescription('Muestra los datos de covid de cierto país')
                .addStringOption(option =>
                    option.setName('pais')
                        .setDescription('País a consultar.')
                        .setRequired(false)
                )
        ),
    async run(client, interaction, options) {
        if (interaction.options.getSubcommand() === 'casos') {

            axios.get('https://disease.sh/v3/covid-19/countries/argentina')

                .then((covidArg) => {

                    const embed1:Discord.MessageEmbed = new Discord.MessageEmbed()
                        .setTitle(":flag_ar: Casos totales de Covid-19 en Argentina :flag_ar:")
                        .setColor("#dd5460")
                        .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
                        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928706078806536243/casosarg.png")
                        .addFields(
                            { name: 'Casos :mask:', value: currencyFormatter.format(covidArg.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }), inline: true },
                            { name: 'Testeos :test_tube:', value: currencyFormatter.format(covidArg.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }), inline: true },
                            { name: 'Muertes :skull:', value: currencyFormatter.format(covidArg.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }), inline: true },
                            { name: 'Recuperados :green_square:', value: currencyFormatter.format(covidArg.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }), inline: true },
                            { name: 'Activos :red_square:', value: currencyFormatter.format(covidArg.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }), inline: true },
                        )                    
                    
    
                    const embed2:Discord.MessageEmbed = new Discord.MessageEmbed()
                        .setTitle(":flag_ar: Casos de Covid-19 del día de hoy en Argentina :flag_ar:")
                        .setColor("#dd5460")
                        .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
                        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928706078806536243/casosarg.png")
                        .addFields(
                            { name: 'Casos hoy :mask:', value: currencyFormatter.format(covidArg.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }), inline: true },
                            { name: 'Muertes hoy :skull:', value: currencyFormatter.format(covidArg.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }), inline: true },
                            { name: 'Recuperados hoy :green_square:', value: currencyFormatter.format(covidArg.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0 }), inline: true },
                        )


                    const row = new MessageActionRow()
                        .addComponents(
                            new MessageButton()
                                .setCustomId("previousbtn")
                                .setLabel("😷 Total")
                                .setStyle("DANGER")
                        ).addComponents(
                            new MessageButton()
                                .setCustomId("nextbtn")
                                .setLabel("📅 Hoy")
                                .setStyle("SUCCESS")
                        )


                    interaction.reply({ embeds: [embed1], components: [row] });

                    client.on('interactionCreate', interaction => {
                        if (!interaction.isButton()) return;
                    });


                    const filter = i => i.customId;

                    const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });

                    collector.on('collect', async i => {
                        if (i.customId === 'previousbtn') {
                            await i.deferUpdate()
                            await i.editReply({ embeds: [embed1], components: [row] });
                        }
                        if (i.customId === 'nextbtn') {

                            await i.deferUpdate();
                            await i.editReply({ embeds: [embed2], components: [row] });
                        }

                    });


                })
                .catch((err) => {
                    console.error('ERR', err)


                })


        }

        if (interaction.options.getSubcommand() === 'global') {
            axios.get('https://disease.sh/v3/covid-19/all')
                .then((covidGlobal) => {
                    const embed:Discord.MessageEmbed = new Discord.MessageEmbed()
                        .setTitle(":earth_americas: Casos totales de Covid-19 en el mundo :earth_americas:")
                        .setColor("#dd5460")
                        .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
                        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903133714362531901/casosglobal.png")
                        .addFields(
                            { name: 'Casos :mask:', value: currencyFormatter.format(covidGlobal.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }), inline: true },
                            { name: 'Testeos :test_tube:', value: currencyFormatter.format(covidGlobal.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }), inline: true },
                            { name: 'Muertes :skull:', value: currencyFormatter.format(covidGlobal.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }), inline: true },
                            { name: 'Recuperados :green_square:', value: currencyFormatter.format(covidGlobal.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }), inline: true },
                            { name: 'Activos :red_square:', value: currencyFormatter.format(covidGlobal.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }), inline: true },
                        );
                                       
                    return interaction.reply({ embeds: [embed] });

                })
                .catch((err) => {
                    console.error('ERR', err)


                })

        }
        if (interaction.options.getSubcommand() === 'recomendaciones') {
            const embed:Discord.MessageEmbed = new Discord.MessageEmbed()
                .setTitle(":mask: Recomendaciones ante el Covid-19 :mask: ")
                .setColor("#366ef7")
                .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2. \n Estas son algunas recomendaciones. ")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903136380580937768/mask.png")
                .addFields(
                    { name: ' :open_hands: Lávate las manos con frecuencia ', value: 'Usa agua y jabón o un desinfectante de manos a base de alcohol' },
                    { name: ' :person_walking: Manten la distancia ', value: 'Mantén una distancia de seguridad con personas que tosan o estornuden.' },
                    { name: ' :mask: Usa mascarilla ', value: 'Utiliza mascarilla cuando no sea posible mantener el distanciamiento físico.' },
                    { name: ' :eyes: :no_entry_sign: ', value: 'No te toques los ojos, la nariz ni la boca.' },
                    { name: ' :sneezing_face: Cuidado al estornudar ', value: 'Cuando tosas o estornudes, cúbrete la nariz y la boca con el codo flexionado o con un pañuelo.' },
                    { name: ' :house: Quedate en casa ', value: 'Si no te encuentras bien, quédate en casa.' },
                    { name: ' :ambulance: En caso de síntomas ', value: 'En caso de que tengas fiebre, tos o dificultad para respirar, busca atención médica.' }
                );
            return interaction.reply({ embeds: [embed] });


        }
        if (interaction.options.getSubcommand() === 'sintomas') {
            const embed:Discord.MessageEmbed = new Discord.MessageEmbed()
                .setTitle(":sneezing_face: Síntomas del Covid-19 :mask: ")
                .setColor("#dd5460")
                .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.\n Estos son algunos de los síntomas de la enfermedad, si padece alguno de ellos y no está seguro si tiene el virus se recomienda hacerse un hisopado. ")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903134963501768754/Sintomas.png")
                .addFields(
                    { name: ' :green_circle: Síntomas más habituales', value: ' - Fiebre \n - Tos seca \n - Cansancio ', inline: true },
                    { name: ' :yellow_circle: Síntomas menos comunes', value: ' - Molestias y dolores \n - Dolor de garganta \n - Diarrea \n - Conjuntivitis \n - Dolor de cabeza \n - Pérdida del sentido del olfato o del gusto \n - Erupciones cutáneas o pérdida del color en los dedos de las manos o de los pies', inline: true },
                    { name: ' :red_circle: Síntomas más graves', value: ' - Dificultad para respirar o sensación de falta de aire \n - Dolor o presión en el pecho \n - Incapacidad para hablar o moverse ', inline: true },
                )            
            return interaction.reply({ embeds: [embed] });
        }



        if (interaction.options.getSubcommand() === 'covidpais') {

            //Lista
            let pais:string = interaction.options.getString('pais')
            var pais2:string = ""
            if (pais != null) {
                pais2 = pais.toLowerCase()
            }

            if (pais == null) {

                const embed:Discord.MessageEmbed = new Discord.MessageEmbed()
                    .setTitle("Países disponibles")
                    .setColor("RED")
                    .setDescription("Utiliza `/covid covidpais [nombre del país]` para ver los datos de covid")
                    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903133714362531901/casosglobal.png")
                return interaction.reply({ embeds: [embed] });
            }


            //Todos los paises
            if (pais2.length != 0) {

                let paisEN:string = await translate(pais2, { from: "es", to: "en" });

                if (paisEN == "U.S")
                    paisEN = "USA"

                let covidArg = await axios.get(`https://disease.sh/v3/covid-19/countries/${paisEN}`)

                const nombrePais = await translate(covidArg.data.country, { from: "en", to: "es" })
               
                const embed1:Discord.MessageEmbed = new Discord.MessageEmbed()
                    .setTitle(`:flag_${covidArg.data['countryInfo']['iso2'].toLowerCase()}: Casos totales de Covid-19 en ${nombrePais} :flag_${covidArg.data['countryInfo']['iso2'].toLowerCase()}:`)
                    .setColor("#dd5460")
                    .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
                    .setThumbnail(covidArg.data['countryInfo']['flag'])
                    .addFields(
                        { name: 'Casos :mask:', value: currencyFormatter.format(covidArg.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }), inline: true },
                        { name: 'Testeos :test_tube:', value: currencyFormatter.format(covidArg.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }), inline: true },
                        { name: 'Muertes :skull:', value: currencyFormatter.format(covidArg.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }), inline: true },
                        { name: 'Recuperados :green_square:', value: currencyFormatter.format(covidArg.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }), inline: true },
                        { name: 'Activos :red_square:', value: currencyFormatter.format(covidArg.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }), inline: true },
                    );
                const embed2:Discord.MessageEmbed = new Discord.MessageEmbed()
                    .setTitle(`:flag_${covidArg.data['countryInfo']['iso2'].toLowerCase()}: Casos totales de Covid-19 en ${nombrePais} :flag_${covidArg.data['countryInfo']['iso2'].toLowerCase()}:`)
                    .setThumbnail(covidArg.data['countryInfo']['flag'])
                    .setColor("#dd5460")
                    .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
                    .addFields(
                        { name: 'Casos hoy :mask:', value: currencyFormatter.format(covidArg.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }), inline: true },
                        { name: 'Muertes hoy :skull:', value: currencyFormatter.format(covidArg.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }), inline: true },
                        { name: 'Recuperados hoy :green_square:', value: currencyFormatter.format(covidArg.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0 }), inline: true },
                    );
                const row = new MessageActionRow()
                    .addComponents(
                        new MessageButton()
                            .setCustomId("previousbtn")
                            .setLabel("😷 Total")
                            .setStyle("DANGER")
                    ).addComponents(
                        new MessageButton()
                            .setCustomId("nextbtn")
                            .setLabel("📅 Hoy")
                            .setStyle("SUCCESS")
                    )


                interaction.reply({ embeds: [embed1], components: [row] });

                client.on('interactionCreate', interaction => {
                    if (!interaction.isButton()) return;
                });


                const filter = i => i.customId;

                const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });

                collector.on('collect', async i => {
                    if (i.customId === 'previousbtn') {
                        await i.deferUpdate()
                        await i.editReply({ embeds: [embed1], components: [row] });
                    }
                    if (i.customId === 'nextbtn') {

                        await i.deferUpdate();
                        await i.editReply({ embeds: [embed2], components: [row] });
                    }

                });

            }
        }

    }
}