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
