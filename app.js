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
var questionBank = ["What branch of the military did I serve?", "What command was I at?", "What was the acronym of the system I worked on?","What was my job title?", "What is my favorite color?"];

var answerBank = ["Navy", "USS Makin Island", "SSDS", "Network Technician","Green"];

var usrAns = [];
var buttonClick = document.getElementById('game');
buttonClick.onclick = function() {daGame()};
function daGame()
{
  var tmp2='';
  var tmp3='';
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
    tmp2 = tmp.toLowerCase();
    tmp3 = answerBank[i].toLowerCase();
    if(tmp2 === tmp3)
    {
      results++;
      console.log("Iteration "+i+": "+results);
      console.log("(in if: Comparison of " + tmp2 + "and " + tmp3);
    }
    else
    {
      results+=0;
      console.log("Iteration "+i+": "+results);
      console.log("(in else: Comparison of " + tmp.toLowerCase + "and " + answerBank[i]);
    }

  }
  window.location.href = "./index.html";
  alert("yay");
  alert("You scored " + results+" out of "+ questionBank.length);
}