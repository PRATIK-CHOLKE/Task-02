document.getElementById("addPost").addEventListener("submit", addPost);

function addPost(event) {
    event.preventDefault();

    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'accplication/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            title: title,
            body: body
        })
    })
    .then ( res => res.json() )
    .then( data => console.log(data) )
}