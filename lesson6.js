let result = (num=100)=>{
	let sum_of_squares = 0;
	let squares_of_sum = 0;
	for(let i = 0; i <= num; i++){
		sum_of_squares += i ** 2;
		squares_of_sum += i;
	}
	
	console.log("squares_of_sum",squares_of_sum);
	let ans = (squares_of_sum **2) - sum_of_squares  ;
console.log("ans",ans);

}

result();
