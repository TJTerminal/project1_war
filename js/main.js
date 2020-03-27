/*----- constants -----*/
// this will hard code deck creation
const deck = [
    {value: 2, suit: 'diamonds', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 2, suit: 'clubs', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 2, suit: 'spades', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 2, suit: 'hearts', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 3, suit: 'diamonds', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 3, suit: 'clubs', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 3, suit: 'spades', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 3, suit: 'hearts', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 4, suit: 'diamonds', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 4, suit: 'clubs', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 4, suit: 'spades', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 4, suit: 'hearts', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 5, suit: 'diamonds', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 5, suit: 'clubs', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 5, suit: 'spades', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 5, suit: 'hearts', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 6, suit: 'diamonds', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 6, suit: 'clubs', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 6, suit: 'spades', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 6, suit: 'hearts', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 7, suit: 'diamonds', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 7, suit: 'clubs', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 7, suit: 'spades', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 7, suit: 'hearts', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 8, suit: 'diamonds', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 8, suit: 'clubs', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 8, suit: 'spades', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 8, suit: 'hearts', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 9, suit: 'diamonds', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 9, suit: 'clubs', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 9, suit: 'spades', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 9, suit: 'hearts', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 10, suit: 'diamonds', img:`css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 10, suit: 'clubs', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 10, suit: 'spades', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 10, suit: 'hearts', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 11, suit: 'diamonds', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 11, suit: 'clubs', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 11, suit: 'spades', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 11, suit: 'hearts', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 12, suit: 'diamonds', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 12, suit: 'clubs', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 12, suit: 'spades', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 12, suit: 'hearts', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 13, suit: 'diamonds', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 13, suit: 'clubs', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 13, suit: 'spades', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 13, suit: 'hearts', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 14, suit: 'diamonds', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 14, suit: 'clubs', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 14, suit: 'spades', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`},
    {value: 14, suit: 'hearts', img: `css/card-deck/images/${this.suit}/${this.suit}-${this.value}.svg`}
]

const player1 = null;
const player2 = null;

/*----- app's state (variables) -----*/
let player1Deck = [];
let player2Deck = [];
let player1Hand = [];
let player2Hand = [];
let p1WinDeck = [];
let p2WinDeck = [];
let tempP1Idx;
let tempP2Idx;
let player1Score = null;
let player2Score = null;

/*----- cached element references -----*/
const fightButton = document.getElementById('fight-button');
const resetButton = document.getElementById('reset-button');
let cardShown1 = document.getElementById('cardShown1');
let cardShown2 = document.getElementById('cardShown2');
let player1WinMessage = document.getElementById('message');
let player2WinMesssage = document.getElementById('message');
let warMessage = document.getElementById('message');
let player1CardsLeft = document.getElementById('deck1');
let player2CardsLeft = document.getElementById('deck2');
let addPlayer1Score = document.getElementById('score1');
let addPlayer2Score = document.getElementById('score2');

/*----- event listeners -----*/
fightButton.addEventListener('click', flipCard);
resetButton.addEventListener('click', resetClick);

/*----- functions -----*/

// shuffle, split into 2, compare, tally up
// when the page loads, the deck should be shuffled and split into 2 and ready to play
function initialize() {
    shuffle(deck);
    splitDeck(deck);
}

// shuffle the deck upon loading
function shuffle(deck) {
    for (var i = 0; i < deck.length; i++) {
        let randomDeck1 = Math.floor(Math.random() * deck.length);
        let randomDeck2 = Math.floor(Math.random() * deck.length);
        let temp = deck[i];

        deck[randomDeck1] = deck[randomDeck2];
        deck[randomDeck2] = temp;
    }
    console.log(deck);
}

// split the shuffled deck into half upon loading
function splitDeck(deck) {
    var i = 0;
    while(i != deck.length) {
        player1Deck.push(deck[i]);
        player2Deck.push(deck[i + 1]);
        i += 2;
    }
}

// take cards from the top of the deck and show face up when fight button is pressed
function flipCard() {
   player1Hand.push(player1Deck[0]);
   player2Hand.push(player2Deck[0]);
   player1Deck.shift();
   player2Deck.shift();
   cardShown1.setAttribute('src', `${player1Hand[0].img}`);
   cardShown2.setAttribute('src', `${player1Hand[0].img}`);
   console.log('p1hand', player1Hand[0]);
   console.log('p2hand', player2Hand[0]);
   compareCards();
}

// compare the face up cards
function compareCards() {
    if (player1Hand[0].value === player2Hand[0].value) {
        //if values are equal, call war
        war();
        // when calling war, flip new card
        flipCard();
    } else if (player1Hand[0].value > player2Hand[0].value) {
        // push current cards into winner's separate deck
        p1WinDeck.push(player1Hand.pop());
        p1WinDeck.push(player2Hand.pop());
        console.log('p1WinDeck', p1WinDeck);
        // add a point if won
        player1Score += 1;
        addScore();
        player1WinMessage.innerHTML = 'Player 1 Wins!';
    } else {
        p2WinDeck.push(player1Hand.pop());
        p2WinDeck.push(player2Hand.pop());
        console.log('p2WinDeck', p2WinDeck);
        player2Score += 1;
        addScore();
        player2WinMesssage.innerHTML = 'Player 2 Wins!';
    }
}

function war() {
    //warMessage.innerHTML("It's War!");
    // flip another card
    player1Hand.push(player1Deck[0]);
    player2Hand.push(player2Deck[0]);
    player1Deck.shift();
    player2Deck.shift();
    cardShown1.setAttribute('src', `${player1Hand[0].img}`);
    cardShown2.setAttribute('src', `${player1Hand[0].img}`); 
    // compare the flipped cards
    if (player1Hand[0].value === player2Hand[0].value) {
        // when calling war, flip new card
        flipCard();
    } else if (player1Hand[0].value > player2Hand[0].value) {
        // push current cards into winner's separate deck
        p1WinDeck.push(player1Hand.pop());
        p1WinDeck.push(player2Hand.pop());
        console.log('p1WinDeck', p1WinDeck);
        // add a point if won
        player1Score += 1;
        addScore();
        player1WinMessage.innerHTML = 'Player 1 Wins!';
    } else {
        p2WinDeck.push(player1Hand.pop());
        p2WinDeck.push(player2Hand.pop());
        console.log('p2WinDeck', p2WinDeck);
        player2Score += 1;
        addScore();
        player2WinMesssage.innerHTML = 'Player 2 Wins!';
    }
    // update score
    addScore();
}

function resetClick(event) {
    console.log(event);
    location.reaload();
}

function addScore() {
    addPlayer1Score.innerHTML = 'SCORE: ' + player1Score;
    addPlayer2Score.innerHTML = 'SCORE: ' + player2Score;
}

function updateCardsLeft() {
    player1CardsLeft.innerHTML = 'CARDS LEFT: ' + player1Deck.length;
    player2CardsLeft.innerHTML = 'CARDS LEFT: ' + player2Deck.length;
}

function declareWinner() {
    let gameEndMessage = document.getElementById('message');
    if (player1Score > player2Score && player1Deck.length === 0 && player2Deck.length === 0) {
        gameEndMessage.innerHTML = 'Game Over: Player 1 Wins';
    } else if (player2Score > player1Score && player1Deck.length === 0 && player2Deck.length === 0) {
        gameEndMessage.innerHTML = 'Game Over: Player 2 Wins';
    }
}

// reload the page if reset button is clicked
function resetClick() {
    location.reload();
}

initialize();