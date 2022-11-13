const {SlashCommandBuilder} = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")
const { MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Muestra los comandos disponibles"),

    async run(client, interaction){
        const row = new MessageActionRow()
        .addComponents(
          new MessageSelectMenu()
            .setCustomId('select')
            .setPlaceholder('¡Selecciona una categoría!')
            .addOptions([
              {
                label: 'Utilidad y conversión de divisas',
                description: 'Estos comandos contienen utilidades y conversión de divisas ',
                value: 'first',
                emoji: "<:Utilidadyconversin:903096312919126107>",
              },
              {
                label: 'Divisas',
                description: 'Fiat y Criptomonedas disponibles',
                value: 'second',
                emoji: "<:Divisas:903096313061724190>"
              },
              {
                label: 'Información  del Covid19',
                description: 'Información con respecto a la pandemia del covid19',
                value: 'third',
                emoji: "<:Covid:903096313439219762>"
              },
              {
                label: 'Datos',
                description: 'Datos variados acerca del país',
                value: 'fourth',
                emoji: "<:Datos2:903096311102988378>"
              },
              {
                label: 'Servicios',
                description: 'Precio de servicios de streaming y variados',
                value: 'fifth',
                emoji: "<:Servicios2:903097132683239474>"
              },
              {
                label: 'Diversión',
                description: 'Comandos de diversión',
                value: 'sixth',
                emoji: "<:Diversin:903096312289955860>"
              },
              {
                label: 'Información',
                description: 'Información del bot y su creador',
                value: 'seventh',
                emoji: "<:Informacindelbot:903096312713609246>"
              }
            ]
            )
  
        )
  
      let embed = new Discord.MessageEmbed()
        .setTitle(":desktop: COMANDOS DE ARGENKIT BOT :desktop: ")
        .setColor('#fdcb68')
        .addField("» Comandos disponibles", "¡Tenemos `7` categorías distintas llenas de comandos y subcomandos! \nRecuerda que ahora el bot solo puede ser utilizado con los slash commands \n Para ver las novedades más recientes del bot utiliza `/update`")
        .addField("» Comandos populares", "`impuesto`  `convertir dolar`  `convertir blue`  `divisa dolar`  `divisa blue`  `covid casos`  `elecciones`  `servicio netflix`  `servicio twitch`  `servicio disney+`  `8ball`  `moneda`  `invite`")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903001307554652160/buscando.png")
  
      let embed2 = new Discord.MessageEmbed()
        .setTitle(":arrows_counterclockwise:  Utilidad y conversión de divisas :arrows_counterclockwise:  ")
        .setColor('#fdcb68')
        .setDescription("Estos comandos contienen utilidades y conversión de divisa")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903010091756814356/money-exchange.png")
        .addField("» Utilidad ", "`impuesto`  `calculadora`  `anualizarinflacion`")
        .addField("» `convertirdivisa`", "Subcomandos `dolar`  `dolarblue`  `euro`  `real`  `yen`  `libra`  `rublo`  `dolarcanadiense`  `dolaraustraliano`  `dolarneozelandes`  `pesomexicano`  `pesochileno`  `pesouruguayo`  `pesocolombiano`  `boliviano`  `sol`  `guarani`  `bolivar`  `yuan`  `rupia`  `won`  `franco`  `lira`")
        .addField("» `pesoa` ", "» Subcomandos `dolar`  `dolarblue`  `euro`  `real`  `yen`  `libra`  `rublo`  `dolarcanadiense`  `dolaraustraliano`  `dolarneozelandes`  `pesomexicano`  `pesochileno`  `pesouruguayo`  `pesocolombiano`  `boliviano`  `sol`  `guarani`  `bolivar`  `yuan`  `rupia`  `won`  `franco`  `lira`")
        .addField("» `convertircripto` ", "» Subcomandos `bitcoin`  `ethereum`  `tether`  `axieinfinity`  `terraluna`  `terralunaclassic`  `terrausdclassic`  `decentraland`  `solana`  `dai`  `dogecoin`")
        .addField("» `pesoacripto` ", "» Subcomandos `bitcoin`  `ethereum`  `tether`  `axieinfinity`  `terraluna`  `terralunaclassic`  `terrausdclassic`  `decentraland`  `solana`  `dai`  `dogecoin`")
        .addField("» `convertirmetal` ", "» Subcomandos `oro`  `plata`  `paladio`  `platino`")
        .addField("» `pesoametal` ", "» Subcomandos `oro`  `plata`  `paladio`  `platino`")
  
      let embed3 = new Discord.MessageEmbed()
        .setTitle(":dollar:  Cotizaciones :dollar: ")
        .setColor('#fdcb68')
        .setDescription("Estos comandos contienen las distintas cotizaciones disponibles con su precio a pesos argentinos e informacion adicional")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/90301281.759495484/dollars.png")
        .addField("» `divisa` ", "» Subcomandos `dolar`  `dolarblue`  `euro`  `real`  `yen`  `libra`  `rublo`  `dolarcanadiense`  `dolaraustraliano`  `dolarneozelandes`  `pesomexicano`  `pesochileno`  `pesouruguayo`  `pesocolombiano`  `boliviano`  `sol`  `guarani`  `bolivar`  `yuan`  `rupia`  `won`  `franco`  `lira`")
        .addField("» `criptomoneda` ", "» Subcomandos `bitcoin`  `ethereum`  `tether`  `axieinfinity`  `terraluna`  `terralunaclassic`  `terrausdclassic`  `decentraland`  `solana`  `dai`  `dogecoin`")
        .addField("» `metal`", "» Subcomandos `oro`  `plata`  `paladio`  `platino`")
  
      let embed4 = new Discord.MessageEmbed()
        .setTitle(":mask:  Covid19 :mask: ")
        .setColor('#fdcb68')
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903019853202468884/nueva-normalidad.png")
        .setDescription("Estos comandos contienen información sobre la pandemia del covid19")
        .addField("» `covid`", "» Subcomandos `casos`  `global`  `covidpais`  `sintomas`  `recomendaciones`")
  
      let embed5 = new Discord.MessageEmbed()
        .setTitle(":bar_chart: Datos :bar_chart:")
        .setColor('#fdcb68')
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903094616071483392/unknown.png")
        .setDescription("Estos comandos tienen distintos datos sobre Argentina")
        .addField("» Comando `datos`", "subcomandos `riesgopais`  `reservas`  `circulante`")
        .addField("» Otros Comandos ", "`elecciones`  `futbol`  `provinciainfo`")
  
      let embed6 = new Discord.MessageEmbed()
        .setTitle(":tv: Servicios Digitales :tv:")
        .setColor('#fdcb68')
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903093667911315557/Servicios.png")
        .setDescription("Estos subcomandos te dan el precio de distintos servicios digitales en Argentina con impuestos")
        .addField("» `servicio`", "`netflix`  `youtube`  `spotify`  `crunchyroll`  `disney`  `xboxgamepass`  `primevideo`  `appletv`  `hbomax`  `discordnitro`  `googleone`  `ea`  `steam`  `paramount`  `twitch`")
  
      let embed7 = new Discord.MessageEmbed()
        .setTitle(":rofl: Diversión :rofl:")
        .setColor('#fdcb68')
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903094465747648552/Diversion.png")
        .setDescription("Estos son comandos con cosas divertidas mayormente basadas en aleatoridad")
        .addField("» Comandos", "`odio argentina`  `odio latinoamerica`  `covidtest`  `escaparlatam`  `8ball`  `moneda`  `dados`  `piedrapapelotijera`  `tateti`")
  
      let embed8 = new Discord.MessageEmbed()
        .setTitle(":open_file_folder: Información del bot :open_file_folder:")
        .setColor('#fdcb68')
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903095489719828541/Informacion_del_bot.png")
        .setDescription("Estos comandos te permiten consultar más información acerca del bot")
        .addField("» Comandos", "`creador`  `api`  `invitar`  `servidor`  `votar`  `donaciones`  `update`")
  
      const collector = interaction.channel.createMessageComponentCollector({
        componentType: "SELECT_MENU", time: 20000
  
      })
  
      interaction.reply({ content: " ", ephemeral: false, embeds: [embed], components: [row] })
  
  
  
      collector.on("collect", async (collected) => {
  
        const value = collected.values[0]
  
        if (value === "first") {
          return interaction.editReply({ embeds: [embed2], ephemeral: false });
        }
        if (value === "second") {
          await interaction.editReply({ embeds: [embed3], ephemeral: false })
        }
        if (value === "third") {
          await interaction.editReply({ embeds: [embed4], ephemeral: false })
        }
        if (value === "fourth") {
          await interaction.editReply({ embeds: [embed5], ephemeral: false })
        }
        if (value === "fifth") {
          await interaction.editReply({ embeds: [embed6], ephemeral: false })
        }
        if (value === "sixth") {
          await interaction.editReply({ embeds: [embed7], ephemeral: false })
        }
        if (value === "seventh") {
          await interaction.editReply({ embeds: [embed8], ephemeral: false })
        }
  
      })
    }

}