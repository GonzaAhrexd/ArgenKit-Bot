
import Discord from "discord.js"
import axios from "axios"
import { ActionRowBuilder, ButtonBuilder, StringSelectMenuBuilder } from 'discord.js'
import { ButtonStyle } from 'discord.js'
var currencyFormatter = require('currency-formatter') //Currency formatter
const { total155, total154 } = require("../functions/impuestos"); //Impuestos
const { formatoPrecio } = require('../functions/formatoPrecio')

module.exports = {
  data: new Discord.SlashCommandBuilder()
    .setName('servicio')
    .setDescription('Mostrar el precio de un servicio de Streaming')
    .addSubcommand(subcommand =>
      subcommand.setName('netflix')
        .setDescription('Muestra el precio de Netflix + impuestos')
    )
    .addSubcommand(subcommand =>
      subcommand.setName('youtube')
        .setDescription('Muestra el precio de YouTube + impuestos')
    )
    .addSubcommand(subcommand =>
      subcommand.setName('spotify')
        .setDescription('Muestra el precio de Spotify + impuestos')
    )
    .addSubcommand(subcommand =>
      subcommand.setName('crunchyroll')
        .setDescription('Muestra el precio de Crunchyroll + impuestos')
    )
    .addSubcommand(subcommand =>
      subcommand.setName('disney')
        .setDescription('Muestra el precio de Disney+ + impuestos')
    )
    .addSubcommand(subcommand =>
      subcommand.setName('xboxgamepass')
        .setDescription('Muestra el precio de Xbox GamePass + impuestos')
    )
    .addSubcommand(subcommand =>
      subcommand.setName('primevideo')
        .setDescription('Muestra el precio de Prime Video + impuestos')
    )
    .addSubcommand(subcommand =>
      subcommand.setName('appletv')
        .setDescription('Muestra el precio de Apple TV + impuestos')
    )
    .addSubcommand(subcommand =>
      subcommand.setName('hbomax')
        .setDescription('Muestra el precio de HBO MAX + impuestos')
    )
    .addSubcommand(subcommand =>
      subcommand.setName('discordnitro')
        .setDescription('Muestra el precio de Discord Nitro + impuestos')
    )
    .addSubcommand(subcommand =>
      subcommand.setName('googleone')
        .setDescription('Muestra el precio de Google One + impuestos')
    )
    .addSubcommand(subcommand =>
      subcommand.setName('ea')
        .setDescription('Muestra el precio de EA + impuestos')
    )
    .addSubcommand(subcommand =>
      subcommand.setName('steam')
        .setDescription('Muestra el precio de Steam + impuestos')
    )
    .addSubcommand(subcommand =>
      subcommand.setName('paramount')
        .setDescription('Muestra el precio de Paramount + impuestos')
    )
    .addSubcommand(subcommand =>
      subcommand.setName('twitch')
        .setDescription('Muestra el precio de Twitch + impuestos')
    ),
  async run(client, interaction, options) {
    if (interaction.options.getSubcommand() === 'netflix') {
      const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
        .setTitle("Netflix")
        .setURL("https://www.netflix.com/ar/")
        .setDescription("Los precios de Netflix con impuestos en Argentina son los siguientes: ")
        .setColor('#9a0611')
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903356797920894996/netflix_2.png")
        .addFields(
          { name: "Básico:", value: "ARS" + formatoPrecio(total154(2499),"ARS"), inline: true },
          { name: "Estándar:", value: "ARS" + formatoPrecio(total154(4199),"ARS"), inline: true },
          { name: "Premium:", value: "ARS" + formatoPrecio(total154(5799),"ARS"), inline: true },
          { name: "Casa extra:", value: "ARS" + formatoPrecio(total154(1399),"ARS"), inline: true }
        )


      return interaction.reply({ embeds: [embed] });
    }
    if (interaction.options.getSubcommand() === 'youtube') {
      const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
        .setTitle("YouTube Premium")
        .setURL("https://www.youtube.com/premium")
        .setDescription("Los precios de YouTube Premium en Argentina con impuestos son los siguientes:")
        .setColor('#ff0000')
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903357207310127185/youtube.png")
        .addFields(
          { name: "YouTube Music:", value: "ARS" + formatoPrecio(total155(599),"ARS"), inline: true },
          { name: "YouTube Premium Individual:", value: "ARS" + formatoPrecio(total155(869),"ARS"), inline: true },
          { name: "YouTube Premium Familiar:", value: "ARS" + formatoPrecio(total155(1569),"ARS"), inline: true }
        )

      return interaction.reply({ embeds: [embed] });
    }
    if (interaction.options.getSubcommand() === 'spotify') {
      const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
        .setTitle("Spotify")
        .setURL("https://www.spotify.com/ar/premium/")
        .setDescription("Los precios de Spotify Premium en Argentina con impuestos son los siguientes: ")
        .setColor('#7ad684')
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903358342733389854/spotify_1.png")
        .addFields(
          { name: "Individual:", value: "ARS$ " + currencyFormatter.format((total154(599)), { locale: 'es-ES', code: ' ' }), inline: true },
          { name: "Dúo:", value: "ARS$ " + currencyFormatter.format((total154(799)), { locale: 'es-ES', code: ' ' }), inline: true },
          { name: "Familiar:", value: "ARS$ " + currencyFormatter.format((total154(999)), { locale: 'es-ES', code: ' ' }), inline: true },
          { name: "Estudiantes:", value: "ARS$ " + currencyFormatter.format((total154(329)), { locale: 'es-ES', code: ' ' }), inline: true }
        )

      return interaction.reply({ embeds: [embed] });
    }
    if (interaction.options.getSubcommand() === 'crunchyroll') {
      const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
        .setTitle("Crunchyroll")
        .setURL("https://www.crunchyroll.com/es")
        .setColor('#fec105')
        .setDescription("Precio  de Crunchyroll  con impuestos en Argentina ")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903849721699913778/crunchyroll.png")
        .addFields(
          { name: "Fan (1 MES):", value: "ARS$ " + currencyFormatter.format((total154(299)), { locale: 'es-ES', code: ' ' }), inline: true },
          { name: "Mega Fan (1 Mes):", value: "ARS$ " + currencyFormatter.format((total154(379)), { locale: 'es-ES', code: ' ' }), inline: true },
          { name: "Mega Fan (1 Año):", value: "ARS$ " + currencyFormatter.format((total154(3799)), { locale: 'es-ES', code: ' ' }), inline: true }
        )

      return interaction.reply({ embeds: [embed] });
    }

    if (interaction.options.getSubcommand() === 'disney') {
      const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
        .setTitle("Disney+")
        .setURL("https://www.disneyplus.com/home")
        .setDescription("Debido a que Disney factura en Argentina, este no cobra impuestos internacionales.")
        .setColor('#3fa5dc')
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903852192929288213/icons8-disney-plus-480.png")
        .addFields(
          { name: "1 Mes:", value: `ARS$ ${799},00`, inline: true },
          { name: "1 Año:", value: `ARS$ ${6699},00`, inline: true },
          { name: "Combo con Star+ mensual:", value: `ARS$ ${1999},00`, inline: true },
          { name: "Combo con Star+ y Lionsgate+ mensual:", value: `ARS$ ${2399},00`, inline: true }
        )
      return interaction.reply({ embeds: [embed] });

    }

    //Xbox


    if (interaction.options.getSubcommand() === 'xboxgamepass') {
      const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
        .setTitle("Xbox Game Pass")
        .setURL("https://www.xbox.com/es-AR/xbox-game-pass")
        .setDescription("Los precios de Xbox Game Pass con impuestos en Argentina son los siguientes: ")
        .setColor('#a6ed75')
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903853195443445770/xbox.png")
        .addFields(
          { name: "Xbox Game Pass Core", value: "ARS$ " + currencyFormatter.format((total154(1899)), { locale: 'es-ES', code: ' ' }), inline: true },
          { name: "Xbox Game Pass para PC / Consola", value: "ARS$ " + currencyFormatter.format((total154(2399)), { locale: 'es-ES', code: ' ' }), inline: true },
          { name: "Xbox Game Pass Ultimate", value: "ARS$ " + currencyFormatter.format((total154(2999)), { locale: 'es-ES', code: ' ' }), inline: true }

        )
      return interaction.reply({ embeds: [embed] });
    }

    //Prime Video
    if (interaction.options.getSubcommand() === 'primevideo') {
      const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
        .setTitle("Prime Video")
        .setURL("https://www.primevideo.com/")
        .setDescription("El precio de  Prime Video con impuestos en Argentina es el siguiente: ")
        .setColor('#1aa6e0')
        .setThumbnail("https://images.squarespace-cdn.com/content/v1/5dcd9a119133c421eadd4e73/1574287053801-RG0293YPJNWPKOV77KXW/ke17ZwdGBToddI8pDm48kPJXHKy2-mnvrsdpGQjlhod7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmrMDYraMJMCQwFxTSOIP7LpSBEQpA-g5k6VTjWbSuadHJq0dp98hg5AZvIaPb3DoM/Prime+Video+Icon.png")
        .addFields(
          { name: "Costo mensual", value: "ARS$ " + currencyFormatter.format((total154(1149)), { locale: 'es-ES', code: ' ' }) })
      return interaction.reply({ embeds: [embed] });

    }

    //AppleTV

    if (interaction.options.getSubcommand() === 'appletv') {
      axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/oficial')
        .then((oficial) => {
          const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
            .setTitle("Apple TV+")
            .setURL("https://www.apple.com/la/tv/")
            .setDescription("Los precios de Apple TV en Argentina son los siguientes: ")
            .setColor('#eeeeee')
            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913852356771319928/televisor_1.png")
            .addFields(
              { name: "Plan individual", value: `ARS$ ${currencyFormatter.format(total154(9.95 * oficial.data['venta']), { locale: 'es-ES', code: ' ' })}`, inline: true },
              { name: "Plan familiar", value: `ARS$ ${currencyFormatter.format(total154(13.95 * oficial.data['venta']), { locale: 'es-ES', code: ' ' })}`, inline: true }
            )
          return interaction.reply({ embeds: [embed] });

        })
        .catch((err) => {
          console.error('ERR', err)


        })

    }


    //HBO Max
    if (interaction.options.getSubcommand() === 'hbomax') {


      const embed1: Discord.EmbedBuilder = new Discord.EmbedBuilder()
        .setTitle("HBO Max")
        .setURL("https://www.hbomax.com/latam/es")
        .setDescription("Precio de HBO Max  en  Argentina con impuestos ")
        .setColor('#970899')
        .setThumbnail("https://hbomax-images.warnermediacdn.com/2020-05/square%20social%20logo%20400%20x%20400_0.png")
        .addFields(
          { name: "Suscripción mensual móvil", value: `ARS$ ${currencyFormatter.format(279 * 1.74, { locale: 'es-ES', code: ' ' })}`, inline: true },
          { name: "Suscripción mensual estándar", value: `ARS$ ${currencyFormatter.format(399 * 1.74, { locale: 'es-ES', code: ' ' })}`, inline: true },
          { name: "Suscripción trimestral móvil", value: `ARS$ ${currencyFormatter.format(739 * 1.74, { locale: 'es-ES', code: ' ' })}`, inline: true },
          { name: "Suscripción trimestral estándar", value: `ARS$ ${currencyFormatter.format(1089 * 1.74, { locale: 'es-ES', code: ' ' })}`, inline: true },
          { name: "Suscripción anual móvil", value: `ARS$ ${currencyFormatter.format(2279 * 1.74, { locale: 'es-ES', code: ' ' })}`, inline: true },
          { name: "Suscripción anual estándar", value: `ARS$ ${currencyFormatter.format(3499 * 1.74, { locale: 'es-ES', code: ' ' })}`, inline: true }
        )
      return interaction.reply({ embeds: [embed1] });

    }
    //Nitro


    if (interaction.options.getSubcommand() === 'discordnitro') {
      axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/oficial')
        .then((oficial) => {

          const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
            .setTitle("Discord Nitro")
            .setDescription("Los precios de Discord Nitro en Argentina son los siguientes: ")
            .setColor('#8aa9fa')
            .setThumbnail("https://gitdab.com/distok/apkfuckery/raw/commit/ceffadc1723d227e61ee1001a624979fd9c783bb/com.discord/res/drawable-xxxhdpi/img_wumpus_jetpack.png")
            .addFields(
              { name: "Discord Nitro Classic Mensual", value: `ARS$ ${currencyFormatter.format(total154(216.99), { locale: 'es-ES', code: ' ' })}`, inline: true },
              { name: "Discord Nitro Mensual", value: `ARS$ ${currencyFormatter.format(total154(584.99), { locale: 'es-ES', code: ' ' })}`, inline: true },
              { name: "Discord Nitro Classic Anual", value: `ARS$ ${currencyFormatter.format(total154(2169.99), { locale: 'es-ES', code: ' ' })}`, inline: true },
              { name: "Discord Nitro Anual", value: `ARS$ ${currencyFormatter.format(total154(5849.99), { locale: 'es-ES', code: ' ' })}`, inline: true }
            )

          return interaction.reply({ embeds: [embed] });

        })
        .catch((err) => {
          console.error('ERR', err)

        })

    }

    //Google One

    if (interaction.options.getSubcommand() === 'googleone') {

      axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/oficial')
        .then((oficial) => {
          const embed1: Discord.EmbedBuilder = new Discord.EmbedBuilder()
            .setTitle("Google One")
            .setDescription("Los precios de Google One mensual en Argentina son los siguientes: ")
            .setColor('#f1bb1a')
            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913859037764911174/icons8-google-one-500.png")
            .addFields(
              { name: "Plan de 100GB (USD$ 1,99)", value: `ARS$ ${currencyFormatter.format((total154(1.99 * oficial.data['venta'])), { locale: 'es-ES', code: ' ' })}`, inline: true },
              { name: "Plan de 200GB (USD$ 2,99)", value: `ARS$ ${currencyFormatter.format((total154(2.99 * oficial.data['venta'])), { locale: 'es-ES', code: ' ' })}`, inline: true },
              { name: "Plan de 1TB (USD$ 9,99)", value: `ARS$ ${currencyFormatter.format((total154(9.99 * oficial.data['venta'])), { locale: 'es-ES', code: ' ' })}`, inline: true }
            )

          const embed2: Discord.EmbedBuilder = new Discord.EmbedBuilder()
            .setTitle("Google One")
            .setDescription("Los precios de Google One anual en Argentina son los siguientes:")
            .setColor('#f1bb1a')
            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913859037764911174/icons8-google-one-500.png")
            .addFields(
              { name: "Plan de 100GB (USD$ 19,99)", value: `ARS$ ${currencyFormatter.format((total154(19.99 * oficial.data['venta'])), { locale: 'es-ES', code: ' ' })}`, inline: true },
              { name: "Plan de 200GB (USD$ 29,99)", value: `ARS$ ${currencyFormatter.format((total154(29.99 * oficial.data['venta'])), { locale: 'es-ES', code: ' ' })}`, inline: true },
              { name: "Plan de 1TB (USD$ 99,99)", value: `ARS$ ${currencyFormatter.format((total154(99.99 * oficial.data['venta'])), { locale: 'es-ES', code: ' ' })}`, inline: true }
            )


          const row = new ActionRowBuilder()
            .addComponents(
              new ButtonBuilder()
                .setCustomId('mensual')
                .setLabel("Mensual")
                .setStyle(ButtonStyle.Success)
            ).addComponents(
              new ButtonBuilder()
                .setCustomId('anual')
                .setLabel("Anual")
                .setStyle(ButtonStyle.Primary)
            )

          interaction.reply({ embeds: [embed1], components: [row] });

          client.on('interactionCreate', interaction => {
            if (!interaction.isButton()) return;
          });


          const filter = i => i.customId;

          const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });

          collector.on('collect', async i => {
            if (i.customId === 'mensual') {
              await i.deferUpdate()
              await i.editReply({ embeds: [embed1], components: [row] });
            }
            if (i.customId === 'anual') {

              await i.deferUpdate();
              await i.editReply({ embeds: [embed2], components: [row] });
            }

          });
        })
        .catch((err) => {
          console.error('ERR', err)
        })
    }

    //EA

    if (interaction.options.getSubcommand() === 'ea') {
      const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
        .setTitle("EA Play")
        .setURL("https://store.steampowered.com/subscriptions/ea?l=latam")
        .setDescription("Los precios de EA Play con impuestos en Argentina son los siguientes: ")
        .setColor('#fe4747')
        .setThumbnail("https://media.contentapi.ea.com/content/dam/eacom/es-mx/common/october-ea-ring.png")
        .addFields(
          { name: "EA Play Mensual", value: `ARS$ ${currencyFormatter.format(total154(499), { locale: 'es-ES', code: ' ' })}`, inline: true },
          { name: "EA Play Anual:", value: `ARS$ ${currencyFormatter.format(total154(3099), { locale: 'es-ES', code: ' ' })}`, inline: true }
        )

      return interaction.reply({ embeds: [embed] });

    }

    //Steam

    if (interaction.options.getSubcommand() === 'steam') {
      axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/oficial')
        .then((oficial) => {

          const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
            .setTitle("Fondos de la Cartera de Steam")
            .setURL("https://store.steampowered.com/steamaccount/addfunds")
            .setDescription("Los precios para recargar la cartera de Steam con impuestos en Argentina son los siguientes: \n")
            .setColor('#306fb5')
            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913860761342836786/steam.png")
            .addFields(
              { name: "USD$ 5.00", value: `ARS$ ${currencyFormatter.format(total154(5 * oficial.data['venta']), { locale: 'es-ES', code: ' ' })}`, inline: true },
              { name: "USD$ 10.00", value: `ARS$ ${currencyFormatter.format(total154(10 * oficial.data['venta']), { locale: 'es-ES', code: ' ' })}`, inline: true },
              { name: "USD$ 25.00", value: `ARS$ ${currencyFormatter.format(total154(25 * oficial.data['venta']), { locale: 'es-ES', code: ' ' })}`, inline: true },
              { name: "USD$ 50.00", value: `ARS$ ${currencyFormatter.format(total154(50 * oficial.data['venta']), { locale: 'es-ES', code: ' ' })}`, inline: true },
              { name: "USD$ 100.00", value: `ARS$ ${currencyFormatter.format(total154(100 * oficial.data['venta']), { locale: 'es-ES', code: ' ' })}`, inline: true },
            )

          return interaction.reply({ embeds: [embed] });
        })
        .catch((err) => {
          console.error('ERR', err)
        })

    }

    //Paramount

    if (interaction.options.getSubcommand() === 'paramount') {
      const embed: Discord.EmbedBuilder = new Discord.EmbedBuilder()
        .setTitle("Paramount+")
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Paramount_Plus.svg/1920px-Paramount_Plus.svg.png")
        .setURL("https://www.paramountplus.com/ar/")
        .setDescription("Los precios de Paramount+ en Argentina con impuestos son los siguientes: ")
        .setColor('#0b67ff')
        .addFields(
          { name: "Plan  mensual ", value: `ARS$ ${599}` })

      return interaction.reply({ embeds: [embed] });

    }

    //Twitch

    if (interaction.options.getSubcommand() === 'twitch') {
      axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/oficial')
        .then((oficial) => {
          const embed1: Discord.EmbedBuilder = new Discord.EmbedBuilder()
            .setTitle("Siscripciones de Twitch")
            .setURL("https://www.twitch.tv/")
            .setDescription("Los precios de las suscripciones a Twitch en Argentina son los siguientes: ")
            .setColor('#9246ff')
            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858126355091030036/twitch_icon_146081.png")
            .addFields(
              { name: "Suscripción de nivel 1", value: `ARS$ ${currencyFormatter.format((total154(1.99 * oficial.data['venta'])), { locale: 'es-ES', code: ' ' })}`, inline: true },
              { name: "Suscripción de nivel 2", value: `ARS$ ${currencyFormatter.format((total154(3.99 * oficial.data['venta'])), { locale: 'es-ES', code: ' ' })}`, inline: true },
              { name: "Suscripción de nivel 3", value: `ARS$ ${currencyFormatter.format((total154(9.99 * oficial.data['venta'])), { locale: 'es-ES', code: ' ' })}`, inline: true }
            )


          const embed2: Discord.EmbedBuilder = new Discord.EmbedBuilder()
            .setTitle("Bits de Twitch")
            .setDescription("Los precios de los bits de Twitch en Argentina son los siguientes: ")
            .setColor('#9246ff')
            .setURL("https://www.twitch.tv/")
            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858126355091030036/twitch_icon_146081.png")
            .addFields(
              { name: "100 bits", value: `ARS$ ${currencyFormatter.format(total154(1.40 * oficial.data['venta']), { locale: 'es-ES', code: ' ' })}`, inline: true },
              { name: "300 bits", value: `ARS$ ${currencyFormatter.format(total154(3.00 * oficial.data['venta']), { locale: 'es-ES', code: ' ' })}`, inline: true },
              { name: "500 bits", value: `ARS$ ${currencyFormatter.format(total154(7.00 * oficial.data['venta']), { locale: 'es-ES', code: ' ' })}`, inline: true },
              { name: "1.500 bits", value: `ARS$ ${currencyFormatter.format(total154(19.95 * oficial.data['venta']), { locale: 'es-ES', code: ' ' })}`, inline: true },
              { name: "5.000 bits", value: `ARS$ ${currencyFormatter.format(total154(64.40 * oficial.data['venta']), { locale: 'es-ES', code: ' ' })}`, inline: true },
              { name: "10.000 bits", value: `ARS$ ${currencyFormatter.format(total154(126.00 * oficial.data['venta']), { locale: 'es-ES', code: ' ' })}`, inline: true },
              { name: "25.000 bits", value: `ARS$ ${currencyFormatter.format(total154(308.00 * oficial.data['venta']), { locale: 'es-ES', code: ' ' })}`, inline: true }
            )



          const row = new ActionRowBuilder()
            .addComponents(
              new ButtonBuilder()
                .setCustomId('suscripciones')
                .setLabel("Suscripciones")
                .setStyle(ButtonStyle.Success)
            ).addComponents(
              new ButtonBuilder()
                .setCustomId('bits')
                .setLabel("Bits")
                .setStyle(ButtonStyle.Primary)
            )

          interaction.reply({ embeds: [embed1], components: [row] });

          client.on('interactionCreate', interaction => {
            if (!interaction.isButton()) return;
          });


          const filter = i => i.customId;

          const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });

          collector.on('collect', async i => {
            if (i.customId === 'suscripciones') {
              await i.deferUpdate()
              await i.editReply({ embeds: [embed1], components: [row] });
            }
            if (i.customId === 'bits') {

              await i.deferUpdate();
              await i.editReply({ embeds: [embed2], components: [row] });
            }

          });


        })
        .catch((err) => {
          console.error('ERR', err)


        })

    }
  }

}
