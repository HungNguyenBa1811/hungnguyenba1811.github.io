var storageKey = 'todoList';
let dataString = localStorage.getItem(storageKey);
let list;
if(dataString){
    list = JSON.parse(dataString);
}else{
    list = [];
}

let addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', addItem);

function addItem(){
    let input = document.getElementById('new-item');
    let newItem = input.value;
    list.push(newItem);
    render();
    input.value = "";
    // Local Storage
    localStorage.setItem(storageKey, JSON.stringify(list));
}

function render(){
    let content = list.map(function (item) {
        return '<li class="hello">' + item + '</li>';
    });
    document.getElementById('list').innerHTML = content.join(' ');
}
render();

document.getElementById('list').addEventListener('click', function(){
    window.location = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
});