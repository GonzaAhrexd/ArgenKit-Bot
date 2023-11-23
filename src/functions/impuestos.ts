function calcularImpuesto(num: number, porcentaje:number):number{
    return num * porcentaje;
}

function restarImpuesto(num: number, porcentaje:number):number{
    return num / porcentaje;
}

module.exports = {
    iva: (num) => calcularImpuesto(num, 0.21),
    pais8: (num) => calcularImpuesto(num, 0.08),
    pais30: (num) => calcularImpuesto(num, 0.30),
    ganancias: (num) => calcularImpuesto(num, 1),
    bienes: (num) => calcularImpuesto(num, 0.25),
    total154: (num) => calcularImpuesto(num, 2.54), 
    total155: (num) => calcularImpuesto(num, 2.55),
    restar155: (num) => restarImpuesto(num, 2.55),
}
