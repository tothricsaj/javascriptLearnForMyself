console.log('Hello Event Delegation!');

let parent = document.querySelector('.parent');
let child = document.querySelector('.child');

// add evnet-listener to the parent
parent.addEventListener('click', function (event) {
    console.log('%cClicked.....', 'background: orange; color: black; padding: 5px;');
});

parent.addEventListener('mouseleave', function () {
    console.log('%cYou leaved the listened area!', 'background: lightblue; color: white; padding: 3px;')
});

child.addEventListener('click', function (event) {
    event.stopPropagation();
});

child.addEventListener('mouseleave', function(event) {
    event.stopPropagation();
    console.log(`%cYou leave the child`, 'background: green; color: white; padding: 3px;');
});
