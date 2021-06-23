


//function to check and validate we have the right answer
function password(x){
	if ((x.length > 5) && (x.length < 19) && isNaN(x) && x.charAt(0) === x.charAt(0).toUpperCase() && isNaN(x.charAt(0))){
		window.alert(" password passed")
	}
	else{
		window.alert(`FAILED '\n' type need string = ${typeof(x)} '\n' length 6-20 = ${x.length} '\n' first letter [A-Z] = ${x.charAt(0).toUpperCase()}`) ;
	}
}

// prompting user to enter a password to validate
const passwd = window.prompt(`Enter password '\n' [6-20 lenght, First char Capial`);

//respond if input is correct through validation
password(passwd)