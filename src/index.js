/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Dependencias de node
const Discord = require("discord.js");
//Intents requeridos
const { Client, Intents, MessageEmbed, reactions, Collection } = require('discord.js');
const client = new Client({
  intents: [Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_MESSAGES,
  ],
});
const { MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js');
const fs = require('fs') //fs
const path = require('path') //Path
const currencyFormatter = require('currency-formatter') //Currency formatter
const axios = require('axios'); //Axios
const paginationEmbed = require('discordjs-button-pagination'); //Botones
const { Interaction } = require("discord.js"); //Discord.js
const { SlashCommandBuilder } = require('@discordjs/builders'); //Slash Commands
const simplydjs = require("simply-djs"); //Simplydjs 
require('dotenv').config() //Variables de entorno
//Estado del bot
// client.setMaxListeners(50);
function presence() {
  client.user.setPresence({
    status: "online",
    activities: [{
      name: 'Bot creado por GonzaAhre | Prueba /help o /update',
      type: "PLAYING"
    }]
  });
}
//Command Handler
client.slashcommands = new Discord.Collection();
const slashcommandsFile = fs.readdirSync('./dist/commands').filter(file => file.endsWith("js"))
for (const file of slashcommandsFile) {
  const slash = require(`../dist/commands/${file}`)
  console.log(`Slash  commands - ${file} cargado`)
  client.slashcommands.set(slash.data.name, slash)
}
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;
  const slashcmds = client.slashcommands.get(interaction.commandName)
  if (!slashcmds) return;

  try {
    await slashcmds.run(client, interaction)
  } catch (e) {
    console.error(e)
  }
})
client.on("ready", async () => {

  console.log("Bot funcionando y conectado a Discord");
  presence();

  // const guildId = '740761148160213082'
  const guild = client.guilds.cache.get()
  let commands

  // client.application.commands.set([]); //Resetear comandos

  /*
  Mostrar comandos
  const list = await client.application.commands.fetch()  
     console.log(list)
  */

  if (guild) {
    commands = guild.commands
  } else {
    commands = client.application?.commands
  }


  //Simply.djs comandos


  //Convertir cripto
  commands?.create({
    name: 'convertircripto',
    description: 'Convierte de criptomonedas a pesos',
    options: [
      {
        type: "SUB_COMMAND",
        name: "bitcoin",
        description: "Convierte de Bitcoin a Pesos Argentinos",
        options: [
          {
            name: 'btc',
            description: 'Monto en bitcoin.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "ethereum",
        description: "Convierte de Ethereum a Pesos Argentinos",
        options: [
          {
            name: 'eth',
            description: 'Monto en ethereum.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "tether",
        description: "Convierte de Tether a Pesos Argentinos",
        options: [
          {
            name: 'usdt',
            description: 'Monto en tether.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "axieinfinity",
        description: "Convierte de Axie Infinity a Pesos Argentinos",
        options: [
          {
            name: 'axs',
            description: 'Monto en Axie Infinity.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "terralunaclassic",
        description: "Convierte de Terra Luna Classic a Pesos Argentinos",
        options: [
          {
            name: 'lunc',
            description: 'Monto en Terra Luna Classic.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "decentraland",
        description: "Convierte de Decentraland a Pesos Argentinos",
        options: [
          {
            name: 'mana',
            description: 'Monto en Decentraland.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "solana",
        description: "Convierte de Solana a Pesos Argentinos",
        options: [
          {
            name: 'sol',
            description: 'Monto en Solana.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "dai",
        description: "Convierte de Dai a Pesos Argentinos",
        options: [
          {
            name: 'dai',
            description: 'Monto en Dai.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "dogecoin",
        description: "Convierte de Dogecoin a Pesos Argentinos",
        options: [
          {
            name: 'doge',
            description: 'Monto en Dogecoin.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "terrausdclassic",
        description: "Convierte de Terra USD Classic a Pesos Argentinos",
        options: [
          {
            name: 'ustc',
            description: 'Monto en USTC.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "terraluna",
        description: "Convierte de Terra Luna a Pesos Argentinos",
        options: [
          {
            name: 'luna',
            description: 'Monto en Terra Luna 2.0 .',
            type: "NUMBER",
            required: true
          }
        ]
      },
    ]
  })

  //Convertir metal a pesos

  commands?.create({
    name: 'convertirmetal',
    description: 'Convierte de metales a pesos argentinos',
    options: [
      {
        type: "SUB_COMMAND",
        name: "oro",
        description: "Convierte de Oro a pesos argentinos",
        options: [
          {
            name: 'xau',
            description: 'Monto en onza de oro.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "plata",
        description: "Convierte de Plata a Pesos Argentinos",
        options: [
          {
            name: 'xag',
            description: 'Monto en onza de plata.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "paladio",
        description: "Convierte de Paladio a Pesos Argentinos",
        options: [
          {
            name: 'xpd',
            description: 'Monto en onza de paladio.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "platino",
        description: "Convierte de Platino a Pesos Argentinos",
        options: [
          {
            name: 'xpt',
            description: 'Monto en onza  de platino.',
            type: "NUMBER",
            required: true
          }
        ]
      },
    ]
  })
  //Peso a cripto

  commands?.create({
    name: 'pesoacripto',
    description: 'Convierte de pesos a criptomoneda',
    options: [
      {
        type: "SUB_COMMAND",
        name: "bitcoin",
        description: "Convierte de Pesos Argentinos a Bitcoin",
        options: [
          {
            name: 'ars',
            description: 'Monto en pesos.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "ethereum",
        description: "Convierte de Pesos Argentinos a Ethereum",
        options: [
          {
            name: 'ars',
            description: 'Monto en pesos.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "tether",
        description: "Convierte de Pesos Argentinos a Tether",
        options: [
          {
            name: 'ars',
            description: 'Monto en pesos.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "axieinfinity",
        description: "Convierte de Pesos Argentinos a Axie Infinity",
        options: [
          {
            name: 'ars',
            description: 'Monto en pesos.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "terraluna",
        description: "Convierte de Pesos Argentinos a Terra Luna",
        options: [
          {
            name: 'ars',
            description: 'Monto en pesos.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "terralunaclassic",
        description: "Convierte de Pesos Argentinos a Terra Luna Classic",
        options: [
          {
            name: 'ars',
            description: 'Monto en pesos.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "decentraland",
        description: "Convierte de Pesos Argentinos a Decentraland",
        options: [
          {
            name: 'ars',
            description: 'Monto en pesos.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "solana",
        description: "Convierte de Pesos Argentinos a Solana",
        options: [
          {
            name: 'ars',
            description: 'Monto en pesos.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "dai",
        description: "Convierte de Pesos Argentinos a DAI",
        options: [
          {
            name: 'ars',
            description: 'Monto en pesos.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "dogecoin",
        description: "Convierte de Pesos Argentinos a Dogecoin",
        options: [
          {
            name: 'ars',
            description: 'Monto en pesos.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "terrausdclassic",
        description: "Convierte de Pesos Argentinos a Terra USD Classic",
        options: [
          {
            name: 'ars',
            description: 'Monto en pesos.',
            type: "NUMBER",
            required: true
          }
        ]
      },
    ]
  })

  //Pesos a metales 

  commands?.create({
    name: 'pesoametal',
    description: 'Convierte de pesos a metales',
    options: [
      {
        type: "SUB_COMMAND",
        name: "oro",
        description: "Convierte de Pesos Argentinos a oro ",
        options: [
          {
            name: 'ars',
            description: 'Monto en pesos.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "plata",
        description: "Convierte de Pesos Argentinos a plata",
        options: [
          {
            name: 'ars',
            description: 'Monto en pesos.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "paladio",
        description: "Convierte de Pesos Argentinos a paladio",
        options: [
          {
            name: 'ars',
            description: 'Monto en pesos.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "platino",
        description: "Convierte de Pesos Argentinos  a platino",
        options: [
          {
            name: 'ars',
            description: 'Monto en pesos',
            type: "NUMBER",
            required: true
          }
        ]
      },
    ]
  })




  //Simply DJS

  //Calculadora
  commands?.create({
    name: 'calculadora',
    description: 'Calculadora interactiva por simply.djs',
  })

  //Piedra Papel o Tijera
  commands?.create({
    name: 'piedrapapelotijera',
    description: 'Juego interactivo de Piedra Papel o Tijera por simply.djs',
    options: [
      {
        name: 'usuario',
        type: 'USER',
        description: 'Usuario para competir en Piedra Papel o Tijeras',
        required: true,
      }
    ],
  })

  //Tateti

  commands?.create({
    name: 'tateti',
    description: 'Juego de Tateti. Usando simply-djs',
    options: [{
      name: 'usuario',
      type: 'USER',
      description: 'Usuario para competir en Tateti',
      required: true,
    }
    ],
  })





  //Convertir


  //Convertir cripto 

  client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) {
      return
    }

    const { commandName, options } = interaction
    if (commandName == "convertircripto") {

      //Bitcoin
      if (interaction.options.getSubcommand() === 'bitcoin') {
        var conv5 = options.getNumber('btc')
        axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=0')
          .then((BTC) => {

            bitcoin = BTC.data['prices'][0][1]


            axios.get('https://criptoya.com/api/lemoncash/btc')
              .then((USD) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Bitcoin <:rightarrow:921907270747570247> Peso Argentino")
                  .setColor("#fddc4d")
                  .setDescription("Bitcoin expresado en pesos argentinos a la cotización del mercado")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929076353079328868/bitcoinapeso.png")
                  .addField("Monto original <:bitcoin:929073179262074960> ", 'BTC ₿ ' + conv5)
                  .addField("Dólares :flag_ar: ", 'USD$ ' + currencyFormatter.format(((conv5 * bitcoin)), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 * USD.data['bid'])), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 * USD.data['ask'])), { locale: 'es-ES', code: ' ' }), true)

                return interaction.reply({ embeds: [embed] });

              })
              .catch((err) => {
                console.error('ERR', err)


              })
          })
          .catch((err) => {
            console.error('ERR', err)


          })




      }


      //Ethereum


      if (interaction.options.getSubcommand() === 'ethereum') {
        var conv5 = options.getNumber('eth')
        axios.get('https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=0')
          .then((ETH) => {

            ethereum = ETH.data['prices'][0][1]


            axios.get('https://criptoya.com/api/lemoncash/eth')
              .then((USD) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Ethereum <:rightarrow:921907270747570247> Peso Argentino")
                  .setColor("#7be0ff")
                  .setDescription("Ethereum expresado en pesos argentinos a la cotización del mercado ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/963885915619610714/convethereum.png")
                  .addField("Monto original  <:ethereum:963619533271232532> ", 'ETH Ξ ' + conv5)
                  .addField("Dólares :flag_ar: ", 'USD$ ' + currencyFormatter.format(((conv5 * ethereum)), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 * USD.data['bid'])), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 * USD.data['ask'])), { locale: 'es-ES', code: ' ' }), true)

                return interaction.reply({ embeds: [embed] });

              })
              .catch((err) => {
                console.error('ERR', err)


              })
          })
          .catch((err) => {
            console.error('ERR', err)


          })




      }


      //Tether

      if (interaction.options.getSubcommand() === 'tether') {
        var conv5 = options.getNumber('usdt')
        axios.get('https://api.coingecko.com/api/v3/coins/tether/market_chart?vs_currency=usd&days=0')
          .then((ETH) => {

            ethereum = ETH.data['prices'][0][1]


            axios.get('https://criptoya.com/api/lemoncash/usdt')
              .then((USD) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Tether <:rightarrow:921907270747570247> Peso Argentino")
                  .setColor("#27e19e")
                  .setDescription("Tether expresado en pesos argentinos a la cotización del mercado")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964377292568662107/convertirtether.png")
                  .addField("Monto original  <:tether:964346292815945828>", 'USDT₮ ' + conv5)
                  .addField("Dólares :flag_ar: ", 'USD$ ' + currencyFormatter.format(((conv5 * ethereum)), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 * USD.data['bid'])), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 * USD.data['ask'])), { locale: 'es-ES', code: ' ' }), true)

                return interaction.reply({ embeds: [embed] });

              })
              .catch((err) => {
                console.error('ERR', err)


              })
          })
          .catch((err) => {
            console.error('ERR', err)


          })




      }
      //Axie Infinity
      if (interaction.options.getSubcommand() === 'axieinfinity') {
        var conv5 = options.getNumber('axs')
        axios.get('https://api.coingecko.com/api/v3/coins/axie-infinity/market_chart?vs_currency=usd&days=0')
          .then((ETH) => {

            ethereum = ETH.data['prices'][0][1]


            axios.get('https://criptoya.com/api/lemoncash/axs')
              .then((USD) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Axie  Infinity <:rightarrow:921907270747570247> Peso Argentino")
                  .setColor("#555abe")
                  .setDescription("Axie Infinity expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964380617485742100/convertiraxie.png")
                  .addField("Monto original  <:axieinfinity:964349059236257852>", 'AXS ' + conv5)
                  .addField("Dólares :flag_ar: ", 'USD$ ' + currencyFormatter.format(((conv5 * ethereum)), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 * USD.data['bid'])), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 * USD.data['ask'])), { locale: 'es-ES', code: ' ' }), true)

                return interaction.reply({ embeds: [embed] });

              })
              .catch((err) => {
                console.error('ERR', err)


              })
          })
          .catch((err) => {
            console.error('ERR', err)


          })

      }

      //Terraluna 

      if (interaction.options.getSubcommand() === 'terralunaclassic') {
        var conv5 = options.getNumber('lunc')
        axios.get('https://api.coingecko.com/api/v3/coins/terra-luna/market_chart?vs_currency=usd&days=0')
          .then((TL) => {

            terraluna = TL.data['prices'][0][1]


            axios.get('https://criptoya.com/api/lemoncash/usdt')
              .then((USD) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Terra Luna Classic <:rightarrow:921907270747570247> Peso Argentino")
                  .setColor("#ffd83a")
                  .setDescription("Terraluna expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964377293055209472/convertirterraluna.png")
                  .addField("Monto original <:terraluna:964349074016960532>  ", 'LUNC ' + conv5)
                  .addField("Dólares :flag_ar: ", 'USD$ ' + currencyFormatter.format(((conv5 * terraluna)), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 * terraluna)) * USD.data['bid'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 * terraluna) * USD.data['ask']), { locale: 'es-ES', code: ' ' }), true)

                return interaction.reply({ embeds: [embed] });

              })
              .catch((err) => {
                console.error('ERR', err)


              })
          })
          .catch((err) => {
            console.error('ERR', err)


          })




      }

      if (interaction.options.getSubcommand() === 'terraluna') {
        var conv5 = options.getNumber('luna')
        axios.get('https://api.coingecko.com/api/v3/coins/terra-luna-2/market_chart?vs_currency=usd&days=0')
          .then((TL) => {

            terraluna = TL.data['prices'][0][1]


            axios.get('https://criptoya.com/api/lemoncash/usdt')
              .then((USD) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Terra Luna 2.0 <:rightarrow:921907270747570247> Peso Argentino")
                  .setColor("#ffd83a")
                  .setDescription("Terraluna expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/980239559428288592/convertirluna2.png")
                  .addField("Monto original <:terraluna2_large:980222259471978526>", 'LUNA ' + conv5)
                  .addField("Dólares :flag_ar: ", 'USD$ ' + currencyFormatter.format(((conv5 * terraluna)), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 * terraluna)) * USD.data['bid'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 * terraluna) * USD.data['ask']), { locale: 'es-ES', code: ' ' }), true)

                return interaction.reply({ embeds: [embed] });

              })
              .catch((err) => {
                console.error('ERR', err)


              })
          })
          .catch((err) => {
            console.error('ERR', err)


          })




      }

      //TerraUSD


      if (interaction.options.getSubcommand() === 'terrausdclassic') {
        var conv5 = options.getNumber('ustc')
        axios.get('https://api.coingecko.com/api/v3/coins/terrausd/market_chart?vs_currency=usd&days=0')
          .then((UST) => {

            ust = UST.data['prices'][0][1]


            axios.get('https://criptoya.com/api/lemoncash/usdt')
              .then((USD) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Terra  USD <:rightarrow:921907270747570247> Peso Argentino")
                  .setColor("#5293f9")
                  .setDescription("Dai expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/9752217141.7520430/convertirterra.png")
                  .addField("Monto original <:terrausd:975206586375106600>", 'USTC ' + conv5)
                  .addField("Dólares :flag_ar: ", 'USD$ ' + currencyFormatter.format(((conv5 * terraluna)), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 * terraluna)) * USD.data['bid'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 * terraluna) * USD.data['ask']), { locale: 'es-ES', code: ' ' }), true)

                return interaction.reply({ embeds: [embed] });

              })
              .catch((err) => {
                console.error('ERR', err)


              })
          })
          .catch((err) => {
            console.error('ERR', err)


          })




      }


      //Decentraland

      if (interaction.options.getSubcommand() === 'decentraland') {
        var conv5 = options.getNumber('mana')
        axios.get('https://api.coingecko.com/api/v3/coins/decentraland/market_chart?vs_currency=usd&days=0')
          .then((decentraland) => {

            mana = decentraland.data['prices'][0][1]


            axios.get('https://criptoya.com/api/lemoncash/mana')
              .then((USD) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Decentraland <:rightarrow:921907270747570247> Peso Argentino")
                  .setColor("#ffa6b7")
                  .setDescription("Decentraland expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964380633042419722/convertirdecentraland.png")
                  .addField("Monto original <:decentraland:964349085089931324>", 'MANA ' + conv5)
                  .addField("Dólares :flag_ar: ", 'USD$ ' + currencyFormatter.format(((conv5 * mana)), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 * USD.data['bid'])), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 * USD.data['ask'])), { locale: 'es-ES', code: ' ' }), true)

                return interaction.reply({ embeds: [embed] });

              })
              .catch((err) => {
                console.error('ERR', err)


              })
          })
          .catch((err) => {
            console.error('ERR', err)


          })




      }

      //Solana

      if (interaction.options.getSubcommand() === 'solana') {
        var conv5 = options.getNumber('sol')
        axios.get('https://api.coingecko.com/api/v3/coins/solana/market_chart?vs_currency=usd&days=0')
          .then((solana) => {

            sol = solana.data['prices'][0][1]


            axios.get('https://criptoya.com/api/lemoncash/sol')
              .then((USD) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Solana <:rightarrow:921907270747570247> Peso Argentino")
                  .setColor("#2488ff")
                  .setDescription("Solana expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964387064240046111/convertirsolana.png")
                  .addField("Monto original <:decentraland:964349085089931324>", 'SOL◎ ' + conv5)
                  .addField("Dólares :flag_ar: ", 'USD$ ' + currencyFormatter.format(((conv5 * sol)), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 * USD.data['bid'])), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 * USD.data['ask'])), { locale: 'es-ES', code: ' ' }), true)

                return interaction.reply({ embeds: [embed] });

              })
              .catch((err) => {
                console.error('ERR', err)


              })
          })
          .catch((err) => {
            console.error('ERR', err)


          })




      }

      //DAi

      if (interaction.options.getSubcommand() === 'dai') {
        var conv5 = options.getNumber('dai')
        axios.get('https://api.coingecko.com/api/v3/coins/dai/market_chart?vs_currency=usd&days=0')
          .then((DAI) => {

            dai = DAI.data['prices'][0][1]


            axios.get('https://criptoya.com/api/lemoncash/dai')
              .then((USD) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Dai <:rightarrow:921907270747570247> Peso Argentino")
                  .setColor("#efc637")
                  .setDescription("Dai expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964691273883742238/dai_1.png")
                  .addField("Monto original <:dai:964681594344443904>", 'DAI ' + conv5)
                  .addField("Dólares :flag_ar: ", 'USD$ ' + currencyFormatter.format(((conv5 * dai)), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 * USD.data['bid'])), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 * USD.data['ask'])), { locale: 'es-ES', code: ' ' }), true)

                return interaction.reply({ embeds: [embed] });

              })
              .catch((err) => {
                console.error('ERR', err)


              })
          })
          .catch((err) => {
            console.error('ERR', err)


          })




      }

      //Dogecoin

      if (interaction.options.getSubcommand() === 'dogecoin') {
        var conv5 = options.getNumber('doge')
        axios.get('https://api.coingecko.com/api/v3/coins/dogecoin/market_chart?vs_currency=usd&days=0')
          .then((DOGE) => {

            doge = DOGE.data['prices'][0][1]


            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/oficial')
              .then((USD) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Dogecoin <:rightarrow:921907270747570247> Peso Argentino")
                  .setColor("#f5a431")
                  .setDescription("Dogecoin expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964691274147979304/dogecoin_1.png")
                  .addField("Monto original <:dogecoin:964686144530939904>", 'DOGEÐ ' + conv5)
                  .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 * doge)) * USD.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 * doge) * USD.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuestos (75%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5 * doge) * USD.data['venta']) * 1.75), { locale: 'es-ES', code: ' ' }), true)

                return interaction.reply({ embeds: [embed] });

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
  })


  //Convertir metal


  client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) {
      return
    }

    const { commandName, options } = interaction
    if (commandName == "convertirmetal") {
      if (interaction.options.getSubcommand() === 'oro') {

        var conv5 = options.getNumber('xau')
        axios.get('https://api.exchangerate.host/latest')
          .then((GOLD) => {

            oro = GOLD.data['rates']['XAU']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Oro <:rightarrow:921907270747570247> Peso Argentino")
                  .setColor("#fddc4d")
                  .setDescription("Oro expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964738102771990648/convertiroro.png")
                  .addField("Monto Original <:goldingots:964717629484965938>", 'XAU ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / oro)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / oro) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuestos (75%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5 / oro) * EUR.data['venta']) * 1.75), { locale: 'es-ES', code: ' ' }), true)

                return interaction.reply({ embeds: [embed] });

              })
              .catch((err) => {
                console.error('ERR', err)


              })
          })
          .catch((err) => {
            console.error('ERR', err)


          })
      }

      if (interaction.options.getSubcommand() === 'plata') {

        var conv5 = options.getNumber('xag')
        axios.get('https://api.exchangerate.host/latest')
          .then((silver) => {

            plata = silver.data['rates']['XAG']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Plata <:rightarrow:921907270747570247> Peso Argentino")
                  .setColor("#cccccc")
                  .setDescription("Plata expresada en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964739866707492884/convertirplata_1.png")
                  .addField("Monto Original <:silver:964717593816600606> ", 'XAG ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / plata)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / plata) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuestos (75%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5 / plata) * EUR.data['venta']) * 1.75), { locale: 'es-ES', code: ' ' }), true)

                return interaction.reply({ embeds: [embed] });

              })
              .catch((err) => {
                console.error('ERR', err)


              })
          })
          .catch((err) => {
            console.error('ERR', err)


          })
      }


      //Paladio
      if (interaction.options.getSubcommand() === 'paladio') {

        var conv5 = options.getNumber('xpd')
        axios.get('https://api.exchangerate.host/latest')
          .then((pd) => {

            paladio = pd.data['rates']['XPD']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Paladio <:rightarrow:921907270747570247> Peso Argentino")
                  .setColor("#808080")
                  .setDescription("Paladio expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964739251159859230/convertirpaladio.png")
                  .addField("Monto Original <:paladio:964717594223456336> ", 'XPD ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / paladio)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / paladio) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuestos (75%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5 / paladio) * EUR.data['venta']) * 1.75), { locale: 'es-ES', code: ' ' }), true)

                return interaction.reply({ embeds: [embed] });

              })
              .catch((err) => {
                console.error('ERR', err)


              })
          })
          .catch((err) => {
            console.error('ERR', err)


          })
      }

      //Platino
      if (interaction.options.getSubcommand() === 'platino') {

        var conv5 = options.getNumber('xpt')
        axios.get('https://api.exchangerate.host/latest')
          .then((pt) => {

            platino = pt.data['rates']['XPT']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Platino <:rightarrow:921907270747570247> Peso Argentino")
                  .setColor("#a9f8f7")
                  .setDescription("Platino expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964739250899804180/convertirplatinoxd.png")
                  .addField("Monto Original <:platinum:964717592923222017>  ", 'XPT ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / platino)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / platino) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuestos (75%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5 / platino) * EUR.data['venta']) * 1.75), { locale: 'es-ES', code: ' ' }), true)

                return interaction.reply({ embeds: [embed] });

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



  })

  //Peso a cripto

  client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) {
      return
    }

    const { commandName, options } = interaction
    if (commandName == "pesoacripto") {
      if (interaction.options.getSubcommand() === 'bitcoin') {
        var conv5 = options.getNumber('ars')
        axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=0')
          .then((BTC) => {

            bitcoin = BTC.data['prices'][0][1]


            axios.get('https://criptoya.com/api/lemoncash/btc')
              .then((USD) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Peso Argentino <:rightarrow:921907270747570247> Bitcoin ")
                  .setColor("#fddc4d")
                  .setDescription("Pesos expresado en bitcoins al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929076353079328868/bitcoinapeso.png")
                  .addField("Monto original :flag_ar: ", 'ARS $ ' + conv5)

                  .addField("Compra <:bitcoin:929073179262074960> ", 'BTC ₿ ' + ((((conv5 / USD.data['bid']).toFixed(8)))), true)
                  .addField("Venta <:bitcoin:929073179262074960>", 'BTC ₿ ' + ((((conv5 / USD.data['ask']).toFixed(8)))), true)

                return interaction.reply({ embeds: [embed] });

              })
              .catch((err) => {
                console.error('ERR', err)


              })
          })
          .catch((err) => {
            console.error('ERR', err)


          })




      }

      //Ethereum

      if (interaction.options.getSubcommand() === 'ethereum') {
        var conv5 = options.getNumber('ars')
        axios.get('https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=0')
          .then((ETH) => {

            ethereum = ETH.data['prices'][0][1]


            axios.get('https://criptoya.com/api/lemoncash/eth')
              .then((USD) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Peso Argentino <:rightarrow:921907270747570247> Ethereum")
                  .setColor("#7be0ff")
                  .setDescription("Pesos argentinos expresados en Ethereum al precio del mercado. ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/963885915619610714/convethereum.png")
                  .addField("Monto original :flag_ar:   ", 'ARS$ ' + conv5)

                  .addField("Compra <:ethereum:963619533271232532> ", 'ETH Ξ ' + ((((conv5 / USD.data['bid']).toFixed(8)))), true)
                  .addField("Venta <:ethereum:963619533271232532>", 'ETH Ξ ' + ((((conv5 / USD.data['ask']).toFixed(8)))), true)


                return interaction.reply({ embeds: [embed] });

              })
              .catch((err) => {
                console.error('ERR', err)


              })
          })
          .catch((err) => {
            console.error('ERR', err)


          })




      }



      //Tether

      if (interaction.options.getSubcommand() === 'tether') {
        var conv5 = options.getNumber('ars')
        axios.get('https://api.coingecko.com/api/v3/coins/tether/market_chart?vs_currency=usd&days=0')
          .then((ETH) => {

            ethereum = ETH.data['prices'][0][1]


            axios.get('https://criptoya.com/api/lemoncash/usdt')
              .then((USD) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Peso Argentino <:rightarrow:921907270747570247> Tether")
                  .setColor("#27e19e")
                  .setDescription("Pesos argentinos expresado en Tether al precio del mercado. ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964377292568662107/convertirtether.png")
                  .addField("Monto original :flag_ar: ", 'ARS$ ' + conv5)
                  .addField("Compra <:tether:964346292815945828>", 'USDT₮ ' + currencyFormatter.format((((conv5 / USD.data['bid']).toFixed(2))), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta <:tether:964346292815945828>", 'USDT₮ ' + currencyFormatter.format((((conv5 / USD.data['ask']).toFixed(2))), { locale: 'es-ES', code: ' ' }), true)

                return interaction.reply({ embeds: [embed] });

              })
              .catch((err) => {
                console.error('ERR', err)


              })
          })
          .catch((err) => {
            console.error('ERR', err)


          })

      }



      //Axie Infinity
      if (interaction.options.getSubcommand() === 'axieinfinity') {
        var conv5 = options.getNumber('ars')
        axios.get('https://api.coingecko.com/api/v3/coins/axie-infinity/market_chart?vs_currency=usd&days=0')
          .then((ETH) => {

            ethereum = ETH.data['prices'][0][1]


            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/oficial')
              .then((USD) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Peso Argentino <:rightarrow:921907270747570247> Axie Infinity")
                  .setColor("#555abe")
                  .setDescription("Pesos argentinos expresado en Axie Infinity al precio del  mercado. ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964380617485742100/convertiraxie.png")
                  .addField("Monto original :flag_ar: ", 'ARS$ ' + conv5)
                  .addField("Compra  <:axieinfinity:964349059236257852>", 'AXS ' + (((conv5 / USD.data['bid']).toFixed(8))), true)
                  .addField("Venta  <:axieinfinity:964349059236257852>", 'AXS ' + (((conv5 / USD.data['ask']).toFixed(8))), true)


                return interaction.reply({ embeds: [embed] });

              })
              .catch((err) => {
                console.error('ERR', err)


              })
          })
          .catch((err) => {
            console.error('ERR', err)


          })

      }

      //Terraluna 

      if (interaction.options.getSubcommand() === 'terralunaclassic') {
        var conv5 = options.getNumber('ars')
        axios.get('https://api.coingecko.com/api/v3/coins/terra-luna/market_chart?vs_currency=usd&days=0')
          .then((TL) => {

            terraluna = TL.data['prices'][0][1]


            axios.get('https://criptoya.com/api/lemoncash/usdt')
              .then((USD) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Peso Argentino <:rightarrow:921907270747570247> Terra Luna Classic")
                  .setColor("#ffd83a")
                  .setDescription("Pesos argentinos expresado en Terraluna al precio del mercado.")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964377293055209472/convertirterraluna.png")
                  .addField("Monto original :flag_ar:  ", 'ARS$ ' + conv5)
                  .addField("Compra  <:terraluna:964349074016960532>", 'LUNC ' + (((conv5 / USD.data['bid']) / terraluna)), true)
                  .addField("Venta  <:terraluna:964349074016960532>", 'LUNC ' + (((conv5 / USD.data['ask']) / terraluna)), true)


                return interaction.reply({ embeds: [embed] });

              })
              .catch((err) => {
                console.error('ERR', err)


              })
          })
          .catch((err) => {
            console.error('ERR', err)


          })




      }

      if (interaction.options.getSubcommand() === 'terraluna') {
        var conv5 = options.getNumber('ars')
        axios.get('https://api.coingecko.com/api/v3/coins/terra-luna-2/market_chart?vs_currency=usd&days=0')
          .then((TL) => {

            terraluna = TL.data['prices'][0][1]


            axios.get('https://criptoya.com/api/lemoncash/usdt')
              .then((USD) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Peso Argentino <:rightarrow:921907270747570247> Terra Luna 2.0")
                  .setColor("#ffd83a")
                  .setDescription("Pesos argentinos expresado en Terra Luna 2.0 al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/980239559428288592/convertirluna2.png")
                  .addField("Monto original :flag_ar:  ", 'ARS$ ' + conv5)
                  .addField("Compra <:terraluna2_large:980222259471978526>  ", 'LUNA ' + (((conv5 / USD.data['bid']) / terraluna)), true)
                  .addField("Venta  <:terraluna2_large:980222259471978526>  ", 'LUNA ' + (((conv5 / USD.data['ask']) / terraluna)), true)

                return interaction.reply({ embeds: [embed] });

              })
              .catch((err) => {
                console.error('ERR', err)


              })
          })
          .catch((err) => {
            console.error('ERR', err)


          })




      }


      if (interaction.options.getSubcommand() === 'terrausdclassic') {
        var conv5 = options.getNumber('ars')
        axios.get('https://api.coingecko.com/api/v3/coins/terrausd/market_chart?vs_currency=usd&days=0')
          .then((UST) => {

            ust = UST.data['prices'][0][1]


            axios.get('https://criptoya.com/api/lemoncash/usdt')
              .then((USD) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Terra  USD <:rightarrow:921907270747570247> Peso Argentino")
                  .setColor("#5293f9")
                  .setDescription("Dai expresado en pesos argentinos al precio del mercado. ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/9752217141.7520430/convertirterra.png")
                  .addField("Monto original :flag_ar: ", 'ARS ' + conv5)
                  .addField("Compra <:terrausd:975206586375106600>", 'USTC ' + currencyFormatter.format(((conv5 * ust)) * USD.data['bid'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta <:terrausd:975206586375106600> ", 'USTC ' + currencyFormatter.format(((conv5 * ust) * USD.data['ask']), { locale: 'es-ES', code: ' ' }), true)


                return interaction.reply({ embeds: [embed] });

              })
              .catch((err) => {
                console.error('ERR', err)


              })
          })
          .catch((err) => {
            console.error('ERR', err)


          })




      }


      //Decentraland

      if (interaction.options.getSubcommand() === 'decentraland') {
        var conv5 = options.getNumber('ars')
        axios.get('https://api.coingecko.com/api/v3/coins/decentraland/market_chart?vs_currency=usd&days=0')
          .then((decentraland) => {

            mana = decentraland.data['prices'][0][1]


            axios.get('https://criptoya.com/api/lemoncash/mana')
              .then((USD) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Peso Argentino <:rightarrow:921907270747570247> Decentraland")
                  .setColor("#ffa6b7")
                  .setDescription("Decentraland expresado en pesos argentinos al precio del mercado. ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964380633042419722/convertirdecentraland.png")
                  .addField("Monto original :flag_ar: ", 'ARS$ ' + conv5)
                  .addField("Compra <:decentraland:964349085089931324>", 'MANA ' + (((conv5 / USD.data['bid']).toFixed(8))), true)
                  .addField("Venta <:decentraland:964349085089931324>", 'MANA ' + (((conv5 / USD.data['ask']).toFixed(8))), true)


                return interaction.reply({ embeds: [embed] });

              })
              .catch((err) => {
                console.error('ERR', err)


              })
          })
          .catch((err) => {
            console.error('ERR', err)


          })




      }

      //Solana

      if (interaction.options.getSubcommand() === 'solana') {
        var conv5 = options.getNumber('ars')
        axios.get('https://api.coingecko.com/api/v3/coins/solana/market_chart?vs_currency=usd&days=0')
          .then((solana) => {

            sol = solana.data['prices'][0][1]


            axios.get('https://criptoya.com/api/lemoncash/sol')
              .then((USD) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Peso Argentino <:rightarrow:921907270747570247> Solana")
                  .setColor("#2488ff")
                  .setDescription("Pesos argentinos expresado en Solana al precio del mercado. ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964387064240046111/convertirsolana.png")
                  .addField("Monto original :flag_ar:  ", 'ARS$ ' + conv5)

                  .addField("Compra <:solana:964349096775282738>", 'SOL◎ ' + (((conv5 / USD.data['bid']).toFixed(8))), true)
                  .addField("Venta <:solana:964349096775282738>", 'SOL◎ ' + (((conv5 / USD.data['ask']).toFixed(8))), true)


                return interaction.reply({ embeds: [embed] });

              })
              .catch((err) => {
                console.error('ERR', err)


              })
          })
          .catch((err) => {
            console.error('ERR', err)


          })




      }

      //DAi

      if (interaction.options.getSubcommand() === 'dai') {
        var conv5 = options.getNumber('ars')
        axios.get('https://api.coingecko.com/api/v3/coins/dai/market_chart?vs_currency=usd&days=0')
          .then((DAI) => {

            dai = DAI.data['prices'][0][1]


            axios.get('https://criptoya.com/api/lemoncash/dai')
              .then((USD) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Peso Argentino <:rightarrow:921907270747570247> Dai")
                  .setColor("#efc637")
                  .setDescription("Pesos argentinos expresados en DAI al precio del mercado.")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964691273883742238/dai_1.png")
                  .addField("Monto original :flag_ar: ", 'ARS$ ' + conv5)
                  .addField("Compra <:dai:964681594344443904>", 'DAI ' + currencyFormatter.format((((conv5 / USD.data['bid']).toFixed(2))), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta <:dai:964681594344443904>", 'DAI ' + currencyFormatter.format((((conv5 / USD.data['ask']).toFixed(2))), { locale: 'es-ES', code: ' ' }), true)


                return interaction.reply({ embeds: [embed] });

              })
              .catch((err) => {
                console.error('ERR', err)


              })
          })
          .catch((err) => {
            console.error('ERR', err)


          })




      }

      //Dogecoin

      if (interaction.options.getSubcommand() === 'dogecoin') {
        var conv5 = options.getNumber('ars')
        axios.get('https://api.coingecko.com/api/v3/coins/dogecoin/market_chart?vs_currency=usd&days=0')
          .then((DOGE) => {

            doge = DOGE.data['prices'][0][1]


            axios.get('https://criptoya.com/api/bitso/doge')
              .then((USD) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Peso Argentino <:rightarrow:921907270747570247> Dogecoin")
                  .setColor("#f5a431")
                  .setDescription("Pesos expresado en Dogecoin al precio del mercado. ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964691274147979304/dogecoin_1.png")
                  .addField("Monto original :flag_ar: ", 'ARS$ ' + conv5)
                  .addField("Compra <:dogecoin:964686144530939904>", 'DOGE Ð ' + currencyFormatter.format((((conv5 / USD.data['bid']).toFixed(2))), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta <:dogecoin:964686144530939904>", 'DOGE Ð ' + currencyFormatter.format((((conv5 / USD.data['ask']).toFixed(2))), { locale: 'es-ES', code: ' ' }), true)




                return interaction.reply({ embeds: [embed] });

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

  })

  //Peso a metal


  client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) {
      return
    }

    const { commandName, options } = interaction
    if (commandName == "pesoametal") {
      if (interaction.options.getSubcommand() === 'oro') {

        var conv5 = options.getNumber('ars')
        axios.get('https://api.exchangerate.host/latest')
          .then((GOLD) => {

            oro = GOLD.data['rates']['XAU']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Peso Argentino <:rightarrow:921907270747570247> Oro")
                  .setColor("#fddc4d")
                  .setDescription("Pesos argentinos en Oro al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964738102771990648/convertiroro.png")
                  .addField("Monto Original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra <:goldingots:964717629484965938> ", 'XAU ' + (((conv5 * oro)) / EUR.data['compra']), true)
                  .addField("Venta <:goldingots:964717629484965938> ", 'XAU ' + (((conv5 * oro) / EUR.data['venta'])), true)
                  .addField("Impuestos (75%) <:goldingots:964717629484965938> ", 'XAU ' + ((((conv5 * oro) / EUR.data['venta']) / 1.75)), true)


                return interaction.reply({ embeds: [embed] });

              })
              .catch((err) => {
                console.error('ERR', err)


              })
          })
          .catch((err) => {
            console.error('ERR', err)


          })
      }

      if (interaction.options.getSubcommand() === 'plata') {

        var conv5 = options.getNumber('ars')
        axios.get('https://api.exchangerate.host/latest')
          .then((silver) => {

            plata = silver.data['rates']['XAG']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Pesos Argentino <:rightarrow:921907270747570247> Plata")
                  .setColor("#cccccc")
                  .setDescription("Pesos argentinos en Plata al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964739866707492884/convertirplata_1.png")
                  .addField("Monto Original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra <:silver:964717593816600606> ", 'XAU ' + (((conv5 * plata)) / EUR.data['compra']), true)
                  .addField("Venta <:silver:964717593816600606> ", 'XAU ' + (((conv5 * plata) / EUR.data['venta'])), true)
                  .addField("Impuestos (75%) <:silver:964717593816600606> ", 'XAU ' + ((((conv5 * plata) / EUR.data['venta']) / 1.75)), true)

                return interaction.reply({ embeds: [embed] });

              })
              .catch((err) => {
                console.error('ERR', err)


              })
          })
          .catch((err) => {
            console.error('ERR', err)


          })
      }


      //Paladio
      if (interaction.options.getSubcommand() === 'paladio') {

        var conv5 = options.getNumber('ars')
        axios.get('https://api.exchangerate.host/latest')
          .then((pd) => {

            paladio = pd.data['rates']['XPD']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Peso Argentino <:rightarrow:921907270747570247> Paladio")
                  .setColor("#808080")
                  .setDescription("Pesos Argentinos expresado en Paladio al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964739251159859230/convertirpaladio.png")
                  .addField("Monto Original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra <:paladio:964717594223456336> ", 'XPD ' + (((conv5 * paladio)) / EUR.data['compra']), true)
                  .addField("Venta <:paladio:964717594223456336> ", 'XPD ' + (((conv5 * paladio) / EUR.data['venta'])), true)
                  .addField("Impuestos (75%) <:paladio:964717594223456336> ", 'XPD ' + ((((conv5 * paladio) / EUR.data['venta']) / 1.75)), true)


                return interaction.reply({ embeds: [embed] });

              })
              .catch((err) => {
                console.error('ERR', err)


              })
          })
          .catch((err) => {
            console.error('ERR', err)


          })
      }

      //Platino
      if (interaction.options.getSubcommand() === 'platino') {

        var conv5 = options.getNumber('ars')
        axios.get('https://api.exchangerate.host/latest')
          .then((pt) => {

            platino = pt.data['rates']['XPT']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Peso Argentino <:rightarrow:921907270747570247> Platino")
                  .setColor("#a9f8f7")
                  .setDescription("Pesos Argentinos expresado en Platino al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964739250899804180/convertirplatinoxd.png")
                  .addField("Monto Original :flag_ar:  ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra <:platinum:964717592923222017> ", 'XPD ' + (((conv5 * platino)) / EUR.data['compra']), true)
                  .addField("Venta <:platinum:964717592923222017> ", 'XPD ' + (((conv5 * platino) / EUR.data['venta'])), true)
                  .addField("Impuestos (75%) <:platinum:964717592923222017> ", 'XPD ' + ((((conv5 * platino) / EUR.data['venta']) / 1.75)), true)


                return interaction.reply({ embeds: [embed] });

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
  })


  //Fun



  //8ball


  //Piedra papel  o tijera

  client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) {
      return
    }

    /*
  await interaction.deferReply();
  await (10000);
  */
    const { commandName, options } = interaction
    if (commandName === 'piedrapapelotijera') {
      await interaction.deferReply();
      simplydjs.rps(interaction, {
        embedColor: "#05e841", // default: #075FFF
        timeoutEmbedColor: "#f00a15", // default: #c90000
        drawEmbedColor: "#e87a0c", // default: #075FFF
        winEmbedColor: "#e8dd05", // default: #06bd00
        embedFooter: "Piedra Papel o Tijera",
        credit: "FALSE",
        rockColor: "SECONDARY", // default: SECONDARY
        paperColor: "SECONDARY", // default: SECONDARY
        scissorsColor: "SECONDARY", // default: SECONDARY
        slash: true,
        userSlash: "usuario"
      });


    }
  })

  //Tateti

  client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) {
      return
    }


    const { commandName, options } = interaction
    if (commandName === 'tateti') {
      await interaction.deferReply();
      simplydjs.tictactoe(interaction, {
        slash: true,
        userSlash: "usuario"
      });

    }
  })



  //Utilidad

  //Calculadora

  client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) {
      return
    }

    const { commandName, options } = interaction
    if (commandName === 'calculadora') {

      await interaction.deferReply();
      simplydjs.calculator(interaction, {
        embedColor: "#0ce8dd",
        slash: true,
        credit: false
      });

    }
  })


  //Covid

})


client.login(process.env.token);
