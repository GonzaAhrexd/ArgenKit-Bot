import Discord from "discord.js";

const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, ComponentType } = Discord;

// Objeto con URLs de horarios
const trenesImages: Record<string, { nombre: string, ida: string, vuelta: string, precios: string, descripcion?: string }> = {
    "resistencia_tirol": {
        nombre: "Resistencia - Tirol",
        ida: "https://cdn.discordapp.com/attachments/1420381809451077794/1420381915474563113/image.png?ex=68d5313e&is=68d3dfbe&hm=73c0f2ba3aba54f751d4cc1de5dd10f5cc6c8f6965d23b743ed40d9d753ae214",
        vuelta: "https://cdn.discordapp.com/attachments/1420381809451077794/1420383153167663214/image.png?ex=68d53265&is=68d3e0e5&hm=6fe8bc0bdf503b46398520aa43ffa6b72eed0bc85f0174987c7cad513ffe4b92&",
        precios: "https://media.discordapp.net/attachments/1420381809451077794/1421108394235793418/image.png?ex=68d7d5d4&is=68d68454&hm=f0ccdbdec3f6d6f4b0bdd1c29b52195cc7a990057fecbfc91d04a9932b2659e2&=&format=webp&quality=lossless&width=286&height=73",
        descripcion: "🚆Trenes de Lunes a Viernes\n🕐 Duración estimada: **1 hs. 10 min.**\n💵Para viajar en los servicios regionales Chaco podés comprar tus pasajes las boleterías de las estaciones Resistencia, Cacuí y Sáenz Peña o arriba de la formación en efectivo."
    },
    "cacui_los amores": {
        nombre: "Cacui - Los Amores",
        ida: "https://media.discordapp.net/attachments/1420381809451077794/1420384938015985724/image.png?ex=68d5340e&is=68d3e28e&hm=78715f2669c96ad264c5aba887e1a95afa9f8d1c6e85d3ea41f14c6f8c44e104&=&format=webp&quality=lossless&width=602&height=189",
        vuelta: "https://media.discordapp.net/attachments/1420381809451077794/1420384993309360148/image.png?ex=68d5341b&is=68d3e29b&hm=09e97f59c93667f1ea1931eee1fd818f15aa060117de6ce53625868daadb7e35&=&format=webp&quality=lossless&width=607&height=186",
        precios: "https://media.discordapp.net/attachments/1420381809451077794/1421110710510817320/image.png?ex=68d7d7fc&is=68d6867c&hm=808bb4881cabcb1b6b005f60223a72f31579626db6370375993524d0871d9f58&=&format=webp&quality=lossless&width=542&height=267",
        descripcion: "🚆Trenes Lunes, Jueves y Viernes\n🕐 Duración estimada: **5hs. 20min.**\n💵Para viajar en los servicios regionales Chaco podés comprar tus pasajes las boleterías de las estaciones Resistencia, Cacuí y Sáenz Peña o arriba de la formación en efectivo."
    },
    "saenz peña_chorotis": {
        nombre: "Saenz Peña - Chorotis",
        ida: "https://media.discordapp.net/attachments/1420381809451077794/1420385379688648724/image.png?ex=68d53478&is=68d3e2f8&hm=3eee20a83b20afd2c9b7791d83578ebeb34f7e5458103d7ad077a409d2c95e73&=&format=webp&quality=lossless&width=423&height=115",
        vuelta: "https://media.discordapp.net/attachments/1420381809451077794/1420385515676373063/image.png?ex=68d53498&is=68d3e318&hm=3b12d3f58511a767c05d9f09cd45b2d952ed36a62d149e341912104b1d775200&=&format=webp&quality=lossless&width=439&height=114",
        precios: "https://media.discordapp.net/attachments/1420381809451077794/1421110893420347412/image.png?ex=68d7d827&is=68d686a7&hm=e5c3d21153417b408eb76d7b23acbf5ec4808c64aa0c4f741ae317ac5f6b5b24&=&format=webp&quality=lossless&width=666&height=350",
        descripcion: "🚆Trenes todos los días\n🕐 Duración estimada: **5 hs. 42 min.**\n💵Para viajar en los servicios regionales Chaco podés comprar tus pasajes las boleterías de las estaciones Resistencia, Cacuí y Sáenz Peña o arriba de la formación en efectivo."
    },
    "cipolletti_neuquen_plottier": {
        nombre: "Cipolletti - Neuquén - Plottier",
        ida: "https://media.discordapp.net/attachments/810272714815701022/1420402007688216738/image.png?ex=68d543f4&is=68d3f274&hm=57ae8bb4c369631351ad81e779f31a37e6f45dc471c563a0a1ec78d997ff34f4&=&format=webp&quality=lossless&width=788&height=316",
        vuelta: "https://media.discordapp.net/attachments/810272714815701022/1420402065682731150/image.png?ex=68d54402&is=68d3f282&hm=c9449529a23943bf7828c97ba54adf4f31203b27df7b75aa923bb2b7bbedb8b2&=&format=webp&quality=lossless&width=783&height=278",
        precios: "https://media.discordapp.net/attachments/1420381809451077794/1421111122085412935/image.png?ex=68d7d85e&is=68d686de&hm=ec194233ab52abe2c9565f405828cd968ec5c1c8b0628947c319a21d08804e5b&=&format=webp&quality=lossless&width=680&height=235",
        descripcion: "🚆Trenes de lunes a viernes\n🕐Duración estimada: **1 hora, 11 min.**\n💳En el servicio regional de Neuquén podés viajar con SUBE apoyando la tarjeta en los validadores del tren con previa autorización del guarda. En caso de que la tarjeta no posea beneficios se pueden pagar varios boletos con la misma tarjeta."
    },
    "güemes_salta_campo_quijano": {
        nombre: "Güemes - Salta - Campo Quijano",
        ida: "https://media.discordapp.net/attachments/810272714815701022/1420406309026795570/image.png?ex=68d547f5&is=68d3f675&hm=55098d9a8079261c93588aa5b89e469b878387cd1ddab8488430eb33686c0d39&=&format=webp&quality=lossless&width=434&height=428",
        vuelta: "https://media.discordapp.net/attachments/810272714815701022/1420406359517696040/image.png?ex=68d54801&is=68d3f681&hm=5c4e79aa316e950c69d50d3a55a37b4c04ba35c674d51bf4d92c6bc26a751c5c&=&format=webp&quality=lossless&width=419&height=409",
        precios: "https://media.discordapp.net/attachments/1420381809451077794/1421111402873229427/image.png?ex=68d7d8a1&is=68d68721&hm=6aeb9d629cf765f56f992c18c8dffe483fed6dd09f5a7038de48650aba7faccd&=&format=webp&quality=lossless&width=593&height=294",
        descripcion: "🚆 Trenes de Lunes a Viernes de Güemes a Campo Quijano y Sábado solo de Güemes a Salta\n🕐Duración estimada: **2 hs. 52 min.**\n💳Para viajar en el servicio regional Salta tenés que tener hecha la reserva de viaje, luego podés comprar tus pasajes en las boleterías habilitadas abonando en efectivo o con tarjeta SAETA. La tarjeta se recarga en las estaciones Salta, Güemes y Campo Quijano (no se vende el plástico). Además, podés pagar varios boletos con la misma tarjeta, en este caso tenés que apoyarla en el validador al ingresar al coche."
    },

    "tren_de_las_sierras": {
        nombre: "Tren de las Sierras (Córdoba)",
        ida: "https://media.discordapp.net/attachments/810272714815701022/1420407165356605450/image.png?ex=68d548c2&is=68d3f742&hm=6a6927f650edb30f5c3c9b3671782afac4e8d6094c9d988da1bff67464e75918&=&format=webp&quality=lossless&width=849&height=216",
        vuelta: "https://media.discordapp.net/attachments/810272714815701022/1420407222210662470/image.png?ex=68d548cf&is=68d3f74f&hm=1412914b2fa454ff69b413866a91fd4bee08482648ae1f82dbc30fdb72c25486&=&format=webp&quality=lossless&width=832&height=189",
        precios: "https://media.discordapp.net/attachments/1420381809451077794/1421111659526750250/image.png?ex=68d7d8de&is=68d6875e&hm=1d3a57ae80427e7e31957a25085c7a85d764625faa80a24027b12fc8ea21a51f&=&format=webp&quality=lossless&width=761&height=420",
        descripcion: "🚆Trenes todos los días \n 🕐Duración estimada: **4 hs. 56 min.**\n🧳Cada persona podrá transportar un bolso de mano de máximo 10 kg. y que no mida más de 45 cm. de alto, 35 cm. de ancho, 25 cm. de profundidad. Sólo podrán subir al tren con valijas de mayor tamaño las personas con pasajes para el tren de larga distancia del día.\n💵Para viajar en el Tren de las Sierras desde Córdoba a Cosquín y de Cosquín a Capilla del Monte podés comprar tus pasajes el mismo día de viaje en las boleterías habilitadas o arriba de la formación."
    },
    "villa_maria_cordoba": {
        nombre: "Villa María - Córdoba",
        ida: "https://media.discordapp.net/attachments/810272714815701022/1420407657331691605/image.png?ex=68d54937&is=68d3f7b7&hm=805dac729e1561edfdc9865288b42ffdc2d2fc6641c04543c89c06e45074be5d&=&format=webp&quality=lossless&width=853&height=265",
        vuelta: "https://media.discordapp.net/attachments/810272714815701022/1420407707403554836/image.png?ex=68d54943&is=68d3f7c3&hm=d5c62e4520e969324de6cf06cd46cf87500648d70d53f0d0dbaf28b9447641c9&=&format=webp&quality=lossless&width=845&height=157",
        precios: "https://media.discordapp.net/attachments/1420381809451077794/1421111886774276156/image.png?ex=68d7d914&is=68d68794&hm=9c15d310f1a5be8f8f2395ee0572cef5e48a61e94c6998e7e1f8cd3e5c8aa41e&=&format=webp&quality=lossless&width=712&height=314",
        descripcion: "🚆Trenes lunes, martes y sábados a Córdoba y lunes, viernes y domingos a Villa María\n🕐Duración estimada: **4 hs. 30 min.**\n💳Para viajar en el servicio entre Villa María y Córdoba, podés adquirir tus pasajes en forma anticipada a través de la web, en las boleterías habilitadas o arriba de la formación."
    },
    "parana_enrique_berduc_jorge_mendez": {
        nombre: "Paraná - Enrique Berduc - Jorge Méndez",
        ida: "https://media.discordapp.net/attachments/810272714815701022/1420408325971120270/image.png?ex=68d549d6&is=68d3f856&hm=e8949191a766ce24d68d9ac95e1d6e094b948e34693d0d8975f0aed816f47426&=&format=webp&quality=lossless&width=786&height=226",
        vuelta: "https://media.discordapp.net/attachments/810272714815701022/1420408380450668664/image.png?ex=68d549e3&is=68d3f863&hm=4ed68626f5a30341fb7ce3fb070f16070ea2eb37ba0f35c3cd63b90b32d913c9&=&format=webp&quality=lossless&width=772&height=218",
        precios: "https://media.discordapp.net/attachments/1420381809451077794/1421112554414936144/image.png?ex=68d7d9b3&is=68d68833&hm=bba1c0c76bd27363001199fe214379124b42fd136ede57cb5c96e3a4cb35feb4&=&format=webp&quality=lossless&width=488&height=242",
        descripcion: "Trenes de lunes a sábado\n🕐Duración estimada: **1 hs. 20 min.**\n💳Para viajar en el servicio regional de Entre Ríos podés comprar tus pasajes en las boleterías o a bordo del tren."
    },
    // Internacional
    "posadas_encarnacion": {
        nombre: "Posadas - Encarnación",
        ida: "https://media.discordapp.net/attachments/1420381809451077794/1420436224379981834/image.png?ex=68d563d2&is=68d41252&hm=1c8373ff0bb04584a0e1ce1805fd356dc8332b58ef41b8f3810ecda3d77ea231&=&format=webp&quality=lossless&width=160&height=395",
        vuelta: "https://media.discordapp.net/attachments/1420381809451077794/1420436282693259334/image.png?ex=68d563e0&is=68d41260&hm=cb7c3d77508a03d45d4d2a4bbdb2b58bdaf597a945d247b38eea1093f5538131&=&format=webp&quality=lossless&width=154&height=398",
        precios: "https://media.discordapp.net/attachments/1420381809451077794/1421112771139080282/image.png?ex=68d7d9e7&is=68d68867&hm=dd0fc976ecda0cbd2e2f3388b95af1aba9a321644dfce80b3edced4d308ada24&=&format=webp&quality=lossless&width=169&height=416",
        descripcion: "🚆Trenes de lunes a sábado\n🕐Duración estimada: **8min.**\n 💳Para viajar en el servicio internacional, podés comprar el pasaje en el punto fronterizo en Posadas o Encarnación"
    },
    // Larga distancia 
    "buenosaires_mardelplata": {
        nombre: "Buenos Aires - Mar del Plata",
        ida: "https://media.discordapp.net/attachments/1420381809451077794/1420427810073350337/image.png?ex=68d55bfc&is=68d40a7c&hm=9cbbc040f987daec50083f257501de38210d9b1c79a56d9ddcc30ec34e5b3d8e&=&format=webp&quality=lossless&width=814&height=295",
        vuelta: "https://media.discordapp.net/attachments/1420381809451077794/1420427918185730109/image.png?ex=68d55c15&is=68d40a95&hm=89be8b6d2ab68d00942f0c745c049fb95531209d0a25697b472f268c094363ff&=&format=webp&quality=lossless&width=814&height=331",
        precios: "https://media.discordapp.net/attachments/1420381809451077794/1421113031500234762/image.png?ex=68d7da25&is=68d688a5&hm=e417f7bafde8d21c737634d8f3f4c3d6c1e4b2cf2181a2a74c28ab83d93201bf&=&format=webp&quality=lossless&width=1016&height=340"
    },
    "buenosaires_bragado": {
        nombre: "Buenos Aires - Bragado",
        ida: "https://media.discordapp.net/attachments/1420381809451077794/1421095567978659951/image.png?ex=68d7c9e2&is=68d67862&hm=59593cb463bf2cf24e43f497b4570e49a10be08a8a5435688716e47d9a136251&=&format=webp&quality=lossless&width=562&height=119",
        vuelta: "https://media.discordapp.net/attachments/1420381809451077794/1421095486861082777/image.png?ex=68d7c9ce&is=68d6784e&hm=e22f55fa65e5c9e9bfe5843dd4cdeb7f6f556ffb4e5668c1719bf114bb420d52&=&format=webp&quality=lossless&width=566&height=124",
        precios: "https://media.discordapp.net/attachments/1420381809451077794/1421113291714855024/image.png?ex=68d7da63&is=68d688e3&hm=82c5439639f63190723e766cc5033adf705f8e72cc5f100aadb23bc8bb586f54&=&format=webp&quality=lossless&width=1011&height=389"
    },
    "buenosaires_cordoba": {
        nombre: "Buenos Aires - Justo Daract",
        ida: "https://media.discordapp.net/attachments/1420381809451077794/1421095991075143710/image.png?ex=68d7ca46&is=68d678c6&hm=00874ba223ad6aa6a2fcaa877fe0115dcbc3c32802181c819af25eecf71fcdbb&=&format=webp&quality=lossless&width=645&height=140",
        vuelta: "https://media.discordapp.net/attachments/1420381809451077794/1421096048700690502/image.png?ex=68d7ca54&is=68d678d4&hm=23beca01eb6e431ebeeebfe49c314abe88f7fcfbba0e24c964f32ed5324ecb65&=&format=webp&quality=lossless&width=641&height=162",
        precios: "https://media.discordapp.net/attachments/1420381809451077794/1421113569596014715/image.png?ex=68d7daa6&is=68d68926&hm=401464911380a9e51eba468b09188f3bd42c8573fab9377e963a2e6d9b299ea9&=&format=webp&quality=lossless&width=862&height=348"
    },
    "buenosaires_junin": {
        nombre: "Buenos Aires - Junín",
        ida: "https://media.discordapp.net/attachments/1420381809451077794/1421096307602362468/image.png?ex=68d7ca92&is=68d67912&hm=1a6f1f7ec1a94d0f8b4e2b218b9331f1cad72fdab0e44dc4ae8eb353bd1dbe0b&=&format=webp&quality=lossless&width=589&height=148",
        vuelta: "https://media.discordapp.net/attachments/1420381809451077794/1421096353102172261/image.png?ex=68d7ca9d&is=68d6791d&hm=3b2303e152255927666841610425474cf2a14fd035b73c4154b72253b682d809&=&format=webp&quality=lossless&width=618&height=171",
        precios: "https://media.discordapp.net/attachments/1420381809451077794/1421114026900979817/image.png?ex=68d7db13&is=68d68993&hm=b6c9208f45573494026adc0ac11bc203d4b7af360d60df5fef04d26e51056a7f&=&format=webp&quality=lossless&width=469&height=434"
    },
    "buenosaires_rosario": {
        nombre: "Buenos Aires - Rosario",
        ida: "https://media.discordapp.net/attachments/1420381809451077794/1421096688264810598/image.png?ex=68d7caed&is=68d6796d&hm=4a6a732d00a27a9b646d9e38b47d16a6aa5cdb9b4e81866415e2f8bc9c8aaaa8&=&format=webp&quality=lossless&width=562&height=155",
        vuelta: "https://media.discordapp.net/attachments/1420381809451077794/1421096787824873523/image.png?ex=68d7cb04&is=68d67984&hm=7aa5899516770125bc6ffed615afc0ee102047a626b31da8f7bafc8d58b3db04&=&format=webp&quality=lossless&width=562&height=154",
        precios: "https://media.discordapp.net/attachments/1420381809451077794/1421114271491817472/image.png?ex=68d7db4d&is=68d689cd&hm=595a2c60f5199c35afc5457e62b07a72de0052a9ecbfc2a0242425a6a61429da&=&format=webp&quality=lossless&width=489&height=433"
    },
    "buenosaires_tucuman": {
        nombre: "Buenos Aires - Tucumán",
        ida: "https://media.discordapp.net/attachments/1420381809451077794/1421097529730138242/image.png?ex=68d7cbb5&is=68d67a35&hm=f56c86905b3bf9b1818596a4af940ccff6f20b43b2050b5675a8f6e47687ae7c&=&format=webp&quality=lossless&width=1014&height=218",
        vuelta: "https://media.discordapp.net/attachments/1420381809451077794/1421097613553569934/image.png?ex=68d7cbc9&is=68d67a49&hm=9f46b2248e51bd062efb123f4bdbd4b7f2cf3559c931a8fac20eee1c07bdffe2&=&format=webp&quality=lossless&width=1014&height=218",
        precios: "https://media.discordapp.net/attachments/1420381809451077794/1421114733188218961/image.png?ex=68d7dbbb&is=68d68a3b&hm=2b68b9f3f3ffd3310585a82604c50d037e356df7e5fce19e2b8338dfc90d77aa&=&format=webp&quality=lossless&width=1077&height=246"
    }
};

