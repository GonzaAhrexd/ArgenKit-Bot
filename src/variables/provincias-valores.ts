import { ColorResolvable } from "discord.js";
type Provincia = {
  identificacion: string;
  nombre: string;
  color: ColorResolvable;
  bandera: string;
  url: string;
  descripcion: string;
  gobernador: string;
  capital: string;
  poblada: string;
  fundacion: string;
  autonomia: string;
  superficie: string;
  poblacion: string;
  gentillicio: string;
  clima: string;
  ubicacion: string;
  ubicacionDesc: string;
  ubicacionImg: string;
};

const provincias: Provincia[] = [
  //CABA
  {
    identificacion: "caba",
    nombre: "Ciudad Autonoma de Buenos Aires (CABA)",
    color: "#FCFCFC",
    bandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Bandera_de_la_Ciudad_de_Buenos_Aires.svg/662px-Bandera_de_la_Ciudad_de_Buenos_Aires.svg.png",
    url: "https://es.wikipedia.org/wiki/Provincia_de_Tucum%C3%A1n",
    descripcion:
      "Buenos Aires, capital cosmopolita de Argentina, destaca por la Plaza de Mayo, la Casa Rosada, el Teatro Colón y el museo MALBA. Cedida por la Provincia en 1880, se convirtió en la capital federal y cuenta con autonomía desde la reforma constitucional de 1994.",
    gobernador: "Jorge Macri (PRO🟡)",
    capital: "Gran Buenos Aires",
    poblada: "15 comunas\n48 barrios",
    fundacion:
      "2 de febrero de 1536 (por Pedro de Mendoza)\n11 de junio de 1580 (por Juan de Garay)",
    autonomia: "Desde la Reforma Constitucional de 1994",
    superficie: "203 km²",
    poblacion: "3.075.646 hab.",
    gentillicio: "Porteño/a",
    clima: "Subtropical húmedo",
    ubicacion:
      "https://www.google.com.ar/maps/place/Buenos+Aires,+CABA/data=!4m2!3m1!1s0x95bcca3b4ef90cbd:0xa0b3812e88e88e87?sa=X&ved=2ahUKEwjsvqSxgpDxAhVPlJUCHdk6AQIQ8gEwJnoECGgQAQ",
    ubicacionDesc:
      "Su tejido urbano se asemeja a un abanico que limita al sur, oeste y norte con la lindante Provincia de Buenos Aires y al este con el Río de la Plata. Oficialmente la ciudad se encuentra dividida en 15 comunas que agrupan a 48 barrios.",
    ubicacionImg:
      "https://maps.wikimedia.org/img/osm-intl,10,-34.599722222222,-58.381944444444,300x300.png?lang=es&domain=es.wikipedia.org&title=Buenos+Aires&groups=_1f2405ce1888c1041823dcda962c8595b0609749",
  },
  //Buenos Aires
  {
    identificacion: "buenos aires",
    nombre: "Buenos Aires  (BA)",
    color: "#0b67ff",
    bandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Bandera_de_la_Provincia_de_Buenos_Aires.svg/1280px-Bandera_de_la_Provincia_de_Buenos_Aires.svg.png",
    url: "https://es.wikipedia.org/wiki/Provincia_de_Buenos_Aires",
    descripcion:
      "Buenos Aires es la provincia más grande y más poblada de Argentina. Su nombre proviene de la capital del país, la Ciudad  Autonoma de Buenos Aires,  que solía ser parte de la provincia hasta su federalización en 1880.",
    gobernador: "Alex Kicillof (UxP🔵)",
    capital: "La Plata",
    poblada: "La Matanza",
    fundacion:
      "2 de febrero de 1536 \n 11 de junio de 1580 (por Juan de Garay)",
    autonomia: "16 de febrero de 1820 ",
    superficie: "307.571 km²",
    poblacion: "18.004.120 hab.",
    gentillicio: "Bonaerense",
    clima: "Templado húmedo (clima pampeano)",
    ubicacion:
      "https://www.google.com.ar/maps/place/Provincia+de+Buenos+Aires/@-37.1243654,-62.2683371,7z/data=!3m1!4b1!4m5!3m4!1s0x95edbcb7595281d9:0x4ad309fcdcf0a144!8m2!3d-37.2017285!4d-59.8410697",
    ubicacionDesc:
      "El territorio está en la región este del país; limita al norte con las provincias de Santa Fe y Entre Ríos, al noreste con el Río de la Plata y la Ciudad Autónoma de Buenos Aires,9​ al este y sur con el mar Argentino del océano Atlántico, al suroeste con Río Negro, al oeste con la Provincia de La Pampa y al noroeste con la Provincia de Córdoba.",
    ubicacionImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Buenos_Aires_Province_in_Argentina_%28%2BFalkland_hatched%29.svg/800px-Buenos_Aires_Province_in_Argentina_%28%2BFalkland_hatched%29.svg.png",
  },
  //Catamarca
  {
    identificacion: "catamarca",
    nombre: "Catamarca  (CA)",
    color: "#F00505",
    bandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Bandera_de_la_Provincia_de_Catamarca.svg/800px-Bandera_de_la_Provincia_de_Catamarca.svg.png",
    url: "https://es.wikipedia.org/wiki/Provincia_de_Catamarca",
    descripcion:
      "Catamarca, provincia en el noroeste de Argentina, tiene como capital a San Fernando del Valle de Catamarca. Su economía diversa se centra en minería, industria, comercio, turismo, ganadería y agricultura. Ocupa el puesto 12 en desarrollo humano entre las provincias argentinas.  ",
    gobernador: "Raúl Jalil (UxP🔵) ",
    capital: "San Fernando del Valle de Catamarca",
    poblada: "San Fernando del Valle de Catamarca",
    fundacion: "1554",
    autonomia: "25 de agosto de 1821 ",
    superficie: "102.602 km²",
    poblacion: "396 895 hab.",
    gentillicio: "Catamarqueño/ña",
    clima: "Cálido y árido",
    ubicacion:
      "https://www.google.com.ar/maps/place/Catamarca/data=!4m2!3m1!1s0x94205dc5020ad4bd:0x3257c3237d6cc2dc?sa=X&ved=2ahUKEwji1LntjpDxAhX9r5UCHV3YBqoQ8gEwAHoECAcQAQ",
    ubicacionDesc:
      "Está ubicada al noroeste del país, en la región del Norte Grande Argentino, limitando al norte con Salta, al este con Tucumán y Santiago del Estero, al sureste con Córdoba, al sur con La Rioja y al oeste con Chile, cuyo límite está determinado por la divisoria de agua de la cordillera de los Andes.",
    ubicacionImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Catamarca_in_Argentina_%28%2BFalkland_hatched%29.svg/352px-Catamarca_in_Argentina_%28%2BFalkland_hatched%29.svg.png",
  },
  //Chaco
  {
    identificacion: "chaco",
    nombre: "Chaco  (CH)  ",
    color: "#1cb062",
    bandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Bandera_de_la_Provincia_del_Chaco.svg/728px-Bandera_de_la_Provincia_del_Chaco.svg.png",
    url: "https://es.wikipedia.org/wiki/Provincia_del_Chaco",
    descripcion:
      "Chaco, en el noreste de Argentina, con Resistencia como capital, destaca por su agricultura (algodón, soja), ganadería y madera. Tiene una gran población indígena y una mezcla diversa de descendientes de varios países.",
    gobernador: "Leandro Zdero  (UCR🔴)",
    capital: "Resistencia",
    poblada: "Gran Resistencia",
    fundacion: "14 de abril de 1585 ",
    autonomia: "8 de agosto de 1951",
    superficie: "99.633 km²",
    poblacion: "1.192.616 hab.",
    gentillicio: "Chaqueño/ña",
    clima: "Tropical semiárido y tropical húmedo",
    ubicacion:
      "https://www.google.com.ar/maps/place/Chaco/data=!4m2!3m1!1s0x9440effae3c87247:0x4eaf96c0979eec95?sa=X&ved=2ahUKEwi_i5-2k5DxAhUfqZUCHZlCAo4Q8gEwAHoECAcQAQ",
    ubicacionDesc:
      "Está ubicada en el noreste del país, en la región del Norte Grande Argentino, limitando al norte con los ríos Bermejo y Teuco que la separan de Formosa, al este con los ríos Paraguay y Paraná que la separan, respectivamente, de la República del Paraguay y la provincia de Corrientes, al sur con Santa Fe, al oeste con Santiago del Estero y al noroeste con la provincia de Salta.",
    ubicacionImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Chaco_in_Argentina_%28%2BFalkland%29.svg/270px-Chaco_in_Argentina_%28%2BFalkland%29.svg.png",
  },
  //Chubut
  {
    identificacion: "chubut",
    nombre: "Chubut  (CT)",
    color: "#F00505",
    bandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bandera_de_la_Provincia_del_Chubut.svg/800px-Bandera_de_la_Provincia_del_Chubut.svg.png",
    url: "https://es.wikipedia.org/wiki/Provincia_del_Chubut",
    descripcion:
      "Chubut, provincia en el sur de Argentina, tiene como capital Rawson y la ciudad más poblada es Comodoro Rivadavia. Su principal actividad económica es la explotación de hidrocarburos no renovables (petróleo, gas butano), aportando el 13% del petróleo nacional y cerca del 2% del gas. También destaca por sus yacimientos de uranio, plomo, oro y plata a nivel mundial.",
    gobernador: "Ignacio Torres  (PRO🟡)",
    capital: "Rawson",
    poblada: "Comodoro Rivadavia",
    fundacion: "28 de julio de 1865 ",
    autonomia:
      "16 de octubre de 1884  (Territorio Nacional)\n 15 de junio de 1955(Provincialización) ",
    superficie: "224.686 km²",
    poblacion: "587.956 hab.",
    gentillicio: "Chubutense",
    clima: "Frío y húmedo ",
    ubicacion:
      "https://www.google.com.ar/maps/place/Chubut/data=!4m2!3m1!1s0xbde2a3c6a2577047:0xdad4458e4b26a228?sa=X&ved=2ahUKEwj2q4SrwJDxAhUmrpUCHUtEBmQQ8gEwAHoECAYQAQ",
    ubicacionDesc:
      "Está ubicada al centrosur de la región patagónica (entre los paralelos 42 y 46 de latitud sur), que ocupa la mitad sur del país, limitando al norte con Río Negro, al este con el mar Argentino (océano Atlántico), al sur con Santa Cruz y al oeste con Chile, cuyo límite está determinado por la divisoria de agua de la cordillera de los Andes.",
    ubicacionImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Chubut_in_Argentina_%28%2BFalkland_hatched%29.svg/352px-Chubut_in_Argentina_%28%2BFalkland_hatched%29.svg.png",
  },
  //Córdoba
  {
    identificacion: "cordoba",
    nombre: "Córdoba  (CB)",
    color: "#991426",
    bandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bandera_de_la_Provincia_de_C%C3%B3rdoba_2014.svg/800px-Bandera_de_la_Provincia_de_C%C3%B3rdoba_2014.svg.png",
    url: "https://es.wikipedia.org/wiki/Provincia_de_C%C3%B3rdoba_(Argentina)",
    descripcion:
      "Córdoba, en el centro de Argentina, es la segunda provincia más poblada tras Buenos Aires. Su economía diversa se beneficia de condiciones climáticas, topográficas y naturales para la agricultura, ganadería, explotación forestal y minería. Además, el turismo, la industria y los servicios son pilares económicos, incentivados por leyes de fomento turístico.",
    gobernador: "Martín Llaryora (HxPN🔵)",
    capital: "Córdoba ",
    poblada: "Gran Córdoba",
    fundacion: "6 de julio de 1573 ",
    autonomia: "5 de enero de 1820",
    superficie: "165.310 km² ",
    poblacion: "3.760.450 hab.",
    gentillicio: "Cordobés/sa ",
    clima: "Templado moderado",
    ubicacion:
      "https://www.google.com.ar/maps/place/C%C3%B3rdoba/data=!4m2!3m1!1s0x9432985f478f5b69:0xb0a24f9a5366b092?sa=X&ved=2ahUKEwj87e-HxJDxAhUbrpUCHTttBSMQ8gEwAHoECAcQAQ ",
    ubicacionDesc:
      "Está ubicada en centro geográfico del país, al oeste de la región Centro de Argentina, limitando al norte con Catamarca y Santiago del Estero, al este con Santa Fe, al sureste con la Provincia de Buenos Aires, al sur con Provincia de La Pampa y al oeste con San Luis y La Rioja",
    ubicacionImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Cordoba_in_Argentina_%28%2BFalkland_hatched%29.svg/800px-Cordoba_in_Argentina_%28%2BFalkland_hatched%29.svg.png",
  },
  //Corrientes
  {
    identificacion: "corrientes",
    nombre: "Corrientes (CR)",
    color: "#76abdc",
    bandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bandera_de_la_Provincia_de_Corrientes.svg/300px-Bandera_de_la_Provincia_de_Corrientes.svg.png",
    url: "https://es.wikipedia.org/wiki/Provincia_de_Corrientes",
    descripcion:
      "Corrientes, en el centro de Argentina, es una de las provincias más antiguas del país y una de las catorce fundadoras de la Confederación Argentina en la historia de su construcción estatal.",
    gobernador: "Gustavo Valdés (UCR 🔴)",
    capital: "Corrientes",
    poblada: "Corrientes",
    fundacion: "3 de abril de 1588",
    autonomia: "20 de abril de 1814 ",
    superficie: " 88.199 km² ",
    poblacion: "1.111.052 hab. ",
    gentillicio: "Correntino/na ",
    clima: "Subtropical",
    ubicacion:
      "https://www.google.com.ar/maps/place/Corrientes/data=!4m2!3m1!1s0x94456b79d5bed36b:0xfa999f1ef3b40646?sa=X&ved=2ahUKEwj9ko3yyJDxAhWElZUCHd26AJUQ8gEwAHoECAcQAQ",
    ubicacionDesc:
      "Está ubicada geográficamente al noreste del país, en la región del Norte Grande Argentino, limitando al oeste y norte con el río Paraná que la separa de Santa Fe, Chaco y Paraguay, al noreste con Misiones, al este con el río Uruguay que la separa de Brasil y Uruguay, y al sur con Entre Ríos.",
    ubicacionImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Corrientes_in_Argentina_%28%2BFalkland%29.svg/352px-Corrientes_in_Argentina_%28%2BFalkland%29.svg.png",
  },
  //Entre Ríos
  {
    identificacion: "entre ríos",
    nombre: "Entre Ríos (ER)",
    color: "#991426",
    bandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Bandera_de_la_Provincia_de_Entre_R%C3%ADos.svg/800px-Bandera_de_la_Provincia_de_Entre_R%C3%ADos.svg.png",
    url: "https://es.wikipedia.org/wiki/Provincia_de_Entre_R%C3%ADos",
    descripcion:
      "Entre Ríos, en el centro de Argentina, forma parte de la región mesopotámica. Conocida por su configuración insular por estar rodeada de ríos, tiene una economía basada en la agricultura, ganadería y turismo, con incursiones menores en minería e industria.",
    gobernador: "Rogelio Frigerio (PRO🟡)",
    capital: "Paraná",
    poblada: "Gran Paraná",
    fundacion: "3 de abril de 1588",
    autonomia: "20 de abril de 1814 ",
    superficie: " 88.199 km² ",
    poblacion: "1.111.052 hab. ",
    gentillicio: "Correntino/na ",
    clima: "Subtropical",
    ubicacion:
      "https://www.google.com.ar/maps/place/Corrientes/data=!4m2!3m1!1s0x94456b79d5bed36b:0xfa999f1ef3b40646?sa=X&ved=2ahUKEwj9ko3yyJDxAhWElZUCHd26AJUQ8gEwAHoECAcQAQ",
    ubicacionDesc:
      "Está ubicada geográficamente al noreste del país, en la región del Norte Grande Argentino, limitando al oeste y norte con el río Paraná que la separa de Santa Fe, Chaco y Paraguay, al noreste con Misiones, al este con el río Uruguay que la separa de Brasil y Uruguay, y al sur con Entre Ríos.",
    ubicacionImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Corrientes_in_Argentina_%28%2BFalkland%29.svg/352px-Corrientes_in_Argentina_%28%2BFalkland%29.svg.png",
  },
  //Formosa
  {
    identificacion: "formosa",
    nombre: "Formosa (FO)",
    color: "#76abdc",
    bandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Bandera_de_la_Provincia_de_Formosa.svg/550px-Bandera_de_la_Provincia_de_Formosa.svg.png",
    url: "https://es.wikipedia.org/wiki/Provincia_de_Formosa",
    descripcion:
      "Formosa, en el noreste de Argentina, tiene una historia marcada por tribus ancestrales y una colonización tardía debido a conflictos. Tras la Guerra de la Triple Alianza, se intensificó su ocupación. Su economía se basa en la cría de ganado y la agricultura primaria.",
    gobernador: "Gildo Insfrán (UxP🔵)",
    capital: "Formosa",
    poblada: "Formosa",
    fundacion: "8 de abril de 1879",
    autonomia: "15 de junio de 1955 ",
    superficie: " 72.066 km² ",
    poblacion: "595.280 hab. ",
    gentillicio: "Formoseño/ña ",
    clima: "Tropical",
    ubicacion:
      "https://www.google.com.ar/maps/place/Corrientes/data=!4m2!3m1!1s0x94456b79d5bed36b:0xfa999f1ef3b40646?sa=X&ved=2ahUKEwj9ko3yyJDxAhWElZUCHd26AJUQ8gEwAHoECAcQAQ",
    ubicacionDesc:
      "Está ubicada en el noreste del país, en la región del Norte Grande Argentino, limitando al norte con el río Pilcomayo que la separa de Paraguay, al este con el río Paraguay que la separa de nuevo de Paraguay, al sur con los ríos Bermejo y Teuco que la separan de Chaco, y al oeste con Salta, mediante un meridiano",
    ubicacionImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Formosa_in_Argentina_%28%2BFalkland_hatched%29.svg/800px-Formosa_in_Argentina_%28%2BFalkland_hatched%29.svg.png",
  },
  //Jujuy
  {
    identificacion: "jujuy",
    nombre: "Jujuy (JY)",
    color: "#76abdc",
    bandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Bandera_de_la_Provincia_de_Jujuy.svg/482px-Bandera_de_la_Provincia_de_Jujuy.svg.png",
    url: "https://es.wikipedia.org/wiki/Provincia_de_Jujuy",
    descripcion:
      "Jujuy, en el noroeste de Argentina, se sustenta en actividades primarias. Destacan los cultivos como caña de azúcar, banana, tabaco, cítricos, mangos y papayas, con una larga tradición desde el siglo XX. Además, tiene producción de petróleo, gas y una ancestral actividad minera de plomo, plata, cobre, oro, salitre, potasio y bórax",
    gobernador: "Carlos Sadir (UCR🔴)",
    capital: "San Salvador de Jujuy",
    poblada: "Gran San Salvador de Jujuy",
    fundacion: "19 de abril de 1593",
    autonomia: "17 de diciembre de 1836  ",
    superficie: " 53.219 km² ",
    poblacion: "727.780 hab.",
    gentillicio: "jujeño/ña ",
    clima: "Tropical",
    ubicacion:
      "https://www.google.com.ar/maps/place/Jujuy/@-23.1907048,-66.8030576,8z/data=!3m1!4b1!4m5!3m4!1s0x9404a1f6e75c0087:0x815e91b230ce4e79!8m2!3d-22.6633212!4d-66.2367172",
    ubicacionDesc:
      "Está ubicada en el extremo noroeste del país, en la región del Norte Grande Argentino, limitando al oeste con la República de Chile hasta el trifinio cerro Zapaleri, donde comienza su frontera con el Estado Plurinacional de Bolivia (hacia el norte), y al este y sur con Salta",
    ubicacionImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Jujuy_in_Argentina_%28%2BFalkland_hatched%29.svg/800px-Jujuy_in_Argentina_%28%2BFalkland_hatched%29.svg.png",
  },
  //La Pampa
  {
    identificacion: "la pampa",
    nombre: "La Pampa (LP)",
    color: "#76abdc",
    bandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Bandera_de_la_Provincia_de_La_Pampa.svg/391px-Bandera_de_la_Provincia_de_La_Pampa.svg.png",
    url: "https://es.wikipedia.org/wiki/Provincia_de_La_Pampa",
    descripcion:
      "La Pampa, en el centro de Argentina, es la tercera provincia menos poblada. Su sector agropecuario se concentra en la zona nordeste, debido al régimen de lluvias y calidad de suelos, cultivando cereales, oleaginosas y forraje. Destacan el trigo, maíz y girasol. La ganadería, el principal aporte a la economía, se desarrolla en toda la provincia, centrándose en la cría y engorde de vacunos, con presencia menor de ganado ovino, caprino, equino y porcino.",
    gobernador: " Sergio Ziliotto (UxP🔵)",
    capital: "Santa Rosa",
    poblada: "Santa Rosa",
    fundacion: "22 de abril de 1892",
    autonomia: "8 de agosto de 1951  ",
    superficie: " 143.440 km² ",
    poblacion: "349.299 hab.",
    gentillicio: "Pampeano/na ",
    clima: "Templados y semiáridos",
    ubicacion:
      "https://www.google.com.ar/maps/place/La+Pampa/data=!4m2!3m1!1s0x95dc6d0da46936e9:0xac1677be5ff258c8?sa=X&ved=2ahUKEwir5fWa55fxAhV7r5UCHVH3DQ4Q8gEwGXoECAQQAQ",
    ubicacionDesc:
      "Se encuentra en la Región pampeana, limitando al norte con las provincias de San Luis y Córdoba, al este con la provincia de Buenos Aires, al sur con el río Colorado que la separa de Río Negro, y al noroeste con Mendoza.",
    ubicacionImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/La_Pampa_in_Argentina_%28%2BFalkland_hatched%29.svg/352px-La_Pampa_in_Argentina_%28%2BFalkland_hatched%29.svg.png",
  },
  //La Rioja
  {
    identificacion: "la rioja",
    nombre: "La Rioja (LR)",
    color: "#007bc4",
    bandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Bandera_de_la_Provincia_de_La_Rioja.svg/700px-Bandera_de_la_Provincia_de_La_Rioja.svg.png",
    url: "https://es.wikipedia.org/wiki/Provincia_de_La_Rioja",
    descripcion:
      "La Rioja, en el noroeste de Argentina, tiene un relieve montañoso con escasa vegetación y sin ríos permanentes. Su economía se basa en la agricultura bajo riego artificial, con énfasis en la producción de vid y olivos. Además, el turismo ha crecido, destacando el Parque Nacional Talampaya como su principal atractivo.",
    gobernador: " Ricardo Quintela (UxP🔵)",
    capital: "La Rioja",
    poblada: "La Rioja",
    fundacion: "20 de mayo de 1591",
    autonomia: "1 de marzo de 1820  ",
    superficie: " 89.680 km² ",
    poblacion: "387.728 hab.",
    gentillicio: "Riojano/na  ",
    clima: "Semiárido continental y árido de montaña",
    ubicacion:
      "https://www.google.com.ar/maps/place/La+Rioja/data=!4m2!3m1!1s0x9427d9873396f7e5:0x3e1c9c348972c7ca?sa=X&ved=2ahUKEwiys4mS7ZfxAhVvrJUCHSnXAP4Q8gEwAHoECAYQAQ",
    ubicacionDesc:
      "Está ubicada en el noroeste del país, limitando al norte con Catamarca, al este con Córdoba, al sur con San Luis, al oeste con San Juan y al noroeste con Chile, cuya frontera está determinada por la divisoria de aguas de la cordillera de los Andes.",
    ubicacionImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/La_Rioja_in_Argentina_%28%2BFalkland_hatched%29.svg/352px-La_Rioja_in_Argentina_%28%2BFalkland_hatched%29.svg.png",
  },
  //Mendoza
  {
    identificacion: "mendoza",
    nombre: "Mendoza (MZ)",
    color: "#76abdc",
    bandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Bandera_de_la_Provincia_de_Mendoza.svg/603px-Bandera_de_la_Provincia_de_Mendoza.svg.png",
    url: "https://es.wikipedia.org/wiki/Provincia_de_Mendoza",
    descripcion:
      "Mendoza, en el oeste de Argentina, destaca por su vitivinicultura, siendo la principal provincia en la producción de vinos argentinos. Representa el 68,36% del cultivo de vid en la región y el 94,13% de la producción nacional. Esta actividad se desarrolla desde 1598 y se vio impulsada con la llegada del ferrocarril en 1885.",
    gobernador: " Alfredo Cornejo (UCR🔴)",
    capital: "Mendoza",
    poblada: "Gran Mendoza",
    fundacion: "2 de marzo de 1561",
    autonomia: "1 de marzo de 1820  ",
    superficie: " 148.827 km² ",
    poblacion: "2.086.000  hab. ",
    gentillicio: "Mendocino/na   ",
    clima: "Semiárido continental",
    ubicacion:
      "https://www.google.com.ar/maps/place/Mendoza/@-34.7622271,-70.7741011,7z/data=!3m1!4b1!4m5!3m4!1s0x9679745b5dd5fffd:0x902586f1d047824!8m2!3d-34.5869034!4d-68.1431414",
    ubicacionDesc:
      "Está ubicada al suroeste de la región del Nuevo Cuyo y más exactamente el Cuyo, al oeste del país, limitando al norte con San Juan, al este con el río Desaguadero, que la separa de San Luis, al sureste con la provincia de La Pampa, al sur con Neuquén (parte de su frontera la forma el río Colorado), al oeste con las regiones chilenas de Valparaíso, Metropolitana de Santiago, O'Higgins y Maule, cuyo límite está determinado por la divisoria de aguas de la cordillera de los Andes.",
    ubicacionImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Mendoza_in_Argentina_%28%2BFalkland_hatched%29.svg/352px-Mendoza_in_Argentina_%28%2BFalkland_hatched%29.svg.png",
  },
  //Misiones
  {
    identificacion: "misiones",
    nombre: "Misiones (MI)",
    color: "#dd0000",
    bandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Bandera_de_la_Provincia_de_Misiones.svg/800px-Bandera_de_la_Provincia_de_Misiones.svg.png",
    url: "https://es.wikipedia.org/wiki/Provincia_de_Misiones",
    descripcion:
      "Mendoza, en el oeste de Argentina, es famosa por su destacada producción de vinos, siendo líder nacional en este sector. Su historia vitivinícola se remonta a 1598. El entorno montañoso de los Andes y el río Mendoza enriquecen su paisaje. Además de su industria vinícola, es un destino turístico popular por sus actividades al aire libre, incluyendo el esquí y el senderismo.",
    gobernador: "Hugo Passalacqua (UxP🔵)",
    capital: "Posadas",
    poblada: "Posadas",
    fundacion: "22 de diciembre de 1881",
    autonomia: "10 de diciembre de 1953  ",
    superficie: "29.801 km² ",
    poblacion: "1.233.177  hab. ",
    gentillicio: "Misionero/ra   ",
    clima: "Subtropical húmedo sin estación seca",
    ubicacion:
      "https://www.google.com.ar/maps/place/Misiones/data=!4m2!3m1!1s0x94f811245d4ce333:0xfb5d357febb15a1d?sa=X&ved=2ahUKEwiV--Ge-p3xAhWQr5UCHfDnADEQ8gEwAHoECAcQAQ",
    ubicacionDesc:
      "Está ubicada en el noreste del país, en la región del Norte Grande Argentino, limitando al norte y este con los ríos Iguazú, San Antonio, Pepirí Guazú y Uruguay que la separan de Brasil, al sur con Corrientes, por medio de los arroyos Itaembé y Chimiray, y al oeste con el río Paraná que la separa de Paraguay.",
    ubicacionImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Misiones_in_Argentina_%28%2BFalkland_hatched%29.svg/352px-Misiones_in_Argentina_%28%2BFalkland_hatched%29.svg.png",
  },
  //Neuquen
  {
    identificacion: "neuquén",
    nombre: "Neuquén  (NQN)",
    color: "#04a2e0",
    bandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Bandera_de_la_Provincia_del_Neuquen.svg/800px-Bandera_de_la_Provincia_del_Neuquen.svg.png",
    url: "https://es.wikipedia.org/wiki/Provincia_del_Neuqu%C3%A9n",
    descripcion:
      "Neuquén, en la región patagónica, es reconocida por la explotación de hidrocarburos. Su cuenca es la principal área petrolera y gasífera de Argentina. Además, aporta el 52% de la energía eléctrica nacional mediante hidroeléctricas en embalses clave. ",
    gobernador: " Rolando Figueroa (Comunidad🟡) ",
    capital: "Neuquén",
    poblada: "Neuquén",
    fundacion: "8 de febrero de 1883",
    autonomia: "15 de junio de 1955  ",
    superficie: "94.078 km² ",
    poblacion: "637.913  hab. ",
    gentillicio: "Neuquino/na    ",
    clima: "Continental, frío, con estación templada.",
    ubicacion:
      "https://www.google.com.ar/maps/place/Neuqu%C3%A9n/data=!4m2!3m1!1s0x960d6bad5ae41889:0x8c3031d1bbb3d22f?sa=X&ved=2ahUKEwiCnuLDpaHxAhVGrZUCHUMUA4gQ8gEwFHoECAUQAQ",
    ubicacionDesc:
      "Está ubicada al noroeste de la región patagónica, la cual ocupa la mitad sur del país; limita al norte con Mendoza (parte de su frontera la forma el río Colorado), al sureste con Río Negro (gran parte de esta frontera la forma el río Limay) y al oeste con Chile, con las regiones chilenas de Maule, Ñuble, Bío-bío, La Araucanía, Los Ríos y Los Lagos; cuyos límites están determinados por la divisoria de agua y el criterio de altas cumbres de la cordillera de los Andes.",
    ubicacionImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Neuquen_in_Argentina_%28%2BFalkland_hatched%29.svg/352px-Neuquen_in_Argentina_%28%2BFalkland_hatched%29.svg.png",
  },
  //Río Negro
  {
    identificacion: "río negro",
    nombre: "Río Negro (RN)",
    color: "#029a3a",
    bandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Bandera_de_la_Provincia_del_R%C3%ADo_Negro.svg/800px-Bandera_de_la_Provincia_del_R%C3%ADo_Negro.svg.png",
    url: "https://es.wikipedia.org/wiki/Provincia_de_R%C3%ADo_Negro",
    descripcion:
      "Río Negro, en el centro-norte de la Patagonia argentina, tiene una economía basada en la fruticultura, especialmente en los valles. Destacan los cultivos de frutales como manzanas y peras, además de hortalizas como tomate y cebolla, y frutas finas como frambuesas, guindas y frutillas.",
    gobernador: "Alberto Weretilneck (JSRN🟢) ",
    capital: "Viedma",
    poblada: "San Carlos de Bariloche",
    fundacion: "16 de octubre de 1884",
    autonomia: "15 de junio de 1955  ",
    superficie: "203.013 km² ",
    poblacion: "708.799  hab. ",
    gentillicio: "Rionegrino/na    ",
    clima: "Frío seco",
    ubicacion:
      "https://www.google.com.ar/maps/place/R%C3%ADo+Negro/data=!4m2!3m1!1s0x95e282c4b0a6530b:0xc2dfc6ff33b0aedb?sa=X&ved=2ahUKEwiD7caRq6HxAhWxqZUCHfv0AjoQ8gEwAHoECAYQAQ",
    ubicacionDesc:
      "Ubicada al centro-norte de la región patagónica (en la mitad sur del país), limita al noroeste con el río Limay que forma parte de su límite con Neuquén (el resto del límite es una línea recta vertical), al norte con el río Colorado que la separa de la Provincia de La Pampa, al noreste con la Provincia de Buenos Aires (parte de su límite lo forma el río Negro y otra, una línea vertical) y el golfo San Matías (mar Argentino, océano Atlántico), al sur con Chubut y al oeste con la región chilena de Los Lagos, cuya frontera está determinada por la línea de altas cumbres de la cordillera de los Andes. ",
    ubicacionImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Rio_Negro_in_Argentina_%28%2BFalkland_hatched%29.svg/352px-Rio_Negro_in_Argentina_%28%2BFalkland_hatched%29.svg.png",
  },
  //Salta
  {
    identificacion: "salta",
    nombre: "Salta (SA)",
    color: "#8a293d",
    bandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Bandera_de_la_Provincia_de_Salta.svg/564px-Bandera_de_la_Provincia_de_Salta.svg.png",
    url: "https://es.wikipedia.org/wiki/Provincia_de_Salta",
    descripcion:
      "Salta, en el noroeste argentino, destaca en la agricultura con cultivos industriales como cacao, café, tabaco y frutas tropicales. En la producción, resaltan el azúcar, vino, cerveza, lácteos y pastas. Sus exportaciones de azúcar y vino tienen reconocimiento global. La población se dedica mayormente a servicios como comercio, educación, salud y turismo, este último en crecimiento con la apertura de hoteles de alta categoría. ",
    gobernador: "Gustavo Sáenz (PID🔴)",
    capital: "Salta",
    poblada: "Salta",
    fundacion: "8 de octubre de 1814",
    autonomia: "17 de diciembre de 1836  ",
    superficie: "155.488 km² ",
    poblacion: "1.333.365  hab. ",
    gentillicio: "Salteño/ña    ",
    clima: "Cálido",
    ubicacion:
      "https://www.google.com.ar/maps/place/Salta/data=!4m2!3m1!1s0x941b0d2938ead0c7:0x8b4a1bd1f6c37998?sa=X&ved=2ahUKEwjQ-dacsKHxAhVZrJUCHVEVCfEQ8gEwFHoECAYQAQ",
    ubicacionDesc:
      "Está ubicada al noroeste del país, N.O.A. , limitando al norte con la Provincia de Jujuy y con el Departamento de Potosí y el Departamento de Tarija en Bolivia hasta el trifinio Hito Esmeralda, donde comienza su frontera con el Departamento de Boquerón en Paraguay (hacia el noreste), al este con Formosa y Chaco, al sur con Santiago del Estero, Tucumán y Catamarca, y al oeste con la Región de Antofagasta en Chile. ",
    ubicacionImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Salta_in_Argentina_%28%2BFalkland_hatched%29.svg/352px-Salta_in_Argentina_%28%2BFalkland_hatched%29.svg.png",
  },
  //San  Juan
  {
    identificacion: "san juan",
    nombre: "SAN JUAN (SJ)",
    color: "#76abdc",
    bandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Bandera_de_San_Juan_Ciudadana.png/800px-Bandera_de_San_Juan_Ciudadana.png",
    url: "https://es.wikipedia.org/wiki/Provincia_de_San_Juan_(Argentina)",
    descripcion:
      "San Juan, en el noroeste de Argentina, destaca en la agricultura con un énfasis notable en el cultivo de la vid. La producción industrial se centra en la elaboración del vino y conservas de alimentos. Además, la minería está en crecimiento con la extracción de varios minerales por empresas multinacionales. El turismo también ha comenzado a desarrollarse intensamente en la provincia.",
    gobernador: "Marcelo Orrego (Producción y Trabajo🟡)",
    capital: "San Juan",
    poblada: "Gran San Juan",
    fundacion: "13 de junio de 1562",
    autonomia: "1 de marzo de 1820",
    superficie: "89.651 km² ",
    poblacion: "738.959  hab. ",
    gentillicio: "Sanjuanino/na  ",
    clima: "Templado seco",
    ubicacion:
      "https://www.google.com.ar/maps/place/San+Juan/data=!4m2!3m1!1s0x96814029a33cd497:0x3552ffe367e3b1df?sa=X&ved=2ahUKEwjlr7HyzKHxAhU0r5UCHRgSCEYQ8gEwAHoECAUQAQ",
    ubicacionDesc:
      "Está ubicada en el noroeste de la región de Cuyo y más exactamente el Cuyo, al oeste del país, limitando al noreste con La Rioja, al sureste con San Luis, al sur con Mendoza y al oeste con las regiones chilenas de Atacama, Coquimbo y Valparaíso, cuyo límite está determinado divisoria de agua de la cordillera de los Andes. ",
    ubicacionImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/San_Juan_in_Argentina_%28%2BFalkland_hatched%29.svg/352px-San_Juan_in_Argentina_%28%2BFalkland_hatched%29.svg.png",
  },
  //San Luis
  {
    identificacion: "san luis",
    nombre: "SAN LUIS (SL)",
    color: "#FDFDFD",
    bandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Bandera_de_la_Provincia_de_San_Luis.svg/800px-Bandera_de_la_Provincia_de_San_Luis.svg.png",
    url: "https://es.wikipedia.org/wiki/Provincia_de_San_Luis",
    descripcion:
      "San Luis, ubicada al sureste en la región del Nuevo Cuyo en Argentina, se destaca en el sector agroindustrial con frigoríficos, curtiembres y un crecimiento en la actividad lechera. Además, ha experimentado un desarrollo en la producción de electrodomésticos, plásticos, papel y cartón. La industria minera en las sierras de San Luis, del Gigante y de la Estanzuela es prominente, con riquezas en granito, lajas, calizas, basalto y mármol. El turismo ha sido promovido por el gobierno desde 1983, con una red de autopistas que conectan la capital provincial con las principales localidades turísticas. ",
    gobernador: "Claudio Poggi (Avanzar 🔵)",
    capital: "San Luis",
    poblada: "Gran San Luis",
    fundacion: "25 de agosto de 1594",
    autonomia: "1 de marzo de 1820",
    superficie: "76.748 km² ",
    poblacion: "502.003  hab.",
    gentillicio: "Sanluiseño/ña o puntano/na (para los nacidos en la capital) ",
    clima: "Continental seco",
    ubicacion:
      "https://www.google.com.ar/maps/place/San+Luis/data=!4m2!3m1!1s0x95d43be4529ad73d:0x5dee1e83bd8abc46?sa=X&ved=2ahUKEwiV5c7R1aHxAhVPrZUCHcnCDCIQ8gEwAHoECAYQAQ",
    ubicacionDesc:
      "Está ubicada al sureste de la región del Nuevo Cuyo, al oeste del país, limitando al norte con La Rioja, al este con Córdoba, al sureste y sur con la Provincia de La Pampa, al oeste con el río Desaguadero que la separa de Mendoza, y al noroeste con San Juan. ",
    ubicacionImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/San_Luis_in_Argentina_%28%2BFalkland_hatched%29.svg/352px-San_Luis_in_Argentina_%28%2BFalkland_hatched%29.svg.png",
  },
  //Santa Cruz
  {
    identificacion: "santa cruz",
    nombre: "SANTA CRUZ (SC)",
    color: "#2197de",
    bandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Bandera_de_la_Provincia_de_Santa_Cruz.svg/765px-Bandera_de_la_Provincia_de_Santa_Cruz.svg.png",
    url: "https://es.wikipedia.org/wiki/Provincia_de_Santa_Cruz",
    descripcion:
      "Santa Cruz, en la región patagónica del sur argentino, es pionera mundial en el uso de energías renovables. Las mareas en sus rías y estuarios ofrecen un gran potencial para la energía mareomotriz, pero destaca especialmente en la energía eólica, aprovechando los fuertes vientos que soplan de oeste a este. La economía se centra en la extracción de petróleo, gas butano y metano. En minería, se destaca la producción de oro en Cerro Vanguardia y oro con plata en la mina de Manantial Espejo.  ",
    gobernador: "Claudio Vidal (SER🔵) ",
    capital: "Río Gallegos",
    poblada: "Río Gallegos",
    fundacion: "16 de octubre de 1884 ",
    autonomia: "22 de noviembre de 1956",
    superficie: "243.943 km² ",
    poblacion: "273.964  hab.",
    gentillicio: "Santacruceño/ña  ",
    clima: "Árido y frío",
    ubicacion:
      "https://www.google.com.ar/maps/place/Santa+Cruz/data=!4m2!3m1!1s0xbdb6fbfdc37f535f:0xe4b90d77fdc8237c?sa=X&ved=2ahUKEwjZsdXh2KHxAhWnq5UCHSJFCjIQ8gEwAHoECBAQAQ",
    ubicacionDesc:
      "Está ubicada al sur de la región patagónica, la cual ocupa la mitad sur del país, limitando al norte con Chubut, al este con el océano Atlántico y al sur y oeste con las regiones de Magallanes y de Aysén de la República de Chile. ",
    ubicacionImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Santa_Cruz_in_Argentina_%28%2BFalkland_hatched%29.svg/352px-Santa_Cruz_in_Argentina_%28%2BFalkland_hatched%29.svg.png",
  },
  //Santa Fé
  {
    identificacion: "santa fe",
    nombre: "SANTA FE (SF)",
    color: "#b43232",
    bandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Bandera_de_la_Provincia_de_Santa_Fe.svg/435px-Bandera_de_la_Provincia_de_Santa_Fe.svg.png",
    url: "https://es.wikipedia.org/wiki/Provincia_de_Santa_Fe",
    descripcion:
      "Santa Fe, en el centro-este de Argentina, tiene la segunda economía más grande del país, representando el 8%. La agricultura es esencial, con el 21% de las tierras cultivadas de Argentina, destacándose en la producción de soja, girasol, maíz y trigo, además de fresas, apicultura, madera y algodón en menor escala.",
    gobernador: " Maximiliano Pullaro (UCR🔴)",
    capital: "Santa Fe",
    poblada: "Rosario",
    fundacion: "15 de noviembre de 1573 ",
    autonomia: "10 de mayo de 1816",
    superficie: "133.007 km² ",
    poblacion: "3.397.532  hab.",
    gentillicio: "Santafesino/na  ",
    clima: "Templado y subtropical",
    ubicacion:
      "https://www.google.com.ar/maps/place/Santa+Fe/data=!4m2!3m1!1s0x944ac01eb26c186f:0x8e3e4e20675a3bbc?sa=X&ved=2ahUKEwihn4GU3aHxAhVnrJUCHfF7BlsQ8gEwFHoECAgQAQ",
    ubicacionDesc:
      "Está ubicada en el oeste de la Región del Litoral​ y forma parte de la región integrada Centro,​ limitando al norte con Chaco, al este con el río Paraná que la separa de Corrientes y Entre Ríos, al sur con la Provincia de Buenos Aires y al oeste con la Provincia de Córdoba y Santiago del Estero. ",
    ubicacionImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Santa_Fe_in_Argentina.svg/352px-Santa_Fe_in_Argentina.svg.png",
  },
  //Santiago del Estero
  {
    identificacion: "santiago del estero",
    nombre: "SANTIAGO DEL ESTERO (SE)",
    color: "#b43232",
    bandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Bandera_de_la_Provincia_de_Santiago_del_Estero.svg/750px-Bandera_de_la_Provincia_de_Santiago_del_Estero.svg.png",
    url: "https://es.wikipedia.org/wiki/Provincia_de_Santiago_del_Estero",
    descripcion:
      "En Santiago del Estero, en el norte de Argentina, la explotación forestal es clave, con bosques que producen la mayor cantidad de madera en el país. La agricultura y ganadería, especialmente entre los ríos Salado del Norte y Dulce, se enfocan en cultivos como trigo, maíz, alfalfa, y en ganado caprino, con presencia menor de otras especies. La minería abarca cal, yeso, granito, sal, manganeso y mármol, con fábricas de cemento y plantas de cal.",
    gobernador: "Gerardo Zamora (UxP🔵)",
    capital: "Santiago del Estero",
    poblada: "Santiago del Estero",
    fundacion: "25 de julio de 1553 ",
    autonomia: "27 de abril de 1820",
    superficie: "136.351 km²",
    poblacion: "928.097  hab.",
    gentillicio: "Santiagueño/ña",
    clima: "Semitropical continental",
    ubicacion:
      "https://www.google.com.ar/maps/place/Santiago+del+Estero/data=!4m2!3m1!1s0x9425a84f49ae19cf:0xe23b1c64d3a49ba5?sa=X&ved=2ahUKEwihspzS4KHxAhXGrJUCHcf9Bt4Q8gEwAHoECAYQAQ",
    ubicacionDesc:
      "Está ubicada al norte del país, en la región del Norte Grande Argentino, limitando al norte con Salta y Chaco, al este nuevamente con Chaco y Santa Fe, al sur con Córdoba y al oeste con Catamarca y Tucumán.",
    ubicacionImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Santiago_del_Estero_in_Argentina_%28%2BFalkland_hatched%29.svg/352px-Santiago_del_Estero_in_Argentina_%28%2BFalkland_hatched%29.svg.png",
  },
  //Tierra del Fuego
  {
    identificacion: "tierra del fuego",
    nombre:
      "PROVINCIA DE TIERRA DEL FUEGO, ANTÁRTIDA E ISLAS DEL ATLÁNTICO SUR (TF)",
    color: "#fd9830",
    bandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Bandera_de_la_Provincia_de_Tierra_del_Fuego.svg/800px-Bandera_de_la_Provincia_de_Tierra_del_Fuego.svg.png",
    url: "https://es.wikipedia.org/wiki/Provincia_de_Tierra_del_Fuego,_Ant%C3%A1rtida_e_Islas_del_Atl%C3%A1ntico_Sur",
    descripcion:
      "TTierra del Fuego, Antártida e Islas del Atlántico Sur es la provincia más austral de Argentina, que incluye territorios en disputa como Malvinas, Georgias del Sur, Sandwich del Sur, Orcadas del Sur, Shetland del Sur y la Antártida Argentina. La ley provincial permite su pertenencia sujeta a tratados con potencias extranjeras, lo que posibilita su secesión por decisión del Estado nacional en negociaciones de soberanía.",
    gobernador: " Gustavo Melella (UxP🔵)",
    capital: "Río Grande",
    poblada: "Santiago del Estero",
    fundacion: "1884 ",
    autonomia: "26 de abril de 1990",
    superficie:
      "21.571 km² (excluyendo territorio reclamado) \n  1.002.445  km² (incluyendo territorio reclamado)",
    poblacion: "160.720  hab.",
    gentillicio: "Fueguino/na",
    clima: "Templado frío y húmedo",
    ubicacion:
      "https://www.google.com.ar/maps/place/Tierra+del+Fuego/data=!4m2!3m1!1s0xbc4c22cfd9432921:0x80ee54358cf0d88d?sa=X&ved=2ahUKEwiqpfvA5KHxAhWlq5UCHerrDA4Q8gEwAHoECAcQAQ",
    ubicacionDesc:
      "Está ubicada en la región patagónica, en el extremo sur de la Argentina, y ocupa un amplio territorio insular, marítimo y antártico, que se extiende desde la Isla Grande de Tierra del Fuego al polo Sur, incluyendo la isla de los Estados, las islas Malvinas, las islas del Atlántico Sur, la península Antártica, formando un triángulo cuyos lados son los meridianos 74°O y 25°O y su vértice el polo Sur.",
    ubicacionImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Tierra_del_Fuego%2C_Antartida_e_Islas_del_Atlantico_Sur_%28de-facto_%2Bclaims_hatched%29_%28special_marker%29_%28%2BAntarctica%29.svg/641px-Tierra_del_Fuego%2C_Antartida_e_Islas_del_Atlantico_Sur_%28de-facto_%2Bclaims_hatched%29_%28special_marker%29_%28%2BAntarctica%29.svg.png",
  },
  //Tucuman
  {
    identificacion: "tucuman",
    nombre: "TUCUMAN (TU)",
    color: "#76abdc",
    bandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Bandera_de_la_Provincia_de_Tucum%C3%A1n.svg/700px-Bandera_de_la_Provincia_de_Tucum%C3%A1n.svg.png",
    url: "https://es.wikipedia.org/wiki/Provincia_de_Tucum%C3%A1n",
    descripcion:
      "Tucumán, en el noroeste de Argentina, fue escenario de la Declaración de Independencia en 1816. Es la provincia más pequeña en tamaño pero con mayor densidad poblacional. Destaca por la industria azucarera y del limón, además de tener sectores automotrices, textiles, alimenticios y papeleros.",
    gobernador: " Osvaldo Jaldo (UxP🔵)",
    capital: "San Miguel de Tucumán",
    poblada: "San Miguel de Tucumán",
    fundacion: "1564",
    autonomia: "25 de noviembre de 1825",
    superficie: "22.525 km²",
    poblacion: "1.767.500  hab.",
    gentillicio: "Tucumano/na",
    clima: "Cálido subtropical con estación seca",
    ubicacion:
      "https://www.google.com.ar/maps/place/San+Miguel+de+Tucum%C3%A1n,+Tucum%C3%A1n/data=!4m2!3m1!1s0x94223792d6c56903:0xf88d5b92b5c56527?sa=X&ved=2ahUKEwicmajl6KHxAhVLqJUCHfLRDqYQ8gEwAHoECAcQAQ",
    ubicacionDesc:
      "Está ubicada en el noroeste del país, en la región del Norte Grande Argentino, limitando al norte con Salta, al este con Santiago del Estero y al sur y oeste con Catamarca.",
    ubicacionImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Tucuman_in_Argentina_%28%2BFalkland_hatched%29.svg/352px-Tucuman_in_Argentina_%28%2BFalkland_hatched%29.svg.png",
  },
];

export default provincias;
