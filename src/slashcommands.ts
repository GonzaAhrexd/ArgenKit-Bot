// Librerías nativas
import fs from "fs";
import path from "path";
import "dotenv/config"; // Variables de entorno

// Librerías de discord.js v14
import { REST, Routes } from "discord.js";

const clientId = process.env.CLIENT_ID;
const token = process.env.token;

if (!token) {
  throw new Error("❌ Falta el token del bot en el archivo .env");
}

const commands: any[] = [];

const commandsPath = path.join(__dirname, "commands");

const slashcommandFiles = fs
  .readdirSync(commandsPath)
  .filter(
    (file) =>
      (file.endsWith(".ts") || file.endsWith(".js")) && !file.endsWith(".d.ts"),
  );

for (const file of slashcommandFiles) {
  const filePath = path.join(commandsPath, file);
  const slash = require(filePath);

  const commandData = slash.default || slash;

  if (commandData?.data) {
    commands.push(
      commandData.data.toJSON ? commandData.data.toJSON() : commandData.data,
    );
  } else {
    console.warn(
      `⚠️ [Advertencia] El archivo ${file} no exporta 'data'. Se omitirá.`,
    );
  }
}

const rest = new REST({ version: "10" }).setToken(token);

(async () => {
  try {
    console.log(`⏳ Empezando a registrar ${commands.length} comandos (/).`);

    const data = (await rest.put(
      Routes.applicationCommands(clientId as string),
      {
        body: commands,
      },
    )) as any[];

    console.log(`✅ ¡Éxito! Se registraron ${data.length} comandos (/).`);
  } catch (error) {
    console.error("❌ Error al registrar los comandos:", error);
  }
})();
