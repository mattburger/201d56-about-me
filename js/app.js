'use strict';



/*Learned from w3schools */
var usrName = '';

var currentAns = ''; //user's answer that was just inputed
var results = 0; //keeps track of the # of right answers

/*array holding the questions to ask the user */
var questionBank = ['Was I in the army?', 'Did I serve onboard the USS Makin Island?', 'The system I worked on was SSDS?','I was NOT a network technician?', 'I told you what my favorite color was?'];

/*array of state abbrevations as answers for question 7 */
var ansStates = ['CA','IL','IN','GA','KS','KY'];

/*array holding the answer to each question. (consider hashtable in future) */
var answerBank = ['No', 'yes', 'yes', 'no','no',];

/*array to store user answers */
var usrAns = [];

/*assign the game button to buttonClick. Make it execute daGame() on click */
var buttonClick = document.getElementById('game');

buttonClick.onclick = function() { daGame(); };

function daGame()//from lab 2
{
  /*Retrieve user's first name */
  usrName = prompt('What is your first name? ');
  alert('Hello, ' + usrName + '! Enjoy the quiz!');

  var lowerCaseUsrAns='';// var to store user's ans in lower case
  var lowerCaseAns=''; //var to store actual ans in lower case
  for(var i = 0; i < questionBank.length; i++)
  {
    currentAns = prompt(questionBank[i] + ' Yes or no: ');
    while(currentAns === '')
    {
      currentAns = prompt(questionBank[i]);
    }
    console.log('Question ' + i + ' answer: '+currentAns);
    usrAns.push(currentAns);
    lowerCaseUsrAns = currentAns.toLowerCase();//makes user ans lower case
    lowerCaseAns = answerBank[i].toLowerCase();//makes actual ans lower case

    /*compare user ans to actual answer */
    if(lowerCaseUsrAns === lowerCaseAns || lowerCaseUsrAns[0] === lowerCaseAns[0])
    {
      console.log('ANSWER SUBSTRING: '+ lowerCaseUsrAns[0] );
      results++;
      alert('Correct! ');
      console.log('Iteration ' + i + ': '+results);
      console.log('(in if: Comparison of ' + lowerCaseUsrAns + 'and ' + lowerCaseAns);
    }
    else
    {
      alert('Incorrect. The answer is: ' + answerBank[i]);
      console.log('Iteration ' + i + ': '+results);
      console.log('(in else: Comparison of ' + currentAns.toLowerCase + ' and ' + answerBank[i]);
    }
  }

  //set guess limit for question 6
  var numberOfGuesses = 4;

  /* Thanks to w3Schools. Random number generator from 1-25 stored in variable numGuess.
  Use as the 6th question for user to guess a number*/
  var numGuess = Math.floor((Math.random() * 25) + 1);
  console.log('captured value from random number generator: ' + numGuess);
  var usrGuess = '';
  //accounting for number question (question 6)
  var totalQues = questionBank.length + 1;
  while(usrGuess !== numGuess && numberOfGuesses > 0)
  {
    usrGuess = prompt('Guess how many Pokemon I caught last night (1 - 25) # of guees left (' + numberOfGuesses + '): ');
    usrGuess = parseInt(usrGuess);//convert user input from string to int
    console.log('user guess after int conversion: ' + usrGuess);//make sure our value makes sense

    numberOfGuesses--;
    if(usrGuess === numGuess)
    {
      console.log('number of guesses for number question: ' + numberOfGuesses);
      alert('Correct!');
      results++;
      console.log('in the guess quesiton if; results incremented');
      break;
    }
    else if(numberOfGuesses === 0)
    {
      alert('Nice tries! The answer was: ' + numGuess);
    }
    else
    {
      //Saurav's Edit: Giving hint to the user for lower or higher value
      if(numGuess>usrGuess){
        alert('Hint: Number is greater');
      }
      else{
        alert('Hint :Number is lower');
      }
      console.log('number of gueses for number question: ' + numberOfGuesses);
      alert('Incorrect. Keepy trying!');
      console.log('in the guess question else; results not incremented');
    }
  }

  /*flag used to indicate there was a match between user state guess and stored answers*/
  var stateMatchFlag = 0; 

  ++totalQues; //increase the total number of questions
  var guessState = '/0';
  // var stateHolder = 'skipped_case';
  var guessTries = 0;
  var guessLimit = 6; 
  numberOfGuesses = 0;
  var stateHold = ''; //hold ansState[index] values
  while( (guessTries < guessLimit) && (stateMatchFlag !== 1 ))
  {
    numberOfGuesses = guessLimit - guessTries;
    guessState = prompt('Other than WA, guess a state I have lived in using state abbreviations (# of guesses left: ' + numberOfGuesses + '): ');

    console.log('number of guesses: '+numberOfGuesses);

    guessTries++;
    for(/*var*/i = 0; i < ansStates.length; i++)
    {
      guessState = guessState.toLowerCase();
      stateHold = ansStates[i].toLowerCase();
      //if(guessState === ansStates[i])
      if(guessState === stateHold)
      {
        stateMatchFlag = 1;
        console.log('Value in guessState: ' + guessState);
        console.log('Value in ansStates[i]: '+ansStates[i]);
      }
    }
    console.log('guess tries: ' + guessTries);

  }
  /*increase user's score if flag is triggered */
  if(stateMatchFlag > 0)
  {
    results++;
    alert('Correct! All possible answers: ' + ansStates);
  }

  else
  {
    alert('Incorrect. All possible answers: ' + ansStates);
  }

  //window.location.href = "./index.html"; //take back to homepage

  /*score of 5 or more gets a nice response */
  if(results >= 5)
  {
    alert(usrName +'! You scored ' + results + ' out of '+ totalQues + '. Good job!!');
  }
  /*score < 5 gets a more somber response */
  else
  {
    alert(usrName +'! You scored ' + results+' out of '+ totalQues + '. Better luck next time...');
  }
  window.location.href = './index.html'; //take back to homepage
}
