// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
   // Convert n to +ve value
   const num = n > 0 ? n : -n

   const reverseNum = parseInt(num.toString().split('').reverse().join(''))

   return reverseNum * Math.sign(n)
}

module.exports = reverseInt