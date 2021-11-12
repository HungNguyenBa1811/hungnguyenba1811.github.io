// bai 1
let arr1 = [1,2,4,5,6]
let arr2 = [1,6,8,9,0]
let filArr = [] // create array data

for(y of arr2){ // duyet mang arr2
    let filteredArr = arr1.filter(x => x == y) // tra ve phan tu duoc loc 
    filArr = filArr.concat(filteredArr) // join array moi voi array data
}

console.log(filArr)

// bai 2
let arr = [1,54,6,7]
let newArr = arr.map(x => x+5)
console.log(newArr)

// bai 3
let m = [1,2,4,5,6,7]
let n = [3,5,675,8,96]

let torture = x => x != 1 && x != 8 && x != 10 && x != 96 && x != 7

let arrM = m.filter(torture)
let arrN = n.filter(torture)

console.log(arrM, arrN)

// bai 4
let players = [
    {
        id: 11,
        name: 'Messi',
        age: 33
    },
    {
        id: 12,
        name: 'Ronaldo',
        age: 34
    },
    {
        id: 13,
        name: 'Young',
        age: 35
    },
    {
        id: 14,
        name: 'Mane',
        age: 21
    },
    {
        id: 15,
        name: 'Salah',
        age: 24
    }
]

// cach 1
let playersModified = players.reduce((obj, item) => {
    return {
        ...obj,
        [item.id]: item
    }
}, {})

console.log(playersModified)

// cach 2
let playersModified_a = {};
for (var i = 0; i < players.length; ++i){
    playersModified_a[i+11] = players[i];
}
console.log(playersModified_a)