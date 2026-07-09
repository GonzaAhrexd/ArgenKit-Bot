function calcularImpuesto(num: number, porcentaje: number): number {
  return num * porcentaje;
}

function restarImpuesto(num: number, porcentaje: number): number {
  return num / porcentaje;
}

module.exports = {
  iva: (num) => calcularImpuesto(num, 0.21),
  ganancias: (num) => calcularImpuesto(num, 0.3),
  total21: (num) => calcularImpuesto(num, 1.21),
  total51: (num) => calcularImpuesto(num, 1.51),
  total30: (num) => calcularImpuesto(num, 1.3),
  restar30: (num) => restarImpuesto(num, 1.3),
};
