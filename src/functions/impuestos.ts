function calcularImpuesto(num: number, porcentaje: number): number {
  return num * porcentaje;
}

function restarImpuesto(num: number, porcentaje: number): number {
  return num / porcentaje;
}

module.exports = {
  iva: (num: number) => calcularImpuesto(num, 0.21),
  ganancias: (num: number) => calcularImpuesto(num, 0.3),
  total21: (num: number) => calcularImpuesto(num, 1.21),
  total51: (num: number) => calcularImpuesto(num, 1.51),
  total30: (num: number) => calcularImpuesto(num, 1.3),
  restar30: (num: number) => restarImpuesto(num, 1.3),
};
