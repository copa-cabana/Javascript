'use strict';


var scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('.btn--roll').addEventListener('click', function() {

    if (gamePlaying) {

       var dice = Math.floor(Math.random() * 6) + 1 ;

        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current--' + activePlayer).textContent = roundScore;
        } else {
            //Next Player
            nextPlayer();
            
        }
    }
    
});

document.querySelector('.btn--hold').addEventListener('click', function() {

    if (gamePlaying) {

        //Adding Current Score to GLobal Score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer]

        //Check if the player won the game

        if (scores[activePlayer] >= 20) {
            document.querySelector('#name--' + activePlayer).textContent = 'WINNER!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player--' + activePlayer ).classList.add('player--winner');
            document.querySelector('.player--' + activePlayer ).classList.remove('player--active');

            gamePlaying = false;
        }else {
            //next Player

            nextPlayer();
        }
    }

});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;
        roundScore = 0 ;

        document.getElementById('current--0').textContent = '0';
        document.getElementById('current--1').textContent = '0';

        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');

        // document.querySelector('.player--0').classList.remove('player--active');
        // document.querySelector('.player--1').classList.add('player--active');

        document.querySelector('.dice').style.display = 'none';
}


document.querySelector('.btn--new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;


    document.querySelector('.dice').style.display = 'none' ;

    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';
    document.getElementById('name--0').textContent = 'Player 1';
    document.getElementById('name--1').textContent = 'Player 2';
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
    


}
// var x = document.querySelector('#score--0').textContent;

// console.log(x);
