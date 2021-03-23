// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// first solution
// function reverseInt(n) {
//     return Math.sign(n) < 0 ? 
//     -parseInt(n.toString().split('').reverse().join('')) :
//      parseInt(n.toString().split('').reverse().join(''))
// }

//solution after watching tutorial
function reverseInt(n) {
    const reversint = n.toString().split('').reverse().join('')

    return parseInt(reversint) * Math.sign(n)
}

module.exports = reverseInt;
