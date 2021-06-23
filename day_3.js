// Ask for the user's first name
let firstName = prompt("what is your first name? ");
// Ask for the user's last name
let lastName = prompt("what is your Last name? ");
// Log the user's first name to the console
consle.log(firstName);
// Alert the user's last name
window.alert(lastName);

// *BONUS* 
// Ask for the user's birthday
let age = prompt(" your Birthday? ddmmyyyy ");
// Ask the user to confirm their birthday input
const age2 = confirm("confirm Birthday? ddmmyyyy " + age);
// Alert the user's birthday
if(age2 === true){
  window.alert(age);
}
else{
  window.alert("try again");
}

