"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emojiSegunMain = exports.thumbnailSegunMain = void 0;
const thumbnailSegunMain = (main) => {
    switch (main) {
        case 'Thunderstorm':
            return 'https://cdn.discordapp.com/attachments/802944543510495292/1182547250342281279/rain.png?ex=658517f3&is=6572a2f3&hm=7c37ce52ef23b3069a8f97e6d7aa055ce6637e64af963db0acef4cb96b4d9939&';
        case 'Drizzle':
            return 'https://cdn.discordapp.com/attachments/802944543510495292/1182547248970743849/water.png?ex=658517f2&is=6572a2f2&hm=5cfdddfdd7f7e7910a254e43da8081ac04434ff051208d0858c7117856ed35c2&';
        case 'Rain':
            return 'https://cdn.discordapp.com/attachments/802944543510495292/1182547249218191410/raining.png?ex=658517f2&is=6572a2f2&hm=abfc21064013402cf2b9de9c4511794b8c2e4e9d4e1484ef62de47cfca8f20f7&';
        case 'Snow':
            return 'https://cdn.discordapp.com/attachments/802944543510495292/1182547249469866125/snow.png?ex=658517f2&is=6572a2f2&hm=e52610ed4b08ed0717171284cc4d3c9c4700988d233edc5df931136870ed47f7&';
        case 'Atmosphere':
            return 'https://cdn.discordapp.com/attachments/802944543510495292/1182774555345952808/mist.png?ex=6585eba4&is=657376a4&hm=bd960c892506d0a20430740972d7de323fa56bef762ec8ecf161e83188d6bee5&';
        case 'Clear':
            return 'https://cdn.discordapp.com/attachments/802944543510495292/1182547249750868038/sun.png?ex=658517f3&is=6572a2f3&hm=d2fdf10429242b726333e07674dba8e070fcb7a990fd26cc2844012470a39154&';
        case 'Clouds':
            return 'https://cdn.discordapp.com/attachments/802944543510495292/1182547250061254716/cloud.png?ex=658517f3&is=6572a2f3&hm=8013842c63f6612592b7cca91b65255dc62f83a1f537c9fe55126d6af449f545&';
        default:
            return 'https://cdn.discordapp.com/attachments/802944543510495292/1182547249750868038/sun.png?ex=658517f3&is=6572a2f3&hm=d2fdf10429242b726333e07674dba8e070fcb7a990fd26cc2844012470a39154&';
    }
};
exports.thumbnailSegunMain = thumbnailSegunMain;
const emojiSegunMain = (main) => {
    switch (main) {
        case 'Thunderstorm':
            return ':thunder_cloud_rain:';
        case 'Drizzle':
            return ':cloud_rain:';
        case 'Rain':
            return ':cloud_rain:';
        case 'Snow':
            return ':cloud_snow:';
        case 'Atmosphere':
            return ':fog:';
        case 'Clear':
            return ':sunny:';
        case 'Clouds':
            return ':cloud:';
        default:
            return ':sunny:';
    }
};
exports.emojiSegunMain = emojiSegunMain;
