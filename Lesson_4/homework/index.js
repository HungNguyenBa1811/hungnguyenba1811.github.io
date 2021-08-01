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
    var j;
    var k;
    for(j = 1; j <= lvl3 ; j++){
        for(k = 1; k <= j; k++) {
            blank += 1;
        }
        blank += '<br>';
    }
    document.getElementById("answer").innerHTML = blank;
}
// bài 4
function getTime(){
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    hour = updateTime(hour);
    minute = updateTime(minute);
    second = updateTime(second);
    document.getElementById("timer").innerText = hour + " : " + minute + " : " + second;
    var t = setTimeout(function(){ getTime() }, 1000);
}
function updateTime(l) {
    if (l < 10) {
      return "0" + l;
    }
    else {
      return l;
    }
  }
getTime();