

/*function fetchText(){
return fetch('https://cat-fact.herokuapp.com/facts')
  .then(response => response.json())
  .then(data => printText(data))
  .catch(err => console.log('fetching failed check file',err));
}

function printText(fetched){
    console.log(fetched);
}

printText();*/


fetch('https://cat-fact.herokuapp.com/facts')
  .then(recived => recived.json())
  .then(data => {console.log(data)})
  .catch(err => console.log('fetching failed check file',err));
