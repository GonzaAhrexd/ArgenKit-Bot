// Librerías nativas de Node
import fs from "fs";
import path from "path";
import "dotenv/config"; // Variables de entorno

// Librerías de discord.js v14
import {
  Client,
  GatewayIntentBits,
  Collection,
  ActivityType,
} from "discord.js";

import { TOKEN } from "./config/envs";
// Inicialización del cliente con los Intents requeridos
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

// Extensión temporal para almacenar comandos (Idealmente, crea un archivo d.ts para esto)
(client as any).slashcommands = new Collection();

// ---------------------------------------------------
// COMMAND HANDLER
// ---------------------------------------------------
// __dirname apunta dinámicamente a 'dist' o 'src' dependiendo de dónde se ejecute
const commandsPath = path.join(__dirname, "commands");

// Filtramos leyendo dinámicamente los archivos (.ts o .js)
const slashcommandsFile = fs
  .readdirSync(commandsPath)
  .filter(
    (file) =>
      (file.endsWith(".ts") || file.endsWith(".js")) && !file.endsWith(".d.ts"),
  );

let cantidadComandos: number = 0;

for (const file of slashcommandsFile) {
  const filePath = path.join(commandsPath, file);
  const slash = require(filePath);

  // Soporte por si tu comando usa "export default" o "module.exports"
  const commandData = slash.default || slash;

  if (commandData?.data?.name) {
    (client as any).slashcommands.set(commandData.data.name, commandData);
    cantidadComandos++;
  } else {
    console.warn(
      `⚠️ [Advertencia] El archivo ${file} no exporta 'data.name'. Se omitirá.`,
    );
  }
}

// ---------------------------------------------------
// EVENTO: INTERACCIONES (SLASH COMMANDS)
// ---------------------------------------------------
client.on("interactionCreate", async (interaction) => {
  // En v14, el estándar para Slash Commands es isChatInputCommand()
  if (!interaction.isChatInputCommand()) return;

  const slashcmd = (client as any).slashcommands.get(interaction.commandName);
  if (!slashcmd) return;

  try {
    await slashcmd.run(client, interaction);
  } catch (e) {
    console.error(`Error ejecutando el comando ${interaction.commandName}:`, e);

    // Evita que la interacción se quede "cargando" si ocurre un error
    const replyContent = {
      content: "Hubo un error al ejecutar este comando.",
      ephemeral: true,
    };
    if (interaction.replied || interaction.deferred) {
      await interaction.followUp(replyContent);
    } else {
      await interaction.reply(replyContent);
    }
  }
});

// ---------------------------------------------------
// MANEJADORES DE ERRORES GLOBALES
// ---------------------------------------------------
process.on("unhandledRejection", (reason, p) => {
  console.log("Error encontrado (unhandledRejection)");
  console.log(reason, p);
});

process.on("uncaughtException", (err, origin) => {
  console.log("Error encontrado (uncaughtException)");
  console.log(err, origin);
});

process.on("uncaughtExceptionMonitor", (err, origin) => {
  console.log("Error encontrado (uncaughtExceptionMonitor)");
  console.log(err, origin);
});

// ---------------------------------------------------
// EVENTO: READY
// ---------------------------------------------------
client.on("ready", async () => {
  console.log("---------------------------------------------");
  console.log("✅ Bot funcionando y conectado a Discord ");
  console.log("✅ Cargados " + cantidadComandos + " comandos");
  console.log("---------------------------------------------");

  client.user?.setPresence({
    status: "online",
    activities: [
      {
        name: "El bot con funciones útiles para Argentina | Utiliza /help para ver los comandos disponibles o /update para ver las novedades.",
        type: ActivityType.Custom,
      },
    ],
  });
});

// ---------------------------------------------------
// INICIO DE SESIÓN
// ---------------------------------------------------
client.login(TOKEN);
