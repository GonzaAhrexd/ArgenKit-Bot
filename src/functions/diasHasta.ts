//@ts-ignore
function diasHasta(fecha:Date):any {
    let hoy = new Date();
    //@ts-ignore
    return ((fecha - hoy) / (1000 * 60 * 60 * 24)).toFixed(0);
}

module.exports = {
    diasHasta: diasHasta,
}