// bai 1
class Animal {

    constructor(name) {
        this.name = name;
    }

}

class Rabbit extends Animal {
    constructor(name) {
        super(name)  // deleted 'this.name = name', add 'super(name)'
        this.create = Date.now();
    }
}

let rabbit = new Rabbit("White Rabbit");
alert(rabbit.name)

// bai 2
class Clock {
    constructor({ template }) {
        this.template = template
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output)
    }

    stop() {
        clearInterval(this.timer)
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

class ExtendedClock extends Clock {
    constructor() {
        super(template);
    }
    render2() {
        let date = new Date();

        let milliSecs = date.getMilliseconds();
        if (milliSecs < 10) milliSecs = '0' + milliSecs;

        let output_2 = this.template
            .replace('ms', milliSecs);

        console.log(output_2)
    }

    start_millisecs() {
        this.render2();
        this.timer = setInterval(() => this.render2(), 1);
    }
}

// bai 3
class Fraction {
    numerator;
    denominator;
    constructor(numerator, denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
    }
    show() {
        if(this.denominator == 0) {
            alert('Sai phan so')
        }else{
            console.log(`${this.numerator} / ${this.denominator}`)
        }
    }
    phanSoToiGian(a,b) {
        for(let i = 1; i <= a; i++) {
            if(a % i == 0 && b % i == 0) {
                a /= i
                b /= i
            } // phan so toi gian
        }
        return `${a} / ${b}`
    }
    tong(a1,b1,a2,b2) {
        if(b1 == b2){
            let newNumerator = a1 + a2
            let newDenominator = b1
            return `${newNumerator} / ${newDenominator}`
        }
        else{
            let newNumerator = a1*b2+a2*b1
            let newDenominator = b1*b2
            this.phanSoToiGian(newNumerator,newDenominator)
        }
    }
    hieu(a1,b1,a2,b2) {
        if(b1 == b2){
            let newNumerator = a1 - a2
            let newDenominator = b1
            return `${newNumerator} / ${newDenominator}`
        }
        else{
            let newNumerator = a1*b2 - a2*b1
            let newDenominator = b1*b2
            this.phanSoToiGian(newNumerator,newDenominator)
        }
    }
    tich(a1,b1,a2,b2) {
        let newNumerator = a1*a2
        let newDenominator = b1*b2
        this.phanSoToiGian(newNumerator,newDenominator)
    }
    thuong(a1,b1,a2,b2) {
        let newNumerator = a1*b2
        let newDenominator = b1*a2
        this.phanSoToiGian(newNumerator,newDenominator)
    }
}