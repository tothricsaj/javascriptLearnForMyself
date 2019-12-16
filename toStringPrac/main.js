function myObj() {
    this.n = 1;
}

myObj.prototype.toString = function awesomeMsg () {
    return 'This is a msg....awesome yhea???';
}

console.log(`${myObj}`);
console.log(myObj.toString());
