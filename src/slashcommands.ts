const { REST, Routes } = require('discord.js');

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

// const rest = new Discord.REST({version: "10"}).setToken(process.env.token)

// createSlash()

const rest = new REST().setToken(process.env.token);

(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
            Routes.applicationCommands(clientId),
			{ body: commands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();