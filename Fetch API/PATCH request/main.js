//Completed: false. Updated to true
document.getElementById("patchData").addEventListener("click", patchData);

function patchData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method: 'PATCH',
        body: JSON.stringify({
            completed: true
        }),
        headers: {
            'Content-type': "application/json"
        }
    })
    .then(respone => respone.json())
    .then(json => {
        console.log(json)
        let out = `<br><h1 class="text-success" style="text-align: center"><abbr title="attribute"><em> {Completed} is modified </abbr></em></h1>`
        document.getElementById("output").innerHTML = out
    })
}