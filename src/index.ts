//Librerías de node
import Discord = require("discord.js");
import fs = require('fs') //fs 
import express from 'express'
require('dotenv').config() //Variables de entorno

//Intents requeridos
const { Client, Intents, EmbedBuilder, reactions, Collection } = require('discord.js');
const client = new Client({
  intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
      ],
});
//Estado del bot
// client.setMaxListeners(50);

//Command Handler
client.slashcommands = new Discord.Collection();
const slashcommandsFile = fs.readdirSync('src/commands').filter(file => file.endsWith("ts"))
let cantidadComandos:number = 0
for (const file of slashcommandsFile) {
  const slash = require(`./commands/${file}`)
  // console.log(`Slash  commands - ${file} cargado`)
  cantidadComandos++
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

//Ready
client.on("ready", async () => {
  console.log("Bot funcionando y conectado a Discord ✅");
  console.log("Cargados "  +  cantidadComandos +  " comandos ✅")
  client.user.setPresence({
    status: "online",
    activities: [{
      name: 'Bot creado por GonzaAhre | Prueba /help o /update',
      type: Discord.ActivityType.Custom
    }]
  })

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


})
client.login(process.env.token);