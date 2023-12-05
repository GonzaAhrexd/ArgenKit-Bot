
import Discord from "discord.js"

module.exports = {
    data: new Discord.SlashCommandBuilder()
    .setName('calcular')
    .setDescription('Realiza una operación matemática')
    .addSubcommand(subcommand =>
        subcommand.setName('simple')
            .setDescription('Realiza una operación matemática escribiendo el cálculo a realizar como texto')
            .addStringOption(option =>
                option.setName('operacion')
                    .setDescription('Calculo a realizar').setRequired(true)
            ))
    .addSubcommand(subcommand =>
        subcommand.setName('raiz')
            .setDescription('Realiza la raíz N-esima de un número')
            .addNumberOption(option =>
                option.setName('indice')
                    .setDescription('Indice de la raíz').setRequired(true)
            )
            .addNumberOption(option =>
                option.setName('radicando')
                    .setDescription('Radicando de la raíz').setRequired(true)
            ))
    .addSubcommand(subcommand =>
        subcommand.setName('potencia')
            .setDescription('Realiza la potencia N-esima de un número')
            .addNumberOption(option =>
                option.setName('base')
                    .setDescription('Base de la potencia').setRequired(true)
            )
            .addNumberOption(option =>
                option.setName('exponente')
                    .setDescription('Exponente de la potencia').setRequired(true)
            ))
    .addSubcommand(subcommand =>
        subcommand.setName('logaritmo')
            .setDescription('Realiza el logaritmo de un número')
            .addNumberOption(option =>
                option.setName('base')
                    .setDescription('Base del logaritmo').setRequired(true)
            )
            .addNumberOption(option =>
                option.setName('numero')
                    .setDescription('Número del logaritmo').setRequired(true)
            ))
    .addSubcommand(subcommand =>
        subcommand.setName('convertirbase')
            .setDescription('Convierte un número de una base a otra')
            .addNumberOption(option =>
                option.setName('numero')
                    .setDescription('Número a convertir').setRequired(true)
            )
            .addNumberOption(option =>
                option.setName('basedelnumero')
                    .setDescription('Base del número a convertir').setRequired(true)
            )
            .addNumberOption(option =>
                option.setName('baseaconvertir')
                    .setDescription('Base a la que se quiere convertir').setRequired(true)
            ))
    ,
    async run(client, interaction, options){
        if(interaction.options.getSubcommand() === 'simple'){
        let calcular:string = interaction.options.getString('operacion')
        const embed:Discord.EmbedBuilder = new Discord.EmbedBuilder()
        .setTitle("Calcular operación")
        .setColor("#18f7ce")
        .setThumbnail('https://cdn.discordapp.com/attachments/802944543510495292/1071230926358581308/calculator.png')
        .addFields(
            { name: 'Operación', value: calcular },
            { name: 'Resultado', value: (eval(calcular)).toString()})
            return await interaction.reply({ embeds: [embed] });
    }

    if(interaction.options.getSubcommand() === 'raiz'){
        let indice:number = interaction.options.getNumber('indice')
        let radicando:number = interaction.options.getNumber('radicando')
        let resultado:number = Math.pow(radicando, 1/indice)

        const embed:Discord.EmbedBuilder = new Discord.EmbedBuilder()
        .setTitle("Calcular raíz")
        .setColor("#18f7ce")
        .setThumbnail('https://cdn.discordapp.com/attachments/802944543510495292/1071230926358581308/calculator.png')
        .addFields(
            { name: 'Raíz', value: `${indice}√${radicando}` },
            { name: 'Resultado', value: resultado.toString()})
            return await interaction.reply({ embeds: [embed] });
    }
    if(interaction.options.getSubcommand() === 'potencia'){
        let base:number = interaction.options.getNumber('base')
        let exponente:number = interaction.options.getNumber('exponente')
        let resultado:number = Math.pow(base, exponente)

        const embed:Discord.EmbedBuilder = new Discord.EmbedBuilder()
        .setTitle("Calcular potencia")
        .setColor("#18f7ce")
        .setThumbnail('https://cdn.discordapp.com/attachments/802944543510495292/1071230926358581308/calculator.png')
        .addFields(
            { name: 'Potencia', value: `${base}^${exponente}` },
            { name: 'Resultado', value: resultado.toString()})
            return await interaction.reply({ embeds: [embed] });
    }
    if(interaction.options.getSubcommand() === 'logaritmo'){
        let base:number = interaction.options.getNumber('base')
        let numero:number = interaction.options.getNumber('numero')
        let resultado:number = Math.log(numero)/Math.log(base)

        const embed:Discord.EmbedBuilder = new Discord.EmbedBuilder()
        .setTitle("Calcular logaritmo")
        .setColor("#18f7ce")
        .setThumbnail('https://cdn.discordapp.com/attachments/802944543510495292/1071230926358581308/calculator.png')
        .addFields(
            { name: 'Logaritmo', value: `log${base}(${numero})` },
            { name: 'Resultado', value: resultado.toString()})
            return await interaction.reply({ embeds: [embed] });
    }
    if(interaction.options.getSubcommand() === 'convertirbase'){
        let numero:number = interaction.options.getNumber('numero')
        let basedelnumero:number = interaction.options.getNumber('basedelnumero')
        let baseaconvertir:number = interaction.options.getNumber('baseaconvertir')
        let resultado:String = parseInt(numero.toString(), basedelnumero).toString(baseaconvertir)

        const embed:Discord.EmbedBuilder = new Discord.EmbedBuilder()
        .setTitle("Convertir base")
        .setColor("#18f7ce")
        .setThumbnail('https://cdn.discordapp.com/attachments/802944543510495292/1071230926358581308/calculator.png')
        .addFields(
            { name: 'Número', value: `${numero} base ${basedelnumero}` },
            { name: 'Resultado', value: resultado.toString()})
            return await interaction.reply({ embeds: [embed] });
    }

}

}