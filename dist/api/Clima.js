"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeatherAllCapitals = exports.getWeatherByCity = void 0;
const axios_1 = require("./axios");
const capitales_valores_1 = __importDefault(require("../variables/capitales-valores"));
// GET: /weather por ciudad
const getWeatherByCity = async (city) => {
    try {
        const response = await axios_1.openweathermapClient.get('/weather', {
            params: {
                q: city,
                units: 'metric',
                lang: 'es'
            }
        });
        return response.data;
    }
    catch (error) {
        throw error;
    }
};
exports.getWeatherByCity = getWeatherByCity;
// GET: /weather para todas las capitales de Argentina
const getWeatherAllCapitals = async () => {
    try {
        const apiRequests = capitales_valores_1.default.map(capital => axios_1.openweathermapClient.get(`/weather`, {
            params: {
                units: 'metric',
                lang: 'es',
                lat: capital.latitud,
                lon: capital.longitud
            }
        }));
        const responses = await Promise.all(apiRequests);
        return capitales_valores_1.default.map((capital, index) => {
            const data = responses[index].data;
            return {
                ...capital,
                temperatura: data.main.temp,
                sensacion: data.main.feels_like,
                main: data.weather[0].main,
                estado: data.weather[0].description
            };
        });
    }
    catch (error) {
        console.error("Error al obtener climas:", error);
        throw error;
    }
};
exports.getWeatherAllCapitals = getWeatherAllCapitals;
