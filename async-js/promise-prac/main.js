console.log('hello promise!!!');

function asyncGreeting() {
    console.log('hello belloooooooo......what\'s the matter?');
    return 'dance'
}

function afterAsync(act) {
    console.log('Well, finnally! We can go to ' + act);
}

let p1 = new Promise((resolve, reject) => {
    console.log('What will happen????');
    setTimeout(() => {
        resolve(asyncGreeting());
    }, 3000);
});

console.log('syncronus msg....');

p1.then((act) => {
    afterAsync(act);
});


