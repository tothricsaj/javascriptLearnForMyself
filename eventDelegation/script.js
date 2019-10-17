console.log('Hello Event Delegation!');

let parent = document.querySelector('.parent');
let child = document.getElementsByClassName('child');

// add evnet-listener to the parent
parent.addEventListener('click', function (event) {
    console.log('%cClicked.....the parent', 'background: orange; color: black; padding: 5px;');
});

/*
parent.addEventListener('mouseleave', function () {
    console.log('%cYou leaved the listened area!', 'background: lightblue; color: white; padding: 3px;')
});
*/

for(let i=0; i<child.length; i++) {
  child[i].addEventListener('click', function (event) {
     console.log('%cclicked the child', 'background: green; color: black; padding: 5px;');
     event.stopPropagation();
  });
}

/*
child.addEventListener('mouseleave', function(event) {
    console.log(`%cYou leave the child`, 'background: green; color: white; padding: 3px;');
    event.stopPropagation();
});
*/
