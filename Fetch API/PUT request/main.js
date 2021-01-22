document.getElementById("putData").addEventListener("click", putData);

function putData() {
    fetch('https://jsonplaceholder.typicode.com/todos/5', {
        method: 'PUT',
        body: JSON.stringify({
            userId: 1,
            id: 5,
            title: "I am UPDATED",
            completed: false
        }),
        headers: {
            "Content-type": "application/json"
        }
    })
        .then(response => response.json())
        .then(json => {
            console.log(json)
            let out = `<br><h1 class="text-success" style="text-align: center"><abbr title="attribute"><em> {Title} is Updated </abbr></em></h1>`
            document.getElementById("output").innerHTML = out
        })
}