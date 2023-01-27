function iva(num){
    return num*0.21
}
function pais8(num){
    return num*0.08
}
function pais30(num){
    return num*0.30
}
function ganancias(num){
    return num*0.45
}
function bienes(num){
    return num*0.25
}

function total74(num){
    return num*1.74
}
function total75(num){
    return num*1.75
}

function total100(num){
    return num*2
}




module.exports = {
    iva: iva,
    pais8: pais8,
    pais30: pais30,
    ganancias: ganancias,
    bienes: bienes,
    total75: total75,
    total74: total74,
    total100: total100
}