function formatoPrecio(valor:number, divisa:string):string{
    return Intl.NumberFormat('es-AR', { style: 'currency', currency: divisa }).format(valor)
}

module.exports = {
    formatoPrecio: formatoPrecio,
}