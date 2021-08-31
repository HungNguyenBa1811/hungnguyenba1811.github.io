// bài 1

let equation = () => {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    if( a == 0 & b == 0){
        document.getElementById('result').innerHTML = 'Phuơng trình vô số nghiệm'
    }else if ( a == 0 && b != 0 ){
        document.getElementById('result').innerHTML = 'Phương trình vô nghiệm'
    }else{
        let ans = -b/a;
        document.getElementById('result').innerHTML = `Phương trình có 1 nghiệm:  ${ans}`;
    }
}

// bài 2

let triangleSus = () => {
    let canh1 = document.getElementById('canh1').value;
    let canh2 = document.getElementById('canh2').value;
    if( canh1 <= 0 || canh2 <= 0){
        document.getElementById('answer').innerHTML = 'Wrong triangle'
    }else{
        let canhHuyen = Math.sqrt( Math.pow(canh1, 2) + Math.pow(canh2, 2)); // định lí Py-ta-go
        let duongCao = canh1 * canh2 / canhHuyen; // Diện tích tam giác
        let toDegrees = (angle) => angle * (180 / Math.PI); // chuyển radian sang độ
        let goc1 = toDegrees( Math.asin(canh1/canhHuyen) ); // sin của góc đối diện với cạnh 1
        let goc2 = toDegrees( Math.asin(canh2/canhHuyen) ); // sin của góc đối diện với cạnh 2

        document.getElementById('answer').innerHTML = `
        <li>Số đo cạnh huyền: ${canhHuyen.toFixed(2)}</li>
        <li>Số đo đường cao: ${duongCao.toFixed(2)}</li>
        <li>Số đo 2 góc: ${goc1.toFixed(2)}\u00B0 và ${goc2.toFixed(2)}\u00B0</li>`
    }
}
// bài 3
let convertible = () => {
    document.getElementById('convert').innerHTML = `
        <li>let foo = (x, y, z) => console.log(x, y, z);</li>
        <li>let foo = () => alert('Hello');</li>
        <li>let foo = (a, b) => a + b * 100;</li> `
}

// bài 4
console.log('Bài 4: ')
let student = (name, age, address) => {
    let user = {
        name: name,
        age: age,
        address: address,
    }
    console.log(user)
}
student('Nguyen Ba Hung',16,'Ha Noi')
student('Amogus',96,'Kanye East')
student('Rick Astley',55,'England')