let answer = document.getElementById('answer').value;
let attempt = document.getElementById('attempt').value;
function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(answer== '' || attempt== ''){
      setHiddenFields();
    }
    if(validateInput(input.value)){
      attempt++;
    }else {
      return false;
    }
    if(getResults(input.value)){
      setMessage("You Win! :)");
      showAnswer(true);
      showReplay();
    }else if(attempt>=10){
        setMessage("You Lose! :(");
        showAnswer(false);
        showReplay();
    }else {
        setMessage("Incorrect, try again.");
      }
}

//implement new functions here

function setHiddenFields(){
  attempt = 0;
  answer = Math.floor(Math.random()*9999).toString();
  while(answer.length<4){
    answer='0'+answer;
  }
}

function setMessage(msg){
  document.getElementById('message').innerHTML=msg;
}

function validateInput(input){
  if(input.length==4)
    return true;
  else {
    setMessage('Guesses must be exactly 4 characters long');
    return false;
  }
}

function getResults(input){
  let result = '<div class="row"><span class="clo-md-6">'+input+'</span><div class="col-md-6">';
  let count=0;
  for(let i=0;i<4;i++){
    if(input[i] == answer[i])
    {
      result+='<span class="glyphicon glyphicon-ok"></span>';
      count++;
    }

    else if(answer.search(input[i]) !=-1){
        result+='<span class="glyphicon glyphicon-transfer"></span>';
      }else {
          result+='<span class="glyphicon glyphicon-remove"</span>';
        }
    }
  result+='</div></div>'
  document.getElementById("results").innerHTML+=result;
  if(count==4)
    return true;
    else {
      return false;
    }

}

function showAnswer(param){
  document.getElementById('code').innerHTML=answer;
  if(param)
    document.getElementById('code').className+=' success ';
    else {
      document.getElementById('code').className+=' failure ';
    }

}

function showReplay(){
  document.getElementById('guessing-div').style.display = "none";
  document.getElementById('replay-div').style.display = "block";
}
