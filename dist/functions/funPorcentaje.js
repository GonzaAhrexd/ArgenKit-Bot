"use strict";
function porcentaje() {
    let valorAleatorio = Math.floor(Math.random() * 100 + 1);
    let simbolo = '█';
    for (let i = 0; i <= valorAleatorio; i = i + 4) {
        simbolo = '█' + simbolo;
    }
    return [simbolo, valorAleatorio];
}
module.exports = {
    porcentaje: porcentaje,
};
