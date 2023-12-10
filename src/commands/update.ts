
import Discord from "discord.js"
import { ButtonBuilder } from 'discord.js'
import { ButtonStyle } from 'discord.js'
const {pagination, ButtonTypes, ButtonStyles} = require('@devraelfreeze/discordjs-pagination');
module.exports = {
  data: new Discord.SlashCommandBuilder()
    .setName("update")
    .setDescription("Muestra las novedades de la actualización"),

  async run(client, interaction) {

    const embed20:Discord.EmbedBuilder = new Discord.EmbedBuilder()
      .setTitle("ARGENKIT BOT VERSIÓN 2.0: NUEVA ERA")
      .setColor('#0a9ee1')
      .setDescription("Fecha de lanzamiento: 10/12/2023 \n Debido al cambio de gobierno, es posible que se realicen muchas  modificaciones en algunos aspectos de la economía directamente relacionados con funciones del bot, como conversión de divisas e impuestos digitales, por lo que el bot se mantendrá actualizandose constantemente durante los próximos meses. \n ¡Este es el comienzo de una nueva era en Argentina!")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1183455170131140618/ArgenkitbotNuevaEra.png?ex=65886584&is=6575f084&hm=4b551457745594ae1ebec3272ede8720820bc0f6f78ae7a010dc744d001b0841&")
      .addFields(
        { name: "<:djs:928800848996352041> Discord.js 14 ", value: "Se ha actualizado el bot a Discord.js 14" },
        { name: "💵  Precio en USD ", value: "Ahora todas las divisas también muestran su valor en USD, de cara a una futura dolarización" },
        { name: ":chart_with_upwards_trend:  Mercado de capitales ", value: "Ahora es posible visualizar acciones del mercado de capitales con los comandos `mercado`" },
        { name: "🦠 Removido comandos de covid19 ", value: "Han sido removidos los comandos referidos al covid19 ya que pasaron 4 años desde el mismo.  " },
        { name: "🎱 Nuevas respuestas a 8ball ", value: "Se han agregado nuevas respuestas al comando de 8ball, sumando un total de 30." },
        {name: "🎮 Microtransacciones en juegos", value: "Se ha agregado un nuevo comando para  consultar el precio de microtransacciones de juegos en Argentina, con el comando `juego`"},
        { name: "💬 Frases celebres ", value: "Se han agregado frases celebres de famosos argentinos con el comando `frase`." },
        { name: "📷 Imagenes actualizadas", value: "Se han actualizado algunas de las imagenes del bot" },
        {name: "🌧️ Tiempo meteorológico", value: "Se ha agregado un comando para consultar el tiempo en las capitales argentinas o en cualquier parte del mundo con `tiempo`"},
        { name: " <:calculator:1071233126656917624> Calculadora mejorada ", value: "Se ha mejorado el comando `calcular` agregando varios subcomandos con distintas funciones como conversión de base, raíz cuadrada, potencia y logaritmo " },
        {name: ":coin: Nuevas criptomonedas", value: "Se han agregado litecoin, cardano, bnb, usdcoin, avalanche, polkadot, uniswap, polygon y tron"},
        {name: "<:Datos2:903096311102988378> Nuevos datos", value: "Se ha agregado la posibilidad de consultar el PBI y PBI per cápita de Argentina con el comando `datos pbi` y el gabinete actual con `datos gabinete`"},
        {name: ":flag_ar: Provincias actualizadas", value: "Se han actualizado los gobernadores de las provincias con los que asumieron para el periodo 2023-2027,  además, ahora muestra a qué partido pertenecen. También se ha resumido la información de cada provincia."},
        {name: ":computer:  Nueva página host y fuertes optimizaciones", value: "Se ha optimizado fuertemente todos los comandos para evitar crasheos, además, se ha implementado un sistema de autocrasheo para evitar que caiga el bot si hubiera un error, y se ha cambiado el host a Heroku para garantizar un mejor rendimiento, manteniendo el bot 24/7"}
        )


    const embed15:Discord.EmbedBuilder = new Discord.EmbedBuilder()
      .setTitle("ARGENKIT BOT VERSIÓN 1.5 ¡ACTUALIZACIÓN TÉCNICA!")
      .setColor('#0a9ee1')
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/811043646848630786/argboticon-03.png")
      .addFields(
        { name: "<:ts:1070169624693456959> TypeScript ", value: "Ahora el bot está escrito en TypeScript." },
        { name: ":white_check_mark:  Optimización ", value: "Se ha optimizado muchisimos comandos del bot." },
        { name: "<:slash:964681731519164457> Command Handler ", value: "Se reestructuró el código para una mayor organización de los comandos, mejorando el desarrollo futuro ." },
        { name: "<:Covid:903096313439219762> Covid19 Paises ", value: "Se optimizó el comando, ahora están disponibles los 194 paises del mundo." },
        { name: " <:traducir:1070170257806872588> Traductor ", value: "Se ha agregado un traductor, prueba el comando /traducir." },
        { name: " <:calculator:1071233126656917624> Calculadora ", value: "Se ha remplazado la calculadora de simplydjs por el comando /calcular debido a errores que presentaba." },
        { name: " :clock130:  Hora ", value: "Se ha agregado el comando de /hora, el  cual es una mejora al comando de /husoshorarios que antes existía." },
        { name: "<:goldingots:964717629484965938> Metales ", value: "Ahora el bot devuelve correctamente el precio de los metales" },
        { name: ":money_with_wings: Argentina y sus 50 tipos de dólar", value: "Ahora el comando /divisa dolar viene con el dólar MEP, CCL, Solidario, Tarjeta, Qatar y Blue integrados. Las demás divisas ahora integran el Blue, Solidario, Tarjeta y Qatar" }
    )

    const embed14:Discord.EmbedBuilder = new Discord.EmbedBuilder()
      .setTitle("ARGENKIT BOT VERSIÓN 1.4 ¡SLASH COMMANDS UPDATE!")
      .setColor('#0a9ee1')
      .setDescription("  Fecha de lanzamiento: 16/4/2022 \n Debido al anuncio de Discord de volver los Message Content algo privilegiado para bots verificados, esta actualización es obligatoria para poder seguir usando el bot.")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/811043646848630786/argboticon-03.png")
      .addFields(
        { name: "<:slash:964681731519164457> Slash commands ", value:"Se han actualizado todos los comandos al formato slash. Esto debido a que Discord ya no permitirá a los bots verificados usar comandos por mensaje (Como venía siendo con el bot con todos sus comandos como `*ar impuesto`, `*ar dolar`, `*ar help`, etc), debido a esto, he tenido que actualizar todos los comandos regulares a slash commands. Prueba /help para descubrir cómo funcionan. Quizás sea necesario expulsar y volver a invitar al bot si es que lo añadiste hace mucho tiempo."},
        { name:"<:ethereum:963619533271232532> ¡Más Criptomonedas!", value:"Se han añadido Ethereum, Tether, Axie Infinity, Terraluna, Decentraland, Solana, Dai y Dogecoin"},
        { name:"<:goldingots:964717629484965938> ¡Metales!", value:"Se han añadido la onza de oro, plata, paladio y platino"},
        { name:" :chart_with_downwards_trend:  Anualizar Inflación", value:"Nuevo comando para calcular la inflación anualizada a partir de la mensual"}
    )

    const embed13:Discord.EmbedBuilder = new Discord.EmbedBuilder()
      .setTitle("ARGENKIT BOT VERSIÓN 1.3 ¡LA ACTUALIZACIÓN DE ANIVERSARIO!")
      .setColor('#0a9ee1')
      .setDescription("  Fecha de lanzamiento: 1/2/2022 \n ¡Ha pasado un año desde la primera versión estable del bot (1.0), la cual fue en un principio cerrada solo a un grupo de amigos!  \n Hoy, estoy feliz de anunciar la actualización de aniversario, la versión 1.3! Que trae sobre todo un gran cambio en el diseño. Estas son las novedades: ")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/811043646848630786/argboticon-03.png")
      .addFields(
        { name: "<:djs:928800848996352041> Discord.js 13 ", value: "Se ha actualizado el bot a Discord.js 13 y node.js 16" },
        { name: ":sparkles: Cambio de  diseño ", value: "¡Se ha renovado por completo el diseño del bot para darle un estilo más moderno!" },
        { name: ":mouse_three_button:  Nuevos botones ", value: "¡Se han remplazado las reacciones por los nuevos botones interactivos de discord!" },
        { name: ":handshake: Help mejorado ", value: "¡Se ha mejorado por completo el comando help, ahora incluye un menú desplegable para cada categoría!" },
        { name: "<:bitcoin:929073179262074960> Bitcoin ", value: "¡Ahora se puede consultar el precio del bitcoin, así como convertirlo!" },
        { name: ":dollar: Nuevas divisas ", value: "Se ha agregado el Franco Suizo y la Lira Turca" },
        { name: ":microbe: Covid ", value: "Se han agregado nuevos países y la posibilidad de consultar los disponibles con `*ar covidpais` sin argumentos" },
        { name: ":computer: Slash commands ", value: "Se han agregado algunos slash commands, quizás tengas que expulsar y volver a invitar al bot al servidor para utilizarlos" },
        { name: ":abacus: Calculadora ", value: "Se ha agregado una calculadora interactiva con botones, usa `*ar calculadora`" },
        { name: ":soccer: Fulvo ", value: "Se ha agregado un contador de cuánto falta para los siguientes partidos de la selección, pruébalo con `*ar fútbol`" },
        { name: ":video_game: Juegos ", value: "Se ha agregado un piedra papel o tijera y un tateti con botones de discord, pruébalo con `*ar tateti @usuario` o `*ar piedrapapelotijera @usuario`" },
        { name: ":alarm_clock: Husos horarios", value:"Se ha agregado un comando para consultar distintos husos horarios, prueba `*ar husos` (Eliminado en la versión  1.4 para una futura mejora)" }
    );
    const embed12:Discord.EmbedBuilder = new Discord.EmbedBuilder()
      .setTitle("ARGENKIT BOT VERSIÓN 1.2 ¡LA ACTUALIZACIÓN DE LAS DIVISAS!")
      .setColor('#0a9ee1')
      .setDescription("  Fecha de lanzamiento: 26/6/2021 \n ¡Ya pasaron  más de 3 meses desde que el bot fue lanzado al público y alcanzó más de 150 servidores de Discord! Hoy, estoy feliz de anunciar la primera actualización grande del bot, la versión 1.2, la actualización de las divisas!  Estos son los cambios introducidos en la versión: ")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/811043646848630786/argboticon-03.png")
      .addFields(
        { name: ":dollar: ¡Nuevas divisas! ", value: "Como la misma actualización lo indica, se han agregado un total de 17 nuevas divisas, formando un total de 21 divisas actualmente disponibles! Estas nuevas son: yen japonés, libra esterlina, rublo ruso, dólar canadiense, dólar australiano, dólar neozelandes, peso mexicano, peso chileno, peso uruguayo, peso boliviano, peso colombiano, sol peruano, guarani paraguayo, bolivar venezolano, rupia india, yuan chino y won surcoreano!" },
        { name: ":flag_ar: ¡Provincias! ", value: "Se agregó una función para consultar información de las 23 provincias argentinas y la Ciudad Autónoma de Buenos Aires! Pruebalo con *ar provincia [provincia]" },
        { name: ":grey_exclamation: Más información", value: "Nueva información de cada divisa en una segunda página" },
        { name: ":calendar: Elecciones ", value: "Nuevo contador de días hasta las siguientes elecciones!" },
        { name: ":tv: ¡Nuevos servicios! ", value: "Se agregó el precio de HBO Max, Paramount+, Discord Nitro, Google One, EA Play, Wallet de Steam y Twitch!" },
        { name: ":moneybag: Impuesto ", value: "Se agregó una segunda página al comando de impuesto para ver el impuesto sin IVA (75%)" },
        { name: ":question: Help", value: "El comando de help recibió un gran cambio" },
        { name: ":microbe: Actualización a las funciones de covid19 ", value: "Se agregaron nuevos países para ver sus casos de covid19, además de una segunda pestaña para ver los casos en el día de hoy" },
        { name: ":incoming_envelope: Bienvenido al servidor del bot! ", value: "¡Ya disponible el servidor de discord! Usa el comando *ar discord para unirte!" },
        { name: ":white_check_mark: Apoya al bot votando en top.gg! ", value: "Se agregó el comando *ar vote" },
        { name: ":eyes: Entre otras cosas ", value: "Se mejoró el código y se hicieron otros cambios menores" }
    )

    const button1 = new ButtonBuilder()
      .setCustomId("previousbtn")
      .setLabel("Más reciente")
      .setStyle(ButtonStyle.Success);

    const button2 = new ButtonBuilder()
      .setCustomId("nextbtn")
      .setLabel("Anterior")
      .setStyle(ButtonStyle.Danger);

    const pages = [
      embed20,
      embed15,
      embed14,
      embed13,
      embed12,


    ];

    const buttonList = [button1, button2];
    const timeout = 120000;
    await pagination({
      embeds: pages, /** Array of embeds objects */
      author: interaction.member.user,
      interaction: interaction,
      ephemeral: false,
      time: 40000, /** 40 seconds */
      disableButtons: false, /** Remove buttons after timeout */
      fastSkip: false,
      pageTravel: false,
      buttons: [
        {
          type: ButtonTypes.previous,
          label: 'Más reciente',
          style: ButtonStyles.Primary
        },
        {
          type: ButtonTypes.next,
          label: 'Más antigua',
          style: ButtonStyles.Success
        }
      ]
    });


  }

}