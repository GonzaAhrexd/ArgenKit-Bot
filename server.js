

//Requerir Discord.js
const Discord = require("discord.js"); 

//Intents requeridos
const { Client, Intents, MessageEmbed, reactions } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS,
   Intents.FLAGS.GUILD_MESSAGES,
  ],
  }); 

//Nueva cosa para que el bot funcione

const { MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js');

const prefix="*ar " //Prefijo del bot

//Dependencias del bot

var currencyFormatter = require('currency-formatter') 
const axios = require ('axios');  //Axios  para  apis
const recon = require('reconlx'); //Reconlx
const ReactionPages = recon.ReactionPages; 
const paginationEmbed = require('discordjs-button-pagination'); //Paginación por botones 
const { Interaction } = require("discord.js"); //Discord.js interacciones
const { SlashCommandBuilder } = require('@discordjs/builders'); //Builder
const simplydjs = require("simply-djs"); //Simply djs



//Estado del bot
function presence(){

  client.user.setPresence({
    status: "online",
    
    activities: [{
      name: 'Bot creado por GonzaAhre | Prueba /help o /update',
      type: "PLAYING"
    }] 
  
});
  
}



//Prender bot
client.on("ready", async () => {
    console.log("TODO LISTO");
    presence();

 // const guildId = '740761148160213082'
    const guild = client.guilds.cache.get() //Crear comandos
    let commands

 //   client.application.commands.set([]);

    const list = await client.application.commands.fetch() 
     console.log(list) //Mostrar lista de comandos

 
  //  client.application.commands.delete(id)
  
  
  
    if  (guild){
      commands = guild.commands
    } else {
      commands = client.application?.commands
    }



//Información
//Creador
    commands?.create({
      name: 'creador',
      description: 'Muestra información del creador del bot.',
    })
//Api
    commands?.create({
      name: 'api',
      description: 'Muestra las apis utilizadas en el bot',
    })
//Donaciones
    commands?.create({
      name: 'donaciones',
      description: 'Muestra formas de apoyar al creador mediante donaciones',
    })
//Votar
    commands?.create({
      name: 'votar',
      description: 'Vota al bot en top.gg',
    })
//Servidor
    commands?.create({
      name: 'servidor',
      description: '¡Unete al servidor oficial del bot!',
    })
//Invitar
    commands?.create({
      name: 'invitar',
      description: 'Invita al bot a unirte a tu servidor',
    })
//Help
    commands?.create({
      name: 'help',
      description: 'Muestra los comandos disponibles',
    })
//Update
    commands?.create({
      name: 'update',
      description: 'Muestra las novedades de la actualización',
    })

   
//Utilidad
//Impuesto
    commands?.create({
      name: 'impuesto',
      description: 'Calcula el impuesto a compras online del 64% o 65%',
      options: [
      {
        name: 'monto',
        description: 'Valor a calcular.',
        required: true,
        type: "NUMBER"
      }
      ]
    })

    //Calculadora

    commands?.create({
      name: 'calculadora',
      description: 'Calculadora interactiva por simply.djs',
    })

    //Anualizar
    commands?.create({
      name: 'anualizarinflacion',
      description: 'Calcula la inflación anual a partir de la mensual',
      options: [
      {
        name: 'mensual',
        description: 'Inflación mensual a anualizar  sin el símbolo de %.',
        required: true,
        type: "NUMBER"
      }
      ]
    })


//Divisas
  commands?.create({
    name: 'divisa',
    description: 'Mostrar los datos de una divisa',
    options: [
      {
      type: "SUB_COMMAND",
      name: "dolar",
      description: "Muestra los datos del dólar oficial + impuestos"
      },
    {
      type: "SUB_COMMAND",
      name: "dolarblue",
      description: "Muestra los datos del dólar blue"

    },
  {
    type: "SUB_COMMAND",
    name: "euro",
    description: "Muestra los datos del Euro + impuestos"
  },
  {
    type: "SUB_COMMAND",
    name: "real",
    description: "Muestra los datos del Real brasileño + impuestos"
  },
  {
    type: "SUB_COMMAND",
    name: "yen",
    description: "Muestra los datos del Yen japonés + impuestos"
  },
  {
    type: "SUB_COMMAND",
    name: "libra",
    description: "Muestra los datos de la Libra Esterlina + impuestos"
  },
  {
    type: "SUB_COMMAND",
    name: "rublo",
    description: "Muestra los datos del rublo ruso + impuestos"
  },
  {
    type: "SUB_COMMAND",
    name: "dolarcanadiense",
    description: "Muestra los datos del Dólar canadiense + impuestos"
  },
  {
    type: "SUB_COMMAND",
    name: "dolaraustraliano",
    description: "Muestra los datos del Dólar australiano + impuestos"
  },
  {
    type: "SUB_COMMAND",
    name: "dolarneozelandes",
    description: "Muestra los datos del Dólar neozelandés + impuestos"
  },
  {
    type: "SUB_COMMAND",
    name: "pesomexicano",
    description: "Muestra los datos del Peso mexicano + impuestos"
  },
  {
    type: "SUB_COMMAND",
    name: "pesochileno",
    description: "Muestra los datos del Peso chileno + impuestos"
  },
  {
    type: "SUB_COMMAND",
    name: "pesouruguayo",
    description: "Muestra los datos del Peso uruguayo + impuestos"
  },
  {
    type: "SUB_COMMAND",
    name: "pesocolombiano",
    description: "Muestra los datos del Peso colombiano + impuestos"
  },
  {
    type: "SUB_COMMAND",
    name: "boliviano",
    description: "Muestra los datos del Boliviano + impuestos"
  },
  {
    type: "SUB_COMMAND",
    name: "sol",
    description: "Muestra los datos del Sol peruano + impuestos"
  },
  {
    type: "SUB_COMMAND",
    name: "guarani",
    description: "Muestra los datos del Guaraní paraguayo + impuestos"
  },
  {
    type: "SUB_COMMAND",
    name: "bolivar",
    description: "Muestra los datos del Bolivar digital venezolano + impuestos"
  },
  {
    type: "SUB_COMMAND",
    name: "yuan",
    description: "Muestra los datos del yuan chino + impuestos"
  },
  {
    type: "SUB_COMMAND",
    name: "rupia",
    description: "Muestra los datos del rupia chino + impuestos"
  },
  {
    type: "SUB_COMMAND",
    name: "won",
    description: "Muestra los datos del won surcoreano + impuestos"
  },
  {
    type: "SUB_COMMAND",
    name: "franco",
    description: "Muestra los datos del franco suizo + impuestos"
  },
  {
    type: "SUB_COMMAND",
    name: "lira",
    description: "Muestra los datos de la lira turca + impuestos"
  }

    ]
})
//Criptomonedas
commands?.create({
  name: 'criptomoneda',
  description: 'Mostrar los datos de una criptomoneda',
  options: [
    {
    type: "SUB_COMMAND",
    name: "bitcoin",
    description: "Muestra los datos del Bitcoin + impuestos"
    },
    {
      type: "SUB_COMMAND",
      name: "ethereum",
      description: "Muestra los datos del Ethereum + impuestos"
  
    },
  {
    type: "SUB_COMMAND",
    name: "tether",
    description: "Muestra los datos del Tether + impuestos"

  },
  {
    type: "SUB_COMMAND",
    name: "axieinfinity",
    description: "Muestra los datos del Axie Infinity + impuestos"

  },
  {
    type: "SUB_COMMAND",
    name: "terralunaclassic",
    description: "Muestra los datos del Terra Luna  Classic + impuestos"

  },
  {
    type: "SUB_COMMAND",
    name: "decentraland",
    description: "Muestra los datos del Decentraland + impuestos"

  },
  {
    type: "SUB_COMMAND",
    name: "solana",
    description: "Muestra los datos del Solana + impuestos"
  },
  {
    type: "SUB_COMMAND",
    name: "dai",
    description: "Muestra los datos del Dai + impuestos"
  },
  {
    type: "SUB_COMMAND",
    name: "dogecoin",
    description: "Muestra los datos del Doge + impuestos"
  },
 {
    type: "SUB_COMMAND",
    name: "terrausdclassic",
    description: "Muestra los datos del UST Classic + impuestos"
  },
   {
    type: "SUB_COMMAND",
    name: "terraluna",
    description: "Muestra los datos del Terra Luna  2.0 + impuestos"
  },

]
})
//Metales
commands?.create({
  name: 'metal',
  description: 'Mostrar los datos de un metal',
  options: [
    {
    type: "SUB_COMMAND",
    name: "oro",
    description: "Muestra los datos del oro"
    },
  {
    type: "SUB_COMMAND",
    name: "plata",
    description: "Muestra los datos de la Plata"

  },
{
  type: "SUB_COMMAND",
  name: "paladio",
  description: "Muestra los datos del Paladio"
},
{
  type: "SUB_COMMAND",
  name: "platino",
  description: "Muestra los datos del Platino"
},
  ]
})


//Convertir

commands?.create({
  name: 'convertirdivisa',
  description: 'Convierte los datos de una divisa a pesos',
  options: [
    {
      type: "SUB_COMMAND",
      name: "dolar",
      description: "Convierte de Dolar Estadounidense a Pesos Argentinos",
      options: [
        {
        name: 'usd',
        description: 'Monto en dólares.',
        type: "NUMBER",
        required: true
      }
      ]
    },
    {
    type: "SUB_COMMAND",
    name: "dolarblue",
    description: "Convierte de Dólar Estadounidense a Pesos Argentinos al precio del mercado paralelo",
    options: [
      {
        name: 'usd',
        description: 'Monto en dólares.',
        type: "NUMBER",
        required: true
      }
    ]
  },
  {
    type: "SUB_COMMAND",
    name: "euro",
    description: "Convierte de Euro a Pesos Argentinos",
    options: [
      {
        name: 'eur',
        description: 'Monto en euros.',
        type: "NUMBER",
        required: true
      }
    ]

      },
      {
        type: "SUB_COMMAND",
        name: "real",
        description: "Convierte de Real Brasileño a Pesos Argentinos",
        options: [
          {
            name: 'brl',
            description: 'Monto en reales.',
            type: "NUMBER",
            required: true
          }
        ]
    
          },
          {
            type: "SUB_COMMAND",
            name: "yen",
            description: "Convierte de Yen Japonés a Pesos Argentinos",
            options: [
              {
                name: 'jpy',
                description: 'Monto en yenes.',
                type: "NUMBER",
                required: true
              }
            ]
        
              },
              {
                type: "SUB_COMMAND",
                name: "libra",
                description: "Convierte de Libra Esterlina a Pesos Argentinos",
                options: [
                  {
                    name: 'gbp',
                    description: 'Monto en libras.',
                    type: "NUMBER",
                    required: true
                  }
                ]
            
                  },
                  {
                    type: "SUB_COMMAND",
                    name: "rublo",
                    description: "Convierte de Rublo Ruso a Pesos Argentinos",
                    options: [
                      {
                        name: 'rub',
                        description: 'Monto en rublos.',
                        type: "NUMBER",
                        required: true
                      }
                    ]
                    
                
                      },
                      {
                        type: "SUB_COMMAND",
                        name: "dolarcanadiense",
                        description: "Convierte de Dólar Canadiense a Pesos Argentinos",
                        options: [
                          {
                            name: 'cad',
                            description: 'Monto en dólares canadienses.',
                            type: "NUMBER",
                            required: true
                          }
                        ]
                    
                          
                        },

                        {
                          type: "SUB_COMMAND",
                          name: "dolaraustraliano",
                          description: "Convierte de Dólar Australiano a Pesos Argentinos",
                          options: [
                            {
                              name: 'aud',
                              description: 'Monto en dólares australianos.',
                              type: "NUMBER",
                              required: true
                            }
                          ]
                      
                            },
                            {
                              type: "SUB_COMMAND",
                              name: "dolarneozelandes",
                              description: "Convierte de Dólar Neozelandés a Pesos Argentinos",
                              options: [
                                {
                                  name: 'nzd',
                                  description: 'Monto en dólares neozelandeses.',
                                  type: "NUMBER",
                                  required: true
                                }
                              ]
                          
                                
                            },
                            {
                              type: "SUB_COMMAND",
                              name: "pesomexicano",
                              description: "Convierte de Pesos Mexicanos a Pesos Argentinos",
                              options: [
                                {
                                  name: 'mxn',
                                  description: 'Monto en pesos mexicanos.',
                                  type: "NUMBER",
                                  required: true
                                }
                              ]
                          
                                },
                                {
                                  type: "SUB_COMMAND",
                                  name: "pesochileno",
                                  description: "Convierte de Pesos Chilenos a Pesos Argentinos",
                                  options: [
                                    {
                                      name: 'clp',
                                      description: 'Monto en pesos chilenos.',
                                      type: "NUMBER",
                                      required: true
                                    }
                                  ]
                              
                                    },
                                    {
                                      type: "SUB_COMMAND",
                                      name: "pesouruguayo",
                                      description: "Convierte de Pesos Uruguayo a Pesos Argentinos",
                                      options: [
                                        {
                                          name: 'uyu',
                                          description: 'Monto en pesos uruguayos.',
                                          type: "NUMBER",
                                          required: true
                                        }
                                      ]
                                  
                                        },
                                        {
                                          type: "SUB_COMMAND",
                                          name: "pesocolombiano",
                                          description: "Convierte de Pesos Colombianos a Pesos Argentinos",
                                          options: [
                                            {
                                              name: 'cop',
                                              description: 'Monto en pesos colombianos.',
                                              type: "NUMBER",
                                              required: true
                                            }
                                          ]
                                      
                                            },
                                            {
                                              type: "SUB_COMMAND",
                                              name: "boliviano",
                                              description: "Convierte de Bolivianos a Pesos Argentinos",
                                              options: [
                                                {
                                                  name: 'bob',
                                                  description: 'Monto en boliviano.',
                                                  type: "NUMBER",
                                                  required: true
                                                }
                                              ]
                                          
                                                },
                                                {
                                                  type: "SUB_COMMAND",
                                                  name: "sol",
                                                  description: "Convierte de Soles Peruanos a Pesos Argentinos",
                                                  options: [
                                                    {
                                                      name: 'pen',
                                                      description: 'Monto en sol peruano.',
                                                      type: "NUMBER",
                                                      required: true
                                                    }
                                                  ]
                                              
                                                    },

                                                    {
                                                      type: "SUB_COMMAND",
                                                      name: "guarani",
                                                      description: "Convierte de Guaranies Paragauyos a Pesos Argentinos",
                                                      options: [
                                                        {
                                                          name: 'pyg',
                                                          description: 'Monto en guarani.',
                                                          type: "NUMBER",
                                                          required: true
                                                        }
                                                      ]
                                                  
                                                        },
                                                        {
                                                          type: "SUB_COMMAND",
                                                          name: "bolivar",
                                                          description: "Convierte de Bolivar Digital Venezolano a Pesos Argentinos",
                                                          options: [
                                                            {
                                                              name: 'ved',
                                                              description: 'Monto en bolivares.',
                                                              type: "NUMBER",
                                                              required: true
                                                            }
                                                          ]
                                                      
                                                            },
                                                            {
                                                              type: "SUB_COMMAND",
                                                              name: "yuan",
                                                              description: "Convierte de Renminbi Chinos a Pesos Argentinos",
                                                              options: [
                                                                {
                                                                  name: 'cny',
                                                                  description: 'Monto en renminbi.',
                                                                  type: "NUMBER",
                                                                  required: true
                                                                }
                                                              ]
                                                          
                                                                },
                                                                {
                                                                  type: "SUB_COMMAND",
                                                                  name: "rupia",
                                                                  description: "Convierte de Rupias Indias a Pesos Argentinos",
                                                                  options: [
                                                                    {
                                                                      name: 'inr',
                                                                      description: 'Monto en rupia.',
                                                                      type: "NUMBER",
                                                                      required: true
                                                                    }
                                                                  ]
                                                              
                                                                    },
                                                                    {
                                                                      type: "SUB_COMMAND",
                                                                      name: "won",
                                                                      description: "Convierte de Won Surcoreano a Pesos Argentinos",
                                                                      options: [
                                                                        {
                                                                          name: 'krw',
                                                                          description: 'Monto en won surcoreano.',
                                                                          type: "NUMBER",
                                                                          required: true
                                                                        }
                                                                      ]
                                                                  
                                                                        },

                                                                        {
                                                                          type: "SUB_COMMAND",
                                                                          name: "franco",
                                                                          description: "Convierte de Francos suizos a Pesos Argentinos",
                                                                          options: [
                                                                            {
                                                                              name: 'chf',
                                                                              description: 'Monto en franco.',
                                                                              type: "NUMBER",
                                                                              required: true
                                                                            }
                                                                          ]
                                                                      
                                                                            },

                                                                            {
                                                                              type: "SUB_COMMAND",
                                                                              name: "lira",
                                                                              description: "Convierte de Lira Turca a Pesos Argentinos",
                                                                              options: [
                                                                                {
                                                                                  name: 'try',
                                                                                  description: 'Monto en lira.',
                                                                                  type: "NUMBER",
                                                                                  required: true
                                                                                }
                                                                              ]
                                                                          
                                                                                }



          
]  
  
})


//Convertir cripto
commands?.create({
  name: 'convertircripto',
  description: 'Convierte de criptomonedas a pesos',
  options: [
    {
      type: "SUB_COMMAND",
      name: "bitcoin",
      description: "Convierte de Bitcoin a Pesos Argentinos",
      options: [
        {
        name: 'btc',
        description: 'Monto en bitcoin.',
        type: "NUMBER",
        required: true
      }
      ]
    },
    {
    type: "SUB_COMMAND",
    name: "ethereum",
    description: "Convierte de Ethereum a Pesos Argentinos",
    options: [
      {
        name: 'eth',
        description: 'Monto en ethereum.',
        type: "NUMBER",
        required: true
      }
    ]
  },
  {
    type: "SUB_COMMAND",
    name: "tether",
    description: "Convierte de Tether a Pesos Argentinos",
    options: [
      {
        name: 'usdt',
        description: 'Monto en tether.',
        type: "NUMBER",
        required: true
      }
    ]
  },
  {
    type: "SUB_COMMAND",
    name: "axieinfinity",
    description: "Convierte de Axie Infinity a Pesos Argentinos",
    options: [
      {
        name: 'axs',
        description: 'Monto en Axie Infinity.',
        type: "NUMBER",
        required: true
      }
    ]
  },
  {
    type: "SUB_COMMAND",
    name: "terralunaclassic",
    description: "Convierte de Terra Luna Classic a Pesos Argentinos",
    options: [
      {
        name: 'lunc',
        description: 'Monto en Terra Luna Classic.',
        type: "NUMBER",
        required: true
      }
    ]
  },
  {
    type: "SUB_COMMAND",
    name: "decentraland",
    description: "Convierte de Decentraland a Pesos Argentinos",
    options: [
      {
        name: 'mana',
        description: 'Monto en Decentraland.',
        type: "NUMBER",
        required: true
      }
    ]
  },
  {
    type: "SUB_COMMAND",
    name: "solana",
    description: "Convierte de Solana a Pesos Argentinos",
    options: [
      {
        name: 'sol',
        description: 'Monto en Solana.',
        type: "NUMBER",
        required: true
      }
    ]
  },
  {
    type: "SUB_COMMAND",
    name: "dai",
    description: "Convierte de Dai a Pesos Argentinos",
    options: [
      {
        name: 'dai',
        description: 'Monto en Dai.',
        type: "NUMBER",
        required: true
      }
    ]
  },
  {
    type: "SUB_COMMAND",
    name: "dogecoin",
    description: "Convierte de Dogecoin a Pesos Argentinos",
    options: [
      {
        name: 'doge',
        description: 'Monto en Dogecoin.',
        type: "NUMBER",
        required: true
      }
    ]
  },
      {
    type: "SUB_COMMAND",
    name: "terrausdclassic",
    description: "Convierte de Terra USD Classic a Pesos Argentinos",
    options: [
      {
        name: 'ustc',
        description: 'Monto en USTC.',
        type: "NUMBER",
        required: true
      }
    ]
  },
  {
    type: "SUB_COMMAND",
    name: "terraluna",
    description: "Convierte de Terra Luna a Pesos Argentinos",
    options: [
      {
        name: 'luna',
        description: 'Monto en Terra Luna 2.0 .',
        type: "NUMBER",
        required: true
      }
    ]
  },
]
})

//Convertir metal a pesos

commands?.create({
  name: 'convertirmetal',
  description: 'Convierte de metales a pesos argentinos',
  options: [
    {
      type: "SUB_COMMAND",
      name: "oro",
      description: "Convierte de Oro a pesos argentinos",
      options: [
        {
        name: 'xau',
        description: 'Monto en onza de oro.',
        type: "NUMBER",
        required: true
      }
      ]
    },
    {
    type: "SUB_COMMAND",
    name: "plata",
    description: "Convierte de Plata a Pesos Argentinos",
    options: [
      {
        name: 'xag',
        description: 'Monto en onza de plata.',
        type: "NUMBER",
        required: true
      }
    ]
  },
  {
    type: "SUB_COMMAND",
    name: "paladio",
    description: "Convierte de Paladio a Pesos Argentinos",
    options: [
      {
        name: 'xpd',
        description: 'Monto en onza de paladio.',
        type: "NUMBER",
        required: true
      }
    ]
  },
  {
    type: "SUB_COMMAND",
    name: "platino",
    description: "Convierte de Platino a Pesos Argentinos",
    options: [
      {
        name: 'xpt',
        description: 'Monto en onza  de platino.',
        type: "NUMBER",
        required: true
      }
    ]
  },
]
})



//Peso a

commands?.create({
  name: 'pesoa',
  description: 'Convierte de pesos a otras divisas',
  options: [
    {
      type: "SUB_COMMAND",
      name: "dolar",
      description: "Convierte de Pesos Argentinos a Dolar Estadounidense",
      options: [
        {
        name: 'ars',
        description: 'Monto en pesos argentinos.',
        type: "NUMBER",
        required: true
      }
      ]
    },
    {
    type: "SUB_COMMAND",
    name: "dolarblue",
    description: "Convierte de Pesos Argentinos a Dólar Estadounidense al precio del mercado paralelo",
    options: [
      {
        name: 'ars',
        description: 'Monto en pesos argentinos.',
        type: "NUMBER",
        required: true
      }
    ]
  },
  {
    type: "SUB_COMMAND",
    name: "euro",
    description: "Convierte de Euro a Pesos Argentinos",
    options: [
      {
        name: 'ars',
        description: 'Monto en pesos argentinos.',
        type: "NUMBER",
        required: true
      }
    ]

      },
      {
        type: "SUB_COMMAND",
        name: "real",
        description: "Convierte de Pesos Argentinos a Real Brasileño",
        options: [
          {
            name: 'ars',
            description: 'Monto en pesos argentinos.',
            type: "NUMBER",
            required: true
          }
        ]
    
          },
          {
            type: "SUB_COMMAND",
            name: "yen",
            description: "Convierte de Pesos Argentinos a Yen Japonés ",
            options: [
              {
                name: 'ars',
                description: 'Monto en pesos argentinos.',
                type: "NUMBER",
                required: true
              }
            ]
        
              },
              {
                type: "SUB_COMMAND",
                name: "libra",
                description: "Convierte de Pesos Argentinos a Libra Esterlina",
                options: [
                  {
                    name: 'ars',
                    description: 'Monto en pesos argentinos.',
                    type: "NUMBER",
                    required: true
                  }
                ]
            
                  },
                  {
                    type: "SUB_COMMAND",
                    name: "rublo",
                    description: "Convierte de Pesos Argentinos a Rublo Ruso",
                    options: [
                      {
                        name: 'ars',
                        description: 'Monto en pesos argentinos.',
                        type: "NUMBER",
                        required: true
                      }
                    ]
                    
                
                      },
                      {
                        type: "SUB_COMMAND",
                        name: "dolarcanadiense",
                        description: "Convierte de Pesos Argentinos a Dólar Canadiense",
                        options: [
                          {
                            name: 'ars',
                            description: 'Monto en pesos argentinos.',
                            type: "NUMBER",
                            required: true
                          }
                        ]
                    
                          
                        },

                        {
                          type: "SUB_COMMAND",
                          name: "dolaraustraliano",
                          description: "Convierte de Pesos Argentinos a Dólar Australiano",
                          options: [
                            {
                              name: 'ars',
                              description: 'Monto en pesos argentinos.',
                              type: "NUMBER",
                              required: true
                            }
                          ]
                      
                            },
                            {
                              type: "SUB_COMMAND",
                              name: "dolarneozelandes",
                              description: "Convierte de Pesos Argentinos a Dólar Neozelandés",
                              options: [
                                {
                                  name: 'ars',
                                  description: 'Monto en pesos argentinos.',
                                  type: "NUMBER",
                                  required: true
                                }
                              ]
                          
                                
                            },
                            {
                              type: "SUB_COMMAND",
                              name: "pesomexicano",
                              description: "Convierte de Pesos Argentinos a Pesos Mexicanos",
                              options: [
                                {
                                  name: 'ars',
                                  description: 'Monto en pesos argentinos.',
                                  type: "NUMBER",
                                  required: true
                                }
                              ]
                          
                                },
                                {
                                  type: "SUB_COMMAND",
                                  name: "pesochileno",
                                  description: "Convierte de Pesos Argentinos a Pesos Chilenos",
                                  options: [
                                    {
                                      name: 'ars',
                                      description: 'Monto en pesos argentinos.',
                                      type: "NUMBER",
                                      required: true
                                    }
                                  ]
                              
                                    },
                                    {
                                      type: "SUB_COMMAND",
                                      name: "pesouruguayo",
                                      description: "Convierte de Pesos Argentinos a Pesos Uruguayo",
                                      options: [
                                        {
                                          name: 'ars',
                                          description: 'Monto en  pesos argentinos.',
                                          type: "NUMBER",
                                          required: true
                                        }
                                      ]
                                  
                                        },
                                        {
                                          type: "SUB_COMMAND",
                                          name: "pesocolombiano",
                                          description: "Convierte de Pesos Argentinos a Pesos Colombianos",
                                          options: [
                                            {
                                              name: 'ars',
                                              description: 'Monto en pesos argentinos.',
                                              type: "NUMBER",
                                              required: true
                                            }
                                          ]
                                      
                                            },
                                            {
                                              type: "SUB_COMMAND",
                                              name: "boliviano",
                                              description: "Convierte de Pesos Argentinos a Bolivianos",
                                              options: [
                                                {
                                                  name: 'ars',
                                                  description: 'Monto en pesos argentinos.',
                                                  type: "NUMBER",
                                                  required: true
                                                }
                                              ]
                                          
                                                },
                                                {
                                                  type: "SUB_COMMAND",
                                                  name: "sol",
                                                  description: "Convierte de Pesos Argentinos a Soles Peruanos",
                                                  options: [
                                                    {
                                                      name: 'ars',
                                                      description: 'Monto en pesos argentinos.',
                                                      type: "NUMBER",
                                                      required: true
                                                    }
                                                  ]
                                              
                                                    },

                                                    {
                                                      type: "SUB_COMMAND",
                                                      name: "guarani",
                                                      description: "Convierte de Pesos Argentinos a Guaranies Paragauyos",
                                                      options: [
                                                        {
                                                          name: 'ars',
                                                          description: 'Monto en pesos argentinos.',
                                                          type: "NUMBER",
                                                          required: true
                                                        }
                                                      ]
                                                  
                                                        },
                                                        {
                                                          type: "SUB_COMMAND",
                                                          name: "bolivar",
                                                          description: "Convierte de Pesos Argentinos a Bolivar Digital Venezolano",
                                                          options: [
                                                            {
                                                              name: 'ars',
                                                              description: 'Monto en pesos argentinos.',
                                                              type: "NUMBER",
                                                              required: true
                                                            }
                                                          ]
                                                      
                                                            },
                                                            {
                                                              type: "SUB_COMMAND",
                                                              name: "yuan",
                                                              description: "Convierte de Pesos Argentinos a Renminbi Chinos",
                                                              options: [
                                                                {
                                                                  name: 'ars',
                                                                  description: 'Monto en pesos argentinos.',
                                                                  type: "NUMBER",
                                                                  required: true
                                                                }
                                                              ]
                                                          
                                                                },
                                                                {
                                                                  type: "SUB_COMMAND",
                                                                  name: "rupia",
                                                                  description: "Convierte de Pesos Argentinos a Rupias Indias",
                                                                  options: [
                                                                    {
                                                                      name: 'ars',
                                                                      description: 'Monto en pesos argentinos.',
                                                                      type: "NUMBER",
                                                                      required: true
                                                                    }
                                                                  ]
                                                              
                                                                    },
                                                                    {
                                                                      type: "SUB_COMMAND",
                                                                      name: "won",
                                                                      description: "Convierte de Pesos Argentinos a Won Surcoreano",
                                                                      options: [
                                                                        {
                                                                          name: 'ars',
                                                                          description: 'Monto en pesos argentinos.',
                                                                          type: "NUMBER",
                                                                          required: true
                                                                        }
                                                                      ]
                                                                  
                                                                        },

                                                                        {
                                                                          type: "SUB_COMMAND",
                                                                          name: "franco",
                                                                          description: "Convierte de Pesos Argentinos a Francos suizos",
                                                                          options: [
                                                                            {
                                                                              name: 'ars',
                                                                              description: 'Monto en pesos argentinos.',
                                                                              type: "NUMBER",
                                                                              required: true
                                                                            }
                                                                          ]
                                                                      
                                                                            },

                                                                            {
                                                                              type: "SUB_COMMAND",
                                                                              name: "lira",
                                                                              description: "Convierte de Pesos Argentinos a Lira Turca",
                                                                              options: [
                                                                                {
                                                                                  name: 'ars',
                                                                                  description: 'Monto en pesos argentinos.',
                                                                                  type: "NUMBER",
                                                                                  required: true
                                                                                }
                                                                              ]
                                                                          
                                                                                }



          
]  
  
})


//Peso a cripto

commands?.create({
  name: 'pesoacripto',
  description: 'Convierte de pesos a criptomoneda',
  options: [
    {
      type: "SUB_COMMAND",
      name: "bitcoin",
      description: "Convierte de Pesos Argentinos a Bitcoin",
      options: [
        {
        name: 'ars',
        description: 'Monto en pesos.',
        type: "NUMBER",
        required: true
      }
      ]
    },
    {
    type: "SUB_COMMAND",
    name: "ethereum",
    description: "Convierte de Pesos Argentinos a Ethereum",
    options: [
      {
        name: 'ars',
        description: 'Monto en pesos.',
        type: "NUMBER",
        required: true
      }
    ]
  },
  {
    type: "SUB_COMMAND",
    name: "tether",
    description: "Convierte de Pesos Argentinos a Tether",
    options: [
      {
        name: 'ars',
        description: 'Monto en pesos.',
        type: "NUMBER",
        required: true
      }
    ]
  },
  {
    type: "SUB_COMMAND",
    name: "axieinfinity",
    description: "Convierte de Pesos Argentinos a Axie Infinity",
    options: [
      {
        name: 'ars',
        description: 'Monto en pesos.',
        type: "NUMBER",
        required: true
      }
    ]
  },
  {
    type: "SUB_COMMAND",
    name: "terraluna",
    description: "Convierte de Pesos Argentinos a Terra Luna",
    options: [
      {
        name: 'ars',
        description: 'Monto en pesos.',
        type: "NUMBER",
        required: true
      }
    ]
  },
  {
    type: "SUB_COMMAND",
    name: "terralunaclassic",
    description: "Convierte de Pesos Argentinos a Terra Luna Classic",
    options: [
      {
        name: 'ars',
        description: 'Monto en pesos.',
        type: "NUMBER",
        required: true
      }
    ]
  },
  {
    type: "SUB_COMMAND",
    name: "decentraland",
    description: "Convierte de Pesos Argentinos a Decentraland",
    options: [
      {
        name: 'ars',
        description: 'Monto en pesos.',
        type: "NUMBER",
        required: true
      }
    ]
  },
  {
    type: "SUB_COMMAND",
    name: "solana",
    description: "Convierte de Pesos Argentinos a Solana",
    options: [
      {
        name: 'ars',
        description: 'Monto en pesos.',
        type: "NUMBER",
        required: true
      }
    ]
  },
  {
    type: "SUB_COMMAND",
    name: "dai",
    description: "Convierte de Pesos Argentinos a DAI",
    options: [
      {
        name: 'ars',
        description: 'Monto en pesos.',
        type: "NUMBER",
        required: true
      }
    ]
  },
  {
    type: "SUB_COMMAND",
    name: "dogecoin",
    description: "Convierte de Pesos Argentinos a Dogecoin",
    options: [
      {
        name: 'ars',
        description: 'Monto en pesos.',
        type: "NUMBER",
        required: true
      }
    ]
  },
    {
    type: "SUB_COMMAND",
    name: "terrausdclassic",
    description: "Convierte de Pesos Argentinos a Terra USD Classic",
    options: [
      {
        name: 'ars',
        description: 'Monto en pesos.',
        type: "NUMBER",
        required: true
      }
    ]
  },
]
})

//Pesos a metales 

commands?.create({
  name: 'pesoametal',
  description: 'Convierte de pesos a metales',
  options: [
    {
      type: "SUB_COMMAND",
      name: "oro",
      description: "Convierte de Pesos Argentinos a oro ",
      options: [
        {
        name: 'ars',
        description: 'Monto en pesos.',
        type: "NUMBER",
        required: true
      }
      ]
    },
    {
    type: "SUB_COMMAND",
    name: "plata",
    description: "Convierte de Pesos Argentinos a plata",
    options: [
      {
        name: 'ars',
        description: 'Monto en pesos.',
        type: "NUMBER",
        required: true
      }
    ]
  },
  {
    type: "SUB_COMMAND",
    name: "paladio",
    description: "Convierte de Pesos Argentinos a paladio",
    options: [
      {
        name: 'ars',
        description: 'Monto en pesos.',
        type: "NUMBER",
        required: true
      }
    ]
  },
  {
    type: "SUB_COMMAND",
    name: "platino",
    description: "Convierte de Pesos Argentinos  a platino",
    options: [
      {
        name: 'ars',
        description: 'Monto en pesos',
        type: "NUMBER",
        required: true
      }
    ]
  },
]
})

//Servicios
commands?.create({
  name: 'servicio',
  description: 'Mostrar el precio de un servicio de Streaming',
  options: [
    {
    type: "SUB_COMMAND",
    name: "netflix",
    description: "Muestra el precio de Netflix + impuestos"
    },
    {
      type: "SUB_COMMAND",
      name: "youtube",
      description: "Muestra el precio de YouTube + impuestos"
      },
      {
      type: "SUB_COMMAND",
      name: "spotify",
      description: "Muestra el precio de Spotify + impuestos"
        },
        {
        type: "SUB_COMMAND",
        name: "crunchyroll",
        description: "Muestra el precio de Crunchyroll + impuestos"
          },
        {
          type: "SUB_COMMAND",
           name: "disney",
          description: "Muestra el precio de Disney+ + impuestos"
            },
            {
              type: "SUB_COMMAND",
              name: "xboxgamepass",
              description: "Muestra el precio de Xbox GamePass + impuestos"
              },
              {
                type: "SUB_COMMAND",
                name: "primevideo",
                description: "Muestra el precio de Prime Video + impuestos"
                },
                {
                  type: "SUB_COMMAND",
                  name: "appletv",
                  description: "Muestra el precio de AppleTV + impuestos"
                  },
                  {
                    type: "SUB_COMMAND",
                    name: "hbomax",
                    description: "Muestra el precio de HBO Max + impuestos"
                    },
                    {
                      type: "SUB_COMMAND",
                      name: "discordnitro",
                      description: "Muestra el precio de Discord Nitro + impuestos"
                      },
                      {
                        type: "SUB_COMMAND",
                        name: "googleone",
                        description: "Muestra el precio de Google One + impuestos"
                        },
                        {
                          type: "SUB_COMMAND",
                          name: "ea",
                          description: "Muestra el precio de EA + impuestos"
                          },
                          {
                            type: "SUB_COMMAND",
                            name: "steam",
                            description: "Muestra el precio de la cartera de Steam + impuestos"
                            },
                            {
                              type: "SUB_COMMAND",
                              name: "paramount",
                              description: "Muestra el precio de Paramount+ + impuestos"
                              },
                              {
                                type: "SUB_COMMAND",
                                name: "twitch",
                                description: "Muestra el precio de las suscripciones y bits de Twitch + impuestos"
                                }
  ]
  })

//Datos


commands?.create({
  name: 'datos',
  description: 'Muestra distintos datos de Argentina',
  options: [
    {
    type: "SUB_COMMAND",
    name: "riesgopais",
    description: "Muestra el Riesgo País de Argentina "
    },
    {
      type: "SUB_COMMAND",
      name: "reservas",
      description: "Muestra las reservas actuales del Banco Central "
      },
      {
        type: "SUB_COMMAND",
        name: "circulante",
        description: "Muestra la cantidad de pesos circulantes en la economía"
        }
      ]

      })

//elecciones

commands?.create({
  name: 'elecciones',
  description: 'Muestra cuántos días faltan para las siguientes elecciones en Argentina',
})



//Futbol

commands?.create({
  name: 'futbol',
  description: 'Muestra cuántos días faltan para  los siguientes partidos de la selección',
})

//Provincia

commands?.create({
  name: 'provinciainfo',
  description: 'Muestra información sobre las 23 provincias de Argentina y la Ciudad Autonoma de Buenos Aires',
  options: [
  {
    name: 'provincia',
    description: 'Ingresa la provincia de la que quieres saber información .',
    type: "STRING",
    required: false
  }
  ]
})


//FUN

//Odio
commands?.create({
  name: 'odio',
  description: 'Muestra tu nivel de odio o bronca',
  options: [
    {
    type: "SUB_COMMAND",
    name: "argentina",
    description: "Muestra tu nivel de odio o bronca a Argentina "
    },
    {
      type: "SUB_COMMAND",
      name: "latinoamerica",
      description: "Muestra tu nivel de odio o bronca a Latinoamérica "
      },
      ]

      })
//Covidtest
      commands?.create({
        name: 'covidtest',
        description: 'Te hace un test de covid',
      })
//Escaparlatam
      commands?.create({
        name: 'escaparlatam',
        description: 'Muestra tus posibilidades de escapar de latinoamérica',
      })
//Moneda
      commands?.create({
        name: 'moneda',
        description: 'Tira una moneda',
      })
//Dados
      commands?.create({
        name: 'dados',
        description: 'Tira unos dados',
      })

      commands?.create({
        name: '8ball',
        description: 'Pregúntale a la bola mágica 8',
        options: [
        {
          name: 'consulta',
          description: 'Consulta a realizar.',
          type: "STRING",
          required: true
        }
        ]
      })
    

//Piedra Papel o Tijera
commands?.create({
  name: 'piedrapapelotijera',
  description: 'Juego interactivo de Piedra Papel o Tijera por simply.djs',
  options: [
    {
        name: 'usuario',
        type: 'USER',
        description: 'Usuario para competir en Piedra Papel o Tijeras',
        required: true,
      }
    ],
})

  commands?.create({
  name: 'tateti',
  description: 'Juego de Tateti. Usando simply-djs',
  options: [{
        name: 'usuario',
        type: 'USER',
        description: 'Usuario para competir en Tateti',
        required: true,
      }
    ],
})
  


  //Covid

  commands?.create({
    name: 'covid',
    description: 'Muestra comandos relacionados a la infección SARS-CoV-2',
    options: [
      {
      type: "SUB_COMMAND",
      name: "casos",
      description: "Muestra los casos de covid19 en Argentina "
      },
      {
        type: "SUB_COMMAND",
        name: "global",
        description: "Muestra los casos de covid19  actuales en el mundo "
        },
        {
          type: "SUB_COMMAND",
          name: "recomendaciones",
          description: "Muestra las recomendaciones con respecto al covid19"
          },
          {
            type: "SUB_COMMAND",
            name: "sintomas",
            description: "Muestra los síntomas del covid19"
            },
            {
              type: "SUB_COMMAND",
              name: "covidpais",
              description: "Muestra los datos de covid de cierto país",
              options: [
                {
                name: 'pais',
                description: 'País a consultar.',
                type: "STRING",
                required: false
              }
                
              ]

              }
        ]
  
        })


      })
  
  //Este cierra
//Comandos slash

//Creador

client.on('interactionCreate', async(interaction) => {
  if(!interaction.isCommand()){
    return
  }

  const {commandName , options} = interaction
  if(commandName === 'creador') {

   const embed = new MessageEmbed()
   .setTitle("El creador del Bot es Gonzalo Ebel")
   .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/919017432591507537/coding.png")
   .setDescription("Estas son mis redes sociales, podés darme sugerencias o ideas por Twitter o en el servidor oficial del bot!")
   .setColor('#dfe5e8')
   .addField("YouTube <:yt:919017871886123120> ","https://www.youtube.com/c/GonzaAhrexd")
   .addField("Twitch  <:twitch:919018371134140466> ","https://www.twitch.tv/gonzaahre")
   .addField("Twitter <:twitter:919018371406762024> ","https://twitter.com/GonzaloEbel")
   .addField("Instagram <:instagram:919018375563341876> ","https://www.instagram.com/gonzaloebel/")
   .addField("Reddit <:reddit:919018377740177418> ", "https://www.reddit.com/user/GonzaAhre")

    interaction.reply({
     
     embeds: [embed]
     
  })
 }
})


//API
client.on('interactionCreate', async(interaction) => {
  if(!interaction.isCommand()){
    return
  }

  const {commandName , options} = interaction
  if(commandName === 'api') {

    const embed = new Discord.MessageEmbed()
    .setTitle("Apis utilizadas para la creación del bot")
    .setColor('#dfe5e8')
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/919016293481472021/navegador.png")
    .addField("Cotizaciones del dólar, euro, real", "https://github.com/Castrogiovanni20/api-dolar-argentina")
    .addField("Valores de coronavirus en Argentina y el mundo: ", "https://disease.sh/")
    .addField("Cotizaciones de otras divisas", "  https://exchangerate.host/#/" )
    .addField("Cotizaciones de criptomonedas", "https://www.coingecko.com/es")
    interaction.reply({
     
     embeds: [embed]
     
  })
 }
})

//Donaciones
client.on('interactionCreate', async(interaction) => {
  if(!interaction.isCommand()){
    return
  }

  const {commandName , options} = interaction
  if(commandName === 'donaciones') {

    const embed = new Discord.MessageEmbed()
    .setTitle("DONACIONES")
    .setColor('GOLD')
    .setDescription("¡Si decidiste donarme te lo agradezco infinitamente! ¡Cada peso cuenta!")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/919022487377961040/piggy-bank.png")
    .addField("PAYPAL ", "http://paypal.me/GonzaAhre")
    .addField("LEMONCASH ", " LemonTag: $gonzaahre \n  CVU: 0000053600000007356663")
    .addField("UALA ", " Usuario: gonzajajaxd \n CVU: 0000007900204494414446 \n Código QR: ")
    .setImage("https://cdn.discordapp.com/attachments/802944543510495292/814641023870697482/codigo_qr.png")
    interaction.reply({
     
     embeds: [embed]
     
  })
 }
})


//Votar
client.on('interactionCreate', async(interaction) => {
  if(!interaction.isCommand()){
    return
  }

  const {commandName , options} = interaction
  if(commandName === 'votar') {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡Apoya al bot votando en top.gg!")
    .setURL("https://top.gg/bot/796173877981216799")
    .setColor('7289d9')
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/919023182269280266/logoinverted.png")
    .setDescription("¡Votar al bot en top.gg es otra forma de mostrar tu apoyo al bot!")
    interaction.reply({
     
     embeds: [embed]
     
  })
 }
})


//Servidor
client.on('interactionCreate', async(interaction) => {
  if(!interaction.isCommand()){
    return
  }

  const {commandName , options} = interaction
  if(commandName === 'servidor') {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡Unete al servidor oficial de Argenkit Bot!")
    .setURL("https://discord.gg/68jsHeTRYa")
    .setColor('#0a9ee1')
    .setDescription("¡Puedes unirte al servidor oficial de Argenkit bot para aportar ideas o dar reportes de bugs! ¡O simplemente hablar con otras personas! ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/811043646848630786/argboticon-03.png")
    interaction.reply({
     
     embeds: [embed]
     
  })
 }
})


//Invitar
client.on('interactionCreate', async(interaction) => {
  if(!interaction.isCommand()){
    return
  }

  const {commandName , options} = interaction
  if(commandName === 'invitar') {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡Invita al bot a tu servidor!")
    .setColor('#0a9ee1')
    .setURL("https://discord.com/api/oauth2/authorize?client_id=796173877981216799&permissions=414464867392&scope=bot%20applications.commands")
    .setDescription("¡Gracias por decidir agregar mi bot a tu servidor!")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/811043646848630786/argboticon-03.png")
    interaction.reply({
     
     embeds: [embed]
     
  })
 }
})



//Divisas
//Dolar

client.on('interactionCreate', async(interaction) => {
  if(!interaction.isCommand()){
    return
  }

  const {commandName , options} = interaction
  if(commandName=="divisa") {

    if (interaction.options.getSubcommand() === 'dolar') {

      axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
      .then((oficial)=> {
       const embed1 = new Discord.MessageEmbed()
       .setTitle("Dólar estadounidese :flag_us:")
       .setColor("#a9ea98")
       .setDescription("El dólar oficial es el valor del dólar que se liquida por parte del gobierno nacional y está sujeto a un 65% de impuestos, además, sólo se puede retirar USD$200 al mes.")
       .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903145945980604447/dolar3.png")
       .addField("Compra <:dollars:903148705094447114>  ", "ARS$ "+  currencyFormatter.format(oficial.data['compra'], { locale: 'es-ES', code: ' ' }),true)
       .addField("Venta <:dollars:903148705094447114> ", "ARS$ "+ currencyFormatter.format(oficial.data['venta'], { locale: 'es-ES', code: ' ' }),true)
       .addField("Impuestos <:dollars:903148705094447114> ", "ARS$ "+ currencyFormatter.format(oficial.data['venta']*1.65, { locale: 'es-ES', code: ' ' }),true)


     const embed2 = new Discord.MessageEmbed()
     .setTitle("Dólar estadounidense")
     .setColor("#a9ea98")
     .setDescription("El dólar estadounidense es la moneda oficial de Estados Unidos y de otros países y dependencias. Tras la ruptura del patrón oro en el año 1971, la moneda se convirtió, de facto, en una moneda fiat.")
     .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903145945980604447/dolar3.png")
     .addField("Acuñación", "2 de abril de 1792")
     .addField("Países donde se utiliza:", ":flag_us: :flag_sv: :flag_ec: :flag_pa: :flag_pr: :flag_zw: :flag_tl: :flag_pw: :flag_fm: :flag_mh: ")
     .addField("Código ISO", "USD ",true)
     .addField("Símbolo", "$ ",true)
     .addField("Billetes :dollar: ", "$1, $2, $5, $10, $20, $50 y $100")
     .addField("Monedas :coin: ", "	$0,01, $0,05, $0,10, $0,25, $0,50 y $1")
     .addField("Inflación anual  :chart_with_downwards_trend: ", "7,1% (2021)",true)
     .addField("Emisor :bank: ","Sistema de Reserva Federal ",true)
    
      
     
   const button1 = new MessageButton()
   .setCustomId("previousbtn")
   .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

  const button2 = new MessageButton()
  .setCustomId("nextbtn")
  .setLabel("📋 Información")
  .setStyle("PRIMARY");

  const pages = [
  embed1,
  embed2,
];
const buttonList = [button1, button2];
const timeout = 60000;
paginationEmbed(interaction, pages, buttonList, timeout);
    
})
    .catch((err) => {
    console.error('ERR', err)    
   })
  

  }


 //Dólar blue 
  if (interaction.options.getSubcommand() === 'dolarblue') {
    axios.get('https://api-dolar-argentina.herokuapp.com/api/dolarblue')
    .then((blue)=> {
    const embed1 = new Discord.MessageEmbed()
    .setTitle("Dólar blue :flag_us:")
    .setColor("#8cb6fd")
    .setDescription("Dólar informal establecido por el precio del mercado (Oferta y demanda). Es el dólar que se compra en el mercado paralelo o informal.")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903147750496018432/dolarblue.png")
    .addField("Compra <:dollarblue:903149186436980767>  ", "ARS$ "+ currencyFormatter.format(blue.data['compra'], { locale: 'es-ES', code: ' ' })  ,true)
    .addField("Venta <:dollarblue:903149186436980767>  ", "ARS$ "+ currencyFormatter.format(blue.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
   
    const embed2 = new Discord.MessageEmbed()
    .setTitle("Dólar estadounidense")
    .setColor("#a9ea98")
    .setDescription("El dólar estadounidense es la moneda oficial de Estados Unidos y de otros países y dependencias. Tras la ruptura del patrón oro en el año 1971, la moneda se convirtió, de facto, en una moneda fiat.")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903145945980604447/dolar3.png")
    .addField("Acuñación", "2 de abril de 1792")
    .addField("Países donde se utiliza:", ":flag_us: :flag_sv: :flag_ec: :flag_pa: :flag_pr: :flag_zw: :flag_tl: :flag_pw: :flag_fm: :flag_mh: ")
    .addField("Código ISO", "USD ",true)
    .addField("Símbolo", "$ ",true)
    .addField("Billetes :dollar: ", "$1, $2, $5, $10, $20, $50 y $100")
    .addField("Monedas :coin: ", "	$0,01, $0,05, $0,10, $0,25, $0,50 y $1")
    .addField("Inflación anual :chart_with_downwards_trend:", "7,1% (2021)",true)
    .addField("Emisor :bank: ","Sistema de Reserva Federal ",true)
   
     
   
    const button1 = new MessageButton()
    .setCustomId("previousbtn")
    .setLabel("💸 Conversión ")
   .setStyle("SUCCESS");

   const button2 = new MessageButton()
   .setCustomId("nextbtn")
   .setLabel("📋 Información")
   .setStyle("PRIMARY");

   const pages = [
   embed1,
   embed2,


 ];

const buttonList = [button1, button2];
const timeout = 60000;
paginationEmbed(interaction, pages, buttonList, timeout);




     })
     .catch((err) => {
     console.error('ERR', err)
   
          
    })
    
   
  }


//Euro


  if (interaction.options.getSubcommand() === 'euro') {
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((euro)=> {
    var euroImpuesto = (euro.data['venta']*1.65).toFixed(2)
    const embed1 = new Discord.MessageEmbed()
    .setTitle("Euro :flag_eu:")
    .setColor("#0153b4")
    .setDescription("Euro al precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913863513498333224/european-union_1.png")
    .addField("Compra <:euro:903349498930135160>  ", "ARS$ "+ currencyFormatter.format(euro.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta <:euro:903349498930135160>  ", "ARS$ "+ currencyFormatter.format(euro.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
    .addField("Impuestos <:euro:903349498930135160>  ", "ARS$ "+ currencyFormatter.format(euroImpuesto, { locale: 'es-ES', code: ' ' }) ,true)
   

    const embed2 = new Discord.MessageEmbed()
    .setTitle("Euro")
    .setColor("#0153b4")
    .setDescription("El euro (€) es la moneda usada por las instituciones de la Unión Europea (UE), así como la moneda oficial de la eurozona, formada por 19 de los 27 Estados miembros de la UE. Además, 4 micro-Estados europeos tienen acuerdos con la Unión Europea para el uso del euro como moneda")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913863513498333224/european-union_1.png")
    .addField("Acuñación", "1  de enero de 2002 ")
    .addField("Países donde se utiliza:", ":flag_de: :flag_at: :flag_be: :flag_cy: :flag_sk: :flag_si: :flag_es: :flag_ee: :flag_fi: :flag_fr: :flag_gr: :flag_ie: :flag_it: :flag_lv: :flag_lt: :flag_lu: :flag_mt: :flag_nl: :flag_pt: :flag_ad: :flag_va: :flag_mc: :flag_sm: :flag_xk: :flag_me:  ")
    .addField("Código ISO", "EUR ",true)
    .addField("Símbolo", "€ ",true)
    .addField("Billetes <:euro:903349498930135160> ", "€5, €10, €20, €50, €100, €200, €500")
    .addField("Monedas :coin: ", "	€0,01 , €0,02 , €0,05, €0,10 , €0,20, €0,50 , €1 , €2")
    .addField("Inflación anual :chart_with_downwards_trend:", "-3.0% (2021)",true)
    .addField("Emisor :bank: ","Banco Central Europeo",true)
   
     
   
    const button1 = new MessageButton()
    .setCustomId("previousbtn")
    .setLabel("💸 Conversión ")
   .setStyle("SUCCESS");

   const button2 = new MessageButton()
   .setCustomId("nextbtn")
   .setLabel("📋 Información")
   .setStyle("PRIMARY");

   const pages = [
   embed1,
   embed2,


 ];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




     })
     .catch((err) => {
     console.error('ERR', err)     
    })
  }

  //Real
  if (interaction.options.getSubcommand() === 'real') {
    axios.get('https://api-dolar-argentina.herokuapp.com/api/real/nacion')
    .then((real)=> {
    var realImpuesto = ((real.data['venta']*1.65)).toFixed(2)
    const embed1 = new Discord.MessageEmbed()
    .setTitle("Real Brasileño  :flag_br:")
    .setColor("#e8ce6c")
    .setDescription("Real oficial al  precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913866166546616381/BrazilMoney.png")
    .addField("Compra <:brazilianreal1:913867351210995722>  ", "ARS$ "+ currencyFormatter.format(real.data['compra'], { locale: 'es-ES', code: ' ' }),true)
    .addField("Venta <:brazilianreal1:913867351210995722>  ", "ARS$ "+ currencyFormatter.format(real.data['venta'], { locale: 'es-ES', code: ' ' }),true)
    .addField("Impuestos <:brazilianreal1:913867351210995722>  ", "ARS$ "+ currencyFormatter.format(realImpuesto, { locale: 'es-ES', code: ' ' }),true)
    
  
    const embed2 = new Discord.MessageEmbed()
    .setTitle("Real Brasileño")
    .setColor("#e8ce6c")
    .setDescription("El real es la moneda de curso legal en Brasil y fuera de sus fronteras se le conoce como real brasileño. A partir de 2020, es la vigésima moneda más negociada en el mundo, la segunda en América Latina detrás de peso mexicano y la cuarta en el continente americano detrás del dólar estadounidense, el dólar canadiense y el peso mexicano")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913866166546616381/BrazilMoney.png")
    .addField("Acuñación", " 1994 ")
    .addField("Países donde se utiliza:", ":flag_br:")
    .addField("Código ISO", "BRL ",true)
    .addField("Símbolo", "R$ ",true)
    .addField("Billetes <:brazilianreal1:913867351210995722> ", "R$2, R$5, R$10, R$20, R$50, R$100 y R$200")
    .addField("Monedas :coin: ", "	R$0,01 , R$0,05, R$0,10, R$0,25, R$0,50 y R$ 1")
    .addField("Inflación anual :chart_with_downwards_trend:", "10.74% (2021)",true)
    .addField("Emisor :bank: ","Banco Central do Brasil",true)
    
     
    const button1 = new MessageButton()
    .setCustomId("previousbtn")
    .setLabel("💸 Conversión ")
   .setStyle("SUCCESS");
  
   const button2 = new MessageButton()
   .setCustomId("nextbtn")
   .setLabel("📋 Información")
   .setStyle("PRIMARY");
  
   const pages = [
   embed1,
   embed2,
  
  
  ];
  
  const buttonList = [button1, button2];
  const timeout = 30000;
  paginationEmbed(interaction, pages, buttonList, timeout);
  
  
  
  
     })
     .catch((err) => {
     console.error('ERR', err)
   
          
    })

  }

  //Yen
  if (interaction.options.getSubcommand() === 'yen') {
    axios.get('https://api.exchangerate.host/latest')
  .then((YEN)=> {
  yen1=YEN.data['rates']['JPY']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Yen Japonés :flag_jp:")
  .setColor("#FDFD0D")
  .setDescription("Yen japonés oficial al  precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%) ")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913893648876331048/yenjapones3.png")
  .addField("Compra <:yen1:913890431392157807> ", 'ARS$ ' + currencyFormatter.format(((1 / yen1)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }),true)
  .addField("Venta <:yen1:913890431392157807> ", 'ARS$ ' + currencyFormatter.format(((1 / yen1)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' }),true)
  .addField("Impuestos <:yen1:913890431392157807> ", 'ARS$ ' + currencyFormatter.format((((1 / yen1)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' }),true)
 

  const embed2 = new Discord.MessageEmbed()
  .setTitle("Yen Japonés")
  .setColor("#FDFD0D")
  .setDescription("El yen es la unidad monetaria utilizada en Japón​ y la tercera moneda más valorada en el mercado de divisas después del dólar estadounidense y el euro. También es usada como moneda de reserva junto al dólar, el euro y la libra esterlina. Como es común en la numeración japonesa, las cantidades grandes del yen se cuentan en múltiplos de 10 000 (man, 万).")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913893648876331048/yenjapones3.png")
  .addField("Acuñación", "10 de mayo de 1871 ")
  .addField("Países donde se utiliza:", ":flag_jp:")
  .addField("Código ISO", "JPY ",true)
  .addField("Símbolo ", "¥ ",true)
  .addField("Billetes <:yen1:913890431392157807> ", "¥1000, ¥2000, ¥5000 y ¥10000")
  .addField("Monedas :coin:  ", "¥1, ¥5, ¥10, ¥50, ¥100 y ¥500")
  .addField("Inflación anual :chart_with_downwards_trend: ", "0.5% (2019)",true)
  .addField("Emisor :bank: ","Banco de Japón",true)
 

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})

  }

//Libra

  if (interaction.options.getSubcommand() === 'libra') {
    axios.get('https://api.exchangerate.host/latest')
  .then((GBP)=> {
  libra1=GBP.data['rates']['GBP']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Libra Esterlina :flag_gb:")
  .setColor("#D605F6")
  .setDescription("Libra Esterlina oficial al  precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%) ")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913895989889359902/ReinaIsabeltest.png")
  .addField("Compra <:pound:913895490150600715> ", 'ARS$ ' + currencyFormatter.format(((1 / libra1)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }),true)
  .addField("Venta <:pound:913895490150600715>", 'ARS$ ' + currencyFormatter.format(((1 / libra1)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' }),true)
  .addField("Impuestos <:pound:913895490150600715>", 'ARS$ ' + currencyFormatter.format((((1 / libra1)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' }),true)
 


  const embed2 = new Discord.MessageEmbed()
  .setTitle("Libra Esterlina")
  .setColor("#D605F6")
  .setDescription("La Libra Esterlina es la moneda del Reino Unido así como de las Dependencias de la Corona y de algunos territorios británicos de ultramar. En sus demás territorios coloniales se usan diferentes divisas pero fijadas a la esterlina. Su símbolo monetario es £ y proviene del latín libra, que se refería a la unidad de masa. Una libra se divide en cien peniques.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913895989889359902/ReinaIsabeltest.png")
  .addField("Acuñación", " 1158")
  .addField("Países y territorios donde se utiliza:", ":flag_gb: :flag_im::flag_gg: :flag_je: :flag_fk: :flag_gi: :flag_sh: :flag_gs: :flag_io: ")
  .addField("Código ISO", "GBP ",true)
  .addField("Símbolo ", "£ ",true)
  .addField("Billetes <:pound:913895490150600715> ", "£5, £10, £20, £50")
  .addField("Monedas :coin:  ", "	1p, 2p, 5p, 10p, 20p, 50p, £1, £2")
  .addField("Inflación anual :chart_with_downwards_trend: ", "5.1% (2021)",true)
  .addField("Emisor :bank: ","Bank of England",true)
  

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})

  }

//Rublo Ruso
if (interaction.options.getSubcommand() === 'rublo') {
  axios.get('https://api.exchangerate.host/latest')
  .then((RUB)=> {
  rublo=RUB.data['rates']['RUB']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Rublo Ruso :flag_ru:")
  .setColor("#FDFD0D")
  .setDescription("Rublo Ruso oficial al precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%) ")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/920139509344108594/bancario_1.png")
  .addField("Compra <:rublo:913901788531417229>  ", 'ARS$ ' + currencyFormatter.format(((1 / rublo)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta <:rublo:913901788531417229>", 'ARS$ ' + currencyFormatter.format(((1 / rublo)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
  .addField("Impuestos <:rublo:913901788531417229>", 'ARS$ ' + currencyFormatter.format((((1 / rublo)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
  


  const embed2 = new Discord.MessageEmbed()
  .setTitle("Rublo Ruso")
  .setColor("#FDFD0D")
  .setDescription("El Rublo es la moneda oficial de la Federación de Rusia y medio de pago de las repúblicas parcialmente reconocidas de Abjasia y Osetia del Sur.​ Rublo también fue el nombre de la moneda oficial de la Unión Soviética, el Imperio ruso y otros estados. Un rublo se divide en cien kopeks.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/920139509344108594/bancario_1.png")
  .addField("Acuñación", " 1991")
  .addField("Países donde se utiliza:", ":flag_ru: ")
  .addField("Código ISO", "RUB ",true)
  .addField("Símbolo ", "₽ ",true)
  .addField("Billetes <:rublo:913901788531417229> ", "5 ₽, 10 ₽, 50 ₽, 100 ₽, 500 ₽, 1000 ₽, 2000 ₽, 5000 ₽")
  .addField("Monedas :coin:  ", "	1 коп, 5коп, 10коп, 50 коп, 1 ₽, 2 ₽, 5 ₽, 10 ₽, 25 ₽")
  .addField("Inflación anual :chart_with_downwards_trend: ", "4,9% (2020)",true)
  .addField("Emisor :bank: ","Banco de Rusia ",true)
 

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  


})
}

//Dolar Canadiense
if (interaction.options.getSubcommand() === 'dolarcanadiense') {
  axios.get('https://api.exchangerate.host/latest')
  .then((CAD)=> {
  canadiense=CAD.data['rates']['CAD']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Dólar Canadiense :flag_ca: ")
  .setColor("#fc0201")
  .setDescription("Dólar Canadiense oficial al  precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928332562793922611/canadian-dollar.png")
  .addField("Compra :flag_ca:  ", 'ARS$ ' + currencyFormatter.format(((1 / canadiense)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta :flag_ca:  ", 'ARS$ ' + currencyFormatter.format(((1 / canadiense)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
  .addField("Impuestos :flag_ca:  ", 'ARS$ ' + currencyFormatter.format((((1 / canadiense)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
  


  const embed2 = new Discord.MessageEmbed()
  .setTitle("Dólar Canadiense")
  .setColor("#fc0201")
  .setDescription("El dólar canadiense es la unidad monetaria oficial de Canadá. Se subdivide en 100 cents (centavos). Su código ISO 4217 es CAD. El dólar ha estado en vigor durante gran parte de la historia de Canadá. \nCanadá decidió usar el dólar en lugar de la libra esterlina británica a causa de la difusión del llamado dólar español o peso en Norteamérica durante el siglo XVIII y principios del XIX, y a causa de la generalización del dólar estadounidense. La región que corresponde al actual Quebec, en particular, favoreció el uso del dólar (el Banco de Montreal emitió billetes de dólares en 1817), mientras que las colonias atlánticas, que tenían unos vínculos más fuertes con el Reino Unido, no eran tan partidarias. ")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928332562793922611/canadian-dollar.png")
  .addField("Acuñación", "1 de enero de 1858")
  .addField("Países donde se utiliza:", ":flag_ca: ")
  .addField("Código ISO", "CAD ",true)
  .addField("Símbolo ", "C$ ",true)
  .addField("Billetes :dollar: ", "C$5, C$10, C$20, C$50, C$100")
  .addField("Monedas :coin:  ", "	¢5, ¢10, ¢25, C$1, C$2")
  .addField("Inflación anual :chart_with_downwards_trend: ", "2,2% (2019)",true)
  .addField("Emisor :bank: ","Banco de Canadá",true)
 
  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})


}


//Dolar australiano
if (interaction.options.getSubcommand() === 'dolaraustraliano') {
  axios.get('https://api.exchangerate.host/latest')
  .then((CAD)=> {
  dolar=CAD.data['rates']['AUD']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Dólar Australiano :flag_au:")
  .setColor("#000346")
  .setDescription("Dólar Australiano oficial al precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858087525518934076/dolaraustraliano.png")
  .addField("Compra :flag_au:  ", 'ARS$ ' + currencyFormatter.format(((1 / dolar)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta :flag_au:  ", 'ARS$ ' + currencyFormatter.format(((1 / dolar)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
  .addField("Impuestos :flag_au:  ", 'ARS$ ' + currencyFormatter.format((((1 / dolar)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)


  const embed2 = new Discord.MessageEmbed()
  .setTitle("Dólar Australiano")
  .setColor("#000346")
  .setDescription("El dólar australiano (código AUD) es la moneda oficial de la Mancomunidad de Australia, incluidos los Territorios Antárticos Australianos, la Isla de Navidad, las Islas Cocos, Islas Heard y McDonald e Isla Norfolk, así como de los estados independientes del Pacífico de Kiribati, Nauru y Tuvalu. ")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858087525518934076/dolaraustraliano.png")
  .addField("Acuñación", "1966")
  .addField("Países donde se utiliza:", ":flag_au: :flag_ki: :flag_nr: :flag_tv: :flag_cx: :flag_cc: :flag_nf:")
  .addField("Código ISO", "AUD ",true)
  .addField("Símbolo ", "A$ ",true)
  .addField("Billetes :dollar: ", "A$5, A$10, A$20, A$50, A$100")
  .addField("Monedas :coin:  ", "	A$0,5 , A$0,10, A$0,20 , A$0,50 , A$1, A$2")
  .addField("Inflación anual :chart_with_downwards_trend: ", "1,8% (2020)",true)
  .addField("Emisor :bank: ","Banco de la Reserva de Australia",true)

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})


}

//Dolar neozelandes


if (interaction.options.getSubcommand() === 'dolarneozelandes') {
  axios.get('https://api.exchangerate.host/latest')
  .then((NZD)=> {
  dolar=NZD.data['rates']['NZD']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Dólar Neozelandés :flag_nz: ")
  .setColor("#000346")
  .setDescription("Dólar Neozelandés oficial al precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858094221654753300/Dolar_nueva_zelanda.png")
  .addField("Compra :flag_nz:  ", 'ARS$ ' + currencyFormatter.format(((1 / dolar)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta :flag_nz:  ", 'ARS$ ' + currencyFormatter.format(((1 / dolar)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
  .addField("Impuestos :flag_nz:  ", 'ARS$ ' + currencyFormatter.format((((1 / dolar)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
 

  const embed2 = new Discord.MessageEmbed()
  .setTitle("Dólar Neozelandés")
  .setColor("#000346")
  .setDescription("El dólar neozelandés o dólar de Nueva Zelanda (abreviado NZD o NZ$) es la moneda oficial de Nueva Zelanda, las Islas Cook, Niue, Tokelau y las Islas Pitcairn. Se introdujo en 1967 para sustituir a la libra neozelandesa cuando se introdujo el sistema decimal para las monedas. ")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858094221654753300/Dolar_nueva_zelanda.png")
  .addField("Acuñación", "1967")
  .addField("Países donde se utiliza:", ":flag_nz: :flag_ck: :flag_nu: :flag_tk: :flag_pn: ")
  .addField("Código ISO", "NZD ",true)
  .addField("Símbolo ", "NZ$ ",true)
  .addField("Billetes :dollar: ", "NZ$5, NZ$10, NZ$20, NZ$50, NZ$100")
  .addField("Monedas :coin:  ", "	NZ$0,10 , NZ$0,20, NZ$0,50 , NZ$1, NZ$2")
  .addField("Inflación anual :chart_with_downwards_trend: ", "1,9% (2018)",true)
  .addField("Emisor :bank: ","Banco de la Reserva de Nueva Zelanda",true)
 

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})

}

//Peso mexicano
if (interaction.options.getSubcommand() === 'pesomexicano') {
  axios.get('https://api.exchangerate.host/latest')
  .then((MEX)=> {
  mexicano=MEX.data['rates']['MXN']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Peso Méxicano :flag_mx:")
  .setColor("#24944c")
  .setDescription("Peso Méxicano oficial al  precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%) ")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/838470413066436658/MXNPeso.png")
  .addField("Compra :flag_mx:  ", 'ARS$ ' + currencyFormatter.format(((1 / mexicano)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta :flag_mx:  ", 'ARS$ ' + currencyFormatter.format(((1 / mexicano)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
  .addField("Impuestos :flag_mx:  ", 'ARS$ ' + currencyFormatter.format((((1 / mexicano)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
 

  const embed2 = new Discord.MessageEmbed()
  .setTitle("Peso Méxicano")
  .setColor("#24944c")
  .setDescription("El peso méxicano es la moneda de curso legal de México. El peso mexicano fue la primera moneda en el mundo en utilizar el signo $, incluso antes que el dólar de Estados Unidos, el cual más tarde lo adoptó para su propio uso. El peso mexicano es la decimoquinta moneda más negociada en el mundo, la más negociada de América Latina y la tercera más negociada en toda América.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/838470413066436658/MXNPeso.png")
  .addField("Acuñación", "1 de enero de 1993")
  .addField("Países donde se utiliza:", ":flag_mx: ")
  .addField("Código ISO", "MXN ",true)
  .addField("Símbolo ", "$ ",true)
  .addField("Billetes :dollar: ", "$20, $50, $100, $200, $500 y $1000")
  .addField("Monedas :coin:  ", "	¢10, ¢20, ¢50, $1, $2, $5, $10 y $20 (conmemorativas)")
  .addField("Inflación anual :chart_with_downwards_trend: ", "3,15% (2020)",true)
  .addField("Emisor :bank: ","Banco de México ",true)

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})


}

//Peso chileno
if (interaction.options.getSubcommand() === 'pesochileno') {
  axios.get('https://api.exchangerate.host/latest')
  .then((CLP)=> {
  chileno=CLP.data['rates']['CLP']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Peso Chileno :flag_cl: ")
  .setColor("#fc0201")
  .setDescription("Peso chileno oficial al  precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/856753411793354773/pesochileno.png")
  .addField("Compra :flag_cl:  ", 'ARS$ ' + currencyFormatter.format(((1 / chileno)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta :flag_cl:  ", 'ARS$ ' + currencyFormatter.format(((1 / chileno)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
  .addField("Impuestos :flag_cl:  ", 'ARS$ ' + currencyFormatter.format((((1 / chileno)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
 

  const embed2 = new Discord.MessageEmbed()
  .setTitle("Peso Chileno")
  .setColor("#fc0201")
  .setDescription("El peso es la moneda de curso legal de Chile desde el año 1975. \nPor medio del decreto ley 1123 de 1975, el peso fue retomado como unidad monetaria a partir del 29 de septiembre de dicho año,5 con una tasa de conversión de un peso por cada mil escudos. La subdivisión en centavos se mantuvo hasta el 1 de enero de 1984, cuando éstos fueron eliminados, por lo que la contabilidad se empezó a llevar en pesos enteros. ")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/856753411793354773/pesochileno.png")
  .addField("Acuñación", "29 de septiembre de 1975")
  .addField("Países donde se utiliza:", ":flag_cl: ")
  .addField("Código ISO", "CLP ",true)
  .addField("Símbolo ", "$ ",true)
  .addField("Billetes :dollar: ", "$1.000, $2.000, $5.000, $10.000 y $20.000 pesos")
  .addField("Monedas :coin:  ", "	$10, $50, $100 y $500 pesos")
  .addField("Inflación anual :chart_with_downwards_trend: ", "7,2% (2021)",true)
  .addField("Emisor :bank: ","Banco Central de Chile",true)
 

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})

}

//Peso uruguayo
if (interaction.options.getSubcommand() === 'pesouruguayo') {
  axios.get('https://api.exchangerate.host/latest')
  .then((UYU)=> {
  peso=UYU.data['rates']['UYU']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Peso Uruguayo :flag_uy:")
  .setColor("BLUE")
  .setDescription("Peso uruguayo oficial al  precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/856766027831574528/pesouruguayo.png")
  .addField("Compar :flag_uy:  ", 'ARS$ ' + currencyFormatter.format(((1 / peso)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta :flag_uy:  ", 'ARS$ ' + currencyFormatter.format(((1 / peso)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
  .addField("Impuestos :flag_uy:  ", 'ARS$ ' + currencyFormatter.format((((1 / peso)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
 
  const embed2 = new Discord.MessageEmbed()
  .setTitle("Peso Uruguayo")
  .setColor("BLUE")
  .setDescription("El peso es la moneda oficial de la República Oriental del Uruguay desde 1993, remplazando al nuevo peso por un valor de 1000 nuevos pesos = 1 peso uruguayo y 1 000 000 de viejos pesos. En 2011 se cambió completamente el diseño de las monedas con nuevas decoraciones y materiales, se añadieron distintos animales y figuras patrias al reverso de las monedas. Se representa con un $.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/856766027831574528/pesouruguayo.png")
  .addField("Acuñación", "1 de marzo de 1993")
  .addField("Países donde se utiliza:", ":flag_uy: ")
  .addField("Código ISO", "UYU ",true)
  .addField("Símbolo ", "$ ",true)
  .addField("Billetes :dollar: ", "$20, $50, $100, $200, $500, $1000 y $2000 pesos")
  .addField("Monedas :coin:  ", "	$1, $2, $5, $10 y $50 pesos")
  .addField("Inflación anual :chart_with_downwards_trend: ", "8,8% (2019)",true)
  .addField("Emisor :bank: ","Banco Central del Uruguay",true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})
}

//Peso colombiano
if (interaction.options.getSubcommand() === 'pesocolombiano') {
  axios.get('https://api.exchangerate.host/latest')
  .then((COL)=> {
  pesos=COL.data['rates']['COP']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Peso Colombiano :flag_co: (1000 unidades)")
  .setColor("#fecb04")
  .setDescription("1000 Pesos colombiano al  precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/857487546455294022/PesoColombiano.png")
  .addField("Compra :flag_co:  ", 'ARS$ ' + currencyFormatter.format(((1000 / pesos)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta :flag_co:  ", 'ARS$ ' + currencyFormatter.format(((1000 / pesos)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
  .addField("Impuestos :flag_co:  ", 'ARS$ ' + currencyFormatter.format((((1000 / pesos)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
 


  const embed2 = new Discord.MessageEmbed()
  .setTitle("Peso Colombiano")
  .setColor("#fecb04")
  .setDescription("El peso es la unidad monetaria de curso legal en la República de Colombia. Su abreviación formal es COP (ISO 4217), e informalmente es abreviada COL$.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/857487546455294022/PesoColombiano.png")
  .addField("Acuñación", "1903")
  .addField("Países donde se utiliza:", ":flag_co: ")
  .addField("Código ISO", "COP",true)
  .addField("Símbolo ", "$ ",true)
  .addField("Billetes :dollar: ", "$1.000, $2.000, $5.000, $10.000, $20.000, $50.000 y $100.000 pesos")
  .addField("Monedas :coin:  ", "		$50, $100, $200, $500 y $1000 pesos")
  .addField("Inflación anual :chart_with_downwards_trend: ", "1.61% (2020)",true)
  .addField("Emisor :bank: ","Banco de la República de Colombia.",true)
 

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})

}

//Boliviano

if (interaction.options.getSubcommand() === 'boliviano') {

  axios.get('https://api.exchangerate.host/latest')
  .then((BOB)=> {
  pesos=BOB.data['rates']['BOB']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Boliviano :flag_bo:")
  .setColor("#6da544")
  .setDescription("Boliviano al  precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858355537228595201/Boliviano.png")
  .addField("Compra :flag_bo:  ", 'ARS$ ' + currencyFormatter.format(((1 / pesos)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta :flag_bo:  ", 'ARS$ ' + currencyFormatter.format(((1 / pesos)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
  .addField("Impuestos :flag_bo:  ", 'ARS$ ' + currencyFormatter.format((((1 / pesos)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)


  const embed2 = new Discord.MessageEmbed()
  .setTitle("Boliviano")
  .setColor("#6da544")
  .setDescription("El Boliviano (símbolo: Bs, código ISO 4217: BOB) es la moneda de curso legal del Estado Plurinacional de Bolivia desde el año 1987. Se divide en 100 centavos y entró en circulación nacional, reemplazando al antiguo peso boliviano. El Banco Central de Bolivia (fundado en 1928), es el organismo económico responsable de la emisión de la moneda.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858355537228595201/Boliviano.png")
  .addField("Acuñación", "1987")
  .addField("Países donde se utiliza:", ":flag_bo: ")
  .addField("Código ISO", "BOB",true)
  .addField("Símbolo ", "Bs ",true)
  .addField("Billetes :dollar: ", "Bs10, Bs20, Bs50, Bs100 y Bs200")
  .addField("Monedas :coin:  ", "	Bs0,10, Bs0,20¢, Bs0,50, Bs1 , Bs2 y Bs5 ")
  .addField("Inflación anual :chart_with_downwards_trend: ", "0,67% (2020)",true)
  .addField("Emisor :bank: ","Banco Central de Bolivia.",true)

 const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})


}
if (interaction.options.getSubcommand() === 'sol') {
  axios.get('https://api.exchangerate.host/latest')
  .then((PEN)=> {
  sol=PEN.data['rates']['PEN']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Sol Peruano :flag_pe: ")
  .setColor("#cd0400")
  .setDescription("Sol peruano al  precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858067812655300658/SolPeruano.png")
  .addField("Compra :flag_pe:  ", 'ARS$ ' + currencyFormatter.format(((1 /sol)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta :flag_pe:  ", 'ARS$ ' + currencyFormatter.format(((1 / sol)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
  .addField("Impuestos :flag_pe:  ", 'ARS$ ' + currencyFormatter.format((((1 / sol)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)



  const embed2 = new Discord.MessageEmbed()
  .setTitle("Sol Peruano")
  .setColor("#cd0400")
  .setDescription("El sol es la moneda de curso legal del Perú desde 1991. Esta moneda reemplazó al inti que circuló entre 1985 y 1991. Inicialmente fue denominada nuevo sol para diferenciarla del antiguo sol que circuló entre 1931 y 1985. Sin embargo, desde 2015 el gobierno dispuso que el «nuevo sol» pase a denominarse simplemente «sol», suprimiéndose además el uso del punto (S/.) en el signo monetario (S/).")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858067812655300658/SolPeruano.png")
  .addField("Acuñación", "1991")
  .addField("Países donde se utiliza:", ":flag_pe: ")
  .addField("Código ISO", "PEN",true)
  .addField("Símbolo ", "S/ ",true)
  .addField("Billetes :dollar: ", "S/10, S/20, S/50, S/100 y S/200 soles")
  .addField("Monedas :coin:  ", "S/0,10 , S/0,20 y S/0,50 , S/1, S/2 y S/5")
  .addField("Inflación anual :chart_with_downwards_trend: ", "6,4% (2021)",true)
  .addField("Emisor :bank: ","Banco Central de Reserva del Perú",true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})


}
//Guaraní

if (interaction.options.getSubcommand() === 'guarani') {
  axios.get('https://api.exchangerate.host/latest')
  .then((PYG)=> {
  guarani=PYG.data['rates']['PYG']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Guaraní Paraguayo :flag_py: (1000 unidades)")
  .setColor("#d80027")
  .setDescription("1000 Guaranies al  precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/856970634726735902/guaraniparaguayo.png")
  .addField("Compra :flag_py:  ", 'ARS$ ' + currencyFormatter.format(((1000 / guarani)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta :flag_py:  ", 'ARS$ ' + currencyFormatter.format(((1000 / guarani)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
  .addField("Impuestos :flag_py:  ", 'ARS$ ' + currencyFormatter.format((((1000 / guarani)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
  


  const embed2 = new Discord.MessageEmbed()
  .setTitle("Guaraní Paraguayo")
  .setColor("#d80027")
  .setDescription("El guaraní (₲) es la moneda de curso legal actual de la República del Paraguay desde el año 1943. Ostenta el récord de ser una de las monedas más antiguas de América Latina.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/856970634726735902/guaraniparaguayo.png")
  .addField("Acuñación", "1943")
  .addField("Países donde se utiliza:", ":flag_py: ")
  .addField("Código ISO", "PYG",true)
  .addField("Símbolo ", "₲ ",true)
  .addField("Billetes :dollar: ", "₲2.000, ₲5.000, ₲10.000, ₲20.000, ₲50.000 y ₲100.000 guaraníes")
  .addField("Monedas :coin:  ", "		₲50, ₲100, ₲500 y ₲1.000 guaraníes")
  .addField("Inflación anual :chart_with_downwards_trend: ", "2,2 % (2020)",true)
  .addField("Emisor :bank: ","Banco Central del Paraguay",true)
  

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})
}

//Bolivar
if (interaction.options.getSubcommand() === 'bolivar') {
  axios.get('https://api.exchangerate.host/latest')
  .then((VEZ)=> {
  bolivar=VEZ.data['rates']['VES']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Bolivar Digital Venezolano :flag_ve: ")
  .setColor("RED")
  .setDescription("Bolivar Digital Venezolano oficial al  precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/894982507563483216/bolivardigital.png")
  .addField("Compra :flag_ve:  ", 'ARS$ ' + currencyFormatter.format(((1 / bolivar )) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta :flag_ve:  ", 'ARS$ ' + currencyFormatter.format(((1 / bolivar)) * EUR.data['venta'],   { locale: 'es-ES', code: ' ' })  ,true)
  .addField("Impuestos :flag_ve:  ", 'ARS$ ' + currencyFormatter.format((((1 / bolivar)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)


  const embed2 = new Discord.MessageEmbed()
  .setTitle("Bolivar Digital Venezolano")
  .setColor("RED")
  .setDescription("El Bolivar Digital es la moneda de curso legal de la República Bolivariana de Venezuela. Esta moneda reemplazó al Bolívar Soberano (Bs. S) que circuló desde  agosto de 2018 y octubre de 2021. El valor de la nueva moneda se obtendrá quitando seis ceros a la antigua.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/894982507563483216/bolivardigital.png")
  .addField("Acuñación", "1 de octubre del 2021")
  .addField("Países donde se utiliza:", ":flag_ve: ")
  .addField("Código ISO", "VED ",true)
  .addField("Símbolo ", "Bs. o Bs. D ",true)
  .addField("Billetes :dollar: ", "Bs. 5, Bs. 10, Bs. 20, Bs. 50, Bs. 100")
  .addField("Monedas :coin:  ", "	Bs. 1 ")
  .addField("Inflación anual :chart_with_downwards_trend: ", "Bolivar Soberano: 3.713% (2020)",true)
  .addField("Emisor :bank: ","Banco Central de Venezuela ",true)

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})


}

//Yuan
if (interaction.options.getSubcommand() === 'yuan') {
  axios.get('https://api.exchangerate.host/latest')
  .then((CNY)=> {
  yuan=CNY.data['rates']['CNY']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Renminbi Chino (Yuan) :flag_cn: ")
  .setColor("#cd0400")
  .setDescription("Renminbi (Yuan) chino al precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858074668015157258/yuanchino.png")
  .addField("Compra :flag_cn: ", 'ARS$ ' + currencyFormatter.format(((1 /yuan)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta :flag_cn: ", 'ARS$ ' + currencyFormatter.format(((1 / yuan)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
  .addField("Impuestos :flag_cn: ", 'ARS$ ' + currencyFormatter.format((((1 / yuan)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)


  const embed2 = new Discord.MessageEmbed()
  .setTitle("Renminbi Chino")
  .setColor("#cd0400")
  .setDescription("El renminbi «moneda del pueblo» es la moneda de curso legal de la República Popular China y es emitida por el Banco Popular de China. El yuan (código: CNY) es la unidad básica del renminbi, nombre por el que también se conoce a la moneda. Cada yuan se fracciona en diez jiao o mao y cada jiao se divide en diez fen. Para que el valor del renminbi no fluctúe dependiendo del mercado financiero, el yuan está fijado a una canasta de varias monedas internacionales. Se suele utilizar el simbolo  del yen japonés (¥) o también el sinograma del yuan (元)")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858074668015157258/yuanchino.png")
  .addField("Acuñación", "1955")
  .addField("Países donde se utiliza:", "Oficial: :flag_cn:  \nNo oficial:  :flag_mo: :flag_hk: :flag_la: :flag_kh: :flag_vn: :flag_mm: :flag_kp: :flag_np::flag_zw:")
  .addField("Código ISO", "CNY",true)
  .addField("Símbolo ", "	元 / ¥ ",true)
  .addField("Billetes :dollar: ", "角	1, 角2 y 角5 jiao  / 元1, 元2, 元5, 元10, 元20, 元50 y 元100 yuanes")
  .addField("Monedas :coin:  ", "分1, 分2 y 分5 fen / 角1 y 角5 jiao / 元1 yuan")
  .addField("Inflación anual :chart_with_downwards_trend: ", "1,9% (2018)",true)
  .addField("Emisor :bank: ","Banco Popular de China",true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})


}


//Rupia
if (interaction.options.getSubcommand() === 'rupia') {
  axios.get('https://api.exchangerate.host/latest')
  .then((INR)=> {
  rupia=INR.data['rates']['INR']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Rupia India :flag_in: ")
  .setColor("#fc9836")
  .setDescription("Rupia india oficial al precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858105999408103424/IndiaRupia.png")
  .addField("Compra :flag_in:  ", 'ARS$ ' + currencyFormatter.format(((1 / rupia)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta :flag_in:  ", 'ARS$ ' + currencyFormatter.format(((1 / rupia)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
  .addField("Impuestos :flag_in:  ", 'ARS$ ' + currencyFormatter.format((((1 / rupia)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)


  const embed2 = new Discord.MessageEmbed()
  .setTitle("Rupia India")
  .setColor("#fc9836")
  .setDescription("La rupia es la moneda oficial de la República de la India. Su emisión está controlada por el Banco de la Reserva de la India. Está dividida en 100 paise y su código ISO 4217 es INR. \n En muchas partes de la India, la rupia es conocida como rupaya (hindi), roopayi (రూపాయి) en télugu y kannada (ರೂಪಾಯಿ), rubai (ரூபாய்) en tamil, roopa (രൂപ) en malayalam, rupaye (रुपये) en maratí, o en muchas otras formas derivadas del sánscrito, en el cual, significa plata. Sin embargo, en zonas como Bengala Occidental, Tripura, Orissa y Assam el término ha derivado de la palabra sánscrita tanka. Así, a la rupia se la llama taka (টাকা) en bengalí, tôka (টকা) en asamés, y tôngka en oriya.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858105999408103424/IndiaRupia.png")
  .addField("Acuñación", "1 de abril de 1957")
  .addField("Países donde se utiliza:", "Oficial: :flag_in: \n No oficial: :flag_bt: :flag_np: :flag_zw: ")
  .addField("Código ISO", "INR ",true)
  .addField("Símbolo ", "₹ ",true)
  .addField("Billetes :dollar: ", "₹1, ₹5, ₹10, ₹20, ₹50, ₹100, ₹200, ₹500 y ₹2000")
  .addField("Monedas :coin:  ", "	50 paise, ₹1, ₹2, ₹5, ₹10")
  .addField("Inflación anual :chart_with_downwards_trend: ", "2,11%(2018)",true)
  .addField("Emisor :bank: ","Banco de la Reserva de la India",true)

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})

}

//Won

if (interaction.options.getSubcommand() === 'won') {
  axios.get('https://api.exchangerate.host/latest')
  .then((KRW)=> {
  won=KRW.data['rates']['KRW']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Won Surcoreano :flag_kr: ")
  .setColor("#FFFFFF")
  .setDescription("Won surcoreano oficial al precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858122163164807168/CoreaDelSurMoneda.png")
  .addField("Compra :flag_kr:   ", 'ARS$ ' + currencyFormatter.format(((1 / won)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta :flag_kr:   ", 'ARS$ ' + currencyFormatter.format(((1 / won)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
  .addField("Impuestos :flag_kr:  ", 'ARS$ ' + currencyFormatter.format((((1 / won)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
 


  const embed2 = new Discord.MessageEmbed()
  .setTitle("Won Surcoreano")
  .setColor("#FFFFFF")
  .setDescription("El won surcoreano es la moneda de curso legal de Corea del Sur. Durante la época colonial, el won se sustituyó a la par por el yen, formando el yen coreano, pero después de la Segunda Guerra Mundial, Corea se dividió, resultando en dos monedas diferentes, ambas llamadas won, para el Sur y para el Norte.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858122163164807168/CoreaDelSurMoneda.png")
  .addField("Acuñación", "9 de junio de 1962")
  .addField("Países donde se utiliza:", ":flag_kr: ")
  .addField("Código ISO", "KRW ",true)
  .addField("Símbolo ", "₩ ",true)
  .addField("Billetes :dollar: ", "₩1000, ₩2000, ₩5000, ₩10000 y ₩50000")
  .addField("Monedas :coin:  ", "₩1, ₩5, ₩10, ₩50, ₩100 y ₩500")
  .addField("Inflación anual :chart_with_downwards_trend: ", "1,3% (2018)",true)
  .addField("Emisor :bank: ","Banco de Corea",true)
 

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})
}


//Franco

if (interaction.options.getSubcommand() === 'franco') {
  axios.get('https://api.exchangerate.host/latest')
  .then((suiza)=> {
  franco=suiza.data['rates']['CHF']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Franco Suizo :flag_ch: ")
  .setColor("#d80027")
  .setDescription("Franco suizo oficial al precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/930958502980100116/FrancoSuizo.png")
  .addField("Compra :flag_ch: ", 'ARS$ ' + currencyFormatter.format(((1 / franco)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta :flag_ch:  ", 'ARS$ ' + currencyFormatter.format(((1 / franco)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
  .addField("Impuestos :flag_ch:  ", 'ARS$ ' + currencyFormatter.format((((1 / franco)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
 


  const embed2 = new Discord.MessageEmbed()
  .setTitle("Franco Suizo")
  .setColor("#d80027")
  .setDescription("El franco es la moneda oficial de Suiza y Liechtenstein. También es de curso legal en los enclaves italiano y alemán de Campione d'Italia y Büsingen am Hochrhein, donde circula junto al euro. El Banco Nacional Suizo es el encargado de emitir los billetes, y la Swissmint federal acuña las monedas. ")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/930958502980100116/FrancoSuizo.png")
  .addField("Acuñación", "2005")
  .addField("Países donde se utiliza:", ":flag_ch: :flag_li: :flag_it: (Campione d'Italia) :flag_de: (Büsingen am Hochrhein) ")
  .addField("Código ISO", "CHF ",true)
  .addField("Símbolo ", "Fr. ",true)
  .addField("Billetes :dollar: ", "	Fr.10, Fr.20, Fr.50, Fr.100, Fr.200, Fr.1000 ")
  .addField("Monedas :coin:  ", " 5 , 10, 20  rappen  /  Fr.½, Fr.1, Fr.2, Fr.5 ")
  .addField("Inflación anual :chart_with_downwards_trend: ", "0,9% (2018)",true)
  .addField("Emisor :bank: ","Banco Nacional de Suiza",true)
 
  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})
}

//Lira

if (interaction.options.getSubcommand() === 'lira') {
  axios.get('https://api.exchangerate.host/latest')
  .then((LIRA)=> {
  Turca=LIRA.data['rates']['TRY']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Lira Turca :flag_tr: ")
  .setColor("#d70224")
  .setDescription("Lira Turca oficial al precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/930958503399546910/liraturca.png")
  .addField("Compra :flag_tr:  ", 'ARS$ ' + currencyFormatter.format(((1 / Turca)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta :flag_tr:  ", 'ARS$ ' + currencyFormatter.format(((1 / Turca)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
  .addField("Impuestos :flag_tr:  ", 'ARS$ ' + currencyFormatter.format((((1 / Turca)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
 


  const embed2 = new Discord.MessageEmbed()
  .setTitle("Lira Turca")
  .setColor("#d70224")
  .setDescription("La lira es la moneda de curso legal de Turquía y de la República Turca del Norte de Chipre. Su código ISO 4217 es TRY y se divide en 100 kuruş. El emisor es el Banco Central de la República de Turquía. ")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/930958503399546910/liraturca.png")
  .addField("Acuñación", "2005")
  .addField("Países donde se utiliza:", ":flag_tr: :flag_cy: (Norte) ")
  .addField("Código ISO", "TRY ",true)
  .addField("Símbolo ", "₺ ",true)
  .addField("Billetes :dollar: ", "	₺5, ₺10, ₺20, ₺50, ₺100 y ₺200")
  .addField("Monedas :coin:  ", " ₺0,01 ,	₺0,05 , ₺0,10 , ₺0,25, ₺0,50 , ₺1")
  .addField("Inflación anual :chart_with_downwards_trend: ", "14,6% (2020)",true)
  .addField("Emisor :bank: ","Banco Central de la República de Turquía",true)
  

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})
}

}

 })

 client.on('interactionCreate', async(interaction) => {
  if(!interaction.isCommand()){
    return
  }

  const {commandName , options} = interaction
  if(commandName=="criptomoneda") {
//BTC 

if (interaction.options.getSubcommand() === 'bitcoin') {
  axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=0')
  .then((BTC)=> {
  bitcoin=BTC.data['prices'][0][1]

  axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
  
  .then((USD)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Bitcoin <:bitcoin:929073179262074960> ")
  .setColor("#fddc4d")
  .setDescription("Bitcoin + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929073343682990150/bitcoin.png")

  .addField("Precio <:bitcoin:929073179262074960>", 'USD$ ' + currencyFormatter.format(((bitcoin)), { locale: 'es-ES', code: ' ' }),true )
  .addField("Volumen  <:bitcoin:929073179262074960>", 'USD$ ' + currencyFormatter.format(((BTC.data['total_volumes'][0][1])), { locale: 'es-ES', code: ' ' }),true )
  .addField("Capitalización  <:bitcoin:929073179262074960>", 'USD$ ' + currencyFormatter.format(((BTC.data['market_caps'][0][1])), { locale: 'es-ES', code: ' ' }),true )
 
  .addField("Compra <:bitcoin:929073179262074960>   ", 'ARS$ ' + currencyFormatter.format(((bitcoin)) * USD.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta <:bitcoin:929073179262074960>  ", 'ARS$ ' + currencyFormatter.format(((bitcoin)) * USD.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
  .addField("Impuestos <:bitcoin:929073179262074960>  ", 'ARS$ ' + currencyFormatter.format((((bitcoin)) * USD.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
 


  const embed2 = new Discord.MessageEmbed()
  .setTitle("Bitcoin")
  .setColor("#fddc4d")
  .setDescription("Bitcoin es una criptomoneda  y un sistema de pago sin banco central o administrador único. En principio, los usuarios de bitcoin pueden transferir dinero entre sí a través de una red entre iguales usando software libre y de código abierto. Las transacciones son verificadas y custodiadas criptográficamente por una red descentralizada de nodos")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929073343682990150/bitcoin.png")
  .addField("Lanzamiento inicial", "3  de enero de 2009")
  .addField("Países donde es de curso legal:", ":flag_sv: ")
  .addField("Código ISO", "BTC ",true)
  .addField("Símbolo ", "₿ ",true)
  .addField("Desarrollador ", "Satoshi Nakamoto (seudónimo), Gavin Andresen y otros")
  .addField("Límite de Emisión  ", "₿21,000,000")
  

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })
.catch((err) => {
console.error('ERR', err)  
})
}

//Ethereum
 if (interaction.options.getSubcommand() === 'ethereum') {
  axios.get('https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=0')
  .then((ETH)=> {
  eth=ETH.data['prices'][0][1]


  axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
  
  .then((USD)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Ethereum  ")
  .setColor("#7be0ff") 
  .setDescription("Ethereum + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/963617030026694716/ethereum.png")
  .addField("Precio <:ethereum:963619533271232532>", 'USD$ ' + currencyFormatter.format(((eth)), { locale: 'es-ES', code: ' ' }),true )
  .addField("Volumen  <:ethereum:963619533271232532>", 'USD$ ' + currencyFormatter.format(((ETH.data['total_volumes'][0][1])), { locale: 'es-ES', code: ' ' }),true )
  .addField("Capitalización  <:ethereum:963619533271232532>", 'USD$ ' + currencyFormatter.format(((ETH.data['market_caps'][0][1])), { locale: 'es-ES', code: ' ' }),true )
 
  .addField("Compra <:ethereum:963619533271232532>", 'ARS$ ' + currencyFormatter.format(((eth))*USD.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta <:ethereum:963619533271232532>", 'ARS$ ' + currencyFormatter.format(((eth)) * USD.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
  .addField("Impuestos <:ethereum:963619533271232532> ", 'ARS$ ' + currencyFormatter.format((((eth)) * USD.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
 

  const embed2 = new Discord.MessageEmbed()
  .setTitle("Ethereum")
  .setColor("#7be0ff") 
  .setDescription("Ethereum es una plataforma de código abierto, que sirve para ejecutar contratos inteligentes. La plataforma tiene un alto grado de descentralización, a diferencia de otras cadenas de bloques. Es programable, lo que significa que los desarrolladores pueden usarlo en la creación de aplicaciones descentralizadas")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/963617030026694716/ethereum.png")
  .addField("Lanzamiento inicial", "30 de julio de 2015")
  .addField("Código ISO", "ETH ",true)
  .addField("Símbolo ", "Ξ ",true)
  .addField("Desarrollador ", "Vitalik Buterin y Gavin Wood")
  .addField("Límite de Emisión  ", "Ξ18,000,000 anuales")
 

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})
}


//Tether
if (interaction.options.getSubcommand() === 'tether') {
  axios.get('https://api.coingecko.com/api/v3/coins/tether/market_chart?vs_currency=usd&days=0')
  .then((ETH)=> {
  eth=ETH.data['prices'][0][1]



  axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
  
  .then((USD)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Tether ")
  .setColor("#27e19e") 
  .setDescription("Tether + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964345365602119782/tether.png")

  .addField("Precio <:tether:964346292815945828>", 'USD$ ' + currencyFormatter.format(((eth)), { locale: 'es-ES', code: ' ' }),true )
  .addField("Volumen  <:tether:964346292815945828>", 'USD$ ' + currencyFormatter.format(((ETH.data['total_volumes'][0][1])), { locale: 'es-ES', code: ' ' }),true )
  .addField("Capitalización  <:tether:964346292815945828>", 'USD$ ' + currencyFormatter.format(((ETH.data['market_caps'][0][1])), { locale: 'es-ES', code: ' ' }),true )
 
  .addField("Compra <:tether:964346292815945828>", 'ARS$ ' + currencyFormatter.format(((eth))*USD.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta <:tether:964346292815945828>", 'ARS$ ' + currencyFormatter.format(((eth)) * USD.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
  .addField("Impuestos <:tether:964346292815945828> ", 'ARS$ ' + currencyFormatter.format((((eth)) * USD.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
 

  const embed2 = new Discord.MessageEmbed()
  .setTitle("Tether")
  .setColor("#27e19e") 
  .setDescription("Tether es una criptomoneda cuyas fichas son emitidas por Tether Limited. Anteriormente desde la compañía afirmaron que cada token estaba respaldado por un dólar estadounidense, pero el 14 de marzo de 2019 cambió el respaldo para incluir préstamos a empresas afiliadas.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964345365602119782/tether.png")
  .addField("Lanzamiento inicial", "6 de octubre de 2014")
  .addField("Código ISO", "USDT ",true)
  .addField("Símbolo ", "	₮ ",true)
  .addField("Desarrollador ", "Craig Sellars y Brock Pierce")
  .addField("Límite de Emisión  ", "Respaldado por dólares")
 

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})
}
  
//Axie  Infinity

  if (interaction.options.getSubcommand() === 'axieinfinity') {
    axios.get('https://api.coingecko.com/api/v3/coins/axie-infinity/market_chart?vs_currency=usd&days=0')
    .then((AXS)=> {
    axs=AXS.data['prices'][0][1]
  
  
  
    axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
    
    .then((USD)=> {
    const embed1 = new Discord.MessageEmbed()
    .setTitle("Axie Infinity ")
    .setColor("#555abe") 
    .setDescription("Axie Infinity + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964347852946018324/axie-infinity.png")
  
    .addField("Precio <:axieinfinity:964349059236257852>", 'USD$ ' + currencyFormatter.format(((axs)), { locale: 'es-ES', code: ' ' }),true )
    .addField("Volumen  <:axieinfinity:964349059236257852>", 'USD$ ' + currencyFormatter.format(((AXS.data['total_volumes'][0][1])), { locale: 'es-ES', code: ' ' }),true )
    .addField("Capitalización  <:axieinfinity:964349059236257852>", 'USD$ ' + currencyFormatter.format(((AXS.data['market_caps'][0][1])), { locale: 'es-ES', code: ' ' }),true )

    .addField("Compra <:axieinfinity:964349059236257852>", 'ARS$ ' + currencyFormatter.format(((axs))*USD.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta <:axieinfinity:964349059236257852>", 'ARS$ ' + currencyFormatter.format(((axs)) * USD.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
    .addField("Impuestos <:axieinfinity:964349059236257852> ", 'ARS$ ' + currencyFormatter.format((((axs)) * USD.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
   
  
    const embed2 = new Discord.MessageEmbed()
    .setTitle("Axie Infinity")
    .setColor("#555abe") 
    .setDescription("Axie Infinity es un Videojuego en línea basado en la red de Cadena de bloques en NFT desarrollado y distribuido por el estudio vietnamita de Sky Mavis, el juego funciona dando recompensas, que son los tokens del juego que utiliza la criptomoneda basada en Ethereum AXS (Axie Infinity Shards) y SLP (Smooth Love Potion). Actualmente es la colección de NFT más cara con más de $ 42 millones en ventas en junio de 2021.")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964347852946018324/axie-infinity.png")
    .addField("Lanzamiento inicial", "Marzo de 2018")
    .addField("Código ISO", "AXS ",true)
    .addField("Símbolo ", "	$AXS ",true)
    .addField("Desarrollador ", "Sky Mavis")
    .addField("Límite de Emisión  ", "Sin límite")
   
  
    const button1 = new MessageButton()
    .setCustomId("previousbtn")
    .setLabel("💸 Conversión ")
    .setStyle("SUCCESS");
  
   const button2 = new MessageButton()
   .setCustomId("nextbtn")
   .setLabel("📋 Información")
   .setStyle("PRIMARY");
  
   const pages = [
   embed1,
   embed2,
  ];
  
  const buttonList = [button1, button2];
  const timeout = 30000;
  paginationEmbed(interaction, pages, buttonList, timeout);
  
  
   })
   .catch((err) => {
   console.error('ERR', err)
  })
    })
  
  
  .catch((err) => {
  console.error('ERR', err)  
  })
  }
    
//Terraluna Classic
  if (interaction.options.getSubcommand() === 'terralunaclassic') {
    axios.get('https://api.coingecko.com/api/v3/coins/terra-luna/market_chart?vs_currency=usd&days=0')
    .then((LUNA)=> {
    tl=LUNA.data['prices'][0][1]
  
  
  
    axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
    
    .then((USD)=> {
    const embed1 = new Discord.MessageEmbed()
    .setTitle("Terra Luna Classic")
    .setColor("#ffd83a") 
    .setDescription("Terra Luna Classic + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964348899429072916/terraluna.png")
    .addField("Precio <:terraluna:964349074016960532>", 'USD$ ' + tl, true )
  .addField("Volumen  <:terraluna:964349074016960532>", 'USD$ ' + currencyFormatter.format(((LUNA.data['total_volumes'][0][1])), { locale: 'es-ES', code: ' ' }),true )
  .addField("Capitalización  <:terraluna:964349074016960532>", 'USD$ ' + currencyFormatter.format(((LUNA.data['market_caps'][0][1])), { locale: 'es-ES', code: ' ' }),true )
 
    .addField("Compra <:terraluna:964349074016960532>", 'ARS$ ' + currencyFormatter.format(((tl))*USD.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta <:terraluna:964349074016960532>", 'ARS$ ' + currencyFormatter.format(((tl)) * USD.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
    .addField("Impuestos <:terraluna:964349074016960532>", 'ARS$ ' + currencyFormatter.format((((tl)) * USD.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
   
  
    const embed2 = new Discord.MessageEmbed()
    .setTitle("Terra Luna")
    .setColor("#ffd83a") 
    .setDescription("Terra (LUNA) es un proyecto blockchain que busca crear todo un ecosistema centrado en la generación de aplicaciones DeFi sobre una blockchain de alta velocidad y la facilidad para generar stablecoins ancladas a las principales monedas fiat en todo el mundo. ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964348899429072916/terraluna.png")
    .addField("Lanzamiento inicial", "26 de julio  de 2019")
    .addField("Código ISO", "LUNC ",true)
    .addField("Símbolo ", "	- ",true)
    .addField("Desarrollador ", "Daniel Shin y Do Kwon")
    .addField("Límite de Emisión  ", "Sin límite")
   
  
    const button1 = new MessageButton()
    .setCustomId("previousbtn")
    .setLabel("💸 Conversión ")
    .setStyle("SUCCESS");
  
   const button2 = new MessageButton()
   .setCustomId("nextbtn")
   .setLabel("📋 Información")
   .setStyle("PRIMARY");
  
   const pages = [
   embed1,
   embed2,
  ];
  
  const buttonList = [button1, button2];
  const timeout = 30000;
  paginationEmbed(interaction, pages, buttonList, timeout);
  
  
   })
   .catch((err) => {
   console.error('ERR', err)
  })
    })
  
  
  .catch((err) => {
  console.error('ERR', err)  
  })
  }

    if (interaction.options.getSubcommand() === 'terraluna') {
    axios.get('https://api.coingecko.com/api/v3/coins/terra-luna-2/market_chart?vs_currency=usd&days=0')
    .then((LUNA)=> {
    tl=LUNA.data['prices'][0][1]
  
  
  
    axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
    
    .then((USD)=> {
    const embed1 = new Discord.MessageEmbed()
    .setTitle("Terra Luna 2.0")
    .setColor("#ffd83a") 
    .setDescription("Terra Luna 2.0 + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/980221927308275742/terra-luna-2_large.png")
    .addField("Precio <:terraluna2_large:980222259471978526>", 'USD$ ' + currencyFormatter.format(((tl)), { locale: 'es-ES', code: ' ' }),true )
    .addField("Volumen  <:terraluna2_large:980222259471978526>", 'USD$ ' + currencyFormatter.format(((LUNA.data['total_volumes'][0][1])), { locale: 'es-ES', code: ' ' }),true )
    .addField("Capitalización  <:terraluna2_large:980222259471978526>", 'USD$ ' + currencyFormatter.format(((LUNA.data['market_caps'][0][1])), { locale: 'es-ES', code: ' ' }),true )
   
    .addField("Compra <:terraluna2_large:980222259471978526>", 'ARS$ ' + currencyFormatter.format(((tl))*USD.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta <:terraluna2_large:980222259471978526>", 'ARS$ ' + currencyFormatter.format(((tl)) * USD.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
    .addField("Impuestos <:terraluna2_large:980222259471978526>", 'ARS$ ' + currencyFormatter.format((((tl)) * USD.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
   
  
    const embed2 = new Discord.MessageEmbed()
    .setTitle("Terra Luna")
    .setColor("#ffd83a") 
    .setDescription("Terra (LUNA) es un proyecto blockchain que busca crear todo un ecosistema centrado en la generación de aplicaciones DeFi sobre una blockchain de alta velocidad y la facilidad para generar stablecoins ancladas a las principales monedas fiat en todo el mundo. Terra Luna 2.0 es el nuevo Token de Terra, tras el colapso de Terra USD  y Terra Luna. ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/980221927308275742/terra-luna-2_large.png")
    .addField("Lanzamiento inicial", "27 de mayo  de 2022")
    .addField("Código ISO", "LUNA ",true)
    .addField("Símbolo ", "	- ",true)
    .addField("Desarrollador ", "Daniel Shin y Do Kwon")
    .addField("Límite de Emisión  ", "Sin límite")
   
  
    const button1 = new MessageButton()
    .setCustomId("previousbtn")
    .setLabel("💸 Conversión ")
    .setStyle("SUCCESS");
  
   const button2 = new MessageButton()
   .setCustomId("nextbtn")
   .setLabel("📋 Información")
   .setStyle("PRIMARY");
  
   const pages = [
   embed1,
   embed2,
  ];
  
  const buttonList = [button1, button2];
  const timeout = 30000;
  paginationEmbed(interaction, pages, buttonList, timeout);
  
  
   })
   .catch((err) => {
   console.error('ERR', err)
  })
    })
  
  
  .catch((err) => {
  console.error('ERR', err)  
  })
  }

  if (interaction.options.getSubcommand() === 'terrausdclassic') {
    axios.get('https://api.coingecko.com/api/v3/coins/terrausd/market_chart?vs_currency=usd&days=0')
    .then((USTC)=> {
    tl=USTC.data['prices'][0][1]
  
  
  
    axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
    
    .then((USD)=> {
    const embed1 = new Discord.MessageEmbed()
    .setTitle("Terra USD Classic")
    .setColor("#ffd83a") 
    .setDescription("Terra USD Classic + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/975204931944456233/terrausd.png")
    .addField("Precio <:terrausd:975206586375106600>", 'USD$ ' + currencyFormatter.format(((tl)), { locale: 'es-ES', code: ' ' }),true )
    .addField("Volumen  <:terrausd:975206586375106600>", 'USD$ ' + currencyFormatter.format(((USTC.data['total_volumes'][0][1])), { locale: 'es-ES', code: ' ' }),true )
    .addField("Capitalización  <:terrausd:975206586375106600>", 'USD$ ' + currencyFormatter.format(((USTC.data['market_caps'][0][1])), { locale: 'es-ES', code: ' ' }),true )
   
    .addField("Compra <:terrausd:975206586375106600> ", 'ARS$ ' + currencyFormatter.format(((tl))*USD.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta <:terrausd:975206586375106600> ", 'ARS$ ' + currencyFormatter.format(((tl)) * USD.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
    .addField("Impuestos <:terrausd:975206586375106600> ", 'ARS$ ' + currencyFormatter.format((((tl)) * USD.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
   
  
    const embed2 = new Discord.MessageEmbed()
    .setTitle("Terra USD Classic")
    .setColor("#ffd83a") 
    .setDescription(" Terra USD es una stablecoin algorítmica construida sobre la blockchain Terra. El objetivo de este tipo de monedas es conseguir la estabilidad de precios y equilibrar el suministro circulante del activo al estar vinculado a un activo de reserva como el dólar estadounidense o el oro.")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/975204931944456233/terrausd.png")
    .addField("Lanzamiento inicial", "Septiembre de 2020")
    .addField("Código ISO", "USTC ",true)
    .addField("Símbolo ", "	USTC ",true)
    .addField("Desarrollador ", "Daniel Shin y Do Kwon")
    .addField("Límite de Emisión  ", "Sin límite")
   
  
    const button1 = new MessageButton()
    .setCustomId("previousbtn")
    .setLabel("💸 Conversión ")
    .setStyle("SUCCESS");
  
   const button2 = new MessageButton()
   .setCustomId("nextbtn")
   .setLabel("📋 Información")
   .setStyle("PRIMARY");
  
   const pages = [
   embed1,
   embed2,
  ];
  
  const buttonList = [button1, button2];
  const timeout = 30000;
  paginationEmbed(interaction, pages, buttonList, timeout);
  
  
   })
   .catch((err) => {
   console.error('ERR', err)
  })
    })
  
  
  .catch((err) => {
  console.error('ERR', err)  
  })
  }
    
//Decentraland

  if (interaction.options.getSubcommand() === 'decentraland') {
    axios.get('https://api.coingecko.com/api/v3/coins/decentraland/market_chart?vs_currency=usd&days=0')
    .then((MANA)=> {
    tl=MANA.data['prices'][0][1]
  
  
  
    axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
    
    .then((USD)=> {
    const embed1 = new Discord.MessageEmbed()
    .setTitle("Decentraland")
    .setColor("#ffa6b7")   
    .setDescription("Decentraland + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964351096871088128/decentraland.png")
    .addField("Precio <:decentraland:964349085089931324>", 'USD$ ' + currencyFormatter.format(((tl)), { locale: 'es-ES', code: ' ' }),true )
    .addField("Volumen  <:decentraland:964349085089931324>", 'USD$ ' + currencyFormatter.format(((MANA.data['total_volumes'][0][1])), { locale: 'es-ES', code: ' ' }),true )
    .addField("Capitalización <:decentraland:964349085089931324>", 'USD$ ' + currencyFormatter.format(((MANA.data['market_caps'][0][1])), { locale: 'es-ES', code: ' ' }),true )
   
    .addField("Compra <:decentraland:964349085089931324>", 'ARS$ ' + currencyFormatter.format(((tl))*USD.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta <:decentraland:964349085089931324>", 'ARS$ ' + currencyFormatter.format(((tl)) * USD.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
    .addField("Impuestos <:decentraland:964349085089931324>", 'ARS$ ' + currencyFormatter.format((((tl)) * USD.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
   
  
    const embed2 = new Discord.MessageEmbed()
    .setTitle("Decentraland")
    .setColor("#ffa6b7")   
    .setDescription("Decentraland es una plataforma de realidad virtual descentralizada 3D que consiste en 90601 parcelas de tierra. La propiedad virtual en decentraland son los NFT que se pueden comprar por medio de la criptomoneda MANA, que está basada en la Blockchain de Ethereum. Fue inauguarada de manera pública en febrero de 2020,​ y se es supervisada por la organización sin ánimo de lucro Decentraland Foundation .Fue desarrollada por los argentinos Ari Meilich y Esteban Ordano ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964351096871088128/decentraland.png")
    .addField("Lanzamiento inicial", "20 de febrero de 2020")
    .addField("Código ISO", "MANA ",true)
    .addField("Símbolo ", "	- ",true)
    .addField("Desarrollador ", "Ari Meilich y Esteban Ordano")
    .addField("Límite de Emisión  ", "Sin límite")
   
  
    const button1 = new MessageButton()
    .setCustomId("previousbtn")
    .setLabel("💸 Conversión ")
    .setStyle("SUCCESS");
  
   const button2 = new MessageButton()
   .setCustomId("nextbtn")
   .setLabel("📋 Información")
   .setStyle("PRIMARY");
  
   const pages = [
   embed1,
   embed2,
  ];
  
  const buttonList = [button1, button2];
  const timeout = 30000;
  paginationEmbed(interaction, pages, buttonList, timeout);
  
  
   })
   .catch((err) => {
   console.error('ERR', err)
  })
    })
  
  
  .catch((err) => {
  console.error('ERR', err)  
  })
  }

  //Solana
  
  if (interaction.options.getSubcommand() === 'solana') {
    axios.get('https://api.coingecko.com/api/v3/coins/solana/market_chart?vs_currency=usd&days=0')
    .then((MANA)=> {
    tl=MANA.data['prices'][0][1]
  
  
  
    axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
    
    .then((USD)=> {
    const embed1 = new Discord.MessageEmbed()
    .setTitle("Solana")
    .setColor("#2488ff")   
    .setDescription("Decentraland + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964351112725540934/solana.png")
    .addField("Precio <:solana:964349096775282738>", 'USD$ ' + currencyFormatter.format(((tl)), { locale: 'es-ES', code: ' ' }),true )
    .addField("Volumen  <:solana:964349096775282738>", 'USD$ ' + currencyFormatter.format(((MANA.data['total_volumes'][0][1])), { locale: 'es-ES', code: ' ' }),true )
    .addField("Capitalización  <:solana:964349096775282738>", 'USD$ ' + currencyFormatter.format(((MANA.data['market_caps'][0][1])), { locale: 'es-ES', code: ' ' }),true )
   
    .addField("Compra <:solana:964349096775282738>", 'ARS$ ' + currencyFormatter.format(((tl))*USD.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta <:solana:964349096775282738>", 'ARS$ ' + currencyFormatter.format(((tl)) * USD.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
    .addField("Impuestos <:solana:964349096775282738>", 'ARS$ ' + currencyFormatter.format((((tl)) * USD.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
   
  
    const embed2 = new Discord.MessageEmbed()
    .setTitle("Solana")
    .setColor("#2488ff")   
    .setDescription("Solana ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964351112725540934/solana.png")
    .addField("Lanzamiento inicial", "Abril de 2019")
    .addField("Código ISO", "SOL",true)
    .addField("Símbolo ", "	◎ ",true)
    .addField("Desarrollador ", "Anatoly Yakovenko, Greg Fitzgerald, Stephen Akridge, Raj Gokal")
    .addField("Límite de Emisión  ", "$40.000.000.000 (Abril de 2022)")
   
  
    const button1 = new MessageButton()
    .setCustomId("previousbtn")
    .setLabel("💸 Conversión ")
    .setStyle("SUCCESS");
  
   const button2 = new MessageButton()
   .setCustomId("nextbtn")
   .setLabel("📋 Información")
   .setStyle("PRIMARY");
  
   const pages = [
   embed1,
   embed2,
  ];
  
  const buttonList = [button1, button2];
  const timeout = 30000;
  paginationEmbed(interaction, pages, buttonList, timeout);
  
  
   })
   .catch((err) => {
   console.error('ERR', err)
  })
    })
  
  
  .catch((err) => {
  console.error('ERR', err)  
  })
  }
  
   //DAI
  
   if (interaction.options.getSubcommand() === 'dai') {
    axios.get('https://api.coingecko.com/api/v3/coins/dai/market_chart?vs_currency=usd&days=0')
    .then((DAI)=> {
    dai=DAI.data['prices'][0][1]
  
  
  
    axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
    
    .then((USD)=> {
    const embed1 = new Discord.MessageEmbed()
    .setTitle("DAI")
    .setColor("#efc637")   
    .setDescription("DAI + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964681693292285962/dai.png")
    .addField("Precio <:dai:964681594344443904>", 'USD$ ' + currencyFormatter.format(((dai)), { locale: 'es-ES', code: ' ' }),true )
    .addField("Volumen  <:dai:964681594344443904>", 'USD$ ' + currencyFormatter.format(((DAI.data['total_volumes'][0][1])), { locale: 'es-ES', code: ' ' }),true )
    .addField("Capitalización  <:dai:964681594344443904>", 'USD$ ' + currencyFormatter.format(((DAI.data['market_caps'][0][1])), { locale: 'es-ES', code: ' ' }),true )
   
    .addField("Compra <:dai:964681594344443904>", 'ARS$ ' + currencyFormatter.format(((dai))*USD.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta <:dai:964681594344443904>", 'ARS$ ' + currencyFormatter.format(((dai)) * USD.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
    .addField("Impuestos <:dai:964681594344443904>", 'ARS$ ' + currencyFormatter.format((((dai)) * USD.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
   
  
    const embed2 = new Discord.MessageEmbed()
    .setTitle("DAI")
    .setColor("#efc637")     
    .setDescription("Dai (o DAI) es una criptomoneda estable que tiene como objetivo mantener su valor lo más cercano posible al dólar estadounidense (USD) a través de un sistema automatizado de contratos inteligentes en la cadena de bloques de Ethereum. ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964681693292285962/dai.png")
    .addField("Lanzamiento inicial", "18 de diciembre de 2017")
    .addField("Código ISO", "DAI",true)
    .addField("Símbolo ", "	DAI ",true)
    .addField("Desarrollador ", "Maker Foundation")
    .addField("Límite de Emisión  ", "Respaldado en dólares, otras criptomonedas y contratos inteligentes")
   
  
    const button1 = new MessageButton()
    .setCustomId("previousbtn")
    .setLabel("💸 Conversión ")
    .setStyle("SUCCESS");
  
   const button2 = new MessageButton()
   .setCustomId("nextbtn")
   .setLabel("📋 Información")
   .setStyle("PRIMARY");
  
   const pages = [
   embed1,
   embed2,
  ];
  
  const buttonList = [button1, button2];
  const timeout = 30000;
  paginationEmbed(interaction, pages, buttonList, timeout);
  
  
   })
   .catch((err) => {
   console.error('ERR', err)
  })
    })
  
  
  .catch((err) => {
  console.error('ERR', err)  
  })
  }

  //Dogecoin

  if (interaction.options.getSubcommand() === 'dogecoin') {
    axios.get('https://api.coingecko.com/api/v3/coins/dogecoin/market_chart?vs_currency=usd&days=0')
    .then((DAI)=> {
    dai=DAI.data['prices'][0][1]
  
  
  
    axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
    
    .then((USD)=> {
    const embed1 = new Discord.MessageEmbed()
    .setTitle("DOGECOIN")
    .setColor("#f5a431")   
    .setDescription("DOGECOIN + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964686112096391189/dogecoin.png")
    .addField("Precio <:dogecoin:964686144530939904>", 'USD$ ' + currencyFormatter.format(((dai)), { locale: 'es-ES', code: ' ' }),true )
    .addField("Volumen  <:dogecoin:964686144530939904>", 'USD$ ' + currencyFormatter.format(((DAI.data['total_volumes'][0][1])), { locale: 'es-ES', code: ' ' }),true )
    .addField("Capitalización  <:dogecoin:964686144530939904>", 'USD$ ' + currencyFormatter.format(((DAI.data['market_caps'][0][1])), { locale: 'es-ES', code: ' ' }),true )
   
    .addField("Compra <:dogecoin:964686144530939904>", 'ARS$ ' + currencyFormatter.format(((dai) )*USD.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta <:dogecoin:964686144530939904>", 'ARS$ ' + currencyFormatter.format(((dai)) * USD.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
    .addField("Impuestos <:dogecoin:964686144530939904>", 'ARS$ ' + currencyFormatter.format((((dai)) * USD.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
   
  
    const embed2 = new Discord.MessageEmbed()
    .setTitle("Dogecoin")
    .setColor("#f5a431")     
    .setDescription("Dogecoin (código: DOGE, símbolo: Ð y D) es una criptodivisa derivada de Bitcoin que usa como mascota un perro Shiba Inu del meme de Internet «Doge». Es una criptomoneda inflacionaria porque no tiene límite de emisión. La segunda quincena de junio de 2014, se había minado más de 100 mil millones (100,000,000,000) de Dogecoins. Tiene un coste energético por transacción de de 0.12 kWh por transacción frente a los 707 kWh por transacción de Bitcoin. Energéticamente, Dogecoin es 5892 veces más eficiente que Bitcoin.7")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964686112096391189/dogecoin.png")
    .addField("Lanzamiento inicial", "6 de diciembre de 2013 ")
    .addField("Código ISO", "DOGE",true)
    .addField("Símbolo ", "	Ð ",true)
    .addField("Desarrollador ", "Billy Markus (Shibetoshi Nakamoto), Jackson Palmer")
    .addField("Límite de Emisión  ", "Sin límite ")
   
  
    const button1 = new MessageButton()
    .setCustomId("previousbtn")
    .setLabel("💸 Conversión ")
    .setStyle("SUCCESS");
  
   const button2 = new MessageButton()
   .setCustomId("nextbtn")
   .setLabel("📋 Información")
   .setStyle("PRIMARY");
  
   const pages = [
   embed1,
   embed2,
  ];
  
  const buttonList = [button1, button2];
  const timeout = 30000;
  paginationEmbed(interaction, pages, buttonList, timeout);
  
  
   })
   .catch((err) => {
   console.error('ERR', err)
  })
    })
  
  
  .catch((err) => {
  console.error('ERR', err)  
  })
  
    
  }
  }
})


client.on('interactionCreate', async(interaction) => {
  if(!interaction.isCommand()){
    return
  }

  const {commandName , options} = interaction
  if(commandName=="metal") {
//Oro

if (interaction.options.getSubcommand() === 'oro') {

  
  axios.get('https://api.exchangerate.host/latest')
  .then((GOLD)=> {
  oro=GOLD.data['rates']['XAU']

  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Oro <:goldingots:964717629484965938> ")
  .setColor("#fddc4d")
  .setDescription("Oro + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964716664023285870/gold-ingots_1.png")
  .addField("Compra <:goldingots:964717629484965938>  ", 'ARS$ ' + currencyFormatter.format(((1 / oro)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }),true)
  .addField("Venta <:goldingots:964717629484965938> ", 'ARS$ ' + currencyFormatter.format(((1 / oro)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' }),true)
  .addField("Impuestos <:goldingots:964717629484965938> ", 'ARS$ ' + currencyFormatter.format((((1 / oro)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' }),true)

  const embed2 = new Discord.MessageEmbed()
  .setTitle("Oro")
  .setColor("#fddc4d")
  .setDescription("El oro es un elemento químico cuyo número atómico es 79. Está ubicado en el grupo 11 de la tabla periódica. Es un metal precioso blando de color amarillo dorado. Su símbolo es Au (del latín aurum, ‘brillante amanecer’). Además, es uno de los metales más apreciados en joyería por sus propiedades físicas, al tener baja alterabilidad, ser muy maleable, dúctil y brillante, y valorado por su rareza, al ser un metal difícil de encontrar en la naturaleza.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964716664023285870/gold-ingots_1.png")
  .addField("Código ISO", "XAU ",true)
  .addField("Número y símbolo atómico ", "79 - Au ",true)
  .addField("Dureza ", "3,0",true)
  .addField("Masa atómica", "196,966569(4) u",true)
  

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })
.catch((err) => {
console.error('ERR', err)  
})
}


//Plata


if (interaction.options.getSubcommand() === 'plata') {

  
  axios.get('https://api.exchangerate.host/latest')
  .then((SILVER)=> {
  plata=SILVER.data['rates']['XAG']

  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {

    const embed1 = new Discord.MessageEmbed()
    .setTitle("Plata <:silver:964717593816600606> ")
    .setColor("#cccccc") 
    .setDescription("Plata + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964713789540958238/silver.png")
    .addField("Compra <:silver:964717593816600606>  ", 'ARS$ ' + currencyFormatter.format(((1 / plata)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }),true)
    .addField("Venta <:silver:964717593816600606> ", 'ARS$ ' + currencyFormatter.format(((1 / plata)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' }),true)
    .addField("Impuestos <:silver:964717593816600606> ", 'ARS$ ' + currencyFormatter.format((((1 / plata)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' }),true)
  
    
  const embed2 = new Discord.MessageEmbed()
  .setTitle("Plata")
  .setColor("#cccccc") 
  .setDescription("La plata es un elemento químico de número atómico 47 situado en el grupo 11 de la tabla periódica de los elementos. Su símbolo es Ag (procede del latín argentum, “blanco”, “albo” o “brillante”). Es un metal noble, de transición, de color blanco brillante, blando, dúctil y maleable.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964713789540958238/silver.png")
  .addField("Código ISO", "XAG ",true)
  .addField("Número y símbolo atómico ", "47 - Ag ",true)
  .addField("Dureza ", "3,0",true)
  .addField("Masa atómica", "107,8683 u",true)
  

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })
.catch((err) => {
console.error('ERR', err)  
})
}

//Paladio

if (interaction.options.getSubcommand() === 'paladio') {

  
  axios.get('https://api.exchangerate.host/latest')
  .then((ladio)=> {
  paladio=ladio.data['rates']['XPD']

  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {

    const embed1 = new Discord.MessageEmbed()
    .setTitle("Paladio <:silver:964717593816600606>  ")
    .setColor("#808080") 
    .setDescription("Paladio + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964713789259911218/paladio.png")
    .addField("Compra <:paladio:964717594223456336>  ", 'ARS$ ' + currencyFormatter.format(((1 / paladio)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }),true)
    .addField("Venta <:paladio:964717594223456336> ", 'ARS$ ' + currencyFormatter.format(((1 / paladio)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' }),true)
    .addField("Impuestos <:paladio:964717594223456336> ", 'ARS$ ' + currencyFormatter.format((((1 / paladio)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' }),true)
  
    
  const embed2 = new Discord.MessageEmbed()
  .setTitle("Paladio")
  .setColor("#808080") 
  .setDescription("El paladio es un elemento químico de número atómico 46 situado en el grupo 10 de la tabla periódica de los elementos. Su símbolo es Pd. Es un metal de transición del grupo del platino, blando, dúctil, maleable y poco abundante. Se parece químicamente al platino y se extrae de algunas minas de cobre y níquel. Se emplea principalmente como catalizador y en joyería.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964713789259911218/paladio.png")
  .addField("Código ISO", "XPD ",true)
  .addField("Número y símbolo atómico ", "46 - Pd ",true)
  .addField("Dureza ", "4,75",true)
  .addField("Masa atómica", "106,42 u",true)
  

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })
.catch((err) => {
console.error('ERR', err)  
})
}

//Platino



if (interaction.options.getSubcommand() === 'platino') {

  
  axios.get('https://api.exchangerate.host/latest')
  .then((pl)=> {
  platino=pl.data['rates']['XPT']

  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {

    const embed1 = new Discord.MessageEmbed()
    .setTitle("Platino <:platinum:964717592923222017>")
    .setColor("#a9f8f7") 
    .setDescription("Paladio + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964713788978913320/platinum.png")
    .addField("Compra  <:platinum:964717592923222017>  ", 'ARS$ ' + currencyFormatter.format(((1 / platino)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }),true)
    .addField("Venta  <:platinum:964717592923222017> ", 'ARS$ ' + currencyFormatter.format(((1 / platino)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' }),true)
    .addField("Impuestos  <:platinum:964717592923222017> ", 'ARS$ ' + currencyFormatter.format((((1 / platino)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' }),true)
  
    
  const embed2 = new Discord.MessageEmbed()
  .setTitle("Platino")
  .setColor("#a9f8f7") 
  .setDescription("El platino es un elemento químico de número atómico 78, situado en el grupo 10 de la tabla periódica de los elementos. Su símbolo es Pt. Se trata de un metal de transición blanco grisáceo, precioso, pesado, maleable y dúctil. Es resistente a la corrosión y se encuentra en distintos minerales, frecuentemente junto con níquel y cobre; también se puede encontrar como metal. Se emplea en joyería, equipamiento de laboratorio, contactos eléctricos, empastes y catalizadores de automóviles.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964713788978913320/platinum.png")
  .addField("Código ISO", "XPT ",true)
  .addField("Número y símbolo atómico ", "78 - Pt ",true)
  .addField("Dureza ", "4,3",true)
  .addField("Masa atómica", "195.084 u",true)
  

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })
.catch((err) => {
console.error('ERR', err)  
})
}

  }

})
  
 //Convertir

 client.on('interactionCreate', async(interaction) => {
  if(!interaction.isCommand()){
    return
  }

  const {commandName , options} = interaction
  if(commandName=="convertirdivisa") {
    if (interaction.options.getSubcommand() === 'dolar') {

    var conv2 = options.getNumber('usd')
  axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
  .then((oficial)=> {
  const embed1 = new Discord.MessageEmbed()

  .setTitle("Dólar estadounidense <:rightarrow:921907270747570247> Peso Argentino")
  .setColor("GREEN")
  .setDescription("Dólares estadounidenses expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%))")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921906513453408286/dolarapeso.png")
  .addField("Monto original :dollar: ", 'USD$ ' + currencyFormatter.format(conv2, { locale: 'es-ES', code: ' ' }))
  .addField("Compra :flag_ar:", 'ARS$ ' +  currencyFormatter.format((conv2 * oficial.data['compra']), { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta :flag_ar:", 'ARS$ ' +  currencyFormatter.format((conv2 * oficial.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' +  currencyFormatter.format(((conv2 * oficial.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)

    const embed2 = new Discord.MessageEmbed ()
    .setTitle("Dólar estadounidense <:rightarrow:921907270747570247> Peso Argentino")
  .setColor("GREEN")
  .setDescription("Dólares estadounidenses expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (IVA (21%), PAIS (8%) y adelanto de ganancias (35%)) \n Usualmente conocido como dólar streaming")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921906513453408286/dolarapeso.png")
  .addField("Monto original :dollar: ", 'USD$ ' + currencyFormatter.format(conv2, { locale: 'es-ES', code: ' ' }))
  .addField("Compra :flag_ar:", 'ARS$ ' +  currencyFormatter.format((conv2 * oficial.data['compra']), { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta :flag_ar:", 'ARS$ ' +  currencyFormatter.format((conv2 * oficial.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Impuestos (64%) :flag_ar: ", 'ARS$ ' +  currencyFormatter.format(((conv2 * oficial.data['venta'])*1.64), { locale: 'es-ES', code: ' ' }) ,true)
 

 

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("🏦 Dólar solidario (65%)")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("💳 Dólar streaming (64%)")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  
 
    }
   
      if (interaction.options.getSubcommand() === 'dolarblue') {
    
        var conv2 = options.getNumber('usd')

        axios.get('https://api-dolar-argentina.herokuapp.com/api/dolarblue')
        .then((blue)=> {
        const embed = new Discord.MessageEmbed()
        .setTitle("Dólar Blue  <:rightarrow:921907270747570247> Peso Argentino")
        .setColor("BLUE")
        .setDescription("Dólar estadounidense expresado en pesos argentinos a precio del mercado paralelo (Dólar blue)")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922553537978855524/blueapeso.png")
        .addField("Monto Original :dollar: ", 'USD$ ' + currencyFormatter.format(conv2, { locale: 'es-ES', code: ' ' }))
        .addField("Compra:flag_ar: ", 'ARS$ ' + currencyFormatter.format((conv2 * blue.data['compra']), { locale: 'es-ES', code: ' ' }) ,true)
        .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format((conv2 * blue.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)

        return interaction.reply({ embeds: [embed] });
       
       })
        .catch((err) => {
        console.error('ERR', err)
       
             
       })
       

        }

        if (interaction.options.getSubcommand() === 'euro') {
    
          var conv3 = options.getNumber('eur')

          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
          .then((euro)=> {
          const embed = new Discord.MessageEmbed()
          .setTitle("Euro <:rightarrow:921907270747570247> Peso Argentino")
          .setColor("#083499")
          .setDescription("Euro expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%))")
          .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922548848826654801/euroapeso.png")
          .addField("Monto Original :euro: ", 'EUR€ ' + currencyFormatter.format(conv3, { locale: 'es-ES', code: ' ' }))
          .addField("Compra :flag_ar: ", 'ARS$ '  + currencyFormatter.format((conv3 * euro.data['compra']), { locale: 'es-ES', code: ' ' }) ,true)
          .addField("Venta :flag_ar: ", 'ARS$ '  + currencyFormatter.format((conv3 * euro.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
          .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv3 * euro.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)

          return interaction.reply({ embeds: [embed] });

          })
          .catch((err) => {
          console.error('ERR', err)

      
})


        }

        if (interaction.options.getSubcommand() === 'real') {
    
          var conv4 = options.getNumber('brl')
        

          axios.get('https://api-dolar-argentina.herokuapp.com/api/real/nacion')
          .then((real)=> {
            const embed = new Discord.MessageEmbed()
          .setTitle("Real Brasileño <:rightarrow:921907270747570247> Peso Argentino")
          .setColor("#6da545")
          .setDescription("Real brasileño expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
          .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922553925243117698/realapeso.png")
          .addField("Monto Original :flag_br: ", 'BRL R$ ' + currencyFormatter.format(conv4, { locale: 'es-ES', code: ' ' }))
          .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format((conv4 * real.data['compra']), { locale: 'es-ES', code: ' ' }) ,true)
          .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format((conv4 * real.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
          .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv4 * real.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)

          return interaction.reply({ embeds: [embed] });
         
         })
          .catch((err) => {
          console.error('ERR', err)
         
               
         })
         
        
        
  }

  if (interaction.options.getSubcommand() === 'yen') {
    
    var conv5 = options.getNumber('jpy')
    axios.get('https://api.exchangerate.host/latest')
  .then((YEN)=> {

   yen1=YEN.data['rates']['JPY']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Yen Japonés <:rightarrow:921907270747570247> Peso Argentino ")
    .setColor("#FDFD0D")
    .setDescription("Yen japonés expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922556125809872936/yenapeso_1.png")
    .addField("Precio Original :yen: ", 'JPY¥ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / yen1)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/yen1) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/yen1) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)

    return interaction.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}
if (interaction.options.getSubcommand() === 'libra') {
  var conv5 = options.getNumber('gbp')
  axios.get('https://api.exchangerate.host/latest')
  .then((LIBRA)=> {

   libra=LIBRA.data['rates']['GBP']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Libra Esterlina <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("#D605F6")
    .setDescription("Libra Esterlina expresada en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922561706838868049/libraapeso.png")
    .addField("Monto Original :pound: ", 'GBP£ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / libra)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/libra) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/libra) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)

    return interaction.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

//Rublo

}
if (interaction.options.getSubcommand() === 'rublo') {
  var conv5 = options.getNumber('rub')
  axios.get('https://api.exchangerate.host/latest')
  .then((RUBLO)=> {

   rublo=RUBLO.data['rates']['RUB']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Rublo Ruso <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("RED")
    .setDescription("Rublo ruso expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928344880995008602/rubloapeso.png")
    .addField("Monto original <:rublo:913901788531417229> ", 'RUB₽ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / rublo)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/rublo) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/rublo) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)

    return interaction.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
}

if (interaction.options.getSubcommand() === 'dolarcanadiense') {
  var conv5 = options.getNumber('cad')
  axios.get('https://api.exchangerate.host/latest')
  .then((CAD)=> {

   cad=CAD.data['rates']['CAD']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Dólar Canadiense <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("#fc0201")
    .setDescription("Dólar canadiense expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928345276857606194/cadapeso.png")
    .addField("Monto original :flag_ca: ", 'CAD$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / cad)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/cad) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/cad) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)
 

    return interaction.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}

if (interaction.options.getSubcommand() === 'dolaraustraliano') {

  var conv5 = options.getNumber('aud')
  axios.get('https://api.exchangerate.host/latest')
  .then((AUD)=> {

   dolar=AUD.data['rates']['AUD']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Dólar Australiano <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("#000346")
    .setDescription("Dólar australiano expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928345614805246013/audapeso.png")
    .addField("Monto original :flag_au: ", 'AUD$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / dolar)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/dolar) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/dolar) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)
    

    return interaction.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 
}

if (interaction.options.getSubcommand() === 'dolarneozelandes') {

  var conv5 = options.getNumber('nzd')

  axios.get('https://api.exchangerate.host/latest')

  .then((NZD)=> {

   dolar=NZD.data['rates']['NZD']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Dólar Neozelandés <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("#000346")
    .setDescription("Dólar neozelandés expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928348263235604560/nzapeso.png")
    .addField("Monto original :flag_nz: ", 'NZD$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / dolar)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/dolar) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuetos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/dolar) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)
   
    return interaction.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}

if (interaction.options.getSubcommand() === 'pesomexicano') {
  var conv5 = options.getNumber('mxn') 
  axios.get('https://api.exchangerate.host/latest')
  .then((MXN)=> {

   mxn=MXN.data['rates']['MXN']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Peso Méxicano <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("#24944c")
    .setDescription("Peso méxicano expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928349418023968918/mxnapeso.png")
    .addField("Monto original :flag_mx: ", 'MXN$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / mxn)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/mxn) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuesto (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/mxn) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)

    return interaction.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 
}
if (interaction.options.getSubcommand() === 'pesochileno') {
  var conv5 = options.getNumber('clp')

  axios.get('https://api.exchangerate.host/latest')
  .then((CLP)=> {

   clp=CLP.data['rates']['CLP']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Peso Chileno <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("#fc0201")
    .setDescription("Peso chileno expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928350035324842035/chileapeso.png")
    .addField("Monto original :flag_cl: ", 'CLP$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / clp)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/clp) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/clp) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)

    return interaction.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 


}

if (interaction.options.getSubcommand() === 'pesouruguayo') {
  var conv5 = options.getNumber('uyu')
  axios.get('https://api.exchangerate.host/latest')
  .then((UYU)=> {

   peso=UYU.data['rates']['UYU']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Peso Uruguayo <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("BLUE")
    .setDescription("Peso uruguayo expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928350035744288878/uyuapeso.png")
    .addField("Monto original :flag_uy: ", 'UYU$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / peso)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/peso) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/peso) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)

    return interaction.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 


}

if (interaction.options.getSubcommand() === 'pesocolombiano') {
  var conv5 = options.getNumber('cop')
  axios.get('https://api.exchangerate.host/latest')
  .then((COL)=> {

   pesos=COL.data['rates']['COP']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Peso Colombiano <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("#fecb04")
    .setDescription("Peso colombiano expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928349550970822716/copapeso.png")
    .addField("Monto original :flag_co: ", 'COP$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / pesos)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/pesos) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/pesos) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)

    return interaction.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}

if (interaction.options.getSubcommand() === 'boliviano') {
  var conv5 = options.getNumber('bob')
  axios.get('https://api.exchangerate.host/latest')
  .then((BOB)=> {

   peso=BOB.data['rates']['BOB']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Boliviano <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("#6da544")
    .setDescription("Boliviano expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928352180296122388/bolivianoapeso.png")
    .addField("Monto original :flag_bo: ", 'BOB Bs. ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / peso)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/peso) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/peso) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)

    return interaction.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}

if (interaction.options.getSubcommand() === 'sol') {

  var conv5 = options.getNumber('pen')
  axios.get('https://api.exchangerate.host/latest')
  .then((PEN)=> {

   sol=PEN.data['rates']['PEN']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Sol Peruano <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("#cd0400")
    .setDescription("Sol peruano expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928352555736633374/solapeso.png")
    .addField("Monto Original :flag_pe: ", 'PEN S/ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / sol)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/sol) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/sol) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)
    
    return interaction.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
}
if (interaction.options.getSubcommand() === 'guarani') {
  var conv5 = options.getNumber('pyg')
  axios.get('https://api.exchangerate.host/latest')
  .then((PYG)=> {

   guarani=PYG.data['rates']['PYG']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Guaraní paraguayo <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("#d80027")
    .setDescription("Guarani paraguayo expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928353654342299709/guaraniapeso.png")
    .addField("Monto original :flag_py: ", 'PYG₲ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / guarani)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/guarani) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/guarani) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)
    
    return interaction.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 


}

if (interaction.options.getSubcommand() === 'bolivar') {
  var conv5 = options.getNumber('ved')
  axios.get('https://api.exchangerate.host/latest')
  .then((VES)=> {

   bolivar=VES.data['rates']['VES']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Bolivar Digital Venezolano <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("RED")
    .setDescription("Bolivar digital venezolano expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%))")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928354779887960105/bolivarapeso.png")
    .addField("Monto Original :flag_ve: ", 'VED B$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / bolivar)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/bolivar) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/bolivar) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)

    return interaction.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}

if (interaction.options.getSubcommand() === 'yuan') {
  var conv5 = options.getNumber('cny')
  axios.get('https://api.exchangerate.host/latest')
  .then((CNY)=> {

   yuan=CNY.data['rates']['CNY']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Renminbi chino <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("#cd0400")
    .setDescription("Renminbi (yuan) chino expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928356456087048234/yuanapeso.png")
    .addField("PRECIO ORIGINAL :flag_cn: ", 'CNY¥ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("COMPRA :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / yuan)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("VENTA :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/yuan) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("IMPUESTOS (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/yuan) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)
    
    return interaction.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 



}

if (interaction.options.getSubcommand() === 'rupia') {
  var conv5 = options.getNumber('inr')
  axios.get('https://api.exchangerate.host/latest')
  .then((INR)=> {

   rupia=INR.data['rates']['INR']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Rupia India <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("#fc9836")
    .setDescription("Rupia india expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928356536307314718/indiaapeso.png")
    .addField("Precio original :flag_in: ", 'INR₹ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / rupia)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/rupia) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/rupia) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)

    return interaction.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })

}

if (interaction.options.getSubcommand() === 'won') {
  var conv5 = options.getNumber('krw')
  axios.get('https://api.exchangerate.host/latest')
  .then((KRW)=> {

   won=KRW.data['rates']['KRW']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Won Surcoreano <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("#FFFFFF")
    .setDescription("Won surcoreano expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928356536735117312/wonapeso.png")
    .addField("Monto original :flag_kr: ", 'KRW ₩ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / won)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/won) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/won) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)
   
    return interaction.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)    
 })



}

if (interaction.options.getSubcommand() === 'franco') {

  var conv5 = options.getNumber('chf')
  axios.get('https://api.exchangerate.host/latest')
  .then((suizo)=> {
   franco=suizo.data['rates']['CHF']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Franco Suizo <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("#d80027")
    .setDescription("Franco suizo expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/930966649710985286/francoapeso.png")
    .addField("Monto original :flag_ch: ", 'CHF Fr. ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / franco)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/franco) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/franco) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)

    return interaction.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)    
 })

}

if (interaction.options.getSubcommand() === 'lira') {

  var conv5 = options.getNumber('try')
  axios.get('https://api.exchangerate.host/latest')
  .then((TRY)=> {

   lira=TRY.data['rates']['TRY']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Lira turca <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("#d70224")
    .setDescription("Lira turca expresada en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/930966650122014740/liraapeso.png")
    .addField("Monto original :flag_tr: ", 'TRY₺ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / lira)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/lira) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/lira) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)
    
    return interaction.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)    
 })

}

}

 })



 //Convertir cripto 

 client.on('interactionCreate', async(interaction) => {
  if(!interaction.isCommand()){
    return
  }

  const {commandName , options} = interaction
  if(commandName=="convertircripto") {

    //Bitcoin
    if (interaction.options.getSubcommand() === 'bitcoin') {
      var conv5 = options.getNumber('btc')
      axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=0')
  .then((BTC)=> {

    bitcoin=BTC.data['prices'][0][1]

 
   axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
    .then((USD)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Bitcoin <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("#fddc4d")
    .setDescription("Bitcoin expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929076353079328868/bitcoinapeso.png")
    .addField("Monto original <:bitcoin:929073179262074960> ", 'BTC ₿ ' + conv5 )
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5*bitcoin)) * USD.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5*bitcoin) * USD.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5*bitcoin) * USD.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)
   
    return interaction.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 



    }


    //Ethereum


    if (interaction.options.getSubcommand() === 'ethereum') {
      var conv5 = options.getNumber('eth')
      axios.get('https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=0')
  .then((ETH)=> {

    ethereum=ETH.data['prices'][0][1]

 
   axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
    .then((USD)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Ethereum <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("#7be0ff") 
    .setDescription("Ethereum expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/963885915619610714/convethereum.png")
    .addField("Monto original  <:ethereum:963619533271232532> ", 'ETH Ξ ' + conv5 )
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5*ethereum)) * USD.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5*ethereum) * USD.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5*ethereum) * USD.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)
   
    return interaction.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 



    }


    //Tether

    if (interaction.options.getSubcommand() === 'tether') {
      var conv5 = options.getNumber('usdt')
      axios.get('https://api.coingecko.com/api/v3/coins/tether/market_chart?vs_currency=usd&days=0')
  .then((ETH)=> {

    ethereum=ETH.data['prices'][0][1]

 
   axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
    .then((USD)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Tether <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("#27e19e") 
    .setDescription("Tether expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964377292568662107/convertirtether.png")
    .addField("Monto original  <:tether:964346292815945828>", 'USDT₮ ' + conv5 )
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5*ethereum)) * USD.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5*ethereum) * USD.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5*ethereum) * USD.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)
   
    return interaction.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 



    }
//Axie Infinity
if (interaction.options.getSubcommand() === 'axieinfinity') {
  var conv5 = options.getNumber('axs')
  axios.get('https://api.coingecko.com/api/v3/coins/axie-infinity/market_chart?vs_currency=usd&days=0')
.then((ETH)=> {

ethereum=ETH.data['prices'][0][1]


axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
.then((USD)=> {
const embed = new Discord.MessageEmbed()
.setTitle("Axie  Infinity <:rightarrow:921907270747570247> Peso Argentino")
.setColor("#555abe") 
.setDescription("Axie Infinity expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
.setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964380617485742100/convertiraxie.png")
.addField("Monto original  <:axieinfinity:964349059236257852>", 'AXS ' + conv5 )
.addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5*ethereum)) * USD.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
.addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5*ethereum) * USD.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
.addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5*ethereum) * USD.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)

return interaction.reply({ embeds: [embed] });

})
.catch((err) => {
console.error('ERR', err)

     
})
})
.catch((err) => {
console.error('ERR', err)

   
})

}

//Terraluna 

if (interaction.options.getSubcommand() === 'terralunaclassic') {
  var conv5 = options.getNumber('lunc')
  axios.get('https://api.coingecko.com/api/v3/coins/terra-luna/market_chart?vs_currency=usd&days=0')
.then((TL)=> {

terraluna=TL.data['prices'][0][1]


axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
.then((USD)=> {
const embed = new Discord.MessageEmbed()
.setTitle("Terra Luna Classic <:rightarrow:921907270747570247> Peso Argentino")
.setColor("#ffd83a") 
.setDescription("Terraluna expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
.setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964377293055209472/convertirterraluna.png")
.addField("Monto original <:terraluna:964349074016960532>  ", 'LUNC ' + conv5 )
.addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5*terraluna)) * USD.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
.addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5*terraluna) * USD.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
.addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5*terraluna) * USD.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)

return interaction.reply({ embeds: [embed] });

})
.catch((err) => {
console.error('ERR', err)

     
})
})
.catch((err) => {
console.error('ERR', err)

   
})




}

if (interaction.options.getSubcommand() === 'terraluna') {
  var conv5 = options.getNumber('luna')
  axios.get('https://api.coingecko.com/api/v3/coins/terra-luna-2/market_chart?vs_currency=usd&days=0')
.then((TL)=> {

terraluna=TL.data['prices'][0][1]


axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
.then((USD)=> {
const embed = new Discord.MessageEmbed()
.setTitle("Terra Luna 2.0 <:rightarrow:921907270747570247> Peso Argentino")
.setColor("#ffd83a") 
.setDescription("Terraluna expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
.setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/980239559428288592/convertirluna2.png")
.addField("Monto original <:terraluna2_large:980222259471978526>", 'LUNA ' + conv5 )
.addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5*terraluna)) * USD.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
.addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5*terraluna) * USD.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
.addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5*terraluna) * USD.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)

return interaction.reply({ embeds: [embed] });

})
.catch((err) => {
console.error('ERR', err)

     
})
})
.catch((err) => {
console.error('ERR', err)

   
})




}

    //TerraUSD

    
if (interaction.options.getSubcommand() === 'terrausdclassic') {
  var conv5 = options.getNumber('ustc')
  axios.get('https://api.coingecko.com/api/v3/coins/terrausd/market_chart?vs_currency=usd&days=0')
.then((UST)=> {

ust=UST.data['prices'][0][1]


axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
.then((USD)=> {
const embed = new Discord.MessageEmbed()
.setTitle("Terra  USD <:rightarrow:921907270747570247> Peso Argentino")
.setColor("#5293f9")  
.setDescription("Dai expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
.setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/975221714126520430/convertirterra.png")
.addField("Monto original <:terrausd:975206586375106600>", 'USTC ' + conv5 )
.addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5*ust)) * USD.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
.addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5*ust) * USD.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
.addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5*ust) * USD.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)

return interaction.reply({ embeds: [embed] });

})
.catch((err) => {
console.error('ERR', err)

     
})
})
.catch((err) => {
console.error('ERR', err)

   
})




}
    

//Decentraland

if (interaction.options.getSubcommand() === 'decentraland') {
  var conv5 = options.getNumber('mana')
  axios.get('https://api.coingecko.com/api/v3/coins/decentraland/market_chart?vs_currency=usd&days=0')
.then((decentraland)=> {

mana=decentraland.data['prices'][0][1]


axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
.then((USD)=> {
const embed = new Discord.MessageEmbed()
.setTitle("Decentraland <:rightarrow:921907270747570247> Peso Argentino")
.setColor("#ffa6b7") 
.setDescription("Decentraland expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
.setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964380633042419722/convertirdecentraland.png")
.addField("Monto original <:decentraland:964349085089931324>", 'MANA ' + conv5 )
.addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5*mana)) * USD.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
.addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5*mana) * USD.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
.addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5*mana) * USD.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)

return interaction.reply({ embeds: [embed] });

})
.catch((err) => {
console.error('ERR', err)

     
})
})
.catch((err) => {
console.error('ERR', err)

   
})




}

//Solana

if (interaction.options.getSubcommand() === 'solana') {
  var conv5 = options.getNumber('sol')
  axios.get('https://api.coingecko.com/api/v3/coins/solana/market_chart?vs_currency=usd&days=0')
.then((solana)=> {

sol=solana.data['prices'][0][1]


axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
.then((USD)=> {
const embed = new Discord.MessageEmbed()
.setTitle("Solana <:rightarrow:921907270747570247> Peso Argentino")
.setColor("#2488ff")   
.setDescription("Solana expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
.setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964387064240046111/convertirsolana.png")
.addField("Monto original <:decentraland:964349085089931324>", 'SOL◎ ' + conv5 )
.addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5*sol)) * USD.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
.addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5*sol) * USD.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
.addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5*sol) * USD.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)

return interaction.reply({ embeds: [embed] });

})
.catch((err) => {
console.error('ERR', err)

     
})
})
.catch((err) => {
console.error('ERR', err)

   
})




}

//DAi

if (interaction.options.getSubcommand() === 'dai') {
  var conv5 = options.getNumber('dai')
  axios.get('https://api.coingecko.com/api/v3/coins/dai/market_chart?vs_currency=usd&days=0')
.then((DAI)=> {

dai=DAI.data['prices'][0][1]


axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
.then((USD)=> {
const embed = new Discord.MessageEmbed()
.setTitle("Dai <:rightarrow:921907270747570247> Peso Argentino")
.setColor("#efc637")    
.setDescription("Dai expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
.setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964691273883742238/dai_1.png")
.addField("Monto original <:dai:964681594344443904>", 'DAI ' + conv5 )
.addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5*dai)) * USD.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
.addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5*dai) * USD.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
.addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5*dai) * USD.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)

return interaction.reply({ embeds: [embed] });

})
.catch((err) => {
console.error('ERR', err)

     
})
})
.catch((err) => {
console.error('ERR', err)

   
})




}

//Dogecoin

if (interaction.options.getSubcommand() === 'dogecoin') {
  var conv5 = options.getNumber('doge')
  axios.get('https://api.coingecko.com/api/v3/coins/dogecoin/market_chart?vs_currency=usd&days=0')
.then((DOGE)=> {

doge=DOGE.data['prices'][0][1]


axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
.then((USD)=> {
const embed = new Discord.MessageEmbed()
.setTitle("Dogecoin <:rightarrow:921907270747570247> Peso Argentino")
.setColor("#f5a431")    
.setDescription("Dogecoin expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
.setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964691274147979304/dogecoin_1.png")
.addField("Monto original <:dogecoin:964686144530939904>", 'DOGEÐ ' + conv5 )
.addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5*doge)) * USD.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
.addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5*doge) * USD.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
.addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5*doge) * USD.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)

return interaction.reply({ embeds: [embed] });

})
.catch((err) => {
console.error('ERR', err)

     
})
})
.catch((err) => {
console.error('ERR', err)

   
})




}

  }
  })


//Convertir metal


  client.on('interactionCreate', async(interaction) => {
    if(!interaction.isCommand()){
      return
    }
  
    const {commandName , options} = interaction
    if(commandName=="convertirmetal") {
      if (interaction.options.getSubcommand() === 'oro') {

          var conv5 = options.getNumber('xau')
          axios.get('https://api.exchangerate.host/latest')
          .then((GOLD)=> {
        
           oro=GOLD.data['rates']['XAU']
            axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
            .then((EUR)=> {
            const embed = new Discord.MessageEmbed()
            .setTitle("Oro <:rightarrow:921907270747570247> Peso Argentino")
            .setColor("#fddc4d")
            .setDescription("Oro expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964738102771990648/convertiroro.png")
            .addField("Monto Original <:goldingots:964717629484965938>", 'XAU ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
            .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / oro)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
            .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/oro) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
            .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/oro) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)
        
            return interaction.reply({ embeds: [embed] });
           
           })
            .catch((err) => {
            console.error('ERR', err)
           
                 
           })
          })
          .catch((err) => {
          console.error('ERR', err)
         
               
         })
        }

        if (interaction.options.getSubcommand() === 'plata') {

          var conv5 = options.getNumber('xag')
          axios.get('https://api.exchangerate.host/latest')
          .then((silver)=> {
        
           plata=silver.data['rates']['XAG']
            axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
            .then((EUR)=> {
            const embed = new Discord.MessageEmbed()
            .setTitle("Plata <:rightarrow:921907270747570247> Peso Argentino")
            .setColor("#cccccc") 
            .setDescription("Plata expresada en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
            .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964739866707492884/convertirplata_1.png")
            .addField("Monto Original <:silver:964717593816600606> ", 'XAG ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
            .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / plata)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
            .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/plata) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
            .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/plata) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)
        
            return interaction.reply({ embeds: [embed] });
           
           })
            .catch((err) => {
            console.error('ERR', err)
           
                 
           })
          })
          .catch((err) => {
          console.error('ERR', err)
         
               
         })
        }

    
//Paladio
if (interaction.options.getSubcommand() === 'paladio') {

  var conv5 = options.getNumber('xpd')
  axios.get('https://api.exchangerate.host/latest')
  .then((pd)=> {

   paladio=pd.data['rates']['XPD']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Paladio <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("#808080") 
    .setDescription("Paladio expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964739251159859230/convertirpaladio.png")
    .addField("Monto Original <:paladio:964717594223456336> ", 'XPD ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / paladio)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/paladio) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/paladio) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)

    return interaction.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
}

//Platino
if (interaction.options.getSubcommand() === 'platino') {

  var conv5 = options.getNumber('xpt')
  axios.get('https://api.exchangerate.host/latest')
  .then((pt)=> {

   platino=pt.data['rates']['XPT']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Platino <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("#a9f8f7")  
    .setDescription("Platino expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964739250899804180/convertirplatinoxd.png")
    .addField("Monto Original <:platinum:964717592923222017>  ", 'XPT ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / platino)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/platino) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/platino) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)

    return interaction.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
}
    }



  })











 //Peso  a

 client.on('interactionCreate', async(interaction) => {
  if(!interaction.isCommand()){
    return
  }

  const {commandName , options} = interaction
  if(commandName=="pesoa") {
   
    if (interaction.options.getSubcommand() === 'dolar') {
      var conv2 = options.getNumber('ars')
      axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
      .then((oficial)=> {
      const embed = new Discord.MessageEmbed()
      .setTitle(" Peso Argentino  <:rightarrow:921907270747570247> Dólar estadounidense")
      .setColor("GREEN")
      .setDescription("Pesos argentinos expresados en dolares estadounideneses a tasa oficial + impuestos (PAIS (30%) y adelanto de ganancias (35%))")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921906513453408286/dolarapeso.png")
      .addField("Monto Original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv2, { locale: 'es-ES', code: ' ' }))
      .addField("Compra :dollar:", 'USD$ ' + currencyFormatter.format((conv2 / oficial.data['compra']), { locale: 'es-ES', code: ' ' }), true)
      .addField("Venta :dollar:", 'USD$ ' + currencyFormatter.format((conv2 / oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)
      .addField("Impuestos :dollar: ", 'USD$ ' + currencyFormatter.format(( (conv2 / oficial.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)

      return interaction.reply({ embeds: [embed] });
     
     })
      .catch((err) => {
      console.error('ERR', err)
     
           
     })
     
    }

    if (interaction.options.getSubcommand() === 'dolarblue') {
      var conv2 = options.getNumber('ars')
      axios.get('https://api-dolar-argentina.herokuapp.com/api/dolarblue')
      .then((blue)=> {
      const embed = new Discord.MessageEmbed()
      .setTitle(" Peso Argentino  <:rightarrow:921907270747570247> Dólar Blue")
      .setColor("BLUE")
      .setDescription("Pesos argentinos expresados en dólares estadounidenses a precio del mercado paralelo (Dólar blue)")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922553537978855524/blueapeso.png")
      .addField("Monto Original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv2, { locale: 'es-ES', code: ' ' }))
      .addField("Compra :dollar:", 'USD$ ' + currencyFormatter.format((conv2 / blue.data['compra']), { locale: 'es-ES', code: ' ' }), true)
      .addField("Venta :dollar:", 'USD$ ' + currencyFormatter.format((conv2 / blue.data['venta']), { locale: 'es-ES', code: ' ' }), true)
 
      return interaction.reply({ embeds: [embed] });

})
 .catch((err) => {
 console.error('ERR', err)

      
})

    }

    if (interaction.options.getSubcommand() === 'euro') {
      var conv2 = options.getNumber('ars')
      axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
 .then((euro)=> {
 const embed = new Discord.MessageEmbed()
 .setTitle(" Peso Argentino  <:rightarrow:921907270747570247> Euro ")
 .setColor("#083499")
 .setDescription("Pesos argentinos expresados en euros a tasa oficial + impuestos (PAIS (30%) y adelanto de ganancias (35%)).")
 .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922548848826654801/euroapeso.png")
 .addField("Monto Original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv2, { locale: 'es-ES', code: ' ' }))
 .addField("Compra :euro:", 'EUR€  ' + currencyFormatter.format((conv2 / euro.data['compra']), { locale: 'es-ES', code: ' ' }), true)
 .addField("Venta :euro:", 'EUR€ ' + currencyFormatter.format((conv2 / euro.data['venta']), { locale: 'es-ES', code: ' ' }), true)
 .addField("Impuestos :euro: ", 'EUR€  ' + currencyFormatter.format(( (conv2 / euro.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)

 return interaction.reply({ embeds: [embed] });

})
 .catch((err) => {
 console.error('ERR', err)

      
})

    }
    
    if (interaction.options.getSubcommand() === 'real') {
      var conv2 = options.getNumber('ars')
      axios.get('https://api-dolar-argentina.herokuapp.com/api/real/nacion')
      .then((real)=> {
      const embed = new Discord.MessageEmbed()
      .setTitle(" Peso Argentino  <:rightarrow:921907270747570247> Real Brasileño")
      .setColor("#6da545")
      .setDescription("Pesos argentinos expresados en reales brasileños a tasa oficial + impuestos (PAIS (30%) y adelanto de ganancias (35%)).")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922553925243117698/realapeso.png")
      .addField("Monto Original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv2, { locale: 'es-ES', code: ' ' }))
      .addField("Compra :flag_br:", 'BRL R$ ' + currencyFormatter.format((conv2 / real.data['compra']), { locale: 'es-ES', code: ' ' }), true)
      .addField("Venta :flag_br:", 'BRL R$ ' + currencyFormatter.format((conv2 / real.data['venta']), { locale: 'es-ES', code: ' ' }), true)
      .addField("Impuestos :flag_br: ", 'BRL R$ ' + currencyFormatter.format(( (conv2 / real.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
      
      return interaction.reply({ embeds: [embed] });
     
     })
      .catch((err) => {
      console.error('ERR', err)
     
           
     })
     
    }

    
    if (interaction.options.getSubcommand() === 'yen') {
      var conv5 = options.getNumber('ars')
      axios.get('https://api.exchangerate.host/latest')
  .then((YEN)=> {

   yen1=YEN.data['rates']['JPY']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Peso Argentino <:rightarrow:921907270747570247> Yen Japonés")
    .setColor("#FDFD0D")
    .setDescription("Pesos argentinos expresados en Yen japonés al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922556125809872936/yenapeso_1.png")
    .addField("Monto Original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :yen: ", 'JPY¥ ' + currencyFormatter.format(((conv5 * yen1)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :yen: ", 'JPY¥ ' + currencyFormatter.format(((conv5 * yen1) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :yen: ", 'JPY¥ ' + currencyFormatter.format((((conv5 * yen1) / EUR.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
    
    return interaction.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
  }

  
  if (interaction.options.getSubcommand() === 'libra') {
    var conv5 = options.getNumber('ars')
    axios.get('https://api.exchangerate.host/latest')
  .then((LIBRA)=> {

   libra1=LIBRA.data['rates']['GBP']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Peso Argentino <:rightarrow:921907270747570247> Libra Esterlina")
    .setColor("#D605F6")
    .setDescription("Pesos argentinos expresado en Libras esterlinas al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922561706838868049/libraapeso.png")
    .addField("Monto Original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :pound: ", 'GBP£ ' + currencyFormatter.format(((conv5 * libra1)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :pound: ", 'GBP£ ' + currencyFormatter.format(((conv5 * libra1) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :pound: ", 'GBP£ ' + currencyFormatter.format((((conv5 * libra1) / EUR.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
   
    return interaction.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

  }
  
  if (interaction.options.getSubcommand() === 'rublo') {
    var conv5 = options.getNumber('ars')
    axios.get('https://api.exchangerate.host/latest')
    .then((RUBLO)=> {
  
     rublo=RUBLO.data['rates']['RUB']
      axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
      .then((EUR)=> {
      const embed = new Discord.MessageEmbed()
      .setTitle("Peso Argentino <:rightarrow:921907270747570247> Rublo Ruso")
      .setColor("RED")
      .setDescription("Pesos argentinos expresado en Rublos rusos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928344880995008602/rubloapeso.png")
      .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
      .addField("Compra :flag_ru: ", 'RUB₽ ' + currencyFormatter.format(((conv5 * rublo)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
      .addField("Venta :flag_ru: ", 'RUB₽ ' + currencyFormatter.format(((conv5 * rublo) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
      .addField("Impuestos (65%) :flag_ru: ", 'RUB₽ ' + currencyFormatter.format((((conv5 * rublo) / EUR.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
      
      return interaction.reply({ embeds: [embed] });
     
     })
      .catch((err) => {
      console.error('ERR', err)
     
           
     })
    })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  }

  
  if (interaction.options.getSubcommand() === 'dolarcanadiense') {
    var conv5 = options.getNumber('ars')
    axios.get('https://api.exchangerate.host/latest')
    .then((CAD)=> {
  
     canadiense=CAD.data['rates']['CAD']
      axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
      .then((EUR)=> {
      const embed = new Discord.MessageEmbed()
      .setTitle("Peso Argentino <:rightarrow:921907270747570247> Dólar Canadiense")
      .setColor("#fc0201")
      .setDescription("Pesos argentinos expresado en dólares canadienses al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928345276857606194/cadapeso.png")
      .addField("PRECIO ORIGINAL :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
      .addField("COMPRA :flag_ca: ", 'CAD$ ' + currencyFormatter.format(((conv5 * canadiense)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
      .addField("VENTA :flag_ca: ", 'CAD$ ' + currencyFormatter.format(((conv5 * canadiense) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
      .addField("IMPUESTOS (65%) :flag_ca: ", 'CAD$ ' + currencyFormatter.format((((conv5 * canadiense) / EUR.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
     
      return interaction.reply({ embeds: [embed] });
     
     })
      .catch((err) => {
      console.error('ERR', err)
     
           
     })
    })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })

  }

  if (interaction.options.getSubcommand() === 'dolaraustraliano') {
    var conv5 = options.getNumber('ars')
    axios.get('https://api.exchangerate.host/latest')
  .then((AUD)=> {

   dolar=AUD.data['rates']['AUD']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Peso Argentino <:rightarrow:921907270747570247> Dólar Australiano")
    .setColor("#000346")
    .setDescription("Pesos argentinos expresado en dólares australianos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928345614805246013/audapeso.png")
    .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_au: ", 'AUD$ ' + currencyFormatter.format(((conv5 * dolar)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_au: ", 'AUD$ ' + currencyFormatter.format(((conv5 * dolar) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_au: ", 'AUD$ ' + currencyFormatter.format((((conv5 * dolar) / EUR.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
   

    return interaction.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

  }

  if (interaction.options.getSubcommand() === 'dolarneozelandes') {
    var conv5 = options.getNumber('ars')
    axios.get('https://api.exchangerate.host/latest')
  .then((NZD)=> {

   dolar=NZD.data['rates']['NZD']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Peso Argentino <:rightarrow:921907270747570247> Dólar Neozelandes")
    .setColor("#000346")
    .setDescription("Pesos argentinos expresado en dólares neozelandeses al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928348263235604560/nzapeso.png")
    .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compar :flag_nz: ", 'NZD$ ' + currencyFormatter.format(((conv5 * dolar)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_nz: ", 'NZD$ ' + currencyFormatter.format(((conv5 * dolar) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_nz: ", 'NZD$ ' + currencyFormatter.format((((conv5 * dolar) / EUR.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
    

    return interaction.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 


  }

  if (interaction.options.getSubcommand() === 'pesomexicano') {
    var conv5 = options.getNumber('ars')
    axios.get('https://api.exchangerate.host/latest')
    .then((mxn)=> {
  
     peso=mxn.data['rates']['MXN']
      axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
      .then((EUR)=> {
      const embed = new Discord.MessageEmbed()
      .setTitle("Peso Argentino <:rightarrow:921907270747570247> Peso Méxicano")
      .setColor("#24944c")
      .setDescription("Pesos argentinos expresado en Pesos méxicanos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928349418023968918/mxnapeso.png")
      .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
      .addField("Compra :flag_mx: ", 'MXN$ ' + currencyFormatter.format(((conv5 * peso)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
      .addField("Venta :flag_mx: ", 'MXN$ ' + currencyFormatter.format(((conv5 * peso) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
      .addField("Impuestos (65%) :flag_mx: ", 'MXN$ ' + currencyFormatter.format((((conv5 * peso) / EUR.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
      

      return interaction.reply({ embeds: [embed] });
     
     })
      .catch((err) => {
      console.error('ERR', err)
     
           
     })
    })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
   
  }

  
  if (interaction.options.getSubcommand() === 'pesochileno') {
    var conv5 = options.getNumber('ars')
    axios.get('https://api.exchangerate.host/latest')
    .then((CLP)=> {
  
     peso=CLP.data['rates']['CLP']
      axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
      .then((EUR)=> {
      const embed = new Discord.MessageEmbed()
      .setTitle("Peso Argentino <:rightarrow:921907270747570247> Peso Chileno")
      .setColor("#fa0100")
      .setDescription("Pesos argentinos expresado en pesos chilenos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928350035324842035/chileapeso.png")
      .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
      .addField("Compra :flag_cl: ", 'CLP$ ' + currencyFormatter.format(((conv5 * peso)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
      .addField("Venta :flag_cl: ", 'CLP$ ' + currencyFormatter.format(((conv5 * peso) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
      .addField("Impuestos (65%) :flag_cl: ", 'CLP$ ' + currencyFormatter.format((((conv5 * peso) / EUR.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)

      return interaction.reply({ embeds: [embed] });
     
     })
      .catch((err) => {
      console.error('ERR', err)
     
           
     })
    })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  }

  
  if (interaction.options.getSubcommand() === 'pesouruguayo') {
    var conv5 = options.getNumber('ars')
    axios.get('https://api.exchangerate.host/latest')
    .then((UYU)=> {
  
     peso=UYU.data['rates']['UYU']
      axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
      .then((EUR)=> {
      const embed = new Discord.MessageEmbed()
      .setTitle("Peso Argentino <:rightarrow:921907270747570247> Peso Uruguayo")
      .setColor("BLUE")
      .setDescription("Pesos argentinos expresado en pesos uruguayos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928350035744288878/uyuapeso.png")
      .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
      .addField("Compra :flag_uy: ", 'UYU$ ' + currencyFormatter.format(((conv5 * peso)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
      .addField("Venta :flag_uy: ", 'UYU$ ' + currencyFormatter.format(((conv5 * peso) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
      .addField("Impuestos (65%) :flag_uy: ", 'UYU$ ' + currencyFormatter.format((((conv5 * peso) / EUR.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
     
      return interaction.reply({ embeds: [embed] });
     
     })
      .catch((err) => {
      console.error('ERR', err)
     
           
     })
    })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  }
  if (interaction.options.getSubcommand() === 'pesocolombiano') {
    var conv5 = options.getNumber('ars')
    axios.get('https://api.exchangerate.host/latest')
    .then((COP)=> {
  
     pesos=COP.data['rates']['COP']
      axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
      .then((EUR)=> {
      const embed = new Discord.MessageEmbed()
      .setTitle("Peso Argentino <:rightarrow:921907270747570247> Peso Colombiano")
      .setColor("#fecb04")
      .setDescription("Pesos argentinos expresado en pesos colombianos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928349550970822716/copapeso.png")
      .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
      .addField("Compra :flag_co: ", 'COP$ ' + currencyFormatter.format(((conv5 * pesos)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
      .addField("Venta :flag_co: ", 'COP$ ' + currencyFormatter.format(((conv5 * pesos) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
      .addField("Impuestos (65%) :flag_co: ", 'COP$ ' + currencyFormatter.format((((conv5 * pesos) / EUR.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
     
      return interaction.reply({ embeds: [embed] });
     
     })
      .catch((err) => {
      console.error('ERR', err)
     
           
     })
    })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
   
  
  }

  if (interaction.options.getSubcommand() === 'boliviano') {
    var conv5 = options.getNumber('ars')
    axios.get('https://api.exchangerate.host/latest')
    .then((BOB)=> {
  
     peso=BOB.data['rates']['BOB']
      axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
      .then((EUR)=> {
      const embed = new Discord.MessageEmbed()
      .setTitle("Peso Argentino <:rightarrow:921907270747570247> Boliviano")
      .setColor("#6da544")
      .setDescription("Pesos argentinos expresado en bolivianos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928352180296122388/bolivianoapeso.png")
      .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
      .addField("Compra :flag_bo: ", 'BOB Bs. ' + currencyFormatter.format(((conv5 * peso)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
      .addField("Venta :flag_bo: ", 'BOB Bs.' + currencyFormatter.format(((conv5 * peso) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
      .addField("Impuestos (65%) :flag_bo: ", 'BOB Bs. ' + currencyFormatter.format((((conv5 * peso) / EUR.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
   
      return interaction.reply({ embeds: [embed] });
     
     })
      .catch((err) => {
      console.error('ERR', err)
     
           
     })
    })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  }

  if (interaction.options.getSubcommand() === 'sol') {
    var conv5 = options.getNumber('ars')
    axios.get('https://api.exchangerate.host/latest')
  .then((PEN)=> {

   sol=PEN.data['rates']['PEN']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Peso Argentino <:rightarrow:921907270747570247> Sol")
    .setColor("#cd0400")
    .setDescription("Pesos argentinos expresado en soles peruanos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928352555736633374/solapeso.png")
    .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_pe: ", 'PEN S/ ' + currencyFormatter.format(((conv5 * sol)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_pe: ", 'PEN S/ ' + currencyFormatter.format(((conv5 * sol) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_pe: ", 'PEN S/ ' + currencyFormatter.format((((conv5 * sol) / EUR.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)

    return interaction.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 
  }

  //Guarani

  if (interaction.options.getSubcommand() === 'guarani') {
    var conv5 = options.getNumber('ars')
  
    axios.get('https://api.exchangerate.host/latest')
  .then((PYG)=> {

   guarani=PYG.data['rates']['PYG']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Peso Argentino <:rightarrow:921907270747570247> Guaraní Paraguayo")
    .setColor("#d80027")
    .setDescription("Pesos argentinos expresado en guaranies paraguayos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928353654342299709/guaraniapeso.png")
    .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_py: ", 'PYG₲ ' + currencyFormatter.format(((conv5 * guarani)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_py: ", 'PYG₲ ' + currencyFormatter.format(((conv5 * guarani) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_py: ", 'PYG₲ ' + currencyFormatter.format((((conv5 * guarani) / EUR.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
   
    return interaction.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 
  }

  //Bolivar
  if (interaction.options.getSubcommand() === 'bolivar') {
    var conv5 = options.getNumber('ars')
    axios.get('https://api.exchangerate.host/latest')
  .then((VES)=> {

   bolivar=VES.data['rates']['VES']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((USD)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Peso Argentino <:rightarrow:921907270747570247> Bolivar Digital Venezolano")
    .setColor("RED")
    .setDescription("Pesos argentinos expresado en bolivares digitales venezolanos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928354779887960105/bolivarapeso.png")
    .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compar :flag_ve: ", 'VED B$ ' + currencyFormatter.format(((conv5 * bolivar)) / USD.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ve: ", 'VED B$ ' + currencyFormatter.format(((conv5 * bolivar) / USD.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ve: ", 'VED B$ ' + currencyFormatter.format((((conv5 * bolivar) / USD.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
    
    return interaction.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
  }

  if (interaction.options.getSubcommand() === 'yuan') {
    var conv5 = options.getNumber('ars')
    axios.get('https://api.exchangerate.host/latest')
    .then((CNY)=> {
  
     yuan=CNY.data['rates']['CNY']
      axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
      .then((EUR)=> {
      const embed = new Discord.MessageEmbed()
      .setTitle("Peso Argentino <:rightarrow:921907270747570247> Renminbi")
      .setColor("#cd0400")
      .setDescription("Pesos argentinos expresado en renminbi (yuanes) chinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928356456087048234/yuanapeso.png")
      .addField("Precio original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
      .addField("Compra :flag_cn: ", 'CNY¥ ' + currencyFormatter.format(((conv5 * yuan)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
      .addField("Venta :flag_cn: ", 'CNY¥ ' + currencyFormatter.format(((conv5 * yuan) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
      .addField("Impuestos (65%) :flag_cn: ", 'CNY¥ ' + currencyFormatter.format((((conv5 * yuan) / EUR.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
  
      return interaction.reply({ embeds: [embed] });
     
     })
      .catch((err) => {
      console.error('ERR', err)
     
           
     })
    })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  }

  if (interaction.options.getSubcommand() === 'rupia') {
    var conv5 = options.getNumber('ars')
    axios.get('https://api.exchangerate.host/latest')
  .then((INR)=> {

   rupia=INR.data['rates']['INR']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Peso Argentino <:rightarrow:921907270747570247> Rupia India")
    .setColor("#fc9836")
    .setDescription("Pesos argentinos expresado en rupias indias al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928356536307314718/indiaapeso.png")
    .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_in: ", 'INR₹ ' + currencyFormatter.format(((conv5 * rupia)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_in: ", 'INR₹ ' + currencyFormatter.format(((conv5 * rupia) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_in: ", 'INR₹ ' + currencyFormatter.format((((conv5 * rupia) / EUR.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
   
    return interaction.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 
  }

  if (interaction.options.getSubcommand() === 'won') {
    var conv5 = options.getNumber('ars')
    axios.get('https://api.exchangerate.host/latest')
    .then((KRW)=> {
  
     won=KRW.data['rates']['KRW']
      axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
      .then((EUR)=> {
      const embed = new Discord.MessageEmbed()
      .setTitle("Peso Argentino <:rightarrow:921907270747570247> Won Surcoreano")
      .setColor("#FFFFFF")
      .setDescription("Pesos argentinos expresado en won surcoreano al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928356536735117312/wonapeso.png")
      .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
      .addField("Compra :flag_kr: ", 'KRW ₩ ' + currencyFormatter.format(((conv5 * won)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
      .addField("Venta :flag_kr: ", 'KRW ₩ ' + currencyFormatter.format(((conv5 * won) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
      .addField("Impuestos (65%) :flag_kr: ", 'KRW ₩ ' + currencyFormatter.format((((conv5 * won) / EUR.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
    
      return interaction.reply({ embeds: [embed] });
     
     })
      .catch((err) => {
      console.error('ERR', err)
     
           
     })
    })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })

  }

  if (interaction.options.getSubcommand() === 'franco') {
    var conv5 = options.getNumber('ars')
    axios.get('https://api.exchangerate.host/latest')
    .then((suizo)=> {
  
     franco=suizo.data['rates']['CHF']
      axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
      .then((EUR)=> {
      const embed = new Discord.MessageEmbed()
      .setTitle("Peso Argentino <:rightarrow:921907270747570247> Franco Suizo")
      .setColor("#d80027")
      .setDescription("Pesos argentinos expresado en francos suizos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/930966649710985286/francoapeso.png")
      .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
      .addField("Compra :flag_ch: ", 'CHF Fr. ' + currencyFormatter.format(((conv5 * franco)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
      .addField("Venta :flag_ch: ", 'CHF Fr. ' + currencyFormatter.format(((conv5 * franco) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
      .addField("Impuestos (65%) :flag_ch: ", 'CHF Fr. ' + currencyFormatter.format((((conv5 * franco) / EUR.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
      
      return interaction.reply({ embeds: [embed] });
     
     })
      .catch((err) => {
      console.error('ERR', err)
     
           
     })
    })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
   
  }

  if (interaction.options.getSubcommand() === 'lira') {
    var conv5 = options.getNumber('ars')

    axios.get('https://api.exchangerate.host/latest')
    .then((turca)=> {
  
     lira=turca.data['rates']['TRY']
      axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
      .then((EUR)=> {
      const embed = new Discord.MessageEmbed()
      .setTitle("Peso Argentino <:rightarrow:921907270747570247> Lira Turca")
      .setColor("#d70224")
      .setDescription("Pesos argentinos expresado en liras turcas al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/930966650122014740/liraapeso.png")
      .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
      .addField("Compra :flag_tr: ", 'TRY₺ ' + currencyFormatter.format(((conv5 * lira)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
      .addField("Venta :flag_tr: ", 'TRY₺ ' + currencyFormatter.format(((conv5 * lira) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
      .addField("Impuestos (65%) :flag_tr: ", 'TRY₺ ' + currencyFormatter.format((((conv5 * lira) / EUR.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
   
      return interaction.reply({ embeds: [embed] });
     
     })
      .catch((err) => {
      console.error('ERR', err)
     
           
     })
    })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })

  }
  }
})

//Peso a cripto

client.on('interactionCreate', async(interaction) => {
  if(!interaction.isCommand()){
    return
  }

  const {commandName , options} = interaction
  if(commandName=="pesoacripto") {
    if (interaction.options.getSubcommand() === 'bitcoin') {
      var conv5 = options.getNumber('ars')
      axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=0')
  .then((BTC)=> {

    bitcoin=BTC.data['prices'][0][1]

 
   axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
    .then((USD)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Peso Argentino <:rightarrow:921907270747570247> Bitcoin ")
    .setColor("#fddc4d")
    .setDescription("Pesos expresado en bitcoins al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929076353079328868/bitcoinapeso.png")
    .addField("Monto original :flag_ar: ", 'ARS $ ' + conv5 )
    .addField("Compra <:bitcoin:929073179262074960> ", 'BTC ₿ ' + (((conv5/USD.data['compra']) / bitcoin )) ,true)
    .addField("Venta <:bitcoin:929073179262074960>", 'BTC ₿ ' + (((conv5/USD.data['compra']) / bitcoin) ) ,true)
    .addField("Impuestos (65%) <:bitcoin:929073179262074960>", 'BTC ₿ ' + ((((conv5/USD.data['compra']) / bitcoin)/1.65)) ,true)
   
    return interaction.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 



    }

//Ethereum

    if (interaction.options.getSubcommand() === 'ethereum') {
      var conv5 = options.getNumber('ars')
      axios.get('https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=0')
  .then((ETH)=> {

    ethereum=ETH.data['prices'][0][1]

 
   axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
    .then((USD)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Peso Argentino <:rightarrow:921907270747570247> Ethereum")
    .setColor("#7be0ff") 
    .setDescription("Pesos argentinos expresados en Ethereum al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/963885915619610714/convethereum.png")
    .addField("Monto original :flag_ar:   ", 'ARS$ ' + conv5 )
    .addField("Compra <:ethereum:963619533271232532>", 'ETH Ξ ' + (((conv5/USD.data['compra']) / ethereum )) ,true)
    .addField("Venta <:ethereum:963619533271232532>", 'ETH Ξ ' + (((conv5/USD.data['compra']) / ethereum ) ) ,true)
    .addField("Impuestos (65%)  <:ethereum:963619533271232532>", 'ETH Ξ ' + (((conv5/USD.data['compra']) / ethereum ) / 1.65) ,true)
   
    return interaction.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 



    }

  

   //Tether

   if (interaction.options.getSubcommand() === 'tether') {
    var conv5 = options.getNumber('ars')
    axios.get('https://api.coingecko.com/api/v3/coins/tether/market_chart?vs_currency=usd&days=0')
.then((ETH)=> {

  ethereum=ETH.data['prices'][0][1]


 axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
  .then((USD)=> {
  const embed = new Discord.MessageEmbed()
  .setTitle("Peso Argentino <:rightarrow:921907270747570247> Tether")
  .setColor("#27e19e") 
  .setDescription("Pesos argentinos expresado en Tether al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964377292568662107/convertirtether.png")
  .addField("Monto original :flag_ar: ", 'ARS$ ' + conv5 )
  .addField("Compra <:tether:964346292815945828>", 'USDT₮ ' + currencyFormatter.format((((conv5/USD.data['compra']) / ethereum )) , { locale: 'es-ES', code: ' ' }),true)
  .addField("Venta <:tether:964346292815945828>", 'USDT₮ ' + currencyFormatter.format((((conv5/USD.data['compra']) / ethereum ) ), { locale: 'es-ES', code: ' ' }),true)
  .addField("Impuestos (65%)  <:tether:964346292815945828>", 'USDT₮ ' + currencyFormatter.format((((conv5/USD.data['compra']) / ethereum ) / 1.65) , { locale: 'es-ES', code: ' ' }),true)
 
  return interaction.reply({ embeds: [embed] });
 
 })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
})
.catch((err) => {
console.error('ERR', err)

     
})

   }


  
//Axie Infinity
if (interaction.options.getSubcommand() === 'axieinfinity') {
var conv5 = options.getNumber('ars')
axios.get('https://api.coingecko.com/api/v3/coins/axie-infinity/market_chart?vs_currency=usd&days=0')
.then((ETH)=> {

ethereum=ETH.data['prices'][0][1]


axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
.then((USD)=> {
const embed = new Discord.MessageEmbed()
.setTitle("Peso Argentino <:rightarrow:921907270747570247> Axie Infinity")
.setColor("#555abe") 
.setDescription("Pesos argentinos expresado en Axie Infinity al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
.setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964380617485742100/convertiraxie.png")
.addField("Monto original :flag_ar: ", 'ARS$ ' + conv5 )
.addField("Compra  <:axieinfinity:964349059236257852>", 'AXS ' + (((conv5/USD.data['compra']) / ethereum )) ,true)
.addField("Venta  <:axieinfinity:964349059236257852>", 'AXS ' + (((conv5/USD.data['compra']) / ethereum ) ) ,true)
.addField("Impuestos (65%)   <:axieinfinity:964349059236257852>", 'AXS ' + (((conv5/USD.data['compra']) / ethereum ) / 1.65) ,true)

return interaction.reply({ embeds: [embed] });

})
.catch((err) => {
console.error('ERR', err)

   
})
})
.catch((err) => {
console.error('ERR', err)

 
})

}

//Terraluna 

if (interaction.options.getSubcommand() === 'terralunaclassic') {
var conv5 = options.getNumber('ars')
axios.get('https://api.coingecko.com/api/v3/coins/terra-luna/market_chart?vs_currency=usd&days=0')
.then((TL)=> {

terraluna=TL.data['prices'][0][1]


axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
.then((USD)=> {
const embed = new Discord.MessageEmbed()
.setTitle("Peso Argentino <:rightarrow:921907270747570247> Terra Luna Classic")
.setColor("#ffd83a") 
.setDescription("Pesos argentinos expresado en Terraluna al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
.setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964377293055209472/convertirterraluna.png")
.addField("Monto original :flag_ar:  ", 'ARS$ ' + conv5 )
.addField("Compra  <:terraluna:964349074016960532>", 'LUNC ' + (((conv5/USD.data['compra']) / terraluna )) ,true)
.addField("Venta  <:terraluna:964349074016960532>", 'LUNC ' + (((conv5/USD.data['compra']) / terraluna ) ) ,true)
.addField("Impuestos (65%)   <:terraluna:964349074016960532>", 'LUNC ' + (((conv5/USD.data['compra']) / terraluna ) / 1.65) ,true)

return interaction.reply({ embeds: [embed] });

})
.catch((err) => {
console.error('ERR', err)

   
})
})
.catch((err) => {
console.error('ERR', err)

 
})




}

if (interaction.options.getSubcommand() === 'terraluna') {
  var conv5 = options.getNumber('ars')
  axios.get('https://api.coingecko.com/api/v3/coins/terra-luna-2/market_chart?vs_currency=usd&days=0')
  .then((TL)=> {
  
  terraluna=TL.data['prices'][0][1]
  
  
  axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
  .then((USD)=> {
  const embed = new Discord.MessageEmbed()
  .setTitle("Peso Argentino <:rightarrow:921907270747570247> Terra Luna 2.0")
  .setColor("#ffd83a") 
  .setDescription("Pesos argentinos expresado en Terra Luna 2.0 al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/980239559428288592/convertirluna2.png")
  .addField("Monto original :flag_ar:  ", 'ARS$ ' + conv5 )
  .addField("Compra <:terraluna2_large:980222259471978526>  ", 'LUNA ' + (((conv5/USD.data['compra']) / terraluna )) ,true)
  .addField("Venta  <:terraluna2_large:980222259471978526>  ", 'LUNA ' + (((conv5/USD.data['compra']) / terraluna ) ) ,true)
  .addField("Impuestos (65%)  <:terraluna2_large:980222259471978526>  ", 'LUNA ' + (((conv5/USD.data['compra']) / terraluna ) / 1.65) ,true)
  
  return interaction.reply({ embeds: [embed] });
  
  })
  .catch((err) => {
  console.error('ERR', err)
  
     
  })
  })
  .catch((err) => {
  console.error('ERR', err)
  
   
  })
  
  
  
  
  }


  if (interaction.options.getSubcommand() === 'terrausdclassic') {
  var conv5 = options.getNumber('ars')
  axios.get('https://api.coingecko.com/api/v3/coins/terrausd/market_chart?vs_currency=usd&days=0')
.then((UST)=> {

ust=UST.data['prices'][0][1]


axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
.then((USD)=> {
const embed = new Discord.MessageEmbed()
.setTitle("Terra  USD <:rightarrow:921907270747570247> Peso Argentino")
.setColor("#5293f9")  
.setDescription("Dai expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
.setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/975221714126520430/convertirterra.png")
.addField("Monto original :flag_ar: ", 'ARS ' + conv5 )
.addField("Compra <:terrausd:975206586375106600>", 'USTC ' + currencyFormatter.format(((conv5*ust)) * USD.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
.addField("Venta <:terrausd:975206586375106600> ", 'USTC ' + currencyFormatter.format(((conv5*ust) * USD.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
.addField("Impuestos (65%) <:terrausd:975206586375106600> ", 'USTC ' + currencyFormatter.format((((conv5*ust) * USD.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)

return interaction.reply({ embeds: [embed] });

})
.catch((err) => {
console.error('ERR', err)

     
})
})
.catch((err) => {
console.error('ERR', err)

   
})




}
    

//Decentraland

if (interaction.options.getSubcommand() === 'decentraland') {
var conv5 = options.getNumber('ars')
axios.get('https://api.coingecko.com/api/v3/coins/decentraland/market_chart?vs_currency=usd&days=0')
.then((decentraland)=> {

mana=decentraland.data['prices'][0][1]


axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
.then((USD)=> {
const embed = new Discord.MessageEmbed()
.setTitle("Peso Argentino <:rightarrow:921907270747570247> Decentraland")
.setColor("#ffa6b7") 
.setDescription("Decentraland expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
.setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964380633042419722/convertirdecentraland.png")
.addField("Monto original :flag_ar: ", 'ARS$ ' + conv5 )
.addField("Compra <:decentraland:964349085089931324>", 'MANA ' + (((conv5/USD.data['compra']) / mana )) ,true)
.addField("Venta <:decentraland:964349085089931324>", 'MANA ' + (((conv5/USD.data['compra']) / mana) ) ,true)
.addField("Impuestos (65%) <:decentraland:964349085089931324>", 'MANA ' + (((conv5/USD.data['compra']) / mana ) / 1.65) ,true)

return interaction.reply({ embeds: [embed] });

})
.catch((err) => {
console.error('ERR', err)

   
})
})
.catch((err) => {
console.error('ERR', err)

 
})




}

//Solana

if (interaction.options.getSubcommand() === 'solana') {
var conv5 = options.getNumber('ars')
axios.get('https://api.coingecko.com/api/v3/coins/solana/market_chart?vs_currency=usd&days=0')
.then((solana)=> {

sol=solana.data['prices'][0][1]


axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
.then((USD)=> {
const embed = new Discord.MessageEmbed()
.setTitle("Peso Argentino <:rightarrow:921907270747570247> Solana")
.setColor("#2488ff")   
.setDescription("Pesos argentinos expresado en Solana al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
.setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964387064240046111/convertirsolana.png")
.addField("Monto original :flag_ar:  ", 'ARS$ ' + conv5 )
.addField("Compra <:solana:964349096775282738>", 'SOL◎ ' + (((conv5/USD.data['compra']) / sol )) ,true)
.addField("Venta <:solana:964349096775282738>", 'SOL◎ ' + (((conv5/USD.data['compra']) / sol ) ) ,true)
.addField("Impuestos (65%) <:solana:964349096775282738>", 'SOL◎' + (((conv5/USD.data['compra']) / sol) / 1.65) ,true)


return interaction.reply({ embeds: [embed] });

})
.catch((err) => {
console.error('ERR', err)

   
})
})
.catch((err) => {
console.error('ERR', err)

 
})




}

//DAi

if (interaction.options.getSubcommand() === 'dai') {
  var conv5 = options.getNumber('ars')
  axios.get('https://api.coingecko.com/api/v3/coins/dai/market_chart?vs_currency=usd&days=0')
.then((DAI)=> {

dai=DAI.data['prices'][0][1]


axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
.then((USD)=> {
const embed = new Discord.MessageEmbed()
.setTitle("Peso Argentino <:rightarrow:921907270747570247> Dai")
.setColor("#efc637")    
.setDescription("Pesos argentinos expresados en DAI al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
.setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964691273883742238/dai_1.png")
.addField("Monto original :flag_ar: ", 'ARS$ ' + conv5 )
.addField("Compra <:dai:964681594344443904>", 'DAI ' + currencyFormatter.format((((conv5/USD.data['compra']) / dai )) , { locale: 'es-ES', code: ' ' }),true)
.addField("Venta <:dai:964681594344443904>", 'DAI ' + currencyFormatter.format((((conv5/USD.data['compra']) / dai ) ) , { locale: 'es-ES', code: ' ' }),true)
.addField("Impuestos (65%) <:dai:964681594344443904>", 'DAI ' + currencyFormatter.format((((conv5/USD.data['compra']) / dai) / 1.65), { locale: 'es-ES', code: ' ' }),true)


return interaction.reply({ embeds: [embed] });

})
.catch((err) => {
console.error('ERR', err)

     
})
})
.catch((err) => {
console.error('ERR', err)

   
})




}

//Dogecoin

if (interaction.options.getSubcommand() === 'dogecoin') {
  var conv5 = options.getNumber('ars')
  axios.get('https://api.coingecko.com/api/v3/coins/dogecoin/market_chart?vs_currency=usd&days=0')
.then((DOGE)=> {

doge=DOGE.data['prices'][0][1]


axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
.then((USD)=> {
const embed = new Discord.MessageEmbed()
.setTitle("Peso Argentino <:rightarrow:921907270747570247> Dogecoin")
.setColor("#f5a431")    
.setDescription("Pesos expresado en Dogecoin al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
.setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964691274147979304/dogecoin_1.png")
.addField("Monto original :flag_ar: ", 'ARS$ ' + conv5 )
.addField("Compra <:dogecoin:964686144530939904>", 'DOGE Ð ' + currencyFormatter.format((((conv5/USD.data['compra']) / doge )) , { locale: 'es-ES', code: ' ' }),true)
.addField("Venta <:dogecoin:964686144530939904>", 'DOGE Ð ' + currencyFormatter.format((((conv5/USD.data['compra']) / doge ) ) , { locale: 'es-ES', code: ' ' }),true)
.addField("Impuestos (65%) <:dogecoin:964686144530939904>", 'DOGE Ð ' + currencyFormatter.format((((conv5/USD.data['compra']) / doge) / 1.65), { locale: 'es-ES', code: ' ' }),true)



return interaction.reply({ embeds: [embed] });

})
.catch((err) => {
console.error('ERR', err)

     
})
})
.catch((err) => {
console.error('ERR', err)

   
})




}


  }

}) 

//Peso a metal


client.on('interactionCreate', async(interaction) => {
  if(!interaction.isCommand()){
    return
  }

  const {commandName , options} = interaction
  if(commandName=="pesoametal") {
    if (interaction.options.getSubcommand() === 'oro') {

        var conv5 = options.getNumber('ars')
        axios.get('https://api.exchangerate.host/latest')
        .then((GOLD)=> {
      
         oro=GOLD.data['rates']['XAU']
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
          .then((EUR)=> {
          const embed = new Discord.MessageEmbed()
          .setTitle("Peso Argentino <:rightarrow:921907270747570247> Oro")
          .setColor("#fddc4d")
          .setDescription("Pesos argentinos en Oro al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
          .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964738102771990648/convertiroro.png")
          .addField("Monto Original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
          .addField("Compra <:goldingots:964717629484965938> ", 'XAU ' + (((conv5 * oro)) / EUR.data['compra']) ,true)
          .addField("Venta <:goldingots:964717629484965938> ", 'XAU ' + (((conv5 * oro) / EUR.data['venta'])) ,true)
          .addField("Impuestos (65%) <:goldingots:964717629484965938> ", 'XAU ' + ((((conv5 * oro) / EUR.data['venta']) / 1.65)) ,true)
          

          return interaction.reply({ embeds: [embed] });
         
         })
          .catch((err) => {
          console.error('ERR', err)
         
               
         })
        })
        .catch((err) => {
        console.error('ERR', err)
       
             
       })
      }

      if (interaction.options.getSubcommand() === 'plata') {

        var conv5 = options.getNumber('ars')
        axios.get('https://api.exchangerate.host/latest')
        .then((silver)=> {
      
         plata=silver.data['rates']['XAG']
          axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
          .then((EUR)=> {
          const embed = new Discord.MessageEmbed()
          .setTitle("Pesos Argentino <:rightarrow:921907270747570247> Plata")
          .setColor("#cccccc") 
          .setDescription("Pesos argentinos en Plata al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
          .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964739866707492884/convertirplata_1.png")
          .addField("Monto Original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
          .addField("Compra <:silver:964717593816600606> ", 'XAU ' + (((conv5 * plata)) / EUR.data['compra']) ,true)
          .addField("Venta <:silver:964717593816600606> ", 'XAU ' + (((conv5 * plata) / EUR.data['venta'])) ,true)
          .addField("Impuestos (65%) <:silver:964717593816600606> ", 'XAU ' + ((((conv5 * plata) / EUR.data['venta']) / 1.65)) ,true)
          
          return interaction.reply({ embeds: [embed] });
         
         })
          .catch((err) => {
          console.error('ERR', err)
         
               
         })
        })
        .catch((err) => {
        console.error('ERR', err)
       
             
       })
      }

  
//Paladio
if (interaction.options.getSubcommand() === 'paladio') {

var conv5 = options.getNumber('ars')
axios.get('https://api.exchangerate.host/latest')
.then((pd)=> {

 paladio=pd.data['rates']['XPD']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  .then((EUR)=> {
  const embed = new Discord.MessageEmbed()
  .setTitle("Peso Argentino <:rightarrow:921907270747570247> Paladio")
  .setColor("#808080") 
  .setDescription("Pesos Argentinos expresado en Paladio al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964739251159859230/convertirpaladio.png")
  .addField("Monto Original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
  .addField("Compra <:paladio:964717594223456336> ", 'XPD ' + (((conv5 * paladio)) / EUR.data['compra']) ,true)
  .addField("Venta <:paladio:964717594223456336> ", 'XPD ' + (((conv5 * paladio) / EUR.data['venta'])) ,true)
  .addField("Impuestos (65%) <:paladio:964717594223456336> ", 'XPD ' + ((((conv5 * paladio) / EUR.data['venta']) / 1.65)) ,true)
  

  return interaction.reply({ embeds: [embed] });
 
 })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
})
.catch((err) => {
console.error('ERR', err)

     
})
}

//Platino
if (interaction.options.getSubcommand() === 'platino') {

var conv5 = options.getNumber('ars')
axios.get('https://api.exchangerate.host/latest')
.then((pt)=> {

 platino=pt.data['rates']['XPT']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  .then((EUR)=> {
  const embed = new Discord.MessageEmbed()
  .setTitle("Peso Argentino <:rightarrow:921907270747570247> Platino")
  .setColor("#a9f8f7")  
  .setDescription("Pesos Argentinos expresado en Platino al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964739250899804180/convertirplatinoxd.png")
  .addField("Monto Original :flag_ar:  ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
  .addField("Compra <:platinum:964717592923222017> ", 'XPD ' + (((conv5 * platino)) / EUR.data['compra']) ,true)
  .addField("Venta <:platinum:964717592923222017> ", 'XPD ' + (((conv5 * platino) / EUR.data['venta'])) ,true)
  .addField("Impuestos (65%) <:platinum:964717592923222017> ", 'XPD ' + ((((conv5 * platino) / EUR.data['venta']) / 1.65)) ,true)
  

  return interaction.reply({ embeds: [embed] });
 
 })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
})
.catch((err) => {
console.error('ERR', err)

     
})
}
  }
})


 //Servicios
 

 client.on('interactionCreate', async(interaction) => {
  if(!interaction.isCommand()){
    return
  }

  const {commandName , options} = interaction
  if(commandName=="servicio") {

    if (interaction.options.getSubcommand() === 'netflix') {
      const embed = new Discord.MessageEmbed()
  .setTitle("Netflix")
  .setURL("https://www.netflix.com/ar/")
  .setDescription("Los precios de Netflix con impuestos en Argentina son los siguientes:")
  .setColor('#9a0611')
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903356797920894996/netflix_2.png")
  .addField("Básico:", "ARS$ 703,56 ")
  .addField("Estándar:", "ARS$ 1310,36 ")
  .addField("Premium:", "ARS$ 1966,36 ")

  return interaction.reply({ embeds: [embed] });
    }
    if (interaction.options.getSubcommand() === 'youtube') {
      const embed = new Discord.MessageEmbed()
  .setTitle("YouTube Premium")
  .setURL("https://www.youtube.com/premium")
  .setDescription("Los precios de YouTube Premium en Argentina con impuestos son los siguientes:")
  .setColor('#ff0000')
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903357207310127185/youtube.png")
  .addField("YouTube Music:", "ARS$ 162,36 ")
  .addField("YouTube Premium Individual:", "ARS$ 196,35 ")
  .addField("YouTube Premium Familiar:", "ARS$ 295,35 ")

  return interaction.reply({ embeds: [embed] });
    }
    if (interaction.options.getSubcommand() === 'spotify') {
      const embed = new Discord.MessageEmbed()
  .setTitle("Spotify")
  .setURL("https://www.spotify.com/ar/premium/")
  .setDescription("Los precios de Spotify Premium en Argentina con impuestos son los siguientes:")
  .setColor('#7ad684')
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903358342733389854/spotify_1.png")
  .addField("Individual:", "ARS$ 457,56 ")
  .addField("Dúo:", "ARS$ 637,96 ")
  .addField("Familiar:", "ARS$ 801,96 ")
  .addField("Estudiantes: ", "ARS$ 195,16 ")

  return interaction.reply({ embeds: [embed] });
    }
    if (interaction.options.getSubcommand() === 'crunchyroll') {
      const embed = new Discord.MessageEmbed()
      .setTitle("Crunchyroll")
      .setURL("https://www.crunchyroll.com/es")
      .setColor('#fec105')
      .setDescription("Precio  de Crunchyroll  con impuestos en Argentina")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903849721699913778/crunchyroll.png")
      .addField("Fan (1 MES):", "ARS$ 162,36",true)
      .addField("Mega Fan (1 Mes):", "ARS$ 205,00 ",true)
      .addField("Mega Fan (1 Año):", "ARS$ 2050,00 ",true)

      return interaction.reply({ embeds: [embed] });
    }

    if (interaction.options.getSubcommand() === 'disney') {
      const embed = new Discord.MessageEmbed()
      .setTitle("Disney+")
      .setURL("https://www.disneyplus.com/home")
      .setDescription("Debido a que Disney factura en Argentina, este no cobra impuestos internacionales.")
      .setColor('#3fa5dc')
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903852192929288213/icons8-disney-plus-480.png")
      .addField("1 Mes:", "ARS$ 385,00",true)
      .addField("1 Año:", "ARS$ 3850,00 ",true)
      .addField("Combo con Star+ mensual", "ARS$ 995,00 ",true)
      return interaction.reply({ embeds: [embed] });
     
    }

    //Xbox


    if (interaction.options.getSubcommand() === 'xboxgamepass') {
      const embed = new Discord.MessageEmbed()
  .setTitle("Xbox Game Pass")
  .setURL("https://www.xbox.com/es-AR/xbox-game-pass")
  .setDescription("Los precios de Xbox Game Pass con impuestos en Argentina son los siguientes:")
  .setColor('#a6ed75')
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903853195443445770/xbox.png")
  .addField("Xbox Game Pass primer mes", "ARS$ 63,96  ")
  .addField("Xbox Game Pass para PC", "ARS$ 982,36")
  .addField("Xbox Game Pass Ultimate", "ARS$ 1474,36 ")
  
  return interaction.reply({ embeds: [embed] });
    }

    //Prime Video
    if (interaction.options.getSubcommand() === 'primevideo') {
      const embed = new Discord.MessageEmbed()
      .setTitle("Prime Video")
      .setURL("https://www.primevideo.com/")
      .setDescription("El precio de  Prime Video con impuestos en Argentina es el siguiente:")
      .setColor('#1aa6e0')
      .setThumbnail("https://images.squarespace-cdn.com/content/v1/5dcd9a119133c421eadd4e73/1574287053801-RG0293YPJNWPKOV77KXW/ke17ZwdGBToddI8pDm48kPJXHKy2-mnvrsdpGQjlhod7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmrMDYraMJMCQwFxTSOIP7LpSBEQpA-g5k6VTjWbSuadHJq0dp98hg5AZvIaPb3DoM/Prime+Video+Icon.png")
      .addField("Costo mensual", "ARS$ 523,16  ")

      return interaction.reply({ embeds: [embed] });

    }

     //AppleTV

     if (interaction.options.getSubcommand() === 'appletv') {
      axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
      .then((oficial)=> {
      const embed = new Discord.MessageEmbed()
      .setTitle("Apple TV+")
      .setURL("https://www.apple.com/la/tv/")
      .setDescription("Los precios de Apple TV en Argentina son los siguientes:")
      .setColor('#eeeeee')
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913852356771319928/televisor_1.png")
      .addField("Plan individual", 'ARS$  ' + currencyFormatter.format(((9.95 * oficial.data['venta'])*1.64), { locale: 'es-ES', code: ' ' }) )
      .addField("Plan familiar", 'ARS$ ' + currencyFormatter.format(((13.95 * oficial.data['venta'])*1.64), { locale: 'es-ES', code: ' ' }) )
      return interaction.reply({ embeds: [embed] });
     
    })
    .catch((err) => {
    console.error('ERR', err)
    
         
    })
    
    }


    //HBO Max
    if (interaction.options.getSubcommand() === 'hbomax') {
    

  const embed1 = new Discord.MessageEmbed()
  .setTitle("HBO Max")
  .setURL("https://www.hbomax.com/latam/es")
  .setDescription("Precio de HBO Max  en  Argentina con impuestos")
  .setColor('#970899')
  .setThumbnail("https://hbomax-images.warnermediacdn.com/2020-05/square%20social%20logo%20400%20x%20400_0.png")
  .addField("Suscripción mensual estándar", "ARS$ 654,36  ")
  .addField("Suscripción mensual móvil", "ARS$ 457,56  ")
  .addField("Suscripción trimestral estándar", "ARS$ $1.785,96  ")
  .addField("Suscripción trimestral móvil", "ARS$ 1.211,96  ")
  .addField("Suscripción anual estándar", "ARS$ $3.737,56  ")
  .addField("Suscripción anual móvil", "ARS$ 5.738,36 ") 


  return interaction.reply({ embeds: [embed1] });
    
    }
//Nitro


 if (interaction.options.getSubcommand() === 'discordnitro') {
  axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
  .then((oficial)=> {

    const embed = new Discord.MessageEmbed()
  .setTitle("Discord Nitro")
  .setDescription("Los precios de Discord Nitro en Argentina son los siguientes:")
  .setColor('#8aa9fa')
  .setThumbnail("https://gitdab.com/distok/apkfuckery/raw/commit/ceffadc1723d227e61ee1001a624979fd9c783bb/com.discord/res/drawable-xxxhdpi/img_wumpus_jetpack.png")
  .addField("Discord Nitro Classic Mensual ", 'ARS$ ' + currencyFormatter.format((291.99 * 1.64), { locale: 'es-ES', code: ' ' }) )
  .addField("Discord Nitro Mensual ", 'ARS$ ' + currencyFormatter.format((584.99 *1.64), { locale: 'es-ES', code: ' ' }))
  .addField("Discord Nitro Classic Anual  ", 'ARS$ ' + currencyFormatter.format((2919.99 * 1.64), { locale: 'es-ES', code: ' ' }))
  .addField("Discord Nitro Anual  ", 'ARS$ ' + currencyFormatter.format((5849.99 * 1.64), { locale: 'es-ES', code: ' ' }))

  return interaction.reply({ embeds: [embed] });
 
})
.catch((err) => {
console.error('ERR', err)
    
})

}

//Google One

if (interaction.options.getSubcommand() === 'googleone') {

  axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
  .then((oficial)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Google One")
  .setDescription("Los precios de Google One mensual en Argentina son los siguientes:")
  .setColor('#f1bb1a')
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913859037764911174/icons8-google-one-500.png")
  .addField("Plan de 100GB (USD$ 1,99)", 'ARS$ ' + currencyFormatter.format(((1.99 * oficial.data['venta'])*1.64), { locale: 'es-ES', code: ' ' }) )
  .addField("Plan de 200GB (USD$ 2,99)", 'ARS$ ' + currencyFormatter.format(((2.99 * oficial.data['venta'])*1.64), { locale: 'es-ES', code: ' ' }))
  .addField("Plan de 1TB (USD$ 9.99)", 'ARS$ ' + currencyFormatter.format(((9.99 * oficial.data['venta'])*1.64), { locale: 'es-ES', code: ' ' }))
  
  const embed2 = new Discord.MessageEmbed()
  .setTitle("Google One")
  .setDescription("Los precios de Google One anual en Argentina son los siguientes:")
  .setColor('#f1bb1a')
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913859037764911174/icons8-google-one-500.png")
  .addField("Plan de 100GB (USD$ 19,99)", 'ARS$ ' + currencyFormatter.format(((19.99 * oficial.data['venta'])*1.64), { locale: 'es-ES', code: ' ' }) )
  .addField("Plan de 200GB (USD$ 29,99)", 'ARS$ ' + currencyFormatter.format(((29.99 * oficial.data['venta'])*1.64), { locale: 'es-ES', code: ' ' }))
  .addField("Plan de 1TB (USD$ 99,99)", 'ARS$ ' + currencyFormatter.format(((99.99 * oficial.data['venta'])*1.64), { locale: 'es-ES', code: ' ' }))
  

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("Mensual")
 .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("Anual")
 .setStyle("DANGER");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  


}

    //EA

    if (interaction.options.getSubcommand() === 'ea') {
      const embed = new Discord.MessageEmbed()
      .setTitle("EA Play")
      .setURL("https://store.steampowered.com/subscriptions/ea?l=latam")
      .setDescription("Los precios de EA Play con impuestos en Argentina son los siguientes:")
      .setColor('#fe4747')
      .setThumbnail("https://media.contentapi.ea.com/content/dam/eacom/es-mx/common/october-ea-ring.png")
      .addField("EA Play Mensual", "ARS$ 605,16  ")
      .addField("EA Play Anual:", "ARS$ 3.606,36")
   
      return interaction.reply({ embeds: [embed] });

    }

    //Steam

    if (interaction.options.getSubcommand() === 'steam') {
      const embed = new Discord.MessageEmbed()
  .setTitle("Fondos de la Cartera de Steam")
  .setURL("https://store.steampowered.com/steamaccount/addfunds")
  .setDescription("Los precios para recargar la cartera de Steam con impuestos en Argentina son los siguientes:")
  .setColor('#306fb5')
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913860761342836786/steam.png")
  .addField("ARS$ 100 ", "ARS$ 164,00  ")
  .addField("ARS$ 160 ", "ARS$ 262,40  ")
  .addField("ARS$ 400 ", "ARS$ 656,00  ")
  .addField("ARS$ 800 ", "ARS$ 1312,00  ")
  .addField("ARS$ 1600 ", "ARS$ 2624,00  ")
  .addField("ARS$ 3200 ", "ARS$ 5248,00  ")

  return interaction.reply({ embeds: [embed] });
 }

//Paramount

if (interaction.options.getSubcommand() === 'paramount') {
  const embed = new Discord.MessageEmbed()
  .setTitle("Paramount+")
  .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Paramount_Plus.svg/1920px-Paramount_Plus.svg.png")
  .setURL("https://www.paramountplus.com/ar/")
  .setDescription("Los precios de Paramount+ en Argentina con impuestos son los siguientes: ")
  .setColor('#0b67ff')
  .addField("Plan  mensual ", "ARS$ 299 ")

  return interaction.reply({ embeds: [embed] });

}

//Twitch

if (interaction.options.getSubcommand() === 'twitch') {
  axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
  .then((oficial)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Siscripciones de Twitch")
  .setURL("https://www.twitch.tv/")
  .setDescription("Los precios de las suscripciones a Twitch en Argentina son los siguientes:")
  .setColor('#9246ff')
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858126355091030036/twitch_icon_146081.png")
  .addField("Suscripción de nivel 1", 'ARS$ ' + currencyFormatter.format(((1.99 * oficial.data['venta'])*1.64), { locale: 'es-ES', code: ' ' }) )
  .addField("Suscripción de nivel 2", 'ARS$ ' + currencyFormatter.format(((3.99 * oficial.data['venta'])*1.64), { locale: 'es-ES', code: ' ' }))
  .addField("Suscripción de nivel 3", 'ARS$ ' + currencyFormatter.format(((9.99 * oficial.data['venta'])*1.64), { locale: 'es-ES', code: ' ' }))


  const embed2 = new Discord.MessageEmbed()
  .setTitle("Bits de Twitch")
  .setDescription("Los precios de los bits de Twitch en Argentina son los siguientes:")
  .setColor('#9246ff')
  .setURL("https://www.twitch.tv/")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858126355091030036/twitch_icon_146081.png")
  .addField("100 bits", 'ARS$ ' + currencyFormatter.format(((1.40 * oficial.data['venta'])*1.64), { locale: 'es-ES', code: ' ' }) )
  .addField("300 bits", 'ARS$ ' + currencyFormatter.format(((3.00 * oficial.data['venta'])*1.64), { locale: 'es-ES', code: ' ' }) )
  .addField("500 bits", 'ARS$ ' + currencyFormatter.format(((7.00 * oficial.data['venta'])*1.64), { locale: 'es-ES', code: ' ' }))
  .addField("1.500 bits", 'ARS$ ' + currencyFormatter.format(((19.95 * oficial.data['venta'])*1.64), { locale: 'es-ES', code: ' ' }))
  .addField("5.000 bits", 'ARS$ ' + currencyFormatter.format(((64.40 * oficial.data['venta'])*1.64), { locale: 'es-ES', code: ' ' }))
  .addField("10.000 bits", 'ARS$ ' + currencyFormatter.format(((126.00 * oficial.data['venta'])*1.64), { locale: 'es-ES', code: ' ' }))
  .addField("25.000 bits", 'ARS$ ' + currencyFormatter.format(((308.00 * oficial.data['venta'])*1.64), { locale: 'es-ES', code: ' ' }))


  
  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("Suscripciones")
 .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("Bits")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })

}

  }
  })

//Datos

client.on('interactionCreate', async(interaction) => {
  if(!interaction.isCommand()){
    return
  }

  const {commandName , options} = interaction
  if(commandName=="datos") {

    //Riesgo País

    if (interaction.options.getSubcommand() === 'riesgopais') {
      axios.get('https://api-dolar-argentina.herokuapp.com/api/riesgopais')
      .then((RIESGO)=> {
      const embed = new Discord.MessageEmbed()
      .setTitle("Riesgo País")
      .setColor("#e6306c")
      .setDescription("El riesgo país es todo riesgo inherente a las inversiones y a las financiaciones en un país en contraste con otro.")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903121332810690570/RiesgoPais.png")
      .addField("Valor :chart_with_upwards_trend: ", currencyFormatter.format(RIESGO.data['valor'], { locale: 'es-ES', code: ' ', precision: 0 }) + 'puntos' ,true)
     
      return interaction.reply({ embeds: [embed] });
   
     })
      .catch((err) => {
      console.error('ERR', err)
   
           
     })
   }

   //Reservas

   if (interaction.options.getSubcommand() === 'reservas') {
    axios.get('https://api-dolar-argentina.herokuapp.com/api/bcra/reservas')
    .then((RESERVAS)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Reservas del Banco Central de la República Argentina")
    .setColor("#9bcef7")
    .setDescription("Las reservas constituyen el componente más importante de los activos del Banco Central y se utilizan para financiar los pagos al exterior o para intervenir en el mercado cambiario.")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903122250708963358/bank.png")
    .addField("Valor :bank: ", 'USD ' + currencyFormatter.format(RESERVAS.data['valor'], { locale: 'es-ES', code: ' ' }) ,true)
   
    return interaction.reply({ embeds: [embed] });
  
   })
    .catch((err) => {
    console.error('ERR', err)
  
         
   })
  }

  //Circulante
  if (interaction.options.getSubcommand() === 'circulante') {

    axios.get('https://api-dolar-argentina.herokuapp.com/api/bcra/circulante')
    .then((CIRCULANTE)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Pesos Argentinos en circulación")
    .setColor("fad56f")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903124593483583499/money.png")
    .addField("Cantidad :money_with_wings: ", 'ARS ' + currencyFormatter.format(CIRCULANTE.data['valor'], { locale: 'es-ES', code: ' ' }) ,true)
    return interaction.reply({ embeds: [embed] });
  
   })
    .catch((err) => {
    console.error('ERR', err)
  
         
   })
  }



  }

    })


//Elecciones
client.on('interactionCreate', async(interaction) => {
  if(!interaction.isCommand()){
    return
  }
  const {commandName , options, subcommand} = interaction
  if(commandName === 'elecciones') {
    var restante = 365*1; //Años que faltan para el año de la elección (2023)
      var restanteL = 318; //Día  14/11  en el año (365)
      var restanteCL = 344; //Día 10/12  en el año (365)
      let currentDay;
      let fecha;
      fecha = new Date();
      //message.channel.send(fecha.toString());
      console.log(fecha)
      if(fecha.toString()[4]=="J" && fecha.toString()[5]=="a" && fecha.toString()[6]=="n"){
        currentDay=0
      }

      if(fecha.toString()[4]=="F" && fecha.toString()[5]=="e" && fecha.toString()[6]=="b"){
        currentDay=31
      }
      if(fecha.toString()[4]=="M" && fecha.toString()[5]=="a" && fecha.toString()[6]=="r"){
        currentDay=59
      }
      if(fecha.toString()[4]=="A" && fecha.toString()[5]=="p" && fecha.toString()[6]=="r"){
        currentDay=90
      }
      if(fecha.toString()[4]=="M" && fecha.toString()[5]=="a" && fecha.toString()[6]=="y"){

        currentDay=120
      }
      if(fecha.toString()[4]=="J" && fecha.toString()[5]=="u" && fecha.toString()[6]=="n"){

        currentDay=151
      }
      if(fecha.toString()[4]=="J" && fecha.toString()[5]=="u" && fecha.toString()[6]=="l"){

        currentDay=181
      }
      if(fecha.toString()[4]=="A" && fecha.toString()[5]=="u" && fecha.toString()[6]=="g"){
 
        currentDay=212
      }
      if(fecha.toString()[4]=="S" && fecha.toString()[5]=="e" && fecha.toString()[6]=="p"){

        currentDay=249
      }
      if(fecha.toString()[4]=="O" && fecha.toString()[5]=="c" && fecha.toString()[6]=="t"){
   
        currentDay=273
      }
      if(fecha.toString()[4]=="N" && fecha.toString()[5]=="o" && fecha.toString()[6]=="v"){
        
        currentDay=304
      }
      if(fecha.toString()[4]=="D" && fecha.toString()[5]=="e" && fecha.toString()[6]=="c"){
        
        currentDay=334
      }
      var day = 0;
 
      day= fecha.toString()[8] + fecha.toString()[9];

      day2 = parseInt(day)
      

      
      currentDay=currentDay+day2

      restante=restante+(344-currentDay)
  
      restanteL = restanteL - currentDay

      restanteCL=restanteCL-currentDay

      const embed = new Discord.MessageEmbed()
    .setTitle("Tiempo hasta las siguientes elecciones y cambios de gobierno")
    .setColor("0ECFE1")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/825432782360150047/votar_1.png")
    .addField("Elecciones presidenciales 2023 (27/10/2023) ", "Faltan " + (restante-44) + " días para las siguientes elecciones ejecutivas ")
    .addField("Cambio presidencial 2023 (10/12/2023) ", "Faltan " + restante + " días para el siguiente cambio presidencial ")

    return interaction.reply({ embeds: [embed] });
      
    
  }

  


})


client.on('interactionCreate', async(interaction) => {
  if(!interaction.isCommand()){
    return
  }
  const {commandName , options, subcommand} = interaction
  if(commandName === 'futbol') {

    var restante = 365*1; //Años que faltan para el año de la elección (2023)
    var restanteL = 318; //Día  14/11  en el año (365)
    var restanteCL = 344; //Día 10/12  en el año (365)
    let currentDay; //Sumar los meses
    let fecha; //Día actual
    fecha = new Date();
    //message.channel.send(fecha.toString());
    if(fecha.toString()[4]=="J" && fecha.toString()[5]=="a" && fecha.toString()[6]=="n"){
      currentDay=0
    }
    if(fecha.toString()[4]=="F" && fecha.toString()[5]=="e" && fecha.toString()[6]=="b"){
      currentDay=31
    }
    if(fecha.toString()[4]=="M" && fecha.toString()[5]=="a" && fecha.toString()[6]=="r"){
      currentDay=59
    }
    if(fecha.toString()[4]=="A" && fecha.toString()[5]=="p" && fecha.toString()[6]=="r"){
      currentDay=90
    }
    if(fecha.toString()[4]=="M" && fecha.toString()[5]=="a" && fecha.toString()[6]=="y"){

      currentDay=120
    }
    if(fecha.toString()[4]=="J" && fecha.toString()[5]=="u" && fecha.toString()[6]=="n"){

      currentDay=151
    }
    if(fecha.toString()[4]=="J" && fecha.toString()[5]=="u" && fecha.toString()[6]=="l"){

      currentDay=181
    }
    if(fecha.toString()[4]=="A" && fecha.toString()[5]=="u" && fecha.toString()[6]=="g"){

      currentDay=212
    }
    if(fecha.toString()[4]=="S" && fecha.toString()[5]=="e" && fecha.toString()[6]=="p"){

      currentDay=249
    }
    if(fecha.toString()[4]=="O" && fecha.toString()[5]=="c" && fecha.toString()[6]=="t"){
 
      currentDay=273
    }
    if(fecha.toString()[4]=="N" && fecha.toString()[5]=="o" && fecha.toString()[6]=="v"){
      
      currentDay=304
    }
    if(fecha.toString()[4]=="D" && fecha.toString()[5]=="e" && fecha.toString()[6]=="c"){
      
      currentDay=334
    }
    var day = 0;

    day= fecha.toString()[8] + fecha.toString()[9]; //Día actual

    day2 = parseInt(day) //Convertir a número
  
    currentDay=currentDay+day2 //Día actual en número sumando mes y día

    restante=restante+(344-currentDay)

    restanteL = restanteL - currentDay

    restanteCL=restanteCL-currentDay


    let fd = fecha.toString;
    const embed = new Discord.MessageEmbed()
  .setTitle("Tiempo hasta los siguientes partidos de la selección Argentina")
  .setColor("#7eb2fa")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929121012275093524/camiseta-de-futbol.png")
  .addField("  :flag_ar: vs :flag_sa: \n(22/11/2022) ", "Faltan " + (326 -currentDay) + " días ",true)
  .addField("  :flag_ar: vs :flag_mx: \n(26/11/2022) ", "Faltan " + (330 -currentDay) + " días ",true)
  .addField("  :flag_ar: vs :flag_pl: \n(30/11/2022) ", "Faltan " + (334 -currentDay) + " días ",true)

  return interaction.reply({ embeds: [embed] });
    
  }


})

//Provincia

client.on('interactionCreate', async(interaction) => {
  if(!interaction.isCommand()){
    return
  }
  const {commandName , options, subcommand} = interaction
  if(commandName === 'provinciainfo') {
        var provincia = options.getString('provincia')
        
        console.log(provincia)
        if (provincia!=null) {
        var provincia2 = provincia.toLowerCase()
        }
        if (provincia==null) {
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

          if (provincia2=="caba" || provincia2=="ciudad autonoma de buenos aires") {
            const embed1 = new Discord.MessageEmbed()
            .setTitle("Ciudad Autonoma de Buenos Aires (CABA)")
            .setURL("https://es.wikipedia.org/wiki/Provincia_de_Buenos_Aires")
            .setDescription("Buenos Aires es la gran capital cosmopolita de Argentina. Su centro es la Plaza de Mayo, rodeada de imponentes edificios del siglo XIX, incluida la Casa Rosada, el icónico palacio presidencial que tiene varios balcones. Entre otras atracciones importantes, se incluyen el Teatro Colón, un lujoso teatro de ópera de 1908 con cerca de 2,500 asientos, y el moderno museo MALBA, que exhibe arte latinoamericano.  \n  La Ciudad de Buenos Aires fue cedida en 1880 por la Provincia de Buenos Aires para que fuera la capital federal del país. En virtud de la reforma constitucional de 1994 goza de un régimen de autonomía.")
            .setColor('#FCFCFC')
            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Bandera_de_la_Ciudad_de_Buenos_Aires.svg/662px-Bandera_de_la_Ciudad_de_Buenos_Aires.svg.png")
            .addField("Jefe de Gobierno ", "Horacio Rodríguez Larreta  ",true)
            .addField("Área metropolitana ", "Gran Buenos Aires ",true)
            .addField("Subdivisiones ", "15 comunas\n48 barrios ",true)
            .addField("Fundación ", "2 de febrero de 1536 (por Pedro de Mendoza)\n 11 de junio de 1580 (por Juan de Garay) ",true)
            .addField("Autonomía ", "Desde la Reforma Constitucional de 1994 ",true)
            .addField("Superficie ", "203 km² ",true)
            .addField("Población (2010) ", "3.075.646 hab. ",true)
            .addField("Gentillicio ", "Porteño/a ",true)
            .addField("Clima ", "Subtropical húmedo ",true)
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


        if (provincia2=="buenos aires" || provincia2=="ba") {
          const embed1 = new Discord.MessageEmbed()
          .setTitle("Buenos Aires  (BA)")
          .setURL("https://es.wikipedia.org/wiki/Provincia_de_Buenos_Aires")
          .setDescription("Buenos Aires es la provincia más grande y más poblada de Argentina. Su nombre proviene de la capital del país, la Ciudad  Autonoma de Buenos Aires,  que solía ser parte de la provincia hasta su federalización en 1880. \n El conquistador español Pedro de Mendoza dio ese nombre a la ciudad en honor a la patrona católica de los navegantes sevillanos, Nuestra Señora del Buen Ayre, también del Buen Aire o la virgen Bonaira.")
          .setColor('#0b67ff')
          .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Bandera_de_la_Provincia_de_Buenos_Aires.svg/1280px-Bandera_de_la_Provincia_de_Buenos_Aires.svg.png")
          .addField("Gobernador ", "Alex Kicillof ",true)
          .addField("Capital ", "La Plata ",true)
          .addField("Ciudad más poblada ", "La Matanza ",true)
          .addField("Fundación ", "2 de febrero de 1536 \n 11 de junio de 1580 (por Juan de Garay) ",true)
          .addField("Declaración de autonomía ", "16 de febrero de 1820 ",true)
          .addField("Superficie ", "307.571 km²",true)
          .addField("Población (2015) ", "18.004.120 hab.",true)
          .addField("Gentillicio ", "Bonaerense ",true)
          .addField("Clima ", "Templado húmedo (clima pampeano) ",true)
          .setFooter("Para ver información de la Ciudad Autonoma de Buenos Aires prueba con /provinciainfo CABA ")
        
          const embed2 = new Discord.MessageEmbed()
          .setTitle("Ubicación de Buenos Aires")
          .setURL("https://www.google.com.ar/maps/place/Provincia+de+Buenos+Aires/@-37.1243654,-62.2683371,7z/data=!3m1!4b1!4m5!3m4!1s0x95edbcb7595281d9:0x4ad309fcdcf0a144!8m2!3d-37.2017285!4d-59.8410697")
          .setDescription("El territorio está en la región este del país; limita al norte con las provincias de Santa Fe y Entre Ríos, al noreste con el Río de la Plata y la Ciudad Autónoma de Buenos Aires,9​ al este y sur con el mar Argentino del océano Atlántico, al suroeste con Río Negro, al oeste con la Provincia de La Pampa y al noroeste con la Provincia de Córdoba.")
          .setColor('#0b67ff')
          .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Buenos_Aires_Province_in_Argentina_%28%2BFalkland_hatched%29.svg/800px-Buenos_Aires_Province_in_Argentina_%28%2BFalkland_hatched%29.svg.png")
          .setFooter("Para ver información de la Ciudad Autonoma de Buenos Aires prueba con /provinciainfo CABA")
        
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

        if (provincia2=="catamarca" || provincia2=="ca") {
          const embed1 = new Discord.MessageEmbed()
  .setTitle("Catamarca  (CA)")
  .setURL("https://es.wikipedia.org/wiki/Provincia_de_Catamarca")
  .setDescription("Catamarca es una de las 23 provincias de Argentina ubicada  al noroeste del país. Su capital es San Fernando del Valle de Catamarca, y otras ciudades importantes son Andalgalá,  Tinogasta y Belén. \n Su economía es una de las más diversificadas del país, ocupándose fundamentalmente de la minería, la industria, el comercio, el turismo, la ganadería y la agricultura. Además ocupa el puesto puesto número 12 en el ranking de desarrollo humano de las jurisdicciones de primer orden​ argentinas.")
  .setColor('#F00505')
  .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Bandera_de_la_Provincia_de_Catamarca.svg/800px-Bandera_de_la_Provincia_de_Catamarca.svg.png")
  .addField("Gobernador ", "Raúl Jalil ",true)
  .addField("Capital ", "San Fernando del Valle de Catamarca ",true)
  .addField("Ciudad más poblada ", "San Fernando del Valle de Catamarca ",true)
  .addField("Fundación ", "1554 ",true)
  .addField("Declaración de autonomía ", "25 de agosto de 1821 ",true)
  .addField("Superficie ", "102.602 km²",true)
  .addField("Población (2015) ", "396 895 hab. ",true)
  .addField("Gentillicio ", "Catamarqueño/ña ",true)
  .addField("Clima ", "Cálido y árido ",true)

  const embed2 = new Discord.MessageEmbed()
  .setTitle("Ubicación de Catamarca")
  .setURL("https://www.google.com.ar/maps/place/Catamarca/data=!4m2!3m1!1s0x94205dc5020ad4bd:0x3257c3237d6cc2dc?sa=X&ved=2ahUKEwji1LntjpDxAhX9r5UCHV3YBqoQ8gEwAHoECAcQAQ")
  .setDescription("Está ubicada al noroeste del país, en la región del Norte Grande Argentino, limitando al norte con Salta, al este con Tucumán y Santiago del Estero, al sureste con Córdoba, al sur con La Rioja y al oeste con Chile, cuyo límite está determinado por la divisoria de agua de la cordillera de los Andes.")
  .setColor('#F00505')
  .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Catamarca_in_Argentina_%28%2BFalkland_hatched%29.svg/352px-Catamarca_in_Argentina_%28%2BFalkland_hatched%29.svg.png")

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

        if (provincia2=="chaco" || provincia2=="ch") {
          const embed1 = new Discord.MessageEmbed()
  .setTitle("Chaco  (CH)")
  .setURL("https://es.wikipedia.org/wiki/Provincia_del_Chaco")
  .setDescription("Chaco es una de las 23 provincias de Argentina ubicada al noreste del país. Su capital y ciudad más grande es Resistencia. \nSe la considera «joven» porque fue creada luego de la Organización Nacional. Su economía se apoya en el sector primario, donde se destacan los cultivos de algodón, soja, la producción de ganado vacuno y la extracción de madera. \nCuenta con una de las mayores poblaciones originarias del país, integrada por wichís, qom y mocovíes. Además de la población de origen indígena, el territorio de la actual provincia recibió inmigrantes de otras provincias y países. Actualmente hay descendientes de búlgaros, checos, croatas, eslovacos, españoles, italianos, paraguayos y montenegrinos.")
  .setColor('#1cb062')
  .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Bandera_de_la_Provincia_del_Chaco.svg/728px-Bandera_de_la_Provincia_del_Chaco.svg.png")
  .addField("Gobernador ", "Jorge Capitanich ",true)
  .addField("Capital ", "Resistencia ",true)
  .addField("Ciudad más poblada ", "Gran Resistencia ",true)
  .addField("Fundación ", "14 de abril de 1585 ",true)
  .addField("Declaración de autonomía ", "8 de agosto de 1951 ",true)
  .addField("Superficie ", "99.633 km²",true)
  .addField("Población (2015) ", "1.192.616 hab. ",true)
  .addField("Gentillicio ", "chaqueño/ña ",true)
  .addField("Clima ", "Tropical semiárido y tropical húmedo  ",true)


  const embed2 = new Discord.MessageEmbed()
  .setTitle("Ubicación de Chaco")
  .setURL("https://www.google.com.ar/maps/place/Chaco/data=!4m2!3m1!1s0x9440effae3c87247:0x4eaf96c0979eec95?sa=X&ved=2ahUKEwi_i5-2k5DxAhUfqZUCHZlCAo4Q8gEwAHoECAcQAQ")
  .setDescription("Está ubicada en el noreste del país, en la región del Norte Grande Argentino, limitando al norte con los ríos Bermejo y Teuco que la separan de Formosa, al este con los ríos Paraguay y Paraná que la separan, respectivamente, de la República del Paraguay y la provincia de Corrientes, al sur con Santa Fe, al oeste con Santiago del Estero y al noroeste con la provincia de Salta.")
  .setColor('#1cb062')
  .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Chaco_in_Argentina_%28%2BFalkland%29.svg/270px-Chaco_in_Argentina_%28%2BFalkland%29.svg.png")

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
        if (provincia2=="chubut" || provincia2=="ct") {
          const embed1 = new Discord.MessageEmbed()
          .setTitle("Chubut  (CT)")
          .setURL("https://es.wikipedia.org/wiki/Provincia_del_Chubut")
          .setDescription("Chubut es una de las 23 provincias de Argentina ubicada al sur del país. Su capital es Rawson y su ciudad más poblada es Comodoro Rivadavia. La actividad económica más importante es la explotación de hidrocarburos fósiles no renovables (petróleo, gas butano). Chubut produce el 13 % del petróleo del país y casi el 2 % del gas. Existen minas e importantes -a nivel mundial- yacimientos de uranio, plomo, oro y plata.")
          .setColor('#1f699f')
          .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bandera_de_la_Provincia_del_Chubut.svg/800px-Bandera_de_la_Provincia_del_Chubut.svg.png")
          .addField("Gobernador ", "Mariano Arcioni  ",true)
          .addField("Capital ", "	Rawson ",true)
          .addField("Ciudad más poblada ", "Comodoro Rivadavia ",true)
          .addField("Fundación ", "28 de julio de 1865 ",true)
          .addField("Declaración de autonomía ", "16 de octubre de 1884  (Territorio Nacional)\n 15 de junio de 1955(Provincialización) ",true)
          .addField("Superficie ", "224.686 km²",true)
          .addField("Población (2017) ", "587.956 hab. ",true)
          .addField("Gentillicio ", "Chubutense ",true)
          .addField("Clima ", "Frío y húmedo  ",true)
        
          const embed2 = new Discord.MessageEmbed()
          .setTitle("Ubicación de Chubut")
          .setURL("https://www.google.com.ar/maps/place/Chubut/data=!4m2!3m1!1s0xbde2a3c6a2577047:0xdad4458e4b26a228?sa=X&ved=2ahUKEwj2q4SrwJDxAhUmrpUCHUtEBmQQ8gEwAHoECAYQAQ")
          .setDescription("Está ubicada al centrosur de la región patagónica (entre los paralelos 42 y 46 de latitud sur), que ocupa la mitad sur del país, limitando al norte con Río Negro, al este con el mar Argentino (océano Atlántico), al sur con Santa Cruz y al oeste con Chile, cuyo límite está determinado por la divisoria de agua de la cordillera de los Andes.")
          .setColor('#1f699f')
          .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Chubut_in_Argentina_%28%2BFalkland_hatched%29.svg/352px-Chubut_in_Argentina_%28%2BFalkland_hatched%29.svg.png")
        
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

        if (provincia2=="cordoba" || provincia2=="cb" ||  provincia2=="córdoba") {
          const embed1 = new Discord.MessageEmbed()
          .setTitle("Córdoba (CB)")
          .setURL("https://es.wikipedia.org/wiki/Provincia_de_C%C3%B3rdoba_(Argentina)")
          .setDescription("Córdoba es una de las 23 provincias de Argentina ubicada en el centro del país. Es la segunda provincia más poblada después de Buenos Aires. \nLa economía de la provincia de Córdoba se ve beneficiada por numerosos factores. Sus características climáticas, topográficas, edáficas y fitogeográficas favorecen varias actividades productivas como la agricultura, ganadería, explotación forestal y minería.\nEl turismo, junto con la industria y los servicios, es una de las principales actividades económicas de la provincia, por lo que las inversiones en infraestructura turística son fomentadas por la Ley de Fomento Turístico N.º 7232 y sus Decretos Reglamentarios N.º 4557/85 y N.º 1360/00.")
          .setColor('#991426')
          .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bandera_de_la_Provincia_de_C%C3%B3rdoba_2014.svg/800px-Bandera_de_la_Provincia_de_C%C3%B3rdoba_2014.svg.png")
          .addField("Gobernador ", "Juan Schiaretti   ",true)
          .addField("Capital ", "	Córdoba ",true)
          .addField("Ciudad más poblada ", "Gran Córdoba ",true)
          .addField("Fundación ", "6 de julio de 1573 ",true)
          .addField("Declaración de autonomía ", "5 de enero de 1820  ",true)
          .addField("Superficie ", "165.310 km²",true)
          .addField("Población (2020) ", "3.760.450 hab. ",true)
          .addField("Gentillicio ", "Cordobés/sa ",true)
          .addField("Clima ", "Templado moderado  ",true)
        
          const embed2 = new Discord.MessageEmbed()
          .setTitle("Ubicación de Córdoba")
          .setURL("https://www.google.com.ar/maps/place/C%C3%B3rdoba/data=!4m2!3m1!1s0x9432985f478f5b69:0xb0a24f9a5366b092?sa=X&ved=2ahUKEwj87e-HxJDxAhUbrpUCHTttBSMQ8gEwAHoECAcQAQ")
          .setDescription("Está ubicada en centro geográfico del país, al oeste de la región Centro de Argentina, limitando al norte con Catamarca y Santiago del Estero, al este con Santa Fe, al sureste con la Provincia de Buenos Aires, al sur con Provincia de La Pampa y al oeste con San Luis y La Rioja")
          .setColor('#991426')
          .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Cordoba_in_Argentina_%28%2BFalkland_hatched%29.svg/800px-Cordoba_in_Argentina_%28%2BFalkland_hatched%29.svg.png")
      
        
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
        if (provincia2=="corrientes" || provincia2=="cr") {

          const embed1 = new Discord.MessageEmbed()
          .setTitle("Corrientes (CR)")
          .setURL("https://es.wikipedia.org/wiki/Provincia_de_Corrientes")
          .setDescription("Corrientes es una de las 23 provincias de Argentina ubicada en el centro del país.\n En el aspecto histórico de la construcción del Estado Argentino, es una de las provincias más antiguas del territorio argentino y una de las catorce provincias fundadoras de la Confederación Argentina.")
          .setColor('#76abdc')
          .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bandera_de_la_Provincia_de_Corrientes.svg/300px-Bandera_de_la_Provincia_de_Corrientes.svg.png")
          .addField("Gobernador ", "Gustavo Valdés ",true)
          .addField("Capital ", "Corrientes ",true)
          .addField("Ciudad más poblada ", "Corrientes ",true)
          .addField("Fundación ", "3 de abril de 1588 ",true)
          .addField("Declaración de autonomía ", "20 de abril de 1814  ",true)
          .addField("Superficie ", "88.199 km²",true)
          .addField("Población (2020) ", "1.111.052 hab. ",true)
          .addField("Gentillicio ", "Correntino/na ",true)
          .addField("Clima ", "Subtropical  ",true)

        
          const embed2 = new Discord.MessageEmbed()
          .setTitle("Ubicación de Corrientes")
          .setURL("https://www.google.com.ar/maps/place/Corrientes/data=!4m2!3m1!1s0x94456b79d5bed36b:0xfa999f1ef3b40646?sa=X&ved=2ahUKEwj9ko3yyJDxAhWElZUCHd26AJUQ8gEwAHoECAcQAQ")
          .setDescription("Está ubicada geográficamente al noreste del país, en la región del Norte Grande Argentino, limitando al oeste y norte con el río Paraná que la separa de Santa Fe, Chaco y Paraguay, al noreste con Misiones, al este con el río Uruguay que la separa de Brasil y Uruguay, y al sur con Entre Ríos.")
          .setColor('#76abdc')
          .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Corrientes_in_Argentina_%28%2BFalkland%29.svg/352px-Corrientes_in_Argentina_%28%2BFalkland%29.svg.png")
    
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

        if (provincia2=="entre ríos" || provincia2=="entre rios" || provincia2=="er") {
          
          const embed1 = new Discord.MessageEmbed()
          .setTitle("Entre Ríos (ER)")
          .setURL("https://es.wikipedia.org/wiki/Provincia_de_Entre_R%C3%ADos")
          .setDescription("Entre Ríos es una de las 23 provincias de Argentina ubicada en el centro del país localizada en la región mesopotámica del país. \nEs un componente (el más meridional) de la Mesopotamia argentina, conformada por los ríos Uruguay y Paraná en el Litoral argentino. Un 15 por ciento de su territorio está compuesto de islas y tierras anegadizas. A menudo se la considera como una provincia «insular», por estar rodeada por ríos y arroyos.\nLa actividad económica de la provincia se sustenta principalmente en la agricultura, la ganadería y el turismo y en menor medida en la minería y la industria.")
          .setColor('#991426')
          .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Bandera_de_la_Provincia_de_Entre_R%C3%ADos.svg/800px-Bandera_de_la_Provincia_de_Entre_R%C3%ADos.svg.png")
          .addField("Gobernador ", "Gustavo Bordet",true)
          .addField("Capital ", "Paraná ",true)
          .addField("Ciudad más poblada ", "Gran Paraná ",true)
          .addField("Fundación ", "16 de diciembre de 1617",true)
          .addField("Declaración de autonomía ", "23 de abril de 1814  ",true)
          .addField("Superficie ", "78.781 km²",true)
          .addField("Población (2019) ", "1.405.890 hab. ",true)
          .addField("Gentillicio ", "Entrerriano/na ",true)
          .addField("Clima ", "Templado  ",true)
  
        
          const embed2 = new Discord.MessageEmbed()
          .setTitle("Ubicación de Entre Ríos")
          .setURL("https://www.google.com.ar/maps/place/Entre+R%C3%ADos/@-32.0795951,-61.531722,7z/data=!3m1!4b1!4m5!3m4!1s0x95a551ddba482fbf:0x69284bf0dcd46382!8m2!3d-32.5175643!4d-59.1041758")
          .setDescription("Ubicada al este de la región Centro de Argentina, limita al norte con Corrientes, al este con el Río Uruguay que la separa de Uruguay, al sur y oeste con el Río Paraná que la separa de la Provincia de Buenos Aires y Santa Fe.")
          .setColor('#991426')
          .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Entre_Rios_in_Argentina_%28%2BFalkland_hatched%29.svg/352px-Entre_Rios_in_Argentina_%28%2BFalkland_hatched%29.svg.png")
  
        
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

        if (provincia2=="formosa" || provincia2=="fo") {
          const embed1 = new Discord.MessageEmbed()
  .setTitle("Formosa (FO)")
  .setURL("https://es.wikipedia.org/wiki/Provincia_de_Formosa")
  .setDescription("Formosa es una de las 23 provincias de Argentina ubicada en el noreste de Argentina.\nHabitada ancestralmente por varias tribus de origen pámpido y amazónico, el primer europeo arriba al territorio en 1528. La belicosidad de los nativos obligó a todos los intentos colonizadores a postergar su intento de ocupación. Luego de la Revolución de Mayo y las guerras de la Independencia, se mantuvo aislada, solo ocasionalmente habitada por obrajeros que arribaban a su territorio en busca de maderas. La Guerra de la Triple Alianza, en la que Paraguay fue atacado por Brasil, Argentina y Uruguay, despertó el interés del gobierno de la República Argentina de ocupar el mismo hacia la década de 1870.\nLa economía privada es esencialmente primaria, estando basada en la cría de ganado y en la agricultura.")
  .setColor('#76abdc')
  .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Bandera_de_la_Provincia_de_Formosa.svg/550px-Bandera_de_la_Provincia_de_Formosa.svg.png")
  .addField("Gobernador ", "Gildo Insfrán",true)
  .addField("Capital ", "Formosa ",true)
  .addField("Ciudad más poblada ", "Formosa ",true)
  .addField("Fundación ", " 8 de abril de 1879",true)
  .addField("Declaración de autonomía ", "15 de junio de 1955  ",true)
  .addField("Superficie ", "72.066 km²",true)
  .addField("Población (2017) ", "595.280 hab. ",true)
  .addField("Gentillicio ", "Formoseño/ña ",true)
  .addField("Clima ", "Tropical  ",true)


  const embed2 = new Discord.MessageEmbed()
  .setTitle("Ubicación de Entre Ríos")
  .setURL("https://www.google.com.ar/maps/place/Formosa/@-26.172139,-58.2650102,12z/data=!3m1!4b1!4m5!3m4!1s0x945ca5e488cf4f05:0xbcaebe65a1bae72!8m2!3d-26.1857768!4d-58.1755669")
  .setDescription("Está ubicada en el noreste del país, en la región del Norte Grande Argentino, limitando al norte con el río Pilcomayo que la separa de Paraguay, al este con el río Paraguay que la separa de nuevo de Paraguay, al sur con los ríos Bermejo y Teuco que la separan de Chaco, y al oeste con Salta, mediante un meridiano.")
  .setColor('#76abdc')
  .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Formosa_in_Argentina_%28%2BFalkland_hatched%29.svg/800px-Formosa_in_Argentina_%28%2BFalkland_hatched%29.svg.png")


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
        if (provincia2=="jujuy" || provincia2=="jy") {
          const embed1 = new Discord.MessageEmbed()
          .setTitle("Jujuy (JY)")
          .setURL("https://es.wikipedia.org/wiki/Provincia_de_Jujuy")
          .setDescription("Jujuy es una de las 23 provincias de Argentina ubicada en el noroeste de Argentina.\nLa estructura económica se basa en las actividades primarias. Entre los cultivos están: la caña de azúcar, banana y el tabaco, seguidos de los cítricos, mangos, papayas, chirimoyas y paltas como producciones tradicionales (aunque modernas ya que datan del siglo XX) de la provincia. A esto debe sumarse la producción de combustibles: petróleo, gas y la ancestral actividad minera: (plomo, plata, cobre, oro, salitre, potasio, bórax)..")
          .setColor('#76abdc')
          .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Bandera_de_la_Provincia_de_Jujuy.svg/482px-Bandera_de_la_Provincia_de_Jujuy.svg.png")
          .addField("Gobernador ", "Gerardo Morales ",true)
          .addField("Capital ", "San Salvador de Jujuy",true)
          .addField("Ciudad más poblada ", "Gran San Salvador de Jujuy ",true)
          .addField("Fundación ", " 19 de abril de 1593",true)
          .addField("Declaración de autonomía ", "17 de diciembre de 1836  ",true)
          .addField("Superficie ", "53.219 km²",true)
          .addField("Población (2017) ", "727.780 hab. ",true)
          .addField("Gentillicio ", "	jujeño/ña ",true)
          .addField("Clima ", "Tropical  ",true)

        
          const embed2 = new Discord.MessageEmbed()
          .setTitle("Ubicación de Jujuy")
          .setURL("https://www.google.com.ar/maps/place/Jujuy/@-23.1907048,-66.8030576,8z/data=!3m1!4b1!4m5!3m4!1s0x9404a1f6e75c0087:0x815e91b230ce4e79!8m2!3d-22.6633212!4d-66.2367172")
          .setDescription("Está ubicada en el extremo noroeste del país, en la región del Norte Grande Argentino, limitando al oeste con la República de Chile hasta el trifinio cerro Zapaleri, donde comienza su frontera con el Estado Plurinacional de Bolivia (hacia el norte), y al este y sur con Salta.")
          .setColor('#76abdc')
          .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Jujuy_in_Argentina_%28%2BFalkland_hatched%29.svg/800px-Jujuy_in_Argentina_%28%2BFalkland_hatched%29.svg.png")

        
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

        if (provincia2=="la pampa" || provincia2=="lp" || provincia2=="pampa" || provincia2=="lapampa") {
          const embed1 = new Discord.MessageEmbed()
          .setTitle("La Pampa (LP)")
          .setURL("https://es.wikipedia.org/wiki/Provincia_de_La_Pampa")
          .setDescription("La Pampa es una de las 23 provincias de Argentina y se ubica en el centro de Argentina.\nCon 318 951 habitantes en 2010 es la tercera provincia menos poblada —por delante de Santa Cruz y Tierra del Fuego\nEl sector agropecuario se desarrolla fundamentalmente en la zona nordeste de la provincia, por el régimen de lluvias y la calidad de los suelos. Se cultivan cereales, oleaginosas y especies forrajeras. Sobresalen el cultivo de trigo, el maíz y el girasol. En cuanto a la ganadería, que es el sector que más aporta a la economía provincial, se desarrolla prácticamente en toda la provincia, y radica en la cría y engorde de vacunos principalmente, y en menor medida ganado ovino, caprino, equino y porcino.")
          .setColor('#76abdc')
          .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Bandera_de_la_Provincia_de_La_Pampa.svg/391px-Bandera_de_la_Provincia_de_La_Pampa.svg.png")
          .addField("Gobernador ", "Sergio Ziliotto  ",true)
          .addField("Capital ", "Santa Rosa",true)
          .addField("Ciudad más poblada ", "Santa Rosa",true)
          .addField("Fundación ", " 22 de abril de 1892",true)
          .addField("Declaración de autonomía ", "8 de agosto de 1951 ",true)
          .addField("Superficie ", "143.440 km²",true)
          .addField("Población (2017) ", "349.299 hab. ",true)
          .addField("Gentillicio ", "Pampeano/na ",true)
          .addField("Clima ", "Templados y semiáridos  ",true)
        
        
          const embed2 = new Discord.MessageEmbed()
          .setTitle("Ubicación de La Pampa")
          .setURL("https://www.google.com.ar/maps/place/La+Pampa/data=!4m2!3m1!1s0x95dc6d0da46936e9:0xac1677be5ff258c8?sa=X&ved=2ahUKEwir5fWa55fxAhV7r5UCHVH3DQ4Q8gEwGXoECAQQAQ")
          .setDescription("Se encuentra en la Región pampeana, limitando al norte con las provincias de San Luis y Córdoba, al este con la provincia de Buenos Aires, al sur con el río Colorado que la separa de Río Negro, y al noroeste con Mendoza.")
          .setColor('#76abdc')
          .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/La_Pampa_in_Argentina_%28%2BFalkland_hatched%29.svg/352px-La_Pampa_in_Argentina_%28%2BFalkland_hatched%29.svg.png")

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

        if (provincia2=="la rioja" || provincia2=="lr" || provincia2=="rioja" || provincia2=="larioja") {
          const embed1 = new Discord.MessageEmbed()
          .setTitle("La Rioja (LR)")
          .setURL("https://es.wikipedia.org/wiki/Provincia_de_La_Rioja")
          .setDescription("La Rioja es una de las 23 provincias de Argentina y se ubica en el noroeste de Argentina.\nEn La Rioja predomina un relieve montañoso de escasa vegetación sin la presencia de un curso de agua permanente. Su economía se sustenta a partir de la agricultura bajo riego artificial, con la producción de vid y olivos principalmente, sin embargo, también ha crecido considerablemente el turismo en los últimos años, sobresaliendo el parque nacional Talampaya como principal atractivo.")
          .setColor('#007bc4')
          .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Bandera_de_la_Provincia_de_La_Rioja.svg/700px-Bandera_de_la_Provincia_de_La_Rioja.svg.png")
          .addField("Gobernador ", "Ricardo Quintela  ",true)
          .addField("Capital ", "La Rioja",true)
          .addField("Ciudad más poblada ", "La Rioja",true)
          .addField("Fundación ", " 20 de mayo de 1591",true)
          .addField("Declaración de autonomía ", "1 de marzo de 1820",true)
          .addField("Superficie ", "89.680 km²",true)
          .addField("Población (2015) ", "387.728 hab. ",true)
          .addField("Gentillicio ", "Riojano/na ",true)
          .addField("Clima ", "Semiárido continental y árido de montaña",true)
        
          const embed2 = new Discord.MessageEmbed()
          .setTitle("Ubicación de La Rioja")
          .setURL("https://www.google.com.ar/maps/place/La+Rioja/data=!4m2!3m1!1s0x9427d9873396f7e5:0x3e1c9c348972c7ca?sa=X&ved=2ahUKEwiys4mS7ZfxAhVvrJUCHSnXAP4Q8gEwAHoECAYQAQ")
          .setDescription("Está ubicada en el noroeste del país, limitando al norte con Catamarca, al este con Córdoba, al sur con San Luis, al oeste con San Juan y al noroeste con Chile, cuya frontera está determinada por la divisoria de aguas de la cordillera de los Andes.")
          .setColor('#007bc4')
          .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/La_Rioja_in_Argentina_%28%2BFalkland_hatched%29.svg/352px-La_Rioja_in_Argentina_%28%2BFalkland_hatched%29.svg.png")

        
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

        if (provincia2=="mendoza" || provincia2=="mz") {
        const embed1 = new Discord.MessageEmbed()
        .setTitle("Mendoza (MZ)")
        .setURL("https://es.wikipedia.org/wiki/Provincia_de_Mendoza")
        .setDescription("Mendoza es una de las 23 provincias de Argentina y se ubica en el oeste de Argentina.\nLa principal actividad es la vitivinicultura, siendo la provincia más importante en la producción de Vinos Argentinos. Según el Instituto Nacional de Vitivinicultura, el cultivo de la vid en Mendoza ocupa el 68,36 % del total de la región centro-oeste, la cual representa el 94,13 % del total de la producción nacional de vides. La mitad de las explotaciones agrícolas mendocinas corresponden a dicha rama. Mendoza desarrolla esta actividad desde 1598, y se vio muy favorecida con la llegada del ferrocarril en 1885. ")
        .setColor('#76abdc')
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Bandera_de_la_Provincia_de_Mendoza.svg/603px-Bandera_de_la_Provincia_de_Mendoza.svg.png")
        .addField("Gobernador ", "Rodolfo Suárez",true)
        .addField("Capital ", "Mendoza",true)
        .addField("Ciudad más poblada ", "Gran Mendoza",true)
        .addField("Fundación ", "2 de marzo de 1561",true)
        .addField("Declaración de autonomía ", "1 de marzo de 1820",true)
        .addField("Superficie ", "148.827 km²",true)
        .addField("Población (2015) ", "2.086.000  hab. ",true)
        .addField("Gentillicio ", "Mendocino/na ",true)
        .addField("Clima ", "Semiárido continental",true)
     
      
        const embed2 = new Discord.MessageEmbed()
        .setTitle("Ubicación de Mendoza")
        .setURL("https://www.google.com.ar/maps/place/Mendoza/@-34.7622271,-70.7741011,7z/data=!3m1!4b1!4m5!3m4!1s0x9679745b5dd5fffd:0x902586f1d047824!8m2!3d-34.5869034!4d-68.1431414")
        .setDescription("Está ubicada al suroeste de la región del Nuevo Cuyo y más exactamente el Cuyo, al oeste del país, limitando al norte con San Juan, al este con el río Desaguadero, que la separa de San Luis, al sureste con la provincia de La Pampa, al sur con Neuquén (parte de su frontera la forma el río Colorado), al oeste con las regiones chilenas de Valparaíso, Metropolitana de Santiago, O'Higgins y Maule, cuyo límite está determinado por la divisoria de aguas de la cordillera de los Andes.")
        .setColor('#76abdc')
        .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Mendoza_in_Argentina_%28%2BFalkland_hatched%29.svg/352px-Mendoza_in_Argentina_%28%2BFalkland_hatched%29.svg.png")

      
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

      if (provincia2=="misiones" || provincia2=="mi") {
        const embed1 = new Discord.MessageEmbed()
        .setTitle("Misiones (MI)")
        .setURL("https://es.wikipedia.org/wiki/Provincia_de_Misiones")
        .setDescription("Mendoza es una de las 23 provincias de Argentina y se ubica en el noreste de Argentina.\n Misiones posee tierra colorada en la totalidad de su territorio (tipo de suelo considerado como el más fértil del mundo por su alto contenido de nutrientes para plantas y árboles de gran demanda nutricional, caracterizado por ser el resultado de la descomposición de rocas de origen arenito-basáltico (derrames volcánicos). \nA nivel nacional Misiones se destaca con más del 80 % de la producción de tung, yerba mate y té, además de La agroindustria y la industria forestal y el turismo.  \n Las Cataratas del Iguazú son la principal atracción turística de la provincia, donde se pueden ver miles  de extranjeros todos los años. ")
        .setColor('#dd0000')
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Bandera_de_la_Provincia_de_Misiones.svg/800px-Bandera_de_la_Provincia_de_Misiones.svg.png")
        .addField("Gobernador ", "Oscar Herrera Ahuad ",true)
        .addField("Capital ", "Posadas",true)
        .addField("Ciudad más poblada ", "Posadas",true)
        .addField("Fundación ", "22 de diciembre de 1881",true)
        .addField("Declaración de autonomía ", "10 de diciembre de 1953",true)
        .addField("Superficie ", "29.801 km²",true)
        .addField("Población (2018) ", "1.233.177  hab.",true)
        .addField("Gentillicio ", "Misionero/ra ",true)
        .addField("Clima ", "Subtropical húmedo sin estación seca",true)
      
        const embed2 = new Discord.MessageEmbed()
        .setTitle("Ubicación de Misiones")
        .setURL("https://www.google.com.ar/maps/place/Misiones/data=!4m2!3m1!1s0x94f811245d4ce333:0xfb5d357febb15a1d?sa=X&ved=2ahUKEwiV--Ge-p3xAhWQr5UCHfDnADEQ8gEwAHoECAcQAQ")
        .setDescription("Está ubicada en el noreste del país, en la región del Norte Grande Argentino, limitando al norte y este con los ríos Iguazú, San Antonio, Pepirí Guazú y Uruguay que la separan de Brasil, al sur con Corrientes, por medio de los arroyos Itaembé y Chimiray, y al oeste con el río Paraná que la separa de Paraguay.")
        .setColor('#dd0000')
        .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Misiones_in_Argentina_%28%2BFalkland_hatched%29.svg/352px-Misiones_in_Argentina_%28%2BFalkland_hatched%29.svg.png")
     
      
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

      if (provincia2=="neuquen" || provincia2=="nqn") {

        const embed1 = new Discord.MessageEmbed()
        .setTitle("Neuquén  (NQN)")
        .setURL("https://es.wikipedia.org/wiki/Provincia_del_Neuqu%C3%A9n")
        .setDescription("Neuquén es una de las 23 provincias de Argentina y se ubica en el noroeste la región patagónica de Argentina.\n La principal actividad productiva es la explotación de hidrocarburos. La cuenca neuquina, compartida con Río Negro, La Pampa y Mendoza, es la zona petrolera y gasífera más importante de Argentina. Además produce el 52 % de la energía eléctrica (principalmente hidroelectridad) del país con centrales en los embalses Piedra del Águila, Pichi Picún Leufú, El Chocón, Planicie Banderita y Alicurá.")
        .setColor('#04a2e0')
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Bandera_de_la_Provincia_del_Neuquen.svg/800px-Bandera_de_la_Provincia_del_Neuquen.svg.png")
        .addField("Gobernador ", "Omar Gutiérrez",true)
        .addField("Capital ", "Neuquén",true)
        .addField("Ciudad más poblada ", "Neuquén",true)
        .addField("Fundación ", "8 de febrero de 1883",true)
        .addField("Declaración de autonomía ", "15 de junio de 1955",true)
        .addField("Superficie ", "94.078 km²",true)
        .addField("Población (2017) ", "637.913  hab.",true)
        .addField("Gentillicio ", "Neuquino/na ",true)
        .addField("Clima ", "Continental, frío, con estación templada.",true)
      
        const embed2 = new Discord.MessageEmbed()
        .setTitle("Ubicación de Neuquén")
        .setURL("https://www.google.com.ar/maps/place/Neuqu%C3%A9n/data=!4m2!3m1!1s0x960d6bad5ae41889:0x8c3031d1bbb3d22f?sa=X&ved=2ahUKEwiCnuLDpaHxAhVGrZUCHUMUA4gQ8gEwFHoECAUQAQ")
        .setDescription("Está ubicada al noroeste de la región patagónica, la cual ocupa la mitad sur del país; limita al norte con Mendoza (parte de su frontera la forma el río Colorado), al sureste con Río Negro (gran parte de esta frontera la forma el río Limay) y al oeste con Chile, con las regiones chilenas de Maule, Ñuble, Bío-bío, La Araucanía, Los Ríos y Los Lagos; cuyos límites están determinados por la divisoria de agua y el criterio de altas cumbres de la cordillera de los Andes. ")
        .setColor('#04a2e0')
        .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Neuquen_in_Argentina_%28%2BFalkland_hatched%29.svg/352px-Neuquen_in_Argentina_%28%2BFalkland_hatched%29.svg.png")

      
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

      if (provincia2=="río negro" || provincia2=="rn" || provincia2=="rio negro")  {

  const embed1 = new Discord.MessageEmbed()
  .setTitle("RÍO NEGRO (RN)")
  .setURL("https://es.wikipedia.org/wiki/Provincia_de_R%C3%ADo_Negro")
  .setDescription("Río Negro es una de las 23 provincias de Argentina y se ubica en el centro-norte de la región patagónica de Argentina.\n Su economía está basada en la fruticultura, concentrada en las zonas de valles. Predominan los cultivos de frutales (manzanas y peras). También poseen cultivos de hortalizas (tomate y cebolla), y frutas finas (frambuesa, guinda y frutilla).")
  .setColor('#029a3a')
  .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Bandera_de_la_Provincia_del_R%C3%ADo_Negro.svg/800px-Bandera_de_la_Provincia_del_R%C3%ADo_Negro.svg.png")
  .addField("Gobernador ", "Arabela Carreras",true)
  .addField("Capital ", "Viedma",true)
  .addField("Ciudad más poblada ", "San Carlos de Bariloche",true)
  .addField("Fundación ", "16 de octubre de 1884",true)
  .addField("Declaración de autonomía ", "15 de junio de 1955",true)
  .addField("Superficie ", "203.013 km²",true)
  .addField("Población (2017) ", "708.799  hab.",true)
  .addField("Gentillicio ", "Rionegrino/na ",true)
  .addField("Clima ", "Frío seco",true)


  const embed2 = new Discord.MessageEmbed()
  .setTitle("Ubicación de Río Negro")
  .setURL("https://www.google.com.ar/maps/place/R%C3%ADo+Negro/data=!4m2!3m1!1s0x95e282c4b0a6530b:0xc2dfc6ff33b0aedb?sa=X&ved=2ahUKEwiD7caRq6HxAhWxqZUCHfv0AjoQ8gEwAHoECAYQAQ")
  .setDescription("Ubicada al centro-norte de la región patagónica (en la mitad sur del país), limita al noroeste con el río Limay que forma parte de su límite con Neuquén (el resto del límite es una línea recta vertical), al norte con el río Colorado que la separa de la Provincia de La Pampa, al noreste con la Provincia de Buenos Aires (parte de su límite lo forma el río Negro y otra, una línea vertical) y el golfo San Matías (mar Argentino, océano Atlántico), al sur con Chubut y al oeste con la región chilena de Los Lagos, cuya frontera está determinada por la línea de altas cumbres de la cordillera de los Andes. ")
  .setColor('#029a3a')
  .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Rio_Negro_in_Argentina_%28%2BFalkland_hatched%29.svg/352px-Rio_Negro_in_Argentina_%28%2BFalkland_hatched%29.svg.png")


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

      if (provincia2=="salta" || provincia2=="sa") {
        const embed1 = new Discord.MessageEmbed()
  .setTitle("SALTA (SA)")
  .setURL("https://es.wikipedia.org/wiki/Provincia_de_Salta")
  .setDescription("Salta es una de las 23 provincias de Argentina y se ubica en el noroeste del país.\n El sector primario está dado por cultivos industriales como el cacao café, tabaco, chirimoya, caña de azúcar, banana, mango, papaya, cítricos, legumbres, hortalizas, vid, ajíes, cebollas, papas y algodón. En el secundario destacan azúcar y sus subproductos, vino, cervezas, lácteos y pastas. \n El azúcar y el vino se exportan a Europa y los Estados Unidos, y en el caso del vino salteño, goza de una excelente reputación a nivel internacional. \n  En la capital provincial y las principales localidades gran parte de la población se dedica al sector de servicios: comercio, bancos y actividades financieras, educación, salud, transporte, comunicaciones, gastronomía y entretenimiento, etc. El turismo ha cobrado gran importancia, y se han abierto numerosos hoteles, algunos de gran categoría.")
  .setColor('#8a293d')
  .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Bandera_de_la_Provincia_de_Salta.svg/564px-Bandera_de_la_Provincia_de_Salta.svg.png")
  .addField("Gobernador ", "Gustavo Sáenz",true)
  .addField("Capital ", "Salta",true)
  .addField("Ciudad más poblada ", "Salta",true)
  .addField("Fundación ", "8 de octubre de 1814",true)
  .addField("Declaración de autonomía ", "17 de diciembre de 1836",true)
  .addField("Superficie ", "155.488 km²",true)
  .addField("Población (2017) ", "1.333.365  hab.",true)
  .addField("Gentillicio ", "Salteño/ña ",true)
  .addField("Clima ", "Cálido",true)


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

      if (provincia2=="san juan" || provincia2=="sj" || provincia2=="sanjuan") {
        const embed1 = new Discord.MessageEmbed()
        .setTitle("SAN JUAN (SJ)")
        .setURL("https://es.wikipedia.org/wiki/Provincia_de_San_Juan_(Argentina)")
        .setDescription("San Juan es una de las 23 provincias de Argentina y se ubica en el noroeste del país.\n La economía de la provincia de San Juan está representada por la agricultura, donde sobresale en cultivo de la vid. En la industria se destaca la elaboración del vino y diversas conservas de alimentos. También ha comenzado a desarrollarse intensamente la minería, con la extracción de diversos minerales, de la mano de varias empresas multinacionales, y el turismo.  ")
        .setColor('#76abdc')
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Bandera_de_San_Juan_Ciudadana.png/800px-Bandera_de_San_Juan_Ciudadana.png")
        .addField("Gobernador ", "Sergio Uñac",true)
        .addField("Capital ", "San Juan",true)
        .addField("Ciudad más poblada ", "Gran San Juan",true)
        .addField("Fundación ", "13 de junio de 1562",true)
        .addField("Declaración de autonomía ", "1 de marzo de 1820",true)
        .addField("Superficie ", "89.651 km²",true)
        .addField("Población (2014) ", "738.959  hab.",true)
        .addField("Gentillicio ", "Sanjuanino/na ",true)
        .addField("Clima ", "Templado seco",true)

      
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

      if (provincia2=="sl" || provincia2=="sanluis" || provincia2=="san luis") {
        const embed1 = new Discord.MessageEmbed()
        .setTitle("SAN LUIS (SL)")
        .setURL("https://es.wikipedia.org/wiki/Provincia_de_San_Luis")
        .setDescription("San Luis es una de las 23 provincias de Argentina y se ubica al sureste de la región del Nuevo Cuyo, al oeste del país.\n En el sector agroindustrial se destacan los frigoríficos y las curtiembres. En los últimos años creció la actividad lechera, la producción de electrodomésticos, plásticos y artículos de papel y cartón. También se desarrolla la industria minera en las sierras de San Luis, del Gigante y de la Estanzuela, ricas en granito y lajas, de donde extraen calizas, basalto y mármol.\n  El turismo es otra de las actividades impulsadas por el gobierno puntano a partir del retorno de la democracia en 1983. Actualmente la provincia cuenta con la más importante red de autopistas del país, que conecta a la mayoría de las localidades turísticas con la capital provincial. ")
        .setColor('#FDFDFD')
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Bandera_de_la_Provincia_de_San_Luis.svg/800px-Bandera_de_la_Provincia_de_San_Luis.svg.png")
        .addField("Gobernador ", "Alberto Rodríguez Saá ",true)
        .addField("Capital ", "	San Luis",true)
        .addField("Ciudad más poblada ", "Gran San Luis",true)
        .addField("Fundación ", "25 de agosto de 1594 ",true)
        .addField("Declaración de autonomía ", "1 de marzo de 1820",true)
        .addField("Superficie ", "76.748 km²",true)
        .addField("Población (2017) ", "502.003  hab.",true)
        .addField("Gentillicio ", "	Sanluiseño/ña o puntano/na (para los nacidos en la capital) ",true)
        .addField("Clima ", "Continental seco",true)
      
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

      if (provincia2=="santa cruz" || provincia2=="sc" || provincia2=="santacruz") {

        const embed1 = new Discord.MessageEmbed()
  .setTitle("SANTA CRUZ (SC)")
  .setURL("https://es.wikipedia.org/wiki/Provincia_de_Santa_Cruz")
  .setDescription("Santa Cruz es una de las 23 provincias de Argentina y se ubica al sur de la región patagónica de Argentina.\n  La provincia de Santa Cruz es pionera a nivel mundial en el uso de energías alternativas renovables: la gran amplitud de las mareas, principalmente en las rías y estuarios, es fuente de gran potencial para obtener energía mareomotriz, aunque en el 2005 la más desarrollada de las energías limpias es la energía que se obtiene de los fuertes y constantes vientos que soplan de oeste a este por gran parte de la provincia, en este caso, varios molinos producen energía eólica. \n  La economía de la zona se basa principalmente en la extracción de petróleo, gas butano y metano. En minería, se explota oro en Cerro Vanguardia con una importante producción, y oro con plata en la mina de Manantial Espejo.  ")
  .setColor('#2197de')
  .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Bandera_de_la_Provincia_de_Santa_Cruz.svg/765px-Bandera_de_la_Provincia_de_Santa_Cruz.svg.png")
  .addField("Gobernador ", "Alicia Kirchner ",true)
  .addField("Capital ", "Río Gallegos",true)
  .addField("Ciudad más poblada ", "Río Gallegos",true)
  .addField("Fundación ", "16 de octubre de 1884 ",true)
  .addField("Declaración de autonomía ", "22 de noviembre de 1956",true)
  .addField("Superficie ", "243.943 km²",true)
  .addField("Población (2010) ", "273.964  hab.",true)
  .addField("Gentillicio ", "	Santacruceño/ña ",true)
  .addField("Clima ", "Árido y frío",true)


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

      if (provincia2=="santa fé" || provincia2=="sf" || provincia2=="santafe" || provincia2=="santa fe" ) {
        const embed1 = new Discord.MessageEmbed()
  .setTitle("SANTA FE (SF)")
  .setURL("https://es.wikipedia.org/wiki/Provincia_de_Santa_Fe")
  .setDescription("Santa Fe es una de las 23 provincias de Argentina y se ubica en el centro-este de Argentina.\n  La  economía de Santa Fe es la segunda más importante del país. Representa el 8 % del total de Argentina, la producción se estima en ARS 27 mil millones en 2006, es decir, USD 9000 per cápita (alrededor de la media nacional). A pesar de que la economía está bien diversificada, la agricultura sigue teniendo un papel indispensable que desempeñar a través de los ingresos de divisas y la rentabilidad de las exportaciones de ITS. El veintiún por ciento de las tierras cultivadas de la Argentina están en Santa Fe, cuyos cultivos principales son soja (principal productor nacional), girasol, maíz y trigo. En menor escala fresas, miel y sus derivados (300.000 colmenas), la madera y el algodón.")
  .setColor('#b43232')
  .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Bandera_de_la_Provincia_de_Santa_Fe.svg/435px-Bandera_de_la_Provincia_de_Santa_Fe.svg.png")
  .addField("Gobernador ", "Omar Perotti",true)
  .addField("Capital ", "Santa Fe",true)
  .addField("Ciudad más poblada ", "Rosario",true)
  .addField("Fundación ", "15 de noviembre de 1573 ",true)
  .addField("Declaración de autonomía ", "10 de mayo de 1816",true)
  .addField("Superficie ", "133.007 km²",true)
  .addField("Población (2015) ", "3.397.532  hab.",true)
  .addField("Gentillicio ", "Santafesino/na",true)
  .addField("Clima ", "Templado y subtropical",true)


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

      if (provincia2=="santiago del estero" || provincia2=="se" || provincia2=="santiagodelestero") {
        const embed1 = new Discord.MessageEmbed()
        .setTitle("SANTIAGO DEL ESTERO (SE)")
        .setURL("https://es.wikipedia.org/wiki/Provincia_de_Santiago_del_Estero")
        .setDescription("Santiago del Estero es una de las 23 provincias de Argentina y se ubica en el norte de Argentina.\n La explotación forestal es la actividad económica más importante de la provincia. Los bosques -más del 50% del territorio- producen el mayor volumen de madera del país. Muchos obrajes preparan durmientes, leña, carbón vegetal, rollizos y postes. La agricultura y la ganadería, en gran desarrollo, tienen su asiento principalmente entre los ríos Salado del Norte y Dulce. Gracias al riego se cultiva trigo, maíz, alfalfa, lino, algodón y frutales. El ganado más abundante es el caprino. En escala más reducida hay bovinos, lanares, caballares, porcinos y asnales. La producción minera está representada por cal, yeso, granito, sal, manganeso y mármol. Además de la producción de carbón vegetal y madera, hay fábricas de cemento y elaboradoras de cal.")
        .setColor('#b43232')
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Bandera_de_la_Provincia_de_Santiago_del_Estero.svg/750px-Bandera_de_la_Provincia_de_Santiago_del_Estero.svg.png")
        .addField("Gobernador ", "Gerardo Zamora",true)
        .addField("Capital ", "Santiago del Estero",true)
        .addField("Ciudad más poblada ", "Santiago del Estero",true)
        .addField("Fundación ", "25 de julio de 1553",true)
        .addField("Declaración de autonomía ", "27 de abril de 1820",true)
        .addField("Superficie ", "136.351 km²",true)
        .addField("Población (2015) ", "928.097  hab.",true)
        .addField("Gentillicio ", "Santiagueño/ña",true)
        .addField("Clima ", "Semitropical continental",true)

      
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

      if (provincia2=="tierra del fuego" || provincia2=="tf" || provincia2=="provincia de tierra del fuego, antártida e islas del  atlántico sur") {
        const embed1 = new Discord.MessageEmbed()
  .setTitle("PROVINCIA DE TIERRA DEL FUEGO, ANTÁRTIDA E ISLAS DEL ATLÁNTICO SUR (TF)")
  .setURL("https://es.wikipedia.org/wiki/Provincia_de_Tierra_del_Fuego,_Ant%C3%A1rtida_e_Islas_del_Atl%C3%A1ntico_Sur")
  .setDescription("Tierra del Fuego, Antártida e Islas del Atlántico Sur es una de las 23 provincias de Argentina y se ubica en el sur de Argentina, siendo el territorio más austral del país. \nCon respecto a los territorios cuya soberanía se encuentra en disputa (islas Malvinas, islas Georgias del Sur, islas Sandwich del Sur, islas Orcadas del Sur, islas Shetland del Sur, Antártida Argentina), la ley de provincialización en su artículo 2 establece que corresponden al territorio de la provincia, pero «sujeta a los tratados con potencias extranjeras que celebre el gobierno federal, para cuya ratificación no será necesario consultar al gobierno provincial», norma que habilita la secesión de dichos territorios por la sola decisión del Estado nacional en el marco de las negociaciones sobre la soberanía con otras potencias.")
  .setColor('#fd9830')
  .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Bandera_de_la_Provincia_de_Tierra_del_Fuego.svg/320px-Bandera_de_la_Provincia_de_Tierra_del_Fuego.svg.png")
  .addField("Gobernador ", "Gustavo Melella",true)
  .addField("Capital ", "	Ushuaia",true)
  .addField("Ciudad más poblada ", "Río Grande",true)
  .addField("Fundación ", "1884",true)
  .addField("Declaración de autonomía ", "26 de abril de 1990",true)
  .addField("Superficie ", "21.571 km² (excluyendo territorio reclamado) \n  1.002.445  km² (incluyendo territorio reclamado)",true)
  .addField("Población (2017) ", "160.720  hab.",true)
  .addField("Gentillicio ", "Fueguino/na",true)
  .addField("Clima ", "Templado frío y húmedo",true)


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

      if (provincia2=="tucuman" || provincia2=="tu") {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("TUCUMAN (TU)")
  .setURL("https://es.wikipedia.org/wiki/Provincia_de_Tucum%C3%A1n")
  .setDescription("Tucuman es una de las 23 provincias de Argentina y se ubica en el noroeste de Argentina. \n Fue escenario del Congreso de Tucumán entre los años 1816 y 1820 que, entre otras cosas, declaró la Independencia de las Provincias Unidas del Sud (primer nombre oficial del Estado soberano llamado Argentina) respecto a España y cualquier otro poder extranjero, el 9 de julio de 1816. Es la provincia de menor superficie de la Argentina y la de mayor densidad de población del país. \n \n Actualmente entre las principales actividades que se desarrollan se encuentran los complejos agroindustriales del azúcar y del limón, obteniéndose, en el caso del limón, desde fruta en fresco clasificada y empacada hasta productos industriales como jugos concentrados o aceites esenciales. También posee distintas industrias: automotriz, textil y calzado, golosinas, gaseosas y papel, cervecerías, excelentes quesillos y quesos.")
  .setColor('#76abdc')
  .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Bandera_de_la_Provincia_de_Tucum%C3%A1n.svg/700px-Bandera_de_la_Provincia_de_Tucum%C3%A1n.svg.png")
  .addField("Gobernador ", "Juan Manzur",true)
  .addField("Capital ", "San Miguel de Tucumán",true)
  .addField("Ciudad más poblada ", "San Miguel de Tucumán",true)
  .addField("Fundación ", "1564",true)
  .addField("Declaración de autonomía ", "25 de noviembre de 1825",true)
  .addField("Superficie ", "22.525 km²" ,true)
  .addField("Población (2010) ", "1.767.500  hab.",true)
  .addField("Gentillicio ", "Tucumano/na",true)
  .addField("Clima ", "Cálido subtropical con estación seca",true)

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
    })
//Fun
//Odio Arg

client.on('interactionCreate', async(interaction) => {
  if(!interaction.isCommand()){
    return
  }

  const {commandName , options} = interaction
  if(commandName=="odio") {

    //Arg

    if (interaction.options.getSubcommand() === 'argentina') {
      var a = Math.floor(Math.random() * 100 + 1);
      var d = '█'
      for (i=0;i<=a;i=i+4){
        d='█'+ d
      }
    
    const embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription("Calculando...")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929069300290027550/odioarg.png")
    .addField("Tu odio hacía Argentina es del: ",  d+' ' + a+'%' )

    return interaction.reply({ embeds: [embed] });
  }

//LATAM

     if (interaction.options.getSubcommand() === 'latinoamerica') {
     var a = Math.floor(Math.random() * 100 + 1);
    var d = '█'
    for (i=0;i<=a;i=i+4){
      d='█'+ d
    }
   
   const embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription("Calculando...")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929069300512329768/odiolatam.png")
    .addField("Tu odio hacía Latinoamérica es del: ",  d+' ' + a+'%' )
    return interaction.reply({ embeds: [embed] });
           
    }

   }

  })

  //Escaparlatam

  client.on('interactionCreate', async(interaction) => {
    if(!interaction.isCommand()){
      return
    }
    const {commandName , options} = interaction
  if(commandName=="escaparlatam") {
    var a = Math.floor(Math.random() * 100 + 1);
      var d = '█'
      for (i=0;i<=a;i=i+4){
        d='█'+ d
      }

      
      const embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setDescription("Calculando...")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929069300000636958/escaparlatam.png")
      .addField("Tus probabilidades de escapar de latinoamérica son de: ",  d+' ' + a+'%' )
      
      return interaction.reply({ embeds: [embed] });
    }
  
})
//8ball

client.on('interactionCreate', async(interaction) => {
  if(!interaction.isCommand()){
    return
  }
  const {commandName , options} = interaction
if(commandName=="8ball") {
  
  var  consulta2 = options.getString('consulta')


  var a = Math.floor(Math.random() * 15 + 1);
   
  if(a==1){
    const embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921903283667353610/8ballnew.png")
    .setDescription("Calculando...")
    .addField("Consulta: ",  consulta2 )
    .addField("La bola 8 mágica dice... ",  "Ma' vale " )
    return interaction.reply({ embeds: [embed] });
  }
  if(a==2){
    const embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921903283667353610/8ballnew.png")
    .setDescription("Calculando...")
    .addField("Consulta: ",  consulta2 )
    .addField("La bola 8 mágica dice...  ",  "Métele sí " )
    return interaction.reply({ embeds: [embed] });
  }
  if(a==3){
    const embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921903283667353610/8ballnew.png")
    .setDescription("Calculando...")
    .addField("Consulta: ",  consulta2 )
    .addField("La bola 8 mágica dice... ",  "Obvioo " )
    return interaction.reply({ embeds: [embed] });
  }
  if(a==4){
    const embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921903283667353610/8ballnew.png")
    .setDescription("Calculando...")
    .addField("Consulta: ",  consulta2 )
    .addField("La bola 8 mágica dice... ",  "Y sí" )
    return interaction.reply({ embeds: [embed] });
  }
  if(a==5){
    const embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921903283667353610/8ballnew.png")
    .setDescription("Calculando...")
    .addField("Consulta: ",  consulta2 )
    .addField("La bola 8 mágica dice...  ",  "Re sí amigo" )
    return interaction.reply({ embeds: [embed] });
  }
  if(a==6){
    const embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921903283667353610/8ballnew.png")
    .setDescription("Calculando...")
    .addField("Consulta: ",  consulta2 )
    .addField("La bola 8 mágica dice...  ",  "Ni empedo" )
    return interaction.reply({ embeds: [embed] });
  }
  if(a==7){
    const embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921903283667353610/8ballnew.png")
    .setDescription("Calculando...")
    .addField("Consulta: ",  consulta2 )
    .addField("La bola 8 mágica dice...  ",  "Para nada" )
    return interaction.reply({ embeds: [embed] });
  }
  if(a==8){
    const embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921903283667353610/8ballnew.png")
    .setDescription("Calculando...")
    .addField("Consulta: ",  consulta2 )
    .addField("La bola 8 mágica dice... ",  "Ni loco" )
    return interaction.reply({ embeds: [embed] });
  }
  if(a==9){
    const embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921903283667353610/8ballnew.png")
    .setDescription("Calculando...")
    .addField("Consulta: ",  consulta2 )
    .addField("La bola 8 mágica dice... ",  "Ni ahí" )
    return interaction.reply({ embeds: [embed] });
  }
  if(a==10){
    const embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921903283667353610/8ballnew.png")
    .setDescription("Calculando...")
    .addField("Consulta: ",  consulta2 )
    .addField("La bola 8 mágica dice... ",  "Naa" )
    return interaction.reply({ embeds: [embed] });
  }

if(a==11){
  const embed = new Discord.MessageEmbed()
  .setColor("YELLOW")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921903283667353610/8ballnew.png")
  .setDescription("Calculando...")
  .addField("Consulta: ",  consulta2 )
  .addField("La bola 8 mágica dice... ",  "Puede ser..." )
  return interaction.reply({ embeds: [embed] });
}
if(a==12){
const embed = new Discord.MessageEmbed()
.setColor("YELLOW")
.setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921903283667353610/8ballnew.png")
.setDescription("Calculando...")
.addField("Consulta: ",  consulta2 )
.addField("La bola 8 mágica dice... ",  "El tiempo lo dirá")
return interaction.reply({ embeds: [embed] });
}
if(a==13){
const embed = new Discord.MessageEmbed()
.setColor("YELLOW")
.setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921903283667353610/8ballnew.png")
.setDescription("Calculando...")
.addField("Consulta: ",  consulta2 )
.addField("La bola 8 mágica dice... ",  "Ya veremos dijo el ciego")
return interaction.reply({ embeds: [embed] });
}
if(a==14){
const embed = new Discord.MessageEmbed()
.setColor("YELLOW")
.setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921903283667353610/8ballnew.png")
.setDescription("Calculando...")
.addField("Consulta: ",  consulta2 )
.addField("La bola 8 mágica dice... ",  "Quizás")
return interaction.reply({ embeds: [embed] });
}
if(a==15){
const embed = new Discord.MessageEmbed()
.setColor("YELLOW")
.setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921903283667353610/8ballnew.png")
.setDescription("Calculando...")
.addField("Consulta: ",  consulta2 )
.addField("La bola 8 mágica dice... ",  "Ni idea amigo")
return interaction.reply({ embeds: [embed] });
}

}

})



//Covidtest

client.on('interactionCreate', async(interaction) => {
  if(!interaction.isCommand()){
    return
  }
  const {commandName , options} = interaction
if(commandName=="covidtest") {  
  const a = Math.floor(Math.random() * 2 + 1)
  if(a == 1){
    const embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription("Calculando...")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/937780157387780116/test-results_1.png")
    .addField("RESULTADOS: ", "POSITIVO (+)")
    return interaction.reply({ embeds: [embed] });
  }

  if(a ==2){
    const embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription("Calculando...")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/937781157196611644/negativotest.png")
    .addField("RESULTADOS: ", "NEGATIVO (-)")
    return interaction.reply({ embeds: [embed] });
}
}

})

//Flip coin
client.on('interactionCreate', async(interaction) => {
  if(!interaction.isCommand()){
    return
  }
  const {commandName , options} = interaction
if(commandName=="moneda") {
  const a = Math.floor(Math.random() * 2 + 1)
 
  if(a == 1){
    const embed = new Discord.MessageEmbed()
    .setColor("#27C5F5")
    .setDescription("Tirando...")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/805139900768190484/bancario_1.png")
    .addField("LA MONEDA QUEDÓ EN: ", " **SOL** :sun_with_face: ")
 
    return interaction.reply({ embeds: [embed] });
  }
  if(a ==2){
    const embed = new Discord.MessageEmbed()
    .setColor("#FCFBFB")
    .setDescription("Tirando...")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/805139082417799168/BancarioEscudo.png")
    .addField("LA MONEDA QUEDÓ EN: ", " **ESCUDO** :shield:")

    return interaction.reply({ embeds: [embed] });
}
}
})


//Dados

client.on('interactionCreate', async(interaction) => {
  if(!interaction.isCommand()){
    return
  }
  const {commandName , options} = interaction
if(commandName=="dados") {
  var a = Math.floor(Math.random() * 6 + 1);

  if(a==1){
    const embed = new Discord.MessageEmbed()
    .setColor("#ffe082")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921904012138258452/dado.png")
    .setDescription("Tirando dados...")
    .addField("El dado cayó en... ",  " Número :one: " )
    return interaction.reply({ embeds: [embed] });
  }

if(a==2){
  const embed = new Discord.MessageEmbed()
  .setColor("#ffe082")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921904011915952160/dado_1.png")
  .setDescription("Tirando dados...")
  .addField("El dado cayó en... ",  " Número :two: " )
  return interaction.reply({ embeds: [embed] });

}

if(a==3){
  const embed = new Discord.MessageEmbed()
  .setColor("#ffe082")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921904011685294090/dado_2.png")
  .setDescription("Tirando dados...")
  .addField("El dado cayó en... ",  " Número :three: " )
  return interaction.reply({ embeds: [embed] });
}

if(a==4){
  const embed = new Discord.MessageEmbed()
  .setColor("#ffe082")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921904286303133807/dado_5.png")
  .setDescription("Tirando dados...")
  .addField("El dado cayó en... ",  " Número :four: " )
  return interaction.reply({ embeds: [embed] });
}

if(a==5){
  const embed = new Discord.MessageEmbed()
  .setColor("#ffe082")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921904011479769180/dado_3.png")
  .setDescription("Tirando dados...")
  .addField("El dado cayó en... ",  " Número :five: " )
  return interaction.reply({ embeds: [embed] });
}

if(a==6){
  const embed = new Discord.MessageEmbed()
  .setColor("#ffe082")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921904011244871730/dado_4.png")
  .setDescription("Tirando dados...")
  .addField("El dado cayó en... ",  " Número :six: " )
  return interaction.reply({ embeds: [embed] });
}
}
})

//Piedra papel  o tijera

client.on('interactionCreate', async(interaction) => {
  if(!interaction.isCommand()){
    return
  }

  /*
await interaction.deferReply();
await (10000);
*/
const {commandName , options} = interaction
if(commandName === 'piedrapapelotijera') {
 await interaction.deferReply();
  simplydjs.rps(interaction, {
    embedColor: "#05e841", // default: #075FFF
    timeoutEmbedColor: "#f00a15", // default: #c90000
    drawEmbedColor: "#e87a0c", // default: #075FFF
    winEmbedColor: "#e8dd05", // default: #06bd00
    embedFooter: "Piedra Papel o Tijera",
    credit: "FALSE",
    rockColor: "SECONDARY", // default: SECONDARY
    paperColor: "SECONDARY", // default: SECONDARY
    scissorsColor: "SECONDARY", // default: SECONDARY
   slash: true,
   userSlash: "usuario"
  });


}
})

//Tateti

client.on('interactionCreate', async(interaction) => {
  if(!interaction.isCommand()){
    return
  }


const {commandName , options} = interaction
if(commandName === 'tateti') {
  await interaction.deferReply();
  simplydjs.tictactoe(interaction, {
  slash: true,
  userSlash: "usuario"
  });

}
})



//Utilidad
//Impuesto
client.on('interactionCreate', async(interaction) => {
  if(!interaction.isCommand()){
    return
  }
  const {commandName , options, subcommand} = interaction
  if(commandName === 'impuesto') {
    var imp = options.getNumber('monto')

    const embed1 = new Discord.MessageEmbed()
    .setTitle("Impuestos a la compra Online (64%)")
    .setColor("#d6f2fc")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903113482835197972/taxes.png")
    .addField("Monto original", "$"+ currencyFormatter.format(imp, { locale: 'es-ES', code: ' ' }))
    .addField("I.V.A (21%) ", "$"+ currencyFormatter.format(imp*0.21, { locale: 'es-ES', code: ' ' }), true)
    .addField("P.A.I.S (8%) ", "$"+ currencyFormatter.format(imp*0.08, { locale: 'es-ES', code: ' ' }) ,true) 
    .addField("Adelanto de Ganancias (35%)", "$"+ currencyFormatter.format(imp*0.35, { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Total (64%)", "$" + currencyFormatter.format(imp*1.64, { locale: 'es-ES', code: ' ' }))

    const embed2 = new Discord.MessageEmbed()
    .setTitle("Impuesto a la compra Online (65%)")
    .setColor("#d6f2fc")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903113482835197972/taxes.png")
    .setDescription("Cuando no se aplica IVA, el impuesto P.A.I.S pasa a ser del  30% ")
    .addField("Monto original", "$"+ currencyFormatter.format(imp, { locale: 'es-ES', code: ' ' }))
    .addField("P.A.I.S (30%) ", "$"+ currencyFormatter.format(imp*0.30, { locale: 'es-ES', code: ' ' }) ,true) 
    .addField("Adelanto de Ganancias (35%)", "$"+ currencyFormatter.format(imp*0.35, { locale: 'es-ES', code: ' ' }) ,true)
    .addField("TOTAL (65%)", "$" + currencyFormatter.format(imp*1.65, { locale: 'es-ES', code: ' ' }))
 
    const embed3 = new Discord.MessageEmbed()
    .setTitle("Impuesto a la compra Online")
    .setColor("#d6f2fc")

    const button1 = new MessageButton()
    .setCustomId("previousbtn")
    .setLabel("📄64%")
   .setStyle("SUCCESS");
  
   const button2 = new MessageButton()
   .setCustomId("nextbtn")
   .setLabel("📄65%")
   .setStyle("DANGER");
  
   
   const pages = [
   embed1,
   embed2,
  ];

  
  const buttonList = [button1, button2];

  const timeout = 120000;
  paginationEmbed(interaction, pages, buttonList, timeout);

  //  await interaction.reply({
  //    content: " ‏‏‎‎ ‏‏‎‎ ‏‏‎‏‏‎‎ ‏‏‎‎ ",
  //    components: []
  // })
 }
})


client.on('interactionCreate', async(interaction) => {
  if(!interaction.isCommand()){
    return
  }
  const {commandName , options, subcommand} = interaction
  if(commandName === 'anualizarinflacion') {
    var mes2 = options.getNumber('mensual')
    mes = mes2/100
    mes = mes + 1
    mes = Math.pow(mes, 12)
    mes = mes - 1
    mes = mes * 100


    const embed1 = new Discord.MessageEmbed()
    .setTitle("Inflación mensual anualizada")
    .setColor("#f82f40") 
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964701743504044072/loss.png")
    .addField("Inflación mensual", mes2.toFixed(2) + "%")
    .addField("Inflación anual ",  mes.toFixed(2) + "%")


    return interaction.reply({ embeds: [embed1] });
  
 }
})


//HELP


client.on('interactionCreate', async(interaction) => {
  if(!interaction.isCommand()){
    return
  }

  const {commandName , options} = interaction
  if(commandName === 'help') {
    
         interaction.reply({
           content : "*ar  help"
        })
     
  }
    })


//Update

       client.on('interactionCreate', async(interaction) => {
        if(!interaction.isCommand()){
          return
        }


        const {commandName , options} = interaction
        if(commandName === 'update') {
        


          const embed14 = new Discord.MessageEmbed()
          .setTitle("ARGENKIT BOT VERSIÓN 1.4 ¡SLASH COMMANDS UPDATE!")
          .setColor('#0a9ee1')
          .setDescription("  Fecha de lanzamiento: 16/4/2022 \n Debido al anuncio de Discord de volver los Message Content algo privilegiado para bots verificados, esta actualización es obligatoria para poder seguir usando el bot.")
          .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/811043646848630786/argboticon-03.png")
          .addField("<:slash:964681731519164457> Slash commands ", "Se han actualizado todos los comandos al formato slash. Esto debido a que Discord ya no permitirá a los bots verificados usar comandos por mensaje  (Como venía siendo con el bot con todos sus comandos como `*ar impuesto`, `*ar dolar`, `*ar help`, etc), debido a esto, he tenido que actualizar todos los comandos regulares a slash commands. Prueba /help para descubrir cómo funcionan. Quizás  sea  necesario  expulsar y volver a invitar al bot si es que lo añadiste hace mucho tiempo.")
          .addField("<:ethereum:963619533271232532> ¡Más Criptomonedas!","Se han añadido el Ethereum, Tether, Axie Infinity, Terraluna, Decentraland, Solana, Dai y Dogecoin ")
          .addField("<:goldingots:964717629484965938> ¡Metales!", "Se han añadido la onza de oro, plata, paladio y platino  ")
          .addField(":chart_with_downwards_trend:  Anualizar Inflación","Nuevo comando para calcular la inflación anualizada a partir de la mensual")


          const embed13 = new Discord.MessageEmbed()
          .setTitle("ARGENKIT BOT VERSIÓN 1.3 ¡LA ACTUALIZACIÓN DE ANIVERSARIO!")
          .setColor('#0a9ee1')
          .setDescription("  Fecha de lanzamiento: 1/2/2022 \n ¡Ha pasado un año desde la primera versión estable del bot (1.0), la cual fue en un principio cerrada solo a un grupo de amigos!  \n Hoy, estoy feliz de anunciar la actualización de aniversario, la versión 1.3! Que trae sobre todo un gran cambio en el diseño. Estas son las novedades: ")
         .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/811043646848630786/argboticon-03.png")
         .addField("<:djs:928800848996352041> Discord.js 13 ", "Se ha actualizado el bot a Discord.js 13 y node.js 16")
         .addField(":sparkles: Cambio de  diseño ", "¡Se ha renovado por completo el diseño del bot para darle un estilo más moderno!")
         .addField(":mouse_three_button:  Nuevos botones ", "¡Se han remplazado las reacciones por los  nuevos botones interactivos de discord!")
         .addField(":handshake: Help mejorado ", "¡Se ha mejorado por completo el comando help, ahora incluye un menú desplegable para cada categoría!")
        .addField("<:bitcoin:929073179262074960> Bitcoin ", "¡Ahora se puede consultar el precio del bitcoin,  así como convertirlo!")
        .addField(":dollar: Nuevas divisas ", "Se ha agregado el Franco Suizo y la Lira Turca")
        .addField(":microbe: Covid ", "Se han agregado nuevos países y la posibilidad de consultar los disponibles con `*ar covidpais`  sin argumentos")
        .addField(":computer: Slash commands ", "Se han agregado algunos slash commands,  quizás tengas que expulsar y volver a invitar al bot al servidor para utilizarlos")
        .addField(":abacus: Calculadora ", "Se ha agregado una calculadora interactiva con botones, usa `*ar calculadora` ")
        .addField(":soccer:  Fulvo ", "Se ha agregado un contador de cuánto falta para los  siguientes partidos de la selección, pruebalo con `*ar fútbol` ")
        .addField(":video_game:   Juegos ", "Se ha agregado un piedra papel o tijera y un tateti con botones de discord, pruebalo con `*ar tateti @usuario` o `*ar piedrapapelotijera @usuario`")
        .addField(":alarm_clock: Husos horarios", "Se ha agregado un comando para consultar distintos husos horarios, prueba `*ar husos` (Eliminado en la versión  1.4 para una futura mejora)")

    
        const embed12 = new Discord.MessageEmbed()
        .setTitle("ARGENKIT BOT VERSIÓN 1.2 ¡LA ACTUALIZACIÓN DE LAS DIVISAS!")
        .setColor('#0a9ee1')
        .setDescription("  Fecha de lanzamiento: 26/6/2021 \n ¡Ya pasaron  más de 3 meses desde que el bot fue lanzado al público y alcanzó más de 150 servidores de Discord! Hoy, estoy feliz de anunciar la primera actualización grande del bot, la versión 1.2, la actualización de las divisas!  Estos son los cambios introducidos en la versión: ")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/811043646848630786/argboticon-03.png")
        .addField(":dollar: ¡Nuevas divisas! ", "Como la misma actualización lo indica, se han agregado un total de 17 nuevas divisas, formando un total de 21 divisas actualmente disponibles! Estas nuevas son: yen japonés, libra esterlina,  rublo ruso, dólar canadiense, dólar australiano, dólar neozelandes, peso mexicano, peso chileno, peso uruguayo, peso boliviano, peso colombiano, sol  peruano, guarani paraguayo, bolivar venezolano,  rupia india, yuan chino y won surcoreano!")
        .addField(":flag_ar: ¡Provincias! ","Se agregó una función para  consultar información  de  las 23 provincias argentinas y la Ciudad Autónoma de buenos Aires!  Pruebalo con *ar provincia [provincia] ")
        .addField(":grey_exclamation: Más información", "Nueva información  de cada divisa en una  segunda página")
        .addField(":calendar: Elecciones ", "Nuevo contador de días hasta  las siguientes  elecciones!")
        .addField(":tv: ¡Nuevos servicios! " ,"Se agregó el precio de  HBO Max, Paramount+, Discord  Nitro, Google One, EA Play, Wallet de Steam y Twitch!")
        .addField(":moneybag: Impuesto ", "Se agregó  una segunda página al comando de impuesto para ver el impuesto sin IVA (65%)")
        .addField(":question: Help"," El comando de help recibió un gran cambio")
        .addField(":microbe: Actualización a las funciones de covid19 ","Se agregaron nuevos países para ver sus casos de covid19, además de una segunda pestaña para ver los casos en el día de hoy")
        .addField(":incoming_envelope: Bienvenido al servidor del bot! ","¡Ya disponible el servidor de discord! Usa el comando *ar discord para unirte!")
        .addField(":white_check_mark: Apoya al bot votando en top.gg! " ,"Se  agregó el comando *ar vote ")
        .addField(":eyes: Entre otras cosas ", "Se mejoró el código y se hicieron otros cambios menores" )
  
    
      
        const button1 = new MessageButton()
        .setCustomId("previousbtn")
        .setLabel("Más reciente")
       .setStyle("SUCCESS");
      
       const button2 = new MessageButton()
       .setCustomId("nextbtn")
       .setLabel("Anterior")
       .setStyle("DANGER");
      
       const pages = [
       embed14,
       embed13,
       embed12,
      
      
      ];
      
      const buttonList = [button1, button2];
      const timeout = 120000;
      paginationEmbed(interaction, pages, buttonList, timeout);


     }

 })

//  client.on('interactionCreate', async(interaction) => {
//   if(!interaction.isCommand()){
//     return
//   }


//   const {commandName , options} = interaction
//   if(commandName === 'husoshorarios') {
//     let hora; //Día actual
//     hora = new Date();

//    const embed1 = new Discord.MessageEmbed()
//    .setTitle("Hora y fechas actuales en distintos husos horarios")
//    .setURL("https://es.wikipedia.org/wiki/Huso_horario")
//    .setColor("#7eb2fa")
//    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929137815256698962/time-zone.png")
//     .addField("  GMT-3 :flag_ar: :flag_uy: :flag_br:  ",  hora.toLocaleString("es-ES", {timeZone: "America/Argentina/Buenos_Aires"}))
//     .addField("  GMT-4 :flag_cl: :flag_py: :flag_bo: :flag_br: :flag_ve: ", hora.toLocaleString("es-ES", {timeZone: "America/Santiago"}))
//     .addField("  GMT-5 :flag_pe: :flag_ec: :flag_co: :flag_us: ", hora.toLocaleString("es-ES", {timeZone: "America/Lima"}))
//     .addField("  GMT-6 :flag_mx: :flag_us: :flag_ca: ", hora.toLocaleString("es-ES", {timeZone: "America/Mexico_City"}))
//     .addField("  GMT-7 :flag_mx: :flag_us: :flag_ca: ", hora.toLocaleString("es-ES", {timeZone: "America/Phoenix"}))
//     .addField("  GMT-8 :flag_mx: :flag_us: :flag_ca: ", hora.toLocaleString("es-ES", {timeZone: "America/Tijuana"}))
//     .addField("  GMT-9 :flag_us: (Alaska) ", hora.toLocaleString("es-ES", {timeZone: "America/Juneau"}))


//     const embed2 = new Discord.MessageEmbed()
//     .setTitle("Hora Actual en distintos husos horarios")
//     .setURL("https://es.wikipedia.org/wiki/Huso_horario")
//     .setColor("#7eb2fa")
//     .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929137815256698962/time-zone.png")
//     .addField("  GMT+1 :flag_gb: :flag_ie: :flag_pt: ", hora.toLocaleString("es-ES", {timeZone: "Europe/London"}) )
//     .addField(" GMT+2 :flag_za: :flag_eg: :flag_es: :flag_fr: :flag_it: :flag_ch: :flag_de: :flag_nl: :flag_no: :flag_se:   ", hora.toLocaleString("es-ES", {timeZone: "Europe/Madrid"}))
//     .addField(" GMT+3 :flag_ua: :flag_fi: :flag_il: :flag_ru: :flag_tr: :flag_sa:   ", hora.toLocaleString("es-ES", {timeZone: "Europe/Moscow"}))
//     .addField(" GMT+8 :flag_cn: :flag_mn: :flag_tw: :flag_au:   ", hora.toLocaleString("es-ES", {timeZone: "Asia/Taipei"}))
//     .addField(" GMT+9 :flag_jp: :flag_kr: :flag_au: ", hora.toLocaleString("es-ES", {timeZone: "Asia/Tokyo"}))


 
//     const button1 = new MessageButton()
//     .setCustomId("previousbtn")
//     .setLabel("GMT-")
//    .setStyle("SUCCESS");
  
//    const button2 = new MessageButton()
//    .setCustomId("nextbtn")
//    .setLabel("GMT+")
//    .setStyle("PRIMARY");
  
//    const pages = [
//    embed1,
//    embed2,
  
  
//   ];
  
//   const buttonList = [button1, button2];
//   const timeout = 30000;
//   paginationEmbed(interaction, pages, buttonList, timeout);
  
    
//   }

// })

 //Calculadora
 
 client.on('interactionCreate', async(interaction) => {
  if(!interaction.isCommand()){
    return
  }

const {commandName , options} = interaction
if(commandName === 'calculadora') {

  await interaction.deferReply();
simplydjs.calculator(interaction, {
  embedColor: "#0ce8dd",
  slash: true,
  credit: false
});

}
})


//Covid
 client.on('interactionCreate', async(interaction) => {
  if(!interaction.isCommand()){
    return
  }

  const {commandName , options} = interaction
  if(commandName=="covid") {

    if (interaction.options.getSubcommand() === 'casos') {
      axios.get('https://disease.sh/v3/covid-19/countries/argentina')

      .then((covidArg)=> {
    
      const embed1 = new Discord.MessageEmbed()
      .setTitle(":flag_ar: Casos totales de Covid-19 en Argentina :flag_ar:")
      .setColor("#dd5460")
      .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928706078806536243/casosarg.png")
       .addField("Casos :mask: ", currencyFormatter.format(covidArg.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
      .addField("Testeos :test_tube: ", currencyFormatter.format(covidArg.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
      .addField("Muertes :skull: ", currencyFormatter.format(covidArg.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
      .addField("Recuperados :green_square: ", currencyFormatter.format(covidArg.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
      .addField("Activos :red_square: ", currencyFormatter.format(covidArg.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
     
    
      const embed2 = new Discord.MessageEmbed()
      .setTitle(":flag_ar: Casos de Covid-19 del día de hoy en Argentina :flag_ar:")
      .setColor("#dd5460")
      .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928706078806536243/casosarg.png")
      .addField("Casos hoy :mask: ", currencyFormatter.format(covidArg.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
      .addField("Muertes hoy :skull: ", currencyFormatter.format(covidArg.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
      .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidArg.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)
    
     
    
    
      const button1 = new MessageButton()
      .setCustomId("previousbtn")
      .setLabel("😷 Total")
     .setStyle("DANGER");
    
     const button2 = new MessageButton()
     .setCustomId("nextbtn")
     .setLabel("📅 Hoy")
     .setStyle("SUCCESS");
    
     const pages = [
     embed1,
     embed2,
    
    
    ];
    
    const buttonList = [button1, button2];
    const timeout = 30000;
    paginationEmbed(interaction, pages, buttonList, timeout);
    
    
    
    
       })
       .catch((err) => {
       console.error('ERR', err)
     
            
      })
      
     
    }    

    if (interaction.options.getSubcommand() === 'global') {
      axios.get('https://disease.sh/v3/covid-19/all')
  .then((covidGlobal)=> {
  const embed = new Discord.MessageEmbed()
  .setTitle(":earth_americas: Casos totales de Covid-19 en el mundo :earth_americas:")
  .setColor("#dd5460")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903133714362531901/casosglobal.png")
  .addField("Casos :mask: ", currencyFormatter.format(covidGlobal.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidGlobal.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidGlobal.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidGlobal.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidGlobal.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
 
  return interaction.reply({ embeds: [embed] });

 })
  .catch((err) => {
  console.error('ERR', err)

       
 })

    }
    if (interaction.options.getSubcommand() === 'recomendaciones') {
      const embed = new Discord.MessageEmbed()
      .setTitle(":mask: Recomendaciones ante el Covid-19 :mask: ")
      .setColor("#366ef7")
      .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2. \n Estas son algunas recomendaciones. ")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903136380580937768/mask.png")
      .addField(" :open_hands: Lávate las manos con frecuencia " ," Usa agua y jabón o un desinfectante de manos a base de alcohol ")
      .addField(" :person_walking: Manten la distancia " ," Mantén una distancia de seguridad con personas que tosan o estornuden. ")
      .addField(" :mask: Usa mascarilla " ," Utiliza mascarilla cuando no sea posible mantener el distanciamiento físico. ")
      .addField(" :eyes: :no_entry_sign: " ," No te toques los ojos, la nariz ni la boca. ")
      .addField(" :sneezing_face: Cuidado al estornudar " ," Cuando tosas o estornudes, cúbrete la nariz y la boca con el codo flexionado o con un pañuelo. ")
      .addField(" :house: Quedate en casa " ," Si no te encuentras bien, quédate en casa. ")
      .addField(" :ambulance: En caso de síntomas " ," En caso de que tengas fiebre, tos o dificultad para respirar, busca atención médica. ")
      
      return interaction.reply({ embeds: [embed] });
    
    
    }
    if (interaction.options.getSubcommand() === 'sintomas') {
      const embed = new Discord.MessageEmbed()
  .setTitle(":sneezing_face: Síntomas del Covid-19 :mask: ")
  .setColor("#dd5460")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.\n Estos son algunos de los síntomas de la enfermedad, si padece alguno de ellos y no está seguro si tiene el virus se recomienda hacerse un hisopado. ")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903134963501768754/Sintomas.png")
  .addField(" :green_circle: Síntomas más habituales" ," - Fiebre \n - Tos seca \n - Cansancio ",true)
  .addField(" :yellow_circle: Síntomas menos comunes" ," - Molestias y dolores \n - Dolor de garganta \n - Diarrea \n - Conjuntivitis \n - Dolor de cabeza \n - Pérdida del sentido del olfato o del gusto \n - Erupciones cutáneas o pérdida del color en los dedos de las manos o de los pies",true)
  .addField(" :red_circle: Síntomas más graves" ," - Dificultad para respirar o sensación de falta de aire \n - Dolor o presión en el pecho \n - Incapacidad para hablar o moverse ",true)
    
  return interaction.reply({ embeds: [embed] });
    }


    
    if (interaction.options.getSubcommand() === 'covidpais') {

//Lista
      var pais = options.getString('pais')
      if (pais!=null) {
      var pais2 = pais.toLowerCase()
      }

      if (pais==null) {

        const embed = new Discord.MessageEmbed()
       .setTitle("Países disponibles")
       .setColor("RED")
       .setDescription("Utiliza `/covid covidpais [nombre del país]` para ver los datos de covid")
       .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903133714362531901/casosglobal.png")
       .addField("» América del Sur ", "`Argentina`  `Uruguay`  `Paraguay`  `Brasil`  `Chile`  `Bolivia`  `Perú`  `Ecuador`  `Colombia`  `Venezuela`" )
       .addField("» América del Norte ", "`México`  `Estados Unidos`  `Canadá`" )
       .addField("» América Central", "`Panamá`  `Costa Rica`  `Nicaragua`  `Honduras`  `El Salvador`  `Guatemala`  `Belice`" )
       .addField("» Caribe", "`República Dominicana`  `Cuba`  `Jamaica`  `Bahamas`" )
       .addField("» Europa","`Reino Unido`  `Irlanda`  `España`  `Portugal`  `Francia`  `Italia`  `Alemania`  `Polonia`  `Paises Bajos`  `Rusia`  `Noruega`  `Suecia`  `Finlanda`  `Dinamarca`  `Islandia`  `Suiza`  `Turquía`  `Grecia`  `Belgica`  `República Checa`  `Eslovaquia`  `Austria`  `Ucrania`")
       .addField("» Asia","`Japon`  `Corea del Sur`  `China`  `Taiwan`  `India`")
       .addField("» Oceanía","`Australia`  `Nueva Zelanda`")
       return interaction.reply({ embeds: [embed] });
      }

     
//Argentina
      if (pais2=="argentina"  || pais2=="ar") {
        axios.get('https://disease.sh/v3/covid-19/countries/argentina')
        .then((covidArg)=> {
        const embed1 = new Discord.MessageEmbed()
        .setTitle(":flag_ar: Casos totales de Covid-19 en Argentina :flag_ar:")
        .setColor("#dd5460")
        .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928706078806536243/casosarg.png")
         .addField("Casos :mask: ", currencyFormatter.format(covidArg.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
        .addField("Testeos :test_tube: ", currencyFormatter.format(covidArg.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
        .addField("Muertes :skull: ", currencyFormatter.format(covidArg.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
        .addField("Recuperados :green_square: ", currencyFormatter.format(covidArg.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
        .addField("Activos :red_square: ", currencyFormatter.format(covidArg.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
 
      
        const embed2 = new Discord.MessageEmbed()
        .setTitle(":flag_ar: Casos de Covid-19 del día de hoy en Argentina :flag_ar:")
        .setColor("#dd5460")
        .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928706078806536243/casosarg.png")
        .addField("Casos hoy :mask: ", currencyFormatter.format(covidArg.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
        .addField("Muertes hoy :skull: ", currencyFormatter.format(covidArg.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
        .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidArg.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)
       
      
        const button1 = new MessageButton()
        .setCustomId("previousbtn")
        .setLabel("😷 Total")
       .setStyle("DANGER");
      
       const button2 = new MessageButton()
       .setCustomId("nextbtn")
       .setLabel("📅 Hoy")
       .setStyle("SUCCESS");
      
       const pages = [
       embed1,
       embed2,
      
      
      ];
      
      const buttonList = [button1, button2];
      const timeout = 30000;
        paginationEmbed(interaction, pages, buttonList, timeout);
      
      
      
      
         })
         .catch((err) => {
         console.error('ERR', err)
       
              
        })
        
       
      
      }
//Uruguay
      if (pais2=="uruguay"  || pais2=="uy") {
        axios.get('https://disease.sh/v3/covid-19/countries/uruguay')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_uy: Casos totales de Covid-19 en Uruguay :flag_uy:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928706079771222126/casosuruguay.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)


  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_uy: Casos de Covid-19 del día de hoy en Uruguay :flag_uy:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928706079771222126/casosuruguay.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)

  

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  
 

      }
//Paraguay
      if (pais2=="paraguay"  || pais2=="paraguay") {
        axios.get('https://disease.sh/v3/covid-19/countries/paraguay')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_py: Casos totales de Covid-19 en Paraguay :flag_py:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929829420330549268/casosparaguay.png")
  .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)

  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_ar: Casos de Covid-19 del día de hoy en Paraguay :flag_py:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929829420330549268/casosparaguay.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)



  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  
 


      }


  //Brazil

      if (pais2=="brasil"  || pais2=="br" || pais2=="brazil") {
        axios.get('https://disease.sh/v3/covid-19/countries/brazil')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_br: Casos totales de Covid-19 en Brasil :flag_br:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928706079083347988/casosbrasil.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)


  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_br: Casos de Covid-19 del día de hoy en Brasil :flag_br:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928706079083347988/casosbrasil.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);
   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
      }

      //Chile

if (pais2=="cl" || pais2=="chile") {
  axios.get('https://disease.sh/v3/covid-19/countries/chile')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_cl: Casos totales de Covid-19 en Chile :flag_cl:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928706079305637899/casoschile.png")
.addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)

  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_cl: Casos de Covid-19 del día de hoy en Chile :flag_cl:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928706079305637899/casoschile.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  
 }

 //Bolivia
 if (pais2=="bolivia" || pais2=="bo") {
  axios.get('https://disease.sh/v3/covid-19/countries/bolivia')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_bo: Casos totales de Covid-19 en Bolivia :flag_bo:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928714502113984552/casosbolivia.png")
  .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true) 
  
  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_bo: Casos de Covid-19 del día de hoy en Bolivia :flag_bo:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928714502113984552/casosbolivia.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)

 
  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  
 

 }

 //Peru

 if (pais2=="peru" || pais2=="peru" || pais2=="pe") {
  axios.get('https://disease.sh/v3/covid-19/countries/peru')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_pe: Casos totales de Covid-19 en Perú :flag_pe:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928792443531452426/casosperu2.png")
  .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
 


  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_pe: Casos de Covid-19 del día de hoy en Perú :flag_pe:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928792443531452426/casosperu2.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  
 
 }
//Ecuador

 if (pais2=="ecuador" || pais2=="ec") {
  axios.get('https://disease.sh/v3/covid-19/countries/ecuador')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_ec: Casos totales de Covid-19 en Ecuador :flag_ec:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929829420104040538/casosecuador.png")
  .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
 

  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_ec: Casos de Covid-19 del día de hoy en Ecuador :flag_ec:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929829420104040538/casosecuador.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy:skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
   
 
    }
//Colombia

    if (pais2=="colombia" || pais2=="co") {
      axios.get('https://disease.sh/v3/covid-19/countries/colombia')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_co: Casos totales de Covid-19 en Colombia :flag_co:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928706079527948308/casoscolombia.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
 
  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_co: Casos de Covid-19 del día de hoy en Colombia :flag_co:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928706079527948308/casoscolombia.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  
 
    }


//Venezuela

    if (pais2=="venezuela" || pais2=="ve") {
      axios.get('https://disease.sh/v3/covid-19/countries/venezuela')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_ve: Casos totales de Covid-19 en Venezuela :flag_ve:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928706080031248394/casosvenezuela.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true) 

  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_ve: Casos de Covid-19 del día de hoy en Venezuela :flag_ve:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928706080031248394/casosvenezuela.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
     
  })
    }

//Norte América

//México
if (pais2=="mexico" || pais2=="mx" || pais2=="méxico") {
  axios.get('https://disease.sh/v3/covid-19/countries/mexico')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_mx: Casos totales de Covid-19 en México :flag_mx:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928710311433883788/casosmexico.png")
  .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
 
  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_mx: Casos de Covid-19 del día de hoy en México :flag_mx:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928710311433883788/casosmexico.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  
 

}

//USA

if (pais2=="usa" || pais2=="estadosunidos" || pais2=="america" || pais2=="eeuu" || pais2=="us" || pais2=="estados" || pais2=="américa" || pais2=="estados unidos" || pais2=="estados unidos  de  américa" || pais2=="estados unidos de america"    )
 {
  axios.get('https://disease.sh/v3/covid-19/countries/usa')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_us: Casos totales de Covid-19 en los Estados Unidos de América :flag_us:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928710311714897970/casosusa.png")
  .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)


  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_us: Casos de Covid-19 del día de hoy en los Estados Unidos de América :flag_us:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928710311714897970/casosusa.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  
 
}
if (pais2=="canada" || pais2=="ca" || pais2=="canadá") {
  axios.get('https://disease.sh/v3/covid-19/countries/canada')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_ca: Casos totales de Covid-19 en Canadá :flag_ca:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928710311228342332/casoscanada.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)

  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_ca: Casos de Covid-19 del día de hoy en Canadá :flag_ca:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928710311228342332/casoscanada.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
}
//
//Panamá
if (pais2=="panama" || pais2=="pa" || pais2=="pa") {
  axios.get('https://disease.sh/v3/covid-19/countries/panama')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_pa: Casos totales de Covid-19 en Panamá :flag_pa:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928785653427241000/casospanama.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)

  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_pa: Casos de Covid-19 del día de hoy en Panamá :flag_pa:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928785653427241000/casospanama.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  
}

//Costa Rica
if (pais2=="costa rica" || pais2=="cr" || pais2=="costarica") {
  axios.get('https://disease.sh/v3/covid-19/countries/costa%20rica')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_cr: Casos totales de Covid-19 en Costa Rica :flag_cr:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928786730130239530/casoscostarica.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
 
  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_cr: Casos de Covid-19 del día de hoy en Costa Rica :flag_cr:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928786730130239530/casoscostarica.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados  :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  
 
}

//Nicaragua
if (pais2=="nicaragua" || pais2=="ni") {

  axios.get('https://disease.sh/v3/covid-19/countries/nicaragua')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_ni: Casos totales de Covid-19 en Nicaragua :flag_ni:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928786729694036048/casosnicaragua.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)


  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_ni: Casos de Covid-19 del día de hoy en Nicaragua :flag_ni:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928786729694036048/casosnicaragua.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(message, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  
 

}

//Honduras

if (pais2=="honduras" || pais2=="hn") {
  axios.get('https://disease.sh/v3/covid-19/countries/honduras')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_hn: Casos totales de Covid-19 en Honduras :flag_hn:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928786729056489482/casoshonduras.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)

  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_hn: Casos de Covid-19 del día de hoy en Honduras :flag_hn:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928786729056489482/casoshonduras.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("MUertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  
 
}

//Salvador

if(pais2=="el salvador" || pais2=="salvador"  ||  pais2=="sv")
{
  axios.get('https://disease.sh/v3/covid-19/countries/el%20salvador')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_sv: Casos totales de Covid-19 en El Salvador :flag_sv:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928786729287172186/casoselsalvador.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
 
  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_sv: Casos de Covid-19 del día de hoy en El Salvador :flag_sv:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928786729287172186/casoselsalvador.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);


   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  
 
}

//Guatemala
if(pais2=="guatemala" || pais2=="gt")
{
  axios.get('https://disease.sh/v3/covid-19/countries/guatemala')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_gt: Casos totales de Covid-19 en Guatemala :flag_gt:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928786728796446793/casosguatemala.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  
  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_gt: Casos de Covid-19 del día de hoy en Guatemala :flag_gt:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928786728796446793/casosguatemala.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  
}

//Belice

if(pais2=="belice" || pais2=="blz")
{
  axios.get('https://disease.sh/v3/covid-19/countries/belize')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_bz: Casos totales de Covid-19 en Belice :flag_bz:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928786728553160764/casosbelize.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
 
  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_bz: Casos de Covid-19 del día de hoy en Belice :flag_bz:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928786728553160764/casosbelize.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)

 
  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  
 
}

//Rep. Dominicana
if(pais2=="belice" || pais2=="blz")
{
  axios.get('https://disease.sh/v3/covid-19/countries/dominican%20republic')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_do: Casos totales de Covid-19 en República Dominicana :flag_do:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928786728326676550/casosrepdom.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)


  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_do: Casos de Covid-19 del día de hoy en República Dominicana :flag_do:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928786728326676550/casosrepdom.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)

 
  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  

}

//Cuba


if(pais2=="cuba" || pais2=="cu"){
  axios.get('https://disease.sh/v3/covid-19/countries/cuba')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_cu: Casos totales de Covid-19 en Cuba :flag_cu:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928796840038662254/casoscuba.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)

  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_cu: Casos de Covid-19 del día de hoy en Cuba :flag_cu:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928796840038662254/casoscuba.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  
}

if(pais2=="jamaica" || pais2=="jm"){

  axios.get('https://disease.sh/v3/covid-19/countries/jamaica')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_jm: Casos totales de Covid-19 en Jamaica :flag_jm:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928796839518539816/casosjamaica.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)

  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_jm: Casos de Covid-19 del día de hoy en Jamaica :flag_jm:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928796839518539816/casosjamaica.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  
 

}


//Bahamas


if(pais2=="bahamas" || pais2=="bm"){
  axios.get('https://disease.sh/v3/covid-19/countries/bahamas')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_bs: Casos totales de Covid-19 en Bahamas :flag_bs:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/816453572304437288/bahamasxd.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
 
  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_bs: Casos de Covid-19 del día de hoy en Bahamas :flag_bs:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/816453572304437288/bahamasxd.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  

}

//Europa

//Reino Unido

if(pais2=="reino unido" || pais2=="uk"  || pais2=="gb" || pais2=="gran bretaña" || pais2=="inglaterra"  ||  pais2=="escocia"  || pais2=="irlanda del norte" || pais2=="gales"){
  axios.get('https://disease.sh/v3/covid-19/countries/uk')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_gb: Casos totales de Covid-19 en el Reino Unido :flag_gb:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928805925979062272/casosuk.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  
  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_gb: Casos de Covid-19 del día de hoy en el Reino Unido :flag_gb:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928805925979062272/casosuk.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  
 }

 //Irlanda


 if(pais2=="irlanda" || pais2=="ie" || pais2=="irl" ){

  axios.get('https://disease.sh/v3/covid-19/countries/ireland')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_ie:  Casos totales de Covid-19 en Irlanda :flag_ie: ")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929830998143803422/casosirlanda.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  
  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_ie: Casos de Covid-19 del día de hoy en Irlanda :flag_ie:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929830998143803422/casosirlanda.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  


 }


 if(pais2=="españa" || pais2=="es"){
  axios.get('https://disease.sh/v3/covid-19/countries/spain')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_es: Casos totales de Covid-19 en España :flag_es:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928805925056307250/casospain.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)

  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_es: Casos de Covid-19 del día de hoy en España :flag_es:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928805925056307250/casospain.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  
 
 } 

 if(pais2=="portugal"  ||  pais2=="pt"){
  axios.get('https://disease.sh/v3/covid-19/countries/portugal')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_pt: Casos totales de Covid-19 en Portugal :flag_pt:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928805925677047848/casosportugal.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
 
  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_pt: Casos de Covid-19 del día de hoy en Portugal :flag_pt:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928805925677047848/casosportugal.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  
 }
 
 if(pais2=="francia" || pais2=="fr" ){
  axios.get('https://disease.sh/v3/covid-19/countries/france')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_fr: Casos totales de Covid-19 en Francia :flag_fr:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928807788359061574/casosfrancia.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
 
  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_fr: Casos de Covid-19 del día de hoy en Francia :flag_fr:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928807788359061574/casosfrancia.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  
 
 }

 //Italia

 if(pais2=="italia" || pais2=="italia" ){
  axios.get('https://disease.sh/v3/covid-19/countries/italy')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_it: Casos totales de Covid-19 en Italia :flag_it:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928807788560404510/casositalia.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  
  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_it: Casos de Covid-19 del día de hoy en Italia :flag_it:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928807788560404510/casositalia.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  
 }


 if(pais2=="alemania" || pais2=="de"){
  axios.get('https://disease.sh/v3/covid-19/countries/germany')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_de: Casos totales de Covid-19 en Alemania :flag_de:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928805925328912414/casosalemania.png")
  .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
 
  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_de: Casos de Covid-19 del día de hoy en Alemania :flag_de:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928805925328912414/casosalemania.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("MUertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  
 
 }

//Polonia

 if(pais2=="polonia" || pais2=="pl"){
  axios.get('https://disease.sh/v3/covid-19/countries/poland')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_pl: Casos totales de Covid-19 en Polonia :flag_pl:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928807788111609946/casospoland.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)

  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_pl: Casos de Covid-19 del día de hoy en Polonia :flag_pl:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928807788111609946/casospoland.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
     
  })
 }

 //Paises Bajos
 if(pais2=="netherlands" || pais2=="holanda" || pais2=="paisesbajos" || pais2=="paises bajos" || pais2=="nl")
 {
  axios.get('https://disease.sh/v3/covid-19/countries/netherlands')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_nl: Casos totales de Covid-19 en los Paises Bajos :flag_nl:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928807787851554867/casosnetherlands.png")
  .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
 
  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_nl: Casos de Covid-19 del día de hoy en los Paises Bajos :flag_nl:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928807787851554867/casosnetherlands.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);

   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  
 }

 //Rusia

 if(pais2=="rusia" || pais2=="russia" || pais2=="ru"){

  axios.get('https://disease.sh/v3/covid-19/countries/russia')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_ru: Casos totales de Covid-19 en Rusia :flag_ru:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928807787608277002/casosrusia.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
 

  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_ru: Casos de Covid-19 del día de hoy en Rusia :flag_ru:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928807787608277002/casosrusia.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  
 }

 if(pais2=="islandia" || pais2=="ic"){
  axios.get('https://disease.sh/v3/covid-19/countries/iceland')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_is:  Casos totales de Covid-19 en Islandia :flag_is: ")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929834380376043580/casosislandia.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  
  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_is:  Casos de Covid-19 del día de hoy en Islandia :flag_is: ")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929834380376043580/casosislandia.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  

 }

 if(pais2=="noruega" || pais2=="no"){
  axios.get('https://disease.sh/v3/covid-19/countries/norway')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_no:  Casos totales de Covid-19 en Noruega :flag_no: ")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929834380153724958/casosnoruega.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  
  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_no:  Casos de Covid-19 del día de hoy en Noruega :flag_no: ")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929834380153724958/casosnoruega.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);


   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
   
}

//Suecia


if(pais2=="suecia" || pais2=="se"){
  axios.get('https://disease.sh/v3/covid-19/countries/sweden')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_se:  Casos totales de Covid-19 en Suecia :flag_se: ")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929834380594135090/casossuecia.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  
  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_se:  Casos de Covid-19 del día de hoy en Suecia :flag_se: ")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929834380594135090/casossuecia.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  

}

  //Finlandia

  if(pais2=="finlandia" || pais2=="fi")
 {

  axios.get('https://disease.sh/v3/covid-19/countries/finland')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_fi:  Casos totales de Covid-19 en Finlandia :flag_fi: ")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929834379725930586/casosfinlandia.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  
  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_fi:  Casos de Covid-19 del día de hoy en Finlandia :flag_fi: ")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929834379725930586/casosfinlandia.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  
 


  }

  //Dinamarca
  if(pais2=="dinamarca" || pais2=="dk"){
    axios.get('https://disease.sh/v3/covid-19/countries/finland')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_dk:  Casos totales de Covid-19 en Dinamarca :flag_dk: ")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929834379956605020/casosdinamarca.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  
  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_dk:  Casos de Covid-19 del día de hoy en Dinamarca :flag_dk: ")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929834379956605020/casosdinamarca.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  

  }

  //Islandia

  if(pais2=="suiza" || pais2=="ch"){

    axios.get('https://disease.sh/v3/covid-19/countries/switzerland')
    .then((covidPais)=> {
    const embed1 = new Discord.MessageEmbed()
    .setTitle(":flag_ch:  Casos totales de Covid-19 en Suiza :flag_ch: ")
    .setColor("RED")
    .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/935282434260467783/casossuiza.png")
   .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
    .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
    .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
    .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
    .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  
    
    const embed2 = new Discord.MessageEmbed()
    .setTitle(":flag_ch:  Casos de Covid-19 del día de hoy en Suiza :flag_ch: ")
    .setColor("RED")
    .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/935282434260467783/casossuiza.png")
    .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
    .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
    .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)
  
  
    const button1 = new MessageButton()
    .setCustomId("previousbtn")
    .setLabel("😷 Total")
   .setStyle("DANGER");
  
   const button2 = new MessageButton()
   .setCustomId("nextbtn")
   .setLabel("📅 Hoy")
   .setStyle("SUCCESS");
  
   const pages = [
   embed1,
   embed2,
  
  
  ];
  
  const buttonList = [button1, button2];
  const timeout = 30000;
  paginationEmbed(interaction, pages, buttonList, timeout);
  
  
  
  
     })
     .catch((err) => {
     console.error('ERR', err)
   
          
    })
    
  }

  if(pais2=="turquía" || pais2=="tr" ||  pais2=="turquia"  || pais2=="turkey"){

    axios.get('https://disease.sh/v3/covid-19/countries/turkey')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_tr:  Casos totales de Covid-19 en Turquía :flag_tr: ")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/935283167827472464/casosturkey.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)

  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_tr:  Casos de Covid-19 del día de hoy en Turquía :flag_tr: ")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/935283167827472464/casosturkey.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  
 

  }

  if(pais2=="grecia" || pais2=="gr"){
    axios.get('https://disease.sh/v3/covid-19/countries/greek')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_gr:  Casos totales de Covid-19 en Grecia :flag_gr: ")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/935287779531833494/casosgrecia.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
  
  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_gr:  Casos de Covid-19 del día de hoy en Grecia :flag_gr: ")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/935287779531833494/casosgrecia.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(message, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  


  }


//Grecia
if(pais2=="belgica" || pais2=="be"){
axios.get('https://disease.sh/v3/covid-19/countries/belgium')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_be:  Casos totales de Covid-19 en Belgica :flag_be: ")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/935288979085991946/casosbelgica.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  
  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_be:  Casos de Covid-19 del día de hoy en Belgica :flag_be: ")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/935288979085991946/casosbelgica.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  
}

//Rep  Checa
if(pais2=="republica checa" || pais2=="chequia"  ||  pais2=="república  checa" || pais2=="checa" ){
  axios.get('https://disease.sh/v3/covid-19/countries/Czechia')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_cz:  Casos totales de Covid-19 en República Checa :flag_cz: ")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/935291012337786900/casoschequia.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
  
  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_cz:  Casos de Covid-19 del día de hoy en República Checa :flag_cz: ")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/935291012337786900/casoschequia.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(message, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  

}
//Eslovaquia
if(pais2=="eslovaquia" || pais2=="sk"  ||  pais2=="slovakia"){
  axios.get('https://disease.sh/v3/covid-19/countries/Slovakia')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_sk:  Casos totales de Covid-19 en Eslovaquia :flag_sk: ")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/935291528274915358/casosslovakia.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  
  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_cz:  Casos de Covid-19 del día de hoy en República Checa :flag_cz: ")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/935291012337786900/casoschequia.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  

}

//Austria

if(pais2=="austria" || pais2=="at"){
  axios.get('https://disease.sh/v3/covid-19/countries/Austria')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_at:  Casos totales de Covid-19 en Austria :flag_at: ")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/935293798743945306/casosaustria.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  
  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_at:  Casos de Covid-19 del día de hoy en Austria :flag_at: ")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/935293798743945306/casosaustria.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  
 
}

//Ucrania

if(pais2=="ucrania" || pais2=="ua"){
  axios.get('https://disease.sh/v3/covid-19/countries/Ukraine')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_ua:  Casos totales de Covid-19 en Ucrania :flag_ua:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/935297506064089158/casosucrania.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
  
  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_ua:  Casos de Covid-19 del día de hoy en Ucrania :flag_ua: ")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/935297506064089158/casosucrania.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  
 
}


//Japon
if(pais2=="japon" || pais2=="jp"){

  axios.get('https://disease.sh/v3/covid-19/countries/japan')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_jp: Casos totales de Covid-19 en Japon :flag_jp:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928816696574214164/casosjapon.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)


  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_jp: Casos de Covid-19 del día de hoy en Japon :flag_jp:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928816696574214164/casosjapon.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  



}

//Corea del sur
if(pais2=="corea del sur" || pais2=="corea" || pais2=="korea"  || pais2=="southkorea"  || pais2=="surcorea"){

  axios.get('https://disease.sh/v3/covid-19/countries/kr')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_kr: Casos totales de Covid-19 en Corea del Sur :flag_kr:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928816696330964992/casoscorea.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)

  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_kr: Casos de Covid-19 del día de hoy en Corea del Sur :flag_kr:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928816696330964992/casoscorea.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  
 
}

//China
if(pais2=="cn" || pais2=="china" || pais2=="república popular de china" || pais2=="republica popular de china" ){
  axios.get('https://disease.sh/v3/covid-19/countries/china')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_cn: Casos totales de Covid-19 en la República Popular de China :flag_cn:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2. \n Es posible que estos datos no sean veridicos")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929841100406005781/covidchina.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())

  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_cn: Casos de Covid-19 del día de hoy en la República Popular de China :flag_cn:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2. \n Es posible que estos datos no sean veridicos")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929841100406005781/covidchina.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(message, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  


}

//Taiwan
if(pais2=="taiwan" || pais2=="tw" || pais2=="república de china" || pais2=="republica de china"){
  axios.get('https://disease.sh/v3/covid-19/countries/taiwan')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_tw: Casos totales de Covid-19 en la República de China (Taiwan) :flag_tw:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929841100145983498/casostaiwan.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  
  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_tw: Casos de Covid-19 del día de hoy en la República de China (Taiwan) :flag_tw:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2. \n Es posible que estos datos no sean veridicos")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929841100145983498/casostaiwan.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  

}

//India
if(pais2=="india" || pais2=="in"){

  axios.get('https://disease.sh/v3/covid-19/countries/india')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_in: Casos totales de Covid-19 en India :flag_in:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928816696112848906/casosindia.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)

  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_in: Casos de Covid-19 del día de hoy en India :flag_in:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928816696112848906/casosindia.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  


}


//Filipinas
if(pais2=="filipinas" || pais2=="ph" ){
  axios.get('https://disease.sh/v3/covid-19/countries/ph')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_ph: Casos totales de Covid-19 en Filipinas :flag_ph:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/935302014433386536/Casosfilipinas.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)

  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_ph: Casos de Covid-19 del día de hoy en Filipinas :flag_ph:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/935302014433386536/Casosfilipinas.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  


}

//Australia

if(pais2=="australia" || pais2=="au"){
  axios.get('https://disease.sh/v3/covid-19/countries/australia')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_au: Casos totales de Covid-19 en Australia :flag_au:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928816695882170489/casosaustralia.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)

  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_au: Casos de Covid-19 del día de hoy en Australia :flag_au:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928816695882170489/casosaustralia.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(interaction, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  

}


if(pais2=="nueva zelanda" || pais2=="nz"){
  axios.get('https://disease.sh/v3/covid-19/countries/nz')
  .then((covidPais)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle(":flag_nz: Casos totales de Covid-19 en Nueva Zelanda :flag_nz:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928816695651491850/casosnz.png")
 .addField("Casos :mask: ", currencyFormatter.format(covidPais.data['cases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Testeos :test_tube: ", currencyFormatter.format(covidPais.data['tests'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes :skull: ", currencyFormatter.format(covidPais.data['deaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados :green_square: ", currencyFormatter.format(covidPais.data['recovered'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Activos :red_square: ", currencyFormatter.format(covidPais.data['active'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())

  const embed2 = new Discord.MessageEmbed()
  .setTitle(":flag_nz: Casos de Covid-19 del día de hoy en Nueva Zelanda :flag_nz:")
  .setColor("RED")
  .setDescription("El Covid19 es una enfermedad infecciosa causada por el virus SARS-CoV-2.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928816695651491850/casosnz.png")
  .addField("Casos hoy :mask: ", currencyFormatter.format(covidPais.data['todayCases'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Muertes hoy :skull: ", currencyFormatter.format(covidPais.data['todayDeaths'], { locale: 'es-ES', code: ' ', precision: 0 }),true)
  .addField("Recuperados hoy :green_square: ", currencyFormatter.format(covidPais.data['todayRecovered'], { locale: 'es-ES', code: ' ', precision: 0}),true)


  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("😷 Total")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📅 Hoy")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(message, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  

}


}
    
    }
  })


//Comandos clásicos
 //Solucionar errores de prefijo
 

 client.on("message", (message) => {

  if(!message.content.startsWith(prefix)){
    return;
  }
  const args= message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift();
  console.log(args)

  const comandosslash = "`criptomoneda` `metal` `convertircripto` `convertirmetal` `pesoacripto` `pesoametal` `provinciainfo` `covidpais` `casos` `recomendaciones` `sintomas` `servicio` `datos` `elecciones` `futbol` `provinciainfo` `creador` `api` `invitar` `servidor` `votar` `donaciones` `update`" 

  //Creador

  if(command.toLowerCase() == "creador" || command.toLowerCase() == "developer") {
       
    const slash = new Discord.MessageEmbed()
    .setTitle("Prueba con `/creador` en su lugar")
    .setColor("#d6f2fc")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964400952452980736/slash.png")
    .addField("Slash  commands", "Debido a la  decisión de Discord de volver los Message Intents algo privilegiado, los comandos regulares serán remplazados por los Slash Commands desde el  1ro de septiembre, echale un vistazo con / y revisa los comandos" )  
    .addField(" Advertencia " , " Argenkit Bot irá eliminando los comandos clásicos progresivamente con el pasar de los meses para que sus usuarios vayan acostumbrandose al uso de los slash ")
    .addField(" Importante " , "Quizás sea necesario echar y volver a invitar al bot para que funcione si  es que invitaste al bot hace mucho tiempo ")
    .addField(" Comandos solo disponible con slash" ,  comandosslash)
      return message.reply({ embeds: [slash] });
  

    }

  //API

   if(command.toLowerCase() == "api" || command.toLowerCase() == "apis") {
    const slash = new Discord.MessageEmbed()
    .setTitle("Prueba con `/api` en su lugar")
    .setColor("#d6f2fc")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964400952452980736/slash.png")
    .addField("Slash  commands", "Debido a la  decisión de Discord de volver los Message Intents algo privilegiado, los comandos regulares serán remplazados por los Slash Commands desde el  1ro de septiembre, echale un vistazo con / y revisa los comandos" )  
    .addField(" Advertencia " , " Argenkit Bot irá eliminando los comandos clásicos progresivamente con el pasar de los meses para que sus usuarios vayan acostumbrandose al uso de los slash ")
    .addField(" Importante " , "Quizás sea necesario echar y volver a invitar al bot para que funcione si  es que invitaste al bot hace mucho tiempo ")
    .addField(" Comandos solo disponible con slash" ,  comandosslash)
      return message.reply({ embeds: [slash] });
  
  }

  //Donaciones

  if(command.toLowerCase() == "donaciones" || command.toLowerCase() == "donar") {
    const slash = new Discord.MessageEmbed()
    .setTitle("Prueba con `/api` en su lugar")
    .setColor("#d6f2fc")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964400952452980736/slash.png")
    .addField("Slash  commands", "Debido a la  decisión de Discord de volver los Message Intents algo privilegiado, los comandos regulares serán remplazados por los Slash Commands desde el  1ro de septiembre, echale un vistazo con / y revisa los comandos" )  
    .addField(" Advertencia " , " Argenkit Bot irá eliminando los comandos clásicos progresivamente con el pasar de los meses para que sus usuarios vayan acostumbrandose al uso de los slash ")
    .addField(" Importante " , "Quizás sea necesario echar y volver a invitar al bot para que funcione si  es que invitaste al bot hace mucho tiempo ")
    .addField(" Comandos solo disponible con slash" ,  comandosslash)
      return message.reply({ embeds: [slash] });
  }
//Votar

  if(command.toLowerCase() == "votar" || command.toLowerCase() == "vote") {
    const slash = new Discord.MessageEmbed()
    .setTitle("Prueba con `/votar` en su lugar")
    .setColor("#d6f2fc")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964400952452980736/slash.png")
    .addField("Slash  commands", "Debido a la  decisión de Discord de volver los Message Intents algo privilegiado, los comandos regulares serán remplazados por los Slash Commands desde el  1ro de septiembre, echale un vistazo con / y revisa los comandos" )  
    .addField(" Advertencia " , " Argenkit Bot irá eliminando los comandos clásicos progresivamente con el pasar de los meses para que sus usuarios vayan acostumbrandose al uso de los slash ")
    .addField(" Importante " , "Quizás sea necesario echar y volver a invitar al bot para que funcione si  es que invitaste al bot hace mucho tiempo ")
    .addField(" Comandos solo disponible con slash" ,  comandosslash)
      return message.reply({ embeds: [slash] });
  }

  //Servidor


  if(command.toLowerCase() == "servidor" || command.toLowerCase() == "discord" || command.toLowerCase() == "server" || command.toLowerCase() == "reportar" || command.toLowerCase() == "idea" || command.toLowerCase() == "aportar" ) {
    const slash = new Discord.MessageEmbed()
    .setTitle("Prueba con `/servidor` en su lugar")
    .setColor("#d6f2fc")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964400952452980736/slash.png")
    .addField("Slash  commands", "Debido a la  decisión de Discord de volver los Message Intents algo privilegiado, los comandos regulares serán remplazados por los Slash Commands desde el  1ro de septiembre, echale un vistazo con / y revisa los comandos" )  
    .addField(" Advertencia " , " Argenkit Bot irá eliminando los comandos clásicos progresivamente con el pasar de los meses para que sus usuarios vayan acostumbrandose al uso de los slash ")
    .addField(" Importante " , "Quizás sea necesario echar y volver a invitar al bot para que funcione si  es que invitaste al bot hace mucho tiempo ")
    .addField(" Comandos solo disponible con slash" ,  comandosslash)
      return message.reply({ embeds: [slash] });
  }

//Invitar
  if(command.toLowerCase() == "invite" || command.toLowerCase() == "invitar") {
    const slash = new Discord.MessageEmbed()
    .setTitle("Prueba con `/invitar` en su lugar")
    .setColor("#d6f2fc")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964400952452980736/slash.png")
    .addField("Slash  commands", "Debido a la  decisión de Discord de volver los Message Intents algo privilegiado, los comandos regulares serán remplazados por los Slash Commands desde el  1ro de septiembre, echale un vistazo con / y revisa los comandos" )  
    .addField(" Advertencia " , " Argenkit Bot irá eliminando los comandos clásicos progresivamente con el pasar de los meses para que sus usuarios vayan acostumbrandose al uso de los slash ")
    .addField(" Importante " , "Quizás sea necesario echar y volver a invitar al bot para que funcione si  es que invitaste al bot hace mucho tiempo ")
    .addField(" Comandos solo disponible con slash" ,  comandosslash)
      return message.reply({ embeds: [slash] });
  }

  //Notas de Actualización

 
  if(command.toLowerCase() == "update" || command.toLowerCase() == "actualización") {

    const slash = new Discord.MessageEmbed()
    .setTitle("Prueba con `/update` en su lugar")
    .setColor("#d6f2fc")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964400952452980736/slash.png")
    .addField("Slash  commands", "Debido a la  decisión de Discord de volver los Message Intents algo privilegiado, los comandos regulares serán remplazados por los Slash Commands desde el  1ro de septiembre, echale un vistazo con / y revisa los comandos" )  
    .addField(" Advertencia " , " Argenkit Bot irá eliminando los comandos clásicos progresivamente con el pasar de los meses para que sus usuarios vayan acostumbrandose al uso de los slash ")
    .addField(" Importante " , "Quizás sea necesario echar y volver a invitar al bot para que funcione si  es que invitaste al bot hace mucho tiempo ")
    .addField(" Comandos solo disponible con slash" ,  comandosslash)
      return message.reply({ embeds: [slash] });
  
  
  
 }


//Help  mejorado

	
if (command.toLowerCase() === 'help' || command.toLowerCase() === 'ayuda' || command.toLowerCase() === 'comandos') {
   
  const row = new MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
        .setCustomId('select')
        .setPlaceholder('¡Selecciona una categoría!')
   
        .addOptions([
          
          {
            
            label: 'Utilidad y conversión de divisas',
            description: 'Estos comandos contienen utilidades y conversión de divisas ',
            value: 'first',
            emoji: "<:Utilidadyconversin:903096312919126107>",
          },
          {
            label: 'Divisas',
            description: 'Fiat y Criptomonedas disponibles',
            value: 'second',
            emoji: "<:Divisas:903096313061724190>"
          },
          {
            label: 'Información  del Covid19',
            description: 'Información con respecto a la pandemia del covid19',
            value: 'third',
            emoji: "<:Covid:903096313439219762>"
          },
          {
            label: 'Datos',
            description: 'Datos variados acerca del país',
            value: 'fourth',
            emoji: "<:Datos2:903096311102988378>"
          },
          {
            label: 'Servicios',
            description: 'Precio de servicios de streaming y variados',
            value: 'fifth',
            emoji: "<:Servicios2:903097132683239474>"
          },
          {
            label: 'Diversión',
            description: 'Comandos de diversión',
            value: 'sixth',
            emoji: "<:Diversin:903096312289955860>"
          },
          {
            label: 'Información',
            description: 'Información del bot y su creador',
            value: 'seventh',
            emoji: "<:Informacindelbot:903096312713609246>"
          }
        ]
        )
        
    )


    let embed = new Discord.MessageEmbed()
    .setTitle(":desktop: COMANDOS DE ARGENKIT BOT :desktop: ")
    .setColor('#fdcb68')
    .addField("» Comandos disponibles" , "¡Tenemos `7` categorías distintas llenas de comandos y subcomandos! \nRecuerda que ahora el bot necesita ser utilizado con los slash commands \n Para ver las novedades más recientes del bot utiliza `/update`")
    .addField("» Comandos populares", "`impuesto`  `convertir dolar`  `convertir blue`  `divisa dolar`  `divisa blue`  `covid casos`  `elecciones`  `servicio netflix`  `servicio twitch`  `servicio disney+`  `8ball`  `moneda`  `invite`" ) 
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903001307554652160/buscando.png")
    
   
    let embed2 = new Discord.MessageEmbed()
    .setTitle(":arrows_counterclockwise:  Utilidad y conversión de divisas :arrows_counterclockwise:  ")
    .setColor('#fdcb68')
    .setDescription("Estos comandos contienen utilidades y conversión de divisa")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903010091756814356/money-exchange.png")
    .addField("» Utilidad ", "`impuesto`  `calculadora`  `anualizarinflacion`" )
    .addField("» `convertirdivisa`", "Subcomandos `dolar`  `dolarblue`  `euro`  `real`  `yen`  `libra`  `rublo`  `dolarcanadiense`  `dolaraustraliano`  `dolarneozelandes`  `pesomexicano`  `pesochileno`  `pesouruguayo`  `pesocolombiano`  `boliviano`  `sol`  `guarani`  `bolivar`  `yuan`  `rupia`  `won`  `franco`  `lira`" )
    .addField("» `pesoa` ", "» Subcomandos `dolar`  `dolarblue`  `euro`  `real`  `yen`  `libra`  `rublo`  `dolarcanadiense`  `dolaraustraliano`  `dolarneozelandes`  `pesomexicano`  `pesochileno`  `pesouruguayo`  `pesocolombiano`  `boliviano`  `sol`  `guarani`  `bolivar`  `yuan`  `rupia`  `won`  `franco`  `lira`")
    .addField("» `convertircripto` ", "» Subcomandos `bitcoin`  `ethereum`  `tether`  `axieinfinity`  `terraluna`  `decentraland`  `solana`  `dai`  `dogecoin`" )
    .addField("» `pesoacripto` ", "» Subcomandos `bitcoin`  `ethereum`  `tether`  `axieinfinity`  `terraluna`  `decentraland`  `solana`  `dai`  `dogecoin`" )
    .addField("» `convertirmetal` ","» Subcomandos `oro`  `plata`  `paladio`  `platino`")
    .addField("» `pesoametal` ", "» Subcomandos `oro`  `plata`  `paladio`  `platino`")
    let embed3 = new Discord.MessageEmbed()
    .setTitle(":dollar:  Cotizaciones :dollar: ")
    .setColor('#fdcb68')
    .setDescription("Estos comandos contienen las distintas cotizaciones disponibles con su precio a pesos argentinos e informacion adicional")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903012815659495484/dollars.png")
    .addField("» `divisa` ", "» Subcomandos `dolar`  `dolarblue`  `euro`  `bitcoin`  `real`  `yen`  `libra`  `rublo`  `dolarcanadiense`  `dolaraustraliano`  `dolarneozelandes`  `pesomexicano`  `pesochileno`  `pesouruguayo`  `pesocolombiano`  `boliviano`  `sol`  `guarani`  `bolivar`  `yuan`  `rupia`  `won`  `franco`  `lira`")
    .addField("» `criptomoneda` ", "» Subcomandos `bitcoin`  `ethereum`  `tether`  `axieinfinity`  `terraluna`  `decentraland`  `solana`  `dai`  `dogecoin`")
    .addField("» `metal`","» Subcomandos `oro`  `plata`  `paladio`  `platino`")


    let embed4 = new Discord.MessageEmbed()
    .setTitle(":mask:  Covid19 :mask: ")
    .setColor('#fdcb68')
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903019853202468884/nueva-normalidad.png")
    .setDescription("Estos comandos contienen información sobre la pandemia del covid19")
    .addField("» `covid`","» Subcomandos `casos`  `global`  `covidpais`  `sintomas`  `recomendaciones`")
    
    let embed5 = new Discord.MessageEmbed()
    .setTitle(":bar_chart: Datos :bar_chart:")
    .setColor('#fdcb68')
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903094616071483392/unknown.png")
    .setDescription("Estos comandos tienen distintos datos sobre Argentina")
    .addField("» Comando `datos`","subcomandos `riesgopais`  `reservas`  `circulante`")
    .addField("» Otros Comandos ","`elecciones`  `futbol`  `provinciainfo`")
    
    let embed6 = new Discord.MessageEmbed()
    .setTitle(":tv: Servicios Digitales :tv:")
    .setColor('#fdcb68')
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903093667911315557/Servicios.png")
    .setDescription("Estos subcomandos te dan el precio de distintos servicios digitales en Argentina con impuestos")
    .addField("» `servicio`","`netflix`  `youtube`  `spotify`  `crunchyroll`  `disney`  `xboxgamepass`  `primevideo`  `appletv`  `hbomax`  `discordnitro`  `googleone`  `ea`  `steam`  `paramount`  `twitch`")
    

    let embed7 = new Discord.MessageEmbed()
    .setTitle(":rofl: Diversión :rofl:")
    .setColor('#fdcb68')
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903094465747648552/Diversion.png")
    .setDescription("Estos son comandos con cosas divertidas mayormente basadas en aleatoridad")
    .addField("» Comandos","`odio argentina`  `odio latinoamerica`  `covidtest`  `escaparlatam`  `8ball`  `moneda`  `dados`  `piedrapapelotijera`  `tateti`")
    
    let embed8 = new Discord.MessageEmbed()
    .setTitle(":open_file_folder: Información del bot :open_file_folder:")
    .setColor('#fdcb68')
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903095489719828541/Informacion_del_bot.png")
    .setDescription("Estos comandos te permiten consultar más información acerca del bot")
    .addField("» Comandos","`creador`  `api`  `invitar`  `servidor`  `votar`  `donaciones`  `update`")
    
  

    const collector = message.channel.createMessageComponentCollector({
        componentType: "SELECT_MENU", time: 20000
       
      })

      message.reply({ content : " ", ephemeral: true, embeds: [embed], components: [row]})
    
      

      collector.on("collect", async (collected) => {

      const value = collected.values[0]

      if(value === "first"){
      return message.reply ({embeds: [embed2], ephemeral:false});
      }
      if(value === "second"){
        return message.reply  ({embeds: [embed3], ephemeral:false})
      }
      if(value === "third"){
        return message.reply  ({embeds: [embed4], ephemeral:false})
      }
      if(value === "fourth"){
        return message.reply  ({embeds: [embed5], ephemeral:false})
      }
      if(value === "fifth"){
        return message.reply  ({embeds: [embed6], ephemeral:false})
      }
      if(value === "sixth"){
        return message.reply  ({embeds: [embed7], ephemeral:false})
      }
      if(value === "seventh"){
        return message.reply  ({embeds: [embed8], ephemeral:false})
      }
      if(value === "eighth"){
        return message.reply  ({embeds: [embed2,embed3,embed4,embed5,embed6,embed7,embed8], ephemeral:false})
      }
    

    })
  

}
    
//UTILIDAD
//IMPUESTO
   if(command.toLowerCase() === 'impuesto'){
    let number = args[0];
    if (!args.length) {
    
     const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
   }
    number = number.replace(',','.')
    var imp = parseFloat(number)

    const embed1 = new Discord.MessageEmbed()
    .setTitle("Impuestos a la compra Online (64%)")
    .setColor("#d6f2fc")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903113482835197972/taxes.png")
    .addField("Monto original", "$"+ currencyFormatter.format(imp, { locale: 'es-ES', code: ' ' }))
    .addField("I.V.A (21%) ", "$"+ currencyFormatter.format(imp*0.21, { locale: 'es-ES', code: ' ' }), true)
    .addField("P.A.I.S (8%) ", "$"+ currencyFormatter.format(imp*0.08, { locale: 'es-ES', code: ' ' }) ,true) 
    .addField("Adelanto de Ganancias (35%)", "$"+ currencyFormatter.format(imp*0.35, { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Total (64%)", "$" + currencyFormatter.format(imp*1.64, { locale: 'es-ES', code: ' ' }))
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())

    const embed2 = new Discord.MessageEmbed()
    .setTitle("Impuesto a la compra Online (65%)")
    .setColor("#d6f2fc")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903113482835197972/taxes.png")
    .setDescription("Cuando no se aplica IVA, el impuesto P.A.I.S pasa a ser del  30% ")
    .addField("Monto original", "$"+ currencyFormatter.format(imp, { locale: 'es-ES', code: ' ' }))
    .addField("P.A.I.S (30%) ", "$"+ currencyFormatter.format(imp*0.30, { locale: 'es-ES', code: ' ' }) ,true) 
    .addField("Adelanto de Ganancias (35%)", "$"+ currencyFormatter.format(imp*0.35, { locale: 'es-ES', code: ' ' }) ,true)
    .addField("TOTAL (65%)", "$" + currencyFormatter.format(imp*1.65, { locale: 'es-ES', code: ' ' }))
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())



    const button1 = new MessageButton()
    .setCustomId("previousbtn")
    .setLabel("📄64%")
   .setStyle("SUCCESS");
  
   const button2 = new MessageButton()
   .setCustomId("nextbtn")
   .setLabel("📄65%")
   .setStyle("DANGER");
  
   const pages = [
   embed1,
   embed2,
  
  
  ];
  
  const buttonList = [button1, button2];
  const timeout = 120000;
  paginationEmbed(message, pages, buttonList, timeout);
  
  
 }


//Calculadora

if(command.toLowerCase() === 'calculadora'){

  simplydjs.calculator(message, {
    embedColor: "#0ce8dd",
    credit: false

  });

  
}




//Dolar precio
//oficial
 
   if(command.toLowerCase() === "dolaroficial" || command.toLowerCase() === "dolar"  || command.toLowerCase() === "dólar" || command.toLowerCase() === ("do") || command.toLowerCase() === ("usd") ){
      axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
        .then((oficial)=> {
         const embed1 = new Discord.MessageEmbed()
         .setTitle("Dólar estadounidese :flag_us:")
         .setColor("#a9ea98")
         .setDescription("El dólar oficial es el valor del dólar que se liquida por parte del gobierno nacional y está sujeto a un 65% de impuestos, además, sólo se puede retirar USD$200 al mes.")
         .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903145945980604447/dolar3.png")
         .addField("Compra <:dollars:903148705094447114>  ", "ARS$ "+  currencyFormatter.format(oficial.data['compra'], { locale: 'es-ES', code: ' ' }),true)
         .addField("Venta <:dollars:903148705094447114> ", "ARS$ "+ currencyFormatter.format(oficial.data['venta'], { locale: 'es-ES', code: ' ' }),true)
         .addField("Impuestos <:dollars:903148705094447114> ", "ARS$ "+ currencyFormatter.format(oficial.data['venta']*1.65, { locale: 'es-ES', code: ' ' }),true)
         .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())

       const embed2 = new Discord.MessageEmbed()
       .setTitle("Dólar estadounidense")
       .setColor("#a9ea98")
       .setDescription("El dólar estadounidense es la moneda oficial de Estados Unidos y de otros países y dependencias. Tras la ruptura del patrón oro en el año 1971, la moneda se convirtió, de facto, en una moneda fiat.")
       .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903145945980604447/dolar3.png")
       .addField("Acuñación", "2 de abril de 1792")
       .addField("Países donde se utiliza:", ":flag_us: :flag_sv: :flag_ec: :flag_pa: :flag_pr: :flag_zw: :flag_tl: :flag_pw: :flag_fm: :flag_mh: ")
       .addField("Código ISO", "USD ",true)
       .addField("Símbolo", "$ ",true)
       .addField("Billetes :dollar: ", "$1, $2, $5, $10, $20, $50 y $100")
       .addField("Monedas :coin: ", "	$0,01, $0,05, $0,10, $0,25, $0,50 y $1")
       .addField("Inflación anual  :chart_with_downwards_trend: ", "7,1% (2021)",true)
       .addField("Emisor :bank: ","Sistema de Reserva Federal ",true)
       .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
        
       
     const button1 = new MessageButton()
     .setCustomId("previousbtn")
     .setLabel("💸 Conversión ")
    .setStyle("SUCCESS");

    const button2 = new MessageButton()
    .setCustomId("nextbtn")
    .setLabel("📋 Información")
    .setStyle("PRIMARY");

    const pages = [
    embed1,
    embed2,
  ];
const buttonList = [button1, button2];
const timeout = 60000;
paginationEmbed(message, pages, buttonList, timeout);
      })
      .catch((err) => {
      console.error('ERR', err)    
     })
    }

  //blue
   if(command.toLowerCase() == "dolarblue" || command.toLowerCase() == "db" || command.toLowerCase() == "blue" ){
          axios.get('https://api-dolar-argentina.herokuapp.com/api/dolarblue')
          .then((blue)=> {
          const embed1 = new Discord.MessageEmbed()
          .setTitle("Dólar blue :flag_us:")
          .setColor("#8cb6fd")
          .setDescription("Dólar informal establecido por el precio del mercado (Oferta y demanda). Es el dólar que se compra en el mercado paralelo o informal.")
          .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903147750496018432/dolarblue.png")
          .addField("Compra <:dollarblue:903149186436980767>  ", "ARS$ "+ currencyFormatter.format(blue.data['compra'], { locale: 'es-ES', code: ' ' })  ,true)
          .addField("Venta <:dollarblue:903149186436980767>  ", "ARS$ "+ currencyFormatter.format(blue.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
          .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
          const embed2 = new Discord.MessageEmbed()
          .setTitle("Dólar estadounidense")
          .setColor("#a9ea98")
          .setDescription("El dólar estadounidense es la moneda oficial de Estados Unidos y de otros países y dependencias. Tras la ruptura del patrón oro en el año 1971, la moneda se convirtió, de facto, en una moneda fiat.")
          .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/903145945980604447/dolar3.png")
          .addField("Acuñación", "2 de abril de 1792")
          .addField("Países donde se utiliza:", ":flag_us: :flag_sv: :flag_ec: :flag_pa: :flag_pr: :flag_zw: :flag_tl: :flag_pw: :flag_fm: :flag_mh: ")
          .addField("Código ISO", "USD ",true)
          .addField("Símbolo", "$ ",true)
          .addField("Billetes :dollar: ", "$1, $2, $5, $10, $20, $50 y $100")
          .addField("Monedas :coin: ", "	$0,01, $0,05, $0,10, $0,25, $0,50 y $1")
          .addField("Inflación anual :chart_with_downwards_trend:", "7,1% (2021)",true)
          .addField("Emisor :bank: ","Sistema de Reserva Federal ",true)
          .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
           
         
          const button1 = new MessageButton()
          .setCustomId("previousbtn")
          .setLabel("💸 Conversión ")
         .setStyle("SUCCESS");
     
         const button2 = new MessageButton()
         .setCustomId("nextbtn")
         .setLabel("📋 Información")
         .setStyle("PRIMARY");
     
         const pages = [
         embed1,
         embed2,
     
     
       ];
     
     const buttonList = [button1, button2];
     const timeout = 60000;
     paginationEmbed(message, pages, buttonList, timeout);
     
     
     
     
           })
           .catch((err) => {
           console.error('ERR', err)
         
                
          })
          
         }

//Mostrar euro
    if(command.toLowerCase() == "euro" || command.toLowerCase() == "eur" ){
      axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
      .then((euro)=> {
      var euroImpuesto = (euro.data['venta']*1.65).toFixed(2)
      const embed1 = new Discord.MessageEmbed()
      .setTitle("Euro :flag_eu:")
      .setColor("#0153b4")
      .setDescription("Euro al precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%) ")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913863513498333224/european-union_1.png")
      .addField("Compra <:euro:903349498930135160>  ", "ARS$ "+ currencyFormatter.format(euro.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
      .addField("Venta <:euro:903349498930135160>  ", "ARS$ "+ currencyFormatter.format(euro.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
      .addField("Impuestos <:euro:903349498930135160>  ", "ARS$ "+ currencyFormatter.format(euroImpuesto, { locale: 'es-ES', code: ' ' }) ,true)
      .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())

      const embed2 = new Discord.MessageEmbed()
      .setTitle("Euro")
      .setColor("#0153b4")
      .setDescription("El euro (€) es la moneda usada por las instituciones de la Unión Europea (UE), así como la moneda oficial de la eurozona, formada por 19 de los 27 Estados miembros de la UE. Además, 4 micro-Estados europeos tienen acuerdos con la Unión Europea para el uso del euro como moneda")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913863513498333224/european-union_1.png")
      .addField("Acuñación", "1  de enero de 2002 ")
      .addField("Países donde se utiliza:", ":flag_de: :flag_at: :flag_be: :flag_cy: :flag_sk: :flag_si: :flag_es: :flag_ee: :flag_fi: :flag_fr: :flag_gr: :flag_ie: :flag_it: :flag_lv: :flag_lt: :flag_lu: :flag_mt: :flag_nl: :flag_pt: :flag_ad: :flag_va: :flag_mc: :flag_sm: :flag_xk: :flag_me:  ")
      .addField("Código ISO", "EUR ",true)
      .addField("Símbolo", "€ ",true)
      .addField("Billetes <:euro:903349498930135160> ", "€5, €10, €20, €50, €100, €200, €500")
      .addField("Monedas :coin: ", "	€0,01 , €0,02 , €0,05, €0,10 , €0,20, €0,50 , €1 , €2")
      .addField("Inflación anual :chart_with_downwards_trend:", "-3.0% (2021)",true)
      .addField("Emisor :bank: ","Banco Central Europeo",true)
      .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
       
     
      const button1 = new MessageButton()
      .setCustomId("previousbtn")
      .setLabel("💸 Conversión ")
     .setStyle("SUCCESS");
 
     const button2 = new MessageButton()
     .setCustomId("nextbtn")
     .setLabel("📋 Información")
     .setStyle("PRIMARY");
 
     const pages = [
     embed1,
     embed2,
 
 
   ];
 
 const buttonList = [button1, button2];
 const timeout = 30000;
 paginationEmbed(message, pages, buttonList, timeout);
 
 
 
 
       })
       .catch((err) => {
       console.error('ERR', err)
     
            
      })
      
     }

//Real

if(command.toLowerCase() == "real" || command.toLowerCase() == "br" || command.toLowerCase() == "brl" ){
  axios.get('https://api-dolar-argentina.herokuapp.com/api/real/nacion')
  .then((real)=> {
  var realImpuesto = ((real.data['venta']*1.65)).toFixed(2)
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Real Brasileño  :flag_br:")
  .setColor("#e8ce6c")
  .setDescription("Real oficial al  precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%) ")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913866166546616381/BrazilMoney.png")
  .addField("Compra <:brazilianreal1:913867351210995722>  ", "ARS$ "+ currencyFormatter.format(real.data['compra'], { locale: 'es-ES', code: ' ' }),true)
  .addField("Venta <:brazilianreal1:913867351210995722>  ", "ARS$ "+ currencyFormatter.format(real.data['venta'], { locale: 'es-ES', code: ' ' }),true)
  .addField("Impuestos <:brazilianreal1:913867351210995722>  ", "ARS$ "+ currencyFormatter.format(realImpuesto, { locale: 'es-ES', code: ' ' }),true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())

  const embed2 = new Discord.MessageEmbed()
  .setTitle("Real Brasileño")
  .setColor("#e8ce6c")
  .setDescription("El real es la moneda de curso legal en Brasil y fuera de sus fronteras se le conoce como real brasileño. A partir de 2020, es la vigésima moneda más negociada en el mundo, la segunda en América Latina detrás de peso mexicano y la cuarta en el continente americano detrás del dólar estadounidense, el dólar canadiense y el peso mexicano")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913866166546616381/BrazilMoney.png")
  .addField("Acuñación", " 1994 ")
  .addField("Países donde se utiliza:", ":flag_br:")
  .addField("Código ISO", "BRL ",true)
  .addField("Símbolo", "R$ ",true)
  .addField("Billetes <:brazilianreal1:913867351210995722> ", "R$2, R$5, R$10, R$20, R$50, R$100 y R$200")
  .addField("Monedas :coin: ", "	R$0,01 , R$0,05, R$0,10, R$0,25, R$0,50 y R$ 1")
  .addField("Inflación anual :chart_with_downwards_trend:", "10.74% (2021)",true)
  .addField("Emisor :bank: ","Banco Central do Brasil",true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
   
  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
 .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(message, pages, buttonList, timeout);




   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  
 }


//YEN
if(command.toLowerCase() == "yen" || command.toLowerCase() == "jpy" ){
  axios.get('https://api.exchangerate.host/latest')
  .then((YEN)=> {
  yen1=YEN.data['rates']['JPY']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Yen Japonés :flag_jp:")
  .setColor("#FDFD0D")
  .setDescription("Yen japonés oficial al  precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%) ")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913893648876331048/yenjapones3.png")
  .addField("Compra <:yen1:913890431392157807> ", 'ARS$ ' + currencyFormatter.format(((1 / yen1)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }),true)
  .addField("Venta <:yen1:913890431392157807> ", 'ARS$ ' + currencyFormatter.format(((1 / yen1)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' }),true)
  .addField("Impuestos <:yen1:913890431392157807> ", 'ARS$ ' + currencyFormatter.format((((1 / yen1)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' }),true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())

  const embed2 = new Discord.MessageEmbed()
  .setTitle("Yen Japonés")
  .setColor("#FDFD0D")
  .setDescription("El yen es la unidad monetaria utilizada en Japón​ y la tercera moneda más valorada en el mercado de divisas después del dólar estadounidense y el euro. También es usada como moneda de reserva junto al dólar, el euro y la libra esterlina. Como es común en la numeración japonesa, las cantidades grandes del yen se cuentan en múltiplos de 10 000 (man, 万).")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913893648876331048/yenjapones3.png")
  .addField("Acuñación", "10 de mayo de 1871 ")
  .addField("Países donde se utiliza:", ":flag_jp:")
  .addField("Código ISO", "JPY ",true)
  .addField("Símbolo ", "¥ ",true)
  .addField("Billetes <:yen1:913890431392157807> ", "¥1000, ¥2000, ¥5000 y ¥10000")
  .addField("Monedas :coin:  ", "¥1, ¥5, ¥10, ¥50, ¥100 y ¥500")
  .addField("Inflación anual :chart_with_downwards_trend: ", "0.5% (2019)",true)
  .addField("Emisor :bank: ","Banco de Japón",true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(message, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})

}

//LIBRA
if(command.toLowerCase() == "libra" || command.toLowerCase() == "gbp" || command.toLowerCase() == "esterlina" || command.toLowerCase() == "pound" ){
  axios.get('https://api.exchangerate.host/latest')
  .then((GBP)=> {
  libra1=GBP.data['rates']['GBP']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Libra Esterlina :flag_gb:")
  .setColor("#D605F6")
  .setDescription("Libra Esterlina oficial al  precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%) ")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913895989889359902/ReinaIsabeltest.png")
  .addField("Compra <:pound:913895490150600715> ", 'ARS$ ' + currencyFormatter.format(((1 / libra1)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }),true)
  .addField("Venta <:pound:913895490150600715>", 'ARS$ ' + currencyFormatter.format(((1 / libra1)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' }),true)
  .addField("Impuestos <:pound:913895490150600715>", 'ARS$ ' + currencyFormatter.format((((1 / libra1)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' }),true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())


  const embed2 = new Discord.MessageEmbed()
  .setTitle("Libra Esterlina")
  .setColor("#D605F6")
  .setDescription("La Libra Esterlina es la moneda del Reino Unido así como de las Dependencias de la Corona y de algunos territorios británicos de ultramar. En sus demás territorios coloniales se usan diferentes divisas pero fijadas a la esterlina. Su símbolo monetario es £ y proviene del latín libra, que se refería a la unidad de masa. Una libra se divide en cien peniques.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/913895989889359902/ReinaIsabeltest.png")
  .addField("Acuñación", " 1158")
  .addField("Países y territorios donde se utiliza:", ":flag_gb: :flag_im::flag_gg: :flag_je: :flag_fk: :flag_gi: :flag_sh: :flag_gs: :flag_io: ")
  .addField("Código ISO", "GBP ",true)
  .addField("Símbolo ", "£ ",true)
  .addField("Billetes <:pound:913895490150600715> ", "£5, £10, £20, £50")
  .addField("Monedas :coin:  ", "	1p, 2p, 5p, 10p, 20p, 50p, £1, £2")
  .addField("Inflación anual :chart_with_downwards_trend: ", "5.1% (2021)",true)
  .addField("Emisor :bank: ","Bank of England",true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(message, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})

}

//Rublo ruso

if(command.toLowerCase() == "rublo" || command.toLowerCase() == "rub" ){
  axios.get('https://api.exchangerate.host/latest')
  .then((RUB)=> {
  rublo=RUB.data['rates']['RUB']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Rublo Ruso :flag_ru:")
  .setColor("#FDFD0D")
  .setDescription("Rublo Ruso oficial al precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%) ")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/920139509344108594/bancario_1.png")
  .addField("Compra <:rublo:913901788531417229>  ", 'ARS$ ' + currencyFormatter.format(((1 / rublo)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta <:rublo:913901788531417229>", 'ARS$ ' + currencyFormatter.format(((1 / rublo)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
  .addField("Impuestos <:rublo:913901788531417229>", 'ARS$ ' + currencyFormatter.format((((1 / rublo)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())


  const embed2 = new Discord.MessageEmbed()
  .setTitle("Rublo Ruso")
  .setColor("#FDFD0D")
  .setDescription("El Rublo es la moneda oficial de la Federación de Rusia y medio de pago de las repúblicas parcialmente reconocidas de Abjasia y Osetia del Sur.​ Rublo también fue el nombre de la moneda oficial de la Unión Soviética, el Imperio ruso y otros estados. Un rublo se divide en cien kopeks.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/920139509344108594/bancario_1.png")
  .addField("Acuñación", " 1991")
  .addField("Países donde se utiliza:", ":flag_ru: ")
  .addField("Código ISO", "RUB ",true)
  .addField("Símbolo ", "₽ ",true)
  .addField("Billetes <:rublo:913901788531417229> ", "5 ₽, 10 ₽, 50 ₽, 100 ₽, 500 ₽, 1000 ₽, 2000 ₽, 5000 ₽")
  .addField("Monedas :coin:  ", "	1 коп, 5коп, 10коп, 50 коп, 1 ₽, 2 ₽, 5 ₽, 10 ₽, 25 ₽")
  .addField("Inflación anual :chart_with_downwards_trend: ", "4,9% (2020)",true)
  .addField("Emisor :bank: ","Banco de Rusia ",true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(message, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})

}

//PESO  MEXICANO

if(command.toLowerCase() == "pesomexicano" || command.toLowerCase() == "mxn" ){
  axios.get('https://api.exchangerate.host/latest')
  .then((MEX)=> {
  mexicano=MEX.data['rates']['MXN']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Peso Méxicano :flag_mx:")
  .setColor("#24944c")
  .setDescription("Peso Méxicano oficial al  precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%) ")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/838470413066436658/MXNPeso.png")
  .addField("Compra :flag_mx:  ", 'ARS$ ' + currencyFormatter.format(((1 / mexicano)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta :flag_mx:  ", 'ARS$ ' + currencyFormatter.format(((1 / mexicano)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
  .addField("Impuestos :flag_mx:  ", 'ARS$ ' + currencyFormatter.format((((1 / mexicano)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())


  const embed2 = new Discord.MessageEmbed()
  .setTitle("Peso Méxicano")
  .setColor("#24944c")
  .setDescription("El peso méxicano es la moneda de curso legal de México. El peso mexicano fue la primera moneda en el mundo en utilizar el signo $, incluso antes que el dólar de Estados Unidos, el cual más tarde lo adoptó para su propio uso. El peso mexicano es la decimoquinta moneda más negociada en el mundo, la más negociada de América Latina y la tercera más negociada en toda América.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/838470413066436658/MXNPeso.png")
  .addField("Acuñación", "1 de enero de 1993")
  .addField("Países donde se utiliza:", ":flag_mx: ")
  .addField("Código ISO", "MXN ",true)
  .addField("Símbolo ", "$ ",true)
  .addField("Billetes :dollar: ", "$20, $50, $100, $200, $500 y $1000")
  .addField("Monedas :coin:  ", "	¢10, ¢20, ¢50, $1, $2, $5, $10 y $20 (conmemorativas)")
  .addField("Inflación anual :chart_with_downwards_trend: ", "3,15% (2020)",true)
  .addField("Emisor :bank: ","Banco de México ",true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(message, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})

}

//Bolivar

if(command.toLowerCase() == "bolivar" || command.toLowerCase() == "ved" || command.toLowerCase() == "bolivardigital"){
  axios.get('https://api.exchangerate.host/latest')
  .then((VEZ)=> {
  bolivar=VEZ.data['rates']['VES']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Bolivar Digital Venezolano :flag_ve: ")
  .setColor("RED")
  .setDescription("Bolivar Digital Venezolano oficial al  precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/894982507563483216/bolivardigital.png")
  .addField("Compra :flag_ve:  ", 'ARS$ ' + currencyFormatter.format(((1 / bolivar )) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta :flag_ve:  ", 'ARS$ ' + currencyFormatter.format(((1 / bolivar)) * EUR.data['venta'],   { locale: 'es-ES', code: ' ' })  ,true)
  .addField("Impuestos :flag_ve:  ", 'ARS$ ' + currencyFormatter.format((((1 / bolivar)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())


  const embed2 = new Discord.MessageEmbed()
  .setTitle("Bolivar Digital Venezolano")
  .setColor("RED")
  .setDescription("El Bolivar Digital es la moneda de curso legal de la República Bolivariana de Venezuela. Esta moneda reemplazó al Bolívar Soberano (Bs. S) que circuló desde  agosto de 2018 y octubre de 2021. El valor de la nueva moneda se obtendrá quitando seis ceros a la antigua.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/894982507563483216/bolivardigital.png")
  .addField("Acuñación", "1 de octubre del 2021")
  .addField("Países donde se utiliza:", ":flag_ve: ")
  .addField("Código ISO", "VED ",true)
  .addField("Símbolo ", "Bs. o Bs. D ",true)
  .addField("Billetes :dollar: ", "Bs. 5, Bs. 10, Bs. 20, Bs. 50, Bs. 100")
  .addField("Monedas :coin:  ", "	Bs. 1 ")
  .addField("Inflación anual :chart_with_downwards_trend: ", "Bolivar Soberano: 3.713% (2020)",true)
  .addField("Emisor :bank: ","Banco Central de Venezuela ",true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(message, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})

}

//Dólar Canadiense

if(command.toLowerCase() == "dolarcanadiense" || command.toLowerCase() == "cad"  ||  command.toLowerCase() == "canadiense" ){
  axios.get('https://api.exchangerate.host/latest')
  .then((CAD)=> {
  canadiense=CAD.data['rates']['CAD']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Dólar Canadiense :flag_ca: ")
  .setColor("#fc0201")
  .setDescription("Dólar Canadiense oficial al  precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928332562793922611/canadian-dollar.png")
  .addField("Compra :flag_ca:  ", 'ARS$ ' + currencyFormatter.format(((1 / canadiense)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta :flag_ca:  ", 'ARS$ ' + currencyFormatter.format(((1 / canadiense)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
  .addField("Impuestos :flag_ca:  ", 'ARS$ ' + currencyFormatter.format((((1 / canadiense)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())


  const embed2 = new Discord.MessageEmbed()
  .setTitle("Dólar Canadiense")
  .setColor("#fc0201")
  .setDescription("El dólar canadiense es la unidad monetaria oficial de Canadá. Se subdivide en 100 cents (centavos). Su código ISO 4217 es CAD. El dólar ha estado en vigor durante gran parte de la historia de Canadá. \nCanadá decidió usar el dólar en lugar de la libra esterlina británica a causa de la difusión del llamado dólar español o peso en Norteamérica durante el siglo XVIII y principios del XIX, y a causa de la generalización del dólar estadounidense. La región que corresponde al actual Quebec, en particular, favoreció el uso del dólar (el Banco de Montreal emitió billetes de dólares en 1817), mientras que las colonias atlánticas, que tenían unos vínculos más fuertes con el Reino Unido, no eran tan partidarias. ")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928332562793922611/canadian-dollar.png")
  .addField("Acuñación", "1 de enero de 1858")
  .addField("Países donde se utiliza:", ":flag_ca: ")
  .addField("Código ISO", "CAD ",true)
  .addField("Símbolo ", "C$ ",true)
  .addField("Billetes :dollar: ", "C$5, C$10, C$20, C$50, C$100")
  .addField("Monedas :coin:  ", "	¢5, ¢10, ¢25, C$1, C$2")
  .addField("Inflación anual :chart_with_downwards_trend: ", "2,2% (2019)",true)
  .addField("Emisor :bank: ","Banco de Canadá",true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(message, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})

}


//Peso Chileno

if(command.toLowerCase() == "pesochileno" || command.toLowerCase() == "cl" || command.toLowerCase() == "clp"  ||  command.toLowerCase() == "chileno" ){
  axios.get('https://api.exchangerate.host/latest')
  .then((CLP)=> {
  chileno=CLP.data['rates']['CLP']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Peso Chileno :flag_cl: ")
  .setColor("#fc0201")
  .setDescription("Peso chileno oficial al  precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/856753411793354773/pesochileno.png")
  .addField("Compra :flag_cl:  ", 'ARS$ ' + currencyFormatter.format(((1 / chileno)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta :flag_cl:  ", 'ARS$ ' + currencyFormatter.format(((1 / chileno)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
  .addField("Impuestos :flag_cl:  ", 'ARS$ ' + currencyFormatter.format((((1 / chileno)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())


  const embed2 = new Discord.MessageEmbed()
  .setTitle("Peso Chileno")
  .setColor("#fc0201")
  .setDescription("El peso es la moneda de curso legal de Chile desde el año 1975. \nPor medio del decreto ley 1123 de 1975, el peso fue retomado como unidad monetaria a partir del 29 de septiembre de dicho año,5 con una tasa de conversión de un peso por cada mil escudos. La subdivisión en centavos se mantuvo hasta el 1 de enero de 1984, cuando éstos fueron eliminados, por lo que la contabilidad se empezó a llevar en pesos enteros. ")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/856753411793354773/pesochileno.png")
  .addField("Acuñación", "29 de septiembre de 1975")
  .addField("Países donde se utiliza:", ":flag_cl: ")
  .addField("Código ISO", "CLP ",true)
  .addField("Símbolo ", "$ ",true)
  .addField("Billetes :dollar: ", "$1.000, $2.000, $5.000, $10.000 y $20.000 pesos")
  .addField("Monedas :coin:  ", "	$10, $50, $100 y $500 pesos")
  .addField("Inflación anual :chart_with_downwards_trend: ", "7,2% (2021)",true)
  .addField("Emisor :bank: ","Banco Central de Chile",true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(message, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})

}

//Peso Uruguayo
if(command.toLowerCase() == "pesouruguayo" || command.toLowerCase() == "uy"  ||  command.toLowerCase() == "uyu" ){
  axios.get('https://api.exchangerate.host/latest')
  .then((UYU)=> {
  peso=UYU.data['rates']['UYU']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Peso Uruguayo :flag_uy:")
  .setColor("BLUE")
  .setDescription("Peso uruguayo oficial al  precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/856766027831574528/pesouruguayo.png")
  .addField("Compar :flag_uy:  ", 'ARS$ ' + currencyFormatter.format(((1 / peso)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta :flag_uy:  ", 'ARS$ ' + currencyFormatter.format(((1 / peso)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
  .addField("Impuestos :flag_uy:  ", 'ARS$ ' + currencyFormatter.format((((1 / peso)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())


  const embed2 = new Discord.MessageEmbed()
  .setTitle("Peso Uruguayo")
  .setColor("BLUE")
  .setDescription("El peso es la moneda oficial de la República Oriental del Uruguay desde 1993, remplazando al nuevo peso por un valor de 1000 nuevos pesos = 1 peso uruguayo y 1 000 000 de viejos pesos. En 2011 se cambió completamente el diseño de las monedas con nuevas decoraciones y materiales, se añadieron distintos animales y figuras patrias al reverso de las monedas. Se representa con un $.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/856766027831574528/pesouruguayo.png")
  .addField("Acuñación", "1 de marzo de 1993")
  .addField("Países donde se utiliza:", ":flag_uy: ")
  .addField("Código ISO", "UYU ",true)
  .addField("Símbolo ", "$ ",true)
  .addField("Billetes :dollar: ", "$20, $50, $100, $200, $500, $1000 y $2000 pesos")
  .addField("Monedas :coin:  ", "	$1, $2, $5, $10 y $50 pesos")
  .addField("Inflación anual :chart_with_downwards_trend: ", "8,8% (2019)",true)
  .addField("Emisor :bank: ","Banco Central del Uruguay",true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(message, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})

}

//Guaraní
if(command.toLowerCase() == "guarani" || command.toLowerCase() == "pyg"  || command.toLowerCase() == "guaraniparaguayo" ||  command.toLowerCase() == "paraguayo" ){
  axios.get('https://api.exchangerate.host/latest')
  .then((PYG)=> {
  guarani=PYG.data['rates']['PYG']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Guaraní Paraguayo :flag_py: (1000 unidades)")
  .setColor("#d80027")
  .setDescription("1000 Guaranies al  precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/856970634726735902/guaraniparaguayo.png")
  .addField("Compra :flag_py:  ", 'ARS$ ' + currencyFormatter.format(((1000 / guarani)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta :flag_py:  ", 'ARS$ ' + currencyFormatter.format(((1000 / guarani)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
  .addField("Impuestos :flag_py:  ", 'ARS$ ' + currencyFormatter.format((((1000 / guarani)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())


  const embed2 = new Discord.MessageEmbed()
  .setTitle("Guaraní Paraguayo")
  .setColor("#d80027")
  .setDescription("El guaraní (₲) es la moneda de curso legal actual de la República del Paraguay desde el año 1943. Ostenta el récord de ser una de las monedas más antiguas de América Latina.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/856970634726735902/guaraniparaguayo.png")
  .addField("Acuñación", "1943")
  .addField("Países donde se utiliza:", ":flag_py: ")
  .addField("Código ISO", "PYG",true)
  .addField("Símbolo ", "₲ ",true)
  .addField("Billetes :dollar: ", "₲2.000, ₲5.000, ₲10.000, ₲20.000, ₲50.000 y ₲100.000 guaraníes")
  .addField("Monedas :coin:  ", "		₲50, ₲100, ₲500 y ₲1.000 guaraníes")
  .addField("Inflación anual :chart_with_downwards_trend: ", "2,2 % (2020)",true)
  .addField("Emisor :bank: ","Banco Central del Paraguay",true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(message, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})

}

//Peso colombiano
if(command.toLowerCase() == "pesocolombiano" || command.toLowerCase() == "cop"  || command.toLowerCase() == "colombiano"){
  axios.get('https://api.exchangerate.host/latest')
  .then((COL)=> {
  pesos=COL.data['rates']['COP']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Peso Colombiano :flag_co: (1000 unidades)")
  .setColor("#fecb04")
  .setDescription("1000 Pesos colombiano al  precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/857487546455294022/PesoColombiano.png")
  .addField("Compra :flag_co:  ", 'ARS$ ' + currencyFormatter.format(((1000 / pesos)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta :flag_co:  ", 'ARS$ ' + currencyFormatter.format(((1000 / pesos)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
  .addField("Impuestos :flag_co:  ", 'ARS$ ' + currencyFormatter.format((((1000 / pesos)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())


  const embed2 = new Discord.MessageEmbed()
  .setTitle("Peso Colombiano")
  .setColor("#fecb04")
  .setDescription("El peso es la unidad monetaria de curso legal en la República de Colombia. Su abreviación formal es COP (ISO 4217), e informalmente es abreviada COL$.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/857487546455294022/PesoColombiano.png")
  .addField("Acuñación", "1903")
  .addField("Países donde se utiliza:", ":flag_co: ")
  .addField("Código ISO", "COP",true)
  .addField("Símbolo ", "$ ",true)
  .addField("Billetes :dollar: ", "$1.000, $2.000, $5.000, $10.000, $20.000, $50.000 y $100.000 pesos")
  .addField("Monedas :coin:  ", "		$50, $100, $200, $500 y $1000 pesos")
  .addField("Inflación anual :chart_with_downwards_trend: ", "1.61% (2020)",true)
  .addField("Emisor :bank: ","Banco de la República de Colombia.",true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(message, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})

}

//boliviano

if(command.toLowerCase() == "boliviano" || command.toLowerCase() == "pesoboliviano"  || command.toLowerCase() == "bob"){
  axios.get('https://api.exchangerate.host/latest')
  .then((BOB)=> {
  pesos=BOB.data['rates']['BOB']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Boliviano :flag_bo:")
  .setColor("#6da544")
  .setDescription("Boliviano al  precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858355537228595201/Boliviano.png")
  .addField("Compra :flag_bo:  ", 'ARS$ ' + currencyFormatter.format(((1 / pesos)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta :flag_bo:  ", 'ARS$ ' + currencyFormatter.format(((1 / pesos)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
  .addField("Impuestos :flag_bo:  ", 'ARS$ ' + currencyFormatter.format((((1 / pesos)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())


  const embed2 = new Discord.MessageEmbed()
  .setTitle("Boliviano")
  .setColor("#6da544")
  .setDescription("El Boliviano (símbolo: Bs, código ISO 4217: BOB) es la moneda de curso legal del Estado Plurinacional de Bolivia desde el año 1987. Se divide en 100 centavos y entró en circulación nacional, reemplazando al antiguo peso boliviano. El Banco Central de Bolivia (fundado en 1928), es el organismo económico responsable de la emisión de la moneda.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858355537228595201/Boliviano.png")
  .addField("Acuñación", "1987")
  .addField("Países donde se utiliza:", ":flag_bo: ")
  .addField("Código ISO", "BOB",true)
  .addField("Símbolo ", "Bs ",true)
  .addField("Billetes :dollar: ", "Bs10, Bs20, Bs50, Bs100 y Bs200")
  .addField("Monedas :coin:  ", "	Bs0,10, Bs0,20¢, Bs0,50, Bs1 , Bs2 y Bs5 ")
  .addField("Inflación anual :chart_with_downwards_trend: ", "0,67% (2020)",true)
  .addField("Emisor :bank: ","Banco Central de Bolivia.",true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())

 const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(message, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})

}


//Sol peruano
if(command.toLowerCase() == "solperuano" || command.toLowerCase() == "pen"  || command.toLowerCase() == "sol"){
  axios.get('https://api.exchangerate.host/latest')
  .then((PEN)=> {
  sol=PEN.data['rates']['PEN']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Sol Peruano :flag_pe: ")
  .setColor("#cd0400")
  .setDescription("Sol peruano al  precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858067812655300658/SolPeruano.png")
  .addField("Compra :flag_pe:  ", 'ARS$ ' + currencyFormatter.format(((1 /sol)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta :flag_pe:  ", 'ARS$ ' + currencyFormatter.format(((1 / sol)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
  .addField("Impuestos :flag_pe:  ", 'ARS$ ' + currencyFormatter.format((((1 / sol)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())


  const embed2 = new Discord.MessageEmbed()
  .setTitle("Sol Peruano")
  .setColor("#cd0400")
  .setDescription("El sol es la moneda de curso legal del Perú desde 1991. Esta moneda reemplazó al inti que circuló entre 1985 y 1991. Inicialmente fue denominada nuevo sol para diferenciarla del antiguo sol que circuló entre 1931 y 1985. Sin embargo, desde 2015 el gobierno dispuso que el «nuevo sol» pase a denominarse simplemente «sol», suprimiéndose además el uso del punto (S/.) en el signo monetario (S/).")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858067812655300658/SolPeruano.png")
  .addField("Acuñación", "1991")
  .addField("Países donde se utiliza:", ":flag_pe: ")
  .addField("Código ISO", "PEN",true)
  .addField("Símbolo ", "S/ ",true)
  .addField("Billetes :dollar: ", "S/10, S/20, S/50, S/100 y S/200 soles")
  .addField("Monedas :coin:  ", "S/0,10 , S/0,20 y S/0,50 , S/1, S/2 y S/5")
  .addField("Inflación anual :chart_with_downwards_trend: ", "6,4% (2021)",true)
  .addField("Emisor :bank: ","Banco Central de Reserva del Perú",true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(message, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})

}


//Renminbi
if(command.toLowerCase() == "renminbi" || command.toLowerCase() == "yuan"  || command.toLowerCase() == "cny"){
  axios.get('https://api.exchangerate.host/latest')
  .then((CNY)=> {
  yuan=CNY.data['rates']['CNY']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Renminbi Chino (Yuan) :flag_cn: ")
  .setColor("#cd0400")
  .setDescription("Renminbi (Yuan) chino al precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858074668015157258/yuanchino.png")
  .addField("Compra :flag_cn: ", 'ARS$ ' + currencyFormatter.format(((1 /yuan)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta :flag_cn: ", 'ARS$ ' + currencyFormatter.format(((1 / yuan)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
  .addField("Impuestos :flag_cn: ", 'ARS$ ' + currencyFormatter.format((((1 / yuan)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())


  const embed2 = new Discord.MessageEmbed()
  .setTitle("Renminbi Chino")
  .setColor("#cd0400")
  .setDescription("El renminbi «moneda del pueblo» es la moneda de curso legal de la República Popular China y es emitida por el Banco Popular de China. El yuan (código: CNY) es la unidad básica del renminbi, nombre por el que también se conoce a la moneda. Cada yuan se fracciona en diez jiao o mao y cada jiao se divide en diez fen. Para que el valor del renminbi no fluctúe dependiendo del mercado financiero, el yuan está fijado a una canasta de varias monedas internacionales. Se suele utilizar el simbolo  del yen japonés (¥) o también el sinograma del yuan (元)")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858074668015157258/yuanchino.png")
  .addField("Acuñación", "1955")
  .addField("Países donde se utiliza:", "Oficial: :flag_cn:  \nNo oficial:  :flag_mo: :flag_hk: :flag_la: :flag_kh: :flag_vn: :flag_mm: :flag_kp: :flag_np::flag_zw:")
  .addField("Código ISO", "CNY",true)
  .addField("Símbolo ", "	元 / ¥ ",true)
  .addField("Billetes :dollar: ", "角	1, 角2 y 角5 jiao  / 元1, 元2, 元5, 元10, 元20, 元50 y 元100 yuanes")
  .addField("Monedas :coin:  ", "分1, 分2 y 分5 fen / 角1 y 角5 jiao / 元1 yuan")
  .addField("Inflación anual :chart_with_downwards_trend: ", "1,9% (2018)",true)
  .addField("Emisor :bank: ","Banco Popular de China",true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(message, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})

}


if(command.toLowerCase() == "dolaraustraliano" || command.toLowerCase() == "aud"  ||  command.toLowerCase() == "australiano" ){
  axios.get('https://api.exchangerate.host/latest')
  .then((CAD)=> {
  dolar=CAD.data['rates']['AUD']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Dólar Australiano :flag_au:")
  .setColor("#000346")
  .setDescription("Dólar Australiano oficial al precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858087525518934076/dolaraustraliano.png")
  .addField("Compra :flag_au:  ", 'ARS$ ' + currencyFormatter.format(((1 / dolar)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta :flag_au:  ", 'ARS$ ' + currencyFormatter.format(((1 / dolar)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
  .addField("Impuestos :flag_au:  ", 'ARS$ ' + currencyFormatter.format((((1 / dolar)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())


  const embed2 = new Discord.MessageEmbed()
  .setTitle("Dólar Australiano")
  .setColor("#000346")
  .setDescription("El dólar australiano (código AUD) es la moneda oficial de la Mancomunidad de Australia, incluidos los Territorios Antárticos Australianos, la Isla de Navidad, las Islas Cocos, Islas Heard y McDonald e Isla Norfolk, así como de los estados independientes del Pacífico de Kiribati, Nauru y Tuvalu. ")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858087525518934076/dolaraustraliano.png")
  .addField("Acuñación", "1966")
  .addField("Países donde se utiliza:", ":flag_au: :flag_ki: :flag_nr: :flag_tv: :flag_cx: :flag_cc: :flag_nf:")
  .addField("Código ISO", "AUD ",true)
  .addField("Símbolo ", "A$ ",true)
  .addField("Billetes :dollar: ", "A$5, A$10, A$20, A$50, A$100")
  .addField("Monedas :coin:  ", "	A$0,5 , A$0,10, A$0,20 , A$0,50 , A$1, A$2")
  .addField("Inflación anual :chart_with_downwards_trend: ", "1,8% (2020)",true)
  .addField("Emisor :bank: ","Banco de la Reserva de Australia",true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(message, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})

}


if(command.toLowerCase() == "dolarneozelandés" ||command.toLowerCase() == "dolarneozelandes" || command.toLowerCase() == "nzd"  ||  command.toLowerCase() == "dolarnuevazelanda" ){
  axios.get('https://api.exchangerate.host/latest')
  .then((NZD)=> {
  dolar=NZD.data['rates']['NZD']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Dólar Neozelandés :flag_nz: ")
  .setColor("#000346")
  .setDescription("Dólar Neozelandés oficial al precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858094221654753300/Dolar_nueva_zelanda.png")
  .addField("Compra :flag_nz:  ", 'ARS$ ' + currencyFormatter.format(((1 / dolar)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta :flag_nz:  ", 'ARS$ ' + currencyFormatter.format(((1 / dolar)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
  .addField("Impuestos :flag_nz:  ", 'ARS$ ' + currencyFormatter.format((((1 / dolar)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())


  const embed2 = new Discord.MessageEmbed()
  .setTitle("Dólar Neozelandés")
  .setColor("#000346")
  .setDescription("El dólar neozelandés o dólar de Nueva Zelanda (abreviado NZD o NZ$) es la moneda oficial de Nueva Zelanda, las Islas Cook, Niue, Tokelau y las Islas Pitcairn. Se introdujo en 1967 para sustituir a la libra neozelandesa cuando se introdujo el sistema decimal para las monedas. ")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858094221654753300/Dolar_nueva_zelanda.png")
  .addField("Acuñación", "1967")
  .addField("Países donde se utiliza:", ":flag_nz: :flag_ck: :flag_nu: :flag_tk: :flag_pn: ")
  .addField("Código ISO", "NZD ",true)
  .addField("Símbolo ", "NZ$ ",true)
  .addField("Billetes :dollar: ", "NZ$5, NZ$10, NZ$20, NZ$50, NZ$100")
  .addField("Monedas :coin:  ", "	NZ$0,10 , NZ$0,20, NZ$0,50 , NZ$1, NZ$2")
  .addField("Inflación anual :chart_with_downwards_trend: ", "1,9% (2018)",true)
  .addField("Emisor :bank: ","Banco de la Reserva de Nueva Zelanda",true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(message, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})

}

//Rupia
if(command.toLowerCase() == "rupia" ||command.toLowerCase() == "rupiaindia" || command.toLowerCase() == "INR" ){
  axios.get('https://api.exchangerate.host/latest')
  .then((INR)=> {
  rupia=INR.data['rates']['INR']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Rupia India :flag_in: ")
  .setColor("#fc9836")
  .setDescription("Rupia india oficial al precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858105999408103424/IndiaRupia.png")
  .addField("Compra :flag_in:  ", 'ARS$ ' + currencyFormatter.format(((1 / rupia)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta :flag_in:  ", 'ARS$ ' + currencyFormatter.format(((1 / rupia)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
  .addField("Impuestos :flag_in:  ", 'ARS$ ' + currencyFormatter.format((((1 / rupia)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())


  const embed2 = new Discord.MessageEmbed()
  .setTitle("Rupia India")
  .setColor("#fc9836")
  .setDescription("La rupia es la moneda oficial de la República de la India. Su emisión está controlada por el Banco de la Reserva de la India. Está dividida en 100 paise y su código ISO 4217 es INR. \n En muchas partes de la India, la rupia es conocida como rupaya (hindi), roopayi (రూపాయి) en télugu y kannada (ರೂಪಾಯಿ), rubai (ரூபாய்) en tamil, roopa (രൂപ) en malayalam, rupaye (रुपये) en maratí, o en muchas otras formas derivadas del sánscrito, en el cual, significa plata. Sin embargo, en zonas como Bengala Occidental, Tripura, Orissa y Assam el término ha derivado de la palabra sánscrita tanka. Así, a la rupia se la llama taka (টাকা) en bengalí, tôka (টকা) en asamés, y tôngka en oriya.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858105999408103424/IndiaRupia.png")
  .addField("Acuñación", "1 de abril de 1957")
  .addField("Países donde se utiliza:", "Oficial: :flag_in: \n No oficial: :flag_bt: :flag_np: :flag_zw: ")
  .addField("Código ISO", "INR ",true)
  .addField("Símbolo ", "₹ ",true)
  .addField("Billetes :dollar: ", "₹1, ₹5, ₹10, ₹20, ₹50, ₹100, ₹200, ₹500 y ₹2000")
  .addField("Monedas :coin:  ", "	50 paise, ₹1, ₹2, ₹5, ₹10")
  .addField("Inflación anual :chart_with_downwards_trend: ", "2,11%(2018)",true)
  .addField("Emisor :bank: ","Banco de la Reserva de la India",true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(message, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})

}

//Won Surcoreano

if(command.toLowerCase() == "won" ||command.toLowerCase() == "wonsurcoreano" || command.toLowerCase() == "woncoreano" || command.toLowerCase() == "krw" ){
  axios.get('https://api.exchangerate.host/latest')
  .then((KRW)=> {
  won=KRW.data['rates']['KRW']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Won Surcoreano :flag_kr: ")
  .setColor("#FFFFFF")
  .setDescription("Won surcoreano oficial al precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858122163164807168/CoreaDelSurMoneda.png")
  .addField("Compra :flag_kr:   ", 'ARS$ ' + currencyFormatter.format(((1 / won)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta :flag_kr:   ", 'ARS$ ' + currencyFormatter.format(((1 / won)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
  .addField("Impuestos :flag_kr:  ", 'ARS$ ' + currencyFormatter.format((((1 / won)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())


  const embed2 = new Discord.MessageEmbed()
  .setTitle("Won Surcoreano")
  .setColor("#FFFFFF")
  .setDescription("El won surcoreano es la moneda de curso legal de Corea del Sur. Durante la época colonial, el won se sustituyó a la par por el yen, formando el yen coreano, pero después de la Segunda Guerra Mundial, Corea se dividió, resultando en dos monedas diferentes, ambas llamadas won, para el Sur y para el Norte.")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858122163164807168/CoreaDelSurMoneda.png")
  .addField("Acuñación", "9 de junio de 1962")
  .addField("Países donde se utiliza:", ":flag_kr: ")
  .addField("Código ISO", "KRW ",true)
  .addField("Símbolo ", "₩ ",true)
  .addField("Billetes :dollar: ", "₩1000, ₩2000, ₩5000, ₩10000 y ₩50000")
  .addField("Monedas :coin:  ", "₩1, ₩5, ₩10, ₩50, ₩100 y ₩500")
  .addField("Inflación anual :chart_with_downwards_trend: ", "1,3% (2018)",true)
  .addField("Emisor :bank: ","Banco de Corea",true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(message, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})

}

//Lira Turca

if(command.toLowerCase() == "turca" ||command.toLowerCase() == "lira" || command.toLowerCase() == "liraturca"  ||  command.toLowerCase() == "try" ){
  axios.get('https://api.exchangerate.host/latest')
  .then((LIRA)=> {
  Turca=LIRA.data['rates']['TRY']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Lira Turca :flag_tr: ")
  .setColor("#d70224")
  .setDescription("Lira Turca oficial al precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/930958503399546910/liraturca.png")
  .addField("Compra :flag_tr:  ", 'ARS$ ' + currencyFormatter.format(((1 / Turca)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta :flag_tr:  ", 'ARS$ ' + currencyFormatter.format(((1 / Turca)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
  .addField("Impuestos :flag_tr:  ", 'ARS$ ' + currencyFormatter.format((((1 / Turca)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())


  const embed2 = new Discord.MessageEmbed()
  .setTitle("Lira Turca")
  .setColor("#d70224")
  .setDescription("La lira es la moneda de curso legal de Turquía y de la República Turca del Norte de Chipre. Su código ISO 4217 es TRY y se divide en 100 kuruş. El emisor es el Banco Central de la República de Turquía. ")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/930958503399546910/liraturca.png")
  .addField("Acuñación", "2005")
  .addField("Países donde se utiliza:", ":flag_tr: :flag_cy: (Norte) ")
  .addField("Código ISO", "TRY ",true)
  .addField("Símbolo ", "₺ ",true)
  .addField("Billetes :dollar: ", "	₺5, ₺10, ₺20, ₺50, ₺100 y ₺200")
  .addField("Monedas :coin:  ", " ₺0,01 ,	₺0,05 , ₺0,10 , ₺0,25, ₺0,50 , ₺1")
  .addField("Inflación anual :chart_with_downwards_trend: ", "14,6% (2020)",true)
  .addField("Emisor :bank: ","Banco Central de la República de Turquía",true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(message, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})

}

//Franco Suizo

if(command.toLowerCase() == "franco" ||command.toLowerCase() == "suizo" || command.toLowerCase() == "francosuizo"  ||  command.toLowerCase() == "chf" ){
  axios.get('https://api.exchangerate.host/latest')
  .then((suiza)=> {
  franco=suiza.data['rates']['CHF']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Franco Suizo :flag_ch: ")
  .setColor("#d80027")
  .setDescription("Franco suizo oficial al precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/930958502980100116/FrancoSuizo.png")
  .addField("Compra :flag_ch: ", 'ARS$ ' + currencyFormatter.format(((1 / franco)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta :flag_ch:  ", 'ARS$ ' + currencyFormatter.format(((1 / franco)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
  .addField("Impuestos :flag_ch:  ", 'ARS$ ' + currencyFormatter.format((((1 / franco)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())


  const embed2 = new Discord.MessageEmbed()
  .setTitle("Franco Suizo")
  .setColor("#d80027")
  .setDescription("El franco es la moneda oficial de Suiza y Liechtenstein. También es de curso legal en los enclaves italiano y alemán de Campione d'Italia y Büsingen am Hochrhein, donde circula junto al euro. El Banco Nacional Suizo es el encargado de emitir los billetes, y la Swissmint federal acuña las monedas. ")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/930958502980100116/FrancoSuizo.png")
  .addField("Acuñación", "2005")
  .addField("Países donde se utiliza:", ":flag_ch: :flag_li: :flag_it: (Campione d'Italia) :flag_de: (Büsingen am Hochrhein) ")
  .addField("Código ISO", "CHF ",true)
  .addField("Símbolo ", "Fr. ",true)
  .addField("Billetes :dollar: ", "	Fr.10, Fr.20, Fr.50, Fr.100, Fr.200, Fr.1000 ")
  .addField("Monedas :coin:  ", " 5 , 10, 20  rappen  /  Fr.½, Fr.1, Fr.2, Fr.5 ")
  .addField("Inflación anual :chart_with_downwards_trend: ", "0,9% (2018)",true)
  .addField("Emisor :bank: ","Banco Nacional de Suiza",true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(message, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})

}

//Cripto
//Bitcoin

if(command.toLowerCase() == "bitcoin" ||command.toLowerCase() == "btc" || command.toLowerCase() == "cripto"){
  axios.get('https://api.exchangerate.host/latest')
  .then((BTC)=> {
  bitcoin=BTC.data['rates']['BTC']
  axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
  
  .then((EUR)=> {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Bitcoin <:bitcoin:929073179262074960> ")
  .setColor("#fddc4d")
  .setDescription("Bitcoin al precio del banco central + impuestos (PAIS (30%) y adelanto de ganancias (35%)")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929073343682990150/bitcoin.png")
  .addField("Compra <:bitcoin:929073179262074960>   ", 'ARS$ ' + currencyFormatter.format(((1 / bitcoin)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta <:bitcoin:929073179262074960>  ", 'ARS$ ' + currencyFormatter.format(((1 / bitcoin)) * EUR.data['venta'], { locale: 'es-ES', code: ' ' })  ,true)
  .addField("Impuestos <:bitcoin:929073179262074960>  ", 'ARS$ ' + currencyFormatter.format((((1 / bitcoin)) * EUR.data['venta']*1.65), { locale: 'es-ES', code: ' ' })  ,true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())


  const embed2 = new Discord.MessageEmbed()
  .setTitle("Bitcoin")
  .setColor("#fddc4d")
  .setDescription("Bitcoin es una criptomoneda  y un sistema de pago sin banco central o administrador único. En principio, los usuarios de bitcoin pueden transferir dinero entre sí a través de una red entre iguales usando software libre y de código abierto. Las transacciones son verificadas y custodiadas criptográficamente por una red descentralizada de nodos")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929073343682990150/bitcoin.png")
  .addField("Lanzamiento inicial", "3  de enero de 2009")
  .addField("Países donde es de curso legal:", ":flag_sv: ")
  .addField("Código ISO", "BTC ",true)
  .addField("Símbolo ", "₿ ",true)
  .addField("Desarrollador ", "Satoshi Nakamoto (seudónimo), Gavin Andresen y otros")
  .addField("Límite de Emisión  ", "₿21,000,000")
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("💸 Conversión ")
  .setStyle("SUCCESS");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("📋 Información")
 .setStyle("PRIMARY");

 const pages = [
 embed1,
 embed2,
];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(message, pages, buttonList, timeout);


 })
 .catch((err) => {
 console.error('ERR', err)
})
  })


.catch((err) => {
console.error('ERR', err)  
})

}

//
//RIESGO PAIS
   if(command.toLowerCase() == "riesgopais" || command.toLowerCase() == "rp" ){
    const slash = new Discord.MessageEmbed()
    .setTitle("Prueba con `/riesgopais` en su lugar")
    .setColor("#d6f2fc")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964400952452980736/slash.png")
    .addField("Slash  commands", "Debido a la  decisión de Discord de volver los Message Intents algo privilegiado, los comandos regulares serán remplazados por los Slash Commands desde el  1ro de septiembre, echale un vistazo con / y revisa los comandos" )  
    .addField(" Advertencia " , " Argenkit Bot irá eliminando los comandos clásicos progresivamente con el pasar de los meses para que sus usuarios vayan acostumbrandose al uso de los slash ")
    .addField(" Importante " , "Quizás sea necesario echar y volver a invitar al bot para que funcione si  es que invitaste al bot hace mucho tiempo ")
    .addField(" Comandos solo disponible con slash" ,  comandosslash)
      return message.reply({ embeds: [slash] });
  
}

//Reservas

if(command.toLowerCase() == "reservas"){
  const slash = new Discord.MessageEmbed()
  .setTitle("Prueba con `/reservas` en su lugar")
  .setColor("#d6f2fc")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964400952452980736/slash.png")
  .addField("Slash  commands", "Debido a la  decisión de Discord de volver los Message Intents algo privilegiado, los comandos regulares serán remplazados por los Slash Commands desde el  1ro de septiembre, echale un vistazo con / y revisa los comandos" )  
  .addField(" Advertencia " , " Argenkit Bot irá eliminando los comandos clásicos progresivamente con el pasar de los meses para que sus usuarios vayan acostumbrandose al uso de los slash ")
  .addField(" Importante " , "Quizás sea necesario echar y volver a invitar al bot para que funcione si  es que invitaste al bot hace mucho tiempo ")
  .addField(" Comandos solo disponible con slash" ,  comandosslash)
    return message.reply({ embeds: [slash] });
}

//Circulante



if(command.toLowerCase() == "circulante"  || command.toLowerCase() == "circulación" || command.toLowerCase() == "pesosencirculación" ){
 
  const slash = new Discord.MessageEmbed()
  .setTitle("Prueba con `/circulante` en su lugar")
  .setColor("#d6f2fc")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964400952452980736/slash.png")
  .addField("Slash  commands", "Debido a la  decisión de Discord de volver los Message Intents algo privilegiado, los comandos regulares serán remplazados por los Slash Commands desde el  1ro de septiembre, echale un vistazo con / y revisa los comandos" )  
  .addField(" Advertencia " , " Argenkit Bot irá eliminando los comandos clásicos progresivamente con el pasar de los meses para que sus usuarios vayan acostumbrandose al uso de los slash ")
  .addField(" Importante " , "Quizás sea necesario echar y volver a invitar al bot para que funcione si  es que invitaste al bot hace mucho tiempo ")
  .addField(" Comandos solo disponible con slash" ,  comandosslash)
    return message.reply({ embeds: [slash] });
}

//Elecciones
if(command.toLowerCase() == "elecciones"){
  const slash = new Discord.MessageEmbed()
  .setTitle("Prueba con `/elecciones` en su lugar")
  .setColor("#d6f2fc")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964400952452980736/slash.png")
  .addField("Slash  commands", "Debido a la  decisión de Discord de volver los Message Intents algo privilegiado, los comandos regulares serán remplazados por los Slash Commands desde el  1ro de septiembre, echale un vistazo con / y revisa los comandos" )  
  .addField(" Advertencia " , " Argenkit Bot irá eliminando los comandos clásicos progresivamente con el pasar de los meses para que sus usuarios vayan acostumbrandose al uso de los slash ")
  .addField(" Importante " , "Quizás sea necesario echar y volver a invitar al bot para que funcione si  es que invitaste al bot hace mucho tiempo ")
  .addField(" Comandos solo disponible con slash" ,  comandosslash)
    return message.reply({ embeds: [slash] });
}
    

    if(command.toLowerCase() == "fútbol" || command.toLowerCase() == "selección" || command.toLowerCase() == "futbol" || command.toLowerCase() == "seleccion"){
      const slash = new Discord.MessageEmbed()
      .setTitle("Prueba con `/futbol` en su lugar")
      .setColor("#d6f2fc")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964400952452980736/slash.png")
      .addField("Slash  commands", "Debido a la  decisión de Discord de volver los Message Intents algo privilegiado, los comandos regulares serán remplazados por los Slash Commands desde el  1ro de septiembre, echale un vistazo con / y revisa los comandos" )  
      .addField(" Advertencia " , " Argenkit Bot irá eliminando los comandos clásicos progresivamente con el pasar de los meses para que sus usuarios vayan acostumbrandose al uso de los slash ")
      .addField(" Importante " , "Quizás sea necesario echar y volver a invitar al bot para que funcione si  es que invitaste al bot hace mucho tiempo ")
      .addField(" Comandos solo disponible con slash" ,  comandosslash)
        return message.reply({ embeds: [slash] });
     
    }

    



//Covid
//SINTOMAS
if(command.toLowerCase() == "covidsintomas" || command.toLowerCase() == "covidsíntomas" || command.toLowerCase() == "sintomas" || command.toLowerCase() == "síntomas"  ){

  const slash = new Discord.MessageEmbed()
  .setTitle("Prueba con `/covid sintomas` en su lugar")
  .setColor("#d6f2fc")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964400952452980736/slash.png")
  .addField("Slash  commands", "Debido a la  decisión de Discord de volver los Message Intents algo privilegiado, los comandos regulares serán remplazados por los Slash Commands desde el  1ro de septiembre, echale un vistazo con / y revisa los comandos" )  
  .addField(" Advertencia " , " Argenkit Bot irá eliminando los comandos clásicos progresivamente con el pasar de los meses para que sus usuarios vayan acostumbrandose al uso de los slash ")
  .addField(" Importante " , "Quizás sea necesario echar y volver a invitar al bot para que funcione si  es que invitaste al bot hace mucho tiempo ")
  .addField(" Comandos solo disponible con slash" ,  "`criptomoneda` `metal` `convertircripto` `convertirmetal` `pesoacripto` `pesoametal` `provinciainfo` `covidpais` `casos` `recomendaciones` `sintomas` `netflix` `youtube`  `spotify`  `crunchyroll`  `disney`  `xboxgamepass`  `primevideo`  `appletv`  `hbomax`  `discordnitro`  `googleone`  `ea`  `steam`  `paramount`  `twitch`")
  return message.reply({ embeds: [slash] });

  
 }

//Recomendaciones
if(command.toLowerCase() == "covidrecomendaciones" || command.toLowerCase() == "covidtips" || command.toLowerCase() == "recomendaciones"){

  const slash = new Discord.MessageEmbed()
  .setTitle("Prueba con `/covid recomendaciones` en su lugar")
  .setColor("#d6f2fc")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964400952452980736/slash.png")
  .addField("Slash  commands", "Debido a la  decisión de Discord de volver los Message Intents algo privilegiado, los comandos regulares serán remplazados por los Slash Commands desde el  1ro de septiembre, echale un vistazo con / y revisa los comandos" )  
  .addField(" Advertencia " , " Argenkit Bot irá eliminando los comandos clásicos progresivamente con el pasar de los meses para que sus usuarios vayan acostumbrandose al uso de los slash ")
  .addField(" Importante " , "Quizás sea necesario echar y volver a invitar al bot para que funcione si  es que invitaste al bot hace mucho tiempo ")
  .addField(" Comandos solo disponible con slash" ,  "`criptomoneda` `metal` `convertircripto` `convertirmetal` `pesoacripto` `pesoametal` `provinciainfo` `covidpais` `casos` `recomendaciones` `sintomas` `netflix` `youtube`  `spotify`  `crunchyroll`  `disney`  `xboxgamepass`  `primevideo`  `appletv`  `hbomax`  `discordnitro`  `googleone`  `ea`  `steam`  `paramount`  `twitch`")
  return message.reply({ embeds: [slash] });

  
 }

//Global
if(command.toLowerCase() == "casosglobal" || command.toLowerCase() == "covidglobal"){
  const slash = new Discord.MessageEmbed()
  .setTitle("Prueba con `/covid global` en su lugar")
  .setColor("#d6f2fc")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964400952452980736/slash.png")
  .addField("Slash  commands", "Debido a la  decisión de Discord de volver los Message Intents algo privilegiado, los comandos regulares serán remplazados por los Slash Commands desde el  1ro de septiembre, echale un vistazo con / y revisa los comandos" )  
  .addField(" Advertencia " , " Argenkit Bot irá eliminando los comandos clásicos progresivamente con el pasar de los meses para que sus usuarios vayan acostumbrandose al uso de los slash ")
  .addField(" Importante " , "Quizás sea necesario echar y volver a invitar al bot para que funcione si  es que invitaste al bot hace mucho tiempo ")
  .addField(" Comandos solo disponible con slash" ,  "`criptomoneda` `metal` `convertircripto` `convertirmetal` `pesoacripto` `pesoametal` `provinciainfo` `covidpais` `casos` `recomendaciones` `sintomas` `netflix` `youtube`  `spotify`  `crunchyroll`  `disney`  `xboxgamepass`  `primevideo`  `appletv`  `hbomax`  `discordnitro`  `googleone`  `ea`  `steam`  `paramount`  `twitch`")
  return message.reply({ embeds: [slash] });

  
 }

//Argentina
if(command.toLowerCase() == "covidarg" || command.toLowerCase() == "casos" || command.toLowerCase() == "covidcasos" || command.toLowerCase() == "covidargcasos"){
  const slash = new Discord.MessageEmbed()
  .setTitle("Prueba con `/covid casos` en su lugar")
  .setColor("#d6f2fc")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964400952452980736/slash.png")
  .addField("Slash  commands", "Debido a la  decisión de Discord de volver los Message Intents algo privilegiado, los comandos regulares serán remplazados por los Slash Commands desde el  1ro de septiembre, echale un vistazo con / y revisa los comandos" )  
  .addField(" Advertencia " , " Argenkit Bot irá eliminando los comandos clásicos progresivamente con el pasar de los meses para que sus usuarios vayan acostumbrandose al uso de los slash ")
  .addField(" Importante " , "Quizás sea necesario echar y volver a invitar al bot para que funcione si  es que invitaste al bot hace mucho tiempo ")
  .addField(" Comandos solo disponible con slash" ,  "`criptomoneda` `metal` `convertircripto` `convertirmetal` `pesoacripto` `pesoametal` `provinciainfo` `covidpais` `casos` `recomendaciones` `sintomas` `netflix` `youtube`  `spotify`  `crunchyroll`  `disney`  `xboxgamepass`  `primevideo`  `appletv`  `hbomax`  `discordnitro`  `googleone`  `ea`  `steam`  `paramount`  `twitch`")
  return message.reply({ embeds: [slash] });

  
 }

//País
//lista

if(command.toLowerCase() === 'covidpais'){
  const slash = new Discord.MessageEmbed()
  .setTitle("Prueba con `/covid covidpais` en su lugar")
  .setColor("#d6f2fc")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964400952452980736/slash.png")
  .addField("Slash  commands", "Debido a la  decisión de Discord de volver los Message Intents algo privilegiado, los comandos regulares serán remplazados por los Slash Commands desde el  1ro de septiembre, echale un vistazo con / y revisa los comandos" )  
  .addField(" Advertencia " , " Argenkit Bot irá eliminando los comandos clásicos progresivamente con el pasar de los meses para que sus usuarios vayan acostumbrandose al uso de los slash ")
  .addField(" Importante " , "Quizás sea necesario echar y volver a invitar al bot para que funcione si  es que invitaste al bot hace mucho tiempo ")
  .addField(" Comandos solo disponible con slash" ,  "`criptomoneda` `metal` `convertircripto` `convertirmetal` `pesoacripto` `pesoametal` `provinciainfo` `covidpais` `casos` `recomendaciones` `sintomas` `netflix` `youtube`  `spotify`  `crunchyroll`  `disney`  `xboxgamepass`  `primevideo`  `appletv`  `hbomax`  `discordnitro`  `googleone`  `ea`  `steam`  `paramount`  `twitch`")
  return message.reply({ embeds: [slash] });

  
 }

//DIVERSIÓN
//ODIO

    if(command.toLowerCase() === "odio"){
      var a = Math.floor(Math.random() * 100 + 1);
      var d = '█'
      for (i=0;i<=a;i=i+4){
        d='█'+ d
      }
    
    const embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription("Calculando...")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929069300290027550/odioarg.png")
    .addField("Tu odio hacía Argentina es del: ",  d+' ' + a+'%' )
    .setFooter("Odio de  " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
  }

  //Odio latam
  if(command.toLowerCase() === "odiolatam"){
    var a = Math.floor(Math.random() * 100 + 1);
    var d = '█'
    for (i=0;i<=a;i=i+4){
      d='█'+ d
    }
   
   const embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription("Calculando...")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929069300512329768/odiolatam.png")
    .addField("Tu odio hacía Latinoamérica es del: ",  d+' ' + a+'%' )
    .setFooter("Odio de  " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
}

//Escapar latam
    if(command.toLowerCase() === "escaparlatam"){
      
      var a = Math.floor(Math.random() * 100 + 1);
      var d = '█'
      for (i=0;i<=a;i=i+4){
        d='█'+ d
      }

      
      const embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setDescription("Calculando...")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929069300000636958/escaparlatam.png")
      .addField("Tus probabilidades de escapar de latinoamérica son de: ",  d+' ' + a+'%' )
      .setFooter("Probabilidades de  " + message.member.displayName, message.author.displayAvatarURL())
      return message.reply({ embeds: [embed] });
    }

    //8Ball

    if(command.toLowerCase() === "8ball" || command.toLowerCase() === "bola8" || command.toLowerCase() === "bolamagica" || command.toLowerCase() === "bolamágica"){
      var a = Math.floor(Math.random() * 15 + 1);
   
      if(a==1){
        const embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921903283667353610/8ballnew.png")
        .setDescription("Calculando...")
        .addField("La bola 8 mágica dice... ",  "Ma' vale " )
        return message.reply({ embeds: [embed] });
      }
      if(a==2){
        const embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921903283667353610/8ballnew.png")
        .setDescription("Calculando...")
        .addField("La bola 8 mágica dice...  ",  "Métele sí " )
        return message.reply({ embeds: [embed] });
      }
      if(a==3){
        const embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921903283667353610/8ballnew.png")
        .setDescription("Calculando...")
        .addField("La bola 8 mágica dice... ",  "Obvioo " )
        return message.reply({ embeds: [embed] });
      }
      if(a==4){
        const embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921903283667353610/8ballnew.png")
        .setDescription("Calculando...")
        .addField("La bola 8 mágica dice... ",  "Y sí" )
        return message.reply({ embeds: [embed] });
      }
      if(a==5){
        const embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921903283667353610/8ballnew.png")
        .setDescription("Calculando...")
        .addField("La bola 8 mágica dice...  ",  "Re sí amigo" )
        return message.reply({ embeds: [embed] });
      }
      if(a==6){
        const embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921903283667353610/8ballnew.png")
        .setDescription("Calculando...")
        .addField("La bola 8 mágica dice...  ",  "Ni empedo" )
        return message.reply({ embeds: [embed] });
      }
      if(a==7){
        const embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921903283667353610/8ballnew.png")
        .setDescription("Calculando...")
        .addField("La bola 8 mágica dice...  ",  "Para nada" )
        return message.reply({ embeds: [embed] });
      }
      if(a==8){
        const embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921903283667353610/8ballnew.png")
        .setDescription("Calculando...")
        .addField("La bola 8 mágica dice... ",  "Ni loco" )
        return message.reply({ embeds: [embed] });
      }
      if(a==9){
        const embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921903283667353610/8ballnew.png")
        .setDescription("Calculando...")
        .addField("La bola 8 mágica dice... ",  "Ni ahí" )
        return message.reply({ embeds: [embed] });
      }
      if(a==10){
        const embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921903283667353610/8ballnew.png")
        .setDescription("Calculando...")
        .addField("La bola 8 mágica dice... ",  "Naa" )
        return message.reply({ embeds: [embed] });
      }
    
    if(a==11){
      const embed = new Discord.MessageEmbed()
      .setColor("YELLOW")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921903283667353610/8ballnew.png")
      .setDescription("Calculando...")
      .addField("La bola 8 mágica dice... ",  "Puede ser..." )
      return message.reply({ embeds: [embed] });
    }
  if(a==12){
    const embed = new Discord.MessageEmbed()
    .setColor("YELLOW")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921903283667353610/8ballnew.png")
    .setDescription("Calculando...")
    .addField("La bola 8 mágica dice... ",  "El tiempo lo dirá")
    return message.reply({ embeds: [embed] });
  }
  if(a==13){
    const embed = new Discord.MessageEmbed()
    .setColor("YELLOW")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921903283667353610/8ballnew.png")
    .setDescription("Calculando...")
    .addField("La bola 8 mágica dice... ",  "Ya veremos dijo el ciego")
    return message.reply({ embeds: [embed] });
  }
  if(a==14){
    const embed = new Discord.MessageEmbed()
    .setColor("YELLOW")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921903283667353610/8ballnew.png")
    .setDescription("Calculando...")
    .addField("La bola 8 mágica dice... ",  "Quizás")
    return message.reply({ embeds: [embed] });
  }
  if(a==15){
    const embed = new Discord.MessageEmbed()
    .setColor("YELLOW")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921903283667353610/8ballnew.png")
    .setDescription("Calculando...")
    .addField("La bola 8 mágica dice... ",  "Ni idea amigo")
    return message.reply({ embeds: [embed] });
  }
 
}

//DADOS

if(command.toLowerCase() === "dados" || command.toLowerCase() === "dado"){
  var a = Math.floor(Math.random() * 6 + 1);

  if(a==1){
    const embed = new Discord.MessageEmbed()
    .setColor("#ffe082")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921904012138258452/dado.png")
    .setDescription("Tirando dados...")
    .addField("El dado cayó en... ",  " Número :one: " )
    return message.reply({ embeds: [embed] });
  }

if(a==2){
  const embed = new Discord.MessageEmbed()
  .setColor("#ffe082")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921904011915952160/dado_1.png")
  .setDescription("Tirando dados...")
  .addField("El dado cayó en... ",  " Número :two: " )
  return message.reply({ embeds: [embed] });

}

if(a==3){
  const embed = new Discord.MessageEmbed()
  .setColor("#ffe082")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921904011685294090/dado_2.png")
  .setDescription("Tirando dados...")
  .addField("El dado cayó en... ",  " Número :three: " )
  return message.reply({ embeds: [embed] });
}

if(a==4){
  const embed = new Discord.MessageEmbed()
  .setColor("#ffe082")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921904286303133807/dado_5.png")
  .setDescription("Tirando dados...")
  .addField("El dado cayó en... ",  " Número :four: " )
  return message.reply({ embeds: [embed] });
}

if(a==5){
  const embed = new Discord.MessageEmbed()
  .setColor("#ffe082")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921904011479769180/dado_3.png")
  .setDescription("Tirando dados...")
  .addField("El dado cayó en... ",  " Número :five: " )
  return message.reply({ embeds: [embed] });
}

if(a==6){
  const embed = new Discord.MessageEmbed()
  .setColor("#ffe082")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921904011244871730/dado_4.png")
  .setDescription("Tirando dados...")
  .addField("El dado cayó en... ",  " Número :six: " )
  return message.reply({ embeds: [embed] });
}

}

//COVIDTEST
  if(command.toLowerCase() === "covidtest"){
    const a = Math.floor(Math.random() * 2 + 1)
    if(a == 1){
      const embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setDescription("Calculando...")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/937780157387780116/test-results_1.png")
      .addField("RESULTADOS: ", "POSITIVO (+)")
      .setFooter("Test de  " + message.member.displayName, message.author.displayAvatarURL())
      return message.reply({ embeds: [embed] });
    }
    if(a ==2){
      const embed = new Discord.MessageEmbed()
      .setColor("RED")
      .setDescription("Calculando...")
      .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/937781157196611644/negativotest.png")
      .addField("RESULTADOS: ", "NEGATIVO (-)")
      .setFooter("Test de  " + message.member.displayName, message.author.displayAvatarURL())
      return message.reply({ embeds: [embed] });
  }
}

if(command.toLowerCase() === "moneda" || command.toLowerCase() === "soloescudo" || command.toLowerCase() === "caraocruz" || command.toLowerCase() === "escudosol" ||  command.toLowerCase() === "solescudo"){
  const a = Math.floor(Math.random() * 2 + 1)
  message.channel.send(`${message.author} está tirando una moneda`)
  if(a == 1){
    const embed = new Discord.MessageEmbed()
    .setColor("#27C5F5")
    .setDescription("Tirando...")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/805139900768190484/bancario_1.png")
    .addField("LA MONEDA QUEDÓ EN: ", " **SOL** :sun_with_face: ")
    .setFooter("Moneda tirada por:  " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
  }
  if(a ==2){
    const embed = new Discord.MessageEmbed()
    .setColor("#FCFBFB")
    .setDescription("Tirando...")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/805139082417799168/BancarioEscudo.png")
    .addField("LA MONEDA QUEDÓ EN: ", " **ESCUDO** :shield:")
    .setFooter("Moneda tirada por:  " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
}
}
  
//Piedra Papel o Tijera

if(command.toLowerCase() === "piedrapapelotijera"  || command.toLowerCase() === "ppt" || command.toLowerCase() === "rps"){
  simplydjs.rps(message, {
    embedColor: "#05e841", // default: #075FFF
    timeoutEmbedColor: "#f00a15", // default: #c90000
    drawEmbedColor: "#e87a0c", // default: #075FFF
    winEmbedColor: "#e8dd05", // default: #06bd00
    embedFooter: "Piedra Papel o Tijera",
    credit: "FALSE",
    rockColor: "SECONDARY", // default: SECONDARY
    paperColor: "SECONDARY", // default: SECONDARY
    scissorsColor: "SECONDARY", // default: SECONDARY
   
  });

}

if(command.toLowerCase() === "tateti"  || command.toLowerCase() === "ttt" || command.toLowerCase() === "tictactoe"){
  simplydjs.tictactoe(message);
}


//CONVERTIR

if(command.toLowerCase() == "convertir" || command.toLowerCase() == "convertirtarjeta" || command.toLowerCase() == "convertirstreaming" || command.toLowerCase() == "convertirgamer" || command.toLowerCase() == "convertirsolidario" || command.toLowerCase() == "convertir65" ){

   let conv = args[0];
   if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
   conv = conv.replace(',','.')
   var conv2 = parseFloat(conv)
  axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
  .then((oficial)=> {

    
  const embed1 = new Discord.MessageEmbed()

  .setTitle("Dólar estadounidense <:rightarrow:921907270747570247> Peso Argentino")
  .setColor("GREEN")
  .setDescription("Dólares estadounidenses expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%))")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921906513453408286/dolarapeso.png")
  .addField("Monto original :dollar: ", 'USD$ ' + currencyFormatter.format(conv2, { locale: 'es-ES', code: ' ' }))
  .addField("Compra :flag_ar:", 'ARS$ ' +  currencyFormatter.format((conv2 * oficial.data['compra']), { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta :flag_ar:", 'ARS$ ' +  currencyFormatter.format((conv2 * oficial.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' +  currencyFormatter.format(((conv2 * oficial.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())

    const embed2 = new Discord.MessageEmbed ()
    .setTitle("Dólar estadounidense <:rightarrow:921907270747570247> Peso Argentino")
  .setColor("GREEN")
  .setDescription("Dólares estadounidenses expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (IVA (21%), PAIS (8%) y adelanto de ganancias (35%)) \n Usualmente conocido como dólar streaming")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921906513453408286/dolarapeso.png")
  .addField("Monto original :dollar: ", 'USD$ ' + currencyFormatter.format(conv2, { locale: 'es-ES', code: ' ' }))
  .addField("Compra :flag_ar:", 'ARS$ ' +  currencyFormatter.format((conv2 * oficial.data['compra']), { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Venta :flag_ar:", 'ARS$ ' +  currencyFormatter.format((conv2 * oficial.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
  .addField("Impuestos (64%) :flag_ar: ", 'ARS$ ' +  currencyFormatter.format(((conv2 * oficial.data['venta'])*1.64), { locale: 'es-ES', code: ' ' }) ,true)
  .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())

 

  const button1 = new MessageButton()
  .setCustomId("previousbtn")
  .setLabel("🏦 Dólar solidario (65%)")
 .setStyle("DANGER");

 const button2 = new MessageButton()
 .setCustomId("nextbtn")
 .setLabel("💳 Dólar streaming (64%)")
 .setStyle("SUCCESS");

 const pages = [
 embed1,
 embed2,


];

const buttonList = [button1, button2];
const timeout = 30000;
paginationEmbed(message, pages, buttonList, timeout);



   })
   .catch((err) => {
   console.error('ERR', err)
 
        
  })
  
 }

 //Convertir Blue



if(command.toLowerCase() == "convertirblue" ){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv2 = parseFloat(conv)
 axios.get('https://api-dolar-argentina.herokuapp.com/api/dolarblue')
 .then((blue)=> {
 const embed = new Discord.MessageEmbed()
 .setTitle("Dólar Blue  <:rightarrow:921907270747570247> Peso Argentino")
 .setColor("BLUE")
 .setDescription("Dólar estadounidense expresado en pesos argentinos a precio del mercado paralelo (Dólar blue)")
 .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922553537978855524/blueapeso.png")
 .addField("Monto Original :dollar: ", 'USD$ ' + currencyFormatter.format(conv2, { locale: 'es-ES', code: ' ' }))
 .addField("Compra:flag_ar: ", 'ARS$ ' + currencyFormatter.format((conv2 * blue.data['compra']), { locale: 'es-ES', code: ' ' }) ,true)
 .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format((conv2 * blue.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
 .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
 return message.reply({ embeds: [embed] });

})
 .catch((err) => {
 console.error('ERR', err)

      
})
}

//Convertir euro

if(command.toLowerCase() == "convertireuro" ){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv3 = parseFloat(conv)
 axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
 .then((euro)=> {
 const embed = new Discord.MessageEmbed()
 .setTitle("Euro <:rightarrow:921907270747570247> Peso Argentino")
 .setColor("#083499")
 .setDescription("Euro expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%))")
 .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922548848826654801/euroapeso.png")
 .addField("Monto Original :euro: ", 'EUR€ ' + currencyFormatter.format(conv3, { locale: 'es-ES', code: ' ' }))
 .addField("Compra :flag_ar: ", 'ARS$ '  + currencyFormatter.format((conv3 * euro.data['compra']), { locale: 'es-ES', code: ' ' }) ,true)
 .addField("Venta :flag_ar: ", 'ARS$ '  + currencyFormatter.format((conv3 * euro.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
 .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv3 * euro.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)
 .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
 return message.reply({ embeds: [embed] });

})
 .catch((err) => {
 console.error('ERR', err)

      
})
}

//convertir real

if(command.toLowerCase() == "convertirreal" || command.toLowerCase() == "convertirbr"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv4 = parseFloat(conv)
 axios.get('https://api-dolar-argentina.herokuapp.com/api/real/nacion')
 .then((real)=> {
 const embed = new Discord.MessageEmbed()
 .setTitle("Real Brasileño <:rightarrow:921907270747570247> Peso Argentino")
 .setColor("#6da545")
 .setDescription("Real brasileño expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
 .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922553925243117698/realapeso.png")
 .addField("Monto Original :flag_br: ", 'BRL R$ ' + currencyFormatter.format(conv4, { locale: 'es-ES', code: ' ' }))
 .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format((conv4 * real.data['compra']), { locale: 'es-ES', code: ' ' }) ,true)
 .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format((conv4 * real.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
 .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv4 * real.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)
 
 .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
 return message.reply({ embeds: [embed] });

})
 .catch((err) => {
 console.error('ERR', err)

      
})
}

//convertir yen

if(command.toLowerCase() == "convertiryen" || command.toLowerCase() == "convertirjpy"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv5 = parseFloat(conv)
  axios.get('https://api.exchangerate.host/latest')
  .then((YEN)=> {

   yen1=YEN.data['rates']['JPY']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Yen Japonés <:rightarrow:921907270747570247> Peso Argentino ")
    .setColor("#FDFD0D")
    .setDescription("Yen japonés expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922556125809872936/yenapeso_1.png")
    .addField("Precio Original :yen: ", 'JPY¥ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / yen1)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/yen1) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/yen1) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}

//Convertir libra

if(command.toLowerCase() == "convertirlibra" || command.toLowerCase() == "convertirgbp" || command.toLowerCase() == "convertiresterlina"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv5 = parseFloat(conv)
  var libra = 0
  axios.get('https://api.exchangerate.host/latest')
  .then((LIBRA)=> {

   libra=LIBRA.data['rates']['GBP']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Libra Esterlina <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("#D605F6")
    .setDescription("Libra Esterlina expresada en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922561706838868049/libraapeso.png")
    .addField("Monto Original :pound: ", 'GBP£ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / libra)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/libra) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/libra) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}

//Convertir rublo

if(command.toLowerCase() == "convertirrublo" || command.toLowerCase() == "convertirrub" || command.toLowerCase() == "convertirruso"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv5 = parseFloat(conv)
  var rublo = 0
  axios.get('https://api.exchangerate.host/latest')
  .then((RUBLO)=> {

   rublo=RUBLO.data['rates']['RUB']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Rublo Ruso <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("RED")
    .setDescription("Rublo ruso expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928344880995008602/rubloapeso.png")
    .addField("Monto original <:rublo:913901788531417229> ", 'RUB₽ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / rublo)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/rublo) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/rublo) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}

//Convertir mexicano

if(command.toLowerCase() == "convertirpesomexicano" || command.toLowerCase() == "convertirmxn" || command.toLowerCase() == "convertirmexicano"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv5 = parseFloat(conv)
  var mxn = 0
  axios.get('https://api.exchangerate.host/latest')
  .then((MXN)=> {

   mxn=MXN.data['rates']['MXN']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Peso Méxicano <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("#24944c")
    .setDescription("Peso méxicano expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928349418023968918/mxnapeso.png")
    .addField("Monto original :flag_mx: ", 'MXN$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / mxn)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/mxn) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuesto (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/mxn) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}

//Convertir bolivar

if(command.toLowerCase() == "convertirbolivar" || command.toLowerCase() == "convertirved" || command.toLowerCase() == "convertirves" || command.toLowerCase() == "convertirvenezolano"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv5 = parseFloat(conv)
  var mxn = 0
  axios.get('https://api.exchangerate.host/latest')
  .then((VES)=> {

   bolivar=VES.data['rates']['VES']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Bolivar Digital Venezolano <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("RED")
    .setDescription("Bolivar digital venezolano expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%))")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928354779887960105/bolivarapeso.png")
    .addField("Monto Original :flag_ve: ", 'VED B$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / bolivar)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/bolivar) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/bolivar) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}

//Dólar Canadiense
if(command.toLowerCase() == "convertirdolarcanadiense" || command.toLowerCase() == "convertircad" || command.toLowerCase() == "convertircanadiense"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv5 = parseFloat(conv)
  var cad = 0
  axios.get('https://api.exchangerate.host/latest')
  .then((CAD)=> {

   cad=CAD.data['rates']['CAD']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Dólar Canadiense <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("#fc0201")
    .setDescription("Dólar canadiense expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928345276857606194/cadapeso.png")
    .addField("Monto original :flag_ca: ", 'CAD$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / cad)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/cad) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/cad) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}

//Peso chileno
if(command.toLowerCase() == "convertirpesochileno" || command.toLowerCase() == "convertirclp" || command.toLowerCase() == "convertirchileno"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv5 = parseFloat(conv)
  var clp = 0
  axios.get('https://api.exchangerate.host/latest')
  .then((CLP)=> {

   clp=CLP.data['rates']['CLP']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Peso Chileno <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("#fc0201")
    .setDescription("Peso chileno expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928350035324842035/chileapeso.png")
    .addField("Monto original :flag_cl: ", 'CLP$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / clp)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/clp) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/clp) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}

//Peso Uruguayo
if(command.toLowerCase() == "convertiruruguayo" || command.toLowerCase() == "convertirpesouruguayo" || command.toLowerCase() == "convertiruyu"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv5 = parseFloat(conv)
  var clp = 0
  axios.get('https://api.exchangerate.host/latest')
  .then((UYU)=> {

   peso=UYU.data['rates']['UYU']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Peso Uruguayo <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("BLUE")
    .setDescription("Peso uruguayo expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928350035744288878/uyuapeso.png")
    .addField("Monto original :flag_uy: ", 'UYU$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / peso)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/peso) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/peso) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}

//Boliviano 


if(command.toLowerCase() == "convertirboliviano" || command.toLowerCase() == "convertirpesoboliviano" || command.toLowerCase() == "convertirbob"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv5 = parseFloat(conv)
  var clp = 0
  axios.get('https://api.exchangerate.host/latest')
  .then((BOB)=> {

   peso=BOB.data['rates']['BOB']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Boliviano <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("#6da544")
    .setDescription("Boliviano expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928352180296122388/bolivianoapeso.png")
    .addField("Monto original :flag_bo: ", 'BOB Bs. ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / peso)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/peso) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/peso) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}


//Guaraní Paraguayo
if(command.toLowerCase() == "convertirguarani" || command.toLowerCase() == "convertirparaguayo" || command.toLowerCase() == "convertirpyg"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv5 = parseFloat(conv)
  var clp = 0
  axios.get('https://api.exchangerate.host/latest')
  .then((PYG)=> {

   guarani=PYG.data['rates']['PYG']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Guaraní paraguayo <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("#d80027")
    .setDescription("Guarani paraguayo expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928353654342299709/guaraniapeso.png")
    .addField("Monto original :flag_py: ", 'PYG₲ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / guarani)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/guarani) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/guarani) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}

//Peso colombiano
if(command.toLowerCase() == "convertirpesocolombiano" || command.toLowerCase() == "convertircolombiano" || command.toLowerCase() == "convertircop"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv5 = parseFloat(conv)
  var clp = 0
  axios.get('https://api.exchangerate.host/latest')
  .then((COL)=> {

   pesos=COL.data['rates']['COP']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Peso Colombiano <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("#fecb04")
    .setDescription("Peso colombiano expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928349550970822716/copapeso.png")
    .addField("Monto original :flag_co: ", 'COP$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / pesos)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/pesos) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/pesos) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}


//Sol peruano
if(command.toLowerCase() == "convertirsolperuano" || command.toLowerCase() == "convertirsol" || command.toLowerCase() == "convertirperuano" || command.toLowerCase() == "convertirpen"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv5 = parseFloat(conv)
  var clp = 0
  axios.get('https://api.exchangerate.host/latest')
  .then((PEN)=> {

   sol=PEN.data['rates']['PEN']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Sol Peruano <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("#cd0400")
    .setDescription("Sol peruano expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928352555736633374/solapeso.png")
    .addField("Monto Original :flag_pe: ", 'PEN S/ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / sol)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/sol) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/sol) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}


//YUAN
if(command.toLowerCase() == "convertiryuan" || command.toLowerCase() == "convertirrenminbi" || command.toLowerCase() == "convertircny"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv5 = parseFloat(conv)
  axios.get('https://api.exchangerate.host/latest')
  .then((CNY)=> {

   yuan=CNY.data['rates']['CNY']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Renminbi chino <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("#cd0400")
    .setDescription("Renminbi (yuan) chino expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928356456087048234/yuanapeso.png")
    .addField("PRECIO ORIGINAL :flag_cn: ", 'CNY¥ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("COMPRA :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / yuan)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("VENTA :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/yuan) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("IMPUESTOS (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/yuan) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}

if(command.toLowerCase() == "convertirdolaraustraliano" || command.toLowerCase() == "convertiraud" || command.toLowerCase() == "convertiraustraliano"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv5 = parseFloat(conv)
  axios.get('https://api.exchangerate.host/latest')
  .then((AUD)=> {

   dolar=AUD.data['rates']['AUD']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Dólar Australiano <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("#000346")
    .setDescription("Dólar australiano expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928345614805246013/audapeso.png")
    .addField("Monto original :flag_au: ", 'AUD$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / dolar)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/dolar) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/dolar) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}


if(command.toLowerCase() == "convertirdolarneozelandés" || command.toLowerCase() == "convertirnzd" || command.toLowerCase() == "convertirnuevazelanda"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv5 = parseFloat(conv)
  axios.get('https://api.exchangerate.host/latest')
  .then((NZD)=> {

   dolar=NZD.data['rates']['NZD']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Dólar Neozelandés <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("#000346")
    .setDescription("Dólar neozelandés expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928348263235604560/nzapeso.png")
    .addField("Monto original :flag_nz: ", 'NZD$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / dolar)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/dolar) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuetos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/dolar) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}

//Convertir rupia
if(command.toLowerCase() == "convertirrupia" || command.toLowerCase() == "convertirrupiaindia" || command.toLowerCase() == "convertirinr"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv5 = parseFloat(conv)
  axios.get('https://api.exchangerate.host/latest')
  .then((INR)=> {

   rupia=INR.data['rates']['INR']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Rupia India <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("#fc9836")
    .setDescription("Rupia india expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928356536307314718/indiaapeso.png")
    .addField("Precio original :flag_in: ", 'INR₹ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / rupia)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/rupia) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/rupia) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}

//Convertir won
if(command.toLowerCase() == "convertirwon" || command.toLowerCase() == "convertirwonsurcoreano" || command.toLowerCase() == "convertirsurcoreano"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv5 = parseFloat(conv)
  axios.get('https://api.exchangerate.host/latest')
  .then((KRW)=> {

   won=KRW.data['rates']['KRW']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Won Surcoreano <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("#FFFFFF")
    .setDescription("Won surcoreano expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928356536735117312/wonapeso.png")
    .addField("Monto original :flag_kr: ", 'KRW ₩ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / won)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/won) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/won) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)    
 })
}

//Convertir lira
if(command.toLowerCase() == "convertirlira" || command.toLowerCase() == "convertirliraturca" || command.toLowerCase() == "convertirtry"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv5 = parseFloat(conv)
  axios.get('https://api.exchangerate.host/latest')
  .then((KRW)=> {

   won=KRW.data['rates']['TRY']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Lira turca <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("#d70224")
    .setDescription("Lira turca expresada en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/930966650122014740/liraapeso.png")
    .addField("Monto original :flag_tr: ", 'TRY₺ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / won)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/won) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/won) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)    
 })
}

//Convertir lira
if(command.toLowerCase() == "convertirfranco" || command.toLowerCase() == "convertirfrancosuizo" || command.toLowerCase() == "convertirsuizo" || command.toLowerCase() == "convertirchf"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv5 = parseFloat(conv)
  axios.get('https://api.exchangerate.host/latest')
  .then((suizo)=> {

   franco=suizo.data['rates']['CHF']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Franco Suizo <:rightarrow:921907270747570247> Peso Argentino")
    .setColor("#d80027")
    .setDescription("Franco suizo expresado en pesos argentinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/930966649710985286/francoapeso.png")
    .addField("Monto original :flag_ch: ", 'CHF Fr. ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5 / franco)) * EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ar: ", 'ARS$ ' + currencyFormatter.format(((conv5/franco) * EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ar: ", 'ARS$ ' + currencyFormatter.format((((conv5/franco) * EUR.data['venta'])*1.65), { locale: 'es-ES', code: ' ' }) ,true)
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)    
 })
}

//Convertir bitcoin
//Peso a...

//Peso a dólar

if(command.toLowerCase() == "pesoadolar" || command.toLowerCase() == "pesoadólar"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv2 = parseFloat(conv)
 axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
 .then((oficial)=> {
 const embed = new Discord.MessageEmbed()
 .setTitle(" Peso Argentino  <:rightarrow:921907270747570247> Dólar estadounidense")
 .setColor("GREEN")
 .setDescription("Pesos argentinos expresados en dolares estadounideneses a tasa oficial + impuestos (PAIS (30%) y adelanto de ganancias (35%))")
 .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/921906513453408286/dolarapeso.png")
 .addField("Monto Original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv2, { locale: 'es-ES', code: ' ' }))
 .addField("Compra :dollar:", 'USD$ ' + currencyFormatter.format((conv2 / oficial.data['compra']), { locale: 'es-ES', code: ' ' }), true)
 .addField("Venta :dollar:", 'USD$ ' + currencyFormatter.format((conv2 / oficial.data['venta']), { locale: 'es-ES', code: ' ' }), true)
 .addField("Impuestos :dollar: ", 'USD$ ' + currencyFormatter.format(( (conv2 / oficial.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
 .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
 return message.reply({ embeds: [embed] });

})
 .catch((err) => {
 console.error('ERR', err)

      
})
}
 
//Peso a dólar blue

if(command.toLowerCase() == "pesoadolarblue" || command.toLowerCase() == "pesoadólarblue" || command.toLowerCase() == "pesoablue"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv2 = parseFloat(conv)
 axios.get('https://api-dolar-argentina.herokuapp.com/api/dolarblue')
 .then((blue)=> {
 const embed = new Discord.MessageEmbed()
 .setTitle(" Peso Argentino  <:rightarrow:921907270747570247> Dólar Blue")
 .setColor("BLUE")
 .setDescription("Pesos argentinos expresados en dólares estadounidenses a precio del mercado paralelo (Dólar blue)")
 .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922553537978855524/blueapeso.png")
 .addField("Monto Original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv2, { locale: 'es-ES', code: ' ' }))
 .addField("Compra :dollar:", 'USD$ ' + currencyFormatter.format((conv2 / blue.data['compra']), { locale: 'es-ES', code: ' ' }), true)
 .addField("Venta :dollar:", 'USD$ ' + currencyFormatter.format((conv2 / blue.data['venta']), { locale: 'es-ES', code: ' ' }), true)
 .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
 return message.reply({ embeds: [embed] });

})
 .catch((err) => {
 console.error('ERR', err)

      
})
}

//peso a euro
if(command.toLowerCase() == "pesoaeuro"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv2 = parseFloat(conv)
 axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
 .then((euro)=> {
 const embed = new Discord.MessageEmbed()
 .setTitle(" Peso Argentino  <:rightarrow:921907270747570247> Euro ")
 .setColor("#083499")
 .setDescription("Pesos argentinos expresados en euros a tasa oficial + impuestos (PAIS (30%) y adelanto de ganancias (35%)).")
 .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922548848826654801/euroapeso.png")
 .addField("Monto Original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv2, { locale: 'es-ES', code: ' ' }))
 .addField("Compra :euro:", 'EUR€  ' + currencyFormatter.format((conv2 / euro.data['compra']), { locale: 'es-ES', code: ' ' }), true)
 .addField("Venta :euro:", 'EUR€ ' + currencyFormatter.format((conv2 / euro.data['venta']), { locale: 'es-ES', code: ' ' }), true)
 .addField("Impuestos :euro: ", 'EUR€  ' + currencyFormatter.format(( (conv2 / euro.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
 .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
 return message.reply({ embeds: [embed] });

})
 .catch((err) => {
 console.error('ERR', err)

      
})
}


//Peso a real


if(command.toLowerCase() == "pesoareal"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv2 = parseFloat(conv)
 axios.get('https://api-dolar-argentina.herokuapp.com/api/real/nacion')
 .then((real)=> {
 const embed = new Discord.MessageEmbed()
 .setTitle(" Peso Argentino  <:rightarrow:921907270747570247> Real Brasileño")
 .setColor("#6da545")
 .setDescription("Pesos argentinos expresados en reales brasileños a tasa oficial + impuestos (PAIS (30%) y adelanto de ganancias (35%)).")
 .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922553925243117698/realapeso.png")
 .addField("Monto Original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv2, { locale: 'es-ES', code: ' ' }))
 .addField("Compra :flag_br:", 'BRL R$ ' + currencyFormatter.format((conv2 / real.data['compra']), { locale: 'es-ES', code: ' ' }), true)
 .addField("Venta :flag_br:", 'BRL R$ ' + currencyFormatter.format((conv2 / real.data['venta']), { locale: 'es-ES', code: ' ' }), true)
 .addField("Impuestos :flag_br: ", 'BRL R$ ' + currencyFormatter.format(( (conv2 / real.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
 .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
 return message.reply({ embeds: [embed] });

})
 .catch((err) => {
 console.error('ERR', err)

      
})
}

//Peso a yen

if(command.toLowerCase() == "pesoayen"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv5 = parseFloat(conv)
  axios.get('https://api.exchangerate.host/latest')
  .then((YEN)=> {

   yen1=YEN.data['rates']['JPY']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Peso Argentino <:rightarrow:921907270747570247> Yen Japonés")
    .setColor("#FDFD0D")
    .setDescription("Pesos argentinos expresados en Yen japonés al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922556125809872936/yenapeso_1.png")
    .addField("Monto Original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :yen: ", 'JPY¥ ' + currencyFormatter.format(((conv5 * yen1)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :yen: ", 'JPY¥ ' + currencyFormatter.format(((conv5 * yen1) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :yen: ", 'JPY¥ ' + currencyFormatter.format((((conv5 * yen1) / EUR.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}

//Peso a libra
if(command.toLowerCase() == "pesoalibra"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv5 = parseFloat(conv)
  axios.get('https://api.exchangerate.host/latest')
  .then((LIBRA)=> {

   libra1=LIBRA.data['rates']['GBP']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Peso Argentino <:rightarrow:921907270747570247> Libra Esterlina")
    .setColor("#D605F6")
    .setDescription("Pesos argentinos expresado en Libras esterlinas al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/922561706838868049/libraapeso.png")
    .addField("Monto Original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :pound: ", 'GBP£ ' + currencyFormatter.format(((conv5 * libra1)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :pound: ", 'GBP£ ' + currencyFormatter.format(((conv5 * libra1) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :pound: ", 'GBP£ ' + currencyFormatter.format((((conv5 * libra1) / EUR.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}

//Peso a rublo

if(command.toLowerCase() == "pesoarublo"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv5 = parseFloat(conv)
  axios.get('https://api.exchangerate.host/latest')
  .then((LIBRA)=> {

   libra1=LIBRA.data['rates']['RUB']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Peso Argentino <:rightarrow:921907270747570247> Rublo Ruso")
    .setColor("RED")
    .setDescription("Pesos argentinos expresado en Rublos rusos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928344880995008602/rubloapeso.png")
    .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ru: ", 'RUB₽ ' + currencyFormatter.format(((conv5 * libra1)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ru: ", 'RUB₽ ' + currencyFormatter.format(((conv5 * libra1) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ru: ", 'RUB₽ ' + currencyFormatter.format((((conv5 * libra1) / EUR.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}

//Peso a mxn
if(command.toLowerCase() == "pesoamxn" || command.toLowerCase() == "pesoapesomexicano"  || command.toLowerCase() == "pesoapesoméxicano"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv5 = parseFloat(conv)
  axios.get('https://api.exchangerate.host/latest')
  .then((mxn)=> {

   peso=mxn.data['rates']['MXN']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Peso Argentino <:rightarrow:921907270747570247> Peso Méxicano")
    .setColor("#24944c")
    .setDescription("Pesos argentinos expresado en Pesos méxicanos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928349418023968918/mxnapeso.png")
    .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_mx: ", 'MXN$ ' + currencyFormatter.format(((conv5 * peso)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_mx: ", 'MXN$ ' + currencyFormatter.format(((conv5 * peso) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_mx: ", 'MXN$ ' + currencyFormatter.format((((conv5 * peso) / EUR.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}

//Peso a vez

if(command.toLowerCase() == "pesoaved" || command.toLowerCase() == "pesoabolivar"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv5 = parseFloat(conv)
  axios.get('https://api.exchangerate.host/latest')
  .then((VES)=> {

   bolivar=VES.data['rates']['VES']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((USD)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Peso Argentino <:rightarrow:921907270747570247> Bolivar Digital Venezolano")
    .setColor("RED")
    .setDescription("Pesos argentinos expresado en bolivares digitales venezolanos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928354779887960105/bolivarapeso.png")
    .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compar :flag_ve: ", 'VED B$ ' + currencyFormatter.format(((conv5 * bolivar)) / USD.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ve: ", 'VED B$ ' + currencyFormatter.format(((conv5 * bolivar) / USD.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ve: ", 'VED B$ ' + currencyFormatter.format((((conv5 * bolivar) / USD.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}

//PESO a Canadiense

if(command.toLowerCase() == "pesoacad" || command.toLowerCase() == "pesoadolarcanadiense"  || command.toLowerCase() == "pesoacanadiense"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv5 = parseFloat(conv)
  var yen1 = 0
  axios.get('https://api.exchangerate.host/latest')
  .then((CAD)=> {

   canadiense=CAD.data['rates']['CAD']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Peso Argentino <:rightarrow:921907270747570247> Dólar Canadiense")
    .setColor("#fc0201")
    .setDescription("Pesos argentinos expresado en dólares canadienses al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928345276857606194/cadapeso.png")
    .addField("PRECIO ORIGINAL :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("COMPRA :flag_ca: ", 'CAD$ ' + currencyFormatter.format(((conv5 * canadiense)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("VENTA :flag_ca: ", 'CAD$ ' + currencyFormatter.format(((conv5 * canadiense) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("IMPUESTOS (65%) :flag_ca: ", 'CAD$ ' + currencyFormatter.format((((conv5 * canadiense) / EUR.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}

//Peso a chileno

if(command.toLowerCase() == "pesoaclp" || command.toLowerCase() == "pesoachileno"  || command.toLowerCase() == "pesoapesochileno"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv5 = parseFloat(conv)

  axios.get('https://api.exchangerate.host/latest')
  .then((CLP)=> {

   peso=CLP.data['rates']['CLP']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Peso Argentino <:rightarrow:921907270747570247> Peso Chileno")
    .setColor("#fa0100")
    .setDescription("Pesos argentinos expresado en pesos chilenos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928350035324842035/chileapeso.png")
    .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_cl: ", 'CLP$ ' + currencyFormatter.format(((conv5 * peso)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_cl: ", 'CLP$ ' + currencyFormatter.format(((conv5 * peso) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_cl: ", 'CLP$ ' + currencyFormatter.format((((conv5 * peso) / EUR.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}

//Peso a uyu

if(command.toLowerCase() == "pesoauyu" || command.toLowerCase() == "pesoauruguayo"  || command.toLowerCase() == "pesoapesouruguayo"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv5 = parseFloat(conv)

  axios.get('https://api.exchangerate.host/latest')
  .then((UYU)=> {

   peso=UYU.data['rates']['UYU']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Peso Argentino <:rightarrow:921907270747570247> Peso Uruguayo")
    .setColor("BLUE")
    .setDescription("Pesos argentinos expresado en pesos uruguayos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928350035744288878/uyuapeso.png")
    .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_uy: ", 'UYU$ ' + currencyFormatter.format(((conv5 * peso)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_uy: ", 'UYU$ ' + currencyFormatter.format(((conv5 * peso) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_uy: ", 'UYU$ ' + currencyFormatter.format((((conv5 * peso) / EUR.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}

//Boliviano

if(command.toLowerCase() == "pesoabob" || command.toLowerCase() == "pesoaboliviano"  || command.toLowerCase() == "pesoapesoboliviano"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv5 = parseFloat(conv)

  axios.get('https://api.exchangerate.host/latest')
  .then((BOB)=> {

   peso=BOB.data['rates']['BOB']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Peso Argentino <:rightarrow:921907270747570247> Boliviano")
    .setColor("#6da544")
    .setDescription("Pesos argentinos expresado en bolivianos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928352180296122388/bolivianoapeso.png")
    .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_bo: ", 'BOB Bs. ' + currencyFormatter.format(((conv5 * peso)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_bo: ", 'BOB Bs.' + currencyFormatter.format(((conv5 * peso) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_bo: ", 'BOB Bs. ' + currencyFormatter.format((((conv5 * peso) / EUR.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}

//Guaranies paraguayos


if(command.toLowerCase() == "pesoapyg" || command.toLowerCase() == "pesoaguarani"  || command.toLowerCase() == "pesoaguaranies" || command.toLowerCase() == "pesoaparaguayos"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv5 = parseFloat(conv)

  axios.get('https://api.exchangerate.host/latest')
  .then((PYG)=> {

   guarani=PYG.data['rates']['PYG']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Peso Argentino <:rightarrow:921907270747570247> Guaraní Paraguayo")
    .setColor("#d80027")
    .setDescription("Pesos argentinos expresado en guaranies paraguayos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928353654342299709/guaraniapeso.png")
    .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_py: ", 'PYG₲ ' + currencyFormatter.format(((conv5 * guarani)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_py: ", 'PYG₲ ' + currencyFormatter.format(((conv5 * guarani) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_py: ", 'PYG₲ ' + currencyFormatter.format((((conv5 * guarani) / EUR.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}

//Peso Colombiano


if(command.toLowerCase() == "pesoacop" || command.toLowerCase() == "pesoacolombiano"  || command.toLowerCase() == "pesoapesoscolombianos"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv5 = parseFloat(conv)

  axios.get('https://api.exchangerate.host/latest')
  .then((COP)=> {

   pesos=COP.data['rates']['COP']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Peso Argentino <:rightarrow:921907270747570247> Peso Colombiano")
    .setColor("#fecb04")
    .setDescription("Pesos argentinos expresado en pesos colombianos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928349550970822716/copapeso.png")
    .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_co: ", 'COP$ ' + currencyFormatter.format(((conv5 * pesos)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_co: ", 'COP$ ' + currencyFormatter.format(((conv5 * pesos) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_co: ", 'COP$ ' + currencyFormatter.format((((conv5 * pesos) / EUR.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}

//Peso a soles

if(command.toLowerCase() == "pesoapen" || command.toLowerCase() == "pesoaperuano"  || command.toLowerCase() == "pesoasolperuano" || command.toLowerCase() == "pesoasol" || command.toLowerCase() == "pesoasoles"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv5 = parseFloat(conv)

  axios.get('https://api.exchangerate.host/latest')
  .then((PEN)=> {

   sol=PEN.data['rates']['PEN']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Peso Argentino <:rightarrow:921907270747570247> Sol")
    .setColor("#cd0400")
    .setDescription("Pesos argentinos expresado en soles peruanos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928352555736633374/solapeso.png")
    .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_pe: ", 'PEN S/ ' + currencyFormatter.format(((conv5 * sol)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_pe: ", 'PEN S/ ' + currencyFormatter.format(((conv5 * sol) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_pe: ", 'PEN S/ ' + currencyFormatter.format((((conv5 * sol) / EUR.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}


if(command.toLowerCase() == "pesoayuan" || command.toLowerCase() == "pesoarenminbi"  || command.toLowerCase() == "pesoacny" || command.toLowerCase() == "pesoayuanchino" || command.toLowerCase() == "pesoachino"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv5 = parseFloat(conv)

  axios.get('https://api.exchangerate.host/latest')
  .then((CNY)=> {

   yuan=CNY.data['rates']['CNY']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("PESOS ARGENTINOS A RENMINBI CHINOS")
    .setColor("#cd0400")
    .setDescription("Pesos argentinos expresado en renminbi (yuanes) chinos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/858081927252148274/Pesoacny.png")
    .addField("PRECIO ORIGINAL :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("COMPRA :flag_cn: ", 'CNY¥ ' + currencyFormatter.format(((conv5 * yuan)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("VENTA :flag_cn: ", 'CNY¥ ' + currencyFormatter.format(((conv5 * yuan) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("IMPUESTOS (65%) :flag_cn: ", 'CNY¥ ' + currencyFormatter.format((((conv5 * yuan) / EUR.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}

if(command.toLowerCase() == "pesoaaud" || command.toLowerCase() == "pesoadolaraustraliano"  || command.toLowerCase() == "pesoaaustraliano"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv5 = parseFloat(conv)
  var yen1 = 0
  axios.get('https://api.exchangerate.host/latest')
  .then((AUD)=> {

   dolar=AUD.data['rates']['AUD']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Peso Argentino <:rightarrow:921907270747570247> Dólar Australiano")
    .setColor("#000346")
    .setDescription("Pesos argentinos expresado en dólares australianos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928345614805246013/audapeso.png")
    .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_au: ", 'AUD$ ' + currencyFormatter.format(((conv5 * dolar)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_au: ", 'AUD$ ' + currencyFormatter.format(((conv5 * dolar) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_au: ", 'AUD$ ' + currencyFormatter.format((((conv5 * dolar) / EUR.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}


if(command.toLowerCase() == "pesoanzd" || command.toLowerCase() == "pesoadolarneozelandes"  || command.toLowerCase() == "pesoadolarnuevazelanda"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv5 = parseFloat(conv)
  var yen1 = 0
  axios.get('https://api.exchangerate.host/latest')
  .then((NZD)=> {

   dolar=NZD.data['rates']['NZD']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Peso Argentino <:rightarrow:921907270747570247> Dólar Neozelandes")
    .setColor("#000346")
    .setDescription("Pesos argentinos expresado en dólares neozelandeses al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928348263235604560/nzapeso.png")
    .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compar :flag_nz: ", 'NZD$ ' + currencyFormatter.format(((conv5 * dolar)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_nz: ", 'NZD$ ' + currencyFormatter.format(((conv5 * dolar) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_nz: ", 'NZD$ ' + currencyFormatter.format((((conv5 * dolar) / EUR.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}


if(command.toLowerCase() == "pesoainr" || command.toLowerCase() == "pesoarupia"  || command.toLowerCase() == "pesoarupiaindia"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv5 = parseFloat(conv)
  var yen1 = 0
  axios.get('https://api.exchangerate.host/latest')
  .then((INR)=> {

   rupia=INR.data['rates']['INR']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Peso Argentino <:rightarrow:921907270747570247> Rupia India")
    .setColor("#fc9836")
    .setDescription("Pesos argentinos expresado en rupias indias al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928356536307314718/indiaapeso.png")
    .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_in: ", 'INR₹ ' + currencyFormatter.format(((conv5 * rupia)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_in: ", 'INR₹ ' + currencyFormatter.format(((conv5 * rupia) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_in: ", 'INR₹ ' + currencyFormatter.format((((conv5 * rupia) / EUR.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}

//Won surcoreano


if(command.toLowerCase() == "pesoawon" || command.toLowerCase() == "pesoawonsurcoreano"  || command.toLowerCase() == "pesoakrw"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv5 = parseFloat(conv)
  var yen1 = 0
  axios.get('https://api.exchangerate.host/latest')
  .then((KRW)=> {

   won=KRW.data['rates']['KRW']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Peso Argentino <:rightarrow:921907270747570247> Won Surcoreano")
    .setColor("#FFFFFF")
    .setDescription("Pesos argentinos expresado en won surcoreano al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/928356536735117312/wonapeso.png")
    .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_kr: ", 'KRW ₩ ' + currencyFormatter.format(((conv5 * won)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_kr: ", 'KRW ₩ ' + currencyFormatter.format(((conv5 * won) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_kr: ", 'KRW ₩ ' + currencyFormatter.format((((conv5 * won) / EUR.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}


if(command.toLowerCase() == "pesoafranco" || command.toLowerCase() == "pesoafrancosuizo"  || command.toLowerCase() == "pesoafrancosuizo" || command.toLowerCase()== "pesoachf"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv5 = parseFloat(conv)
  var yen1 = 0
  axios.get('https://api.exchangerate.host/latest')
  .then((suizo)=> {

   franco=suizo.data['rates']['CHF']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Peso Argentino <:rightarrow:921907270747570247> Franco Suizo")
    .setColor("#d80027")
    .setDescription("Pesos argentinos expresado en francos suizos al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/930966649710985286/francoapeso.png")
    .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_ch: ", 'CHF Fr. ' + currencyFormatter.format(((conv5 * franco)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_ch: ", 'CHF Fr. ' + currencyFormatter.format(((conv5 * franco) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_ch: ", 'CHF Fr. ' + currencyFormatter.format((((conv5 * franco) / EUR.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}

//Lira turca

if(command.toLowerCase() == "pesoalira" || command.toLowerCase() == "pesoaliraturca"  || command.toLowerCase() == "pesoaturca" || command.toLowerCase()== "pesoa"){
  let conv = args[0];
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
    .setTitle("¡FALTA INGRESAR UN VALOR NÚMERICO!")
    .setColor("#ff563e")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/929070602768244786/cancel_1.png")
    return message.reply({ embeds: [embed] });
  }
  conv = conv.replace(',','.')
  var conv5 = parseFloat(conv)
  var yen1 = 0
  axios.get('https://api.exchangerate.host/latest')
  .then((turca)=> {

   lira=turca.data['rates']['TRY']
    axios.get('https://api-dolar-argentina.herokuapp.com/api/euro/nacion')
    .then((EUR)=> {
    const embed = new Discord.MessageEmbed()
    .setTitle("Peso Argentino <:rightarrow:921907270747570247> Lira Turca")
    .setColor("#d70224")
    .setDescription("Pesos argentinos expresado en liras turcas al precio oficial del Banco Nación + impuestos (PAIS (30%) y adelanto de ganancias (35%)) ")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/930966650122014740/liraapeso.png")
    .addField("Monto original :flag_ar: ", 'ARS$ ' + currencyFormatter.format(conv5, { locale: 'es-ES', code: ' ' }))
    .addField("Compra :flag_tr: ", 'TRY₺ ' + currencyFormatter.format(((conv5 * lira)) / EUR.data['compra'], { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Venta :flag_tr: ", 'TRY₺ ' + currencyFormatter.format(((conv5 * lira) / EUR.data['venta']), { locale: 'es-ES', code: ' ' }) ,true)
    .addField("Impuestos (65%) :flag_tr: ", 'TRY₺ ' + currencyFormatter.format((((conv5 * lira) / EUR.data['venta']) / 1.65), { locale: 'es-ES', code: ' ' }) ,true)
    .setFooter("Consulta realizada por: " + message.member.displayName, message.author.displayAvatarURL())
    return message.reply({ embeds: [embed] });
   
   })
    .catch((err) => {
    console.error('ERR', err)
   
         
   })
  })
  .catch((err) => {
  console.error('ERR', err)
 
       
 })
 

}


//Servicios
//NETFLIX
if(command.toLowerCase() === 'netflix'){
  const slash = new Discord.MessageEmbed()
  .setTitle("Prueba con `/servicio netflix` en su lugar")
  .setColor("#d6f2fc")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964400952452980736/slash.png")
  .addField("Slash  commands", "Debido a la  decisión de Discord de volver los Message Intents algo privilegiado, los comandos regulares serán remplazados por los Slash Commands desde el  1ro de septiembre, echale un vistazo con / y revisa los comandos" )  
  .addField(" Advertencia " , " Argenkit Bot irá eliminando los comandos clásicos progresivamente con el pasar de los meses para que sus usuarios vayan acostumbrandose al uso de los slash ")
  .addField(" Importante " , "Quizás sea necesario echar y volver a invitar al bot para que funcione si  es que invitaste al bot hace mucho tiempo ")
  .addField(" Comandos solo disponible con slash" ,   comandosslash)
    return message.reply({ embeds: [slash] });

  
 }

//YOUTUBE PREMIUM
if(command.toLowerCase() === 'youtube' || command.toLowerCase() === 'yt'){
  const slash = new Discord.MessageEmbed()
  .setTitle("Prueba con `/servicio youtubepremium` en su lugar")
  .setColor("#d6f2fc")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964400952452980736/slash.png")
  .addField("Slash  commands", "Debido a la  decisión de Discord de volver los Message Intents algo privilegiado, los comandos regulares serán remplazados por los Slash Commands desde el  1ro de septiembre, echale un vistazo con / y revisa los comandos" )  
  .addField(" Advertencia " , " Argenkit Bot irá eliminando los comandos clásicos progresivamente con el pasar de los meses para que sus usuarios vayan acostumbrandose al uso de los slash ")
  .addField(" Importante " , "Quizás sea necesario echar y volver a invitar al bot para que funcione si  es que invitaste al bot hace mucho tiempo ")
  .addField(" Comandos solo disponible con slash" ,   comandosslash)
    return message.reply({ embeds: [slash] });

  
 }
//SPOTIFY
if(command.toLowerCase() === 'spotify'){
  const slash = new Discord.MessageEmbed()
  .setTitle("Prueba con `/servicio spotify` en su lugar")
  .setColor("#d6f2fc")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964400952452980736/slash.png")
  .addField("Slash  commands", "Debido a la  decisión de Discord de volver los Message Intents algo privilegiado, los comandos regulares serán remplazados por los Slash Commands desde el  1ro de septiembre, echale un vistazo con / y revisa los comandos" )  
  .addField(" Advertencia " , " Argenkit Bot irá eliminando los comandos clásicos progresivamente con el pasar de los meses para que sus usuarios vayan acostumbrandose al uso de los slash ")
  .addField(" Importante " , "Quizás sea necesario echar y volver a invitar al bot para que funcione si  es que invitaste al bot hace mucho tiempo ")
  .addField(" Comandos solo disponible con slash" ,   comandosslash)
  return message.reply({ embeds: [slash] });

  
 }


 //CRUNCHYROLL 

 if(command.toLowerCase() === 'crunchyroll'){
  const slash = new Discord.MessageEmbed()
  .setTitle("Prueba con `/servicio crunchyroll` en su lugar")
  .setColor("#d6f2fc")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964400952452980736/slash.png")
  .addField("Slash  commands", "Debido a la  decisión de Discord de volver los Message Intents algo privilegiado, los comandos regulares serán remplazados por los Slash Commands desde el  1ro de septiembre, echale un vistazo con / y revisa los comandos" )  
  .addField(" Advertencia " , " Argenkit Bot irá eliminando los comandos clásicos progresivamente con el pasar de los meses para que sus usuarios vayan acostumbrandose al uso de los slash ")
  .addField(" Importante " , "Quizás sea necesario echar y volver a invitar al bot para que funcione si  es que invitaste al bot hace mucho tiempo ")
  .addField(" Comandos solo disponible con slash" ,   comandosslash)
    return message.reply({ embeds: [slash] });

  
 }
 //DISNEY 
 if(command.toLowerCase() === 'disney+' || command.toLowerCase() === 'disney' ){
  const slash = new Discord.MessageEmbed()
  .setTitle("Prueba con `/servicio disney+` en su lugar")
  .setColor("#d6f2fc")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964400952452980736/slash.png")
  .addField("Slash  commands", "Debido a la  decisión de Discord de volver los Message Intents algo privilegiado, los comandos regulares serán remplazados por los Slash Commands desde el  1ro de septiembre, echale un vistazo con / y revisa los comandos" )  
  .addField(" Advertencia " , " Argenkit Bot irá eliminando los comandos clásicos progresivamente con el pasar de los meses para que sus usuarios vayan acostumbrandose al uso de los slash ")
  .addField(" Importante " , "Quizás sea necesario echar y volver a invitar al bot para que funcione si  es que invitaste al bot hace mucho tiempo ")
  .addField(" Comandos solo disponible con slash" ,  comandosslash)
  return message.reply({ embeds: [slash] });

  
 }

 //Gamepass
 if(command.toLowerCase() === 'gamepass' || command.toLowerCase() === 'xboxgamepass'  || command.toLowerCase() === 'xbox'){
  const slash = new Discord.MessageEmbed()
  .setTitle("Prueba con `/servicio gamepass` en su lugar")
  .setColor("#d6f2fc")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964400952452980736/slash.png")
  .addField("Slash  commands", "Debido a la  decisión de Discord de volver los Message Intents algo privilegiado, los comandos regulares serán remplazados por los Slash Commands desde el  1ro de septiembre, echale un vistazo con / y revisa los comandos" )  
  .addField(" Advertencia " , " Argenkit Bot irá eliminando los comandos clásicos progresivamente con el pasar de los meses para que sus usuarios vayan acostumbrandose al uso de los slash ")
  .addField(" Importante " , "Quizás sea necesario echar y volver a invitar al bot para que funcione si  es que invitaste al bot hace mucho tiempo ")
  .addField(" Comandos solo disponible con slash" ,   comandosslash)
  return message.reply({ embeds: [slash] });

  
 }

 //EA Play
 if(command.toLowerCase() === 'ea' || command.toLowerCase() === 'eaplay') {
  const slash = new Discord.MessageEmbed()
  .setTitle("Prueba con `/servicio ea` en su lugar")
  .setColor("#d6f2fc")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964400952452980736/slash.png")
  .addField("Slash  commands", "Debido a la  decisión de Discord de volver los Message Intents algo privilegiado, los comandos regulares serán remplazados por los Slash Commands desde el  1ro de septiembre, echale un vistazo con / y revisa los comandos" )  
  .addField(" Advertencia " , " Argenkit Bot irá eliminando los comandos clásicos progresivamente con el pasar de los meses para que sus usuarios vayan acostumbrandose al uso de los slash ")
  .addField(" Importante " , "Quizás sea necesario echar y volver a invitar al bot para que funcione si  es que invitaste al bot hace mucho tiempo ")
  .addField(" Comandos solo disponible con slash" ,   comandosslash)
  return message.reply({ embeds: [slash] });

  
 }

 //Prime video

if(command.toLowerCase() === 'prime' || command.toLowerCase() === 'primevideo' || command.toLowerCase() === 'amazonprimevideo'){
  const slash = new Discord.MessageEmbed()
  .setTitle("Prueba con `/servicio primevideo` en su lugar")
  .setColor("#d6f2fc")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964400952452980736/slash.png")
  .addField("Slash  commands", "Debido a la  decisión de Discord de volver los Message Intents algo privilegiado, los comandos regulares serán remplazados por los Slash Commands desde el  1ro de septiembre, echale un vistazo con / y revisa los comandos" )  
  .addField(" Advertencia " , " Argenkit Bot irá eliminando los comandos clásicos progresivamente con el pasar de los meses para que sus usuarios vayan acostumbrandose al uso de los slash ")
  .addField(" Importante " , "Quizás sea necesario echar y volver a invitar al bot para que funcione si  es que invitaste al bot hace mucho tiempo ")
  .addField(" Comandos solo disponible con slash" ,   comandosslash)
  return message.reply({ embeds: [slash] });

  
 } 
//HBO
if(command.toLowerCase() === 'hbo' || command.toLowerCase() === 'hbomax'){

  const slash = new Discord.MessageEmbed()
  .setTitle("Prueba con `/servicio hbomax` en su lugar")
  .setColor("#d6f2fc")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964400952452980736/slash.png")
  .addField("Slash  commands", "Debido a la  decisión de Discord de volver los Message Intents algo privilegiado, los comandos regulares serán remplazados por los Slash Commands desde el  1ro de septiembre, echale un vistazo con / y revisa los comandos" )  
  .addField(" Advertencia " , " Argenkit Bot irá eliminando los comandos clásicos progresivamente con el pasar de los meses para que sus usuarios vayan acostumbrandose al uso de los slash ")
  .addField(" Importante " , "Quizás sea necesario echar y volver a invitar al bot para que funcione si  es que invitaste al bot hace mucho tiempo ")
  .addField(" Comandos solo disponible con slash" ,  comandosslash)
  return message.reply({ embeds: [slash] });

  
 }

 //Apple TV
 if(command.toLowerCase() === 'appletv' || command.toLowerCase() === 'apple'){
  const slash = new Discord.MessageEmbed()
  .setTitle("Prueba con `/servicio appletv` en su lugar")
  .setColor("#d6f2fc")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964400952452980736/slash.png")
  .addField("Slash  commands", "Debido a la  decisión de Discord de volver los Message Intents algo privilegiado, los comandos regulares serán remplazados por los Slash Commands desde el  1ro de septiembre, echale un vistazo con / y revisa los comandos" )  
  .addField(" Advertencia " , " Argenkit Bot irá eliminando los comandos clásicos progresivamente con el pasar de los meses para que sus usuarios vayan acostumbrandose al uso de los slash ")
  .addField(" Importante " , "Quizás sea necesario echar y volver a invitar al bot para que funcione si  es que invitaste al bot hace mucho tiempo ")
  .addField(" Comandos solo disponible con slash" ,   comandosslash)
  return message.reply({ embeds: [slash] });

  
 }

//Discord Nitro

if(command.toLowerCase() === 'nitro' || command.toLowerCase() === 'discordnitro' || command.toLowerCase() === 'nitro' ){
  const slash = new Discord.MessageEmbed()
  .setTitle("Prueba con `/servicio discordnitro` en su lugar")
  .setColor("#d6f2fc")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964400952452980736/slash.png")
  .addField("Slash  commands", "Debido a la  decisión de Discord de volver los Message Intents algo privilegiado, los comandos regulares serán remplazados por los Slash Commands desde el  1ro de septiembre, echale un vistazo con / y revisa los comandos" )  
  .addField(" Advertencia " , " Argenkit Bot irá eliminando los comandos clásicos progresivamente con el pasar de los meses para que sus usuarios vayan acostumbrandose al uso de los slash ")
  .addField(" Importante " , "Quizás sea necesario echar y volver a invitar al bot para que funcione si  es que invitaste al bot hace mucho tiempo ")
  .addField(" Comandos solo disponible con slash" ,  comandosslash) 
  return message.reply({ embeds: [slash] });

  
}


//Google One

if(command.toLowerCase() === 'google' || command.toLowerCase() === 'googleone'){
  const slash = new Discord.MessageEmbed()
  .setTitle("Prueba con `/servicio googleone` en su lugar")
  .setColor("#d6f2fc")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964400952452980736/slash.png")
  .addField("Slash  commands", "Debido a la  decisión de Discord de volver los Message Intents algo privilegiado, los comandos regulares serán remplazados por los Slash Commands desde el  1ro de septiembre, echale un vistazo con / y revisa los comandos" )  
  .addField(" Advertencia " , " Argenkit Bot irá eliminando los comandos clásicos progresivamente con el pasar de los meses para que sus usuarios vayan acostumbrandose al uso de los slash ")
  .addField(" Importante " , "Quizás sea necesario echar y volver a invitar al bot para que funcione si  es que invitaste al bot hace mucho tiempo ")
  .addField(" Comandos solo disponible con slash" ,   comandosslash)
  return message.reply({ embeds: [slash] });

  
 }
//Steam

if(command.toLowerCase() === 'steam' || command.toLowerCase() === 'steamwallet' || command.toLowerCase() === 'steamfondos'){

  const slash = new Discord.MessageEmbed()
  .setTitle("Prueba con `/servicio steam` en su lugar")
  .setColor("#d6f2fc")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964400952452980736/slash.png")
  .addField("Slash  commands", "Debido a la  decisión de Discord de volver los Message Intents algo privilegiado, los comandos regulares serán remplazados por los Slash Commands desde el  1ro de septiembre, echale un vistazo con / y revisa los comandos" )  
  .addField(" Advertencia " , " Argenkit Bot irá eliminando los comandos clásicos progresivamente con el pasar de los meses para que sus usuarios vayan acostumbrandose al uso de los slash ")
  .addField(" Importante " , "Quizás sea necesario echar y volver a invitar al bot para que funcione si  es que invitaste al bot hace mucho tiempo ")
  .addField(" Comandos solo disponible con slash" ,  comandosslash)
    return message.reply({ embeds: [slash] });

  
 
 }


 //Paramount+

 if(command.toLowerCase() === 'paramount+' || command.toLowerCase() === 'paramount'){


  const slash = new Discord.MessageEmbed()
  .setTitle("Prueba con `/servicio paramount` en su lugar")
  .setColor("#d6f2fc")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964400952452980736/slash.png")
  .addField("Slash  commands", "Debido a la  decisión de Discord de volver los Message Intents algo privilegiado, los comandos regulares serán remplazados por los Slash Commands desde el  1ro de septiembre, echale un vistazo con / y revisa los comandos" )  
  .addField(" Advertencia " , " Argenkit Bot irá eliminando los comandos clásicos progresivamente con el pasar de los meses para que sus usuarios vayan acostumbrandose al uso de los slash ")
  .addField(" Importante " , "Quizás sea necesario echar y volver a invitar al bot para que funcione si  es que invitaste al bot hace mucho tiempo ")
  .addField(" Comandos solo disponible con slash" ,  comandosslash)
    return message.reply({ embeds: [slash] });

  
 }

 //Twitch


 if(command.toLowerCase() === 'twitch' || command.toLowerCase() === 'twitchsubs' || command.toLowerCase() === 'twitchbits' ){
  const slash = new Discord.MessageEmbed()
  .setTitle("Prueba con `/servicio twitch` en su lugar")
  .setColor("#d6f2fc")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964400952452980736/slash.png")
  .addField("Slash  commands", "Debido a la  decisión de Discord de volver los Message Intents algo privilegiado, los comandos regulares serán remplazados por los Slash Commands desde el  1ro de septiembre, echale un vistazo con / y revisa los comandos" )  
  .addField(" Advertencia " , " Argenkit Bot irá eliminando los comandos clásicos progresivamente con el pasar de los meses para que sus usuarios vayan acostumbrandose al uso de los slash ")
  .addField(" Importante " , "Quizás sea necesario echar y volver a invitar al bot para que funcione si  es que invitaste al bot hace mucho tiempo ")
  .addField(" Comandos solo disponible con slash" ,  comandosslash)
  return message.reply({ embeds: [slash] });

  
 }


//Provincias
//ERROR
if(command.toLowerCase() === 'provincia'){
  
    const slash = new Discord.MessageEmbed()
    .setTitle("Prueba con `/provinciainfo [provincia]` en su lugar")
    .setColor("#d6f2fc")
    .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964400952452980736/slash.png")
    .addField("Slash  commands", "Debido a la  decisión de Discord de volver los Message Intents algo privilegiado, los comandos regulares serán remplazados por los Slash Commands desde el  1ro de septiembre, echale un vistazo con / y revisa los comandos" )  
    .addField(" Advertencia " , " Argenkit Bot irá eliminando los comandos clásicos progresivamente con el pasar de los meses para que sus usuarios vayan acostumbrandose al uso de los slash ")
    .addField(" Importante " , "Quizás sea necesario echar y volver a invitar al bot para que funcione si  es que invitaste al bot hace mucho tiempo ")
    .addField(" Comandos solo disponible con slash" ,  comandosslash)
      return message.reply({ embeds: [slash] });
  

}


if(message.content[0] ===  "*" && message.content[1] ===  "a" && message.content[2] ===  "r" && command.toLowerCase() != 'help'){

  const slash = new Discord.MessageEmbed()
  .setTitle("¡Utiliza los nuevos Slash Commands en su lugar!")
  .setColor("#d6f2fc")
  .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/964400952452980736/slash.png")
  .addField("Slash  commands", "Debido a la  decisión de Discord de volver los Message Intents algo privilegiado, los comandos regulares serán remplazados por los Slash Commands desde el  1ro de septiembre, echale un vistazo con / y revisa los comandos" )  
  .addField(" Advertencia " , " Argenkit Bot irá eliminando los comandos clásicos progresivamente con el pasar de los meses para que sus usuarios vayan acostumbrandose al uso de los slash ")
  .addField(" Importante " , "Quizás sea necesario echar y volver a invitar al bot para que funcione si  es que invitaste al bot hace mucho tiempo ")
  .addField(" Comandos solo disponible con slash" ,  comandosslash)
  return message.reply({ embeds: [slash] });

 }

   
 });
 


//Token

 //client.login("");   Aquí va el Token