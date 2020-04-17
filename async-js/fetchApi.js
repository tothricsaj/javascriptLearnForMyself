const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resp => resp.json())
    .then((data) => {
        console.log(data)
    })
    .catch(() => console.log('error'))