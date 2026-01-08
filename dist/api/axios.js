"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiBCRAClient = exports.apiargenttinadatosClient = exports.openweathermapClient = exports.finnhubClient = exports.dolarApiClient = exports.criptoYaClient = exports.coingeckoClient = exports.jsdelivrClient = exports.bluelyticsClient = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
const https_1 = __importDefault(require("https"));
dotenv_1.default.config();
const API_TOKEN_FINNHUB = process.env.apiKeyFinnhub || '';
const API_KEY_OPENWEATHER = process.env.apiKeyOpenWeather || '';
exports.bluelyticsClient = axios_1.default.create({
    baseURL: 'https://api.bluelytics.com.ar/v2',
});
exports.jsdelivrClient = axios_1.default.create({
    baseURL: 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies',
});
exports.coingeckoClient = axios_1.default.create({
    baseURL: 'https://api.coingecko.com/api/v3/coins',
});
exports.criptoYaClient = axios_1.default.create({
    baseURL: 'https://criptoya.com/api',
});
exports.dolarApiClient = axios_1.default.create({
    baseURL: 'https://dolarapi.com/v1',
});
exports.finnhubClient = axios_1.default.create({
    baseURL: 'https://finnhub.io/api/v1',
    params: {
        token: API_TOKEN_FINNHUB
    }
});
exports.openweathermapClient = axios_1.default.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    params: {
        appid: API_KEY_OPENWEATHER
    }
});
exports.apiargenttinadatosClient = axios_1.default.create({
    baseURL: 'https://api.argentinadatos.com/v1',
});
const agent = new https_1.default.Agent({
    rejectUnauthorized: false
});
exports.apiBCRAClient = axios_1.default.create({
    baseURL: 'https://api.bcra.gob.ar/estadisticas/v4.0',
    httpsAgent: agent
});
