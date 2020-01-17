function Foo(value) {
    this.setValue(value);
}

Foo.method('setValue', function(value){
    this.value = value;
    return this;
})

