type Dado = {
    number: Number,
    img: string,
    emoji: string,
}


const opcionesDado: Dado[] = [
    { number: 1, img: 'https://cdn.discordapp.com/attachments/802944543510495292/1177073368957202522/dice_1.png?ex=65712e00&is=655eb900&hm=fc4fa9aa81a6335de954254b82825dcad13fe7ae8a43ebf322dd39be3c8dbfc0&', emoji: "one" }, //0
    { number: 2, img: 'https://cdn.discordapp.com/attachments/802944543510495292/1177073368709746699/dice_2.png?ex=65712e00&is=655eb900&hm=9cf3b9a6d1887a23cd86f66795f7752009168a200c122b010fdbf11db4efc135&', emoji: "two" }, //1
    { number: 3, img: 'https://cdn.discordapp.com/attachments/802944543510495292/1177073368453877790/dice_3.png?ex=65712e00&is=655eb900&hm=d66559a5c676514d323382683498f3e266fde1ab571a20346c8ce646cffe1974&', emoji: "three" }, //2
    { number: 4, img: 'https://cdn.discordapp.com/attachments/802944543510495292/1177073368256753694/dice_4.png?ex=65712dff&is=655eb8ff&hm=d1fb95f8b52fc95086283bbb9b5ba23530f34ab3226b4cd73e8c775877b80171&', emoji: "four" }, //3
    { number: 5, img: 'https://cdn.discordapp.com/attachments/802944543510495292/1177073368034463816/dice_5.png?ex=65712dff&is=655eb8ff&hm=9e061edc190072b116f4f839318a40d8332c87827b3656268b7aafd303fd1c15&', emoji: "five" }, //4
    { number: 6, img: 'https://cdn.discordapp.com/attachments/802944543510495292/1177073367753429063/dice_6.png?ex=65712dff&is=655eb8ff&hm=96060661ad2289289c503bebc4fa7ddb49e352002244da745ff014ed42c43abe&', emoji: "six" } //5
]

export default opcionesDado