import Discord from "discord.js";
const {generarRandom}  = require("../functions/numeroRandom");
module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName("frase")
        .setDescription("Muestra una frase de un argentino de manera aleatoria"),
   
    async run(client, interaction) {

        const frases = [
            {id: 1, autor: "Diego Maradona", frase: "La pelota no se mancha"},
            {id: 2, autor: "Lionel Messi", frase: "Me gustaría que la gente recuerde que soy un jugador que siempre dio todo por Argentina, que dio todo por su club y que siempre intentó dar lo mejor en cada partido."},
            {id: 3, autor: "Carlos Tevez", frase: "Soy de Boca y tengo que estar a la altura de las circunstancias. Siempre voy a pelear por la camiseta que llevo puesta."},
            {id: 4, autor: "Juan Román Riquelme", frase: "Yo a la Selección no vuelvo más. Yo me equivoqué y pagué, pero ya está. No vuelvo más. Que digan lo que quieran."},
            {id: 5, autor: "Gabriel Batistuta", frase: "Siempre que me pongo la camiseta de la Selección, me siento un privilegiado."},
            {id: 6, autor: "Diego Maradona", frase: "Yo nací en un barrio privado de Buenos Aires. Privado de luz, de agua, de teléfono."},
            {id: 7, autor: "Lionel Messi", frase: "Jugar sin público es un bajón, no es lo mismo."},
            {id: 8, autor: "Carlos Saul Menem", frase: "La Argentina esta viviendo una fiesta"},
            {id: 9, autor: "Carlos Saul Menem", frase: "Síganme, no los voy a defraudar"},
            {id: 10, autor: "Fernando de la Rúa", frase: "La Argentina es segura y previsible, ahora podemos crecer en paz. El 2001 será un gran año para todos. ¡Qué lindo es dar buenas noticias!"},
            {id: 11, autor: "Cristina Fernandez de Kirchner", frase: "Hoy no podemos hacer choripán porque hay lluvia"},
            {id: 12, autor: "Nestor Kirchner", frase: "El año que viene vamos a tener un candidato que será pingüino o pingüina"},
            {id: 13, autor: "Mauricio Macri", frase: "Vamos por el camino correcto"},
            {id: 14, autor: "Mauricio Macri", frase: "¡No se inunda más, carajo!"},
            {id: 15, autor: "Alberto Fernandez", frase: "Los mexicanos salieron de los indios, los brasileros salieron de la selva, pero nosotros los argentinos llegamos de los barcos, y eran barcos que venían de Europa, y así construimos nuestra sociedad"},
            {id: 16, autor: "Alberto Fernandez", frase: "Al compañero de garganta profunda, gracias por haberme acompañado en este tiempo"},
            {id: 17, autor: "Alberto Fernandez", frase: "Sergio Massa ha traído tranquilidad a los mercados"},
            {id: 18, autor: "Alberto Fernandez", frase: "No se vayan, hay una Argentina que construir, hay un país que los necesita"},
            {id: 19, autor: "Alberto Fernandez", frase: "La Argentina esta de pie"},
            {id: 20, autor: "Sergio Massa", frase: "Yo voy a barrer con los ñoquis de la campora"},
            {id: 21, autor: "Sergio Massa", frase: "Por sí o por no, Javier"},
            {id: 22, autor: "Javier Milei", frase: "Si tenés que hacer trampa para ganar, es porque perdiste antes de salir a la cancha"},
            {id: 23, autor: "Javier Milei", frase: "El estado es parte del problema, no la solución"},
            {id: 24, autor: "Javier Milei", frase: "La victoria no depende de la cantidad de soldados, sino de las fuerzas que vienen del cielo"},
            {id: 25, autor: "Javier Milei", frase: "Si te gusta el durazno, bancate la pelusa"},
            {id: 26, autor: "Javier Milei", frase: "La diferencia entre un loco y un genio es el éxito"},
            {id: 27, autor: "San Martin", frase: "Seamos libres, lo demás no importa nada"},
            {id: 28, autor: "San Martin", frase: "Cuando la patria está en peligro, todo está permitido, excepto no defenderla"},
            {id: 29, autor: "Manuel Belgrano", frase: "El miedo solo sirve para perderlo todo"},
            {id: 30, autor: "Carlos Saúl Menem", frase: "Dentro de poco llegaremos de Argentina a Japón en una hora volando en cohete por la estratósfera"},
            {id: 31, autor: "Eduardo Duhalde", frase: "El que depositó pesos, recibirá pesos, el  que depositó  dólares,  recibirá  dólares"},
        ]

        let numeroAleatorio:number = generarRandom(1,32);
        
        frases.forEach(frase => {
            
            if(frase.id == numeroAleatorio){
                const embed = new Discord.EmbedBuilder()
                .setTitle("Frase aleatoria")
                .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1181312199189348402/businessman.png?ex=658099b8&is=656e24b8&hm=9ba43bdc6c82bacb913a63a23348c9c793afe78c3d116fb5b0b8b03b526f479c&")
                .setColor('#385E7F')
                .setDescription('"'+frase.frase+'"')
                .setFooter({ text: "-" + frase.autor });
                interaction.reply({ embeds: [embed] });
            }
        });}   
};