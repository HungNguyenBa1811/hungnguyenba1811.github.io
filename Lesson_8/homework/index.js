// bài 1
let a = document.getElementById('a');
let b = document.getElementById('b');
let equation = () => document.getElementById('result').innerHTML = 'Answer: ' + (-b / a) ;
console.log(-b/a)
// bài 3

let foo_a = (x, y, z) => console.log(x, y, z);
let foo_b = () => alert('Hello');
let foo_c = (a, b) => a + b * 100;

// bài 4
fetch('./studentData.json')
    .then(response => response.json())
    .then(json => console.log(json))
