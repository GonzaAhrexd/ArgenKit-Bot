import axios from "axios";
import Discord from "discord.js";
const { total21 } = require('../../functions/impuestos');
import { formatoPrecio } from '../../functions/formato';
const wait = require('node:timers/promises').setTimeout;

const Valorant = async (client: any, interaction: any) => {

const [oficial] = await Promise.all([
    axios.get('https://api.bluelytics.com.ar/v2/latest'),
]);
let valorDolar = oficial.data['oficial']['value_sell']

const embedValorant: Discord.EmbedBuilder = new Discord.EmbedBuilder()
embedValorant.setTitle("Valorant")
embedValorant.setURL("https://playvalorant.com/es-es/")
embedValorant.setDescription(`Los precios en Valorant en Argentina son los siguientes:`)
embedValorant.setColor("#FF4454")
embedValorant.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/f/fc/Valorant_logo_-_pink_color_version_%28cropped%29.png")
embedValorant.addFields(
    { name: "475 VP", value: "ARS" + formatoPrecio(total21(valorDolar * 4.99), "ARS"), inline: true },
    { name: "1000 VP", value: "ARS" + formatoPrecio(total21(valorDolar * 9.99), "ARS"), inline: true },
    { name: "2050 VP", value: "ARS" + formatoPrecio(total21(valorDolar * 19.99), "ARS"), inline: true },
    { name: "3650 VP", value: "ARS" + formatoPrecio(total21(valorDolar * 34.99), "ARS"), inline: true },
    { name: "5350 VP", value: "ARS" + formatoPrecio(total21(valorDolar * 49.99), "ARS"), inline: true },
    { name: "11000 VP", value: "ARS" + formatoPrecio(total21(valorDolar * 99.99), "ARS"), inline: true },
)

await wait(3000)
await interaction.editReply({ embeds: [embedValorant] });
}
export default Valorant;