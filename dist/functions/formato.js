"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatoNum = exports.formatoPrecio = void 0;
function formatoPrecio(valor, divisa) {
    return Intl.NumberFormat('es-AR', { style: 'currency', currency: divisa }).format(valor);
}
exports.formatoPrecio = formatoPrecio;
function formatoNum(valor) {
    let Valor = parseFloat(valor.toFixed(2));
    return Intl.NumberFormat("es-AR").format(Valor);
}
exports.formatoNum = formatoNum;
