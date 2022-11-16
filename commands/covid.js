const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js");
const axios = require("axios")
var currencyFormatter = require('currency-formatter'); //Currency formatter
const translate = require("translate");//Translate
const { MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js');
const paginationEmbed = require('discordjs-button-pagination'); //Botones
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

                    const embed1 = new Discord.MessageEmbed()
                        .setTitle(":flag_ar: Casos totales de Covid-19 en Argentina :flag_ar:")
                        .setColor("#dd5460")
                        .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
                        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928706078806536243/casosarg.png")
                        .addField("Casos :mask: ", currencyFormatter.format(covidArg.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }), true)
                        .addField("Testeos :test_tube: ", currencyFormatter.format(covidArg.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }), true)
                        .addField("Muertes :skull: ", currencyFormatter.format(covidArg.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }), true)
                        .addField("Recuperados :green_square: ", currencyFormatter.format(covidArg.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }), true)
                        .addField("Activos :red_square: ", currencyFormatter.format(covidArg.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }), true)


                    const embed2 = new Discord.MessageEmbed()
                        .setTitle(":flag_ar: Casos de Covid-19 del día de hoy en Argentina :flag_ar:")
                        .setColor("#dd5460")
                        .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
                        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928706078806536243/casosarg.png")
                        .addField("Casos hoy :mask: ", currencyFormatter.format(covidArg.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }), true)
                        .addField("Muertes hoy :skull: ", currencyFormatter.format(covidArg.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }), true)
                        .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidArg.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0 }), true)




                    const button1 = new MessageButton()
                        .setCustomId("previousbtn")
                        .setLabel("😷 Total")
                        .setStyle("DANGER");

                    const button2 = new MessageButton()
                        .setCustomId("nextbtn")
                        .setLabel("📅 Hoy")
                        .setStyle("SUCCESS");

                    const pages = [
                        embed1,
                        embed2,


                    ];

                    const buttonList = [button1, button2];
                    const timeout = 30000;
                    paginationEmbed(interaction, pages, buttonList, timeout);




                })
                .catch((err) => {
                    console.error('ERR', err)


                })


        }

        if (interaction.options.getSubcommand() === 'global') {
            axios.get('https://disease.sh/v3/covid-19/all')
                .then((covidGlobal) => {
                    const embed = new Discord.MessageEmbed()
                        .setTitle(":earth_americas: Casos totales de Covid-19 en el mundo :earth_americas:")
                        .setColor("#dd5460")
                        .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
                        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903133714362531901/casosglobal.png")
                        .addField("Casos :mask: ", currencyFormatter.format(covidGlobal.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }), true)
                        .addField("Testeos :test_tube: ", currencyFormatter.format(covidGlobal.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }), true)
                        .addField("Muertes :skull: ", currencyFormatter.format(covidGlobal.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }), true)
                        .addField("Recuperados :green_square: ", currencyFormatter.format(covidGlobal.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }), true)
                        .addField("Activos :red_square: ", currencyFormatter.format(covidGlobal.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }), true)

                    return interaction.reply({ embeds: [embed] });

                })
                .catch((err) => {
                    console.error('ERR', err)


                })

        }
        if (interaction.options.getSubcommand() === 'recomendaciones') {
            const embed = new Discord.MessageEmbed()
                .setTitle(":mask: Recomendaciones ante el Covid-19 :mask: ")
                .setColor("#366ef7")
                .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2. \n Estas son algunas recomendaciones. ")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903136380580937768/mask.png")
                .addField(" :open_hands: Lávate las manos con frecuencia ", " Usa agua y jabón o un desinfectante de manos a base de alcohol ")
                .addField(" :person_walking: Manten la distancia ", " Mantén una distancia de seguridad con personas que tosan o estornuden. ")
                .addField(" :mask: Usa mascarilla ", " Utiliza mascarilla cuando no sea posible mantener el distanciamiento físico. ")
                .addField(" :eyes: :no_entry_sign: ", " No te toques los ojos, la nariz ni la boca. ")
                .addField(" :sneezing_face: Cuidado al estornudar ", " Cuando tosas o estornudes, cúbrete la nariz y la boca con el codo flexionado o con un pañuelo. ")
                .addField(" :house: Quedate en casa ", " Si no te encuentras bien, quédate en casa. ")
                .addField(" :ambulance: En caso de síntomas ", " En caso de que tengas fiebre, tos o dificultad para respirar, busca atención médica. ")

            return interaction.reply({ embeds: [embed] });


        }
        if (interaction.options.getSubcommand() === 'sintomas') {
            const embed = new Discord.MessageEmbed()
                .setTitle(":sneezing_face: Síntomas del Covid-19 :mask: ")
                .setColor("#dd5460")
                .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.\n Estos son algunos de los síntomas de la enfermedad, si padece alguno de ellos y no está seguro si tiene el virus se recomienda hacerse un hisopado. ")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903134963501768754/Sintomas.png")
                .addField(" :green_circle: Síntomas más habituales", " - Fiebre \n - Tos seca \n - Cansancio ", true)
                .addField(" :yellow_circle: Síntomas menos comunes", " - Molestias y dolores \n - Dolor de garganta \n - Diarrea \n - Conjuntivitis \n - Dolor de cabeza \n - Pérdida del sentido del olfato o del gusto \n - Erupciones cutáneas o pérdida del color en los dedos de las manos o de los pies", true)
                .addField(" :red_circle: Síntomas más graves", " - Dificultad para respirar o sensación de falta de aire \n - Dolor o presión en el pecho \n - Incapacidad para hablar o moverse ", true)

            return interaction.reply({ embeds: [embed] });
        }



        if (interaction.options.getSubcommand() === 'covidpais') {

            //Lista
            var pais = interaction.options.getString('pais')
            if (pais != null) {
                var pais2 = pais.toLowerCase()
            }

            if (pais == null) {

                const embed = new Discord.MessageEmbed()
                    .setTitle("Países disponibles")
                    .setColor("RED")
                    .setDescription("Utiliza `/covid covidpais [nombre del país]` para ver los datos de covid")
                    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903133714362531901/casosglobal.png")
                return interaction.reply({ embeds: [embed] });
            }


            //Todos los paises
            if (pais2.length != 0) {

                const paisEN = await translate(pais2, { from: "es", to: "en" });
                let covidArg = await axios.get(`https://disease.sh/v3/covid-19/countries/${paisEN}`)

                const nombrePais = await translate(covidArg.data.country, { from: "en", to: "es" })
                console.log(nombrePais)
                const embed1 = new Discord.MessageEmbed()
                    .setTitle(`:flag_${covidArg.data['countryInfo']['iso2'].toLowerCase()}: Casos totales de Covid-19 en ${nombrePais} :flag_${covidArg.data['countryInfo']['iso2'].toLowerCase()}:`)
                    .setColor("#dd5460")
                    .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
                    .setThumbnail(covidArg.data['countryInfo']['flag'])
                    .addField("Casos :mask: ", currencyFormatter.format(covidArg.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }), true)
                    .addField("Testeos :test_tube: ", currencyFormatter.format(covidArg.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }), true)
                    .addField("Muertes :skull: ", currencyFormatter.format(covidArg.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }), true)
                    .addField("Recuperados :green_square: ", currencyFormatter.format(covidArg.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }), true)
                    .addField("Activos :red_square: ", currencyFormatter.format(covidArg.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }), true)

                const embed2 = new Discord.MessageEmbed()
                    .setTitle(`:flag_${covidArg.data['countryInfo']['iso2'].toLowerCase()}: Casos totales de Covid-19 en ${nombrePais} :flag_${covidArg.data['countryInfo']['iso2'].toLowerCase()}:`)
                    .setThumbnail(covidArg.data['countryInfo']['flag'])
                    .setColor("#dd5460")
                    .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
                    .addField("Casos hoy :mask: ", currencyFormatter.format(covidArg.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }), true)
                    .addField("Muertes hoy :skull: ", currencyFormatter.format(covidArg.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }), true)
                    .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidArg.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0 }), true)


                const button1 = new MessageButton()
                    .setCustomId("previousbtn")
                    .setLabel("😷 Total")
                    .setStyle("DANGER");

                const button2 = new MessageButton()
                    .setCustomId("nextbtn")
                    .setLabel("📅 Hoy")
                    .setStyle("SUCCESS");

                const pages = [
                    embed1,
                    embed2,
                ];
                const buttonList = [button1, button2];
                const timeout = 30000;
                paginationEmbed(interaction, pages, buttonList, timeout);
            }
        }

    }
}