<script>

  var Coolgame = function(){
    this.wins = 0;
    this.startGame = function() {
      playoffThreshold = 85;
      console.log(playoffThreshold);
      guess = prompt('Out of 162 games How many will the Seattle Mariners win in 2015?');
      };
    this.checkAnswer = function() {
      reGuess = function ()  {
      var message = alert('C\'mon, they can win more than 70.  Try again.');
      guess = prompt('How many games will the Seattle Mariners win in 2015?');
      playoffThreshold = 85;
    }
      while (guess<70) {
        guess = reGuess();
      if (guess >= 70) {
        break;
      } else {
        reGuess();
        }
      }
      if (guess >= playoffThreshold) {
      message = 'Mariners should be a playoff team';
     } else {
      message = 'Does not look like the Mariners will be a playoff team';
      }
      //alert(message);
    }
  }

var game1 = new Coolgame();
    game1.startGame();
    game1.checkAnswer();

var marinersWin = document.getElementById('marinerswin');
marinersWin.innerHTML = message;

</script>