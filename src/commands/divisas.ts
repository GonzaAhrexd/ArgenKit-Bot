import { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, StringSelectMenuBuilder } from 'discord.js'
import Discord from "discord.js"
import axios from "axios"
import { ButtonStyle } from 'discord.js'
var currencyFormatter = require('currency-formatter'); //Currency formatter
const { total155 } = require("../functions/impuestos"); //Impuestos
import { formatoPrecio } from '../functions/formato'
import { embedError } from "../functions/embedError"
const wait = require('node:timers/promises').setTimeout
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
            try {
                const [oficial, blue, mep, ccl] = await Promise.all([
                    axios.get('https://dolarapi.com/v1/dolares/oficial'),
                    axios.get('https://dolarapi.com/v1/dolares/blue'),
                    axios.get('https://dolarapi.com/v1/dolares/bolsa'),
                    axios.get('https://dolarapi.com/v1/dolares/contadoconliqui'),
                ]);

                const embed1: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                    .setTitle("Dólar estadounidese :flag_us:")
                    .setColor("#a9ea98")
                    .setDescription("El dólar estadounidense es la moneda oficial de Estados Unidos y de otros países y dependencias. Tras la ruptura del patrón oro en el año 1971, la moneda se convirtió, de facto, en una moneda fiat.")
                    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903145945980604447/dolar3.png")
                    .addFields(
                        { name: "Dólar oficial :bank:", value: "Valor del dólar que se liquida por parte del gobierno nacional y está sujeto a diversos impuestos, sólo se puede retirar USD$200 al mes." },
                        { name: "COMPRA", value: `ARS$ ${currencyFormatter.format(oficial.data['compra'], { locale: 'es-ES', code: ' ' })}`, inline: true },
                        { name: "VENTA", value: `ARS$ ${currencyFormatter.format(oficial.data['venta'], { locale: 'es-ES', code: ' ' })}`, inline: true },
                        { name: "Impuestos (155%)", value: `ARS$ ${currencyFormatter.format(total155(oficial.data['venta']), { locale: 'es-ES', code: ' ' })}`, inline: true },
                        //Blue
                        { name: "Dólar blue <:dolarblue:1181095026432938034>", value: "Valor del mercado paralelo establecido por la oferta y la demanda" },
                        { name: "COMPRA", value: `ARS$ ${currencyFormatter.format(blue.data['compra'], { locale: 'es-ES', code: ' ' })}`, inline: true },
                        { name: "VENTA", value: `ARS$ ${currencyFormatter.format(blue.data['venta'], { locale: 'es-ES', code: ' ' })}`, inline: true },
                        //Financieros
                        { name: "Financieros <:finanzas:1068357650380755045>", value: "Son el resultante de operaciones bursátiles que implican comprar una acción o un bono en pesos y vender ese mismo papel en dólares." },
                        { name: "CCL", value: `ARS$ ${currencyFormatter.format(ccl.data['venta'], { locale: 'es-ES', code: ' ' })}`, inline: true },
                        { name: "MEP", value: `ARS$ ${currencyFormatter.format(mep.data['compra'], { locale: 'es-ES', code: ' ' })}`, inline: true }
                    );
                const embed2: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                    .setTitle("Dólar estadounidense")
                    .setColor("#a9ea98")
                    .setDescription("El dólar estadounidense es la moneda oficial de Estados Unidos y de otros países y dependencias. Tras la ruptura del patrón oro en el año 1971, la moneda se convirtió, de facto, en una moneda fiat.")
                    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903145945980604447/dolar3.png")
                    .addFields(
                        { name: "Acuñación", value: "2 de abril de 1792" },
                        { name: "Países donde se utiliza:", value: ":flag_us: :flag_sv: :flag_ec: :flag_pa: :flag_pr: :flag_zw: :flag_tl: :flag_pw: :flag_fm: :flag_mh:" },
                        { name: "Código ISO", value: "USD", inline: true },
                        { name: "Símbolo", value: "$", inline: true },
                        { name: "Billetes :dollar:", value: "$1, $2, $5, $10, $20, $50 y $100" },
                        { name: "Monedas :coin:", value: "$0,01, $0,05, $0,10, $0,25, $0,50 y $1" },
                        { name: "Inflación anual :chart_with_downwards_trend:", value: "7,1% (2021)", inline: true },
                        { name: "Emisor :bank:", value: "Sistema de Reserva Federal", inline: true }
                    );

                const row = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId("conversion")
                            .setLabel("💸 Conversión ")
                            .setStyle(ButtonStyle.Success)
                    )
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId("informacion")
                            .setLabel("📋 Información")
                            .setStyle(ButtonStyle.Primary)
                    )

                await interaction.deferReply();
                await wait(4000)
                await interaction.editReply({ embeds: [embed1], components: [row] });


                client.on('interactionCreate', interaction => {
                    if (!interaction.isButton()) return;
                });

                const filter = i => i.user.id === interaction.user.id;

                const collector = interaction.channel.createMessageComponentCollector({ filter, time: 8000 });

                var actual = embed1;

                collector.on('collect', async i => {
                    if (i.customId === 'conversion') {
                        await i.deferUpdate();
                        await i.editReply({ embeds: [embed1], components: [row] });
                        actual = embed1;
                    }
                    if (i.customId === 'informacion') {
                        await i.deferUpdate();
                        await i.editReply({ embeds: [embed2], components: [row] });
                        actual = embed2;
                    }
                });

                collector.on("end", (collected, reason) => {
                    if (reason === "time") {
                        interaction.editReply({ embeds: [actual], components: [] });
                    }
                });
            } catch (err) {
                embedError(interaction, err)
            }
        }
        //Euro

        if (interaction.options.getSubcommand() === 'euro') {
            try {
                const [euro, valorUSD] = await Promise.all([
                    axios.get('https://api.bluelytics.com.ar/v2/latest'),
                    axios.get('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json')
                ]);
                let conversion: number = valorUSD.data['usd']['eur']
                const embed1: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                    .setTitle("Euro :flag_eu:")
                    .setColor("#0153b4")
                    .setDescription("El euro (€) es la moneda usada por las instituciones de la Unión Europea (UE), así como la moneda oficial de la eurozona, formada por 19 de los 27 Estados miembros de la UE. Además, 4 micro-Estados europeos tienen acuerdos con la Unión Europea para el uso del euro como moneda ")
                    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913863513498333224/european-union_1.png")
                    .addFields(
                        { name: `Valor en dólares 💸`, value: `Valor del euro en relación al dólar estadounidense.`, inline: false },
                        { name: `1 DÓLAR <:rightarrow:921907270747570247> EURO`, value: ` ${formatoPrecio(conversion, "EUR")} `, inline: true },
                        { name: `1 EURO <:rightarrow:921907270747570247> DÓLAR`, value: ` ${formatoPrecio(1 / conversion, "USD")} `, inline: true },
                        { name: "Euro oficial :bank:", value: "Valor del euro que se liquida por parte del gobierno nacional y está sujeto a diversos impuestos, además, sólo se puede retirar el equivalente a USD$200 al mes." },
                        { name: "COMPRA", value: `ARS$ ${currencyFormatter.format(euro.data['oficial_euro']['value_buy'], { locale: 'es-ES', code: ' ' })}`, inline: true },
                        { name: "VENTA", value: `ARS$ ${currencyFormatter.format(euro.data['oficial_euro']['value_sell'], { locale: 'es-ES', code: ' ' })}`, inline: true },
                        { name: "Impuestos (155%)", value: `ARS$ ${currencyFormatter.format(total155(euro.data['venta']), { locale: 'es-ES', code: ' ' })}`, inline: true },
                        { name: "Euro blue <:dolarblue:1181095026432938034>", value: "Valor del mercado paralelo establecido por la oferta y la demanda" },
                        { name: "COMPRA", value: `ARS$ ${currencyFormatter.format(euro.data['blue_euro']['value_buy'], { locale: 'es-ES', code: ' ' })}`, inline: true },
                        { name: "VENTA", value: `ARS$ ${currencyFormatter.format(euro.data['blue_euro']['value_sell'], { locale: 'es-ES', code: ' ' })}`, inline: true }
                    );

                const embed2: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                    .setTitle("Euro")
                    .setColor("#0153b4")
                    .setDescription("El euro (€) es la moneda usada por las instituciones de la Unión Europea (UE), así como la moneda oficial de la eurozona, formada por 19 de los 27 Estados miembros de la UE. Además, 4 micro-Estados europeos tienen acuerdos con la Unión Europea para el uso del euro como moneda")
                    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913863513498333224/european-union_1.png")
                    .addFields(
                        { name: "Acuñación", value: "1 de enero de 2002" },
                        { name: "Países donde se utiliza:", value: ":flag_de: :flag_at: :flag_be: :flag_cy: :flag_sk: :flag_si: :flag_es: :flag_ee: :flag_fi: :flag_fr: :flag_gr: :flag_ie: :flag_it: :flag_lv: :flag_lt: :flag_lu: :flag_mt: :flag_nl: :flag_pt: :flag_ad: :flag_va: :flag_mc: :flag_sm: :flag_xk: :flag_me:" },
                        { name: "Código ISO", value: "EUR", inline: true },
                        { name: "Símbolo", value: "€", inline: true },
                        { name: "Billetes <:euro:903349498930135160>", value: "€5, €10, €20, €50, €100, €200, €500" },
                        { name: "Monedas :coin:", value: "€0,01, €0,02, €0,05, €0,10, €0,20, €0,50, €1, €2" },
                        { name: "Inflación anual :chart_with_downwards_trend:", value: "-3.0% (2021)", inline: true },
                        { name: "Emisor :bank:", value: "Banco Central Europeo", inline: true }
                    );

                const row = new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.ButtonBuilder()
                            .setCustomId("conversion")
                            .setLabel("💸 Conversión ")
                            .setStyle(ButtonStyle.Success)
                    )
                    .addComponents(
                        new Discord.ButtonBuilder()
                            .setCustomId("informacion")
                            .setLabel("📋 Información")
                            .setStyle(ButtonStyle.Primary)
                    );


                await interaction.deferReply()
                await wait(3000)
                await interaction.editReply({ embeds: [embed1], components: [row] });


                client.on('interactionCreate', interaction => {
                    if (!interaction.isButton()) return;
                });

                const filter = i => i.user.id === interaction.user.id;

                const collector = interaction.channel.createMessageComponentCollector({ filter, time: 8000 });

                var actual = embed1;

                collector.on('collect', async i => {
                    if (i.customId === 'conversion') {
                        await i.deferUpdate();
                        await i.editReply({ embeds: [embed1], components: [row] });
                        actual = embed1;
                    }
                    if (i.customId === 'informacion') {
                        await i.deferUpdate();
                        await i.editReply({ embeds: [embed2], components: [row] });
                        actual = embed2;
                    }
                });

                collector.on("end", (collected, reason) => {
                    if (reason === "time") {
                        interaction.editReply({ embeds: [actual], components: [] });
                    }
                });
            } catch (error) {
                embedError(interaction, error)
            }
        }
        let divisas: Array<
            {
                id: string,
                nombre: string,
                iso: string,
                bandera: string,
                desc: string,
                color: Discord.ColorResolvable,
                img: string,
                ac: string,
                paises: string,
                simbolo: string,
                billetes: string,
                monedas: string,
                inflacion: string,
                emisor: string
            }
        > = [
                {
                    id: "real",
                    nombre: "Real Brasilero",
                    iso: "BRL",
                    bandera: ":flag_br:",
                    desc: "El real es la moneda de curso legal en Brasil y fuera de sus fronteras se le conoce como real brasileño. A partir de 2020, es la vigésima moneda más negociada en el mundo, la segunda en América Latina detrás de peso mexicano y la cuarta en el continente americano detrás del dólar estadounidense, el dólar canadiense y el peso mexicano",
                    color: "#e8ce6c",
                    img: "https://cdn.discordapp.com/attachments/802944543510495292/1068375006784012288/BrazilMoney.png",
                    ac: "1994",
                    paises: ":flag_br:",
                    simbolo: "R$",
                    billetes: "R$2, R$5, R$10, R$20, R$50, R$100 y R$200",
                    monedas: "R$0,01, R$0,05, R$0,10, R$0,25, R$0,50 y R$1",
                    inflacion: "10.74% (2021)",
                    emisor: "Banco Central do Brasil"
                }, {
                    id: "yen",
                    nombre: "Yen Japonés",
                    iso: "JPY",
                    bandera: ":flag_jp:",
                    desc: "El yen es la moneda de Japón, muy valiosa en el mercado global, la tercera más importante tras el dólar y el euro. También se usa como reserva junto con otras monedas como el dólar y el euro, y en la numeración japonesa, las grandes cantidades se expresan en múltiplos de 10,000 (man, 万).",
                    color: "#FDFD0D",
                    img: "https://cdn.discordapp.com/attachments/802944543510495292/913893648876331048/yenjapones3.png",
                    ac: "10 de mayo de 1871",
                    paises: ":flag_jp:",
                    simbolo: "¥",
                    billetes: "¥1000, ¥2000, ¥5000 y ¥10000",
                    monedas: "¥1, ¥5, ¥10, ¥50, ¥100 y ¥500",
                    inflacion: "2.6% (Julio  2022)",
                    emisor: "Banco de Japón"
                },
                //Libra
                {
                    id: "libra",
                    nombre: "Libra esterlina",
                    iso: "GBP",
                    bandera: ":flag_gb:",
                    desc: "La libra esterlina es la moneda oficial del Reino Unido, así como de varias dependencias y territorios británicos. Es el cuarto mayor moneda en términos de volumen de transacciones en el mercado de divisas y es considerada una de las monedas más antiguas y estables del mundo",
                    color: "#D605F6",
                    img: "https://cdn.discordapp.com/attachments/802944543510495292/913895989889359902/ReinaIsabeltest.png",
                    ac: "1158",
                    paises: ":flag_gb: :flag_im::flag_gg: :flag_je: :flag_fk: :flag_gi: :flag_sh: :flag_gs: :flag_io:",
                    simbolo: "£",
                    billetes: "5, 10, 20, 50 libras esterlinas",
                    monedas: "1, 2, 5, 10, 20, 50 peniques, 1, 2 libras esterlinas",
                    inflacion: "2.3%",
                    emisor: "Banco de Inglaterra"
                },
                //Rublo
                {
                    id: "rublo",
                    nombre: "Rublo ruso",
                    iso: "RUB",
                    bandera: ":flag_ru:",
                    desc: "El rublo ruso es la moneda oficial de la Federación Rusa. Fue introducido en 1992 después de la caída del sistema soviético y reemplazó al antiguo rublo soviético. El tipo de cambio del rublo respecto al dólar estadounidense ha sido volátil en los últimos años debido a factores económicos y políticos.",
                    color: "#FDFD0D",
                    img: "https://cdn.discordapp.com/attachments/802944543510495292/920139509344108594/bancario_1.png",
                    ac: "1992",
                    paises: ":flag_ru:",
                    simbolo: "₽",
                    billetes: "5, 10, 50, 100, 500, 1000, 5000 rublos",
                    monedas: "1, 2, 5, 10, 20, 50 kopeks, 1, 2, 5 rublos",
                    inflacion: "5.5%",
                    emisor: "Banco Central de Rusia"
                },
                //Dólar Canadiense
                {
                    id: "dolarcanadiense",
                    nombre: "Dólar canadiense",
                    iso: "CAD",
                    bandera: ":flag_ca:",
                    desc: "El dólar canadiense es la moneda oficial de Canadá. Es ampliamente aceptado en los Estados Unidos y en otros países de América del Norte debido a la cercanía geográfica y económica con Canadá. El tipo de cambio del dólar canadiense respecto al dólar estadounidense ha fluctuado en los últimos años debido a factores económicos y políticos.",
                    color: "#fc0201",
                    img: "https://cdn.discordapp.com/attachments/802944543510495292/928332562793922611/canadian-dollar.png",
                    ac: "1858",
                    paises: ":flag_ca:",
                    simbolo: "C$",
                    billetes: "5, 10, 20, 50, 100 dólares canadienses",
                    monedas: "1, 5, 10, 25, 50 centavos, 1 dólar canadiense",
                    inflacion: "2.5%",
                    emisor: "Banco de Canadá"
                },
                {
                    id: "dolaraustraliano",
                    nombre: "Dólar australiano",
                    iso: "AUD",
                    bandera: ":flag_au:",
                    desc: "El dólar australiano es la moneda oficial de Australia. Es ampliamente utilizado en las Islas del Pacífico y en Asia debido a la cercanía geográfica y económica con Australia. El tipo de cambio del dólar australiano respecto al dólar estadounidense ha fluctuado en los últimos años debido a factores económicos y políticos.",
                    color: "#000346",
                    img: "https://cdn.discordapp.com/attachments/802944543510495292/858087525518934076/dolaraustraliano.png",
                    ac: "1966",
                    paises: ":flag_au:",
                    simbolo: "A$",
                    billetes: "5, 10, 20, 50, 100 dólares australianos",
                    monedas: "5, 10, 20, 50 centavos, 1, 2 dólares australianos",
                    inflacion: "1.7%",
                    emisor: "Banco de la Reserva de Australia"
                },
                //Dólar Neozelandes
                {
                    id: "dolarneozelandes",
                    nombre: "Dólar neozelandés",
                    iso: "NZD",
                    bandera: ":flag_nz:",
                    desc: "El dólar neozelandés es la moneda oficial de Nueva Zelanda. Es una moneda relativamente nueva, habiendo sido introducida en 1967 para reemplazar la libra neozelandesa. Es ampliamente utilizado en las transacciones comerciales y turísticas en el país.",
                    color: "#000346",
                    img: "https://cdn.discordapp.com/attachments/802944543510495292/858094221654753300/Dolar_nueva_zelanda.png",
                    ac: "1967",
                    paises: ":flag_nz: :flag_ck: :flag_nu: :flag_tk: :flag_pn: ",
                    simbolo: "NZ$",
                    billetes: "5, 10, 20, 50 y 100 dólares neozelandeses",
                    monedas: "1, 2, 5, 10, 20 y 50 centavos, 1 dólar neozelandés",
                    inflacion: "1.5%",
                    emisor: "Banco de la Reserva de Nueva Zelanda"
                },
                //Peso Mexicano
                {
                    id: "pesomexicano",
                    nombre: "Peso mexicano",
                    iso: "MXN",
                    bandera: ":flag_mx:",
                    desc: "El peso mexicano es la moneda oficial de México. Fue introducido en 1993 para reemplazar al antiguo peso mexicano. Es ampliamente utilizado en las transacciones comerciales y turísticas en el país.",
                    color: "#24944c",
                    img: "https://cdn.discordapp.com/attachments/802944543510495292/838470413066436658/MXNPeso.png",
                    ac: "1993",
                    paises: ":flag_mx:",
                    simbolo: "$",
                    billetes: "20, 50, 100, 200, 500 y 1000 pesos mexicanos",
                    monedas: "5, 10, 20 y 50 centavos, 1 y 2 pesos mexicanos",
                    inflacion: "3.5%",
                    emisor: "Banco de México"
                },
                //Peso chileno
                {
                    id: "pesochileno",
                    nombre: "Peso chileno",
                    iso: "CLP",
                    bandera: ":flag_cl:",
                    desc: "El peso chileno es la moneda oficial de Chile. Fue introducido en 1975 para reemplazar al antiguo peso chileno. Es ampliamente utilizado en las transacciones comerciales y turísticas en el país.",
                    color: "#fc0201",
                    img: "https://cdn.discordapp.com/attachments/802944543510495292/856753411793354773/pesochileno.png",
                    ac: "1975",
                    paises: ":flag_cl:",
                    simbolo: "$",
                    billetes: "1000, 2000, 5000, 10000 y 20000 pesos chilenos",
                    monedas: "1, 5, 10, 50 y 100 pesos chilenos",
                    inflacion: "2.5%",
                    emisor: "Banco Central de Chile"
                },
                //Peso uruguayo
                {
                    id: "pesouruguayo",
                    nombre: "Peso uruguayo",
                    iso: "UYU",
                    bandera: ":flag_uy:",
                    desc: "El peso uruguayo es la moneda oficial de Uruguay. Es emitido por el Banco Central del Uruguay y su simbolo es $U. ",
                    color: "#D605F6",
                    img: "https://cdn.discordapp.com/attachments/802944543510495292/856766027831574528/pesouruguayo.png",
                    ac: "1897",
                    paises: ":flag_uy:",
                    simbolo: "$U",
                    billetes: "50, 100, 200, 500, 1000, 2000, 5000 pesos uruguayos",
                    monedas: "1, 2, 5, 10, 20, 50 centesimos, 1 peso uruguayo",
                    inflacion: "5.5%",
                    emisor: "Banco Central del Uruguay"
                },
                //Peso colombiano
                {
                    id: "pesocolombiano",
                    nombre: "Peso colombiano",
                    iso: "COP",
                    bandera: ":flag_co:",
                    desc: "El peso colombiano es la moneda oficial de Colombia. Es emitido por el Banco de la República de Colombia y su simbolo es $. ",
                    color: "#fecb04",
                    img: "https://cdn.discordapp.com/attachments/802944543510495292/857487546455294022/PesoColombiano.png",
                    ac: "1837",
                    paises: ":flag_co:",
                    simbolo: "$",
                    billetes: "1.000, 2.000, 5.000, 10.000, 20.000, 50.000, 100.000 pesos colombianos",
                    monedas: "5, 10, 25, 50 centavos, 1 peso colombiano",
                    inflacion: "3.7%",
                    emisor: "Banco de la República de Colombia"
                },
                {
                    id: "boliviano",
                    nombre: "Boliviano",
                    iso: "BOB",
                    bandera: ":flag_bo:",
                    desc: "El boliviano es la moneda oficial de Bolivia. Es emitido por el Banco Central de Bolivia y su simbolo es Bs. ",
                    color: "#6da544",
                    img: "https://cdn.discordapp.com/attachments/802944543510495292/858355537228595201/Boliviano.png",
                    ac: "1864",
                    paises: ":flag_bo:",
                    simbolo: "Bs",
                    billetes: "2, 5, 10, 20, 50, 100 bolivianos",
                    monedas: "1, 2, 5, 10 centavos, 1 boliviano",
                    inflacion: "3.1%",
                    emisor: "Banco Central de Bolivia"
                },
                {
                    id: "sol",
                    nombre: "Sol peruano",
                    iso: "PEN",
                    bandera: ":flag_pe:",
                    desc: "El sol es la moneda oficial de Perú. Es emitido por el Banco Central de Reserva del Perú y su simbolo es S/. ",
                    color: "#cd0400",
                    img: "https://cdn.discordapp.com/attachments/802944543510495292/1068674182201753690/SolPeruano.png",
                    ac: "1991",
                    paises: ":flag_pe:",
                    simbolo: "S/",
                    billetes: "10, 20, 50, 100, 200 soles",
                    monedas: "1, 5, 10, 20, 50 céntimos, 1 sol",
                    inflacion: "1.8%",
                    emisor: "Banco Central de Reserva del Perú"
                },
                {
                    id: "guarani",
                    nombre: "Guaraní",
                    iso: "PYG",
                    bandera: ":flag_py:",
                    desc: "El guaraní es la moneda oficial de Paraguay. Es emitido por el Banco Central del Paraguay y su simbolo es Gs. ",
                    color: "#d80027",
                    img: "https://cdn.discordapp.com/attachments/802944543510495292/856970634726735902/guaraniparaguayo.png",
                    ac: "1944",
                    paises: ":flag_py:",
                    simbolo: "Gs",
                    billetes: "2.000, 5.000, 10.000, 20.000, 50.000, 100.000 guaraníes",
                    monedas: "50, 100, 500 guaraníes",
                    inflacion: "2.5%",
                    emisor: "Banco Central del Paraguay"
                },
                {
                    id: "bolivar",
                    nombre: "Bolivar Digital Venezolano",
                    iso: "VED",
                    bandera: ":flag_ve:",
                    desc: "El Bolivar Digital es la moneda de curso legal de la República Bolivariana de Venezuela. Esta moneda reemplazó al Bolívar Soberano (Bs. S) que circuló desde  agosto de 2018 y octubre de 2021. El valor de la nueva moneda se obtendrá quitando seis ceros a la antigua.",
                    color: "#000000",
                    img: "https://cdn.discordapp.com/attachments/802944543510495292/894982507563483216/bolivardigital.png",
                    ac: "1 de octubre del 2021",
                    paises: ":flag_ve:",
                    simbolo: "Bs",
                    billetes: "5, 10, 20, 50 y 100 Bolívares.",
                    monedas: "	25 Céntimos, 50 Céntimos y 1 Bolívar.",
                    inflacion: "305,7% (2022)",
                    emisor: "Banco Central de Venezuela"
                },
                {
                    id: "yuan",
                    nombre: "Yuan chino",
                    iso: "CNY",
                    bandera: ":flag_cn:",
                    desc: "El yuan chino es la moneda oficial de la República Popular China. Es una de las monedas más utilizadas en el mundo y es ampliamente aceptada en todo el mundo.",
                    color: "#cd0400",
                    img: "https://cdn.discordapp.com/attachments/802944543510495292/858074668015157258/yuanchino.png",
                    ac: "1948",
                    paises: ":flag_cn:",
                    simbolo: "元 / ¥",
                    billetes: "1, 2, 5, 10, 20, 50, 100 yuanes",
                    monedas: "1, 2, 5 jiao, 1 yuan",
                    inflacion: "2.1%",
                    emisor: "Banco Popular de China"
                },
                {
                    id: "rupia",
                    nombre: "Rupia india",
                    iso: "INR",
                    bandera: ":flag_in:",
                    desc: "La rupia india es la moneda oficial de la India. Es la moneda más ampliamente utilizada en el país y es emitida y regulada por el Banco de la Reserva de la India.",
                    color: "#fc9836",
                    img: "https://cdn.discordapp.com/attachments/802944543510495292/858105999408103424/IndiaRupia.png",
                    ac: "1935",
                    paises: ":flag_in:",
                    simbolo: "₹",
                    billetes: "5, 10, 20, 50, 100, 200, 500, 2000 rupias indias",
                    monedas: "5, 10, 20, 25, 50 paisa, 1, 2, 5 rupias indias",
                    inflacion: "6.2%",
                    emisor: "Banco de la Reserva de la India"
                },
                {
                    id: "won",
                    nombre: "Won surcoreano",
                    iso: "KRW",
                    bandera: ":flag_kr:",
                    desc: "El won surcoreano es la moneda oficial de Corea del Sur. Es emitido y regulado por el Banco de Corea.",
                    color: "#FFFFFF",
                    img: "https://cdn.discordapp.com/attachments/802944543510495292/858122163164807168/CoreaDelSurMoneda.png",
                    ac: "1945",
                    paises: ":flag_kr:",
                    simbolo: "₩",
                    billetes: "1000, 5000, 10,000, 50,000 won surcoreano",
                    monedas: "10, 50, 100, 500 won surcoreano",
                    inflacion: "1.2%",
                    emisor: "Banco de Corea"
                },
                {
                    id: "franco",
                    nombre: "Franco suizo",
                    iso: "CHF",
                    bandera: ":flag_ch:",
                    desc: "El franco suizo es la moneda oficial de Suiza. Es emitido y regulado por el Banco Nacional Suizo.",
                    color: "#d80027",
                    img: "https://cdn.discordapp.com/attachments/802944543510495292/930958502980100116/FrancoSuizo.png",
                    ac: "1850",
                    paises: ":flag_ch: :flag_li: :flag_it: (Campione d'Italia) :flag_de: (Büsingen am Hochrhein)",
                    simbolo: "CHF",
                    billetes: "10, 20, 50, 100, 200, 1000 francos suizos",
                    monedas: "5, 10, 20, 50 rappen, 1, 2 francos suizos",
                    inflacion: "0.2%",
                    emisor: "Banco Nacional Suizo"
                },
                {
                    id: "lira",
                    nombre: "Lira turca",
                    iso: "TRY",
                    bandera: ":flag_tr:",
                    desc: "La lira turca es la moneda oficial de Turquía. Fue introducida en 1844 y ha sido reemplazada varias veces desde entonces debido a la hiperinflación. Actualmente, es emitida por el Banco Central de Turquía.",
                    color: "#d70224",
                    img: "https://cdn.discordapp.com/attachments/802944543510495292/930958503399546910/liraturca.png",
                    ac: "1923",
                    paises: ":flag_tr: :flag_cy: (Norte)",
                    simbolo: "₺",
                    billetes: "5, 10, 20, 50, 100, 200 liras turcas",
                    monedas: "1, 5, 10, 25, 50 kuruş, 1 lira turca",
                    inflacion: "12.15%",
                    emisor: "Banco Central de Turquía"
                },



            ]

        divisas.forEach(async divisa => {
            if (interaction.options.getSubcommand() === divisa.id) {
                try {
                    const [DIVISA, oficial, blue] = await Promise.all([
                        axios.get('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json'),
                        axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/oficial'),
                        axios.get('https://api.bluelytics.com.ar/v2/latest')
                    ]);
                    let conversion: number = DIVISA.data['usd'][(divisa.iso).toLowerCase()]
                    let num: number = 1
                    let cantidad: string = " "
                    if (divisa.iso === 'COP' || divisa.iso === "PYG" || divisa.iso === "KRW") {
                        num = 1000
                        cantidad = "(1000 Unidades)"
                    }
                    const embed1: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                        .setTitle(`${divisa.nombre} ${divisa.bandera}  ${cantidad} `)
                        .setColor(divisa.color)
                        .setDescription(divisa.desc)
                        .setThumbnail(divisa.img)
                        .addFields(
                            { name: `Valor en dólares 💸`, value: `Valor del ${divisa.nombre} en relación al dólar estadounidense.`, inline: false },
                            { name: `1 DÓLAR <:rightarrow:921907270747570247> ${(divisa.nombre).toUpperCase()}`, value: ` ${formatoPrecio(conversion, divisa.iso)} `, inline: true },
                            { name: `1 ${divisa.nombre} <:rightarrow:921907270747570247> DÓLAR`, value: ` ${formatoPrecio(1 / conversion, "USD")} `, inline: true },
                            { name: `${divisa.nombre} oficial :bank:`, value: `Valor de ${divisa.nombre} que se liquida por parte del gobierno nacional y está sujeto a diversos impuestos`, inline: false },
                            { name: "COMPRA", value: `ARS$ ${currencyFormatter.format(((num / conversion)) * oficial.data['compra'], { locale: 'es-ES', code: ' ' })}`, inline: true },
                            { name: "VENTA", value: `ARS$ ${currencyFormatter.format(((num / conversion)) * oficial.data['venta'], { locale: 'es-ES', code: ' ' })}`, inline: true },
                            { name: "Impuestos (155%)", value: `ARS$ ${currencyFormatter.format(total155((num / conversion) * oficial.data['venta']), { locale: 'es-ES', code: ' ' })}`, inline: true },
                            { name: `${divisa.nombre} blue <:dolarblue:1181095026432938034>`, value: "Valor del mercado paralelo establecido por la oferta y la demanda", inline: false },
                            { name: "COMPRA", value: `ARS$ ${currencyFormatter.format((num / conversion) * blue.data['blue']['value_buy'], { locale: 'es-ES', code: ' ' })}`, inline: true },
                            { name: "VENTA", value: `ARS$ ${currencyFormatter.format((num / conversion) * blue.data['blue']['value_sell'], { locale: 'es-ES', code: ' ' })}`, inline: true }
                        )

                    const embed2: Discord.EmbedBuilder = new Discord.EmbedBuilder()
                        .setTitle(divisa.nombre)
                        .setColor(divisa.color)
                        .setDescription(divisa.desc)
                        .setThumbnail(divisa.img)
                        .addFields(
                            { name: "Acuñación", value: divisa.ac },
                            { name: "Países donde se utiliza:", value: divisa.paises },
                            { name: "Código ISO", value: divisa.iso, inline: true },
                            { name: "Símbolo", value: divisa.simbolo, inline: true },
                            { name: "Billetes :money_with_wings:", value: divisa.billetes },
                            { name: "Monedas :coin:", value: divisa.monedas },
                            { name: "Inflación anual :chart_with_downwards_trend:", value: divisa.inflacion, inline: true },
                            { name: "Emisor :bank:", value: divisa.emisor, inline: true }
                        )


                    const row = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId("conversion")
                                .setLabel("💸 Conversión ")
                                .setStyle(ButtonStyle.Success)
                        )
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId("informacion")
                                .setLabel("📋 Información")
                                .setStyle(ButtonStyle.Primary)
                        )


                    await interaction.deferReply()
                    await wait(3000)
                    await interaction.editReply({ embeds: [embed1], components: [row] });



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
                    });

                    collector.on("end", (collected, reason) => {
                        if (reason === "time") {
                            interaction.editReply({ embeds: [actual], components: [] });
                        }
                    })

                } catch (error) {
                    embedError(interaction, error)
                }


            }
        })


    }
}