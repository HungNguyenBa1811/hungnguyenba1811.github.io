var x = 0
function yeah(){
    x += 100000;
    window.location = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    document.getElementById('money').innerHTML = '$' + x;
}
function yes(){
    x+= 1000000;
    document.getElementById('money').innerHTML = x + 'BTC';
    document.getElementById('congrats').innerHTML = 'Congratulations! You have defeated this boss!';
}