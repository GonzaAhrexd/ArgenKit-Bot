
import Discord from "discord.js"
import axios from "axios"
import { ButtonStyle } from 'discord.js'
import { ActionRowBuilder, ButtonBuilder, StringSelectMenuBuilder } from 'discord.js'
const {formatoPrecio} = require('../functions/formatoPrecio')
const apiKEY = process.env.apiKeyFinnhub
module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('mercado')
        .setDescription('Muestra los datos del mercado')
        .addSubcommand(subcommand =>
            subcommand.setName('estado')
                .setDescription('Muestra el estado actual del mercado')
        ).addSubcommand(subcommand =>
            subcommand.setName('acciones')
                .setDescription('Muestra el precio de algunas acciones')
        ).addSubcommand(subcommand =>
            subcommand.setName('consultar')
                .setDescription('Consulta los valores de un activo del mercado')
                .addStringOption(option =>
                    option.setName('activo')
                        .setDescription('Ingrese el simbolo del activo a consultar.')
                        .setRequired(true)
                )
        ),
        async run(client, interaction, options){
            if (interaction.options.getSubcommand() === 'estado') {
                try {
                    const [estadoMercado] = await Promise.all([
                        axios.get(`https://finnhub.io/api/v1/stock/market-status?exchange=US&token=${apiKEY}`),
                    ]);
                    console.log(estadoMercado.data['isOpen'])
                    const embed:Discord.EmbedBuilder = new Discord.EmbedBuilder()
                    .setTitle("Estado del mercado actual")
                    .setColor(estadoMercado.data['isOpen'] ? "Green" : "Red")
                    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1178904578763280456/stock.png?ex=6577d772&is=65656272&hm=d31896e4060b95d263afb323da2c5d36687da9f95998a024ab814dcfecb5d04b&")
                    .setDescription(`El mercado se encuentra  ${estadoMercado.data['isOpen'] ? "abierto" : "cerrado"}`)
                    .addFields(
                        {name: 'Feriado ', value: ` ${estadoMercado.data['holiday']  == null ? "Ninguno" : estadoMercado.data['holiday']}`},
                        {name: "Estado",   value: estadoMercado.data['isOpen'] ? "Abierto" : "Cerrado"},
                        {name: "Sesión",   value: `${estadoMercado.data['session'] == null ? "Ninguno" : estadoMercado.data['session']}`},
                        )
                        return await interaction.reply({ embeds: [embed] });


                }catch(err){
                    console.error('ERR', err);

                    const errorEmbed = new Discord.EmbedBuilder()
                        .setColor("#ff0000")
                        .setTitle("Error")
                        .setDescription("Ha ocurrido un error al obtener los datos desde el API. Por favor, inténtalo de nuevo más tarde.");
    
                    interaction.reply({ embeds: [errorEmbed] });
                }
            
            
            }
            if (interaction.options.getSubcommand() === 'acciones') {
                interface Accion {
                    symbol: string; // el símbolo de la acción, como AAPL o MSFT
                    name: string; // el nombre de la empresa, como Apple o Microsoft
                    price: number; // el precio actual de la acción
                    previousPrice:  number;
                    porcentaje:  number;
                    ratio: number;
                  }
                  let acciones: Accion[] = [
                    { symbol: "AAPL", name: "Apple", price: 0, previousPrice:0, porcentaje:0, ratio: 10 },
                    { symbol: "MSFT", name: "Microsoft", price: 0, previousPrice:0 , porcentaje:0, ratio: 30 },
                    { symbol: "GOOG", name: "Alphabet (Google)", price: 0, previousPrice:0, porcentaje:0, ratio: 58  },

                    { symbol: "TSLA", name: "Tesla.inc", price: 0, previousPrice:0, porcentaje:0, ratio:  15 },
                    { symbol: "AMZN", name: "Amazon", price: 0, previousPrice:0, porcentaje:0, ratio: 144  },
                    

                    { symbol: "INTC", name: "Intel", price: 0, previousPrice:0, porcentaje:0, ratio:  5 },
                    { symbol: "AMD", name: "AMD", price: 0, previousPrice:0, porcentaje:0, ratio:  10 },
                    { symbol: "NVDA", name: "Nvidia", price: 0, previousPrice:0, porcentaje:0, ratio:  24 },
                    { symbol: "MELI", name: "Mercado Libre", price: 0, previousPrice:0, porcentaje:0, ratio:  60 },

                    { symbol: "BBAR", name: "BANCO FRANCES", price: 0, previousPrice:0, porcentaje:0, ratio:  60 },
                    { symbol: "BMA", name: "BANCO MACRO", price: 0, previousPrice:0, porcentaje:0, ratio:  60 },
                    { symbol: "SUPV", name: "BANCO SUPERVIELLE", price: 0, previousPrice:0, porcentaje:0, ratio:  60 },
                  

                    { symbol: "YPF", name: "YPF", price: 0, previousPrice:0, porcentaje:0, ratio: 1 },
                   { symbol: "EDN", name: "Edenor", price: 0, previousPrice:0, porcentaje:0, ratio: 1 },
                   { symbol: "GGAL", name: "Galicia", price: 0, previousPrice:0, porcentaje:0, ratio: 1 },
                  
                ];

                  for (let accion of acciones) {
                    await axios.get(
                        `https://finnhub.io/api/v1/quote?symbol=${accion.symbol}&token=${apiKEY}`
                      )

                       .then((response) => {
                        // actualizar el precio de la acción con el valor devuelto por la API
                        accion.price = response.data.c;
                        accion.previousPrice = response.data.pc
                        accion.porcentaje = response.data.dp
                      })
                      .catch((error) => {
                        // manejar el error
                        console.error(error);
                      });
                  }

                  console.log(acciones)

                try {
                    const [estadoMercado, dolarMEP ] = await Promise.all([
                        axios.get(`https://finnhub.io/api/v1/stock/market-status?exchange=US&token=${apiKEY}`),
                        axios.get(`https://dolarapi.com/v1/dolares/blue`),

                    ]);
                   
                    const embed:Discord.EmbedBuilder = new Discord.EmbedBuilder()
                    .setTitle("Acciones de empresas")
                    .setColor(estadoMercado.data['isOpen'] ? "Green" : "Red")
                    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1178904578763280456/stock.png?ex=6577d772&is=65656272&hm=d31896e4060b95d263afb323da2c5d36687da9f95998a024ab814dcfecb5d04b&")
                    .setDescription(`Estas son algunas acciones del mercado. Los valores en pesos son una estimación tomando de referencia el dólar CCL`)
                    for (let accion of acciones) {
                        // crear un objeto con los campos name, value e inline
                        let field = {
                          name: `${accion.name} ${subioPrecio(accion)} ${(accion.porcentaje).toFixed(2)}%`,
                          value: `${ formatoPrecio(accion.price,"USD")} (NYC)\nARS ${ formatoPrecio(((accion.price / accion.ratio) * dolarMEP.data['venta']),"ARS") } (CEDEAR ${accion.ratio}:1) `,
                          inline: true,
                        };
                       
                        // agregar el objeto al método .addFields()
                        embed.addFields(field);
                      }
                      
                      await interaction.deferReply();
                      setTimeout(async () => {
                          await interaction.editReply({ embeds: [embed] });
                      }, 3000);


                }catch(err){
                    console.error('ERR', err);

                    const errorEmbed = new Discord.EmbedBuilder()
                        .setColor("#ff0000")
                        .setTitle("Error")
                        .setDescription("Ha ocurrido un error al obtener los datos desde el API. Por favor, inténtalo de nuevo más tarde.");
    
                    interaction.reply({ embeds: [errorEmbed] });
                }
            
            
            }
         
            function subioPrecio(activo):String{
                return activo.price > activo.previousPrice ?  "<:triangleup:1178914601799270450>" :  "🔻"
            }

        }


}
