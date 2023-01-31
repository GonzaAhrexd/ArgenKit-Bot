//@ts-ignore
const fs = require('fs')
//@ts-ignore
const Discord = require('discord.js')
//@ts-ignore
const {  REST } = require('@discordjs/rest')
//@ts-ignore
const { Routes } = require('discord-api-types/v9')
require('dotenv').config() //Variables de entorno
// const guild = client.guilds.cache.get()  
const clientId = '810272095279251556' //Cambiar por el ID del bot estable
const commands = []
let slashcommandFiles = fs.readdirSync("./dist/commands").filter(file => file.endsWith('js'))

for(const file of slashcommandFiles){
    const slash = require(`../dist/commands/${file}`)
    //@ts-ignore
    commands.push(slash.data)
}

const rest = new REST({version: "9"}).setToken(process.env.token)

createSlash()

async function createSlash(){
    try{
        await rest.put(
            Routes.applicationCommands(clientId),{
                body: commands
            }
        )
            console.log("Slash agregados")
    }
    catch(e){
        console.error(e)
    }
}