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
    ganancias: (num) => calcularImpuesto(num, 0.30),
    total59: (num) => calcularImpuesto(num, 1.59), 
    total60: (num) => calcularImpuesto(num, 1.60),
    restar60: (num) => restarImpuesto(num, 1.60),
}
