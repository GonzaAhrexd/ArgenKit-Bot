"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCriptoData = exports.getCriptoDataCriptoYa = exports.getCriptoDataCoingecko = void 0;
const axios_1 = require("./axios");
const getCriptoDataCoingecko = async (criptoId) => {
    try {
        const response = await axios_1.coingeckoClient.get(`/${criptoId}/market_chart?vs_currency=usd&days=0`);
        const cleanResponse = {
            prices: response.data.prices[0][1],
            market_caps: response.data.market_caps[0][1],
            total_volumes: response.data.total_volumes[0][1]
        };
        return cleanResponse;
    }
    catch (error) {
        throw new Error(`Error al obtener datos de Coingecko para ${criptoId}: ${error}`);
    }
};
exports.getCriptoDataCoingecko = getCriptoDataCoingecko;
const getCriptoDataCriptoYa = async (criptoSymbol) => {
    try {
        const response = await axios_1.criptoYaClient.get(`${criptoSymbol}`);
        return response.data;
    }
    catch (error) {
        throw new Error(`Error al obtener datos de CriptoYa para ${criptoSymbol}: ${error}`);
    }
};
exports.getCriptoDataCriptoYa = getCriptoDataCriptoYa;
const getAllCriptoData = async (criptoId, criptoSymbol) => {
    try {
        const [dataCoingecko, dataCriptoYa] = await Promise.all([
            (0, exports.getCriptoDataCoingecko)(criptoId),
            (0, exports.getCriptoDataCriptoYa)(criptoSymbol)
        ]);
        return { dataCoingecko: dataCoingecko, dataCriptoYa: dataCriptoYa };
    }
    catch (error) {
        throw new Error(`Error al obtener datos para ${criptoId} y ${criptoSymbol}: ${error}`);
    }
};
exports.getAllCriptoData = getAllCriptoData;
