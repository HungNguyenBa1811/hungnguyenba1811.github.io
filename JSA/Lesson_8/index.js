// Front-end: Xây dựng giao diên người dùng
// Back-end: Xây dựng logic xử lí và database
// API: cổng giao tiếp giữa các phần mềm

// Back-end -> API -> fetch() -> JSON -> JSON.parse -> JavaScript types {array, object,...} -> Render ra HTML {.innerHTML}
let userApi = 'https://jsonplaceholder.typicode.com/posts'
fetch(userApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(posts) {
        
        let html = posts.map(function(item) {
            return `<li>
                <h2>${item.title}</h2>
                <p>${item.body}</p>
            </li>`
        });
        
        document.querySelector('.call').innerHTML = html;

    })