const trenesPBA: Record<string, { nombre: string; imagen: string; url: string }> = {
    "roca": {
        nombre: "Línea Roca",
        imagen: "https://media.discordapp.net/attachments/1420381809451077794/1421101153495810130/plano_de_red_linea_roca_1-9-25.png?ex=68d7cf15&is=68d67d95&hm=a4727bae24a0c59d639aec4221c72a0925d92795e81f0cf574c646a539f3c750&=&format=webp&quality=lossless&width=1055&height=419",
        url: "https://www.argentina.gob.ar/transporte/trenes-argentinos/horarios-tarifas-y-recorridos/areametropolitana/linearoca"
    },
    "sarmiento": {
        nombre: "Línea Sarmiento",
        imagen: "https://media.discordapp.net/attachments/1420381809451077794/1421102441289486366/plano_de_red_linea_sarmiento_2024.png?ex=68d7d048&is=68d67ec8&hm=f886156d6b2d364a7c31343cd3e6f76623dfaea2616a7829a316d1c349811a0c&=&format=webp&quality=lossless&width=1327&height=529",
        url:"https://www.argentina.gob.ar/transporte/trenes-argentinos/horarios-tarifas-y-recorridos/areametropolitana/lineasarmiento"
    },
    "mitre": {
        nombre: "Línea Mitre",
        imagen: "https://media.discordapp.net/attachments/1420381809451077794/1421102760153317436/plano_de_red_linea_mitre_2024.png?ex=68d7d094&is=68d67f14&hm=f34804ba21e41e09bae0a35d36e155368ebdabcad2e2aa5a0dd6594d9715a25c&=&format=webp&quality=lossless&width=1327&height=530",
        url: "https://www.argentina.gob.ar/transporte/trenes-argentinos/horarios-tarifas-y-recorridos/areametropolitana/lineamitre"
    },
    "san_martin": {
        nombre: "Línea San Martín",
        imagen: "https://media.discordapp.net/attachments/1420381809451077794/1421103339491426466/plano_de_red_linea_san_martin_1_page-0001.png?ex=68d7d11e&is=68d67f9e&hm=afdb0ac5be6844cb0cfea4613c03e7eff3d918dac053f4cda66f10dc8dc27437&=&format=webp&quality=lossless&width=1327&height=530",
        url: "https://www.argentina.gob.ar/transporte/trenes-argentinos/horarios-tarifas-y-recorridos/areametropolitana/lineasanmartin"
    },
    "belgrano_sur": {
        nombre: "Línea Belgrano Sur",
        imagen: "https://media.discordapp.net/attachments/1420381809451077794/1421103090337058866/plano_de_red_linea_belgrano_sur_2024.png?ex=68d7d0e3&is=68d67f63&hm=294406d8121b7f8e317c76d8b8ab7256c0a0b61f834b09d1b3b37c9e8e69e4b4&=&format=webp&quality=lossless&width=1327&height=530",
        url: "https://www.argentina.gob.ar/transporte/trenes-argentinos/horarios-tarifas-y-recorridos/areametropolitana/lineabelgranosur"
    },
    "tren_de_la_costa": {
        nombre: "Tren de la Costa",
        imagen: "https://media.discordapp.net/attachments/1420381809451077794/1421103584082268202/plano_de_red_tren_de_la_costa_2024.png?ex=68d7d159&is=68d67fd9&hm=5a1e35d0abd44d808ab4c98a42d4e1d8e4f3d4ac106e182c39d964e8342290df&=&format=webp&quality=lossless&width=1327&height=466",
        url: "https://www.argentina.gob.ar/transporte/trenes-argentinos/horarios-tarifas-y-recorridos/areametropolitana/tren-de-la-costa"
    }

}


