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
const translate = require("translate");//Translate

//Funciones
const impuestos = require("./functions/impuestos.js")

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
const slashcommandsFile = fs.readdirSync('./src/commands').filter(file => file.endsWith("js"))
for (const file of slashcommandsFile) {
  const slash = require(`./commands/${file}`)
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



  //Convertir

  commands?.create({
    name: 'convertirdivisa',
    description: 'Convierte los datos de una divisa a pesos',
    options: [
      {
        type: "SUB_COMMAND",
        name: "dolar",
        description: "Convierte de Dolar Estadounidense a Pesos Argentinos",
        options: [
          {
            name: 'usd',
            description: 'Monto en dólares.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "dolarblue",
        description: "Convierte de Dólar Estadounidense a Pesos Argentinos al precio del mercado paralelo",
        options: [
          {
            name: 'usd',
            description: 'Monto en dólares.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "euro",
        description: "Convierte de Euro a Pesos Argentinos",
        options: [
          {
            name: 'eur',
            description: 'Monto en euros.',
            type: "NUMBER",
            required: true
          }
        ]

      },
      {
        type: "SUB_COMMAND",
        name: "real",
        description: "Convierte de Real Brasileño a Pesos Argentinos",
        options: [
          {
            name: 'brl',
            description: 'Monto en reales.',
            type: "NUMBER",
            required: true
          }
        ]

      },
      {
        type: "SUB_COMMAND",
        name: "yen",
        description: "Convierte de Yen Japonés a Pesos Argentinos",
        options: [
          {
            name: 'jpy',
            description: 'Monto en yenes.',
            type: "NUMBER",
            required: true
          }
        ]

      },
      {
        type: "SUB_COMMAND",
        name: "libra",
        description: "Convierte de Libra Esterlina a Pesos Argentinos",
        options: [
          {
            name: 'gbp',
            description: 'Monto en libras.',
            type: "NUMBER",
            required: true
          }
        ]

      },
      {
        type: "SUB_COMMAND",
        name: "rublo",
        description: "Convierte de Rublo Ruso a Pesos Argentinos",
        options: [
          {
            name: 'rub',
            description: 'Monto en rublos.',
            type: "NUMBER",
            required: true
          }
        ]


      },
      {
        type: "SUB_COMMAND",
        name: "dolarcanadiense",
        description: "Convierte de Dólar Canadiense a Pesos Argentinos",
        options: [
          {
            name: 'cad',
            description: 'Monto en dólares canadienses.',
            type: "NUMBER",
            required: true
          }
        ]


      },

      {
        type: "SUB_COMMAND",
        name: "dolaraustraliano",
        description: "Convierte de Dólar Australiano a Pesos Argentinos",
        options: [
          {
            name: 'aud',
            description: 'Monto en dólares australianos.',
            type: "NUMBER",
            required: true
          }
        ]

      },
      {
        type: "SUB_COMMAND",
        name: "dolarneozelandes",
        description: "Convierte de Dólar Neozelandés a Pesos Argentinos",
        options: [
          {
            name: 'nzd',
            description: 'Monto en dólares neozelandeses.',
            type: "NUMBER",
            required: true
          }
        ]


      },
      {
        type: "SUB_COMMAND",
        name: "pesomexicano",
        description: "Convierte de Pesos Mexicanos a Pesos Argentinos",
        options: [
          {
            name: 'mxn',
            description: 'Monto en pesos mexicanos.',
            type: "NUMBER",
            required: true
          }
        ]

      },
      {
        type: "SUB_COMMAND",
        name: "pesochileno",
        description: "Convierte de Pesos Chilenos a Pesos Argentinos",
        options: [
          {
            name: 'clp',
            description: 'Monto en pesos chilenos.',
            type: "NUMBER",
            required: true
          }
        ]

      },
      {
        type: "SUB_COMMAND",
        name: "pesouruguayo",
        description: "Convierte de Pesos Uruguayo a Pesos Argentinos",
        options: [
          {
            name: 'uyu',
            description: 'Monto en pesos uruguayos.',
            type: "NUMBER",
            required: true
          }
        ]

      },
      {
        type: "SUB_COMMAND",
        name: "pesocolombiano",
        description: "Convierte de Pesos Colombianos a Pesos Argentinos",
        options: [
          {
            name: 'cop',
            description: 'Monto en pesos colombianos.',
            type: "NUMBER",
            required: true
          }
        ]

      },
      {
        type: "SUB_COMMAND",
        name: "boliviano",
        description: "Convierte de Bolivianos a Pesos Argentinos",
        options: [
          {
            name: 'bob',
            description: 'Monto en boliviano.',
            type: "NUMBER",
            required: true
          }
        ]

      },
      {
        type: "SUB_COMMAND",
        name: "sol",
        description: "Convierte de Soles Peruanos a Pesos Argentinos",
        options: [
          {
            name: 'pen',
            description: 'Monto en sol peruano.',
            type: "NUMBER",
            required: true
          }
        ]

      },

      {
        type: "SUB_COMMAND",
        name: "guarani",
        description: "Convierte de Guaranies Paragauyos a Pesos Argentinos",
        options: [
          {
            name: 'pyg',
            description: 'Monto en guarani.',
            type: "NUMBER",
            required: true
          }
        ]

      },
      {
        type: "SUB_COMMAND",
        name: "bolivar",
        description: "Convierte de Bolivar Digital Venezolano a Pesos Argentinos",
        options: [
          {
            name: 'ved',
            description: 'Monto en bolivares.',
            type: "NUMBER",
            required: true
          }
        ]

      },
      {
        type: "SUB_COMMAND",
        name: "yuan",
        description: "Convierte de Renminbi Chinos a Pesos Argentinos",
        options: [
          {
            name: 'cny',
            description: 'Monto en renminbi.',
            type: "NUMBER",
            required: true
          }
        ]

      },
      {
        type: "SUB_COMMAND",
        name: "rupia",
        description: "Convierte de Rupias Indias a Pesos Argentinos",
        options: [
          {
            name: 'inr',
            description: 'Monto en rupia.',
            type: "NUMBER",
            required: true
          }
        ]

      },
      {
        type: "SUB_COMMAND",
        name: "won",
        description: "Convierte de Won Surcoreano a Pesos Argentinos",
        options: [
          {
            name: 'krw',
            description: 'Monto en won surcoreano.',
            type: "NUMBER",
            required: true
          }
        ]

      },

      {
        type: "SUB_COMMAND",
        name: "franco",
        description: "Convierte de Francos suizos a Pesos Argentinos",
        options: [
          {
            name: 'chf',
            description: 'Monto en franco.',
            type: "NUMBER",
            required: true
          }
        ]

      },

      {
        type: "SUB_COMMAND",
        name: "lira",
        description: "Convierte de Lira Turca a Pesos Argentinos",
        options: [
          {
            name: 'try',
            description: 'Monto en lira.',
            type: "NUMBER",
            required: true
          }
        ]
      }
    ]
  })


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



  //Peso a

  commands?.create({
    name: 'pesoa',
    description: 'Convierte de pesos a otras divisas',
    options: [
      {
        type: "SUB_COMMAND",
        name: "dolar",
        description: "Convierte de Pesos Argentinos a Dolar Estadounidense",
        options: [
          {
            name: 'ars',
            description: 'Monto en pesos argentinos.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "dolarblue",
        description: "Convierte de Pesos Argentinos a Dólar Estadounidense al precio del mercado paralelo",
        options: [
          {
            name: 'ars',
            description: 'Monto en pesos argentinos.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "euro",
        description: "Convierte de Euro a Pesos Argentinos",
        options: [
          {
            name: 'ars',
            description: 'Monto en pesos argentinos.',
            type: "NUMBER",
            required: true
          }
        ]

      },
      {
        type: "SUB_COMMAND",
        name: "real",
        description: "Convierte de Pesos Argentinos a Real Brasileño",
        options: [
          {
            name: 'ars',
            description: 'Monto en pesos argentinos.',
            type: "NUMBER",
            required: true
          }
        ]

      },
      {
        type: "SUB_COMMAND",
        name: "yen",
        description: "Convierte de Pesos Argentinos a Yen Japonés ",
        options: [
          {
            name: 'ars',
            description: 'Monto en pesos argentinos.',
            type: "NUMBER",
            required: true
          }
        ]

      },
      {
        type: "SUB_COMMAND",
        name: "libra",
        description: "Convierte de Pesos Argentinos a Libra Esterlina",
        options: [
          {
            name: 'ars',
            description: 'Monto en pesos argentinos.',
            type: "NUMBER",
            required: true
          }
        ]

      },
      {
        type: "SUB_COMMAND",
        name: "rublo",
        description: "Convierte de Pesos Argentinos a Rublo Ruso",
        options: [
          {
            name: 'ars',
            description: 'Monto en pesos argentinos.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "dolarcanadiense",
        description: "Convierte de Pesos Argentinos a Dólar Canadiense",
        options: [
          {
            name: 'ars',
            description: 'Monto en pesos argentinos.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "dolaraustraliano",
        description: "Convierte de Pesos Argentinos a Dólar Australiano",
        options: [
          {
            name: 'ars',
            description: 'Monto en pesos argentinos.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "dolarneozelandes",
        description: "Convierte de Pesos Argentinos a Dólar Neozelandés",
        options: [
          {
            name: 'ars',
            description: 'Monto en pesos argentinos.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "pesomexicano",
        description: "Convierte de Pesos Argentinos a Pesos Mexicanos",
        options: [
          {
            name: 'ars',
            description: 'Monto en pesos argentinos.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "pesochileno",
        description: "Convierte de Pesos Argentinos a Pesos Chilenos",
        options: [
          {
            name: 'ars',
            description: 'Monto en pesos argentinos.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "pesouruguayo",
        description: "Convierte de Pesos Argentinos a Pesos Uruguayo",
        options: [
          {
            name: 'ars',
            description: 'Monto en  pesos argentinos.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "pesocolombiano",
        description: "Convierte de Pesos Argentinos a Pesos Colombianos",
        options: [
          {
            name: 'ars',
            description: 'Monto en pesos argentinos.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "boliviano",
        description: "Convierte de Pesos Argentinos a Bolivianos",
        options: [
          {
            name: 'ars',
            description: 'Monto en pesos argentinos.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "sol",
        description: "Convierte de Pesos Argentinos a Soles Peruanos",
        options: [
          {
            name: 'ars',
            description: 'Monto en pesos argentinos.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "guarani",
        description: "Convierte de Pesos Argentinos a Guaranies Paragauyos",
        options: [
          {
            name: 'ars',
            description: 'Monto en pesos argentinos.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "bolivar",
        description: "Convierte de Pesos Argentinos a Bolivar Digital Venezolano",
        options: [
          {
            name: 'ars',
            description: 'Monto en pesos argentinos.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "yuan",
        description: "Convierte de Pesos Argentinos a Renminbi Chinos",
        options: [
          {
            name: 'ars',
            description: 'Monto en pesos argentinos.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "rupia",
        description: "Convierte de Pesos Argentinos a Rupias Indias",
        options: [
          {
            name: 'ars',
            description: 'Monto en pesos argentinos.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "won",
        description: "Convierte de Pesos Argentinos a Won Surcoreano",
        options: [
          {
            name: 'ars',
            description: 'Monto en pesos argentinos.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "franco",
        description: "Convierte de Pesos Argentinos a Francos suizos",
        options: [
          {
            name: 'ars',
            description: 'Monto en pesos argentinos.',
            type: "NUMBER",
            required: true
          }
        ]
      },
      {
        type: "SUB_COMMAND",
        name: "lira",
        description: "Convierte de Pesos Argentinos a Lira Turca",
        options: [
          {
            name: 'ars',
            description: 'Monto en pesos argentinos.',
            type: "NUMBER",
            required: true
          }
        ]
      }
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

  client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) {
      return
    }

    const { commandName, options } = interaction
    if (commandName == "convertirdivisa") {
      if (interaction.options.getSubcommand() === 'dolar') {

        var conv2 = options.getNumber('usd')
        axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/oficial')
          .then((oficial) => {
            const embed1 = new Discord.MessageEmbed()

              .setTitle("Dólar estadounidense <:rightarrow:921907270747570247> Peso Argentino")
              .setColor("GREEN")
              .setDescription("Dólares estadounidenses expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%))")
              .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921906513453408286/dolarapeso.png")
              .addField("Monto original :dollar: ", 'USD$ ' + currencyFormatter.format(conv2, { locale: 'es-ES', code: ' ' }))
              .addField("Compra :flag_ar:", 'ARS$ ' + currencyFormatter.format((conv2 * oficial.data['compra']), { locale: 'es-ES', code: ' ' }), true)
              .addField("Venta :flag_ar:", 'ARS$ ' + currencyFormatter.format((conv2 * oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)
              .addField("Impuestos (75%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv2 * oficial.data['venta']) * 1.75), { locale: 'es-ES', code: ' ' }), true)

            const embed2 = new Discord.MessageEmbed()
              .setTitle("Dólar estadounidense <:rightarrow:921907270747570247> Peso Argentino")
              .setColor("GREEN")
              .setDescription("Dólares estadounidenses expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (IVA (21%), PAIS (8%) y adelanto de ganancias (45%)) \n Usualmente conocido como dólar streaming")
              .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921906513453408286/dolarapeso.png")
              .addField("Monto original :dollar: ", 'USD$ ' + currencyFormatter.format(conv2, { locale: 'es-ES', code: ' ' }))
              .addField("Compra :flag_ar:", 'ARS$ ' + currencyFormatter.format((conv2 * oficial.data['compra']), { locale: 'es-ES', code: ' ' }), true)
              .addField("Venta :flag_ar:", 'ARS$ ' + currencyFormatter.format((conv2 * oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)
              .addField("Impuestos (74%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv2 * oficial.data['venta']) * 1.74), { locale: 'es-ES', code: ' ' }), true)




            const button1 = new MessageButton()
              .setCustomId("previousbtn")
              .setLabel("🏦 Dólar solidario (75%)")
              .setStyle("DANGER");

            const button2 = new MessageButton()
              .setCustomId("nextbtn")
              .setLabel("💳 Dólar streaming (74%)")
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

      if (interaction.options.getSubcommand() === 'dolarblue') {

        var conv2 = options.getNumber('usd')

        axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolarblue')
          .then((blue) => {
            const embed = new Discord.MessageEmbed()
              .setTitle("Dólar Blue  <:rightarrow:921907270747570247> Peso Argentino")
              .setColor("BLUE")
              .setDescription("Dólar estadounidense expresado en pesos argentinos a precio del mercado paralelo (Dólar blue)")
              .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922553537978855524/blueapeso.png")
              .addField("Monto Original :dollar: ", 'USD$ ' + currencyFormatter.format(conv2, { locale: 'es-ES', code: ' ' }))
              .addField("Compra:flag_ar: ", 'ARS$ ' + currencyFormatter.format((conv2 * blue.data['compra']), { locale: 'es-ES', code: ' ' }), true)
              .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format((conv2 * blue.data['venta']), { locale: 'es-ES', code: ' ' }), true)

            return interaction.reply({ embeds: [embed] });

          })
          .catch((err) => {
            console.error('ERR', err)


          })


      }

      if (interaction.options.getSubcommand() === 'euro') {

        var conv3 = options.getNumber('eur')

        axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
          .then((euro) => {
            const embed = new Discord.MessageEmbed()
              .setTitle("Euro <:rightarrow:921907270747570247> Peso Argentino")
              .setColor("#083499")
              .setDescription("Euro expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%))")
              .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922548848826654801/euroapeso.png")
              .addField("Monto Original :euro: ", 'EUR€ ' + currencyFormatter.format(conv3, { locale: 'es-ES', code: ' ' }))
              .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format((conv3 * euro.data['compra']), { locale: 'es-ES', code: ' ' }), true)
              .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format((conv3 * euro.data['venta']), { locale: 'es-ES', code: ' ' }), true)
              .addField("Impuestos (75%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv3 * euro.data['venta']) * 1.75), { locale: 'es-ES', code: ' ' }), true)

            return interaction.reply({ embeds: [embed] });

          })
          .catch((err) => {
            console.error('ERR', err)


          })


      }

      if (interaction.options.getSubcommand() === 'real') {

        var conv4 = options.getNumber('brl')


        axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/real/oficial')
          .then((real) => {
            const embed = new Discord.MessageEmbed()
              .setTitle("Real Brasileño <:rightarrow:921907270747570247> Peso Argentino")
              .setColor("#6da545")
              .setDescription("Real brasileño expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
              .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922553925243117698/realapeso.png")
              .addField("Monto Original :flag_br: ", 'BRL R$ ' + currencyFormatter.format(conv4, { locale: 'es-ES', code: ' ' }))
              .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format((conv4 * real.data['compra']), { locale: 'es-ES', code: ' ' }), true)
              .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format((conv4 * real.data['venta']), { locale: 'es-ES', code: ' ' }), true)
              .addField("Impuestos (75%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv4 * real.data['venta']) * 1.75), { locale: 'es-ES', code: ' ' }), true)

            return interaction.reply({ embeds: [embed] });

          })
          .catch((err) => {
            console.error('ERR', err)


          })



      }

      if (interaction.options.getSubcommand() === 'yen') {

        var conv5 = options.getNumber('jpy')
        axios.get('https://api.exchangerate.host/latest')
          .then((YEN) => {

            yen1 = YEN.data['rates']['JPY']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Yen Japonés <:rightarrow:921907270747570247> Peso Argentino ")
                  .setColor("#FDFD0D")
                  .setDescription("Yen japonés expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922556125809872936/yenapeso_1.png")
                  .addField("Precio Original :yen: ", 'JPY¥ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / yen1)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / yen1) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuestos (75%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5 / yen1) * EUR.data['venta']) * 1.75), { locale: 'es-ES', code: ' ' }), true)

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
      if (interaction.options.getSubcommand() === 'libra') {
        var conv5 = options.getNumber('gbp')
        axios.get('https://api.exchangerate.host/latest')
          .then((LIBRA) => {

            libra = LIBRA.data['rates']['GBP']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Libra Esterlina <:rightarrow:921907270747570247> Peso Argentino")
                  .setColor("#D605F6")
                  .setDescription("Libra Esterlina expresada en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922561706838868049/libraapeso.png")
                  .addField("Monto Original :pound: ", 'GBP£ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / libra)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / libra) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuestos (75%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5 / libra) * EUR.data['venta']) * 1.75), { locale: 'es-ES', code: ' ' }), true)

                return interaction.reply({ embeds: [embed] });

              })
              .catch((err) => {
                console.error('ERR', err)


              })
          })
          .catch((err) => {
            console.error('ERR', err)


          })


        //Rublo

      }
      if (interaction.options.getSubcommand() === 'rublo') {
        var conv5 = options.getNumber('rub')
        axios.get('https://api.exchangerate.host/latest')
          .then((RUBLO) => {

            rublo = RUBLO.data['rates']['RUB']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Rublo Ruso <:rightarrow:921907270747570247> Peso Argentino")
                  .setColor("RED")
                  .setDescription("Rublo ruso expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928344880995008602/rubloapeso.png")
                  .addField("Monto original <:rublo:913901788531417229> ", 'RUB₽ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / rublo)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / rublo) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuestos (75%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5 / rublo) * EUR.data['venta']) * 1.75), { locale: 'es-ES', code: ' ' }), true)

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

      if (interaction.options.getSubcommand() === 'dolarcanadiense') {
        var conv5 = options.getNumber('cad')
        axios.get('https://api.exchangerate.host/latest')
          .then((CAD) => {

            cad = CAD.data['rates']['CAD']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Dólar Canadiense <:rightarrow:921907270747570247> Peso Argentino")
                  .setColor("#fc0201")
                  .setDescription("Dólar canadiense expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928345276857606194/cadapeso.png")
                  .addField("Monto original :flag_ca: ", 'CAD$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / cad)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / cad) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuestos (75%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5 / cad) * EUR.data['venta']) * 1.75), { locale: 'es-ES', code: ' ' }), true)


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

      if (interaction.options.getSubcommand() === 'dolaraustraliano') {

        var conv5 = options.getNumber('aud')
        axios.get('https://api.exchangerate.host/latest')
          .then((AUD) => {

            dolar = AUD.data['rates']['AUD']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Dólar Australiano <:rightarrow:921907270747570247> Peso Argentino")
                  .setColor("#000346")
                  .setDescription("Dólar australiano expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928345614805246013/audapeso.png")
                  .addField("Monto original :flag_au: ", 'AUD$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / dolar)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / dolar) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuestos (75%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5 / dolar) * EUR.data['venta']) * 1.75), { locale: 'es-ES', code: ' ' }), true)


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

      if (interaction.options.getSubcommand() === 'dolarneozelandes') {

        var conv5 = options.getNumber('nzd')

        axios.get('https://api.exchangerate.host/latest')

          .then((NZD) => {

            dolar = NZD.data['rates']['NZD']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Dólar Neozelandés <:rightarrow:921907270747570247> Peso Argentino")
                  .setColor("#000346")
                  .setDescription("Dólar neozelandés expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928348263235604560/nzapeso.png")
                  .addField("Monto original :flag_nz: ", 'NZD$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / dolar)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / dolar) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuetos (75%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5 / dolar) * EUR.data['venta']) * 1.75), { locale: 'es-ES', code: ' ' }), true)

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

      if (interaction.options.getSubcommand() === 'pesomexicano') {
        var conv5 = options.getNumber('mxn')
        axios.get('https://api.exchangerate.host/latest')
          .then((MXN) => {

            mxn = MXN.data['rates']['MXN']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Peso Méxicano <:rightarrow:921907270747570247> Peso Argentino")
                  .setColor("#24944c")
                  .setDescription("Peso méxicano expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928349418023968918/mxnapeso.png")
                  .addField("Monto original :flag_mx: ", 'MXN$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / mxn)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / mxn) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuesto (75%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5 / mxn) * EUR.data['venta']) * 1.75), { locale: 'es-ES', code: ' ' }), true)

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
      if (interaction.options.getSubcommand() === 'pesochileno') {
        var conv5 = options.getNumber('clp')

        axios.get('https://api.exchangerate.host/latest')
          .then((CLP) => {

            clp = CLP.data['rates']['CLP']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Peso Chileno <:rightarrow:921907270747570247> Peso Argentino")
                  .setColor("#fc0201")
                  .setDescription("Peso chileno expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928350035324842035/chileapeso.png")
                  .addField("Monto original :flag_cl: ", 'CLP$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / clp)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / clp) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuestos (75%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5 / clp) * EUR.data['venta']) * 1.75), { locale: 'es-ES', code: ' ' }), true)

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

      if (interaction.options.getSubcommand() === 'pesouruguayo') {
        var conv5 = options.getNumber('uyu')
        axios.get('https://api.exchangerate.host/latest')
          .then((UYU) => {

            peso = UYU.data['rates']['UYU']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Peso Uruguayo <:rightarrow:921907270747570247> Peso Argentino")
                  .setColor("BLUE")
                  .setDescription("Peso uruguayo expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928350035744288878/uyuapeso.png")
                  .addField("Monto original :flag_uy: ", 'UYU$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / peso)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / peso) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuestos (75%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5 / peso) * EUR.data['venta']) * 1.75), { locale: 'es-ES', code: ' ' }), true)

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

      if (interaction.options.getSubcommand() === 'pesocolombiano') {
        var conv5 = options.getNumber('cop')
        axios.get('https://api.exchangerate.host/latest')
          .then((COL) => {

            pesos = COL.data['rates']['COP']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Peso Colombiano <:rightarrow:921907270747570247> Peso Argentino")
                  .setColor("#fecb04")
                  .setDescription("Peso colombiano expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928349550970822716/copapeso.png")
                  .addField("Monto original :flag_co: ", 'COP$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / pesos)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / pesos) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuestos (75%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5 / pesos) * EUR.data['venta']) * 1.75), { locale: 'es-ES', code: ' ' }), true)

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

      if (interaction.options.getSubcommand() === 'boliviano') {
        var conv5 = options.getNumber('bob')
        axios.get('https://api.exchangerate.host/latest')
          .then((BOB) => {

            peso = BOB.data['rates']['BOB']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Boliviano <:rightarrow:921907270747570247> Peso Argentino")
                  .setColor("#6da544")
                  .setDescription("Boliviano expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928352180296122388/bolivianoapeso.png")
                  .addField("Monto original :flag_bo: ", 'BOB Bs. ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / peso)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / peso) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuestos (75%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5 / peso) * EUR.data['venta']) * 1.75), { locale: 'es-ES', code: ' ' }), true)

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

      if (interaction.options.getSubcommand() === 'sol') {

        var conv5 = options.getNumber('pen')
        axios.get('https://api.exchangerate.host/latest')
          .then((PEN) => {

            sol = PEN.data['rates']['PEN']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Sol Peruano <:rightarrow:921907270747570247> Peso Argentino")
                  .setColor("#cd0400")
                  .setDescription("Sol peruano expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928352555736633374/solapeso.png")
                  .addField("Monto Original :flag_pe: ", 'PEN S/ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / sol)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / sol) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuestos (75%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5 / sol) * EUR.data['venta']) * 1.75), { locale: 'es-ES', code: ' ' }), true)

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
      if (interaction.options.getSubcommand() === 'guarani') {
        var conv5 = options.getNumber('pyg')
        axios.get('https://api.exchangerate.host/latest')
          .then((PYG) => {

            guarani = PYG.data['rates']['PYG']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Guaraní paraguayo <:rightarrow:921907270747570247> Peso Argentino")
                  .setColor("#d80027")
                  .setDescription("Guarani paraguayo expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928353654342299709/guaraniapeso.png")
                  .addField("Monto original :flag_py: ", 'PYG₲ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / guarani)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / guarani) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuestos (75%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5 / guarani) * EUR.data['venta']) * 1.75), { locale: 'es-ES', code: ' ' }), true)

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

      if (interaction.options.getSubcommand() === 'bolivar') {
        var conv5 = options.getNumber('ved')
        axios.get('https://api.exchangerate.host/latest')
          .then((VES) => {

            bolivar = VES.data['rates']['VES']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Bolivar Digital Venezolano <:rightarrow:921907270747570247> Peso Argentino")
                  .setColor("RED")
                  .setDescription("Bolivar digital venezolano expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%))")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928354779887960105/bolivarapeso.png")
                  .addField("Monto Original :flag_ve: ", 'VED B$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / bolivar)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / bolivar) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuestos (75%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5 / bolivar) * EUR.data['venta']) * 1.75), { locale: 'es-ES', code: ' ' }), true)

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

      if (interaction.options.getSubcommand() === 'yuan') {
        var conv5 = options.getNumber('cny')
        axios.get('https://api.exchangerate.host/latest')
          .then((CNY) => {

            yuan = CNY.data['rates']['CNY']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Renminbi chino <:rightarrow:921907270747570247> Peso Argentino")
                  .setColor("#cd0400")
                  .setDescription("Renminbi (yuan) chino expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928356456087048234/yuanapeso.png")
                  .addField("PRECIO ORIGINAL :flag_cn: ", 'CNY¥ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("COMPRA :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / yuan)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("VENTA :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / yuan) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("IMPUESTOS (75%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5 / yuan) * EUR.data['venta']) * 1.75), { locale: 'es-ES', code: ' ' }), true)

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

      if (interaction.options.getSubcommand() === 'rupia') {
        var conv5 = options.getNumber('inr')
        axios.get('https://api.exchangerate.host/latest')
          .then((INR) => {

            rupia = INR.data['rates']['INR']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Rupia India <:rightarrow:921907270747570247> Peso Argentino")
                  .setColor("#fc9836")
                  .setDescription("Rupia india expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928356536307314718/indiaapeso.png")
                  .addField("Precio original :flag_in: ", 'INR₹ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / rupia)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / rupia) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuestos (75%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5 / rupia) * EUR.data['venta']) * 1.75), { locale: 'es-ES', code: ' ' }), true)

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

      if (interaction.options.getSubcommand() === 'won') {
        var conv5 = options.getNumber('krw')
        axios.get('https://api.exchangerate.host/latest')
          .then((KRW) => {

            won = KRW.data['rates']['KRW']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Won Surcoreano <:rightarrow:921907270747570247> Peso Argentino")
                  .setColor("#FFFFFF")
                  .setDescription("Won surcoreano expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928356536735117312/wonapeso.png")
                  .addField("Monto original :flag_kr: ", 'KRW ₩ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / won)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / won) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuestos (75%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5 / won) * EUR.data['venta']) * 1.75), { locale: 'es-ES', code: ' ' }), true)

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

      if (interaction.options.getSubcommand() === 'franco') {

        var conv5 = options.getNumber('chf')
        axios.get('https://api.exchangerate.host/latest')
          .then((suizo) => {
            franco = suizo.data['rates']['CHF']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Franco Suizo <:rightarrow:921907270747570247> Peso Argentino")
                  .setColor("#d80027")
                  .setDescription("Franco suizo expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/930966649710985286/francoapeso.png")
                  .addField("Monto original :flag_ch: ", 'CHF Fr. ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / franco)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / franco) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuestos (75%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5 / franco) * EUR.data['venta']) * 1.75), { locale: 'es-ES', code: ' ' }), true)

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

      if (interaction.options.getSubcommand() === 'lira') {

        var conv5 = options.getNumber('try')
        axios.get('https://api.exchangerate.host/latest')
          .then((TRY) => {

            lira = TRY.data['rates']['TRY']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Lira turca <:rightarrow:921907270747570247> Peso Argentino")
                  .setColor("#d70224")
                  .setDescription("Lira turca expresada en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/930966650122014740/liraapeso.png")
                  .addField("Monto original :flag_tr: ", 'TRY₺ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / lira)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / lira) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuestos (75%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5 / lira) * EUR.data['venta']) * 1.75), { locale: 'es-ES', code: ' ' }), true)

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











  //Peso  a

  client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) {
      return
    }

    const { commandName, options } = interaction
    if (commandName == "pesoa") {

      if (interaction.options.getSubcommand() === 'dolar') {
        var conv2 = options.getNumber('ars')
        axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolar/oficial')
          .then((oficial) => {
            const embed = new Discord.MessageEmbed()
              .setTitle(" Peso Argentino  <:rightarrow:921907270747570247> Dólar estadounidense")
              .setColor("GREEN")
              .setDescription("Pesos argentinos expresados en dolares estadounideneses a tasa oficial + impuestos (PAIS (30%) y adelanto de ganancias (45%))")
              .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921906513453408286/dolarapeso.png")
              .addField("Monto Original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv2, { locale: 'es-ES', code: ' ' }))
              .addField("Compra :dollar:", 'USD$ ' + currencyFormatter.format((conv2 / oficial.data['compra']), { locale: 'es-ES', code: ' ' }), true)
              .addField("Venta :dollar:", 'USD$ ' + currencyFormatter.format((conv2 / oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)
              .addField("Impuestos :dollar: ", 'USD$ ' + currencyFormatter.format(((conv2 / oficial.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)

            return interaction.reply({ embeds: [embed] });

          })
          .catch((err) => {
            console.error('ERR', err)


          })

      }

      if (interaction.options.getSubcommand() === 'dolarblue') {
        var conv2 = options.getNumber('ars')
        axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/dolarblue')
          .then((blue) => {
            const embed = new Discord.MessageEmbed()
              .setTitle(" Peso Argentino  <:rightarrow:921907270747570247> Dólar Blue")
              .setColor("BLUE")
              .setDescription("Pesos argentinos expresados en dólares estadounidenses a precio del mercado paralelo (Dólar blue)")
              .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922553537978855524/blueapeso.png")
              .addField("Monto Original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv2, { locale: 'es-ES', code: ' ' }))
              .addField("Compra :dollar:", 'USD$ ' + currencyFormatter.format((conv2 / blue.data['compra']), { locale: 'es-ES', code: ' ' }), true)
              .addField("Venta :dollar:", 'USD$ ' + currencyFormatter.format((conv2 / blue.data['venta']), { locale: 'es-ES', code: ' ' }), true)

            return interaction.reply({ embeds: [embed] });

          })
          .catch((err) => {
            console.error('ERR', err)


          })

      }

      if (interaction.options.getSubcommand() === 'euro') {
        var conv2 = options.getNumber('ars')
        axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
          .then((euro) => {
            const embed = new Discord.MessageEmbed()
              .setTitle(" Peso Argentino  <:rightarrow:921907270747570247> Euro ")
              .setColor("#083499")
              .setDescription("Pesos argentinos expresados en euros a tasa oficial + impuestos (PAIS (30%) y adelanto de ganancias (45%)).")
              .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922548848826654801/euroapeso.png")
              .addField("Monto Original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv2, { locale: 'es-ES', code: ' ' }))
              .addField("Compra :euro:", 'EUR€  ' + currencyFormatter.format((conv2 / euro.data['compra']), { locale: 'es-ES', code: ' ' }), true)
              .addField("Venta :euro:", 'EUR€ ' + currencyFormatter.format((conv2 / euro.data['venta']), { locale: 'es-ES', code: ' ' }), true)
              .addField("Impuestos :euro: ", 'EUR€  ' + currencyFormatter.format(((conv2 / euro.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)

            return interaction.reply({ embeds: [embed] });

          })
          .catch((err) => {
            console.error('ERR', err)


          })

      }

      if (interaction.options.getSubcommand() === 'real') {
        var conv2 = options.getNumber('ars')
        axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/real/oficial')
          .then((real) => {
            const embed = new Discord.MessageEmbed()
              .setTitle(" Peso Argentino  <:rightarrow:921907270747570247> Real Brasileño")
              .setColor("#6da545")
              .setDescription("Pesos argentinos expresados en reales brasileños a tasa oficial + impuestos (PAIS (30%) y adelanto de ganancias (45%)).")
              .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922553925243117698/realapeso.png")
              .addField("Monto Original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv2, { locale: 'es-ES', code: ' ' }))
              .addField("Compra :flag_br:", 'BRL R$ ' + currencyFormatter.format((conv2 / real.data['compra']), { locale: 'es-ES', code: ' ' }), true)
              .addField("Venta :flag_br:", 'BRL R$ ' + currencyFormatter.format((conv2 / real.data['venta']), { locale: 'es-ES', code: ' ' }), true)
              .addField("Impuestos :flag_br: ", 'BRL R$ ' + currencyFormatter.format(((conv2 / real.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)

            return interaction.reply({ embeds: [embed] });

          })
          .catch((err) => {
            console.error('ERR', err)


          })

      }


      if (interaction.options.getSubcommand() === 'yen') {
        var conv5 = options.getNumber('ars')
        axios.get('https://api.exchangerate.host/latest')
          .then((YEN) => {

            yen1 = YEN.data['rates']['JPY']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Peso Argentino <:rightarrow:921907270747570247> Yen Japonés")
                  .setColor("#FDFD0D")
                  .setDescription("Pesos argentinos expresados en Yen japonés al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922556125809872936/yenapeso_1.png")
                  .addField("Monto Original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra :yen: ", 'JPY¥ ' + currencyFormatter.format(((conv5 * yen1)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :yen: ", 'JPY¥ ' + currencyFormatter.format(((conv5 * yen1) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuestos (75%) :yen: ", 'JPY¥ ' + currencyFormatter.format((((conv5 * yen1) / EUR.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)

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


      if (interaction.options.getSubcommand() === 'libra') {
        var conv5 = options.getNumber('ars')
        axios.get('https://api.exchangerate.host/latest')
          .then((LIBRA) => {

            libra1 = LIBRA.data['rates']['GBP']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Peso Argentino <:rightarrow:921907270747570247> Libra Esterlina")
                  .setColor("#D605F6")
                  .setDescription("Pesos argentinos expresado en Libras esterlinas al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922561706838868049/libraapeso.png")
                  .addField("Monto Original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra :pound: ", 'GBP£ ' + currencyFormatter.format(((conv5 * libra1)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :pound: ", 'GBP£ ' + currencyFormatter.format(((conv5 * libra1) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuestos (75%) :pound: ", 'GBP£ ' + currencyFormatter.format((((conv5 * libra1) / EUR.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)

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

      if (interaction.options.getSubcommand() === 'rublo') {
        var conv5 = options.getNumber('ars')
        axios.get('https://api.exchangerate.host/latest')
          .then((RUBLO) => {

            rublo = RUBLO.data['rates']['RUB']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Peso Argentino <:rightarrow:921907270747570247> Rublo Ruso")
                  .setColor("RED")
                  .setDescription("Pesos argentinos expresado en Rublos rusos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928344880995008602/rubloapeso.png")
                  .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra :flag_ru: ", 'RUB₽ ' + currencyFormatter.format(((conv5 * rublo)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_ru: ", 'RUB₽ ' + currencyFormatter.format(((conv5 * rublo) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuestos (75%) :flag_ru: ", 'RUB₽ ' + currencyFormatter.format((((conv5 * rublo) / EUR.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)

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


      if (interaction.options.getSubcommand() === 'dolarcanadiense') {
        var conv5 = options.getNumber('ars')
        axios.get('https://api.exchangerate.host/latest')
          .then((CAD) => {

            canadiense = CAD.data['rates']['CAD']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Peso Argentino <:rightarrow:921907270747570247> Dólar Canadiense")
                  .setColor("#fc0201")
                  .setDescription("Pesos argentinos expresado en dólares canadienses al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928345276857606194/cadapeso.png")
                  .addField("PRECIO ORIGINAL :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("COMPRA :flag_ca: ", 'CAD$ ' + currencyFormatter.format(((conv5 * canadiense)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("VENTA :flag_ca: ", 'CAD$ ' + currencyFormatter.format(((conv5 * canadiense) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("IMPUESTOS (75%) :flag_ca: ", 'CAD$ ' + currencyFormatter.format((((conv5 * canadiense) / EUR.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)

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

      if (interaction.options.getSubcommand() === 'dolaraustraliano') {
        var conv5 = options.getNumber('ars')
        axios.get('https://api.exchangerate.host/latest')
          .then((AUD) => {

            dolar = AUD.data['rates']['AUD']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Peso Argentino <:rightarrow:921907270747570247> Dólar Australiano")
                  .setColor("#000346")
                  .setDescription("Pesos argentinos expresado en dólares australianos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928345614805246013/audapeso.png")
                  .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra :flag_au: ", 'AUD$ ' + currencyFormatter.format(((conv5 * dolar)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_au: ", 'AUD$ ' + currencyFormatter.format(((conv5 * dolar) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuestos (75%) :flag_au: ", 'AUD$ ' + currencyFormatter.format((((conv5 * dolar) / EUR.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)


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

      if (interaction.options.getSubcommand() === 'dolarneozelandes') {
        var conv5 = options.getNumber('ars')
        axios.get('https://api.exchangerate.host/latest')
          .then((NZD) => {

            dolar = NZD.data['rates']['NZD']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Peso Argentino <:rightarrow:921907270747570247> Dólar Neozelandes")
                  .setColor("#000346")
                  .setDescription("Pesos argentinos expresado en dólares neozelandeses al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928348263235604560/nzapeso.png")
                  .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compar :flag_nz: ", 'NZD$ ' + currencyFormatter.format(((conv5 * dolar)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_nz: ", 'NZD$ ' + currencyFormatter.format(((conv5 * dolar) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuestos (75%) :flag_nz: ", 'NZD$ ' + currencyFormatter.format((((conv5 * dolar) / EUR.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)


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

      if (interaction.options.getSubcommand() === 'pesomexicano') {
        var conv5 = options.getNumber('ars')
        axios.get('https://api.exchangerate.host/latest')
          .then((mxn) => {

            peso = mxn.data['rates']['MXN']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Peso Argentino <:rightarrow:921907270747570247> Peso Méxicano")
                  .setColor("#24944c")
                  .setDescription("Pesos argentinos expresado en Pesos méxicanos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928349418023968918/mxnapeso.png")
                  .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra :flag_mx: ", 'MXN$ ' + currencyFormatter.format(((conv5 * peso)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_mx: ", 'MXN$ ' + currencyFormatter.format(((conv5 * peso) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuestos (75%) :flag_mx: ", 'MXN$ ' + currencyFormatter.format((((conv5 * peso) / EUR.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)


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


      if (interaction.options.getSubcommand() === 'pesochileno') {
        var conv5 = options.getNumber('ars')
        axios.get('https://api.exchangerate.host/latest')
          .then((CLP) => {

            peso = CLP.data['rates']['CLP']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Peso Argentino <:rightarrow:921907270747570247> Peso Chileno")
                  .setColor("#fa0100")
                  .setDescription("Pesos argentinos expresado en pesos chilenos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928350035324842035/chileapeso.png")
                  .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra :flag_cl: ", 'CLP$ ' + currencyFormatter.format(((conv5 * peso)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_cl: ", 'CLP$ ' + currencyFormatter.format(((conv5 * peso) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuestos (75%) :flag_cl: ", 'CLP$ ' + currencyFormatter.format((((conv5 * peso) / EUR.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)

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


      if (interaction.options.getSubcommand() === 'pesouruguayo') {
        var conv5 = options.getNumber('ars')
        axios.get('https://api.exchangerate.host/latest')
          .then((UYU) => {

            peso = UYU.data['rates']['UYU']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Peso Argentino <:rightarrow:921907270747570247> Peso Uruguayo")
                  .setColor("BLUE")
                  .setDescription("Pesos argentinos expresado en pesos uruguayos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928350035744288878/uyuapeso.png")
                  .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra :flag_uy: ", 'UYU$ ' + currencyFormatter.format(((conv5 * peso)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_uy: ", 'UYU$ ' + currencyFormatter.format(((conv5 * peso) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuestos (75%) :flag_uy: ", 'UYU$ ' + currencyFormatter.format((((conv5 * peso) / EUR.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)

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
      if (interaction.options.getSubcommand() === 'pesocolombiano') {
        var conv5 = options.getNumber('ars')
        axios.get('https://api.exchangerate.host/latest')
          .then((COP) => {

            pesos = COP.data['rates']['COP']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Peso Argentino <:rightarrow:921907270747570247> Peso Colombiano")
                  .setColor("#fecb04")
                  .setDescription("Pesos argentinos expresado en pesos colombianos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928349550970822716/copapeso.png")
                  .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra :flag_co: ", 'COP$ ' + currencyFormatter.format(((conv5 * pesos)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_co: ", 'COP$ ' + currencyFormatter.format(((conv5 * pesos) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuestos (75%) :flag_co: ", 'COP$ ' + currencyFormatter.format((((conv5 * pesos) / EUR.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)

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

      if (interaction.options.getSubcommand() === 'boliviano') {
        var conv5 = options.getNumber('ars')
        axios.get('https://api.exchangerate.host/latest')
          .then((BOB) => {

            peso = BOB.data['rates']['BOB']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Peso Argentino <:rightarrow:921907270747570247> Boliviano")
                  .setColor("#6da544")
                  .setDescription("Pesos argentinos expresado en bolivianos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928352180296122388/bolivianoapeso.png")
                  .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra :flag_bo: ", 'BOB Bs. ' + currencyFormatter.format(((conv5 * peso)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_bo: ", 'BOB Bs.' + currencyFormatter.format(((conv5 * peso) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuestos (75%) :flag_bo: ", 'BOB Bs. ' + currencyFormatter.format((((conv5 * peso) / EUR.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)

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

      if (interaction.options.getSubcommand() === 'sol') {
        var conv5 = options.getNumber('ars')
        axios.get('https://api.exchangerate.host/latest')
          .then((PEN) => {

            sol = PEN.data['rates']['PEN']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Peso Argentino <:rightarrow:921907270747570247> Sol")
                  .setColor("#cd0400")
                  .setDescription("Pesos argentinos expresado en soles peruanos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928352555736633374/solapeso.png")
                  .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra :flag_pe: ", 'PEN S/ ' + currencyFormatter.format(((conv5 * sol)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_pe: ", 'PEN S/ ' + currencyFormatter.format(((conv5 * sol) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuestos (75%) :flag_pe: ", 'PEN S/ ' + currencyFormatter.format((((conv5 * sol) / EUR.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)

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

      //Guarani

      if (interaction.options.getSubcommand() === 'guarani') {
        var conv5 = options.getNumber('ars')

        axios.get('https://api.exchangerate.host/latest')
          .then((PYG) => {

            guarani = PYG.data['rates']['PYG']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Peso Argentino <:rightarrow:921907270747570247> Guaraní Paraguayo")
                  .setColor("#d80027")
                  .setDescription("Pesos argentinos expresado en guaranies paraguayos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928353654342299709/guaraniapeso.png")
                  .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra :flag_py: ", 'PYG₲ ' + currencyFormatter.format(((conv5 * guarani)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_py: ", 'PYG₲ ' + currencyFormatter.format(((conv5 * guarani) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuestos (75%) :flag_py: ", 'PYG₲ ' + currencyFormatter.format((((conv5 * guarani) / EUR.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)

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

      //Bolivar
      if (interaction.options.getSubcommand() === 'bolivar') {
        var conv5 = options.getNumber('ars')
        axios.get('https://api.exchangerate.host/latest')
          .then((VES) => {

            bolivar = VES.data['rates']['VES']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((USD) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Peso Argentino <:rightarrow:921907270747570247> Bolivar Digital Venezolano")
                  .setColor("RED")
                  .setDescription("Pesos argentinos expresado en bolivares digitales venezolanos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928354779887960105/bolivarapeso.png")
                  .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compar :flag_ve: ", 'VED B$ ' + currencyFormatter.format(((conv5 * bolivar)) / USD.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_ve: ", 'VED B$ ' + currencyFormatter.format(((conv5 * bolivar) / USD.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuestos (75%) :flag_ve: ", 'VED B$ ' + currencyFormatter.format((((conv5 * bolivar) / USD.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)

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

      if (interaction.options.getSubcommand() === 'yuan') {
        var conv5 = options.getNumber('ars')
        axios.get('https://api.exchangerate.host/latest')
          .then((CNY) => {

            yuan = CNY.data['rates']['CNY']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Peso Argentino <:rightarrow:921907270747570247> Renminbi")
                  .setColor("#cd0400")
                  .setDescription("Pesos argentinos expresado en renminbi (yuanes) chinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928356456087048234/yuanapeso.png")
                  .addField("Precio original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra :flag_cn: ", 'CNY¥ ' + currencyFormatter.format(((conv5 * yuan)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_cn: ", 'CNY¥ ' + currencyFormatter.format(((conv5 * yuan) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuestos (75%) :flag_cn: ", 'CNY¥ ' + currencyFormatter.format((((conv5 * yuan) / EUR.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)

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

      if (interaction.options.getSubcommand() === 'rupia') {
        var conv5 = options.getNumber('ars')
        axios.get('https://api.exchangerate.host/latest')
          .then((INR) => {

            rupia = INR.data['rates']['INR']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Peso Argentino <:rightarrow:921907270747570247> Rupia India")
                  .setColor("#fc9836")
                  .setDescription("Pesos argentinos expresado en rupias indias al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928356536307314718/indiaapeso.png")
                  .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra :flag_in: ", 'INR₹ ' + currencyFormatter.format(((conv5 * rupia)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_in: ", 'INR₹ ' + currencyFormatter.format(((conv5 * rupia) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuestos (75%) :flag_in: ", 'INR₹ ' + currencyFormatter.format((((conv5 * rupia) / EUR.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)

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

      if (interaction.options.getSubcommand() === 'won') {
        var conv5 = options.getNumber('ars')
        axios.get('https://api.exchangerate.host/latest')
          .then((KRW) => {

            won = KRW.data['rates']['KRW']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Peso Argentino <:rightarrow:921907270747570247> Won Surcoreano")
                  .setColor("#FFFFFF")
                  .setDescription("Pesos argentinos expresado en won surcoreano al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928356536735117312/wonapeso.png")
                  .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra :flag_kr: ", 'KRW ₩ ' + currencyFormatter.format(((conv5 * won)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_kr: ", 'KRW ₩ ' + currencyFormatter.format(((conv5 * won) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuestos (75%) :flag_kr: ", 'KRW ₩ ' + currencyFormatter.format((((conv5 * won) / EUR.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)

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

      if (interaction.options.getSubcommand() === 'franco') {
        var conv5 = options.getNumber('ars')
        axios.get('https://api.exchangerate.host/latest')
          .then((suizo) => {

            franco = suizo.data['rates']['CHF']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Peso Argentino <:rightarrow:921907270747570247> Franco Suizo")
                  .setColor("#d80027")
                  .setDescription("Pesos argentinos expresado en francos suizos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/930966649710985286/francoapeso.png")
                  .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra :flag_ch: ", 'CHF Fr. ' + currencyFormatter.format(((conv5 * franco)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_ch: ", 'CHF Fr. ' + currencyFormatter.format(((conv5 * franco) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuestos (75%) :flag_ch: ", 'CHF Fr. ' + currencyFormatter.format((((conv5 * franco) / EUR.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)

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

      if (interaction.options.getSubcommand() === 'lira') {
        var conv5 = options.getNumber('ars')

        axios.get('https://api.exchangerate.host/latest')
          .then((turca) => {

            lira = turca.data['rates']['TRY']
            axios.get('https://dolarbot-api.g0nz4codderar.repl.co/api/euro/oficial')
              .then((EUR) => {
                const embed = new Discord.MessageEmbed()
                  .setTitle("Peso Argentino <:rightarrow:921907270747570247> Lira Turca")
                  .setColor("#d70224")
                  .setDescription("Pesos argentinos expresado en liras turcas al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (45%)) ")
                  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/930966650122014740/liraapeso.png")
                  .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
                  .addField("Compra :flag_tr: ", 'TRY₺ ' + currencyFormatter.format(((conv5 * lira)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                  .addField("Venta :flag_tr: ", 'TRY₺ ' + currencyFormatter.format(((conv5 * lira) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }), true)
                  .addField("Impuestos (75%) :flag_tr: ", 'TRY₺ ' + currencyFormatter.format((((conv5 * lira) / EUR.data['venta']) / 1.75), { locale: 'es-ES', code: ' ' }), true)

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
