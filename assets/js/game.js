// //create all variables that contain game logic
//   //wins (number)
//   //losses (number)
//   //guessLeft (number)
//   //lettersAlreadyGuessed [array]
//   //computerChoice
//   //computerChoicesBank [array of alphabet]


//VARIABLECOMPUTERCHOICES
var computerChoicesBank = "abcdefghijklmnopqrstuvwxyz".split("");
//VARIABLES
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var userGuess;
var computerGuess
var lettersAlreadyGuessed = [];

//   //var computerchoicesbank = "abcdefghijklmopqrstuvwxyz".split("");
//       //creates array of 26




// //create variables that reference parts of page
//   //$wins (documentgetElementById("wins"))
//   //$losses
//   //guessesLeft
//   //usesrGuess
//   //computerGuess
//   //lettersAlreadyGuessed

//VARIABLEREFERENCES





// //start a new game
//   // //document.onkkeyup = function(event){
//   //   //run logic to check guess
//   // var compguess = compchoice[mathfloor(mathrando() *computer choices.length] ***new letter every key****
//   // }

//       //create function to start/rest game
//         //function newgame(){
//           reset game variables
//           // assign compter guess new random letter
//          reset letters guessed array
//           lettersalreadyguessed.length = 0;
            // reset number of guesse sback to 10
            // indicate new game has started
//         }
// 

function newGame() {
        guessesLeft = 10;
        lettersAlreadyGuessed = [];
        computerGuess = computerChoicesBank[Math.floor(Math.random() * computerChoicesBank.length)];
        console.log(computerGuess);
 }

 
document.onkeyup = function(){
       
        



        userGuess = event.key;
        lettersAlreadyGuessed.push(userGuess);
        console.log (lettersAlreadyGuessed);

        if (userGuess === computerGuess){
                        wins++;
                        newGame()
                }
         if (userGuess !== computerGuess){
                 guessesLeft--;
                 
                 
         }

         if (guessesLeft === 0) {
                 losses++;
                newGame()
         }
        



         document.getElementById("$wins").innerHTML = wins;
         document.getElementById("$losses").innerHTML = losses;
         document.getElementById("$guessesLeft").innerHTML = guessesLeft;
         document.getElementById("$lettersAlreadyGuessed").innerHTML = lettersAlreadyGuessed;
         document.getElementById("$userGuess").innerHTML = userGuess;




        
        
}


// logic to check guess document.oneyup = function(event){
//   run logic
//   capture user gueess iwth event.key
// if userguess===computerguess... you window  
//       increase wins by 1
//       start newgame()
//     else
//       decrement guesses left guesses--

//       if guesses===0
//         increases losses by 1
//         run newgame()
// }
        // add letter guessed to letters guessed array using .push

// })
          // display info to page
          //   userguess
          //   computer guess
          //   guessesleft

          // run new Game() to start game for first time
          newGame();