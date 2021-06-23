
// declering function 
function fizzbuzz(){
	// inisitalize the count from zero
	let i = 0;
	// looping through to get the out put of the count
	while (i < 100){
		// checking any count that are divisable by 3 and 5
		if(i % 3 === 0 && i % 5 === 0){
			console.log(`${i} is FizzBuzz`);
		}
		// checking any of the numbers that are devisiable by 5

		else if (i % 5 === 0){
			console.log(`${i} is Fizz`);

		}
		// checking for any numbers that are devisable by 3

		else if (i % 3 === 0){
			console.log(`${i} is Buzz`);

		}
		// if none of the numbers arent divisable the default output

		else{
			console.log(`${i} is not divisible by 3 or 5`);

		}
		// incriment by one till while loop is satisfied

		i += 1;

	}

}

// calling the function with out argument
fizzbuzz();