let x = 4
let y = 5
// let result = "tong cua " + x + " va " + y + " la: " + (x + y)
// template literals:
let result = `tong cua ${x} va ${y} la: ${x + y}`
console.log(result)


// arrow function
// ES5
// let sum = function(x, y) {
//     return x + y;
// }
// console.log(sum(2, 3))
// ES6
let sum = (x, y) => x + y;