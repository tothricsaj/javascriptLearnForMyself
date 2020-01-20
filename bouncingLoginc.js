let x = 1;
let step = 1;
let counter = 0;

let timer = setInterval(() => {

    console.log(x);

    if(x >= 3 || x <= 0) step *= -1;
    x += step;

    counter++;
    if(counter === 19) clearInterval(timer);
}, 1000);
