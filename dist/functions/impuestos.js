"use strict";
function calcularImpuesto(num, porcentaje) {
    return num * porcentaje;
}
function restarImpuesto(num, porcentaje) {
    return num / porcentaje;
}
module.exports = {
    iva: (num) => calcularImpuesto(num, 0.21),
    ganancias: (num) => calcularImpuesto(num, 0.30),
    total21: (num) => calcularImpuesto(num, 1.21),
    total51: (num) => calcularImpuesto(num, 1.51),
    total30: (num) => calcularImpuesto(num, 1.30),
    restar30: (num) => restarImpuesto(num, 1.30),
};
