const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const { MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js');
const paginationEmbed = require('discordjs-button-pagination'); //Botones
const Discord = require("discord.js");
const { porcentaje } = require("../functions/funPorcentaje");
const axios = require("axios")
var currencyFormatter = require('currency-formatter'); //Currency formatter
const { total75, total74, total100  } = require("../functions/impuestos"); //Impuestos
module.exports = {
    data: new SlashCommandBuilder()
        .setName('divisa')
        .setDescription('Mostrar los datos de una divisa y todos sus tipos de cambio')
        .addSubcommand(subcommand =>
            subcommand.setName('dolar')
                .setDescription('Muestra los datos y tipos de cambio del dólar')
        ).addSubcommand(subcommand =>
            subcommand.setName('euro')
                .setDescription('Muestra los datos y tipos de cambio del euro')
        ).addSubcommand(subcommand =>
            subcommand.setName('real')
                .setDescription('Muestra los datos y tipos de cambio del real')
        )
        .addSubcommand(subcommand =>
            subcommand.setName('libra')
                .setDescription('Muestra los datos y tipos de cambio de la libra')
        ).addSubcommand(subcommand =>
            subcommand.setName('yen')
                .setDescription('Muestra los datos y tipos de cambio del yen')
        ).addSubcommand(subcommand =>
            subcommand.setName('rublo')
                .setDescription('Muestra los datos y tipos de cambio del rublo')
        )
        .addSubcommand(subcommand =>
            subcommand.setName('dolarcanadiense')
                .setDescription('Muestra los datos y tipos de cambio del Dólar Canadiense')
        ).addSubcommand(subcommand =>
            subcommand.setName('dolaraustraliano')
                .setDescription('Muestra los datos y tipos de cambio del Dólar Australiano')
        ).addSubcommand(subcommand =>
            subcommand.setName('dolarneozelandes')
                .setDescription('Muestra los datos y tipos de cambio del Dólar Neozelandés')
        )
        .addSubcommand(subcommand =>
            subcommand.setName('pesomexicano')
                .setDescription('Muestra los datos y tipos de cambio del Peso Mexicano')
        ).addSubcommand(subcommand =>
            subcommand.setName('pesochileno')
                .setDescription('Muestra los datos y tipos de cambio del Peso Chileno')
        ).addSubcommand(subcommand =>
            subcommand.setName('pesouruguayo')
                .setDescription('Muestra los datos y tipos de cambio del Peso Uruguayo')
        ).addSubcommand(subcommand =>
            subcommand.setName('pesocolombiano')
                .setDescription('Muestra los datos y tipos de cambio del Peso Colombiano')
        )
        .addSubcommand(subcommand =>
            subcommand.setName('boliviano')
                .setDescription('Muestra los datos y tipos de cambio del Boliviano')
        ).addSubcommand(subcommand =>
            subcommand.setName('sol')
                .setDescription('Muestra los datos y tipos de cambio del Sol')
        ).addSubcommand(subcommand =>
            subcommand.setName('guarani')
                .setDescription('Muestra los datos y tipos de cambio del Guarani')
        ).addSubcommand(subcommand =>
            subcommand.setName('bolivar')
                .setDescription('Muestra los datos y tipos de cambio del Bolivar Digital Venezolano')
        ).addSubcommand(subcommand =>
            subcommand.setName('yuan')
                .setDescription('Muestra los datos y tipos de cambio del Yuan chino')
        ).addSubcommand(subcommand =>
            subcommand.setName('rupia')
                .setDescription('Muestra los datos y tipos de cambio del Rupia rusa')
        ).addSubcommand(subcommand =>
            subcommand.setName('won')
                .setDescription('Muestra los datos y tipos de cambio del Won surcoreano')
        ).addSubcommand(subcommand =>
            subcommand.setName('franco')
                .setDescription('Muestra los datos y tipos de cambio del Franco suizo')
        ).addSubcommand(subcommand =>
            subcommand.setName('lira')
                .setDescription('Muestra los datos y tipos de cambio del Lira turca')
        )

    ,

    async run(client, interaction, options) {


        if (interaction.options.getSubcommand() === 'dolar') {

            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/oficial')
                .then((oficial) => {
                    axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/blue')
                        .then((blue) => {
                            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/bolsa')
                                .then((mep) => {
                                    axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/contadoliqui')
                                        .then((ccl) => {

                                            const embed1 = new Discord.MessageEmbed()
                                                .setTitle("Dólar estadounidese :flag_us:")
                                                .setColor("#a9ea98")
                                                .setDescription("El dólar estadounidense es la moneda oficial de Estados Unidos y de otros países y dependencias. Tras la ruptura del patrón oro en el año 1971, la moneda se convirtió, de facto, en una moneda fiat.")
                                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903145945980604447/dolar3.png")
                                                
                                                //Oficial
                                                .addField("Dólar oficial :bank: ", "Valor del dólar que se liquida por parte del gobierno nacional y está sujeto a diversos impuestos, sólo se puede retirar USD$200 al mes.", false)
                                                .addField("COMPRA  ", "ARS$ " + currencyFormatter.format(oficial.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                                                .addField("VENTA  ", "ARS$ " + currencyFormatter.format(oficial.data['venta'], { locale: 'es-ES', code: ' ' }), true)
                                            

                                                //Impuestos
                                                .addField("IMPUESTOS <:taxes:1068370368819101746>", "\n Impuestos aplicados al dólar oficial en los pagos con tarjeta o compra del banco  ", false)
                                                .addField("TARJETA (74%)  ", "ARS$ " + currencyFormatter.format(total74(oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                                                .addField("SOLIDARIO (75%)  ", "ARS$ " + currencyFormatter.format(total75(oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                                                .addField("TURISTA (100%)  ", "ARS$ " + currencyFormatter.format(total100(oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                                                
                                                
                                                //Blue
                                                .addField("Dólar blue <:dollarblue:903149186436980767>", "Valor del mercado paralelo establecido por la oferta y la demanda", false)
                                                .addField("COMPRA  ", "ARS$ " + currencyFormatter.format(blue.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                                                .addField("VENTA ", "ARS$ " + currencyFormatter.format(blue.data['venta'], { locale: 'es-ES', code: ' ' }), true)
                                                
                                                //Financieros
                                                .addField("Financieros <:finanzas:1068357650380755045>", "Son el resultante de operaciones bursátiles que implican comprar una acción o un bono en pesos y vender ese mismo papel en dólares.", false)
                                                .addField("CCL  ", "ARS$ " + currencyFormatter.format(ccl.data['venta'], { locale: 'es-ES', code: ' ' }), true)
                                                .addField("MEP ", "ARS$ " + currencyFormatter.format(mep.data['venta'], { locale: 'es-ES', code: ' ' }), true)

                                            const embed2 = new Discord.MessageEmbed()
                                                .setTitle("Dólar estadounidense")
                                                .setColor("#a9ea98")
                                                .setDescription("El dólar estadounidense es la moneda oficial de Estados Unidos y de otros países y dependencias. Tras la ruptura del patrón oro en el año 1971, la moneda se convirtió, de facto, en una moneda fiat.")
                                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903145945980604447/dolar3.png")
                                                .addField("Acuñación", "2 de abril de 1792")
                                                .addField("Países donde se utiliza:", ":flag_us: :flag_sv: :flag_ec: :flag_pa: :flag_pr: :flag_zw: :flag_tl: :flag_pw: :flag_fm: :flag_mh: ")
                                                .addField("Código ISO", "USD ", true)
                                                .addField("Símbolo", "$ ", true)
                                                .addField("Billetes :dollar: ", "$1, $2, $5, $10, $20, $50 y $100")
                                                .addField("Monedas :coin: ", "	$0,01, $0,05, $0,10, $0,25, $0,50 y $1")
                                                .addField("Inflación anual  :chart_with_downwards_trend: ", "7,1% (2021)", true)
                                                .addField("Emisor :bank: ", "Sistema de Reserva Federal ", true)



                                            const button1 = new MessageButton()
                                                .setCustomId("previousbtn")
                                                .setLabel("💸 Conversión ")
                                                .setStyle("SUCCESS");

                                            const button2 = new MessageButton()
                                                .setCustomId("nextbtn")
                                                .setLabel("📋 Información")
                                                .setStyle("PRIMARY");

                                            const pages = [
                                                embed1,
                                                embed2,
                                            ];
                                            const buttonList = [button1, button2];
                                            const timeout = 60000;
                                            paginationEmbed(interaction, pages, buttonList, timeout);
                                            return interaction.reply({ content: ' ‎ ' });
                                        })
                                        .catch((err) => {
                                            console.error('ERR', err)
                                        })
                                })


                                .catch((err) => {
                                    console.error('ERR', err)
                                })
                                .catch((err) => {
                                    console.error('ERR', err)
                                })
                        })
                        .catch((err) => {
                            console.error('ERR', err)
                        })
                })

        }



        //Euro

        if (interaction.options.getSubcommand() === 'euro') {

            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
                .then((oficial) => {
                    axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/blue')
                        .then((blue) => {


                            const embed1 = new Discord.MessageEmbed()
                                .setTitle("Euro :flag_eu:")
                                .setColor("#0153b4")
                                .setDescription("El euro (€) es la moneda usada por las instituciones de la Unión Europea (UE), así como la moneda oficial de la eurozona, formada por 19 de los 27 Estados miembros de la UE. Además, 4 micro-Estados europeos tienen acuerdos con la Unión Europea para el uso del euro como moneda")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913863513498333224/european-union_1.png")
                               
                               //Oficial
                                .addField("Euro oficial :bank: ", "Valor del euro que se liquida por parte del gobierno nacional y está sujeto a diversos, además, sólo se puede retirar el equivalente a USD$200 al mes.", false)
                                .addField("COMPRA  ", "ARS$ " + currencyFormatter.format(oficial.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("VENTA  ", "ARS$ " + currencyFormatter.format(oficial.data['venta'], { locale: 'es-ES', code: ' ' }), true)

                                //Impuestos
                                .addField("IMPUESTOS <:taxes:1068370368819101746>", "\n Impuestos aplicados al valor oficial en los pagos con tarjeta o compra del banco  ", false)
                                .addField("TARJETA (74%)  ", "ARS$ " + currencyFormatter.format(total74(oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                                .addField("SOLIDARIO (75%)  ", "ARS$ " + currencyFormatter.format(total75(oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                                .addField("TURISTA (100%)  ", "ARS$ " + currencyFormatter.format(total100(oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                                
                                //Blue
                                .addField("Euro blue <:dollarblue:903149186436980767>", "Valor del mercado paralelo establecido por la oferta y la demanda", false)
                                .addField("COMPRA  ", "ARS$ " + currencyFormatter.format(blue.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("VENTA ", "ARS$ " + currencyFormatter.format(blue.data['venta'], { locale: 'es-ES', code: ' ' }), true)

                            const embed2 = new Discord.MessageEmbed()
                                .setTitle("Euro")
                                .setColor("#0153b4")
                                .setDescription("El euro (€) es la moneda usada por las instituciones de la Unión Europea (UE), así como la moneda oficial de la eurozona, formada por 19 de los 27 Estados miembros de la UE. Además, 4 micro-Estados europeos tienen acuerdos con la Unión Europea para el uso del euro como moneda")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913863513498333224/european-union_1.png")
                                .addField("Acuñación", "1  de enero de 2002 ")
                                .addField("Países donde se utiliza:", ":flag_de: :flag_at: :flag_be: :flag_cy: :flag_sk: :flag_si: :flag_es: :flag_ee: :flag_fi: :flag_fr: :flag_gr: :flag_ie: :flag_it: :flag_lv: :flag_lt: :flag_lu: :flag_mt: :flag_nl: :flag_pt: :flag_ad: :flag_va: :flag_mc: :flag_sm: :flag_xk: :flag_me:  ")
                                .addField("Código ISO", "EUR ", true)
                                .addField("Símbolo", "€ ", true)
                                .addField("Billetes <:euro:903349498930135160> ", "€5, €10, €20, €50, €100, €200, €500")
                                .addField("Monedas :coin: ", "	€0,01 , €0,02 , €0,05, €0,10 , €0,20, €0,50 , €1 , €2")
                                .addField("Inflación anual :chart_with_downwards_trend:", "-3.0% (2021)", true)
                                .addField("Emisor :bank: ", "Banco Central Europeo", true)



                            const button1 = new MessageButton()
                                .setCustomId("previousbtn")
                                .setLabel("💸 Conversión ")
                                .setStyle("SUCCESS");

                            const button2 = new MessageButton()
                                .setCustomId("nextbtn")
                                .setLabel("📋 Información")
                                .setStyle("PRIMARY");

                            const pages = [
                                embed1,
                                embed2,
                            ];
                            const buttonList = [button1, button2];
                            const timeout = 60000;
                            paginationEmbed(interaction, pages, buttonList, timeout);
                            return interaction.reply({ content: ' ‎ ' });
                        })
                        .catch((err) => {
                            console.error('ERR', err)
                        })
                })


                .catch((err) => {
                    console.error('ERR', err)
                })
                .catch((err) => {
                    console.error('ERR', err)
                })

        }

        if (interaction.options.getSubcommand() === 'real') {

            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/real/oficial')
                .then((oficial) => {
                    axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/real/blue')
                        .then((blue) => {


                            const embed1 = new Discord.MessageEmbed()
                            .setTitle("Real Brasileño  :flag_br:")
                            .setColor("#e8ce6c")
                                .setDescription("El real es la moneda de curso legal en Brasil y fuera de sus fronteras se le conoce como real brasileño. A partir de 2020, es la vigésima moneda más negociada en el mundo, la segunda en América Latina detrás de peso mexicano y la cuarta en el continente americano detrás del dólar estadounidense, el dólar canadiense y el peso mexicano")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1068375006784012288/BrazilMoney.png")
                               //Oficial
                                .addField("Real oficial :bank: ", "Valor del real que se liquida por parte del gobierno nacional y está sujeto a diversos impuestos, además, sólo se puede retirar el equivalente a USD$200 al mes.", false)
                                .addField("COMPRA  ", "ARS$ " + currencyFormatter.format(oficial.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("VENTA  ", "ARS$ " + currencyFormatter.format(oficial.data['venta'], { locale: 'es-ES', code: ' ' }), true)

                                //Impuestos
                                .addField("Impuestos <:taxes:1068370368819101746>", "\n Impuestos aplicados al valor oficial en los pagos con tarjeta o compra del banco  ", false)
                                .addField("TARJETA (74%)  ", "ARS$ " + currencyFormatter.format(total74(oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                                .addField("SOLIDARIO (75%)  ", "ARS$ " + currencyFormatter.format(total75(oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                                .addField("TURISTA (100%)  ", "ARS$ " + currencyFormatter.format(total100(oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                                
                                //Blue
                                .addField("Real blue <:dollarblue:903149186436980767>", "Valor del mercado paralelo establecido por la oferta y la demanda", false)
                                .addField("COMPRA  ", "ARS$ " + currencyFormatter.format(blue.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("VENTA ", "ARS$ " + currencyFormatter.format(blue.data['venta'], { locale: 'es-ES', code: ' ' }), true)

                                const embed2 = new Discord.MessageEmbed()
                                .setTitle("Real Brasileño")
                                .setColor("#e8ce6c")
                                .setDescription("El real es la moneda de curso legal en Brasil y fuera de sus fronteras se le conoce como real brasileño. A partir de 2020, es la vigésima moneda más negociada en el mundo, la segunda en América Latina detrás de peso mexicano y la cuarta en el continente americano detrás del dólar estadounidense, el dólar canadiense y el peso mexicano")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1068375006784012288/BrazilMoney.png")
                                .addField("Acuñación", " 1994 ")
                                .addField("Países donde se utiliza:", ":flag_br:")
                                .addField("Código ISO", "BRL ", true)
                                .addField("Símbolo", "R$ ", true)
                                .addField("Billetes <:brazilianreal1:913867351210995722> ", "R$2, R$5, R$10, R$20, R$50, R$100 y R$200")
                                .addField("Monedas :coin: ", "	R$0,01 , R$0,05, R$0,10, R$0,25, R$0,50 y R$ 1")
                                .addField("Inflación anual :chart_with_downwards_trend:", "10.74% (2021)", true)
                                .addField("Emisor :bank: ", "Banco Central do Brasil", true)
        



                            const button1 = new MessageButton()
                                .setCustomId("previousbtn")
                                .setLabel("💸 Conversión ")
                                .setStyle("SUCCESS");

                            const button2 = new MessageButton()
                                .setCustomId("nextbtn")
                                .setLabel("📋 Información")
                                .setStyle("PRIMARY");

                            const pages = [
                                embed1,
                                embed2,
                            ];
                            const buttonList = [button1, button2];
                            const timeout = 60000;
                            paginationEmbed(interaction, pages, buttonList, timeout);
                            return interaction.reply({ content: ' ‎ ' });
                        })
                        .catch((err) => {
                            console.error('ERR', err)
                        })
                })


                .catch((err) => {
                    console.error('ERR', err)
                })
                .catch((err) => {
                    console.error('ERR', err)
                })

        }

     
        //Yen
        if (interaction.options.getSubcommand() === 'yen') {
            axios.get('https://api.exchangerate.host/latest')
                .then((YEN) => {
                    yen1 = YEN.data['rates']['JPY']
                    axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')

                        .then((EUR) => {
                            const embed1 = new Discord.MessageEmbed()
                                .setTitle("Yen Japonés :flag_jp:")
                                .setColor("#FDFD0D")
                                .setDescription("Yen japonés oficial al  precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (45%) ")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913893648876331048/yenjapones3.png")
                                .addField("Compra <:yen1:913890431392157807> ", 'ARS$ ' + currencyFormatter.format(((1 / yen1)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("Venta <:yen1:913890431392157807> ", 'ARS$ ' + currencyFormatter.format(((1 / yen1)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("Impuestos <:yen1:913890431392157807> ", 'ARS$ ' + currencyFormatter.format((((1 / yen1)) * EUR.data['venta'] * 1.75), { locale: 'es-ES', code: ' ' }), true)


                            const embed2 = new Discord.MessageEmbed()
                                .setTitle("Yen Japonés")
                                .setColor("#FDFD0D")
                                .setDescription("El yen es la unidad monetaria utilizada en Japón​ y la tercera moneda más valorada en el mercado de divisas después del dólar estadounidense y el euro. También es usada como moneda de reserva junto al dólar, el euro y la libra esterlina. Como es común en la numeración japonesa, las cantidades grandes del yen se cuentan en múltiplos de 10 000 (man, 万).")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913893648876331048/yenjapones3.png")
                                .addField("Acuñación", "10 de mayo de 1871 ")
                                .addField("Países donde se utiliza:", ":flag_jp:")
                                .addField("Código ISO", "JPY ", true)
                                .addField("Símbolo ", "¥ ", true)
                                .addField("Billetes <:yen1:913890431392157807> ", "¥1000, ¥2000, ¥5000 y ¥10000")
                                .addField("Monedas :coin:  ", "¥1, ¥5, ¥10, ¥50, ¥100 y ¥500")
                                .addField("Inflación anual :chart_with_downwards_trend: ", "0.5% (2019)", true)
                                .addField("Emisor :bank: ", "Banco de Japón", true)


                            const button1 = new MessageButton()
                                .setCustomId("previousbtn")
                                .setLabel("💸 Conversión ")
                                .setStyle("SUCCESS");

                            const button2 = new MessageButton()
                                .setCustomId("nextbtn")
                                .setLabel("📋 Información")
                                .setStyle("PRIMARY");

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
                })


                .catch((err) => {
                    console.error('ERR', err)
                })

        }

        //Libra

        if (interaction.options.getSubcommand() === 'libra') {
            axios.get('https://api.exchangerate.host/latest')
                .then((GBP) => {
                    libra1 = GBP.data['rates']['GBP']
                    axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')

                        .then((EUR) => {
                            const embed1 = new Discord.MessageEmbed()
                                .setTitle("Libra Esterlina :flag_gb:")
                                .setColor("#D605F6")
                                .setDescription("Libra Esterlina oficial al  precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (45%) ")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913895989889359902/ReinaIsabeltest.png")
                                .addField("Compra <:pound:913895490150600715> ", 'ARS$ ' + currencyFormatter.format(((1 / libra1)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("Venta <:pound:913895490150600715>", 'ARS$ ' + currencyFormatter.format(((1 / libra1)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("Impuestos <:pound:913895490150600715>", 'ARS$ ' + currencyFormatter.format((((1 / libra1)) * EUR.data['venta'] * 1.75), { locale: 'es-ES', code: ' ' }), true)



                            const embed2 = new Discord.MessageEmbed()
                                .setTitle("Libra Esterlina")
                                .setColor("#D605F6")
                                .setDescription("La Libra Esterlina es la moneda del Reino Unido así como de las Dependencias de la Corona y de algunos territorios británicos de ultramar. En sus demás territorios coloniales se usan diferentes divisas pero fijadas a la esterlina. Su símbolo monetario es £ y proviene del latín libra, que se refería a la unidad de masa. Una libra se divide en cien peniques.")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913895989889359902/ReinaIsabeltest.png")
                                .addField("Acuñación", " 1158")
                                .addField("Países y territorios donde se utiliza:", ":flag_gb: :flag_im::flag_gg: :flag_je: :flag_fk: :flag_gi: :flag_sh: :flag_gs: :flag_io: ")
                                .addField("Código ISO", "GBP ", true)
                                .addField("Símbolo ", "£ ", true)
                                .addField("Billetes <:pound:913895490150600715> ", "£5, £10, £20, £50")
                                .addField("Monedas :coin:  ", "	1p, 2p, 5p, 10p, 20p, 50p, £1, £2")
                                .addField("Inflación anual :chart_with_downwards_trend: ", "5.1% (2021)", true)
                                .addField("Emisor :bank: ", "Bank of England", true)


                            const button1 = new MessageButton()
                                .setCustomId("previousbtn")
                                .setLabel("💸 Conversión ")
                                .setStyle("SUCCESS");

                            const button2 = new MessageButton()
                                .setCustomId("nextbtn")
                                .setLabel("📋 Información")
                                .setStyle("PRIMARY");

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
                })


                .catch((err) => {
                    console.error('ERR', err)
                })

        }

        //Rublo Ruso
        if (interaction.options.getSubcommand() === 'rublo') {
            axios.get('https://api.exchangerate.host/latest')
                .then((RUB) => {
                    rublo = RUB.data['rates']['RUB']
                    axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')

                        .then((EUR) => {
                            const embed1 = new Discord.MessageEmbed()
                                .setTitle("Rublo Ruso :flag_ru:")
                                .setColor("#FDFD0D")
                                .setDescription("Rublo Ruso oficial al precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (45%) ")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/920139509344108594/bancario_1.png")
                                .addField("Compra <:rublo:913901788531417229>  ", 'ARS$ ' + currencyFormatter.format(((1 / rublo)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("Venta <:rublo:913901788531417229>", 'ARS$ ' + currencyFormatter.format(((1 / rublo)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("Impuestos <:rublo:913901788531417229>", 'ARS$ ' + currencyFormatter.format((((1 / rublo)) * EUR.data['venta'] * 1.75), { locale: 'es-ES', code: ' ' }), true)



                            const embed2 = new Discord.MessageEmbed()
                                .setTitle("Rublo Ruso")
                                .setColor("#FDFD0D")
                                .setDescription("El Rublo es la moneda oficial de la Federación de Rusia y medio de pago de las repúblicas parcialmente reconocidas de Abjasia y Osetia del Sur.​ Rublo también fue el nombre de la moneda oficial de la Unión Soviética, el Imperio ruso y otros estados. Un rublo se divide en cien kopeks.")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/920139509344108594/bancario_1.png")
                                .addField("Acuñación", " 1991")
                                .addField("Países donde se utiliza:", ":flag_ru: ")
                                .addField("Código ISO", "RUB ", true)
                                .addField("Símbolo ", "₽ ", true)
                                .addField("Billetes <:rublo:913901788531417229> ", "5 ₽, 10 ₽, 50 ₽, 100 ₽, 500 ₽, 1000 ₽, 2000 ₽, 5000 ₽")
                                .addField("Monedas :coin:  ", "	1 коп, 5коп, 10коп, 50 коп, 1 ₽, 2 ₽, 5 ₽, 10 ₽, 25 ₽")
                                .addField("Inflación anual :chart_with_downwards_trend: ", "4,9% (2020)", true)
                                .addField("Emisor :bank: ", "Banco de Rusia ", true)


                            const button1 = new MessageButton()
                                .setCustomId("previousbtn")
                                .setLabel("💸 Conversión ")
                                .setStyle("SUCCESS");

                            const button2 = new MessageButton()
                                .setCustomId("nextbtn")
                                .setLabel("📋 Información")
                                .setStyle("PRIMARY");

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
                })


                .catch((err) => {
                    console.error('ERR', err)


                })
        }

        //Dolar Canadiense
        if (interaction.options.getSubcommand() === 'dolarcanadiense') {
            axios.get('https://api.exchangerate.host/latest')
                .then((CAD) => {
                    canadiense = CAD.data['rates']['CAD']
                    axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')

                        .then((EUR) => {
                            const embed1 = new Discord.MessageEmbed()
                                .setTitle("Dólar Canadiense :flag_ca: ")
                                .setColor("#fc0201")
                                .setDescription("Dólar Canadiense oficial al  precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (45%)")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928332562793922611/canadian-dollar.png")
                                .addField("Compra :flag_ca:  ", 'ARS$ ' + currencyFormatter.format(((1 / canadiense)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("Venta :flag_ca:  ", 'ARS$ ' + currencyFormatter.format(((1 / canadiense)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("Impuestos :flag_ca:  ", 'ARS$ ' + currencyFormatter.format((((1 / canadiense)) * EUR.data['venta'] * 1.75), { locale: 'es-ES', code: ' ' }), true)



                            const embed2 = new Discord.MessageEmbed()
                                .setTitle("Dólar Canadiense")
                                .setColor("#fc0201")
                                .setDescription("El dólar canadiense es la unidad monetaria oficial de Canadá. Se subdivide en 100 cents (centavos). Su código ISO 4217 es CAD. El dólar ha estado en vigor durante gran parte de la historia de Canadá. \nCanadá decidió usar el dólar en lugar de la libra esterlina británica a causa de la difusión del llamado dólar español o peso en Norteamérica durante el siglo XVIII y principios del XIX, y a causa de la generalización del dólar estadounidense. La región que corresponde al actual Quebec, en particular, favoreció el uso del dólar (el Banco de Montreal emitió billetes de dólares en 1817), mientras que las colonias atlánticas, que tenían unos vínculos más fuertes con el Reino Unido, no eran tan partidarias. ")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928332562793922611/canadian-dollar.png")
                                .addField("Acuñación", "1 de enero de 1858")
                                .addField("Países donde se utiliza:", ":flag_ca: ")
                                .addField("Código ISO", "CAD ", true)
                                .addField("Símbolo ", "C$ ", true)
                                .addField("Billetes :dollar: ", "C$5, C$10, C$20, C$50, C$100")
                                .addField("Monedas :coin:  ", "	¢5, ¢10, ¢25, C$1, C$2")
                                .addField("Inflación anual :chart_with_downwards_trend: ", "2,2% (2019)", true)
                                .addField("Emisor :bank: ", "Banco de Canadá", true)

                            const button1 = new MessageButton()
                                .setCustomId("previousbtn")
                                .setLabel("💸 Conversión ")
                                .setStyle("SUCCESS");

                            const button2 = new MessageButton()
                                .setCustomId("nextbtn")
                                .setLabel("📋 Información")
                                .setStyle("PRIMARY");

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
                })


                .catch((err) => {
                    console.error('ERR', err)
                })


        }


        //Dolar australiano
        if (interaction.options.getSubcommand() === 'dolaraustraliano') {
            axios.get('https://api.exchangerate.host/latest')
                .then((CAD) => {
                    dolar = CAD.data['rates']['AUD']
                    axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')

                        .then((EUR) => {
                            const embed1 = new Discord.MessageEmbed()
                                .setTitle("Dólar Australiano :flag_au:")
                                .setColor("#000346")
                                .setDescription("Dólar Australiano oficial al precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (45%)")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858087525518934076/dolaraustraliano.png")
                                .addField("Compra :flag_au:  ", 'ARS$ ' + currencyFormatter.format(((1 / dolar)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("Venta :flag_au:  ", 'ARS$ ' + currencyFormatter.format(((1 / dolar)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("Impuestos :flag_au:  ", 'ARS$ ' + currencyFormatter.format((((1 / dolar)) * EUR.data['venta'] * 1.75), { locale: 'es-ES', code: ' ' }), true)


                            const embed2 = new Discord.MessageEmbed()
                                .setTitle("Dólar Australiano")
                                .setColor("#000346")
                                .setDescription("El dólar australiano (código AUD) es la moneda oficial de la Mancomunidad de Australia, incluidos los Territorios Antárticos Australianos, la Isla de Navidad, las Islas Cocos, Islas Heard y McDonald e Isla Norfolk, así como de los estados independientes del Pacífico de Kiribati, Nauru y Tuvalu. ")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858087525518934076/dolaraustraliano.png")
                                .addField("Acuñación", "1966")
                                .addField("Países donde se utiliza:", ":flag_au: :flag_ki: :flag_nr: :flag_tv: :flag_cx: :flag_cc: :flag_nf:")
                                .addField("Código ISO", "AUD ", true)
                                .addField("Símbolo ", "A$ ", true)
                                .addField("Billetes :dollar: ", "A$5, A$10, A$20, A$50, A$100")
                                .addField("Monedas :coin:  ", "	A$0,5 , A$0,10, A$0,20 , A$0,50 , A$1, A$2")
                                .addField("Inflación anual :chart_with_downwards_trend: ", "1,8% (2020)", true)
                                .addField("Emisor :bank: ", "Banco de la Reserva de Australia", true)

                            const button1 = new MessageButton()
                                .setCustomId("previousbtn")
                                .setLabel("💸 Conversión ")
                                .setStyle("SUCCESS");

                            const button2 = new MessageButton()
                                .setCustomId("nextbtn")
                                .setLabel("📋 Información")
                                .setStyle("PRIMARY");

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
                })


                .catch((err) => {
                    console.error('ERR', err)
                })


        }

        //Dolar neozelandes


        if (interaction.options.getSubcommand() === 'dolarneozelandes') {
            axios.get('https://api.exchangerate.host/latest')
                .then((NZD) => {
                    dolar = NZD.data['rates']['NZD']
                    axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')

                        .then((EUR) => {
                            const embed1 = new Discord.MessageEmbed()
                                .setTitle("Dólar Neozelandés :flag_nz: ")
                                .setColor("#000346")
                                .setDescription("Dólar Neozelandés oficial al precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (45%)")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858094221654753300/Dolar_nueva_zelanda.png")
                                .addField("Compra :flag_nz:  ", 'ARS$ ' + currencyFormatter.format(((1 / dolar)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("Venta :flag_nz:  ", 'ARS$ ' + currencyFormatter.format(((1 / dolar)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("Impuestos :flag_nz:  ", 'ARS$ ' + currencyFormatter.format((((1 / dolar)) * EUR.data['venta'] * 1.75), { locale: 'es-ES', code: ' ' }), true)


                            const embed2 = new Discord.MessageEmbed()
                                .setTitle("Dólar Neozelandés")
                                .setColor("#000346")
                                .setDescription("El dólar neozelandés o dólar de Nueva Zelanda (abreviado NZD o NZ$) es la moneda oficial de Nueva Zelanda, las Islas Cook, Niue, Tokelau y las Islas Pitcairn. Se introdujo en 1967 para sustituir a la libra neozelandesa cuando se introdujo el sistema decimal para las monedas. ")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858094221654753300/Dolar_nueva_zelanda.png")
                                .addField("Acuñación", "1967")
                                .addField("Países donde se utiliza:", ":flag_nz: :flag_ck: :flag_nu: :flag_tk: :flag_pn: ")
                                .addField("Código ISO", "NZD ", true)
                                .addField("Símbolo ", "NZ$ ", true)
                                .addField("Billetes :dollar: ", "NZ$5, NZ$10, NZ$20, NZ$50, NZ$100")
                                .addField("Monedas :coin:  ", "	NZ$0,10 , NZ$0,20, NZ$0,50 , NZ$1, NZ$2")
                                .addField("Inflación anual :chart_with_downwards_trend: ", "1,9% (2018)", true)
                                .addField("Emisor :bank: ", "Banco de la Reserva de Nueva Zelanda", true)


                            const button1 = new MessageButton()
                                .setCustomId("previousbtn")
                                .setLabel("💸 Conversión ")
                                .setStyle("SUCCESS");

                            const button2 = new MessageButton()
                                .setCustomId("nextbtn")
                                .setLabel("📋 Información")
                                .setStyle("PRIMARY");

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
                })


                .catch((err) => {
                    console.error('ERR', err)
                })

        }

        //Peso mexicano
        if (interaction.options.getSubcommand() === 'pesomexicano') {
            axios.get('https://api.exchangerate.host/latest')
                .then((MEX) => {
                    mexicano = MEX.data['rates']['MXN']
                    axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')

                        .then((EUR) => {
                            const embed1 = new Discord.MessageEmbed()
                                .setTitle("Peso Méxicano :flag_mx:")
                                .setColor("#24944c")
                                .setDescription("Peso Méxicano oficial al  precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (45%) ")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/838470413066436658/MXNPeso.png")
                                .addField("Compra :flag_mx:  ", 'ARS$ ' + currencyFormatter.format(((1 / mexicano)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("Venta :flag_mx:  ", 'ARS$ ' + currencyFormatter.format(((1 / mexicano)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("Impuestos :flag_mx:  ", 'ARS$ ' + currencyFormatter.format((((1 / mexicano)) * EUR.data['venta'] * 1.75), { locale: 'es-ES', code: ' ' }), true)


                            const embed2 = new Discord.MessageEmbed()
                                .setTitle("Peso Méxicano")
                                .setColor("#24944c")
                                .setDescription("El peso méxicano es la moneda de curso legal de México. El peso mexicano fue la primera moneda en el mundo en utilizar el signo $, incluso antes que el dólar de Estados Unidos, el cual más tarde lo adoptó para su propio uso. El peso mexicano es la decimoquinta moneda más negociada en el mundo, la más negociada de América Latina y la tercera más negociada en toda América.")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/838470413066436658/MXNPeso.png")
                                .addField("Acuñación", "1 de enero de 1993")
                                .addField("Países donde se utiliza:", ":flag_mx: ")
                                .addField("Código ISO", "MXN ", true)
                                .addField("Símbolo ", "$ ", true)
                                .addField("Billetes :dollar: ", "$20, $50, $100, $200, $500 y $1000")
                                .addField("Monedas :coin:  ", "	¢10, ¢20, ¢50, $1, $2, $5, $10 y $20 (conmemorativas)")
                                .addField("Inflación anual :chart_with_downwards_trend: ", "3,15% (2020)", true)
                                .addField("Emisor :bank: ", "Banco de México ", true)

                            const button1 = new MessageButton()
                                .setCustomId("previousbtn")
                                .setLabel("💸 Conversión ")
                                .setStyle("SUCCESS");

                            const button2 = new MessageButton()
                                .setCustomId("nextbtn")
                                .setLabel("📋 Información")
                                .setStyle("PRIMARY");

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
                })


                .catch((err) => {
                    console.error('ERR', err)
                })


        }

        //Peso chileno
        if (interaction.options.getSubcommand() === 'pesochileno') {
            axios.get('https://api.exchangerate.host/latest')
                .then((CLP) => {
                    chileno = CLP.data['rates']['CLP']
                    axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')

                        .then((EUR) => {
                            const embed1 = new Discord.MessageEmbed()
                                .setTitle("Peso Chileno :flag_cl: ")
                                .setColor("#fc0201")
                                .setDescription("Peso chileno oficial al  precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (45%)")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/856753411793354773/pesochileno.png")
                                .addField("Compra :flag_cl:  ", 'ARS$ ' + currencyFormatter.format(((1 / chileno)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("Venta :flag_cl:  ", 'ARS$ ' + currencyFormatter.format(((1 / chileno)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("Impuestos :flag_cl:  ", 'ARS$ ' + currencyFormatter.format((((1 / chileno)) * EUR.data['venta'] * 1.75), { locale: 'es-ES', code: ' ' }), true)


                            const embed2 = new Discord.MessageEmbed()
                                .setTitle("Peso Chileno")
                                .setColor("#fc0201")
                                .setDescription("El peso es la moneda de curso legal de Chile desde el año 1975. \nPor medio del decreto ley 1123 de 1975, el peso fue retomado como unidad monetaria a partir del 29 de septiembre de dicho año,5 con una tasa de conversión de un peso por cada mil escudos. La subdivisión en centavos se mantuvo hasta el 1 de enero de 1984, cuando éstos fueron eliminados, por lo que la contabilidad se empezó a llevar en pesos enteros. ")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/856753411793354773/pesochileno.png")
                                .addField("Acuñación", "29 de septiembre de 1975")
                                .addField("Países donde se utiliza:", ":flag_cl: ")
                                .addField("Código ISO", "CLP ", true)
                                .addField("Símbolo ", "$ ", true)
                                .addField("Billetes :dollar: ", "$1.000, $2.000, $5.000, $10.000 y $20.000 pesos")
                                .addField("Monedas :coin:  ", "	$10, $50, $100 y $500 pesos")
                                .addField("Inflación anual :chart_with_downwards_trend: ", "7,2% (2021)", true)
                                .addField("Emisor :bank: ", "Banco Central de Chile", true)


                            const button1 = new MessageButton()
                                .setCustomId("previousbtn")
                                .setLabel("💸 Conversión ")
                                .setStyle("SUCCESS");

                            const button2 = new MessageButton()
                                .setCustomId("nextbtn")
                                .setLabel("📋 Información")
                                .setStyle("PRIMARY");

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
                })


                .catch((err) => {
                    console.error('ERR', err)
                })

        }

        //Peso uruguayo
        if (interaction.options.getSubcommand() === 'pesouruguayo') {
            axios.get('https://api.exchangerate.host/latest')
                .then((UYU) => {
                    peso = UYU.data['rates']['UYU']
                    axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')

                        .then((EUR) => {
                            const embed1 = new Discord.MessageEmbed()
                                .setTitle("Peso Uruguayo :flag_uy:")
                                .setColor("BLUE")
                                .setDescription("Peso uruguayo oficial al  precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (45%)")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/856766027831574528/pesouruguayo.png")
                                .addField("Compar :flag_uy:  ", 'ARS$ ' + currencyFormatter.format(((1 / peso)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("Venta :flag_uy:  ", 'ARS$ ' + currencyFormatter.format(((1 / peso)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("Impuestos :flag_uy:  ", 'ARS$ ' + currencyFormatter.format((((1 / peso)) * EUR.data['venta'] * 1.75), { locale: 'es-ES', code: ' ' }), true)

                            const embed2 = new Discord.MessageEmbed()
                                .setTitle("Peso Uruguayo")
                                .setColor("BLUE")
                                .setDescription("El peso es la moneda oficial de la República Oriental del Uruguay desde 1993, remplazando al nuevo peso por un valor de 1000 nuevos pesos = 1 peso uruguayo y 1 000 000 de viejos pesos. En 2011 se cambió completamente el diseño de las monedas con nuevas decoraciones y materiales, se añadieron distintos animales y figuras patrias al reverso de las monedas. Se representa con un $.")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/856766027831574528/pesouruguayo.png")
                                .addField("Acuñación", "1 de marzo de 1993")
                                .addField("Países donde se utiliza:", ":flag_uy: ")
                                .addField("Código ISO", "UYU ", true)
                                .addField("Símbolo ", "$ ", true)
                                .addField("Billetes :dollar: ", "$20, $50, $100, $200, $500, $1000 y $2000 pesos")
                                .addField("Monedas :coin:  ", "	$1, $2, $5, $10 y $50 pesos")
                                .addField("Inflación anual :chart_with_downwards_trend: ", "8,8% (2019)", true)
                                .addField("Emisor :bank: ", "Banco Central del Uruguay", true)


                            const button1 = new MessageButton()
                                .setCustomId("previousbtn")
                                .setLabel("💸 Conversión ")
                                .setStyle("SUCCESS");

                            const button2 = new MessageButton()
                                .setCustomId("nextbtn")
                                .setLabel("📋 Información")
                                .setStyle("PRIMARY");

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
                })


                .catch((err) => {
                    console.error('ERR', err)
                })
        }

        //Peso colombiano
        if (interaction.options.getSubcommand() === 'pesocolombiano') {
            axios.get('https://api.exchangerate.host/latest')
                .then((COL) => {
                    pesos = COL.data['rates']['COP']
                    axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')

                        .then((EUR) => {
                            const embed1 = new Discord.MessageEmbed()
                                .setTitle("Peso Colombiano :flag_co: (1000 unidades)")
                                .setColor("#fecb04")
                                .setDescription("1000 Pesos colombiano al  precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (45%)")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/857487546455294022/PesoColombiano.png")
                                .addField("Compra :flag_co:  ", 'ARS$ ' + currencyFormatter.format(((1000 / pesos)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("Venta :flag_co:  ", 'ARS$ ' + currencyFormatter.format(((1000 / pesos)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("Impuestos :flag_co:  ", 'ARS$ ' + currencyFormatter.format((((1000 / pesos)) * EUR.data['venta'] * 1.75), { locale: 'es-ES', code: ' ' }), true)



                            const embed2 = new Discord.MessageEmbed()
                                .setTitle("Peso Colombiano")
                                .setColor("#fecb04")
                                .setDescription("El peso es la unidad monetaria de curso legal en la República de Colombia. Su abreviación formal es COP (ISO 4217), e informalmente es abreviada COL$.")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/857487546455294022/PesoColombiano.png")
                                .addField("Acuñación", "1903")
                                .addField("Países donde se utiliza:", ":flag_co: ")
                                .addField("Código ISO", "COP", true)
                                .addField("Símbolo ", "$ ", true)
                                .addField("Billetes :dollar: ", "$1.000, $2.000, $5.000, $10.000, $20.000, $50.000 y $100.000 pesos")
                                .addField("Monedas :coin:  ", "		$50, $100, $200, $500 y $1000 pesos")
                                .addField("Inflación anual :chart_with_downwards_trend: ", "1.61% (2020)", true)
                                .addField("Emisor :bank: ", "Banco de la República de Colombia.", true)


                            const button1 = new MessageButton()
                                .setCustomId("previousbtn")
                                .setLabel("💸 Conversión ")
                                .setStyle("SUCCESS");

                            const button2 = new MessageButton()
                                .setCustomId("nextbtn")
                                .setLabel("📋 Información")
                                .setStyle("PRIMARY");

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
                })


                .catch((err) => {
                    console.error('ERR', err)
                })

        }

        //Boliviano

        if (interaction.options.getSubcommand() === 'boliviano') {

            axios.get('https://api.exchangerate.host/latest')
                .then((BOB) => {
                    pesos = BOB.data['rates']['BOB']
                    axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')

                        .then((EUR) => {
                            const embed1 = new Discord.MessageEmbed()
                                .setTitle("Boliviano :flag_bo:")
                                .setColor("#6da544")
                                .setDescription("Boliviano al  precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (45%)")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858355537228595201/Boliviano.png")
                                .addField("Compra :flag_bo:  ", 'ARS$ ' + currencyFormatter.format(((1 / pesos)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("Venta :flag_bo:  ", 'ARS$ ' + currencyFormatter.format(((1 / pesos)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("Impuestos :flag_bo:  ", 'ARS$ ' + currencyFormatter.format((((1 / pesos)) * EUR.data['venta'] * 1.75), { locale: 'es-ES', code: ' ' }), true)


                            const embed2 = new Discord.MessageEmbed()
                                .setTitle("Boliviano")
                                .setColor("#6da544")
                                .setDescription("El Boliviano (símbolo: Bs, código ISO 4217: BOB) es la moneda de curso legal del Estado Plurinacional de Bolivia desde el año 1987. Se divide en 100 centavos y entró en circulación nacional, reemplazando al antiguo peso boliviano. El Banco Central de Bolivia (fundado en 1928), es el organismo económico responsable de la emisión de la moneda.")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858355537228595201/Boliviano.png")
                                .addField("Acuñación", "1987")
                                .addField("Países donde se utiliza:", ":flag_bo: ")
                                .addField("Código ISO", "BOB", true)
                                .addField("Símbolo ", "Bs ", true)
                                .addField("Billetes :dollar: ", "Bs10, Bs20, Bs50, Bs100 y Bs200")
                                .addField("Monedas :coin:  ", "	Bs0,10, Bs0,20¢, Bs0,50, Bs1 , Bs2 y Bs5 ")
                                .addField("Inflación anual :chart_with_downwards_trend: ", "0,67% (2020)", true)
                                .addField("Emisor :bank: ", "Banco Central de Bolivia.", true)

                            const button1 = new MessageButton()
                                .setCustomId("previousbtn")
                                .setLabel("💸 Conversión ")
                                .setStyle("SUCCESS");

                            const button2 = new MessageButton()
                                .setCustomId("nextbtn")
                                .setLabel("📋 Información")
                                .setStyle("PRIMARY");

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
                })


                .catch((err) => {
                    console.error('ERR', err)
                })


        }
        if (interaction.options.getSubcommand() === 'sol') {
            axios.get('https://api.exchangerate.host/latest')
                .then((PEN) => {
                    sol = PEN.data['rates']['PEN']
                    axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')

                        .then((EUR) => {
                            const embed1 = new Discord.MessageEmbed()
                                .setTitle("Sol Peruano :flag_pe: ")
                                .setColor("#cd0400")
                                .setDescription("Sol peruano al  precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (45%)")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/85806781.755300658/SolPeruano.png")
                                .addField("Compra :flag_pe:  ", 'ARS$ ' + currencyFormatter.format(((1 / sol)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("Venta :flag_pe:  ", 'ARS$ ' + currencyFormatter.format(((1 / sol)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("Impuestos :flag_pe:  ", 'ARS$ ' + currencyFormatter.format((((1 / sol)) * EUR.data['venta'] * 1.75), { locale: 'es-ES', code: ' ' }), true)



                            const embed2 = new Discord.MessageEmbed()
                                .setTitle("Sol Peruano")
                                .setColor("#cd0400")
                                .setDescription("El sol es la moneda de curso legal del Perú desde 1991. Esta moneda reemplazó al inti que circuló entre 1985 y 1991. Inicialmente fue denominada nuevo sol para diferenciarla del antiguo sol que circuló entre 1931 y 1985. Sin embargo, desde 2015 el gobierno dispuso que el «nuevo sol» pase a denominarse simplemente «sol», suprimiéndose además el uso del punto (S/.) en el signo monetario (S/).")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/85806781.755300658/SolPeruano.png")
                                .addField("Acuñación", "1991")
                                .addField("Países donde se utiliza:", ":flag_pe: ")
                                .addField("Código ISO", "PEN", true)
                                .addField("Símbolo ", "S/ ", true)
                                .addField("Billetes :dollar: ", "S/10, S/20, S/50, S/100 y S/200 soles")
                                .addField("Monedas :coin:  ", "S/0,10 , S/0,20 y S/0,50 , S/1, S/2 y S/5")
                                .addField("Inflación anual :chart_with_downwards_trend: ", "6,4% (2021)", true)
                                .addField("Emisor :bank: ", "Banco Central de Reserva del Perú", true)


                            const button1 = new MessageButton()
                                .setCustomId("previousbtn")
                                .setLabel("💸 Conversión ")
                                .setStyle("SUCCESS");

                            const button2 = new MessageButton()
                                .setCustomId("nextbtn")
                                .setLabel("📋 Información")
                                .setStyle("PRIMARY");

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
                })


                .catch((err) => {
                    console.error('ERR', err)
                })


        }
        //Guaraní

        if (interaction.options.getSubcommand() === 'guarani') {
            axios.get('https://api.exchangerate.host/latest')
                .then((PYG) => {
                    guarani = PYG.data['rates']['PYG']
                    axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')

                        .then((EUR) => {
                            const embed1 = new Discord.MessageEmbed()
                                .setTitle("Guaraní Paraguayo :flag_py: (1000 unidades)")
                                .setColor("#d80027")
                                .setDescription("1000 Guaranies al  precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (45%)")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/856970634726735902/guaraniparaguayo.png")
                                .addField("Compra :flag_py:  ", 'ARS$ ' + currencyFormatter.format(((1000 / guarani)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("Venta :flag_py:  ", 'ARS$ ' + currencyFormatter.format(((1000 / guarani)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("Impuestos :flag_py:  ", 'ARS$ ' + currencyFormatter.format((((1000 / guarani)) * EUR.data['venta'] * 1.75), { locale: 'es-ES', code: ' ' }), true)



                            const embed2 = new Discord.MessageEmbed()
                                .setTitle("Guaraní Paraguayo")
                                .setColor("#d80027")
                                .setDescription("El guaraní (₲) es la moneda de curso legal actual de la República del Paraguay desde el año 1943. Ostenta el récord de ser una de las monedas más antiguas de América Latina.")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/856970634726735902/guaraniparaguayo.png")
                                .addField("Acuñación", "1943")
                                .addField("Países donde se utiliza:", ":flag_py: ")
                                .addField("Código ISO", "PYG", true)
                                .addField("Símbolo ", "₲ ", true)
                                .addField("Billetes :dollar: ", "₲2.000, ₲5.000, ₲10.000, ₲20.000, ₲50.000 y ₲100.000 guaraníes")
                                .addField("Monedas :coin:  ", "		₲50, ₲100, ₲500 y ₲1.000 guaraníes")
                                .addField("Inflación anual :chart_with_downwards_trend: ", "2,2 % (2020)", true)
                                .addField("Emisor :bank: ", "Banco Central del Paraguay", true)


                            const button1 = new MessageButton()
                                .setCustomId("previousbtn")
                                .setLabel("💸 Conversión ")
                                .setStyle("SUCCESS");

                            const button2 = new MessageButton()
                                .setCustomId("nextbtn")
                                .setLabel("📋 Información")
                                .setStyle("PRIMARY");

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
                })


                .catch((err) => {
                    console.error('ERR', err)
                })
        }

        //Bolivar
        if (interaction.options.getSubcommand() === 'bolivar') {
            axios.get('https://api.exchangerate.host/latest')
                .then((VEZ) => {
                    bolivar = VEZ.data['rates']['VES']
                    axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')

                        .then((EUR) => {
                            const embed1 = new Discord.MessageEmbed()
                                .setTitle("Bolivar Digital Venezolano :flag_ve: ")
                                .setColor("RED")
                                .setDescription("Bolivar Digital Venezolano oficial al  precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (45%)")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/894982507563483216/bolivardigital.png")
                                .addField("Compra :flag_ve:  ", 'ARS$ ' + currencyFormatter.format(((1 / bolivar)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("Venta :flag_ve:  ", 'ARS$ ' + currencyFormatter.format(((1 / bolivar)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("Impuestos :flag_ve:  ", 'ARS$ ' + currencyFormatter.format((((1 / bolivar)) * EUR.data['venta'] * 1.75), { locale: 'es-ES', code: ' ' }), true)


                            const embed2 = new Discord.MessageEmbed()
                                .setTitle("Bolivar Digital Venezolano")
                                .setColor("RED")
                                .setDescription("El Bolivar Digital es la moneda de curso legal de la República Bolivariana de Venezuela. Esta moneda reemplazó al Bolívar Soberano (Bs. S) que circuló desde  agosto de 2018 y octubre de 2021. El valor de la nueva moneda se obtendrá quitando seis ceros a la antigua.")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/894982507563483216/bolivardigital.png")
                                .addField("Acuñación", "1 de octubre del 2021")
                                .addField("Países donde se utiliza:", ":flag_ve: ")
                                .addField("Código ISO", "VED ", true)
                                .addField("Símbolo ", "Bs. o Bs. D ", true)
                                .addField("Billetes :dollar: ", "Bs. 5, Bs. 10, Bs. 20, Bs. 50, Bs. 100")
                                .addField("Monedas :coin:  ", "	Bs. 1 ")
                                .addField("Inflación anual :chart_with_downwards_trend: ", "Bolivar Soberano: 3.713% (2020)", true)
                                .addField("Emisor :bank: ", "Banco Central de Venezuela ", true)

                            const button1 = new MessageButton()
                                .setCustomId("previousbtn")
                                .setLabel("💸 Conversión ")
                                .setStyle("SUCCESS");

                            const button2 = new MessageButton()
                                .setCustomId("nextbtn")
                                .setLabel("📋 Información")
                                .setStyle("PRIMARY");

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
                })


                .catch((err) => {
                    console.error('ERR', err)
                })


        }

        //Yuan
        if (interaction.options.getSubcommand() === 'yuan') {
            axios.get('https://api.exchangerate.host/latest')
                .then((CNY) => {
                    yuan = CNY.data['rates']['CNY']
                    axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')

                        .then((EUR) => {
                            const embed1 = new Discord.MessageEmbed()
                                .setTitle("Renminbi Chino (Yuan) :flag_cn: ")
                                .setColor("#cd0400")
                                .setDescription("Renminbi (Yuan) chino al precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (45%)")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858074668015157258/yuanchino.png")
                                .addField("Compra :flag_cn: ", 'ARS$ ' + currencyFormatter.format(((1 / yuan)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("Venta :flag_cn: ", 'ARS$ ' + currencyFormatter.format(((1 / yuan)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("Impuestos :flag_cn: ", 'ARS$ ' + currencyFormatter.format((((1 / yuan)) * EUR.data['venta'] * 1.75), { locale: 'es-ES', code: ' ' }), true)


                            const embed2 = new Discord.MessageEmbed()
                                .setTitle("Renminbi Chino")
                                .setColor("#cd0400")
                                .setDescription("El renminbi «moneda del pueblo» es la moneda de curso legal de la República Popular China y es emitida por el Banco Popular de China. El yuan (código: CNY) es la unidad básica del renminbi, nombre por el que también se conoce a la moneda. Cada yuan se fracciona en diez jiao o mao y cada jiao se divide en diez fen. Para que el valor del renminbi no fluctúe dependiendo del mercado financiero, el yuan está fijado a una canasta de varias monedas internacionales. Se suele utilizar el simbolo  del yen japonés (¥) o también el sinograma del yuan (元)")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858074668015157258/yuanchino.png")
                                .addField("Acuñación", "1955")
                                .addField("Países donde se utiliza:", "Oficial: :flag_cn:  \nNo oficial:  :flag_mo: :flag_hk: :flag_la: :flag_kh: :flag_vn: :flag_mm: :flag_kp: :flag_np::flag_zw:")
                                .addField("Código ISO", "CNY", true)
                                .addField("Símbolo ", "	元 / ¥ ", true)
                                .addField("Billetes :dollar: ", "角	1, 角2 y 角5 jiao  / 元1, 元2, 元5, 元10, 元20, 元50 y 元100 yuanes")
                                .addField("Monedas :coin:  ", "分1, 分2 y 分5 fen / 角1 y 角5 jiao / 元1 yuan")
                                .addField("Inflación anual :chart_with_downwards_trend: ", "1,9% (2018)", true)
                                .addField("Emisor :bank: ", "Banco Popular de China", true)


                            const button1 = new MessageButton()
                                .setCustomId("previousbtn")
                                .setLabel("💸 Conversión ")
                                .setStyle("SUCCESS");

                            const button2 = new MessageButton()
                                .setCustomId("nextbtn")
                                .setLabel("📋 Información")
                                .setStyle("PRIMARY");

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
                })


                .catch((err) => {
                    console.error('ERR', err)
                })


        }


        //Rupia
        if (interaction.options.getSubcommand() === 'rupia') {
            axios.get('https://api.exchangerate.host/latest')
                .then((INR) => {
                    rupia = INR.data['rates']['INR']
                    axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')

                        .then((EUR) => {
                            const embed1 = new Discord.MessageEmbed()
                                .setTitle("Rupia India :flag_in: ")
                                .setColor("#fc9836")
                                .setDescription("Rupia india oficial al precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (45%)")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858105999408103424/IndiaRupia.png")
                                .addField("Compra :flag_in:  ", 'ARS$ ' + currencyFormatter.format(((1 / rupia)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("Venta :flag_in:  ", 'ARS$ ' + currencyFormatter.format(((1 / rupia)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("Impuestos :flag_in:  ", 'ARS$ ' + currencyFormatter.format((((1 / rupia)) * EUR.data['venta'] * 1.75), { locale: 'es-ES', code: ' ' }), true)


                            const embed2 = new Discord.MessageEmbed()
                                .setTitle("Rupia India")
                                .setColor("#fc9836")
                                .setDescription("La rupia es la moneda oficial de la República de la India. Su emisión está controlada por el Banco de la Reserva de la India. Está dividida en 100 paise y su código ISO 4217 es INR. \n En muchas partes de la India, la rupia es conocida como rupaya (hindi), roopayi (రూపాయి) en télugu y kannada (ರೂಪಾಯಿ), rubai (ரூபாய்) en tamil, roopa (രൂപ) en malayalam, rupaye (रुपये) en maratí, o en muchas otras formas derivadas del sánscrito, en el cual, significa plata. Sin embargo, en zonas como Bengala Occidental, Tripura, Orissa y Assam el término ha derivado de la palabra sánscrita tanka. Así, a la rupia se la llama taka (টাকা) en bengalí, tôka (টকা) en asamés, y tôngka en oriya.")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858105999408103424/IndiaRupia.png")
                                .addField("Acuñación", "1 de abril de 1957")
                                .addField("Países donde se utiliza:", "Oficial: :flag_in: \n No oficial: :flag_bt: :flag_np: :flag_zw: ")
                                .addField("Código ISO", "INR ", true)
                                .addField("Símbolo ", "₹ ", true)
                                .addField("Billetes :dollar: ", "₹1, ₹5, ₹10, ₹20, ₹50, ₹100, ₹200, ₹500 y ₹2000")
                                .addField("Monedas :coin:  ", "	50 paise, ₹1, ₹2, ₹5, ₹10")
                                .addField("Inflación anual :chart_with_downwards_trend: ", "2,11%(2018)", true)
                                .addField("Emisor :bank: ", "Banco de la Reserva de la India", true)

                            const button1 = new MessageButton()
                                .setCustomId("previousbtn")
                                .setLabel("💸 Conversión ")
                                .setStyle("SUCCESS");

                            const button2 = new MessageButton()
                                .setCustomId("nextbtn")
                                .setLabel("📋 Información")
                                .setStyle("PRIMARY");

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
                })


                .catch((err) => {
                    console.error('ERR', err)
                })

        }

        //Won

        if (interaction.options.getSubcommand() === 'won') {
            axios.get('https://api.exchangerate.host/latest')
                .then((KRW) => {
                    won = KRW.data['rates']['KRW']
                    axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')

                        .then((EUR) => {
                            const embed1 = new Discord.MessageEmbed()
                                .setTitle("Won Surcoreano :flag_kr: ")
                                .setColor("#FFFFFF")
                                .setDescription("Won surcoreano oficial al precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (45%)")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858122163164807168/CoreaDelSurMoneda.png")
                                .addField("Compra :flag_kr:   ", 'ARS$ ' + currencyFormatter.format(((1 / won)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("Venta :flag_kr:   ", 'ARS$ ' + currencyFormatter.format(((1 / won)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("Impuestos :flag_kr:  ", 'ARS$ ' + currencyFormatter.format((((1 / won)) * EUR.data['venta'] * 1.75), { locale: 'es-ES', code: ' ' }), true)



                            const embed2 = new Discord.MessageEmbed()
                                .setTitle("Won Surcoreano")
                                .setColor("#FFFFFF")
                                .setDescription("El won surcoreano es la moneda de curso legal de Corea del Sur. Durante la época colonial, el won se sustituyó a la par por el yen, formando el yen coreano, pero después de la Segunda Guerra Mundial, Corea se dividió, resultando en dos monedas diferentes, ambas llamadas won, para el Sur y para el Norte.")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858122163164807168/CoreaDelSurMoneda.png")
                                .addField("Acuñación", "9 de junio de 1962")
                                .addField("Países donde se utiliza:", ":flag_kr: ")
                                .addField("Código ISO", "KRW ", true)
                                .addField("Símbolo ", "₩ ", true)
                                .addField("Billetes :dollar: ", "₩1000, ₩2000, ₩5000, ₩10000 y ₩50000")
                                .addField("Monedas :coin:  ", "₩1, ₩5, ₩10, ₩50, ₩100 y ₩500")
                                .addField("Inflación anual :chart_with_downwards_trend: ", "1,3% (2018)", true)
                                .addField("Emisor :bank: ", "Banco de Corea", true)


                            const button1 = new MessageButton()
                                .setCustomId("previousbtn")
                                .setLabel("💸 Conversión ")
                                .setStyle("SUCCESS");

                            const button2 = new MessageButton()
                                .setCustomId("nextbtn")
                                .setLabel("📋 Información")
                                .setStyle("PRIMARY");

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
                })


                .catch((err) => {
                    console.error('ERR', err)
                })
        }


        //Franco

        if (interaction.options.getSubcommand() === 'franco') {
            axios.get('https://api.exchangerate.host/latest')
                .then((suiza) => {
                    franco = suiza.data['rates']['CHF']
                    axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')

                        .then((EUR) => {
                            const embed1 = new Discord.MessageEmbed()
                                .setTitle("Franco Suizo :flag_ch: ")
                                .setColor("#d80027")
                                .setDescription("Franco suizo oficial al precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (45%)")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/930958502980100116/FrancoSuizo.png")
                                .addField("Compra :flag_ch: ", 'ARS$ ' + currencyFormatter.format(((1 / franco)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("Venta :flag_ch:  ", 'ARS$ ' + currencyFormatter.format(((1 / franco)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("Impuestos :flag_ch:  ", 'ARS$ ' + currencyFormatter.format((((1 / franco)) * EUR.data['venta'] * 1.75), { locale: 'es-ES', code: ' ' }), true)



                            const embed2 = new Discord.MessageEmbed()
                                .setTitle("Franco Suizo")
                                .setColor("#d80027")
                                .setDescription("El franco es la moneda oficial de Suiza y Liechtenstein. También es de curso legal en los enclaves italiano y alemán de Campione d'Italia y Büsingen am Hochrhein, donde circula junto al euro. El Banco Nacional Suizo es el encargado de emitir los billetes, y la Swissmint federal acuña las monedas. ")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/930958502980100116/FrancoSuizo.png")
                                .addField("Acuñación", "2005")
                                .addField("Países donde se utiliza:", ":flag_ch: :flag_li: :flag_it: (Campione d'Italia) :flag_de: (Büsingen am Hochrhein) ")
                                .addField("Código ISO", "CHF ", true)
                                .addField("Símbolo ", "Fr. ", true)
                                .addField("Billetes :dollar: ", "	Fr.10, Fr.20, Fr.50, Fr.100, Fr.200, Fr.1000 ")
                                .addField("Monedas :coin:  ", " 5 , 10, 20  rappen  /  Fr.½, Fr.1, Fr.2, Fr.5 ")
                                .addField("Inflación anual :chart_with_downwards_trend: ", "0,9% (2018)", true)
                                .addField("Emisor :bank: ", "Banco Nacional de Suiza", true)

                            const button1 = new MessageButton()
                                .setCustomId("previousbtn")
                                .setLabel("💸 Conversión ")
                                .setStyle("SUCCESS");

                            const button2 = new MessageButton()
                                .setCustomId("nextbtn")
                                .setLabel("📋 Información")
                                .setStyle("PRIMARY");

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
                })


                .catch((err) => {
                    console.error('ERR', err)
                })
        }

        //Lira

        if (interaction.options.getSubcommand() === 'lira') {
            axios.get('https://api.exchangerate.host/latest')
                .then((LIRA) => {
                    Turca = LIRA.data['rates']['TRY']
                    axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')

                        .then((EUR) => {
                            const embed1 = new Discord.MessageEmbed()
                                .setTitle("Lira Turca :flag_tr: ")
                                .setColor("#d70224")
                                .setDescription("Lira Turca oficial al precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (45%)")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/930958503399546910/liraturca.png")
                                .addField("Compra :flag_tr:  ", 'ARS$ ' + currencyFormatter.format(((1 / Turca)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("Venta :flag_tr:  ", 'ARS$ ' + currencyFormatter.format(((1 / Turca)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' }), true)
                                .addField("Impuestos :flag_tr:  ", 'ARS$ ' + currencyFormatter.format((((1 / Turca)) * EUR.data['venta'] * 1.75), { locale: 'es-ES', code: ' ' }), true)



                            const embed2 = new Discord.MessageEmbed()
                                .setTitle("Lira Turca")
                                .setColor("#d70224")
                                .setDescription("La lira es la moneda de curso legal de Turquía y de la República Turca del Norte de Chipre. Su código ISO 4217 es TRY y se divide en 100 kuruş. El emisor es el Banco Central de la República de Turquía. ")
                                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/930958503399546910/liraturca.png")
                                .addField("Acuñación", "2005")
                                .addField("Países donde se utiliza:", ":flag_tr: :flag_cy: (Norte) ")
                                .addField("Código ISO", "TRY ", true)
                                .addField("Símbolo ", "₺ ", true)
                                .addField("Billetes :dollar: ", "	₺5, ₺10, ₺20, ₺50, ₺100 y ₺200")
                                .addField("Monedas :coin:  ", " ₺0,01 ,	₺0,05 , ₺0,10 , ₺0,25, ₺0,50 , ₺1")
                                .addField("Inflación anual :chart_with_downwards_trend: ", "14,6% (2020)", true)
                                .addField("Emisor :bank: ", "Banco Central de la República de Turquía", true)


                            const button1 = new MessageButton()
                                .setCustomId("previousbtn")
                                .setLabel("💸 Conversión ")
                                .setStyle("SUCCESS");

                            const button2 = new MessageButton()
                                .setCustomId("nextbtn")
                                .setLabel("📋 Información")
                                .setStyle("PRIMARY");

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
                })


                .catch((err) => {
                    console.error('ERR', err)
                })
        }


    }
}