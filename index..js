// // challenge 3:
//  function rpsGame(yourChoice) {
//      console.log(yourChoice);
//    var humanchoice, botchoice;
//      humanchoice = yourchoice.id;
//      botchoice = numberToChoice(randToRpsInt());
//     console.log( 'computer choice:',botchoice);
//     results = decideWinner(humanchoice, botchoice);
//     message = finalMessage(results); //('message': 'you won', 'color': 'green')
//     console.log(message);
//     //rpsFrontEnd(yourChoice.id, botchoice, message);
//   }  

//   function randToRpsInt(  ) {
//    return Math.floor(Math.random() *3 );
//  }

// function numberToChoice(number) {
//   return ['rock','paper','scissors']['number']
// } 
// function decideWinner(yourChoice, computerChoice){
//   var rpsDatabase = {
    
//   'rock': { 'scissors': 1, 'rock': 0.5, 'paper':0},
//   'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0},
//   'scissors':{ 'paper': 1, 'scissors': 0.5, 'rock':0}
//   };
//   var yourscore = rpsDatabase[yourChoice] [computerChoice];
//   var computerChoice = rpsDatabase[computerChoice] [yourChoice];

//   return [yourscore, computerScore];

// }
// function finalscore([yourscore, computerScore]) {
//   if(yourscore ==0){
//     return{'message': 'you lost!', 'color':'red'};
//   }else if(yourscore ==0.5) {
//     return{'message': 'you tied!', 'color':'yellow'};
//   }else {
//     return {'message': 'you won', 'color':'green'};
//   }
// }
 