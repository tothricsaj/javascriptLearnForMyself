console.log('hello callback\n');

function count(callback) {
    console.log(1);
    callback();
    console.log(2);
}

function myCallback() {
    console.log(3);
}

count(myCallback);