// Fallback de texto si no hay imagen
const trenesData: Record<string, { estaciones: Record<string, string[]> }> = {
    "resistencia_tirol": {
        estaciones: {
            "Resistencia": ["04:18", "05:32", "06:12"],
            "San Martín": ["04:22", "05:36", "06:14"],
            "Alberdi": ["04:36", "05:50", "06:17"]
        }
    }
    // Agregá más ramales si no tienen imagen
};

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName("trenes")
        .setDescription("Mostrar información de trenes en Argentina")
                .addSubcommand(subcommand =>
                    subcommand
                        .setName("regional")
                        .setDescription("Horarios de trenes regionales")
                        .addStringOption(option =>
                            option
                                .setName("ramal")
                                .setDescription("Elegí el ramal regional")
                                .setRequired(true)
                                .addChoices(
                                    { name: "Resistencia - Tirol", value: "resistencia_tirol" },
                                    { name: "Cacui - Los Amores", value: "cacui_los amores" },
                                    { name: "Saenz Peña - Chorotis", value: "saenz peña_chorotis" },
                                    { name: "Cipolletti - Neuquén - Plottier", value: "cipolletti_neuquen_plottier" },
                                    { name: "Güemes - Salta - Campo Quijano", value: "güemes_salta_campo_quijano" },
                                    { name: "Tren de las Sierras (Córdoba)", value: "tren_de_las_sierras" },
                                    { name: "Villa María - Córdoba", value: "villa_maria_cordoba" },
                                    { name: "Paraná - Enrique Berduc - Jorge Méndez", value: "parana_enrique_berduc_jorge_mendez" }

                                )
                        )
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName("internacional")
                        .setDescription("Horarios de trenes internacionales")
                        .addStringOption(option =>
                            option
                                .setName("ramal")
                                .setDescription("Elegí el ramal de larga distancia")
                                .setRequired(true)
                                .addChoices(
                                    { name: "Posadas - Encarnación", value: "posadas_encarnacion" }
                                )
                        )
                )

                .addSubcommand(subcommand =>
                    subcommand
                        .setName("larga_distancia")
                        .setDescription("Horarios de trenes de larga distancia")
                        .addStringOption(option =>
                            option
                                .setName("ramal")
                                .setDescription("Elegí el ramal de larga distancia")
                                .setRequired(true)
                                .addChoices(
                                    { name: "Buenos Aires - Mar del Plata", value: "buenosaires_mardelplata" },
                                    { name: "Buenos Aires - Bragado", value: "buenosaires_bragado" },
                                    { name: "Buenos Aires - Justo Daract", value: "buenosaires_justo_daract" },
                                    { name: "Buenos Aires - Córdoba", value: "buenosaires_cordoba" },
                                    { name: "Buenos Aires - Gral. Guido - Divisadero de Pinamar", value: "buenosaires_gral_guido_divisadero_de_pinamar" },
                                    { name: "Buenos Aires - Junín", value: "buenosaires_junin" },
                                    { name: "Buenos Aires - Rosario", value: "buenosaires_rosario" },
                                    { name: "Buenos Aires - Tucumán", value: "buenosaires_tucuman" },

                                )
                        )
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName("metropolitana")
                        .setDescription("Horarios de trenes metropolitanos (Buenos Aires)")
                        .addStringOption(option =>
                            option
                                .setName("ramal")
                                .setDescription("Elegí el ramal de trenes metropolitanos")
                                .setRequired(true)
                                .addChoices(
                                    { name: "Roca", value: "roca" },
                                    { name: "Sarmiento", value: "sarmiento" },
                                    { name: "Mitre", value: "mitre" },
                                    { name: "Belgrano Sur", value: "belgrano_sur" },
                                    { name: "San Martín", value: "san_martin" },
                                    { name: "Tren de la Costa", value: "tren_de_la_costa" }
                                )
                        )
                ),

    async run(client, interaction) {
        const subcommandGroup = interaction.options.getSubcommandGroup(false);
        const subcommand = interaction.options.getSubcommand();

        // --- Horarios ---
            const ramal = interaction.options.getString("ramal", true);
            const imgData = trenesImages[ramal];

            // --- Metropolitana (PBA) ---
            if (subcommand === "metropolitana") {
                const pbaData = trenesPBA[ramal];
                if (!pbaData) {
                    return interaction.reply({
                        content: "Todavía no hay horarios disponibles para este ramal.",
                        ephemeral: true
                    });
                }
                const embed = new EmbedBuilder()
                    .setTitle(`Horarios - ${pbaData.nombre}`)
                    .setColor("Blue")
                    .setImage(pbaData.imagen)
                    .setURL(pbaData.url)
                    .setDescription(`[Ver más información y horarios detallados](${pbaData.url})`);
                return interaction.reply({ embeds: [embed] });
            }

            // Si existe imagen, usamos embed con botón
            if (imgData) {
                const embed = new EmbedBuilder()
                    .setTitle(`Horarios - ${imgData.nombre} (Ida)`)
                    .setColor("Blue")
                    .setImage(imgData.ida)
                    .setDescription(imgData.descripcion || "")

                const row = new ActionRowBuilder<any>().addComponents(
                    new ButtonBuilder()
                        .setCustomId(`cambiar_sentido_${ramal}_vuelta`)
                        .setLabel("Cambiar sentido")
                        .setStyle(ButtonStyle.Primary),
                        new ButtonBuilder()
                            .setCustomId("precios")
                            .setLabel("Ver precios") 
                            .setStyle(ButtonStyle.Success)
                );

                const msg = await interaction.reply({ embeds: [embed], components: [row], fetchReply: true });

                const collector = msg.createMessageComponentCollector({
                    componentType: ComponentType.Button,
                    time: 60_000
                });

               collector.on("collect", async i => {
    if (!i.isButton()) return;

    // --- Botón cambiar sentido ---
    if (i.customId.startsWith("cambiar_sentido")) {
        const sentido = i.customId.endsWith("_vuelta") ? "vuelta" : "ida";

        const newEmbed = new EmbedBuilder()
            .setTitle(`Horarios - ${imgData.nombre} (${sentido === "ida" ? "Ida" : "Vuelta"})`)
            .setColor("Blue")
            .setImage(imgData[sentido]);

        const newRow = new ActionRowBuilder<any>().addComponents(
            new ButtonBuilder()
                .setCustomId(`cambiar_sentido_${ramal}_${sentido === "ida" ? "vuelta" : "ida"}`)
                .setLabel("Cambiar sentido")
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId("precios")
                .setLabel("Ver precios")
                .setStyle(ButtonStyle.Success)
        );

        return await i.update({ embeds: [newEmbed], components: [newRow] });
    }

    // --- Botón precios ---
    if (i.customId === "precios") {
        const preciosEmbed = new EmbedBuilder()
            .setTitle(`Tarifas - ${imgData.nombre}`)
            .setColor("Green");

        if (imgData.precios) {
            preciosEmbed.setImage(imgData.precios);
        } else {
            preciosEmbed.setDescription("No hay información de tarifas disponible por el momento.");
        }

        const newRow = new ActionRowBuilder<any>().addComponents(
            new ButtonBuilder()
                .setCustomId(`cambiar_sentido_${ramal}_ida`)
                .setLabel("Ver horarios")
                .setStyle(ButtonStyle.Primary)
        );

        return await i.update({ embeds: [preciosEmbed], components: [newRow] });
    }
});


                return;
            }

            // --- Fallback texto ---
            const data = trenesData[ramal];
            if (!data) {
                return interaction.reply({
                    content: "Todavía no hay horarios disponibles para este ramal.",
                    ephemeral: true
                });
            }

            const embed = new EmbedBuilder()
                // @ts-ignore
                .setTitle(`Horarios - ${imgData.nombre} (Ida)`)
                .setColor("Blue");

            for (const [estacion, horarios] of Object.entries(data.estaciones)) {
                embed.addFields({ name: estacion, value: horarios.join("\n"), inline: true });
            }

            return interaction.reply({ embeds: [embed] });
        
    }
};
