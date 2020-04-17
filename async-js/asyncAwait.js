const fetch = require('node-fetch')

async function fetchData() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await resp.json()

    data.forEach(el => {
        console.log(`id -> ${el.userId} ------ title -> ${el.title}`)
    });
}

fetchData()
