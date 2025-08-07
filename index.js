let scoreStr = localStorage.getItem('Score');
    let score;
    resetScore(scoreStr);

    function resetScore(scoreStr){
      score = scoreStr ? JSON.parse(scoreStr) : {
      win: 0,
      lost: 0,
      tie: 0,
    };  

      score.displayScore = function displayScore() {  //Method shorthand
          return `Score: Won = ${score.win}, Lost = ${score.lost}, Tie = ${score.tie}`;
      };

      showResult();

    }
   
    function generateComputerChoice() {
      let randomNumber = Math.random() * 3;
      if (randomNumber <= 1) {
        return 'Rock';
      } else if (randomNumber <= 2) {
        return 'Paper';
      } else {
        return 'Scissor';
      }
    }

    function getResult(userMove, computerMove){
      if (userMove === 'Rock'){
        if (computerMove === userMove) {
          score.tie ++;
          return 'It is a tie';
        } else if (computerMove === 'Scissor') {
            score.win ++;
            return 'User won!';
        } else {
            score.lost ++;
            return 'Computer won!';
        }
      }
      else if (userMove === 'Paper'){
        if (computerMove === userMove) {
            score.tie ++;
            return 'It is a tie';
        } else if (computerMove === 'Scissor') {
            score.lost ++;
            return 'Computer won!';
        } else {
            score.win ++;
            return 'User won!';
        }
      }
      else{
        if (computerMove === userMove) {
            score.tie ++;
            return 'It is a tie';
        } else if (computerMove === 'Rock') {
            score.lost ++;
            return 'Computer won!';
        } else {
            score.win ++;
            return 'User won!';
        }
      }     
    }

    function showResult(userMove, computerMove, result){
      localStorage.setItem('Score', JSON.stringify(score));


      document.querySelector('#User_move').innerText = userMove !== undefined ? `You have chosen ${userMove}`
      : '';

      document.querySelector('#Computer_move').innerText = computerMove !== undefined ? `Computer has chosen ${computerMove}` : '';

      document.querySelector('#Result').innerText = result ? result : '';

      document.querySelector('#Score').innerText = score.displayScore();

      //computerMove !== undefined can be given or it need not specify 'undefined'
      // console.log(score);
    }

    function toggleTheme() {
      document.body.classList.toggle('light');
    }