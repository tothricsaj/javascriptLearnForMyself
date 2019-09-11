console.log('Hello Event Delegation!');

let el = document.querySelector('.parent');

// add evnet-listener to the parent
el.addEventListener('click', function () {
    console.log('%cClicked.....', 'background: orange; color: black; padding: 5px;');
});

el.addEventListener('mouseleave', function () {
    console.log('%cYou leaved the listened area!', 'background: lightblue; color: white; paddint: 3px;')
});
