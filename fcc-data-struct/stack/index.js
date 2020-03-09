function Stack() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line
  this.push = function(elem) {
    collection.push(elem)
  }

  this.pop = function() {
    return collection.pop()
  }

  this.peek = function() {
    return collection[collection.length - 1]
  }

  this.isEmpty = function() {
    return collection.length === 0 ? true : false
  }

  this.clear = function() {
    collection = []
  }
  // Only change code above this line
}

let stack = new Stack

stack.push('foo')
stack.push('bar')

let el = stack.pop()

stack.print()

console.log(el)
