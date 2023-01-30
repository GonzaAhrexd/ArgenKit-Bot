
//@ts-ignore
function porcentaje():any{ 

    let a = Math.floor(Math.random() * 100 + 1);
    let d = '█'
    
    
    for (let i = 0; i <= a; i = i + 4) {
      d = '█' + d
    }
    return [d,a]
    }
    
    module.exports = {
        porcentaje: porcentaje,
    }