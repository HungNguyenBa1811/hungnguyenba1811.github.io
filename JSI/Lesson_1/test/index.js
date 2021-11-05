// bai 1
let student = [
    {
        name: "NVA",
        age: 16,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    },
    {
        name: "NVB",
        age: 18,
        course: ["mindX 01", "mindX 02", "mindX 04"]
    },
    {
        name: "NVC",
        age: 17,
        course: ["mindX 01", "mindX 03", "mindX 04"]
    },
    {
        name: "NVD",
        age: 15,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    }
]

let soTuoi = prompt("Độ tuổi cần tìm?")
let soTuoiArr = []
for(let x of student){
    if(Number(soTuoi) == x.age){
        document.querySelector(".bai1a").innerHTML += `
            <h1>${x.name}</h1>
            <p>${x.age}</p>
            <br>
        `
        soTuoiArr.push(x)
    }
}
if(soTuoiArr.length <= 0) {
    document.querySelector(".bai1a").innerHTML = "Không tìm thấy!"
}

let khoaHoc = prompt("Khóa học cần tìm?")
let khoaHocArr = []
for(let x of student) {
    for(let y in x.course){
        if(khoaHoc == x.course[y]){
            document.querySelector(".bai1b").innerHTML += `
                <p>${x.name}</p>
                <br>
            `
            khoaHocArr.push(x.name)
        }
    }
}
if(khoaHocArr.length <= 0){
    document.querySelector(".bai1b").innerHTML = "Chưa có lớp học này!"
}

// bai 2
let arr1 = [0,2,4,6,8]
let arr2 = [1,3,5,7]
for(let i of arr1){
    if(i > 3){
        document.querySelector(".bai2a").innerHTML += `
            <p>${i}</p>
        `
    }
}
for(let i of arr2){
    if(i > 3){
        document.querySelector(".bai2a").innerHTML += `
            <p>${i}</p>
        `
    }
}
// 2b
let arrNew = arr1.concat(arr2)
console.log(arrNew)
// 2c
let arr2c = arrNew.sort()
console.log(arr2c)

// bai 3
let numTriangle = prompt("Nhap so: ");
let blank = "";
for (let i = 1; i < numTriangle; i += 2){
    for (let k = 0; k < (numTriangle - i / 2); k++){
        blank += '&nbsp;';
    }
    for (let j = 0; j < i; j++){
        blank += '1';
    };
        blank += '<br>'
}
document.querySelector(".bai3").innerHTML = blank;