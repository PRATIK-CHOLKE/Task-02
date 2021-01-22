

function deleteData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method: 'DELETE'
    })
    console.log("Data is deleted successfully..!!");
}

function getData(callback) {
    console.log("Data Fetched is..!!")
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then((data) =>{ console.log(data)
        callback()
        })
}

getData(deleteData);