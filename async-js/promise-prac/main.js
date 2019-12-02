console.log('hello promise!!!');

function asyncGreeting() {
    console.log('hello belloooooooo......what\'s the matter?');
}

function afterAsync() {
    console.log('Well, finnally!');
}

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(asyncGreeting());
    }, 3000);
});

p1.then(() => {
    afterAsync();
});

