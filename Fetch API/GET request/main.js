document.getElementById("getData").addEventListener("click", getData);

function getData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            let output = `<hr><h2 style="text-align: center;">All posts are fetched</h2><hr>`;
            data.forEach(function (info) {
                output +=
                    `<div class='container'>
                        <h5 class="text-info bg-dark">${info.title}</h5>
                        <p>${info.body}</p>
                    </div>`;
            });
            document.getElementById('output').innerHTML = output;
        })
}