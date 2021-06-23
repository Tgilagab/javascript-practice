
//Here are possible response the 8 ball would give when asked the qustion
const choices = [ "It is Certain" , "It is decidedly so" , "Without a doubt" , "Yes definitely" , "You may rely on it" , "As I see it yes" , "Most likely" ,"Outlook good", "Yes" , "Signs point to yes" , "Reply hazy, try again" , "Ask again later"," Better not tell you now " , "Cannot predict now", "Concentrate and ask again" , "Dont count on it" , "My reply is no" , "My sources say no", "Outlook not so good " , "Very doubtful"];

//creating and appending the HTML formation with response
const display = document.getElementById("display");
const title = document.createElement("p");
const text = document.createElement("input");
const answer = document.createElement("p");
const img = document.createElement("img");
const img2 = document.createElement("img");
const submit = document.createElement("input");

text.className= "question";
title.className = "title";
answer.className = "answer";
submit.className = "submit";
img.className = "images";
//img2.className = "images2";
submit.setAttribute("type", "submit");
submit.setAttribute("value", "Submit");
title.innerText = " Ask Magic 8 Ball !!";
text.placeholder = "Ask your question..";
answer.placeholder= "your question"
img.src = "images/8_ball.png"; 
display.append(title);
display.append(text);
display.append(answer);
display.append(img);
//img.append(img2);
submit.addEventListener("click",shuffle);
display.append(submit);
console.log(display);




const images = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
data = [];
for ( let i = 0; i < images.length; i++) {
  data.push(img.src ="images/image"+images[i]+".png");
  console.log(data[i]);
}

console.log(images);


//check if user asked a question, then shuffle through the Answer Array and send response.
function shuffle(){
  //check if the client put something or alert him /her
  if(text.value.length < 1){
    answer.innerText =` please ask question !`;
    alert(' please ask question !');
  }
  else{
    //answer.innerText = ` YOUR OUTPUT = ${text.value} `;
  //choices are the 20 response the random would choose from
    /*const respond = Math.floor(Math.random() * Math.floor(choices.length));
    answer.innerText = choices[respond];*/
  
    const respond = Math.floor(Math.random() * Math.floor(data.length));
    answer.innerText = text.value;
    img.src = data[respond];
    text.value = "";

    setTimeout(function(){
      img.src = "images/8_ball.png";
      text.value = "";
      answer.innerText ="";
   }, 6000);

  }
}



