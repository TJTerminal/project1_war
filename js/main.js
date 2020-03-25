/*----- constants -----*/
// this will hard code deck creation
const deck = [
    {value: 2, face: 'd02'},
    {value: 2, face: 'c02'},
    {value: 2, face: 's02'},
    {value: 2, face: 'h02'},
    {value: 3, face: 'd03'},
    {value: 3, face: 'c03'},
    {value: 3, face: 's03'},
    {value: 3, face: 'h03'},
    {value: 4, face: 'd04'},
    {value: 4, face: 'c04'},
    {value: 4, face: 's04'},
    {value: 4, face: 'h04'},
    {value: 5, face: 'd05'},
    {value: 5, face: 'c05'},
    {value: 5, face: 's05'},
    {value: 5, face: 'h05'},
    {value: 6, face: 'd06'},
    {value: 6, face: 'c06'},
    {value: 6, face: 's06'},
    {value: 6, face: 'h06'},
    {value: 7, face: 'd07'},
    {value: 7, face: 'c07'},
    {value: 7, face: 's07'},
    {value: 7, face: 'h07'},
    {value: 8, face: 'd08'},
    {value: 8, face: 'c08'},
    {value: 8, face: 's08'},
    {value: 8, face: 'h08'},
    {value: 9, face: 'd09'},
    {value: 9, face: 'c09'},
    {value: 9, face: 's09'},
    {value: 9, face: 'h09'},
    {value: 10, face: 'd10'},
    {value: 10, face: 'c10'},
    {value: 10, face: 's10'},
    {value: 10, face: 'h10'},
    {value: 11, face: 'dJ'},
    {value: 11, face: 'cJ'},
    {value: 11, face: 'sJ'},
    {value: 11, face: 'hJ'},
    {value: 12, face: 'dQ'},
    {value: 12, face: 'cQ'},
    {value: 12, face: 'sQ'},
    {value: 12, face: 'hQ'},
    {value: 13, face: 'dK'},
    {value: 13, face: 'cK'},
    {value: 13, face: 'sK'},
    {value: 13, face: 'hK'},
    {value: 14, face: 'dA'},
    {value: 14, face: 'cA'},
    {value: 14, face: 'sA'},
    {value: 14, face: 'hA'}
]


const player1 = null;
const player2 = null;



/*----- app's state (variables) -----*/
let player1hand = [];
let player2hand = [];


/*----- cached element references -----*/
const fightButton = document.getElementById('fight-button');
const resetButton = document.getElementById('reset-button');

/*----- event listeners -----*/
fightButton.addEventListener('click', flipCard);
resetButton.addEventListener('click', resetClick);


/*----- functions -----*/

// shuffle, split into 2, compare, tally up

function initialize() {
    shuffle()
    splitCards()

}

// create a deck
// function createDeck() {
//     let deck = [];
//     deck.length = 0;
//     let card = (cardTypes, cardValues) => {
//         this.cardTypes: type;
//         this.cardValues: value;
//     }
//     // create 52 cards using 2 for each loop
//     // loop the cardTypes or cardValues first
//     cardTypes.forEach(cardTypes => {
//         cardValues.forEach(cardValues =>{
//             // push each card object into deck array
//             deck.push(new card(cardTypes, cardValues));
//         })
//     })
//     console.log(deck);
// }

// shuffle the deck
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

// split the shuffled deck into half
function splitCards(deck) {
    var i = 0;
    while(i != deck.length) {
        player1hand.push(deck[i]);
        player2hand.push(deck[i + 1]);
        i += 2;
    }
    
}

function render () {
    // loop through each hand and create a div and append it to DOM
    //for (i = 0; i < deck.length; i++) {
        // append
//        document.getElementById('deck').append()

  //  }

}

function flipCard(event) {
    console.log(event);
    // render();

    // console.log(document.getElementById('deck'));
}

function resetClick(event) {
    console.log(event);
    location.reaload();
}






/*----- PSEUDOCODES -----*/

// At start, initialize 

//THE DEAL
//1.) Shuffle and civide the 52 cards deck evenly between players


//2.) Each player places their stack of cards face down, in front of them. Anyone can go first.


//THE PLAY
//3.) Each player turns up a card at the same time. Ace is highest and the 2 is lowest.


//4.) If the cards are the same rank, it is War: Each player turns up one card face down and one card face up.
// if player 1 cards === player 2 cards, then play War function



//5.) Player with higher card takes BOTH cards and puts them, face down, on BOTTOM of his deck.
// The player with the higher cards takes both piles.
// if player 1 cards > player 2 cards, player 1 takes both and vice versa

// If the turned-up cards are again the same rank, each player places another card face down and turns another card face up.

// The player with the higher card takes all 10 cards, and so on.

//HOW TO KEEP SCORE
//The game ends when one player has won all the cards.


initialize();