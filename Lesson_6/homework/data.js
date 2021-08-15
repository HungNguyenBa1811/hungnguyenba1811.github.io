var storageKey = 'AccountList';
let dataString = localStorage.getItem(storageKey);
let list
if(dataString){
    list = JSON.parse(dataString);
}else{
    list = [];
}

function addItem(){
    let username = document.getElementById('username')
    let password = document.getElementById('password')
    if(password.value.length < 6){
        alert('Need at least 6 characters')
    }else{
        let acc = {
            username: username.value,
            password: password.value
        }
        list.push(acc);
        localStorage.setItem(storageKey, JSON.stringify(list))
        window.location = './done.html';
    }
}

