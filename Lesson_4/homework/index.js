// bài 1
function findEven(){
    var number = document.getElementById("number").value;
    number = parseInt(number, 10);
    var html = ''
    if( number <= 20 & number >=4){
        for( var i = 0; i <= number; i +=2 ){
            html += i + '<br>'
        }
    }else{
        html += 'Wrong input lmao'
    }
    document.getElementById("result").innerHTML = html;
}
// bài 2
var x = document.getElementById("lvl2");
x.addEventListener("mouseover", changeColor);
x.addEventListener("mouseout", changeColorBack);
function changeColor(){
    x.style.backgroundColor = 'red';
}
function changeColorBack(){
    x.style.backgroundColor = 'green';
}
// bài 3
function numberOneTriangle(){
    var lvl3 = document.getElementById("lvl3").value;
    var blank = "";
    for(var j = 1; j <= lvl3 ; j++){
        for(var k = 1; k <= j; k++){
            blank += 1;
        }
        blank += '<br>';
    }
    document.getElementById("answer").innerHTML = blank;
}
// bài 4
function updateTimer(n) {
    if (n < 10) {
      return "0" + n;
    }
    else {
      return n;
    }
}
function getTime(){
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    // hour = updateTimer(hour);
    // minute = updateTimer(minute);
    // second = updateTimer(second);
    document.getElementById("timer").innerText = hour + " : " + minute + " : " + second;
    // setTimeout(function(){ getTime() }, 1000);
}
var update = setInterval(getTime, 1000);
// getTime();