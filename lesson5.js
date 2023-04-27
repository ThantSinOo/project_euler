let num = 20;

while(true){
	let divisible = true;
	for(let i=1; i<=20; i++){
		if(num % i !== 0){
			divisible = false;
			break;
		}
	}
	if(divisible){
		console.log(num);
		break;
	}
	num++;
}

