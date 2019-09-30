var num = 2;

function outer() {
	var num = 3;
	function inner() {
		num++
		var num = 42;
		console.log(num);
	}

	inner();
}

outer();

console.log('####################################');

var hero = {
	_name: 'John Doe',
	getSecretIdentify: function() {
		return this._name;
	}
}

var stolenIdentify = hero.getSecretIdentify.bind(hero);

console.log(stolenIdentify());
console.log('-------------------------');
console.log(hero.getSecretIdentify());

console.log('####################################');
