function createH2tag(txt, className='', idName='') {
    console.log('h2 tag is created by module!');
    return `<h2 class="${ className }" id="${ idName }">${ txt }</h2>`
}

export { createH2tag };
