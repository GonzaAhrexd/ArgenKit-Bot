
import Discord from "discord.js"
import { ActionRowBuilder, ButtonBuilder, StringSelectMenuBuilder } from 'discord.js'
import { ComponentType } from 'discord.js'

module.exports = {
  data: new Discord.SlashCommandBuilder()
    .setName("help")
    .setDescription("Muestra los comandos disponibles"),

  async run(client, interaction) {
    const row = new ActionRowBuilder()
      .addComponents(
        new StringSelectMenuBuilder()
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
              label: 'Cotizaciones',
              description: 'Fiat, Criptomonedas, Metales y mercado de capitales.',
              value: 'second',
              emoji: "<:Divisas:903096313061724190>"
            },
            {
              label: 'Datos',
              description: 'Datos variados acerca del país',
              value: 'third',
              emoji: "<:Datos2:903096311102988378>"
            },
            {
              label: 'Servicios',
              description: 'Precio de servicios de streaming y variados',
              value: 'fourth',
              emoji: "<:Servicios2:903097132683239474>"
            },
            {
              label: 'Diversión',
              description: 'Comandos de diversión',
              value: 'fifth',
              emoji: "<:Diversin:903096312289955860>"
            },
            {
              label: 'Información',
              description: 'Información del bot y su creador',
              value: 'sixth',
              emoji: "<:Informacindelbot:903096312713609246>"
            }
          ]
          )

      )

    let embed = new Discord.EmbedBuilder()
      .setTitle(":desktop: COMANDOS DE ARGENKIT BOT :desktop: ")
      .setColor('#385E7F')
      .addFields(
        { name: "» Comandos disponibles", value: "¡Tenemos `6` categorías distintas llenas de comandos y subcomandos! \n Para ver las novedades más recientes del bot utiliza `/update`" },
        { name: "» Comandos populares", value: "`impuesto`  `calcular`  `convertirdivisa dolar`  `divisa dolar`  `elecciones`  `servicio netflix`  `servicio twitch`  `servicio disney+`  `8ball`  `moneda`  `invite`" },
        { name: "» Comandos nuevos", value: "`mercado`  `hora`" }
      ).setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1176889247215648829/search_1.png?ex=65708286&is=655e0d86&hm=c0193aa9ccd9a045905e83e990940c81897d4c355da14866de45efd48a4a7e72&")

    let embed2 = new Discord.EmbedBuilder()
      .setTitle(":arrows_counterclockwise:  Utilidad y conversión de divisas :arrows_counterclockwise:  ")
      .setColor('#385E7F')
      .setDescription("Estos comandos contienen utilidades y conversión de divisa")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903010091756814356/money-exchange.png")
      .addFields(
        { name: "» Utilidad ", value: "`impuesto`  `calcular`  `anualizarinflacion`  `traductor`  `hora`" },
        { name: "» `convertirdivisa`", value: "Subcomandos `dolar`  `euro`  `real`  `yen`  `libra`  `rublo`  `dolarcanadiense`  `dolaraustraliano`  `dolarneozelandes`  `pesomexicano`  `pesochileno`  `pesouruguayo`  `pesocolombiano`  `boliviano`  `sol`  `guarani`  `bolivar`  `yuan`  `rupia`  `won`  `franco`  `lira`" },
        { name: "» `pesoa` ", value: "» Subcomandos `dolar`  `euro`  `real`  `yen`  `libra`  `rublo`  `dolarcanadiense`  `dolaraustraliano`  `dolarneozelandes`  `pesomexicano`  `pesochileno`  `pesouruguayo`  `pesocolombiano`  `boliviano`  `sol`  `guarani`  `bolivar`  `yuan`  `rupia`  `won`  `franco`  `lira`" },
        { name: "» `convertircripto` ", value: "» Subcomandos `bitcoin`  `ethereum`  `tether`  `axieinfinity`  `terraluna`  `decentraland`  `solana`  `dai`  `dogecoin" },
        { name: "» pesoacripto ", value: "» Subcomandos `bitcoin` `ethereum` `tether` `axieinfinity` `terraluna` `decentraland` `solana` `dai` `dogecoin`" },
        { name: "» convertirmetal ", value: "» Subcomandos `oro` `plata` `paladio` `platino`" },
        { name: "» pesoametal ", value: "» Subcomandos `oro` `plata` `paladio` `platino`" }
      );

    let embed3 = new Discord.EmbedBuilder()
      .setTitle(":dollar:  Cotizaciones :dollar: ")
      .setColor('#385E7F')
      .setDescription("Estos comandos contienen distintas cotizaciones de divisas, criptomonedas, metales, o acciones financieras")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/90301281.759495484/dollars.png")
      .addFields(
        { name: "» `divisa` ", value: "» Subcomandos `dolar`  `euro`  `real`  `yen`  `libra`  `rublo`  `dolarcanadiense`  `dolaraustraliano`  `dolarneozelandes`  `pesomexicano`  `pesochileno`  `pesouruguayo`  `pesocolombiano`  `boliviano`  `sol`  `guarani`  `bolivar`  `yuan`  `rupia`  `won`  `franco`  `lira`" },
        { name: "» `criptomoneda` ", value: "» Subcomandos `bitcoin` `ethereum` `tether` `axieinfinity` `terraluna` `decentraland` `solana` `dai` `dogecoin`" },
        { name: "» `metal`", value: "» Subcomandos `oro` `plata` `paladio` `platino`" },
        { name: "» `mercado`", value: "» Subcomandos `estado` `acciones` `consultar`" },
        )
   

    let embed4 = new Discord.EmbedBuilder()
      .setTitle(":bar_chart: Datos :bar_chart:")
      .setColor('#385E7F')
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903094616071483392/unknown.png")
      .setDescription("Estos comandos tienen distintos datos sobre Argentina")
      .addFields(
        { name: "» Comando `datos`", value: "subcomandos `riesgopais`  `reservas`  `circulante`" },
        { name: "» Otros Comandos ", value: "`elecciones`  `futbol`  `provinciainfo`" }
      )
    let embed5 = new Discord.EmbedBuilder()
      .setTitle(":tv: Servicios Digitales :tv:")
      .setColor('#385E7F')
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903093667911315557/Servicios.png")
      .setDescription("Estos subcomandos te dan el precio de distintos servicios digitales en Argentina con impuestos")
      .addFields(
        {name:"» `servicio`", value: "`netflix`  `youtube`  `spotify`  `crunchyroll`  `disney`  `xboxgamepass`  `primevideo`  `appletv`  `hbomax`  `discordnitro`  `googleone`  `ea`  `steam`  `paramount`  `twitch`"},
        {name: "» `juegos`", value: "`minecraft`  `roblox`  `fortnite`  `leagueoflegends`  `valorant`  `csgo`  `clashroyale`  `clashofclans`  `genshinimpact`  `freefire`  `pubg`  `gta`"} 
        )
    let embed6 = new Discord.EmbedBuilder()
      .setTitle(":rofl: Diversión :rofl:")
      .setColor('#385E7F')
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903094465747648552/Diversion.png")
      .setDescription("Estos son comandos con cosas divertidas mayormente basadas en aleatoridad")
      .addFields(
        {name:"» Comandos", value: "`covidtest`  `escaparlatam`  `8ball`  `moneda`  `dados`"})

    let embed7 = new Discord.EmbedBuilder()
      .setTitle(":open_file_folder: Información del bot :open_file_folder:")
      .setColor('#385E7F')
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903095489719828541/Informacion_del_bot.png")
      .setDescription("Estos comandos te permiten consultar más información acerca del bot")
      .addFields(
        {name:"» Comandos", value: "`creador`  `api`  `invitar`  `servidor`  `votar`  `donaciones`  `update`"})

    const collector = interaction.channel.createMessageComponentCollector({
      componentType: ComponentType.StringSelect, time: 30000

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

    })
  }

}