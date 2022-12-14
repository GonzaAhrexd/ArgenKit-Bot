const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")
const { MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js');
const paginationEmbed = require('discordjs-button-pagination'); //Botones
module.exports = {
  data: new SlashCommandBuilder()
    .setName('provinciainfo')
    .setDescription('Muestra información sobre las 23 provincias de Argentina y la Ciudad Autonoma de Buenos Aires')
    .addStringOption(option =>
      option.setName('provincia')
        .setDescription('Ingresa la provincia de la que quieres saber información .')
        .setRequired(false)
        .addChoices(
          { name: 'CABA', value: 'caba' },
          { name: 'Buenos Aires', value: 'buenos aires' },
          { name: 'Catamarca', value: 'catamarca' },
          { name: 'Chaco', value: 'chaco' },
          { name: 'Chubut', value: 'chubut' },
          { name: 'Córdoba', value: 'cordoba' },
          { name: 'Corrientes', value: 'corrientes' },
          { name: 'Entre Ríos', value: 'entre ríos' },
          { name: 'Formosa', value: 'formosa' },
          { name: 'Jujuy', value: 'jujuy' },
          { name: 'La Pampa', value: 'la pampa' },
          { name: 'La Rioja', value: 'la rioja' },
          { name: 'Mendoza', value: 'mendoza' },
          { name: 'Misiones', value: 'misiones' },
          { name: 'Neuquén', value: 'neuquén' },
          { name: 'Río Negro', value: 'rio negro' },
          { name: 'Salta', value: 'salta' },
          { name: 'San Juan', value: 'san juan' },
          { name: 'San Luis', value: 'san luis' },
          { name: 'Santa Cruz', value: 'santa cruz' },
          { name: 'Santa Fé', value: 'santa fe' },
          { name: 'Santiago del Estero', value: 'santiago del estero' },
          { name: 'Tierra del Fuego', value: 'tierra del fuego' },
          { name: 'Tucuman', value: 'tucuman' },
        )),

  async run(client, interaction, options) {

    let provincia = interaction.options.getString('provincia')
    console.log(provincia)
    const provincias = [
      //Buenos Aires
      { identificacion: "buenos aires", nombre: "Buenos Aires  (BA)", color: "#0b67ff", bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Bandera_de_la_Provincia_de_Buenos_Aires.svg/1280px-Bandera_de_la_Provincia_de_Buenos_Aires.svg.png", url: "https://es.wikipedia.org/wiki/Provincia_de_Buenos_Aires", descripcion: "Buenos Aires es la provincia más grande y más poblada de Argentina. Su nombre proviene de la capital del país, la Ciudad  Autonoma de Buenos Aires,  que solía ser parte de la provincia hasta su federalización en 1880.", gobernador: "Alex Kicillof", capital: "La Plata", poblada: "La Matanza", fundacion: "2 de febrero de 1536 \n 11 de junio de 1580 (por Juan de Garay)", autonomia: "16 de febrero de 1820 ", superficie: "307.571 km²", poblacion: "18.004.120 hab.", gentillicio: "Bonaerense", clima: "Templado húmedo (clima pampeano)", ubicacion: "https://www.google.com.ar/maps/place/Provincia+de+Buenos+Aires/@-37.1243654,-62.2683371,7z/data=!3m1!4b1!4m5!3m4!1s0x95edbcb7595281d9:0x4ad309fcdcf0a144!8m2!3d-37.2017285!4d-59.8410697", ubicacionDesc: "El territorio está en la región este del país; limita al norte con las provincias de Santa Fe y Entre Ríos, al noreste con el Río de la Plata y la Ciudad Autónoma de Buenos Aires,9​ al este y sur con el mar Argentino del océano Atlántico, al suroeste con Río Negro, al oeste con la Provincia de La Pampa y al noroeste con la Provincia de Córdoba.", ubicacionImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Buenos_Aires_Province_in_Argentina_%28%2BFalkland_hatched%29.svg/800px-Buenos_Aires_Province_in_Argentina_%28%2BFalkland_hatched%29.svg.png" },
      //Catamarca
      { identificacion: "catamarca", nombre: "Catamarca  (CA)", color: "#F00505", bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Bandera_de_la_Provincia_de_Catamarca.svg/800px-Bandera_de_la_Provincia_de_Catamarca.svg.png", url: "https://es.wikipedia.org/wiki/Provincia_de_Catamarca", descripcion: "Catamarca es una de las 23 provincias de Argentina ubicada  al noroeste del país. Su capital es San Fernando del Valle de Catamarca, y otras ciudades importantes son Andalgalá,  Tinogasta y Belén. \n Su economía es una de las más diversificadas del país, ocupándose fundamentalmente de la minería, la industria, el comercio, el turismo, la ganadería y la agricultura. Además ocupa el puesto puesto número 12 en el ranking de desarrollo humano de las jurisdicciones de primer orden​ argentinas.", gobernador: "Raúl Jalil ", capital: "San Fernando del Valle de Catamarca", poblada: "San Fernando del Valle de Catamarca", fundacion: "1554", autonomia: "25 de agosto de 1821 ", superficie: "102.602 km²", poblacion: "396 895 hab.", gentillicio: "Catamarqueño/ña", clima: "Cálido y árido", ubicacion: "https://www.google.com.ar/maps/place/Catamarca/data=!4m2!3m1!1s0x94205dc5020ad4bd:0x3257c3237d6cc2dc?sa=X&ved=2ahUKEwji1LntjpDxAhX9r5UCHV3YBqoQ8gEwAHoECAcQAQ", ubicacionDesc: "Está ubicada al noroeste del país, en la región del Norte Grande Argentino, limitando al norte con Salta, al este con Tucumán y Santiago del Estero, al sureste con Córdoba, al sur con La Rioja y al oeste con Chile, cuyo límite está determinado por la divisoria de agua de la cordillera de los Andes.", ubicacionImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Catamarca_in_Argentina_%28%2BFalkland_hatched%29.svg/352px-Catamarca_in_Argentina_%28%2BFalkland_hatched%29.svg.png" },
      //Chaco
      { identificacion: "chaco", nombre: "Chaco  (CH)  ", color: "#1cb062", bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Bandera_de_la_Provincia_del_Chaco.svg/728px-Bandera_de_la_Provincia_del_Chaco.svg.png", url: "https://es.wikipedia.org/wiki/Provincia_del_Chaco", descripcion: "Chaco es una de las 23 provincias de Argentina ubicada al noreste del país. Su capital y ciudad más grande es Resistencia. \nSe la considera «joven» porque fue creada luego de la Organización Nacional. Su economía se apoya en el sector primario, donde se destacan los cultivos de algodón, soja, la producción de ganado vacuno y la extracción de madera. \nCuenta con una de las mayores poblaciones originarias del país, integrada por wichís, qom y mocovíes. Además de la población de origen indígena, el territorio de la actual provincia recibió inmigrantes de otras provincias y países. Actualmente hay descendientes de búlgaros, checos, croatas, eslovacos, españoles, italianos, paraguayos y montenegrinos.", gobernador: "Jorge Capitanich", capital: "Resistencia", poblada: "Gran Resistencia", fundacion: "14 de abril de 1585 ", autonomia: "8 de agosto de 1951", superficie: "99.633 km²", poblacion: "1.192.616 hab.", gentillicio: "Chaqueño/ña", clima: "Tropical semiárido y tropical húmedo", ubicacion: "https://www.google.com.ar/maps/place/Chaco/data=!4m2!3m1!1s0x9440effae3c87247:0x4eaf96c0979eec95?sa=X&ved=2ahUKEwi_i5-2k5DxAhUfqZUCHZlCAo4Q8gEwAHoECAcQAQ", ubicacionDesc: "Está ubicada en el noreste del país, en la región del Norte Grande Argentino, limitando al norte con los ríos Bermejo y Teuco que la separan de Formosa, al este con los ríos Paraguay y Paraná que la separan, respectivamente, de la República del Paraguay y la provincia de Corrientes, al sur con Santa Fe, al oeste con Santiago del Estero y al noroeste con la provincia de Salta.", ubicacionImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Chaco_in_Argentina_%28%2BFalkland%29.svg/270px-Chaco_in_Argentina_%28%2BFalkland%29.svg.png" },
      //Chubut
      { identificacion: "chubut", nombre: "Chubut  (CT)", color: "#F00505", bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bandera_de_la_Provincia_del_Chubut.svg/800px-Bandera_de_la_Provincia_del_Chubut.svg.png", url: "https://es.wikipedia.org/wiki/Provincia_del_Chubut", descripcion: "Chubut es una de las 23 provincias de Argentina ubicada al sur del país. Su capital es Rawson y su ciudad más poblada es Comodoro Rivadavia. La actividad económica más importante es la explotación de hidrocarburos fósiles no renovables (petróleo, gas butano). Chubut produce el 13 % del petróleo del país y casi el 2 % del gas. Existen minas e importantes -a nivel mundial- yacimientos de uranio, plomo, oro y plata.", gobernador: "Mariano Arcioni ", capital: "Rawson", poblada: "Comodoro Rivadavia", fundacion: "28 de julio de 1865 ", autonomia: "16 de octubre de 1884  (Territorio Nacional)\n 15 de junio de 1955(Provincialización) ", superficie: "224.686 km²", poblacion: "587.956 hab.", gentillicio: "Chubutense", clima: "Frío y húmedo ", ubicacion: "https://www.google.com.ar/maps/place/Chubut/data=!4m2!3m1!1s0xbde2a3c6a2577047:0xdad4458e4b26a228?sa=X&ved=2ahUKEwj2q4SrwJDxAhUmrpUCHUtEBmQQ8gEwAHoECAYQAQ", ubicacionDesc: "Está ubicada al centrosur de la región patagónica (entre los paralelos 42 y 46 de latitud sur), que ocupa la mitad sur del país, limitando al norte con Río Negro, al este con el mar Argentino (océano Atlántico), al sur con Santa Cruz y al oeste con Chile, cuyo límite está determinado por la divisoria de agua de la cordillera de los Andes.", ubicacionImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Chubut_in_Argentina_%28%2BFalkland_hatched%29.svg/352px-Chubut_in_Argentina_%28%2BFalkland_hatched%29.svg.png" },
      //Córdoba
      { identificacion: "cordoba", nombre: "Córdoba  (CB)", color: "#991426", bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bandera_de_la_Provincia_de_C%C3%B3rdoba_2014.svg/800px-Bandera_de_la_Provincia_de_C%C3%B3rdoba_2014.svg.png", url: "https://es.wikipedia.org/wiki/Provincia_de_C%C3%B3rdoba_(Argentina)", descripcion: "órdoba es una de las 23 provincias de Argentina ubicada en el centro del país. Es la segunda provincia más poblada después de Buenos Aires. \nLa economía de la provincia de Córdoba se ve beneficiada por numerosos factores. Sus características climáticas, topográficas, edáficas y fitogeográficas favorecen varias actividades productivas como la agricultura, ganadería, explotación forestal y minería.\nEl turismo, junto con la industria y los servicios, es una de las principales actividades económicas de la provincia, por lo que las inversiones en infraestructura turística son fomentadas por la Ley de Fomento Turístico N.º 7232 y sus Decretos Reglamentarios N.º 4557/85 y N.º 1360/00. ", gobernador: "Juan Schiaretti", capital: "Córdoba ", poblada: "Gran Córdoba", fundacion: "6 de julio de 1573 ", autonomia: "5 de enero de 1820", superficie: "165.310 km² ", poblacion: "3.760.450 hab.", gentillicio: "Cordobés/sa ", clima: "Templado moderado", ubicacion: "https://www.google.com.ar/maps/place/C%C3%B3rdoba/data=!4m2!3m1!1s0x9432985f478f5b69:0xb0a24f9a5366b092?sa=X&ved=2ahUKEwj87e-HxJDxAhUbrpUCHTttBSMQ8gEwAHoECAcQAQ ", ubicacionDesc: "Está ubicada en centro geográfico del país, al oeste de la región Centro de Argentina, limitando al norte con Catamarca y Santiago del Estero, al este con Santa Fe, al sureste con la Provincia de Buenos Aires, al sur con Provincia de La Pampa y al oeste con San Luis y La Rioja", ubicacionImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Cordoba_in_Argentina_%28%2BFalkland_hatched%29.svg/800px-Cordoba_in_Argentina_%28%2BFalkland_hatched%29.svg.png" },
      //Corrientes
      { identificacion: "corrientes", nombre: "Corrientes (CR)", color: "#76abdc", bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bandera_de_la_Provincia_de_Corrientes.svg/300px-Bandera_de_la_Provincia_de_Corrientes.svg.png", url: "https://es.wikipedia.org/wiki/Provincia_de_Corrientes", descripcion: "Corrientes es una de las 23 provincias de Argentina ubicada en el centro del país.\n En el aspecto histórico de la construcción del Estado Argentino, es una de las provincias más antiguas del territorio argentino y una de las catorce provincias fundadoras de la Confederación Argentina.", gobernador: "Gustavo Valdés", capital: "Corrientes", poblada: "Corrientes", fundacion: "3 de abril de 1588", autonomia: "20 de abril de 1814 ", superficie: " 88.199 km² ", poblacion: "1.111.052 hab. ", gentillicio: "Correntino/na ", clima: "Subtropical", ubicacion: "https://www.google.com.ar/maps/place/Corrientes/data=!4m2!3m1!1s0x94456b79d5bed36b:0xfa999f1ef3b40646?sa=X&ved=2ahUKEwj9ko3yyJDxAhWElZUCHd26AJUQ8gEwAHoECAcQAQ", ubicacionDesc: "Está ubicada geográficamente al noreste del país, en la región del Norte Grande Argentino, limitando al oeste y norte con el río Paraná que la separa de Santa Fe, Chaco y Paraguay, al noreste con Misiones, al este con el río Uruguay que la separa de Brasil y Uruguay, y al sur con Entre Ríos.", ubicacionImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Corrientes_in_Argentina_%28%2BFalkland%29.svg/352px-Corrientes_in_Argentina_%28%2BFalkland%29.svg.png" },
      //Entre Ríos
      { identificacion: "entre rios", nombre: "Entre Ríos (ER)", color: "#991426", bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Bandera_de_la_Provincia_de_Entre_R%C3%ADos.svg/800px-Bandera_de_la_Provincia_de_Entre_R%C3%ADos.svg.png", url: "https://es.wikipedia.org/wiki/Provincia_de_Entre_R%C3%ADos", descripcion: "Entre Ríos es una de las 23 provincias de Argentina ubicada en el centro del país localizada en la región mesopotámica del país. \nEs un componente (el más meridional) de la Mesopotamia argentina, conformada por los ríos Uruguay y Paraná en el Litoral argentino. Un 15 por ciento de su territorio está compuesto de islas y tierras anegadizas. A menudo se la considera como una provincia «insular», por estar rodeada por ríos y arroyos.\nLa actividad económica de la provincia se sustenta principalmente en la agricultura, la ganadería y el turismo y en menor medida en la minería y la industria.", gobernador: "Gustavo Bordet", capital: "Paraná", poblada: "Gran Paraná", fundacion: "3 de abril de 1588", autonomia: "20 de abril de 1814 ", superficie: " 88.199 km² ", poblacion: "1.111.052 hab. ", gentillicio: "Correntino/na ", clima: "Subtropical", ubicacion: "https://www.google.com.ar/maps/place/Corrientes/data=!4m2!3m1!1s0x94456b79d5bed36b:0xfa999f1ef3b40646?sa=X&ved=2ahUKEwj9ko3yyJDxAhWElZUCHd26AJUQ8gEwAHoECAcQAQ", ubicacionDesc: "Está ubicada geográficamente al noreste del país, en la región del Norte Grande Argentino, limitando al oeste y norte con el río Paraná que la separa de Santa Fe, Chaco y Paraguay, al noreste con Misiones, al este con el río Uruguay que la separa de Brasil y Uruguay, y al sur con Entre Ríos.", ubicacionImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Corrientes_in_Argentina_%28%2BFalkland%29.svg/352px-Corrientes_in_Argentina_%28%2BFalkland%29.svg.png" },

      //Formosa
      { identificacion: "formosa", nombre: "Formosa (FO)", color: "#76abdc", bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Bandera_de_la_Provincia_de_Formosa.svg/550px-Bandera_de_la_Provincia_de_Formosa.svg.png", url: "https://es.wikipedia.org/wiki/Provincia_de_Formosa", descripcion: "Formosa es una de las 23 provincias de Argentina ubicada en el noreste de Argentina.\nHabitada ancestralmente por varias tribus de origen pámpido y amazónico, el primer europeo arriba al territorio en 1528. La belicosidad de los nativos obligó a todos los intentos colonizadores a postergar su intento de ocupación. Luego de la Revolución de Mayo y las guerras de la Independencia, se mantuvo aislada, solo ocasionalmente habitada por obrajeros que arribaban a su territorio en busca de maderas. La Guerra de la Triple Alianza, en la que Paraguay fue atacado por Brasil, Argentina y Uruguay, despertó el interés del gobierno de la República Argentina de ocupar el mismo hacia la década de 1870.\nLa economía privada es esencialmente primaria, estando basada en la cría de ganado y en la agricultura.", gobernador: "Gildo Insfrán", capital: "Formosa", poblada: "Formosa", fundacion: "8 de abril de 1879", autonomia: "15 de junio de 1955 ", superficie: " 72.066 km² ", poblacion: "595.280 hab. ", gentillicio: "Formoseño/ña ", clima: "Tropical", ubicacion: "https://www.google.com.ar/maps/place/Corrientes/data=!4m2!3m1!1s0x94456b79d5bed36b:0xfa999f1ef3b40646?sa=X&ved=2ahUKEwj9ko3yyJDxAhWElZUCHd26AJUQ8gEwAHoECAcQAQ", ubicacionDesc: "Está ubicada en el noreste del país, en la región del Norte Grande Argentino, limitando al norte con el río Pilcomayo que la separa de Paraguay, al este con el río Paraguay que la separa de nuevo de Paraguay, al sur con los ríos Bermejo y Teuco que la separan de Chaco, y al oeste con Salta, mediante un meridiano", ubicacionImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Formosa_in_Argentina_%28%2BFalkland_hatched%29.svg/800px-Formosa_in_Argentina_%28%2BFalkland_hatched%29.svg.png" },
      //Jujuy
      { identificacion: "jujuy", nombre: "Jujuy (JY)", color: "#76abdc", bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Bandera_de_la_Provincia_de_Jujuy.svg/482px-Bandera_de_la_Provincia_de_Jujuy.svg.png", url: "https://es.wikipedia.org/wiki/Provincia_de_Jujuy", descripcion: "Jujuy es una de las 23 provincias de Argentina ubicada en el noroeste de Argentina.\nLa estructura económica se basa en las actividades primarias. Entre los cultivos están: la caña de azúcar, banana y el tabaco, seguidos de los cítricos, mangos, papayas, chirimoyas y paltas como producciones tradicionales (aunque modernas ya que datan del siglo XX) de la provincia. A esto debe sumarse la producción de combustibles: petróleo, gas y la ancestral actividad minera: (plomo, plata, cobre, oro, salitre, potasio, bórax).", gobernador: "Gerardo Morales", capital: "San Salvador de Jujuy", poblada: "Gran San Salvador de Jujuy", fundacion: "19 de abril de 1593", autonomia: "17 de diciembre de 1836  ", superficie: " 53.219 km² ", poblacion: "727.780 hab.", gentillicio: "jujeño/ña ", clima: "Tropical", ubicacion: "https://www.google.com.ar/maps/place/Jujuy/@-23.1907048,-66.8030576,8z/data=!3m1!4b1!4m5!3m4!1s0x9404a1f6e75c0087:0x815e91b230ce4e79!8m2!3d-22.6633212!4d-66.2367172", ubicacionDesc: "Está ubicada en el extremo noroeste del país, en la región del Norte Grande Argentino, limitando al oeste con la República de Chile hasta el trifinio cerro Zapaleri, donde comienza su frontera con el Estado Plurinacional de Bolivia (hacia el norte), y al este y sur con Salta", ubicacionImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Jujuy_in_Argentina_%28%2BFalkland_hatched%29.svg/800px-Jujuy_in_Argentina_%28%2BFalkland_hatched%29.svg.png" },
      //La Pampa
      { identificacion: "la pampa", nombre: "La Pampa (LP)", color: "#76abdc", bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Bandera_de_la_Provincia_de_La_Pampa.svg/391px-Bandera_de_la_Provincia_de_La_Pampa.svg.png", url: "https://es.wikipedia.org/wiki/Provincia_de_La_Pampa", descripcion: "La Pampa es una de las 23 provincias de Argentina y se ubica en el centro de Argentina.\nCon 318 951 habitantes en 2010 es la tercera provincia menos poblada —por delante de Santa Cruz y Tierra del Fuego\nEl sector agropecuario se desarrolla fundamentalmente en la zona nordeste de la provincia, por el régimen de lluvias y la calidad de los suelos. Se cultivan cereales, oleaginosas y especies forrajeras. Sobresalen el cultivo de trigo, el maíz y el girasol. En cuanto a la ganadería, que es el sector que más aporta a la economía provincial, se desarrolla prácticamente en toda la provincia, y radica en la cría y engorde de vacunos principalmente, y en menor medida ganado ovino, caprino, equino y porcino.", gobernador: "Sergio Ziliotto", capital: "Santa Rosa", poblada: "Santa Rosa", fundacion: "22 de abril de 1892", autonomia: "8 de agosto de 1951  ", superficie: " 143.440 km² ", poblacion: "349.299 hab.", gentillicio: "Pampeano/na ", clima: "Templados y semiáridos", ubicacion: "https://www.google.com.ar/maps/place/La+Pampa/data=!4m2!3m1!1s0x95dc6d0da46936e9:0xac1677be5ff258c8?sa=X&ved=2ahUKEwir5fWa55fxAhV7r5UCHVH3DQ4Q8gEwGXoECAQQAQ", ubicacionDesc: "Se encuentra en la Región pampeana, limitando al norte con las provincias de San Luis y Córdoba, al este con la provincia de Buenos Aires, al sur con el río Colorado que la separa de Río Negro, y al noroeste con Mendoza.", ubicacionImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/La_Pampa_in_Argentina_%28%2BFalkland_hatched%29.svg/352px-La_Pampa_in_Argentina_%28%2BFalkland_hatched%29.svg.png" },
      //La Rioja
      { identificacion: "la rioja", nombre: "La Rioja (LR)", color: "#007bc4", bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Bandera_de_la_Provincia_de_La_Rioja.svg/700px-Bandera_de_la_Provincia_de_La_Rioja.svg.png", url: "https://es.wikipedia.org/wiki/Provincia_de_La_Rioja", descripcion: "La Rioja es una de las 23 provincias de Argentina y se ubica en el noroeste de Argentina.\nEn La Rioja predomina un relieve montañoso de escasa vegetación sin la presencia de un curso de agua permanente. Su economía se sustenta a partir de la agricultura bajo riego artificial, con la producción de vid y olivos principalmente, sin embargo, también ha crecido considerablemente el turismo en los últimos años, sobresaliendo el parque nacional Talampaya como principal atractivo.", gobernador: "Ricardo Quintela", capital: "La Rioja", poblada: "La Rioja", fundacion: "20 de mayo de 1591", autonomia: "1 de marzo de 1820  ", superficie: " 89.680 km² ", poblacion: "387.728 hab.", gentillicio: "Riojano/na  ", clima: "Semiárido continental y árido de montaña", ubicacion: "https://www.google.com.ar/maps/place/La+Rioja/data=!4m2!3m1!1s0x9427d9873396f7e5:0x3e1c9c348972c7ca?sa=X&ved=2ahUKEwiys4mS7ZfxAhVvrJUCHSnXAP4Q8gEwAHoECAYQAQ", ubicacionDesc: "Está ubicada en el noroeste del país, limitando al norte con Catamarca, al este con Córdoba, al sur con San Luis, al oeste con San Juan y al noroeste con Chile, cuya frontera está determinada por la divisoria de aguas de la cordillera de los Andes.", ubicacionImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/La_Rioja_in_Argentina_%28%2BFalkland_hatched%29.svg/352px-La_Rioja_in_Argentina_%28%2BFalkland_hatched%29.svg.png"},
      //Mendoza
      { identificacion: "mendoza", nombre: "Mendoza (MZ)", color: "#76abdc", bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Bandera_de_la_Provincia_de_Mendoza.svg/603px-Bandera_de_la_Provincia_de_Mendoza.svg.png", url: "https://es.wikipedia.org/wiki/Provincia_de_Mendoza", descripcion: "Mendoza es una de las 23 provincias de Argentina y se ubica en el oeste de Argentina.\nLa principal actividad es la vitivinicultura, siendo la provincia más importante en la producción de Vinos Argentinos. Según el Instituto Nacional de Vitivinicultura, el cultivo de la vid en Mendoza ocupa el 68,36 % del total de la región centro-oeste, la cual representa el 94,13 % del total de la producción nacional de vides. La mitad de las explotaciones agrícolas mendocinas corresponden a dicha rama. Mendoza desarrolla esta actividad desde 1598, y se vio muy favorecida con la llegada del ferrocarril en 1885.", gobernador: "Rodolfo Suárez", capital: "Mendoza", poblada: "Gran Mendoza", fundacion: "2 de marzo de 1561", autonomia: "1 de marzo de 1820  ", superficie: " 148.827 km² ", poblacion: "2.086.000  hab. ", gentillicio: "Mendocino/na   ", clima: "Semiárido continental", ubicacion: "https://www.google.com.ar/maps/place/Mendoza/@-34.7622271,-70.7741011,7z/data=!3m1!4b1!4m5!3m4!1s0x9679745b5dd5fffd:0x902586f1d047824!8m2!3d-34.5869034!4d-68.1431414", ubicacionDesc: "Está ubicada al suroeste de la región del Nuevo Cuyo y más exactamente el Cuyo, al oeste del país, limitando al norte con San Juan, al este con el río Desaguadero, que la separa de San Luis, al sureste con la provincia de La Pampa, al sur con Neuquén (parte de su frontera la forma el río Colorado), al oeste con las regiones chilenas de Valparaíso, Metropolitana de Santiago, O'Higgins y Maule, cuyo límite está determinado por la divisoria de aguas de la cordillera de los Andes.", ubicacionImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Mendoza_in_Argentina_%28%2BFalkland_hatched%29.svg/352px-Mendoza_in_Argentina_%28%2BFalkland_hatched%29.svg.png" },
      //Misiones
      { identificacion: "misiones", nombre: "Misiones (MI)", color: "#dd0000", bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Bandera_de_la_Provincia_de_Misiones.svg/800px-Bandera_de_la_Provincia_de_Misiones.svg.png", url: "https://es.wikipedia.org/wiki/Provincia_de_Misiones", descripcion: "Mendoza es una de las 23 provincias de Argentina y se ubica en el noreste de Argentina.\n Misiones posee tierra colorada en la totalidad de su territorio (tipo de suelo considerado como el más fértil del mundo por su alto contenido de nutrientes para plantas y árboles de gran demanda nutricional, caracterizado por ser el resultado de la descomposición de rocas de origen arenito-basáltico (derrames volcánicos). \nA nivel nacional Misiones se destaca con más del 80 % de la producción de tung, yerba mate y té, además de La agroindustria y la industria forestal y el turismo.  \n Las Cataratas del Iguazú son la principal atracción turística de la provincia, donde se pueden ver miles  de extranjeros todos los años. ", gobernador: "Oscar Herrera Ahuad ", capital: "Posadas", poblada: "Posadas", fundacion: "22 de diciembre de 1881", autonomia: "10 de diciembre de 1953  ", superficie: "29.801 km² ", poblacion: "1.233.177  hab. ", gentillicio: "Misionero/ra   ", clima: "Subtropical húmedo sin estación seca", ubicacion: "https://www.google.com.ar/maps/place/Misiones/data=!4m2!3m1!1s0x94f811245d4ce333:0xfb5d357febb15a1d?sa=X&ved=2ahUKEwiV--Ge-p3xAhWQr5UCHfDnADEQ8gEwAHoECAcQAQ", ubicacionDesc: "Está ubicada en el noreste del país, en la región del Norte Grande Argentino, limitando al norte y este con los ríos Iguazú, San Antonio, Pepirí Guazú y Uruguay que la separan de Brasil, al sur con Corrientes, por medio de los arroyos Itaembé y Chimiray, y al oeste con el río Paraná que la separa de Paraguay.", ubicacionImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Misiones_in_Argentina_%28%2BFalkland_hatched%29.svg/352px-Misiones_in_Argentina_%28%2BFalkland_hatched%29.svg.png" },
      //Neuquen
      { identificacion: "neuquen", nombre: "Neuquén  (NQN)", color: "#04a2e0", bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Bandera_de_la_Provincia_del_Neuquen.svg/800px-Bandera_de_la_Provincia_del_Neuquen.svg.png", url: "https://es.wikipedia.org/wiki/Provincia_del_Neuqu%C3%A9n", descripcion: "Neuquén es una de las 23 provincias de Argentina y se ubica en el noroeste la región patagónica de Argentina.\n La principal actividad productiva es la explotación de hidrocarburos. La cuenca neuquina, compartida con Río Negro, La Pampa y Mendoza, es la zona petrolera y gasífera más importante de Argentina. Además produce el 52 % de la energía eléctrica (principalmente hidroelectridad) del país con centrales en los embalses Piedra del Águila, Pichi Picún Leufú, El Chocón, Planicie Banderita y Alicurá. ", gobernador: "Omar Gutiérrez ", capital: "Neuquén", poblada: "Neuquén", fundacion: "8 de febrero de 1883", autonomia: "15 de junio de 1955  ", superficie: "94.078 km² ", poblacion: "637.913  hab. ", gentillicio: "Neuquino/na    ", clima: "Continental, frío, con estación templada.", ubicacion: "https://www.google.com.ar/maps/place/Neuqu%C3%A9n/data=!4m2!3m1!1s0x960d6bad5ae41889:0x8c3031d1bbb3d22f?sa=X&ved=2ahUKEwiCnuLDpaHxAhVGrZUCHUMUA4gQ8gEwFHoECAUQAQ", ubicacionDesc: "Está ubicada al noroeste de la región patagónica, la cual ocupa la mitad sur del país; limita al norte con Mendoza (parte de su frontera la forma el río Colorado), al sureste con Río Negro (gran parte de esta frontera la forma el río Limay) y al oeste con Chile, con las regiones chilenas de Maule, Ñuble, Bío-bío, La Araucanía, Los Ríos y Los Lagos; cuyos límites están determinados por la divisoria de agua y el criterio de altas cumbres de la cordillera de los Andes.", ubicacionImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Neuquen_in_Argentina_%28%2BFalkland_hatched%29.svg/352px-Neuquen_in_Argentina_%28%2BFalkland_hatched%29.svg.png" },
      //Río Negro
      { identificacion: "río negro", nombre: "Río Negro (RN)", color: "#029a3a", bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Bandera_de_la_Provincia_del_R%C3%ADo_Negro.svg/800px-Bandera_de_la_Provincia_del_R%C3%ADo_Negro.svg.png", url: "https://es.wikipedia.org/wiki/Provincia_de_R%C3%ADo_Negro", descripcion: "Río Negro es una de las 23 provincias de Argentina y se ubica en el centro-norte de la región patagónica de Argentina.\n Su economía está basada en la fruticultura, concentrada en las zonas de valles. Predominan los cultivos de frutales (manzanas y peras). También poseen cultivos de hortalizas (tomate y cebolla), y frutas finas (frambuesa, guinda y frutilla). ", gobernador: "Arabela Carreras ", capital: "Viedma", poblada: "San Carlos de Bariloche", fundacion: "16 de octubre de 1884", autonomia: "15 de junio de 1955  ", superficie: "203.013 km² ", poblacion: "708.799  hab. ", gentillicio: "Rionegrino/na    ", clima: "Frío seco", ubicacion: "https://www.google.com.ar/maps/place/R%C3%ADo+Negro/data=!4m2!3m1!1s0x95e282c4b0a6530b:0xc2dfc6ff33b0aedb?sa=X&ved=2ahUKEwiD7caRq6HxAhWxqZUCHfv0AjoQ8gEwAHoECAYQAQ", ubicacionDesc: "Ubicada al centro-norte de la región patagónica (en la mitad sur del país), limita al noroeste con el río Limay que forma parte de su límite con Neuquén (el resto del límite es una línea recta vertical), al norte con el río Colorado que la separa de la Provincia de La Pampa, al noreste con la Provincia de Buenos Aires (parte de su límite lo forma el río Negro y otra, una línea vertical) y el golfo San Matías (mar Argentino, océano Atlántico), al sur con Chubut y al oeste con la región chilena de Los Lagos, cuya frontera está determinada por la línea de altas cumbres de la cordillera de los Andes. ", ubicacionImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Rio_Negro_in_Argentina_%28%2BFalkland_hatched%29.svg/352px-Rio_Negro_in_Argentina_%28%2BFalkland_hatched%29.svg.png" }

    ]
    console.log(provincia)
    if (provincia != null) {
      var provincia2 = provincia.toLowerCase()
    }
    if (provincia == null) {
      const embed = new Discord.MessageEmbed()
        .setTitle("Provincias de Argentina")
        .setURL("https://es.wikipedia.org/wiki/Provincias_de_Argentina")
        .setDescription("En Argentina se denomina provincia a cada uno de los 23 estados federados denominados así en la Constitución de la Nación Argentina, que junto a la Ciudad Autónoma de Buenos Aires constituyen las divisiones territoriales de primer orden del país. Las provincias tienen autonomía plena, forman parte de la Nación y son jurídicamente preexistentes a ella, según los principios del federalismo establecidos en la Constitución Nacional. \n  \n Para información individual de cada provincia utilice el comando `*ar provincia [Nombre de la provincia]`")
        .setColor('#0b67ff')
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/800px-Flag_of_Argentina.svg.png")
        .addField("Ciudad Autonoma", "Ciudad Autonoma de Buenos Aires (CABA) <:CABA:936062758422708244> ")
        .addField("Lista de provincias", "Buenos Aires <:buenosaires:936063770684457001>  \n Catamarca <:Catamarca:936062789053726720> \n Chaco <:Chaco:936063772706107443> \n Chubut <:chubut:936063771288408094>  \n Córdoba <:cordoba:936063769233207336> \n Corrientes <:corrientes:936063765936504892> \n Entre Ríos <:entrerios:936063766087495720> \n Formosa <:formosa:936063765420597268>\n Jujuy <:jujuy:936063774031511592> \n La Pampa <:lapampa:936063767542890596> \n La Rioja <:larioja:936063771712053309> \n Mendoza <:mendoza:936063776447422495> \n Misiones <:misiones:936063766477566052> \n Neuquén <:neuquen:936063770046890055>\n Río Negro <:rionegro:936063766498537573>\n Salta <:salta:936063770709606460>\n San Juan <:sanjuan:936064424890998844>\n San Luis <:sanluis:936064423511089184>\n Santa Cruz <:santacruz:936064424144429106>\n Santa Fe <:santafe:936064421392961637>\n Santiago del Estero <:santiagodelestero:936064420231127042>\n Tierra del Fuego, Antártida e Islas del Atlántico Sur <:tierradelfuego:936064421082570762>\n Tucuman <:tucuman:936064420331782164>")
      return interaction.reply({ embeds: [embed] });

    }

    provincias.forEach(province => {
      if (provincia2 == province.identificacion) {
        const embed1 = new Discord.MessageEmbed()
          .setTitle(province.nombre)
          .setURL(province.url)
          .setDescription(province.descripcion)
          .setColor(province.color)
          .setThumbnail(province.bandera)
          .addField("Gobernador ", province.gobernador, true)
          .addField("Capital ", province.capital, true)
          .addField("Ciudad más poblada ", province.poblada, true)
          .addField("Fundación ", province.fundacion, true)
          .addField("Declaración de autonomía ", province.autonomia, true)
          .addField("Superficie ", province.superficie, true)
          .addField("Población (2015) ", province.poblacion, true)
          .addField("Gentillicio ", province.gentillicio, true)
          .addField("Clima ", province.clima, true)

        const embed2 = new Discord.MessageEmbed()
          .setTitle("Ubicación de " + province.nombre)
          .setURL(province.ubicacion)
          .setDescription(province.ubicacionDesc)
          .setColor(province.color)
          .setImage(province.ubicacionImg)


        const button1 = new MessageButton()
          .setCustomId("previousbtn")
          .setLabel("❓ Información")
          .setStyle("SUCCESS");

        const button2 = new MessageButton()
          .setCustomId("nextbtn")
          .setLabel("🗺️ Ubicación")
          .setStyle("PRIMARY");

        const pages = [
          embed1,
          embed2,


        ];

        const buttonList = [button1, button2];
        const timeout = 30000;
        paginationEmbed(interaction, pages, buttonList, timeout);


      }
    })
    if (provincia2 == "caba" || provincia2 == "ciudad autonoma de buenos aires") {
      const embed1 = new Discord.MessageEmbed()
        .setTitle("Ciudad Autonoma de Buenos Aires (CABA)")
        .setURL("https://es.wikipedia.org/wiki/Provincia_de_Buenos_Aires")
        .setDescription("Buenos Aires es la gran capital cosmopolita de Argentina. Su centro es la Plaza de Mayo, rodeada de imponentes edificios del siglo XIX, incluida la Casa Rosada, el icónico palacio presidencial que tiene varios balcones. Entre otras atracciones importantes, se incluyen el Teatro Colón, un lujoso teatro de ópera de 1908 con cerca de 2,500 asientos, y el moderno museo MALBA, que exhibe arte latinoamericano.  \n  La Ciudad de Buenos Aires fue cedida en 1880 por la Provincia de Buenos Aires para que fuera la capital federal del país. En virtud de la reforma constitucional de 1994 goza de un régimen de autonomía.")
        .setColor('#FCFCFC')
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Bandera_de_la_Ciudad_de_Buenos_Aires.svg/662px-Bandera_de_la_Ciudad_de_Buenos_Aires.svg.png")
        .addField("Jefe de Gobierno ", "Horacio Rodríguez Larreta  ", true)
        .addField("Área metropolitana ", "Gran Buenos Aires ", true)
        .addField("Subdivisiones ", "15 comunas\n48 barrios ", true)
        .addField("Fundación ", "2 de febrero de 1536 (por Pedro de Mendoza)\n 11 de junio de 1580 (por Juan de Garay) ", true)
        .addField("Autonomía ", "Desde la Reforma Constitucional de 1994 ", true)
        .addField("Superficie ", "203 km² ", true)
        .addField("Población (2010) ", "3.075.646 hab. ", true)
        .addField("Gentillicio ", "Porteño/a ", true)
        .addField("Clima ", "Subtropical húmedo ", true)
        .setFooter("Para ver información de la Provincia de Buenos Aires prueba con /provinciainfo Buenos Aires")

      const embed2 = new Discord.MessageEmbed()
        .setTitle("Ubicación de la Ciudad Autonoma de Buenos Aires")
        .setURL("https://www.google.com.ar/maps/place/Buenos+Aires,+CABA/data=!4m2!3m1!1s0x95bcca3b4ef90cbd:0xa0b3812e88e88e87?sa=X&ved=2ahUKEwjsvqSxgpDxAhVPlJUCHdk6AQIQ8gEwJnoECGgQAQ")
        .setDescription("Su tejido urbano se asemeja a un abanico que limita al sur, oeste y norte con la lindante Provincia de Buenos Aires y al este con el Río de la Plata. Oficialmente la ciudad se encuentra dividida en 15 comunas que agrupan a 48 barrios.")
        .setColor('#FCFCFC')
        .setImage("https://maps.wikimedia.org/img/osm-intl,10,-34.599722222222,-58.381944444444,300x300.png?lang=es&domain=es.wikipedia.org&title=Buenos+Aires&groups=_1f2405ce1888c1041823dcda962c8595b0609749")
        .setFooter("Para ver información de la Provincia de Buenos Aires prueba con /provinciainfo Buenos Aires")

      const button1 = new MessageButton()
        .setCustomId("previousbtn")
        .setLabel("❓ Información")
        .setStyle("SUCCESS");

      const button2 = new MessageButton()
        .setCustomId("nextbtn")
        .setLabel("🗺️ Ubicación")
        .setStyle("PRIMARY");

      const pages = [
        embed1,
        embed2,


      ];

      const buttonList = [button1, button2];
      const timeout = 30000;
      paginationEmbed(interaction, pages, buttonList, timeout);

    }

  
    if (provincia2 == "salta" || provincia2 == "sa") {
      const embed1 = new Discord.MessageEmbed()
        .setTitle("SALTA (SA)")
        .setURL("https://es.wikipedia.org/wiki/Provincia_de_Salta")
        .setDescription("Salta es una de las 23 provincias de Argentina y se ubica en el noroeste del país.\n El sector primario está dado por cultivos industriales como el cacao café, tabaco, chirimoya, caña de azúcar, banana, mango, papaya, cítricos, legumbres, hortalizas, vid, ajíes, cebollas, papas y algodón. En el secundario destacan azúcar y sus subproductos, vino, cervezas, lácteos y pastas. \n El azúcar y el vino se exportan a Europa y los Estados Unidos, y en el caso del vino salteño, goza de una excelente reputación a nivel internacional. \n  En la capital provincial y las principales localidades gran parte de la población se dedica al sector de servicios: comercio, bancos y actividades financieras, educación, salud, transporte, comunicaciones, gastronomía y entretenimiento, etc. El turismo ha cobrado gran importancia, y se han abierto numerosos hoteles, algunos de gran categoría.")
        .setColor('#8a293d')
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Bandera_de_la_Provincia_de_Salta.svg/564px-Bandera_de_la_Provincia_de_Salta.svg.png")
        .addField("Gobernador ", "Gustavo Sáenz", true)
        .addField("Capital ", "Salta", true)
        .addField("Ciudad más poblada ", "Salta", true)
        .addField("Fundación ", "8 de octubre de 1814", true)
        .addField("Declaración de autonomía ", "17 de diciembre de 1836", true)
        .addField("Superficie ", "155.488 km²", true)
        .addField("Población (2017) ", "1.333.365  hab.", true)
        .addField("Gentillicio ", "Salteño/ña ", true)
        .addField("Clima ", "Cálido", true)


      const embed2 = new Discord.MessageEmbed()
        .setTitle("Ubicación de Salta")
        .setURL("https://www.google.com.ar/maps/place/Salta/data=!4m2!3m1!1s0x941b0d2938ead0c7:0x8b4a1bd1f6c37998?sa=X&ved=2ahUKEwjQ-dacsKHxAhVZrJUCHVEVCfEQ8gEwFHoECAYQAQ")
        .setDescription("Está ubicada al noroeste del país, N.O.A. , limitando al norte con la Provincia de Jujuy y con el Departamento de Potosí y el Departamento de Tarija en Bolivia hasta el trifinio Hito Esmeralda, donde comienza su frontera con el Departamento de Boquerón en Paraguay (hacia el noreste), al este con Formosa y Chaco, al sur con Santiago del Estero, Tucumán y Catamarca, y al oeste con la Región de Antofagasta en Chile. ")
        .setColor('#8a293d')
        .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Salta_in_Argentina_%28%2BFalkland_hatched%29.svg/352px-Salta_in_Argentina_%28%2BFalkland_hatched%29.svg.png")


      const button1 = new MessageButton()
        .setCustomId("previousbtn")
        .setLabel("❓ Información")
        .setStyle("SUCCESS");

      const button2 = new MessageButton()
        .setCustomId("nextbtn")
        .setLabel("🗺️ Ubicación")
        .setStyle("PRIMARY");

      const pages = [
        embed1,
        embed2,


      ];

      const buttonList = [button1, button2];
      const timeout = 30000;
      paginationEmbed(interaction, pages, buttonList, timeout);



    }

    if (provincia2 == "san juan" || provincia2 == "sj" || provincia2 == "sanjuan") {
      const embed1 = new Discord.MessageEmbed()
        .setTitle("SAN JUAN (SJ)")
        .setURL("https://es.wikipedia.org/wiki/Provincia_de_San_Juan_(Argentina)")
        .setDescription("San Juan es una de las 23 provincias de Argentina y se ubica en el noroeste del país.\n La economía de la provincia de San Juan está representada por la agricultura, donde sobresale en cultivo de la vid. En la industria se destaca la elaboración del vino y diversas conservas de alimentos. También ha comenzado a desarrollarse intensamente la minería, con la extracción de diversos minerales, de la mano de varias empresas multinacionales, y el turismo.  ")
        .setColor('#76abdc')
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Bandera_de_San_Juan_Ciudadana.png/800px-Bandera_de_San_Juan_Ciudadana.png")
        .addField("Gobernador ", "Sergio Uñac", true)
        .addField("Capital ", "San Juan", true)
        .addField("Ciudad más poblada ", "Gran San Juan", true)
        .addField("Fundación ", "13 de junio de 1562", true)
        .addField("Declaración de autonomía ", "1 de marzo de 1820", true)
        .addField("Superficie ", "89.651 km²", true)
        .addField("Población (2014) ", "738.959  hab.", true)
        .addField("Gentillicio ", "Sanjuanino/na ", true)
        .addField("Clima ", "Templado seco", true)


      const embed2 = new Discord.MessageEmbed()
        .setTitle("Ubicación de San Juan")
        .setURL("https://www.google.com.ar/maps/place/San+Juan/data=!4m2!3m1!1s0x96814029a33cd497:0x3552ffe367e3b1df?sa=X&ved=2ahUKEwjlr7HyzKHxAhU0r5UCHRgSCEYQ8gEwAHoECAUQAQ")
        .setDescription("Está ubicada en el noroeste de la región de Cuyo y más exactamente el Cuyo, al oeste del país, limitando al noreste con La Rioja, al sureste con San Luis, al sur con Mendoza y al oeste con las regiones chilenas de Atacama, Coquimbo y Valparaíso, cuyo límite está determinado divisoria de agua de la cordillera de los Andes. ")
        .setColor('#76abdc')
        .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/San_Juan_in_Argentina_%28%2BFalkland_hatched%29.svg/352px-San_Juan_in_Argentina_%28%2BFalkland_hatched%29.svg.png")


      const button1 = new MessageButton()
        .setCustomId("previousbtn")
        .setLabel("❓ Información")
        .setStyle("SUCCESS");

      const button2 = new MessageButton()
        .setCustomId("nextbtn")
        .setLabel("🗺️ Ubicación")
        .setStyle("PRIMARY");

      const pages = [
        embed1,
        embed2,


      ];

      const buttonList = [button1, button2];
      const timeout = 30000;
      paginationEmbed(interaction, pages, buttonList, timeout);




    }

    if (provincia2 == "sl" || provincia2 == "sanluis" || provincia2 == "san luis") {
      const embed1 = new Discord.MessageEmbed()
        .setTitle("SAN LUIS (SL)")
        .setURL("https://es.wikipedia.org/wiki/Provincia_de_San_Luis")
        .setDescription("San Luis es una de las 23 provincias de Argentina y se ubica al sureste de la región del Nuevo Cuyo, al oeste del país.\n En el sector agroindustrial se destacan los frigoríficos y las curtiembres. En los últimos años creció la actividad lechera, la producción de electrodomésticos, plásticos y artículos de papel y cartón. También se desarrolla la industria minera en las sierras de San Luis, del Gigante y de la Estanzuela, ricas en granito y lajas, de donde extraen calizas, basalto y mármol.\n  El turismo es otra de las actividades impulsadas por el gobierno puntano a partir del retorno de la democracia en 1983. Actualmente la provincia cuenta con la más importante red de autopistas del país, que conecta a la mayoría de las localidades turísticas con la capital provincial. ")
        .setColor('#FDFDFD')
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Bandera_de_la_Provincia_de_San_Luis.svg/800px-Bandera_de_la_Provincia_de_San_Luis.svg.png")
        .addField("Gobernador ", "Alberto Rodríguez Saá ", true)
        .addField("Capital ", "	San Luis", true)
        .addField("Ciudad más poblada ", "Gran San Luis", true)
        .addField("Fundación ", "25 de agosto de 1594 ", true)
        .addField("Declaración de autonomía ", "1 de marzo de 1820", true)
        .addField("Superficie ", "76.748 km²", true)
        .addField("Población (2017) ", "502.003  hab.", true)
        .addField("Gentillicio ", "	Sanluiseño/ña o puntano/na (para los nacidos en la capital) ", true)
        .addField("Clima ", "Continental seco", true)

      const embed2 = new Discord.MessageEmbed()
        .setTitle("Ubicación de San Luis")
        .setURL("https://www.google.com.ar/maps/place/San+Luis/data=!4m2!3m1!1s0x95d43be4529ad73d:0x5dee1e83bd8abc46?sa=X&ved=2ahUKEwiV5c7R1aHxAhVPrZUCHcnCDCIQ8gEwAHoECAYQAQ")
        .setDescription(" Está ubicada al sureste de la región del Nuevo Cuyo, al oeste del país, limitando al norte con La Rioja, al este con Córdoba, al sureste y sur con la Provincia de La Pampa, al oeste con el río Desaguadero que la separa de Mendoza, y al noroeste con San Juan.")
        .setColor('#FDFDFD')
        .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/San_Luis_in_Argentina_%28%2BFalkland_hatched%29.svg/352px-San_Luis_in_Argentina_%28%2BFalkland_hatched%29.svg.png")


      const button1 = new MessageButton()
        .setCustomId("previousbtn")
        .setLabel("❓ Información")
        .setStyle("SUCCESS");

      const button2 = new MessageButton()
        .setCustomId("nextbtn")
        .setLabel("🗺️ Ubicación")
        .setStyle("PRIMARY");

      const pages = [
        embed1,
        embed2,


      ];

      const buttonList = [button1, button2];
      const timeout = 30000;
      paginationEmbed(interaction, pages, buttonList, timeout);

    }

    if (provincia2 == "santa cruz" || provincia2 == "sc" || provincia2 == "santacruz") {

      const embed1 = new Discord.MessageEmbed()
        .setTitle("SANTA CRUZ (SC)")
        .setURL("https://es.wikipedia.org/wiki/Provincia_de_Santa_Cruz")
        .setDescription("Santa Cruz es una de las 23 provincias de Argentina y se ubica al sur de la región patagónica de Argentina.\n  La provincia de Santa Cruz es pionera a nivel mundial en el uso de energías alternativas renovables: la gran amplitud de las mareas, principalmente en las rías y estuarios, es fuente de gran potencial para obtener energía mareomotriz, aunque en el 2005 la más desarrollada de las energías limpias es la energía que se obtiene de los fuertes y constantes vientos que soplan de oeste a este por gran parte de la provincia, en este caso, varios molinos producen energía eólica. \n  La economía de la zona se basa principalmente en la extracción de petróleo, gas butano y metano. En minería, se explota oro en Cerro Vanguardia con una importante producción, y oro con plata en la mina de Manantial Espejo.  ")
        .setColor('#2197de')
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Bandera_de_la_Provincia_de_Santa_Cruz.svg/765px-Bandera_de_la_Provincia_de_Santa_Cruz.svg.png")
        .addField("Gobernador ", "Alicia Kirchner ", true)
        .addField("Capital ", "Río Gallegos", true)
        .addField("Ciudad más poblada ", "Río Gallegos", true)
        .addField("Fundación ", "16 de octubre de 1884 ", true)
        .addField("Declaración de autonomía ", "22 de noviembre de 1956", true)
        .addField("Superficie ", "243.943 km²", true)
        .addField("Población (2010) ", "273.964  hab.", true)
        .addField("Gentillicio ", "	Santacruceño/ña ", true)
        .addField("Clima ", "Árido y frío", true)


      const embed2 = new Discord.MessageEmbed()
        .setTitle("Ubicación de Santa Cruz")
        .setURL("https://www.google.com.ar/maps/place/Santa+Cruz/data=!4m2!3m1!1s0xbdb6fbfdc37f535f:0xe4b90d77fdc8237c?sa=X&ved=2ahUKEwjZsdXh2KHxAhWnq5UCHSJFCjIQ8gEwAHoECBAQAQ")
        .setDescription(" Está ubicada al sur de la región patagónica, la cual ocupa la mitad sur del país, limitando al norte con Chubut, al este con el océano Atlántico y al sur y oeste con las regiones de Magallanes y de Aysén de la República de Chile. ")
        .setColor('#2197de')
        .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Santa_Cruz_in_Argentina_%28%2BFalkland_hatched%29.svg/352px-Santa_Cruz_in_Argentina_%28%2BFalkland_hatched%29.svg.png")


      const button1 = new MessageButton()
        .setCustomId("previousbtn")
        .setLabel("❓ Información")
        .setStyle("SUCCESS");

      const button2 = new MessageButton()
        .setCustomId("nextbtn")
        .setLabel("🗺️ Ubicación")
        .setStyle("PRIMARY");

      const pages = [
        embed1,
        embed2,


      ];

      const buttonList = [button1, button2];
      const timeout = 30000;
      paginationEmbed(interaction, pages, buttonList, timeout);

    }

    if (provincia2 == "santa fé" || provincia2 == "sf" || provincia2 == "santafe" || provincia2 == "santa fe") {
      const embed1 = new Discord.MessageEmbed()
        .setTitle("SANTA FE (SF)")
        .setURL("https://es.wikipedia.org/wiki/Provincia_de_Santa_Fe")
        .setDescription("Santa Fe es una de las 23 provincias de Argentina y se ubica en el centro-este de Argentina.\n  La  economía de Santa Fe es la segunda más importante del país. Representa el 8 % del total de Argentina, la producción se estima en ARS 27 mil millones en 2006, es decir, USD 9000 per cápita (alrededor de la media nacional). A pesar de que la economía está bien diversificada, la agricultura sigue teniendo un papel indispensable que desempeñar a través de los ingresos de divisas y la rentabilidad de las exportaciones de ITS. El veintiún por ciento de las tierras cultivadas de la Argentina están en Santa Fe, cuyos cultivos principales son soja (principal productor nacional), girasol, maíz y trigo. En menor escala fresas, miel y sus derivados (300.000 colmenas), la madera y el algodón.")
        .setColor('#b43232')
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Bandera_de_la_Provincia_de_Santa_Fe.svg/435px-Bandera_de_la_Provincia_de_Santa_Fe.svg.png")
        .addField("Gobernador ", "Omar Perotti", true)
        .addField("Capital ", "Santa Fe", true)
        .addField("Ciudad más poblada ", "Rosario", true)
        .addField("Fundación ", "15 de noviembre de 1573 ", true)
        .addField("Declaración de autonomía ", "10 de mayo de 1816", true)
        .addField("Superficie ", "133.007 km²", true)
        .addField("Población (2015) ", "3.397.532  hab.", true)
        .addField("Gentillicio ", "Santafesino/na", true)
        .addField("Clima ", "Templado y subtropical", true)


      const embed2 = new Discord.MessageEmbed()
        .setTitle("Ubicación de Santa Fe")
        .setURL("https://www.google.com.ar/maps/place/Santa+Fe/data=!4m2!3m1!1s0x944ac01eb26c186f:0x8e3e4e20675a3bbc?sa=X&ved=2ahUKEwihn4GU3aHxAhVnrJUCHfF7BlsQ8gEwFHoECAgQAQ")
        .setDescription("Está ubicada en el oeste de la Región del Litoral​ y forma parte de la región integrada Centro,​ limitando al norte con Chaco, al este con el río Paraná que la separa de Corrientes y Entre Ríos, al sur con la Provincia de Buenos Aires y al oeste con la Provincia de Córdoba y Santiago del Estero.")
        .setColor('#b43232')
        .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Santa_Fe_in_Argentina.svg/352px-Santa_Fe_in_Argentina.svg.png")

      const button1 = new MessageButton()
        .setCustomId("previousbtn")
        .setLabel("❓ Información")
        .setStyle("SUCCESS");

      const button2 = new MessageButton()
        .setCustomId("nextbtn")
        .setLabel("🗺️ Ubicación")
        .setStyle("PRIMARY");

      const pages = [
        embed1,
        embed2,


      ];

      const buttonList = [button1, button2];
      const timeout = 30000;
      paginationEmbed(interaction, pages, buttonList, timeout);


    }

    if (provincia2 == "santiago del estero" || provincia2 == "se" || provincia2 == "santiagodelestero") {
      const embed1 = new Discord.MessageEmbed()
        .setTitle("SANTIAGO DEL ESTERO (SE)")
        .setURL("https://es.wikipedia.org/wiki/Provincia_de_Santiago_del_Estero")
        .setDescription("Santiago del Estero es una de las 23 provincias de Argentina y se ubica en el norte de Argentina.\n La explotación forestal es la actividad económica más importante de la provincia. Los bosques -más del 50% del territorio- producen el mayor volumen de madera del país. Muchos obrajes preparan durmientes, leña, carbón vegetal, rollizos y postes. La agricultura y la ganadería, en gran desarrollo, tienen su asiento principalmente entre los ríos Salado del Norte y Dulce. Gracias al riego se cultiva trigo, maíz, alfalfa, lino, algodón y frutales. El ganado más abundante es el caprino. En escala más reducida hay bovinos, lanares, caballares, porcinos y asnales. La producción minera está representada por cal, yeso, granito, sal, manganeso y mármol. Además de la producción de carbón vegetal y madera, hay fábricas de cemento y elaboradoras de cal.")
        .setColor('#b43232')
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Bandera_de_la_Provincia_de_Santiago_del_Estero.svg/750px-Bandera_de_la_Provincia_de_Santiago_del_Estero.svg.png")
        .addField("Gobernador ", "Gerardo Zamora", true)
        .addField("Capital ", "Santiago del Estero", true)
        .addField("Ciudad más poblada ", "Santiago del Estero", true)
        .addField("Fundación ", "25 de julio de 1553", true)
        .addField("Declaración de autonomía ", "27 de abril de 1820", true)
        .addField("Superficie ", "136.351 km²", true)
        .addField("Población (2015) ", "928.097  hab.", true)
        .addField("Gentillicio ", "Santiagueño/ña", true)
        .addField("Clima ", "Semitropical continental", true)


      const embed2 = new Discord.MessageEmbed()
        .setTitle("Ubicación de Santiago del Estero")
        .setURL("https://www.google.com.ar/maps/place/Santiago+del+Estero/data=!4m2!3m1!1s0x9425a84f49ae19cf:0xe23b1c64d3a49ba5?sa=X&ved=2ahUKEwihspzS4KHxAhXGrJUCHcf9Bt4Q8gEwAHoECAYQAQ")
        .setDescription("Está ubicada al norte del país, en la región del Norte Grande Argentino, limitando al norte con Salta y Chaco, al este nuevamente con Chaco y Santa Fe, al sur con Córdoba y al oeste con Catamarca y Tucumán.")
        .setColor('#b43232')
        .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Santiago_del_Estero_in_Argentina_%28%2BFalkland_hatched%29.svg/352px-Santiago_del_Estero_in_Argentina_%28%2BFalkland_hatched%29.svg.png")


      const button1 = new MessageButton()
        .setCustomId("previousbtn")
        .setLabel("❓ Información")
        .setStyle("SUCCESS");

      const button2 = new MessageButton()
        .setCustomId("nextbtn")
        .setLabel("🗺️ Ubicación")
        .setStyle("PRIMARY");

      const pages = [
        embed1,
        embed2,


      ];

      const buttonList = [button1, button2];
      const timeout = 30000;
      paginationEmbed(interaction, pages, buttonList, timeout);




    }

    if (provincia2 == "tierra del fuego" || provincia2 == "tf" || provincia2 == "provincia de tierra del fuego, antártida e islas del  atlántico sur") {
      const embed1 = new Discord.MessageEmbed()
        .setTitle("PROVINCIA DE TIERRA DEL FUEGO, ANTÁRTIDA E ISLAS DEL ATLÁNTICO SUR (TF)")
        .setURL("https://es.wikipedia.org/wiki/Provincia_de_Tierra_del_Fuego,_Ant%C3%A1rtida_e_Islas_del_Atl%C3%A1ntico_Sur")
        .setDescription("Tierra del Fuego, Antártida e Islas del Atlántico Sur es una de las 23 provincias de Argentina y se ubica en el sur de Argentina, siendo el territorio más austral del país. \nCon respecto a los territorios cuya soberanía se encuentra en disputa (islas Malvinas, islas Georgias del Sur, islas Sandwich del Sur, islas Orcadas del Sur, islas Shetland del Sur, Antártida Argentina), la ley de provincialización en su artículo 2 establece que corresponden al territorio de la provincia, pero «sujeta a los tratados con potencias extranjeras que celebre el gobierno federal, para cuya ratificación no será necesario consultar al gobierno provincial», norma que habilita la secesión de dichos territorios por la sola decisión del Estado nacional en el marco de las negociaciones sobre la soberanía con otras potencias.")
        .setColor('#fd9830')
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Bandera_de_la_Provincia_de_Tierra_del_Fuego.svg/320px-Bandera_de_la_Provincia_de_Tierra_del_Fuego.svg.png")
        .addField("Gobernador ", "Gustavo Melella", true)
        .addField("Capital ", "	Ushuaia", true)
        .addField("Ciudad más poblada ", "Río Grande", true)
        .addField("Fundación ", "1884", true)
        .addField("Declaración de autonomía ", "26 de abril de 1990", true)
        .addField("Superficie ", "21.571 km² (excluyendo territorio reclamado) \n  1.002.445  km² (incluyendo territorio reclamado)", true)
        .addField("Población (2017) ", "160.720  hab.", true)
        .addField("Gentillicio ", "Fueguino/na", true)
        .addField("Clima ", "Templado frío y húmedo", true)


      const embed2 = new Discord.MessageEmbed()
        .setTitle("Ubicación de Tierra del Fuego + territorios reclamados")
        .setURL("https://www.google.com.ar/maps/place/Tierra+del+Fuego/data=!4m2!3m1!1s0xbc4c22cfd9432921:0x80ee54358cf0d88d?sa=X&ved=2ahUKEwiqpfvA5KHxAhWlq5UCHerrDA4Q8gEwAHoECAcQAQ")
        .setDescription("Está ubicada en la región patagónica, en el extremo sur de la Argentina, y ocupa un amplio territorio insular, marítimo y antártico, que se extiende desde la Isla Grande de Tierra del Fuego al polo Sur, incluyendo la isla de los Estados, las islas Malvinas, las islas del Atlántico Sur, la península Antártica, formando un triángulo cuyos lados son los meridianos 74°O y 25°O y su vértice el polo Sur.")
        .setColor('#fd9830')
        .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Tierra_del_Fuego%2C_Antartida_e_Islas_del_Atlantico_Sur_%28de-facto_%2Bclaims_hatched%29_%28special_marker%29_%28%2BAntarctica%29.svg/641px-Tierra_del_Fuego%2C_Antartida_e_Islas_del_Atlantico_Sur_%28de-facto_%2Bclaims_hatched%29_%28special_marker%29_%28%2BAntarctica%29.svg.png")


      const button1 = new MessageButton()
        .setCustomId("previousbtn")
        .setLabel("❓ Información")
        .setStyle("SUCCESS");

      const button2 = new MessageButton()
        .setCustomId("nextbtn")
        .setLabel("🗺️ Ubicación")
        .setStyle("PRIMARY");

      const pages = [
        embed1,
        embed2,


      ];

      const buttonList = [button1, button2];
      const timeout = 30000;
      paginationEmbed(interaction, pages, buttonList, timeout);

    }

    if (provincia2 == "tucuman" || provincia2 == "tu") {
      const embed1 = new Discord.MessageEmbed()
        .setTitle("TUCUMAN (TU)")
        .setURL("https://es.wikipedia.org/wiki/Provincia_de_Tucum%C3%A1n")
        .setDescription("Tucuman es una de las 23 provincias de Argentina y se ubica en el noroeste de Argentina. \n Fue escenario del Congreso de Tucumán entre los años 1816 y 1820 que, entre otras cosas, declaró la Independencia de las Provincias Unidas del Sud (primer nombre oficial del Estado soberano llamado Argentina) respecto a España y cualquier otro poder extranjero, el 9 de julio de 1816. Es la provincia de menor superficie de la Argentina y la de mayor densidad de población del país. \n \n Actualmente entre las principales actividades que se desarrollan se encuentran los complejos agroindustriales del azúcar y del limón, obteniéndose, en el caso del limón, desde fruta en fresco clasificada y empacada hasta productos industriales como jugos concentrados o aceites esenciales. También posee distintas industrias: automotriz, textil y calzado, golosinas, gaseosas y papel, cervecerías, excelentes quesillos y quesos.")
        .setColor('#76abdc')
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Bandera_de_la_Provincia_de_Tucum%C3%A1n.svg/700px-Bandera_de_la_Provincia_de_Tucum%C3%A1n.svg.png")
        .addField("Gobernador ", "Juan Manzur", true)
        .addField("Capital ", "San Miguel de Tucumán", true)
        .addField("Ciudad más poblada ", "San Miguel de Tucumán", true)
        .addField("Fundación ", "1564", true)
        .addField("Declaración de autonomía ", "25 de noviembre de 1825", true)
        .addField("Superficie ", "22.525 km²", true)
        .addField("Población (2010) ", "1.767.500  hab.", true)
        .addField("Gentillicio ", "Tucumano/na", true)
        .addField("Clima ", "Cálido subtropical con estación seca", true)

      const embed2 = new Discord.MessageEmbed()
        .setTitle("Ubicación de Tucuman")
        .setURL("https://www.google.com.ar/maps/place/San+Miguel+de+Tucum%C3%A1n,+Tucum%C3%A1n/data=!4m2!3m1!1s0x94223792d6c56903:0xf88d5b92b5c56527?sa=X&ved=2ahUKEwicmajl6KHxAhVLqJUCHfLRDqYQ8gEwAHoECAcQAQ")
        .setDescription("Está ubicada en el noroeste del país, en la región del Norte Grande Argentino, limitando al norte con Salta, al este con Santiago del Estero y al sur y oeste con Catamarca.")
        .setColor('#76abdc')
        .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Tucuman_in_Argentina_%28%2BFalkland_hatched%29.svg/352px-Tucuman_in_Argentina_%28%2BFalkland_hatched%29.svg.png")


      const button1 = new MessageButton()
        .setCustomId("previousbtn")
        .setLabel("❓ Información")
        .setStyle("SUCCESS");

      const button2 = new MessageButton()
        .setCustomId("nextbtn")
        .setLabel("🗺️ Ubicación")
        .setStyle("PRIMARY");

      const pages = [
        embed1,
        embed2,


      ];

      const buttonList = [button1, button2];
      const timeout = 30000;
      paginationEmbed(interaction, pages, buttonList, timeout);


    }


  }


}


