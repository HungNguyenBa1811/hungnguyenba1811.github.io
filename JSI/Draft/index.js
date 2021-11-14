const personInfo = (name,age,email) => {
    let person = {}
    person.email = email
    person.age = age
    person.name = name
    return person
}

let moicoObj = personInfo("Ngo Tien Minh",17,"blacksmith28@gmail.com")
let leviObj = personInfo("Hoang Vu Thang Long",17,"longhvthang@gmail.com")
console.log(moicoObj,leviObj)