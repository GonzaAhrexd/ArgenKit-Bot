function generarRandom(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = {
    generarRandom: generarRandom
}