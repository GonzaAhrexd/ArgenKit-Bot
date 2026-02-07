function calcularImpuesto(num: number, porcentaje:number):number{
    return num * porcentaje;
}

function restarImpuesto(num: number, porcentaje:number):number{
    return num / porcentaje;
}

export const iva = (num: number) => calcularImpuesto(num, 0.21);
export const ganancias = (num: number) => calcularImpuesto(num, 0.30);
export const total21 = (num: number) => calcularImpuesto(num, 1.21);
export const total51 = (num: number) => calcularImpuesto(num, 1.51);
export const total30 = (num: number) => calcularImpuesto(num, 1.30);
export const restar30 = (num: number) => restarImpuesto(num, 1.30);
