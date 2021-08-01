function check1(n){
    var flag_1 = true;
    if(n < 4 && n > 20){
        flag_1 = false;
    }else if(n % 2 == 0){
        flag_1 = true;
    }else{
        flag_1 = false;
    }
    return flag_1;
}
function findEven(){
    var number = document.getElementById("number").value;
    number = parseInt(number, 10);
    var html = ''
    for(var i = 4; i <= number; i++){
        if(check1(i)){
            html += i + '<br>';
        }
    }
    document.getElementById("result").innerHTML = html;
}