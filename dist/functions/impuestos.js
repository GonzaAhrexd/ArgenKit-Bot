"use strict";
function calcularImpuesto(num, porcentaje) {
    return num * porcentaje;
}
module.exports = {
    iva: (num) => calcularImpuesto(num, 0.21),
    pais8: (num) => calcularImpuesto(num, 0.08),
    pais30: (num) => calcularImpuesto(num, 0.30),
    ganancias: (num) => calcularImpuesto(num, 0.45),
    bienes: (num) => calcularImpuesto(num, 0.25),
    total75: (num) => calcularImpuesto(num, 1.75),
    total74: (num) => calcularImpuesto(num, 1.74),
    total100: (num) => calcularImpuesto(num, 2)
};
