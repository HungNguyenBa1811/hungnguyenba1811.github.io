// Bai 1
let mang = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let mang_moi = mang.filter(x => x % 2 == 0)
let tong = 0
for(x of mang_moi){
    tong += x
}
console.log(tong)

// Bai 2
let n = prompt("n = ")
let expres = 0
if(n > 0){
    for(let i = 1; i <= n; i++){
        expres += i/n
    }
}
console.log(expres)

// Bai 3
let songuyen1_str = prompt("So nguyen 1 =")
let songuyen2_str = prompt("So nguyen 2 =")
let sum = 0
let songuyen1 = Number(songuyen1_str)
let songuyen2 = Number(songuyen2_str)
if(songuyen1 == songuyen2){
    sum = songuyen1 * 2 * 3
} else {
    sum = songuyen1 + songuyen2
}
console.log(sum)

// Bai 4
let number_string = prompt("Nhap so duong = ")
let number = Number(number_string)
if(number > 0){
    if(number % 3 === 0){
        console.log("So ", number, " la boi cua 3")
    }
    if(number % 7 === 0){
        console.log("So ", number, " la boi cua 7")
    }
}

// Bai 5
let username = prompt("Nhap ten cua ban:")
let age = prompt("Nhap tuoi cua ban:")
document.write(`
    <p style="font-weight: bold">Ten: ${username}</p>
    <p style="text-decoration: underline">Tuoi: ${age}</p>
`);

// Bai 6
let year_str = prompt("Nhap nam sinh:")
let year = Number(year_str)
let date = new Date()
let currentYear = date.getFullYear()
if(year <= currentYear){
    let realAge = currentYear - year
    console.log("Tuoi cua ban: " + realAge)
}