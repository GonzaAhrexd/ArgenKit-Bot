const {SlashCommandBuilder} = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")
const { MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js');
const paginationEmbed = require('discordjs-button-pagination'); //Botones
module.exports = {
    data: new SlashCommandBuilder()
    .setName("update")
    .setDescription("Muestra las novedades de la actualización"),

    async run(client, interaction){
        const embed15 = new Discord.MessageEmbed()
        .setTitle("ARGENKIT BOT VERSIÓN 1.5 ¡ACTUALIZACIÓN TÉCNICA!")
        .setColor('#0a9ee1')
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/811043646848630786/argboticon-03.png")
        .addField("<:slash:964681731519164457> Command Handler ", "Se reestructuró el código para una mayor organización de los comandos .")
        .addField("<:slash:964681731519164457> Covid19 Paises ", "Se optimizó el comando, ahora están disponibles los 194 paises del mundo.")
        .addField("<:slash:964681731519164457> Traductor ", "Se ha agregado un traductor.")
      
        const embed14 = new Discord.MessageEmbed()
      .setTitle("ARGENKIT BOT VERSIÓN 1.4 ¡SLASH COMMANDS UPDATE!")
      .setColor('#0a9ee1')
      .setDescription("  Fecha de lanzamiento: 16/4/2022 \n Debido al anuncio de Discord de volver los Message Content algo privilegiado para bots verificados, esta actualización es obligatoria para poder seguir usando el bot.")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/811043646848630786/argboticon-03.png")
      .addField("<:slash:964681731519164457> Slash commands ", "Se han actualizado todos los comandos al formato slash. Esto debido a que Discord ya no permitirá a los bots verificados usar comandos por mensaje  (Como venía siendo con el bot con todos sus comandos como `*ar impuesto`, `*ar dolar`, `*ar help`, etc), debido a esto, he tenido que actualizar todos los comandos regulares a slash commands. Prueba /help para descubrir cómo funcionan. Quizás  sea  necesario  expulsar y volver a invitar al bot si es que lo añadiste hace mucho tiempo.")
      .addField("<:ethereum:963619533271232532> ¡Más Criptomonedas!", "Se han añadido el Ethereum, Tether, Axie Infinity, Terraluna, Decentraland, Solana, Dai y Dogecoin ")
      .addField("<:goldingots:964717629484965938> ¡Metales!", "Se han añadido la onza de oro, plata, paladio y platino  ")
      .addField(":chart_with_downwards_trend:  Anualizar Inflación", "Nuevo comando para calcular la inflación anualizada a partir de la mensual")

    const embed13 = new Discord.MessageEmbed()
      .setTitle("ARGENKIT BOT VERSIÓN 1.3 ¡LA ACTUALIZACIÓN DE ANIVERSARIO!")
      .setColor('#0a9ee1')
      .setDescription("  Fecha de lanzamiento: 1/2/2022 \n ¡Ha pasado un año desde la primera versión estable del bot (1.0), la cual fue en un principio cerrada solo a un grupo de amigos!  \n Hoy, estoy feliz de anunciar la actualización de aniversario, la versión 1.3! Que trae sobre todo un gran cambio en el diseño. Estas son las novedades: ")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/811043646848630786/argboticon-03.png")
      .addField("<:djs:928800848996352041> Discord.js 13 ", "Se ha actualizado el bot a Discord.js 13 y node.js 16")
      .addField(":sparkles: Cambio de  diseño ", "¡Se ha renovado por completo el diseño del bot para darle un estilo más moderno!")
      .addField(":mouse_three_button:  Nuevos botones ", "¡Se han remplazado las reacciones por los  nuevos botones interactivos de discord!")
      .addField(":handshake: Help mejorado ", "¡Se ha mejorado por completo el comando help, ahora incluye un menú desplegable para cada categoría!")
      .addField("<:bitcoin:929073179262074960> Bitcoin ", "¡Ahora se puede consultar el precio del bitcoin,  así como convertirlo!")
      .addField(":dollar: Nuevas divisas ", "Se ha agregado el Franco Suizo y la Lira Turca")
      .addField(":microbe: Covid ", "Se han agregado nuevos países y la posibilidad de consultar los disponibles con `*ar covidpais`  sin argumentos")
      .addField(":computer: Slash commands ", "Se han agregado algunos slash commands,  quizás tengas que expulsar y volver a invitar al bot al servidor para utilizarlos")
      .addField(":abacus: Calculadora ", "Se ha agregado una calculadora interactiva con botones, usa `*ar calculadora` ")
      .addField(":soccer:  Fulvo ", "Se ha agregado un contador de cuánto falta para los  siguientes partidos de la selección, pruebalo con `*ar fútbol` ")
      .addField(":video_game:   Juegos ", "Se ha agregado un piedra papel o tijera y un tateti con botones de discord, pruebalo con `*ar tateti @usuario` o `*ar piedrapapelotijera @usuario`")
      .addField(":alarm_clock: Husos horarios", "Se ha agregado un comando para consultar distintos husos horarios, prueba `*ar husos` (Eliminado en la versión  1.4 para una futura mejora)")

    const embed12 = new Discord.MessageEmbed()
      .setTitle("ARGENKIT BOT VERSIÓN 1.2 ¡LA ACTUALIZACIÓN DE LAS DIVISAS!")
      .setColor('#0a9ee1')
      .setDescription("  Fecha de lanzamiento: 26/6/2021 \n ¡Ya pasaron  más de 3 meses desde que el bot fue lanzado al público y alcanzó más de 150 servidores de Discord! Hoy, estoy feliz de anunciar la primera actualización grande del bot, la versión 1.2, la actualización de las divisas!  Estos son los cambios introducidos en la versión: ")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/811043646848630786/argboticon-03.png")
      .addField(":dollar: ¡Nuevas divisas! ", "Como la misma actualización lo indica, se han agregado un total de 17 nuevas divisas, formando un total de 21 divisas actualmente disponibles! Estas nuevas son: yen japonés, libra esterlina,  rublo ruso, dólar canadiense, dólar australiano, dólar neozelandes, peso mexicano, peso chileno, peso uruguayo, peso boliviano, peso colombiano, sol  peruano, guarani paraguayo, bolivar venezolano,  rupia india, yuan chino y won surcoreano!")
      .addField(":flag_ar: ¡Provincias! ", "Se agregó una función para  consultar información  de  las 23 provincias argentinas y la Ciudad Autónoma de buenos Aires!  Pruebalo con *ar provincia [provincia] ")
      .addField(":grey_exclamation: Más información", "Nueva información  de cada divisa en una  segunda página")
      .addField(":calendar: Elecciones ", "Nuevo contador de días hasta  las siguientes  elecciones!")
      .addField(":tv: ¡Nuevos servicios! ", "Se agregó el precio de  HBO Max, Paramount+, Discord  Nitro, Google One, EA Play, Wallet de Steam y Twitch!")
      .addField(":moneybag: Impuesto ", "Se agregó  una segunda página al comando de impuesto para ver el impuesto sin IVA (75%)")
      .addField(":question: Help", " El comando de help recibió un gran cambio")
      .addField(":microbe: Actualización a las funciones de covid19 ", "Se agregaron nuevos países para ver sus casos de covid19, además de una segunda pestaña para ver los casos en el día de hoy")
      .addField(":incoming_envelope: Bienvenido al servidor del bot! ", "¡Ya disponible el servidor de discord! Usa el comando *ar discord para unirte!")
      .addField(":white_check_mark: Apoya al bot votando en top.gg! ", "Se  agregó el comando *ar vote ")
      .addField(":eyes: Entre otras cosas ", "Se mejoró el código y se hicieron otros cambios menores")

    const button1 = new MessageButton()
      .setCustomId("previousbtn")
      .setLabel("Más reciente")
      .setStyle("SUCCESS");

    const button2 = new MessageButton()
      .setCustomId("nextbtn")
      .setLabel("Anterior")
      .setStyle("DANGER");

    const pages = [
      embed15,
      embed14,
      embed13,
      embed12,


    ];

    const buttonList = [button1, button2];
    const timeout = 120000;
    paginationEmbed(interaction, pages, buttonList, timeout);

    return interaction.reply({ content: ' ‎  ' });
     
    }

}