console.log('hello promise!!!');

function asyncGreeting() {
    console.log('hello belloooooooo......what\'s the matter?');
    return 'dance'
}

function afterAsync(act) {
    console.log('Well, finnally! We can go to ' + act);
}

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(asyncGreeting());
    }, 3000);
});

p1.then((act) => {
    afterAsync(act);
});

