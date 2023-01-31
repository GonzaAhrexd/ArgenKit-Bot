/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Dependencias de node
const Discord = require("discord.js");
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

//Intents requeridos
const { Client, Intents, MessageEmbed, reactions, Collection } = require('discord.js');
const client = new Client({
  intents: [Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_MESSAGES,
  ],
});
//Estado del bot
// client.setMaxListeners(50);
function presence() {
  client.user.setPresence({
    status: "online",
    activities: [{
      name: 'Bot creado por GonzaAhre | Prueba /help o /update',
      type: "PLAYING"
    }]
  })
}
//Command Handler
client.slashcommands = new Discord.Collection();
const slashcommandsFile = fs.readdirSync('./dist/commands').filter(file => file.endsWith("js"))
for (const file of slashcommandsFile) {
  const slash = require(`../dist/commands/${file}`)
  // console.log(`Slash  commands - ${file} cargado`)
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

  console.log("Bot funcionando y conectado a Discord ✅");
  presence();


  const guild = client.guilds.cache.get()
  let commands
  // const guildId = '740761148160213082' //guild server de pruebas
  // client.application.commands.set([]); //Resetear comandos

  
  /*Mostrar comandos
  const list = await client.application.commands.fetch()  
     console.log(list) */


  if (guild) {
    commands = guild.commands
  } else {
    commands = client.application?.commands
  }

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
