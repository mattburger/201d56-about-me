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

/*random number generator from 1-25 stored in variable numGuess.
  Usee as the 6th question for user to guess a number*/
/*Learned from w3schools */
var numGuess = Math.floor((Math.random() * 25) + 1);

var currentAns = ''; //user's answer that was just inputed
var results = 0; //keeps track of the # of right answers

/*array holding the questions to ask the user */
var questionBank = ["Was I in the army?", "Did I serve onboard the USS Makin Island?", "The system I worked on was SSDS?","I was NOT a network technician?", "I told you what my favorite color was?"];

/*array holding the answer to each question. (consider hashtable in future) */
var answerBank = ["No", "yes", "yes", "no","no",];

/*array to store user answers */
var usrAns = [];

/*assign the game button to buttonClick. Make it execute daGame() on click */
var buttonClick = document.getElementById('game');
buttonClick.onclick = function() {daGame()};

function daGame()
{
  var lowerCaseUsrAns='';
  var lowerCaseAns='';
  for(var i = 0; i < questionBank.length; i++)
  {
    currentAns = prompt(questionBank[i]);
    if(currentAns === '')
    {
      while(currentAns === '')
      {
        currentAns = prompt(questionBank[i])
      }
    }
    console.log("Question " + i + " answer: "+currentAns);
    usrAns.push(currentAns);
    lowerCaseUsrAns = currentAns.toLowerCase();
    lowerCaseAns = answerBank[i].toLowerCase();
    if(lowerCaseUsrAns === lowerCaseAns)
    {
      results++;
      console.log("Iteration "+i+": "+results);
      console.log("(in if: Comparison of " + lowerCaseUsrAns + "and " + lowerCaseAns);
    }
    else
    {
      results+=0;
      console.log("Iteration "+i+": "+results);
      console.log("(in else: Comparison of " + currentAns.toLowerCase + " and " + answerBank[i]);
    }
  }

  /*random number generator from 1-25 stored in variable numGuess.
  Use as the 6th question for user to guess a number*/
  /*Learned from w3schools */
  var numGuess = Math.floor((Math.random() * 25) + 1);
  console.log("captured value from random number generator: " + numGuess);
  var usrGuess = prompt("Guess a number between 1 - 25: ");
  console.log("user guess as string: "+usrGuess);

  usrGuess = parseInt(usrGuess);//convert user input from string to int
  console.log("user guess after int conversion: " + usrGuess);//make sure our value makes sense
  
  var totalQues = questionBank.length + 1; //account for number question
  if(usrGuess === numGuess)
  {
    results++;
    console.log("in the guess quesiton if; results incremented");
  }
  else
  {
    results += 0;
    console.log("in the guess question else; results not incremented");
  }
  window.location.href = "./index.html";
  alert("yay");
  alert("You scored " + results+" out of "+ totalQues);
}