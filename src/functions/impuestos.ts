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
    ganancias: (num) => calcularImpuesto(num, 0.45),
    bienes: (num) => calcularImpuesto(num, 0.25),
    total99: (num) => calcularImpuesto(num, 1.99), 
    total100: (num) => calcularImpuesto(num, 2),
    restar100: (num) => restarImpuesto(num, 2),
}
