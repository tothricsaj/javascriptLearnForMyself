class Foo {
    theText() {
        console.log('foo');
    }
}

class Bar extends Foo {
    theText() {
        console.log('bar');
        throw 'OMG.....is this an error?????';
    }
}

let foo = new Foo();
let bar = new Bar();

foo.theText()

try {
    bar.theText()
}
catch(e) {
    console.log(e);
}
