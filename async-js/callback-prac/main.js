console.log('hello callback\n');

function count(callback) {
    console.log(1);
    callback();
    console.log(2);
}

function myCallback() {
    setTimeout(() => {
        console.log(3);
    }, 3000);


    setTimeout(() => {
        console.log(4);
    }, 4000);

}

count(myCallback);
console.log(2.5);
