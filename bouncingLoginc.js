let x = 0;
let counter = 0;

let timer = setInterval(() => {
    if(x<3 && x>=0) x += 1;
    else if(x>=3 && x<0) x-=1;

    console.log(x);

    counter++;
    if(counter === 5) clearInterval(timer);
}, 1300);
