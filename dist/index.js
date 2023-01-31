"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Dependencias de node
const Discord = require("discord.js");
const fs = require("fs"); //fs
const simplydjs = require("simply-djs"); //Simplydjs 
require('dotenv').config(); //Variables de entorno
//Intents requeridos
const { Client, Intents, MessageEmbed, reactions, Collection } = require('discord.js');
const client = new Client({
    intents: [Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ],
});
//Estado del bot
// client.setMaxListeners(50);
//Command Handler
client.slashcommands = new Discord.Collection();
const slashcommandsFile = fs.readdirSync('./dist/commands').filter(file => file.endsWith("js"));
for (const file of slashcommandsFile) {
    const slash = require(`../dist/commands/${file}`);
    console.log(`Slash  commands - ${file} cargado`);
    client.slashcommands.set(slash.data.name, slash);
}
client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand())
        return;
    const slashcmds = client.slashcommands.get(interaction.commandName);
    if (!slashcmds)
        return;
    try {
        await slashcmds.run(client, interaction);
    }
    catch (e) {
        console.error(e);
    }
});
//Ready
client.on("ready", async () => {
    console.log("Bot funcionando y conectado a Discord ✅");
    client.user.setPresence({
        status: "online",
        activities: [{
                name: 'Bot creado por GonzaAhre | Prueba /help o /update',
                type: "PLAYING"
            }]
    });
    const guild = client.guilds.cache.get();
    let commands;
    // const guildId = '740761148160213082' //guild server de pruebas
    // client.application.commands.set([]); //Resetear comandos
    /*Mostrar comandos
    const list = await client.application.commands.fetch()
       console.log(list) */
    if (guild) {
        commands = guild.commands;
    }
    else {
        commands = client.application?.commands;
    }
    //Simply DJS
    //Calculadora
    commands?.create({
        name: 'calculadora',
        description: 'Calculadora interactiva por simply.djs',
    });
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
    });
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
    });
    //Fun
    //Piedra papel  o tijera
    client.on('interactionCreate', async (interaction) => {
        if (!interaction.isCommand()) {
            return;
        }
        /*
      await interaction.deferReply();
      await (10000);
      */
        const { commandName, options } = interaction;
        if (commandName === 'piedrapapelotijera') {
            await interaction.deferReply();
            simplydjs.rps(interaction, {
                //@ts-ignore
                embedColor: "#05e841",
                timeoutEmbedColor: "#f00a15",
                drawEmbedColor: "#e87a0c",
                winEmbedColor: "#e8dd05",
                embedFooter: "Piedra Papel o Tijera",
                credit: "FALSE",
                rockColor: "SECONDARY",
                paperColor: "SECONDARY",
                scissorsColor: "SECONDARY",
                slash: true,
                userSlash: "usuario"
            });
        }
    });
    //Tateti
    client.on('interactionCreate', async (interaction) => {
        if (!interaction.isCommand()) {
            return;
        }
        const { commandName, options } = interaction;
        if (commandName === 'tateti') {
            await interaction.deferReply();
            simplydjs.tictactoe(interaction, {
                //@ts-ignore
                slash: true,
                userSlash: "usuario"
            });
        }
    });
    //Utilidad
    //Calculadora
    client.on('interactionCreate', async (interaction) => {
        if (!interaction.isCommand()) {
            return;
        }
        const { commandName, options } = interaction;
        if (commandName === 'calculadora') {
            await interaction.deferReply();
            await (8000);
            simplydjs.calculator(interaction, {
                //@ts-ignore
                embedColor: "#0ce8dd",
                slash: true,
                credit: false
            });
        }
    });
});
client.login(process.env.token);
