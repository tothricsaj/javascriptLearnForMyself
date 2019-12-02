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

function swapPic(elem) {
    let img = `<img src="https://images.pexels.com/photos/2823459/pexels-photo-2823459.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="some pic"width=300 />`;
    console.log(img);
    setTimeout(() => {
        elem.innerHTML = img;
    }, 4000);
}

function loadElementsToWrapper(callback) {
    let wrapper = document.querySelector('.wrapper');
    callback(wrapper);
}

loadElementsToWrapper(swapPic);

