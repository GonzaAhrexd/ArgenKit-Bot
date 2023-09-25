function porcentaje():any{ 
    let valorAleatorio:number = Math.floor(Math.random() * 100 + 1);
    let simbolo:String = '█'
    for (let i = 0; i <= valorAleatorio; i = i + 4) {
      simbolo = '█' + simbolo
    }
    return [simbolo,valorAleatorio]
    }
    
    module.exports = {
        porcentaje: porcentaje,
    }