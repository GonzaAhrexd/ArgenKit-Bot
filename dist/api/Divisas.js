"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = exports.getDolarMep = exports.getDivisas = exports.getDolar = void 0;
const axios_1 = require("./axios");
const getDolar = async () => {
    try {
        const response = await axios_1.bluelyticsClient.get('/latest');
        return response.data;
    }
    catch (error) {
        console.error('Error fetching Bluelytics data:', error);
        throw error;
    }
};
exports.getDolar = getDolar;
const getDivisas = async () => {
    try {
        const response = await axios_1.jsdelivrClient.get('/usd.json');
        return response.data['usd'];
    }
    catch (error) {
        console.error('Error fetching currency data:', error);
        throw error;
    }
};
exports.getDivisas = getDivisas;
const getDolarMep = async () => {
    try {
        const response = await axios_1.dolarApiClient.get('/dolares/bolsa');
        return response.data;
    }
    catch (error) {
        console.error('Error fetching Dolar MEP data:', error);
        throw error;
    }
};
exports.getDolarMep = getDolarMep;
const getAll = async () => {
    try {
        const [divisas, dolar] = await Promise.all([
            (0, exports.getDivisas)(),
            (0, exports.getDolar)()
        ]);
        return {
            divisas: divisas,
            dolar: dolar
        };
    }
    catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
exports.getAll = getAll;
