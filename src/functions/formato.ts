
export function formatoPrecio(valor:number, divisa:string):string{
    return Intl.NumberFormat('es-AR', { style: 'currency', currency: divisa }).format(valor)
}

export function formatoNum(valor:number):string{
    valor = Number(valor)
    return Intl.NumberFormat("es-AR").format(valor)
}