//Express (Usado en repl.it para estar 24/7)
const express = require('express')
const app = express()
app.get('/', function (req, res) {
  res.send(`<h1> Argenkit Bot Versión 1.5 Actualización Técnica </h1>
  <p> Esta actualización trae muchos cambios del lado del código para una mejor optimización y orden. </p>
  `
  )
})
let port = process.env.PORT || 3500;
app.listen(port)

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
const fs = require ('fs') //fs
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
  const slashcommandsFile = fs.readdirSync('./commands').filter(file => file.endsWith("js"))
  for(const file of slashcommandsFile){
    const slash = require(`./commands/${file}`)
    console.log(`Slash  commands - ${file} cargado`)
    client.slashcommands.set(slash.data.name, slash)
  }
  client.on("interactionCreate", async(interaction) =>{
    if(!interaction.isCommand()) return;
    const slashcmds = client.slashcommands.get(interaction.commandName)
    if(!slashcmds) return;

    try{
      await slashcmds.run(client, interaction)
    } catch(e){
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

  //Divisas
  commands?.create({
      name: 'divisa',
      description: 'Mostrar los datos de una divisa',
      options: [
          {
              //Dólar
              type: "SUB_COMMAND",
              name: "dolar",
              description: "Muestra los datos del dólar oficial + impuestos"
          },
          {
              //Dólar blue
              type: "SUB_COMMAND",
              name: "dolarblue",
              description: "Muestra los datos del dólar blue"
  
          },
          {
              //Euro
              type: "SUB_COMMAND",
              name: "euro",
              description: "Muestra los datos del Euro + impuestos"
          },
          {
              //Real
              type: "SUB_COMMAND",
              name: "real",
              description: "Muestra los datos del Real brasileño + impuestos"
          },
          {
              //Yen
              type: "SUB_COMMAND",
              name: "yen",
              description: "Muestra los datos del Yen japonés + impuestos"
          },
          {
              //Libra
              type: "SUB_COMMAND",
              name: "libra",
              description: "Muestra los datos de la Libra Esterlina + impuestos"
          },
          {
              //Rublo
              type: "SUB_COMMAND",
              name: "rublo",
              description: "Muestra los datos del rublo ruso + impuestos"
          },
          {
              //Dólar canadiense
              type: "SUB_COMMAND",
              name: "dolarcanadiense",
              description: "Muestra los datos del Dólar canadiense + impuestos"
          },
          {
              //Dólar australiano
              type: "SUB_COMMAND",
              name: "dolaraustraliano",
              description: "Muestra los datos del Dólar australiano + impuestos"
          },
          {
              //Dólar neozelandes
              type: "SUB_COMMAND",
              name: "dolarneozelandes",
              description: "Muestra los datos del Dólar neozelandés + impuestos"
          },
          {
              //Peso méxicano
              type: "SUB_COMMAND",
              name: "pesomexicano",
              description: "Muestra los datos del Peso mexicano + impuestos"
          },
          {
              //Peso chileno
              type: "SUB_COMMAND",
              name: "pesochileno",
              description: "Muestra los datos del Peso chileno + impuestos"
          },
          {
              //Peso uruguayo
              type: "SUB_COMMAND",
              name: "pesouruguayo",
              description: "Muestra los datos del Peso uruguayo + impuestos"
          },
          {
              //Peso colombiano
              type: "SUB_COMMAND",
              name: "pesocolombiano",
              description: "Muestra los datos del Peso colombiano + impuestos"
          },
          {
              //Boliviano
              type: "SUB_COMMAND",
              name: "boliviano",
              description: "Muestra los datos del Boliviano + impuestos"
          },
          {
              //Sol
              type: "SUB_COMMAND",
              name: "sol",
              description: "Muestra los datos del Sol peruano + impuestos"
          },
          {
              //Guarani
              type: "SUB_COMMAND",
              name: "guarani",
              description: "Muestra los datos del Guaraní paraguayo + impuestos"
          },
          {
              //Bolivar
              type: "SUB_COMMAND",
              name: "bolivar",
              description: "Muestra los datos del Bolivar digital venezolano + impuestos"
          },
          {
              //Yuan
              type: "SUB_COMMAND",
              name: "yuan",
              description: "Muestra los datos del yuan chino + impuestos"
          },
          {
              //Rupia
              type: "SUB_COMMAND",
              name: "rupia",
              description: "Muestra los datos del rupia chino + impuestos"
          },
          {
              //Won
              type: "SUB_COMMAND",
              name: "won",
              description: "Muestra los datos del won surcoreano + impuestos"
          },
          {
              //Franco
              type: "SUB_COMMAND",
              name: "franco",
              description: "Muestra los datos del franco suizo + impuestos"
          },
          {
              //Lira
              type: "SUB_COMMAND",
              name: "lira",
              description: "Muestra los datos de la lira turca + impuestos"
          }
  
      ]
  })
  
  //Criptomoneda
  commands?.create({
      name: 'criptomoneda',
      description: 'Mostrar los datos de una criptomoneda',
      options: [
          {
              //Bitcoin
              type: "SUB_COMMAND",
              name: "bitcoin",
              description: "Muestra los datos del Bitcoin + impuestos"
          },
          {
              //Ethereum
              type: "SUB_COMMAND",
              name: "ethereum",
              description: "Muestra los datos del Ethereum + impuestos"
  
          },
          {
              //Tether
              type: "SUB_COMMAND",
              name: "tether",
              description: "Muestra los datos del Tether + impuestos"
  
          },
          {
              //Axie Infinity
              type: "SUB_COMMAND",
              name: "axieinfinity",
              description: "Muestra los datos del Axie Infinity + impuestos"
  
          },
          {
              //Terra Luna Classic
              type: "SUB_COMMAND",
              name: "terralunaclassic",
              description: "Muestra los datos del Terra Luna  Classic + impuestos"
  
          },
          {
              //Decentraland
              type: "SUB_COMMAND",
              name: "decentraland",
              description: "Muestra los datos del Decentraland + impuestos"
  
          },
          {
              //Solana
              type: "SUB_COMMAND",
              name: "solana",
              description: "Muestra los datos del Solana + impuestos"
          },
          {
              //Dai
              type: "SUB_COMMAND",
              name: "dai",
              description: "Muestra los datos del Dai + impuestos"
          },
          {
              //Dogecoin
              type: "SUB_COMMAND",
              name: "dogecoin",
              description: "Muestra los datos del Doge + impuestos"
          },
          {
              //Terra usd classic
              type: "SUB_COMMAND",
              name: "terrausdclassic",
              description: "Muestra los datos del UST Classic + impuestos"
          },
          {
              //Terra Luna 2.0
              type: "SUB_COMMAND",
              name: "terraluna",
              description: "Muestra los datos del Terra Luna  2.0 + impuestos"
          },
  
      ]
  })
  
  //Metales
  commands?.create({
      name: 'metal',
      description: 'Mostrar los datos de un metal',
      options: [
          {
              //Oro
              type: "SUB_COMMAND",
              name: "oro",
              description: "Muestra los datos del oro"
          },
          {
              //Plata
              type: "SUB_COMMAND",
              name: "plata",
              description: "Muestra los datos de la Plata"
          },
          {
              //Paladio
              type: "SUB_COMMAND",
              name: "paladio",
              description: "Muestra los datos del Paladio"
          },
          {
              //Platino
              type: "SUB_COMMAND",
              name: "platino",
              description: "Muestra los datos del Platino"
          },
      ]
  })
  
  
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
  
  

//Divisas
//Dolar

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) {
    return
  }

  const { commandName, options } = interaction
  if (commandName == "divisa") {

    if (interaction.options.getSubcommand() === 'dolar') {

      axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
        .then((oficial) => {
          const embed1 = new Discord.MessageEmbed()
            .setTitle("Dólar estadounidese :flag_us:")
            .setColor("#a9ea98")
            .setDescription("El dólar oficial es el valor del dólar que se liquida por parte del gobierno nacional y está sujeto a un 75% de impuestos, además, sólo se puede retirar USD$200 al mes.")
            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903145945980604447/dolar3.png")
            .addField("Compra <:dollars:903148705094447114>  ", "ARS$ " + currencyFormatter.format(oficial.data['compra'], { locale: 'es-ES', code: ' ' }), true)
            .addField("Venta <:dollars:903148705094447114> ", "ARS$ " + currencyFormatter.format(oficial.data['venta'], { locale: 'es-ES', code: ' ' }), true)
            .addField("Impuestos <:dollars:903148705094447114> ", "ARS$ " + currencyFormatter.format(oficial.data['venta'] * 1.75, { locale: 'es-ES', code: ' ' }), true)


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

        })
        .catch((err) => {
          console.error('ERR', err)
        })


    }


    //Dólar blue 
    if (interaction.options.getSubcommand() === 'dolarblue') {
      axios.get('https://api-dolar-argentina.herokuapp.com/api/dolarblue')
        .then((blue) => {
          const embed1 = new Discord.MessageEmbed()
            .setTitle("Dólar blue :flag_us:")
            .setColor("#8cb6fd")
            .setDescription("Dólar informal establecido por el precio del mercado (Oferta y demanda). Es el dólar que se compra en el mercado paralelo o informal.")
            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903147750496018432/dolarblue.png")
            .addField("Compra <:dollarblue:903149186436980767>  ", "ARS$ " + currencyFormatter.format(blue.data['compra'], { locale: 'es-ES', code: ' ' }), true)
            .addField("Venta <:dollarblue:903149186436980767>  ", "ARS$ " + currencyFormatter.format(blue.data['venta'], { locale: 'es-ES', code: ' ' }), true)

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
            .addField("Inflación anual :chart_with_downwards_trend:", "7,1% (2021)", true)
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




        })
        .catch((err) => {
          console.error('ERR', err)


        })


    }


    //Euro


    if (interaction.options.getSubcommand() === 'euro') {
      axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
        .then((euro) => {
          var euroImpuesto = (euro.data['venta'] * 1.75).toFixed(2)
          const embed1 = new Discord.MessageEmbed()
            .setTitle("Euro :flag_eu:")
            .setColor("#0153b4")
            .setDescription("Euro al precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (45%) ")
            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913863513498333224/european-union_1.png")
            .addField("Compra <:euro:903349498930135160>  ", "ARS$ " + currencyFormatter.format(euro.data['compra'], { locale: 'es-ES', code: ' ' }), true)
            .addField("Venta <:euro:903349498930135160>  ", "ARS$ " + currencyFormatter.format(euro.data['venta'], { locale: 'es-ES', code: ' ' }), true)
            .addField("Impuestos <:euro:903349498930135160>  ", "ARS$ " + currencyFormatter.format(euroImpuesto, { locale: 'es-ES', code: ' ' }), true)


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
          const timeout = 30000;
          paginationEmbed(interaction, pages, buttonList, timeout);




        })
        .catch((err) => {
          console.error('ERR', err)
        })
    }

    //Real
    if (interaction.options.getSubcommand() === 'real') {
      axios.get('https://api-dolar-argentina.herokuapp.com/api/real/nacion')
        .then((real) => {
          var realImpuesto = ((real.data['venta'] * 1.75)).toFixed(2)
          const embed1 = new Discord.MessageEmbed()
            .setTitle("Real Brasileño  :flag_br:")
            .setColor("#e8ce6c")
            .setDescription("Real oficial al  precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (45%) ")
            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/9138661.7546616381/BrazilMoney.png")
            .addField("Compra <:brazilianreal1:913867351210995722>  ", "ARS$ " + currencyFormatter.format(real.data['compra'], { locale: 'es-ES', code: ' ' }), true)
            .addField("Venta <:brazilianreal1:913867351210995722>  ", "ARS$ " + currencyFormatter.format(real.data['venta'], { locale: 'es-ES', code: ' ' }), true)
            .addField("Impuestos <:brazilianreal1:913867351210995722>  ", "ARS$ " + currencyFormatter.format(realImpuesto, { locale: 'es-ES', code: ' ' }), true)


          const embed2 = new Discord.MessageEmbed()
            .setTitle("Real Brasileño")
            .setColor("#e8ce6c")
            .setDescription("El real es la moneda de curso legal en Brasil y fuera de sus fronteras se le conoce como real brasileño. A partir de 2020, es la vigésima moneda más negociada en el mundo, la segunda en América Latina detrás de peso mexicano y la cuarta en el continente americano detrás del dólar estadounidense, el dólar canadiense y el peso mexicano")
            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/9138661.7546616381/BrazilMoney.png")
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
          const timeout = 30000;
          paginationEmbed(interaction, pages, buttonList, timeout);




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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')

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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')

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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')

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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')

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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')

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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')

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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')

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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')

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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')

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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')

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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')

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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')

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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')

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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')

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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')

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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')

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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')

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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')

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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')

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

})

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) {
    return
  }

  const { commandName, options } = interaction
  if (commandName == "criptomoneda") {
    //BTC 

    if (interaction.options.getSubcommand() === 'bitcoin') {
      axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=0')
        .then((BTC) => {
          bitcoin = BTC.data['prices'][0][1]

          axios.get('https://criptoya.com/api/lemoncash/btc')

            .then((USD) => {
              const embed1 = new Discord.MessageEmbed()
                .setTitle("Bitcoin ")
                .setColor("#fddc4d")
                .setDescription("Bitcoin a precio del mercado en Argentina (Cotización LemonCash) ")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929073343682990150/bitcoin.png")

                .addField("Precio <:bitcoin:929073179262074960>", 'USD$ ' + currencyFormatter.format(((bitcoin)), { locale: 'es-ES', code: ' ' }), true)
                .addField("Volumen  <:bitcoin:929073179262074960>", 'USD$ ' + currencyFormatter.format(((BTC.data['total_volumes'][0][1])), { locale: 'es-ES', code: ' ' }), true)
                .addField("Capitalización  <:bitcoin:929073179262074960>", 'USD$ ' + currencyFormatter.format(((BTC.data['market_caps'][0][1])), { locale: 'es-ES', code: ' ' }), true)

                .addField("Compra <:bitcoin:929073179262074960>   ", 'ARS$ ' + currencyFormatter.format(USD.data['bid'], { locale: 'es-ES', code: ' ' }), true)
                .addField("Venta <:bitcoin:929073179262074960>  ", 'ARS$ ' + currencyFormatter.format(USD.data['ask'], { locale: 'es-ES', code: ' ' }), true)



              const embed2 = new Discord.MessageEmbed()
                .setTitle("Bitcoin")
                .setColor("#fddc4d")
                .setDescription("Bitcoin es una criptomoneda  y un sistema de pago sin banco central o administrador único. En principio, los usuarios de bitcoin pueden transferir dinero entre sí a través de una red entre iguales usando software libre y de código abierto. Las transacciones son verificadas y custodiadas criptográficamente por una red descentralizada de nodos")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929073343682990150/bitcoin.png")
                .addField("Lanzamiento inicial", "3  de enero de 2009")
                .addField("Países donde es de curso legal:", ":flag_sv: ")
                .addField("Código ISO", "BTC ", true)
                .addField("Símbolo ", "₿ ", true)
                .addField("Desarrollador ", "Satoshi Nakamoto (seudónimo), Gavin Andresen y otros")
                .addField("Límite de Emisión  ", "₿21,000,000")


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

    //Ethereum
    if (interaction.options.getSubcommand() === 'ethereum') {
      axios.get('https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=0')
        .then((ETH) => {
          eth = ETH.data['prices'][0][1]


          axios.get('https://criptoya.com/api/lemoncash/eth')

            .then((USD) => {
              const embed1 = new Discord.MessageEmbed()
                .setTitle("Ethereum  ")
                .setColor("#7be0ff")
                .setDescription("Ethereum a precio del mercado en Argentina (Cotización LemonCash)")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/963617030026694716/ethereum.png")
                .addField("Precio <:ethereum:963619533271232532>", 'USD$ ' + currencyFormatter.format(((eth)), { locale: 'es-ES', code: ' ' }), true)
                .addField("Volumen  <:ethereum:963619533271232532>", 'USD$ ' + currencyFormatter.format(((ETH.data['total_volumes'][0][1])), { locale: 'es-ES', code: ' ' }), true)
                .addField("Capitalización  <:ethereum:963619533271232532>", 'USD$ ' + currencyFormatter.format(((ETH.data['market_caps'][0][1])), { locale: 'es-ES', code: ' ' }), true)

                .addField("Compra <:ethereum:963619533271232532>", 'ARS$ ' + currencyFormatter.format(USD.data['bid'], { locale: 'es-ES', code: ' ' }), true)
                .addField("Venta <:ethereum:963619533271232532>", 'ARS$ ' + currencyFormatter.format(USD.data['ask'], { locale: 'es-ES', code: ' ' }), true)


              const embed2 = new Discord.MessageEmbed()
                .setTitle("Ethereum")
                .setColor("#7be0ff")
                .setDescription("Ethereum es una plataforma de código abierto, que sirve para ejecutar contratos inteligentes. La plataforma tiene un alto grado de descentralización, a diferencia de otras cadenas de bloques. Es programable, lo que significa que los desarrolladores pueden usarlo en la creación de aplicaciones descentralizadas")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/963617030026694716/ethereum.png")
                .addField("Lanzamiento inicial", "30 de julio de 2015")
                .addField("Código ISO", "ETH ", true)
                .addField("Símbolo ", "Ξ ", true)
                .addField("Desarrollador ", "Vitalik Buterin y Gavin Wood")
                .addField("Límite de Emisión  ", "Ξ18,000,000 anuales")


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


    //Tether
    if (interaction.options.getSubcommand() === 'tether') {
      axios.get('https://api.coingecko.com/api/v3/coins/tether/market_chart?vs_currency=usd&days=0')
        .then((ETH) => {
          eth = ETH.data['prices'][0][1]



          axios.get('https://criptoya.com/api/lemoncash/usdt')

            .then((USD) => {
              const embed1 = new Discord.MessageEmbed()
                .setTitle("Tether ")
                .setColor("#27e19e")
                .setDescription("Tether a precio del mercado en Argentina (Cotización LemonCash)")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964345365602119782/tether.png")

                .addField("Precio <:tether:964346292815945828>", 'USD$ ' + currencyFormatter.format(((eth)), { locale: 'es-ES', code: ' ' }), true)
                .addField("Volumen  <:tether:964346292815945828>", 'USD$ ' + currencyFormatter.format(((ETH.data['total_volumes'][0][1])), { locale: 'es-ES', code: ' ' }), true)
                .addField("Capitalización  <:tether:964346292815945828>", 'USD$ ' + currencyFormatter.format(((ETH.data['market_caps'][0][1])), { locale: 'es-ES', code: ' ' }), true)

                .addField("Compra <:tether:964346292815945828>", 'ARS$ ' + currencyFormatter.format(USD.data['bid'], { locale: 'es-ES', code: ' ' }), true)
                .addField("Venta <:tether:964346292815945828>", 'ARS$ ' + currencyFormatter.format(USD.data['ask'], { locale: 'es-ES', code: ' ' }), true)


              const embed2 = new Discord.MessageEmbed()
                .setTitle("Tether")
                .setColor("#27e19e")
                .setDescription("Tether es una criptomoneda cuyas fichas son emitidas por Tether Limited. Anteriormente desde la compañía afirmaron que cada token estaba respaldado por un dólar estadounidense, pero el 14 de marzo de 2019 cambió el respaldo para incluir préstamos a empresas afiliadas.")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964345365602119782/tether.png")
                .addField("Lanzamiento inicial", "6 de octubre de 2014")
                .addField("Código ISO", "USDT ", true)
                .addField("Símbolo ", "	₮ ", true)
                .addField("Desarrollador ", "Craig Sellars y Brock Pierce")
                .addField("Límite de Emisión  ", "Respaldado por dólares")


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

    //Axie  Infinity

    if (interaction.options.getSubcommand() === 'axieinfinity') {
      axios.get('https://api.coingecko.com/api/v3/coins/axie-infinity/market_chart?vs_currency=usd&days=0')
        .then((AXS) => {
          axs = AXS.data['prices'][0][1]



          axios.get('https://criptoya.com/api/lemoncash/axs')

            .then((USD) => {
              const embed1 = new Discord.MessageEmbed()
                .setTitle("Axie Infinity ")
                .setColor("#555abe")
                .setDescription("Axie Infinity a precio del mercado (Cotización Lemon Cash) ")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964347852946018324/axie-infinity.png")

                .addField("Precio <:axieinfinity:964349059236257852>", 'USD$ ' + currencyFormatter.format(((axs)), { locale: 'es-ES', code: ' ' }), true)
                .addField("Volumen  <:axieinfinity:964349059236257852>", 'USD$ ' + currencyFormatter.format(((AXS.data['total_volumes'][0][1])), { locale: 'es-ES', code: ' ' }), true)
                .addField("Capitalización  <:axieinfinity:964349059236257852>", 'USD$ ' + currencyFormatter.format(((AXS.data['market_caps'][0][1])), { locale: 'es-ES', code: ' ' }), true)

                .addField("Compra <:axieinfinity:964349059236257852>", 'ARS$ ' + currencyFormatter.format(USD.data['bid'], { locale: 'es-ES', code: ' ' }), true)
                .addField("Venta <:axieinfinity:964349059236257852>", 'ARS$ ' + currencyFormatter.format(USD.data['ask'], { locale: 'es-ES', code: ' ' }), true)



              const embed2 = new Discord.MessageEmbed()
                .setTitle("Axie Infinity")
                .setColor("#555abe")
                .setDescription("Axie Infinity es un Videojuego en línea basado en la red de Cadena de bloques en NFT desarrollado y distribuido por el estudio vietnamita de Sky Mavis, el juego funciona dando recompensas, que son los tokens del juego que utiliza la criptomoneda basada en Ethereum AXS (Axie Infinity Shards) y SLP (Smooth Love Potion). Actualmente es la colección de NFT más cara con más de $ 42 millones en ventas en junio de 2021.")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964347852946018324/axie-infinity.png")
                .addField("Lanzamiento inicial", "Marzo de 2018")
                .addField("Código ISO", "AXS ", true)
                .addField("Símbolo ", "	$AXS ", true)
                .addField("Desarrollador ", "Sky Mavis")
                .addField("Límite de Emisión  ", "Sin límite")


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

    //Terraluna Classic
    if (interaction.options.getSubcommand() === 'terralunaclassic') {
      axios.get('https://api.coingecko.com/api/v3/coins/terra-luna/market_chart?vs_currency=usd&days=0')
        .then((LUNA) => {
          tl = LUNA.data['prices'][0][1]



          axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')

            .then((USD) => {
              const embed1 = new Discord.MessageEmbed()
                .setTitle("Terra Luna Classic")
                .setColor("#ffd83a")
                .setDescription("Terra Luna Classic a precio del mercado (Cotización LemonCash)")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964348899429072916/terraluna.png")
                .addField("Precio <:terraluna:964349074016960532>", 'USD$ ' + tl, true)
                .addField("Volumen  <:terraluna:964349074016960532>", 'USD$ ' + currencyFormatter.format(((LUNA.data['total_volumes'][0][1])), { locale: 'es-ES', code: ' ' }), true)
                .addField("Capitalización  <:terraluna:964349074016960532>", 'USD$ ' + currencyFormatter.format(((LUNA.data['market_caps'][0][1])), { locale: 'es-ES', code: ' ' }), true)

                .addField("Compra <:terraluna:964349074016960532>", 'ARS$ ' + currencyFormatter.format(((tl)) * USD.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                .addField("Venta <:terraluna:964349074016960532>", 'ARS$ ' + currencyFormatter.format(((tl)) * USD.data['venta'], { locale: 'es-ES', code: ' ' }), true)



              const embed2 = new Discord.MessageEmbed()
                .setTitle("Terra Luna")
                .setColor("#ffd83a")
                .setDescription("Terra (LUNA) es un proyecto blockchain que busca crear todo un ecosistema centrado en la generación de aplicaciones DeFi sobre una blockchain de alta velocidad y la facilidad para generar stablecoins ancladas a las principales monedas fiat en todo el mundo. ")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964348899429072916/terraluna.png")
                .addField("Lanzamiento inicial", "26 de julio  de 2019")
                .addField("Código ISO", "LUNC ", true)
                .addField("Símbolo ", "	- ", true)
                .addField("Desarrollador ", "Daniel Shin y Do Kwon")
                .addField("Límite de Emisión  ", "Sin límite")


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

    if (interaction.options.getSubcommand() === 'terraluna') {
      axios.get('https://api.coingecko.com/api/v3/coins/terra-luna-2/market_chart?vs_currency=usd&days=0')
        .then((LUNA) => {
          tl = LUNA.data['prices'][0][1]



          axios.get('https://criptoya.com/api/lemoncash/usdt')

            .then((USD) => {
              const embed1 = new Discord.MessageEmbed()
                .setTitle("Terra Luna 2.0")
                .setColor("#ffd83a")
                .setDescription("Terra Luna 2.0 a precio del mercado (Cotización LemonCash)")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/980221927308275742/terra-luna-2_large.png")
                .addField("Precio <:terraluna2_large:980222259471978526>", 'USD$ ' + currencyFormatter.format(((tl)), { locale: 'es-ES', code: ' ' }), true)
                .addField("Volumen  <:terraluna2_large:980222259471978526>", 'USD$ ' + currencyFormatter.format(((LUNA.data['total_volumes'][0][1])), { locale: 'es-ES', code: ' ' }), true)
                .addField("Capitalización  <:terraluna2_large:980222259471978526>", 'USD$ ' + currencyFormatter.format(((LUNA.data['market_caps'][0][1])), { locale: 'es-ES', code: ' ' }), true)

                .addField("Compra <:terraluna2_large:980222259471978526>", 'ARS$ ' + currencyFormatter.format(((tl)) * USD.data['bid'], { locale: 'es-ES', code: ' ' }), true)
                .addField("Venta <:terraluna2_large:980222259471978526>", 'ARS$ ' + currencyFormatter.format(((tl)) * USD.data['ask'], { locale: 'es-ES', code: ' ' }), true)



              const embed2 = new Discord.MessageEmbed()
                .setTitle("Terra Luna")
                .setColor("#ffd83a")
                .setDescription("Terra (LUNA) es un proyecto blockchain que busca crear todo un ecosistema centrado en la generación de aplicaciones DeFi sobre una blockchain de alta velocidad y la facilidad para generar stablecoins ancladas a las principales monedas fiat en todo el mundo. Terra Luna 2.0 es el nuevo Token de Terra, tras el colapso de Terra USD  y Terra Luna. ")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/980221927308275742/terra-luna-2_large.png")
                .addField("Lanzamiento inicial", "27 de mayo  de 2022")
                .addField("Código ISO", "LUNA ", true)
                .addField("Símbolo ", "	- ", true)
                .addField("Desarrollador ", "Daniel Shin y Do Kwon")
                .addField("Límite de Emisión  ", "Sin límite")


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

    if (interaction.options.getSubcommand() === 'terrausdclassic') {
      axios.get('https://api.coingecko.com/api/v3/coins/terrausd/market_chart?vs_currency=usd&days=0')
        .then((USTC) => {
          tl = USTC.data['prices'][0][1]



          axios.get('https://criptoya.com/api/lemoncash/usdt')

            .then((USD) => {
              const embed1 = new Discord.MessageEmbed()
                .setTitle("Terra USD Classic")
                .setColor("#ffd83a")
                .setDescription("Terra USD Classic a precio del mercado (Cotización LemonCash)")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/975204931944456233/terrausd.png")
                .addField("Precio <:terrausd:975206586375106600>", 'USD$ ' + currencyFormatter.format(((tl)), { locale: 'es-ES', code: ' ' }), true)
                .addField("Volumen  <:terrausd:975206586375106600>", 'USD$ ' + currencyFormatter.format(((USTC.data['total_volumes'][0][1])), { locale: 'es-ES', code: ' ' }), true)
                .addField("Capitalización  <:terrausd:975206586375106600>", 'USD$ ' + currencyFormatter.format(((USTC.data['market_caps'][0][1])), { locale: 'es-ES', code: ' ' }), true)

                .addField("Compra <:terrausd:975206586375106600> ", 'ARS$ ' + currencyFormatter.format(((tl)) * USD.data['bid'], { locale: 'es-ES', code: ' ' }), true)
                .addField("Venta <:terrausd:975206586375106600> ", 'ARS$ ' + currencyFormatter.format(((tl)) * USD.data['ask'], { locale: 'es-ES', code: ' ' }), true)



              const embed2 = new Discord.MessageEmbed()
                .setTitle("Terra USD Classic")
                .setColor("#ffd83a")
                .setDescription(" Terra USD es una stablecoin algorítmica construida sobre la blockchain Terra. El objetivo de este tipo de monedas es conseguir la estabilidad de precios y equilibrar el suministro circulante del activo al estar vinculado a un activo de reserva como el dólar estadounidense o el oro.")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/975204931944456233/terrausd.png")
                .addField("Lanzamiento inicial", "Septiembre de 2020")
                .addField("Código ISO", "USTC ", true)
                .addField("Símbolo ", "	USTC ", true)
                .addField("Desarrollador ", "Daniel Shin y Do Kwon")
                .addField("Límite de Emisión  ", "Sin límite")


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

    //Decentraland

    if (interaction.options.getSubcommand() === 'decentraland') {
      axios.get('https://api.coingecko.com/api/v3/coins/decentraland/market_chart?vs_currency=usd&days=0')
        .then((MANA) => {
          tl = MANA.data['prices'][0][1]



          axios.get('https://criptoya.com/api/lemoncash/mana')

            .then((USD) => {
              const embed1 = new Discord.MessageEmbed()
                .setTitle("Decentraland")
                .setColor("#ffa6b7")
                .setDescription("Decentraland + impuestos (PAIS (30%) y adelanto de ganancias (45%)")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964351096871088128/decentraland.png")
                .addField("Precio <:decentraland:964349085089931324>", 'USD$ ' + currencyFormatter.format(((tl)), { locale: 'es-ES', code: ' ' }), true)
                .addField("Volumen  <:decentraland:964349085089931324>", 'USD$ ' + currencyFormatter.format(((MANA.data['total_volumes'][0][1])), { locale: 'es-ES', code: ' ' }), true)
                .addField("Capitalización <:decentraland:964349085089931324>", 'USD$ ' + currencyFormatter.format(((MANA.data['market_caps'][0][1])), { locale: 'es-ES', code: ' ' }), true)

                .addField("Compra <:decentraland:964349085089931324>", 'ARS$ ' + currencyFormatter.format(USD.data['bid'], { locale: 'es-ES', code: ' ' }), true)
                .addField("Venta <:decentraland:964349085089931324>", 'ARS$ ' + currencyFormatter.format(USD.data['ask'], { locale: 'es-ES', code: ' ' }), true)



              const embed2 = new Discord.MessageEmbed()
                .setTitle("Decentraland")
                .setColor("#ffa6b7")
                .setDescription("Decentraland es una plataforma de realidad virtual descentralizada 3D que consiste en 90601 parcelas de tierra. La propiedad virtual en decentraland son los NFT que se pueden comprar por medio de la criptomoneda MANA, que está basada en la Blockchain de Ethereum. Fue inauguarada de manera pública en febrero de 2020,​ y se es supervisada por la organización sin ánimo de lucro Decentraland Foundation .Fue desarrollada por los argentinos Ari Meilich y Esteban Ordano ")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964351096871088128/decentraland.png")
                .addField("Lanzamiento inicial", "20 de febrero de 2020")
                .addField("Código ISO", "MANA ", true)
                .addField("Símbolo ", "	- ", true)
                .addField("Desarrollador ", "Ari Meilich y Esteban Ordano")
                .addField("Límite de Emisión  ", "Sin límite")


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

    //Solana

    if (interaction.options.getSubcommand() === 'solana') {
      axios.get('https://api.coingecko.com/api/v3/coins/solana/market_chart?vs_currency=usd&days=0')
        .then((MANA) => {
          tl = MANA.data['prices'][0][1]



          axios.get('https://criptoya.com/api/lemoncash/sol')

            .then((USD) => {
              const embed1 = new Discord.MessageEmbed()
                .setTitle("Solana")
                .setColor("#2488ff")
                .setDescription("Decentraland + impuestos (PAIS (30%) y adelanto de ganancias (45%)")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964351112725540934/solana.png")
                .addField("Precio <:solana:964349096775282738>", 'USD$ ' + currencyFormatter.format(((tl)), { locale: 'es-ES', code: ' ' }), true)
                .addField("Volumen  <:solana:964349096775282738>", 'USD$ ' + currencyFormatter.format(((MANA.data['total_volumes'][0][1])), { locale: 'es-ES', code: ' ' }), true)
                .addField("Capitalización  <:solana:964349096775282738>", 'USD$ ' + currencyFormatter.format(((MANA.data['market_caps'][0][1])), { locale: 'es-ES', code: ' ' }), true)

                .addField("Compra <:solana:964349096775282738>", 'ARS$ ' + currencyFormatter.format(USD.data['bid'], { locale: 'es-ES', code: ' ' }), true)
                .addField("Venta <:solana:964349096775282738>", 'ARS$ ' + currencyFormatter.format(USD.data['ask'], { locale: 'es-ES', code: ' ' }), true)



              const embed2 = new Discord.MessageEmbed()
                .setTitle("Solana")
                .setColor("#2488ff")
                .setDescription("Solana ")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964351112725540934/solana.png")
                .addField("Lanzamiento inicial", "Abril de 2019")
                .addField("Código ISO", "SOL", true)
                .addField("Símbolo ", "	◎ ", true)
                .addField("Desarrollador ", "Anatoly Yakovenko, Greg Fitzgerald, Stephen Akridge, Raj Gokal")
                .addField("Límite de Emisión  ", "$40.000.000.000 (Abril de 2022)")


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

    //DAI

    if (interaction.options.getSubcommand() === 'dai') {
      axios.get('https://api.coingecko.com/api/v3/coins/dai/market_chart?vs_currency=usd&days=0')
        .then((DAI) => {
          dai = DAI.data['prices'][0][1]



          axios.get('https://criptoya.com/api/lemoncash/dai')

            .then((USD) => {
              const embed1 = new Discord.MessageEmbed()
                .setTitle("DAI")
                .setColor("#efc637")
                .setDescription("DAI + impuestos (PAIS (30%) y adelanto de ganancias (45%)")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964681693292285962/dai.png")
                .addField("Precio <:dai:964681594344443904>", 'USD$ ' + currencyFormatter.format(((dai)), { locale: 'es-ES', code: ' ' }), true)
                .addField("Volumen  <:dai:964681594344443904>", 'USD$ ' + currencyFormatter.format(((DAI.data['total_volumes'][0][1])), { locale: 'es-ES', code: ' ' }), true)
                .addField("Capitalización  <:dai:964681594344443904>", 'USD$ ' + currencyFormatter.format(((DAI.data['market_caps'][0][1])), { locale: 'es-ES', code: ' ' }), true)

                .addField("Compra <:dai:964681594344443904>", 'ARS$ ' + currencyFormatter.format(USD.data['bid'], { locale: 'es-ES', code: ' ' }), true)
                .addField("Venta <:dai:964681594344443904>", 'ARS$ ' + currencyFormatter.format(USD.data['ask'], { locale: 'es-ES', code: ' ' }), true)



              const embed2 = new Discord.MessageEmbed()
                .setTitle("DAI")
                .setColor("#efc637")
                .setDescription("Dai (o DAI) es una criptomoneda estable que tiene como objetivo mantener su valor lo más cercano posible al dólar estadounidense (USD) a través de un sistema automatizado de contratos inteligentes en la cadena de bloques de Ethereum. ")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964681693292285962/dai.png")
                .addField("Lanzamiento inicial", "18 de diciembre de 2017")
                .addField("Código ISO", "DAI", true)
                .addField("Símbolo ", "	DAI ", true)
                .addField("Desarrollador ", "Maker Foundation")
                .addField("Límite de Emisión  ", "Respaldado en dólares, otras criptomonedas y contratos inteligentes")


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

    //Dogecoin

    if (interaction.options.getSubcommand() === 'dogecoin') {
      axios.get('https://api.coingecko.com/api/v3/coins/dogecoin/market_chart?vs_currency=usd&days=0')
        .then((DAI) => {
          dai = DAI.data['prices'][0][1]



          axios.get('https://criptoya.com/api/bitso/doge')

            .then((USD) => {
              const embed1 = new Discord.MessageEmbed()
                .setTitle("DOGECOIN")
                .setColor("#f5a431")
                .setDescription("Dogecoin a precio del mercado (Cotización bitso)")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964686112096391189/dogecoin.png")
                .addField("Precio <:dogecoin:964686144530939904>", 'USD$ ' + currencyFormatter.format(((dai)), { locale: 'es-ES', code: ' ' }), true)
                .addField("Volumen  <:dogecoin:964686144530939904>", 'USD$ ' + currencyFormatter.format(((DAI.data['total_volumes'][0][1])), { locale: 'es-ES', code: ' ' }), true)
                .addField("Capitalización  <:dogecoin:964686144530939904>", 'USD$ ' + currencyFormatter.format(((DAI.data['market_caps'][0][1])), { locale: 'es-ES', code: ' ' }), true)

                .addField("Compra <:dogecoin:964686144530939904>", 'ARS$ ' + currencyFormatter.format(((dai)) * USD.data['bid'], { locale: 'es-ES', code: ' ' }), true)
                .addField("Venta <:dogecoin:964686144530939904>", 'ARS$ ' + currencyFormatter.format(((dai)) * USD.data['ask'], { locale: 'es-ES', code: ' ' }), true)



              const embed2 = new Discord.MessageEmbed()
                .setTitle("Dogecoin")
                .setColor("#f5a431")
                .setDescription("Dogecoin (código: DOGE, símbolo: Ð y D) es una criptodivisa derivada de Bitcoin que usa como mascota un perro Shiba Inu del meme de Internet «Doge». Es una criptomoneda inflacionaria porque no tiene límite de emisión. La segunda quincena de junio de 2014, se había minado más de 100 mil millones (100,000,000,000) de Dogecoins. Tiene un coste energético por transacción de de 0.12 kWh por transacción frente a los 707 kWh por transacción de Bitcoin. Energéticamente, Dogecoin es 5892 veces más eficiente que Bitcoin.7")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964686112096391189/dogecoin.png")
                .addField("Lanzamiento inicial", "6 de diciembre de 2013 ")
                .addField("Código ISO", "DOGE", true)
                .addField("Símbolo ", "	Ð ", true)
                .addField("Desarrollador ", "Billy Markus (Shibetoshi Nakamoto), Jackson Palmer")
                .addField("Límite de Emisión  ", "Sin límite ")


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
})


client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) {
    return
  }

  const { commandName, options } = interaction
  if (commandName == "metal") {
    //Oro

    if (interaction.options.getSubcommand() === 'oro') {


      axios.get('https://api.exchangerate.host/latest')
        .then((GOLD) => {
          oro = GOLD.data['rates']['XAU']

          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')

            .then((EUR) => {
              const embed1 = new Discord.MessageEmbed()
                .setTitle("Oro <:goldingots:964717629484965938> ")
                .setColor("#fddc4d")
                .setDescription("Oro + impuestos (PAIS (30%) y adelanto de ganancias (45%)")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964716664023285870/gold-ingots_1.png")
                .addField("Compra <:goldingots:964717629484965938>  ", 'ARS$ ' + currencyFormatter.format(((1 / oro)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                .addField("Venta <:goldingots:964717629484965938> ", 'ARS$ ' + currencyFormatter.format(((1 / oro)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' }), true)
                .addField("Impuestos <:goldingots:964717629484965938> ", 'ARS$ ' + currencyFormatter.format((((1 / oro)) * EUR.data['venta'] * 1.75), { locale: 'es-ES', code: ' ' }), true)

              const embed2 = new Discord.MessageEmbed()
                .setTitle("Oro")
                .setColor("#fddc4d")
                .setDescription("El oro es un elemento químico cuyo número atómico es 79. Está ubicado en el grupo 11 de la tabla periódica. Es un metal precioso blando de color amarillo dorado. Su símbolo es Au (del latín aurum, ‘brillante amanecer’). Además, es uno de los metales más apreciados en joyería por sus propiedades físicas, al tener baja alterabilidad, ser muy maleable, dúctil y brillante, y valorado por su rareza, al ser un metal difícil de encontrar en la naturaleza.")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964716664023285870/gold-ingots_1.png")
                .addField("Código ISO", "XAU ", true)
                .addField("Número y símbolo atómico ", "79 - Au ", true)
                .addField("Dureza ", "3,0", true)
                .addField("Masa atómica", "196,966569(4) u", true)


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


    //Plata


    if (interaction.options.getSubcommand() === 'plata') {


      axios.get('https://api.exchangerate.host/latest')
        .then((SILVER) => {
          plata = SILVER.data['rates']['XAG']

          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')

            .then((EUR) => {

              const embed1 = new Discord.MessageEmbed()
                .setTitle("Plata <:silver:964717593816600606> ")
                .setColor("#cccccc")
                .setDescription("Plata + impuestos (PAIS (30%) y adelanto de ganancias (45%)")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964713789540958238/silver.png")
                .addField("Compra <:silver:964717593816600606>  ", 'ARS$ ' + currencyFormatter.format(((1 / plata)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                .addField("Venta <:silver:964717593816600606> ", 'ARS$ ' + currencyFormatter.format(((1 / plata)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' }), true)
                .addField("Impuestos <:silver:964717593816600606> ", 'ARS$ ' + currencyFormatter.format((((1 / plata)) * EUR.data['venta'] * 1.75), { locale: 'es-ES', code: ' ' }), true)


              const embed2 = new Discord.MessageEmbed()
                .setTitle("Plata")
                .setColor("#cccccc")
                .setDescription("La plata es un elemento químico de número atómico 47 situado en el grupo 11 de la tabla periódica de los elementos. Su símbolo es Ag (procede del latín argentum, “blanco”, “albo” o “brillante”). Es un metal noble, de transición, de color blanco brillante, blando, dúctil y maleable.")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964713789540958238/silver.png")
                .addField("Código ISO", "XAG ", true)
                .addField("Número y símbolo atómico ", "47 - Ag ", true)
                .addField("Dureza ", "3,0", true)
                .addField("Masa atómica", "107,8683 u", true)


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

    //Paladio

    if (interaction.options.getSubcommand() === 'paladio') {


      axios.get('https://api.exchangerate.host/latest')
        .then((ladio) => {
          paladio = ladio.data['rates']['XPD']

          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')

            .then((EUR) => {

              const embed1 = new Discord.MessageEmbed()
                .setTitle("Paladio <:silver:964717593816600606>  ")
                .setColor("#808080")
                .setDescription("Paladio + impuestos (PAIS (30%) y adelanto de ganancias (45%)")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964713789259911218/paladio.png")
                .addField("Compra <:paladio:964717594223456336>  ", 'ARS$ ' + currencyFormatter.format(((1 / paladio)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                .addField("Venta <:paladio:964717594223456336> ", 'ARS$ ' + currencyFormatter.format(((1 / paladio)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' }), true)
                .addField("Impuestos <:paladio:964717594223456336> ", 'ARS$ ' + currencyFormatter.format((((1 / paladio)) * EUR.data['venta'] * 1.75), { locale: 'es-ES', code: ' ' }), true)


              const embed2 = new Discord.MessageEmbed()
                .setTitle("Paladio")
                .setColor("#808080")
                .setDescription("El paladio es un elemento químico de número atómico 46 situado en el grupo 10 de la tabla periódica de los elementos. Su símbolo es Pd. Es un metal de transición del grupo del platino, blando, dúctil, maleable y poco abundante. Se parece químicamente al platino y se extrae de algunas minas de cobre y níquel. Se emplea principalmente como catalizador y en joyería.")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964713789259911218/paladio.png")
                .addField("Código ISO", "XPD ", true)
                .addField("Número y símbolo atómico ", "46 - Pd ", true)
                .addField("Dureza ", "4,75", true)
                .addField("Masa atómica", "106,42 u", true)


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

    //Platino



    if (interaction.options.getSubcommand() === 'platino') {


      axios.get('https://api.exchangerate.host/latest')
        .then((pl) => {
          platino = pl.data['rates']['XPT']

          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')

            .then((EUR) => {

              const embed1 = new Discord.MessageEmbed()
                .setTitle("Platino <:platinum:964717592923222017>")
                .setColor("#a9f8f7")
                .setDescription("Paladio + impuestos (PAIS (30%) y adelanto de ganancias (45%)")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964713788978913320/platinum.png")
                .addField("Compra  <:platinum:964717592923222017>  ", 'ARS$ ' + currencyFormatter.format(((1 / platino)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }), true)
                .addField("Venta  <:platinum:964717592923222017> ", 'ARS$ ' + currencyFormatter.format(((1 / platino)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' }), true)
                .addField("Impuestos  <:platinum:964717592923222017> ", 'ARS$ ' + currencyFormatter.format((((1 / platino)) * EUR.data['venta'] * 1.75), { locale: 'es-ES', code: ' ' }), true)


              const embed2 = new Discord.MessageEmbed()
                .setTitle("Platino")
                .setColor("#a9f8f7")
                .setDescription("El platino es un elemento químico de número atómico 78, situado en el grupo 10 de la tabla periódica de los elementos. Su símbolo es Pt. Se trata de un metal de transición blanco grisáceo, precioso, pesado, maleable y dúctil. Es resistente a la corrosión y se encuentra en distintos minerales, frecuentemente junto con níquel y cobre; también se puede encontrar como metal. Se emplea en joyería, equipamiento de laboratorio, contactos eléctricos, empastes y catalizadores de automóviles.")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964713788978913320/platinum.png")
                .addField("Código ISO", "XPT ", true)
                .addField("Número y símbolo atómico ", "78 - Pt ", true)
                .addField("Dureza ", "4,3", true)
                .addField("Masa atómica", "195.084 u", true)


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
      axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
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

      axios.get('https://api-dolar-argentina.herokuapp.com/api/dolarblue')
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

      axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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


      axios.get('https://api-dolar-argentina.herokuapp.com/api/real/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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


          axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
      axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
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
      axios.get('https://api-dolar-argentina.herokuapp.com/api/dolarblue')
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
      axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
      axios.get('https://api-dolar-argentina.herokuapp.com/api/real/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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


          axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
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
    