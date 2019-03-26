'use strict';

/*Learned from w3schools which scrolling occurs, run stickyNav*/
window.onscroll = function(){stickyNav()};

/*Be able to reference navb in Javascript */
var navb = document.getElementById("navb");

/*navb's offset position to referece */
var sticky = navb.offsetTop;

/*Monitors user scrolling. If user scrolls down a size greater than navb, make navb stick. Else unstick it. */
function stickyNav()
{
  if(window.pageYOffset >= sticky)
  {
    navb.classList.add("sticky");
  }
  else
  {
    navb.classList.remove("sticky");
  }
}

var questionBank = ["What movie am I from?", "What character do I play?", "What is my real name?","Did I win an award starring in this role?", "Am I still alive?"];

//var answerBank = ["Training Day", "Alonzo Harris", "Denzel Washington", "yes"];

var tmp = '';
var result = 0;

/*quiz for user using prompts */
var tmp = '';
function questionFunction(question, answer, tmp)
{
  tmp = prompt(question);
  if(tmp == '')
  {
    while(tmp == '')
    {
      tmp = prompt(question);
    }
  }
  else
  {
    answer.push(tmp);
    console.log("user input: "+tmp);
  }
}
let usrAnswers = [];
for(i=0;i < 5; i++)
{
  questionFunction(questionBank[i], usrAnswers[i],tmp)
}
/*for(i=0; i < 5; i++)
{
  if(questionBank[i].toLowerCase() === usrAnswers[i].toLowerCase())
  {
    result++;
  }
}

/*function daResults()
{
  let answerBank = [];
  for(var i = 0;i < questionBank.length; i++)
  {
    daGame(questionBank[i], answerBank[i], tmp);
    if(questionBank[i] === answerBank[i].toLowerCase())
    {
      result++;
    }
  }
}
/*document.getElementById('result').innerHTML = "These are your results out of "+ questionBank.length + ": " + result; */