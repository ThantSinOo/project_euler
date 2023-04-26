


let largest_palindrome = 0;

for(let i=100; i < 1000; i++){
	for(let j=i; j < 1000; j++){
		const product = i * j;
		const reversed = product.toString().split('').reverse().join('');
		if(product.toString() === reversed && product > largest_palindrome){
			largest_palindrome = product;
		}
	}
}

console.log(largest_palindrome)