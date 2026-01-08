"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReservasData = exports.getInflacionData = exports.getCirculanteData = exports.getBaseMonetariaData = void 0;
const axios_1 = require("./axios");
const DESDE = new Date(Date.now() - 12096e5).toISOString().split("T")[0];
const HASTA = new Date().toISOString().split("T")[0];
const getBaseMonetariaData = async () => {
    try {
        const response = await axios_1.apiBCRAClient.get('/Monetarias/15/', {
            params: {
                desde: DESDE,
                hasta: HASTA
            }
        });
        const baseMonetariaValor = response.data.results[0].detalle[0].valor;
        const baseMonetariaValorAnterior = response.data.results[0].detalle[1].valor;
        const baseMonetariaData = {
            baseMonetariaValor: baseMonetariaValor,
            baseMonetariaValorAnterior: baseMonetariaValorAnterior,
            isAumentoBase: baseMonetariaValor > baseMonetariaValorAnterior ? "🔺" : "<:flechashaciaabajo:1210747546096369664>",
            fecha: (response.data.results[0].detalle[0].fecha).split("-").reverse().join("/")
        };
        return baseMonetariaData;
    }
    catch (error) {
        console.log(error);
        throw new Error("Error al obtener los datos de la Base Monetaria");
    }
};
exports.getBaseMonetariaData = getBaseMonetariaData;
const getCirculanteData = async () => {
    try {
        const response = await axios_1.apiBCRAClient.get('/Monetarias/16/', {
            params: {
                desde: DESDE,
                hasta: HASTA
            }
        });
        const circulanteDataLatest = {
            valor: response.data.results[0].detalle[0].valor,
            fecha: response.data.results[0].detalle[0].fecha.split("T")[0].split("-").reverse().join("/")
        };
        return circulanteDataLatest;
    }
    catch (error) {
        console.log(error);
        throw new Error("Error al obtener los datos del Circulante");
    }
};
exports.getCirculanteData = getCirculanteData;
const getInflacionData = async () => {
    try {
        const startMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split("T")[0];
        const startTwelveMonthsBefore = new Date(new Date().getFullYear(), new Date().getMonth() - 12, 1).toISOString().split("T")[0];
        const [inflacion, interanual] = await Promise.all([
            axios_1.apiBCRAClient.get(`https://api.bcra.gob.ar/estadisticas/v4.0/Monetarias/27/`, {
                params: {
                    desde: startTwelveMonthsBefore,
                    hasta: startMonth,
                }
            }),
            axios_1.apiBCRAClient.get(`https://api.bcra.gob.ar/estadisticas/v4.0/Monetarias/28/`, {
                params: {
                    desde: startTwelveMonthsBefore,
                    hasta: startMonth,
                }
            }),
        ]);
        const inflacionActualMes = new Date(inflacion.data.results[0].detalle[0].fecha);
        const inflacionInteranualActualMes = new Date(interanual.data.results[0].detalle[0].fecha);
        const inflacionInteranualAnteriorMes = new Date(interanual.data.results[0].detalle[0].fecha);
        const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        const inflacionResponse = {
            mensual: {
                valor: inflacion.data.results[0].detalle[0].valor,
                fecha: new Date(inflacion.data.results[0].detalle[0].fecha),
                valorAnterior: inflacion.data.results[0].detalle[1].valor,
            },
            interanual: {
                valor: interanual.data.results[0].detalle[0].valor,
                fecha: new Date(interanual.data.results[0].detalle[0].fecha),
                valorAnterior: interanual.data.results[0].detalle[1].valor,
                rango: `${meses[inflacionInteranualActualMes.getMonth() + 1]} ${inflacionInteranualActualMes.getFullYear() - 1} - ${meses[inflacionActualMes.getMonth()]} ${inflacionActualMes.getFullYear()}`,
                rangoAnterior: `${meses[inflacionInteranualAnteriorMes.getMonth() + 1]} ${inflacionInteranualAnteriorMes.getFullYear() - 1} - ${meses[inflacionInteranualAnteriorMes.getMonth()]} ${inflacionInteranualAnteriorMes.getFullYear()}`
            }
        };
        return inflacionResponse;
    }
    catch (error) {
        console.log(error);
        throw new Error("Error al obtener los datos de la Inflación");
    }
};
exports.getInflacionData = getInflacionData;
const getReservasData = async () => {
    try {
        const response = await axios_1.apiBCRAClient.get('/Monetarias/1/', {
            params: {
                desde: DESDE,
                hasta: HASTA
            }
        });
        const reservasDataLatest = {
            valor: response.data.results[0].detalle[0].valor,
            fecha: response.data.results[0].detalle[0].fecha.split("T")[0].split("-").reverse().join("/")
        };
        return reservasDataLatest;
    }
    catch (error) {
        console.log(error);
        throw new Error("Error al obtener los datos de las Reservas");
    }
};
exports.getReservasData = getReservasData;
