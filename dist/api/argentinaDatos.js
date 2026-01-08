"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRiesgoPaisData = void 0;
const axios_1 = require("./axios");
const getRiesgoPaisData = async () => {
    try {
        const response = await axios_1.apiargenttinadatosClient.get('/finanzas/indices/riesgo-pais/');
        const responseImproved = {
            ultimoDato: response.data[response.data.length - 1]['valor'],
            datoAnterior: response.data[response.data.length - 2]['valor'],
            porcentajeCambio: (((response.data[response.data.length - 1]['valor'] - response.data[response.data.length - 2]['valor']) / response.data[response.data.length - 2]['valor']) * 100).toFixed(2),
            isCambioRiesgo: response.data[response.data.length - 1]['valor'] > response.data[response.data.length - 2]['valor'] ? "🔺" : response.data[response.data.length - 1]['valor'] == response.data[response.data.length - 2]['valor'] ? "⏸️" : "<:flechashaciaabajo:1210747546096369664>"
        };
        return responseImproved;
    }
    catch (error) {
        throw new Error("Error al obtener los datos del Riesgo País");
    }
};
exports.getRiesgoPaisData = getRiesgoPaisData;
