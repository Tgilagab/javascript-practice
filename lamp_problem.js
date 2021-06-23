// First ask the user for their name using a prompt.
console.log("hello");
const name = input("Please enter your name", "Harry Potter");
//if (name.length <= 0){
//	window.alert("you can't have your name empty put something ")
//}
// For the red rectangle you can use window.confirm("Lamp doesn't work");. 
// If the user clicks Cancel nothing happens, the program ends. 
// Otherwise if the click OK the program continues on.
// For the yellow diamonds you can use a window.prompt (technically it could be done using confirm, 
// but for this extra challenge I want you to use prompt for this part).
//  With the prompt a user is free to type anything they can literally type in "ldjflkdsjkflksdklfjsadlfjslkk", 
// but you want to consider only "yes" or "no" inputs. Think about the edge cases (aka corner cases aka blind spots)  
// I mentioned in class, i.e. what if a user leaves the prompt blank? what if they type something other than "yes" or "no", 
// what if they type it NO and YES in all caps (hint: recall toUppercase() and toLowerCase()).
// And finally the green rectangles are just console.log();s  but instead of just logging out the message in the green, 
// concatenate the user's name at the beginning, i.e. "Erik Repair lamp", "Erik replace bulb", etc.
let name = prompt("what is your name ? ");
if (name.length <= 0){
window.alert("please put something for name");
}
else{
 window.alert(`hello ${name} what can I help you with`); 
}

const lamp = confirm("lamp is not working?");
  if(true){
    let plug = prompt("is your lamp plugged in ?", "yes or no");
    if (plug != "yes" || plug != "no" ){
      window.alert(" please just respond with Yes or No")
    }
    else if (plug == "No"){
      window.alert(" please plug the lamp");
    }
    else if (plug == "yes"){
      let bulb = prompt("is your lamp bulb is burnt ?", "yes or no");
      if (bulb != "yes" || bulb != "no" ){
        window.alert(" please just respond with Yes or No")
      }
      else if (bulb == "No"){
        window.alert(" please change the bulb");
      }
   else{
     window.alert(`${name} you need repair your lamp`)
   }
