"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrecioAccion = exports.getEstadoMercado = void 0;
const axios_1 = require("./axios");
const getEstadoMercado = async () => {
    try {
        const response = await axios_1.finnhubClient.get('/stock/market-status?exchange=US');
        return response.data;
    }
    catch (error) {
        console.error('Error fetching market status:', error);
        throw error;
    }
};
exports.getEstadoMercado = getEstadoMercado;
const getPrecioAccion = async (symbol) => {
    try {
        const response = await axios_1.finnhubClient.get(`/quote?symbol=${symbol}`);
        const improvedResponse = {
            currentPrice: response.data.c,
            change: response.data.d,
            percentChange: response.data.dp,
            highPriceOfDay: response.data.h,
            lowPriceOfDay: response.data.l,
            openPriceOfDay: response.data.o,
            previousClosePrice: response.data.pc,
        };
        return improvedResponse;
    }
    catch (error) {
        console.error('Error fetching stock price:', error);
        throw error;
    }
};
exports.getPrecioAccion = getPrecioAccion;
