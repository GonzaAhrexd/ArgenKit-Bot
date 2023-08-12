//@ts-ignore
function diasHasta(fecha:Date):any {
    let hoy = new Date();
    //@ts-ignore
    return Math.ceil((fecha - hoy) / (1000 * 60 * 60 * 24));
}

module.exports = {
    diasHasta: diasHasta,
}