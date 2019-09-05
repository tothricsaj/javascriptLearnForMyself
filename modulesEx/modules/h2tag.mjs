export default class Foo {
    constructor(a, b) {
        this.a = a;
        this.b = b
    }
}

function ExploreH2tag(){
    console.log('%cIt is from ExploreH2tag() function!', 'color: red;');
    let h2Tags = document.getElementsByTagName('h2');

    this.list = function () {
        // check this link:
        // https://stackoverflow.com/questions/35969974/foreach-is-not-a-function-error-with-javascript-array
        Array.prototype.forEach.call(h2Tags, (el, index) => {
            let msg = `%cThe ${ index + 1 }-th element class --> ${el.className}\nThe ${ index + 1}-th element id --> ${el.id}\nThe ${ index + 1}-th element content --> ${el.textContent}\n
            `;
            console.log(msg, 'color: black; background: lightblue; padding: 2px;');
        });
    }
}

// important the binding
// read this (hahaha) article:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
let exh2tag = ExploreH2tag.bind(this);

function createH2tag(txt, className='', idName='') {
    console.log(`h2 tag is created by module! The content is -> ${ txt }`);
    return `<h2 class="${ className }" id="${ idName }">${ txt }</h2>`
}

// export default ExploreH2tag();
export { createH2tag, exh2tag };
