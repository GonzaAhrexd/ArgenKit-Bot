import { ColorResolvable } from "discord.js"

type Metal = {
    id: String,
    nombre: String,
    emoji: string,
    desc: string,
    iso: string,
    numeroysimboloatomico: string,
    dureza: string,
    masaatomica: string,
    imagen: string
    color: ColorResolvable
}

const MetalesOpciones: Metal[] = [{
    id: "oro",
    nombre: "Oro",
    emoji: "<:goldingots:964717629484965938>",
    desc: "El oro es un elemento químico cuyo número atómico es 79. Está ubicado en el grupo 11 de la tabla periódica. Es un metal precioso blando de color amarillo dorado. Su símbolo es Au (del latín aurum, ‘brillante amanecer’). Además, es uno de los metales más apreciados en joyería por sus propiedades físicas, al tener baja alterabilidad, ser muy maleable, dúctil y brillante, y valorado por su rareza, al ser un metal difícil de encontrar en la naturaleza.",
    iso: "xau",
    numeroysimboloatomico: "79 - Au",
    dureza: "3,0",
    masaatomica: "196,966569(4) u",
    imagen: "https://cdn.discordapp.com/attachments/802944543510495292/964716664023285870/gold-ingots_1.png",
    color: "#fddc4d"
},
{
    id: "plata",
    nombre: "Plata",
    emoji: "<:silver:964717593816600606>",
    desc: "La plata es un elemento químico cuyo número atómico es 47. Está ubicado en el grupo 11 de la tabla periódica. Es un metal blanco plateado y muy valorado por sus propiedades conductoras de electricidad y termo conductoras. Además, es uno de los metales más utilizados en la fabricación de joyas y monedas. Su símbolo es Ag (del latín argentum, ‘plata’).",
    iso: "xag",
    numeroysimboloatomico: "47 - Ag",
    dureza: "2,5",
    masaatomica: "107,8682(2) u",
    imagen: "https://cdn.discordapp.com/attachments/802944543510495292/964713789540958238/silver.png",
    color: "#cccccc"
},
{
    id: "paladio",
    nombre: "Paladio",
    emoji: "<:paladio:964717594223456336>",
    desc: "El paladio es un elemento químico cuyo número atómico es 46. Está ubicado en el grupo 10 de la tabla periódica y es un metal blanco plateado. Es valorado por sus propiedades catalíticas y su capacidad para absorber hidrógeno. Se utiliza en la fabricación de catalizadores, joyas y electrónica. Su símbolo es Pd.",
    iso: "xpd",
    numeroysimboloatomico: "46 - Pd",
    dureza: "4",
    masaatomica: "106,42(1) u",
    imagen: "https://cdn.discordapp.com/attachments/802944543510495292/964713789259911218/paladio.png",
    color: "#808080"
},
{
    id: "platino",
    nombre: "Platino",
    emoji: "<:platinum:964717592923222017>",
    desc: "El platino es un elemento químico cuyo número atómico es 78. Está ubicado en el grupo 10 de la tabla periódica y es uno de los metales más raros en la corteza terrestre. Es valorado por su alta resistencia a la corrosión y por sus propiedades catalíticas. Se utiliza en la fabricación de joyas, catalizadores y termopares. Su símbolo es Pt.",
    iso: "xpt",
    numeroysimboloatomico: "78 - Pt",
    dureza: "4",
    masaatomica: "195,084(5) u",
    imagen: "https://cdn.discordapp.com/attachments/802944543510495292/964713788978913320/platinum.png",
    color: "#a9f8f7"
},
]

export default MetalesOpciones