
const fs = require('fs')
//@ts-ignore
const Discord = require('discord.js')
//@ts-ignore
// const {  REST } = require('@discordjs/rest')
//@ts-ignore
// const { Routes } = require('discord-api-types/v9')
require('dotenv').config() //Variables de entorno
// const guild = client.guilds.cache.get()  
// const clientId = '810272095279251556' //Bot de pruebas
const clientId = '796173877981216799' //Bot estable
const commands = []
let slashcommandFiles = fs.readdirSync("./src/commands").filter(file => file.endsWith('ts'))

for(const file of slashcommandFiles){
    const slash = require(`./commands/${file}`)
    //@ts-ignore
    commands.push(slash.data)
}

const rest = new Discord.REST({version: "9"}).setToken(process.env.token)

createSlash()

async function createSlash(){
    try{
        await rest.put(
            Discord.Routes.applicationCommands(clientId),{
                body: commands
            }
        )
            console.log("Slash agregados")
    }
    catch(e){
        console.error(e)
    }
}