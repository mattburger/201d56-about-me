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

var tmp = '';
var results = 0;
var questionBank = ["What movie am I from?", "What character do I play?", "What is my real name?","Did I win an award starring in this role?", "Am I still alive?"];

var answerBank = ["Training Day", "Alonzo Harris", "Denzel Washington", "yes"];

var usrAns = [];
var buttonClick = document.getElementById('game');
buttonClick.onclick = function () {daGame()};
function daGame()
{
  for(var i = 0; i < questionBank.length; i++)
  {
    tmp = prompt(questionBank[i]);
    if(tmp === '')
    {
      while(tmp === '')
      {
        tmp = prompt(questionBank[i])
      }
    }
    console.log("Question " + i + " answer: "+tmp);
    usrAns.push(tmp);
    if(tmp === answerBank[i])
    {
      results++;
    }

  }
  window.location.href = "./index.html";
  alert("yay");
  alert("You scored " + results+" out of "+ questionBank.length);
}
/*document.getElementById('labme').innerHTML = "These are your results out of "+ questionBank.length + ": " + results;*/