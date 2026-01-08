"use strict";
function generarRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
module.exports = {
    generarRandom: generarRandom
};
