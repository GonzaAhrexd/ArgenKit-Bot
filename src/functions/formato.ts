function formatoPrecio(valor:number, divisa:string):string{
    return Intl.NumberFormat('es-AR', { style: 'currency', currency: divisa }).format(valor)
}

function formatoNum(valor:number):string{
    return Intl.NumberFormat("es-AR").format(valor)
}

module.exports = {
    formatoPrecio: formatoPrecio,
    formatoNum: formatoNum,
}