//setting up function to run the program

function oddEven( x ){

	if (isNaN(x)){
		console.log(" please enter a number ");
		window.alert(" please enter a number ");
	}
	else{

		if (x % 2 == 0){
			console.log("this is even number");
			window.alert("this is even number");
		}
		else {
			console.log("this is odd number");
			window.alert("this is odd number");
		}
	}
}

// take a number from the audiance
const number = window.prompt("plese give me a number");

// print the answer to the audiance
oddEven(number)
