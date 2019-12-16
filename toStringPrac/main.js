function myObj() {
    this.n = 1;
}

myObj.prototype.toString = function awesomeMsg () {
    return 'This is a msg....awesome yhea???';
}

let objInstance = new myObj();

console.log(objInstance.toString());
console.log(myObj.toString());
