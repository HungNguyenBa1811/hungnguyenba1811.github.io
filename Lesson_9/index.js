console.log('first-line');
console.log('second-line');
console.log('third-line');

console.log('first-line');
setTimeout(() => {
    console.log('second-line');    
}, 20);
setTimeout(() => {
    console.log('lmao-line');    
}, 10);
console.log('third-line');

// code callback