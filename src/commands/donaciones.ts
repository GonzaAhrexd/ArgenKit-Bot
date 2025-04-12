
import Discord from "discord.js"

module.exports = {
    data: new Discord.SlashCommandBuilder()
    .setName("donaciones")
    .setDescription("Muestra formas de apoyar al creador mediante donaciones."),

    async run(client, interaction){
        const embed:Discord.EmbedBuilder = new Discord.EmbedBuilder()
        .setTitle("DONACIONES")
        .setColor('Gold')
        .setDescription("¡Si decidiste donarme te lo agradezco infinitamente!")
        .setThumbnail("https://cdn.discordapp.com/attachments/802944543510495292/1177084481941819463/donation.png?ex=65713859&is=655ec359&hm=3b3b29bd93898b5b38e44b00909be4bdfa5bfb46ce59248f75b50ea7e78d833b&")
        .addFields(
            { name: "PAYPAL ", value: "http://paypal.me/GonzaAhre"},
            { name: "LEMONCASH ", value: " LemonTag: $gonzaahre \n  CVU: 0000168300000008383352 \n Alias: gonzaahre.LEMON"}, 
            { name: "Uala (Dólares)", value: "CBU (Dólares): 3840200500000016716081 \n Alias: RUINA.COLUMBRA.BALDE"} )
        await interaction.reply({ embeds: [embed]})
    }

}


