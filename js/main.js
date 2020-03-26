/*----- constants -----*/
// this will hard code deck creation something
const deck = [
    {value: 2, face: 'd02', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 2, face: 'c02', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 2, face: 's02', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 2, face: 'h02', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 3, face: 'd03', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 3, face: 'c03', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 3, face: 's03', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 3, face: 'h03', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 4, face: 'd04', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 4, face: 'c04', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 4, face: 's04', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 4, face: 'h04', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 5, face: 'd05', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 5, face: 'c05', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 5, face: 's05', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 5, face: 'h05', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 6, face: 'd06', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 6, face: 'c06', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 6, face: 's06', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 6, face: 'h06', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 7, face: 'd07', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 7, face: 'c07', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 7, face: 's07', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 7, face: 'h07', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 8, face: 'd08', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 8, face: 'c08', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 8, face: 's08', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 8, face: 'h08', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 9, face: 'd09', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 9, face: 'c09', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 9, face: 's09', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 9, face: 'h09', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 10, face: 'd10', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 10, face: 'c10', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 10, face: 's10', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 10, face: 'h10', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 11, face: 'dJ', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 11, face: 'cJ', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 11, face: 'sJ', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 11, face: 'hJ', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 12, face: 'dQ', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 12, face: 'cQ', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 12, face: 'sQ', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 12, face: 'hQ', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 13, face: 'dK', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 13, face: 'cK', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 13, face: 'sK', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 13, face: 'hK', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 14, face: 'dA', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 14, face: 'cA', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 14, face: 'sA', img: 'css/card-deck/images/backs/blue.svg'},
    {value: 14, face: 'hA', img: 'css/card-deck/images/backs/blue.svg'}
]


const player1 = null;
const player2 = null;




/*----- app's state (variables) -----*/
let player1Deck = [];
let player2Deck = [];
let player1Hand = [];
let player2Hand = [];


/*----- cached element references -----*/
const fightButton = document.getElementById('fight-button');
const resetButton = document.getElementById('reset-button');

/*----- event listeners -----*/
fightButton.addEventListener('click', flipCard);
resetButton.addEventListener('click', resetClick);

/*----- functions -----*/

// shuffle, split into 2, compare, tally up
// when the page loads, the deck should be shuffled and split into 2 and ready to play
function initialize() {
    shuffle(deck)
    splitDeck(deck);

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
    // const cardObject = {
    //     imageClubs: 'css/card-deck/images/clubs',
    //     imageDiamonds: 'css/card-deck/images/diamonds',
    //     imageHearts: 'css/card-deck/images/hearts',
    //     imageSpades: 'css/card-deck/images/spades'
    // }

    // let cardImage = cardObject.imageClubs

   // grab first element in player1 and player2 deck
   player1Hand.push(player1Deck[0]);
   player2Hand.push(player2Deck[0]);
   // use DOM manipulation to render the cards on the cardShown elem
   let cardShown = document.getElementById('cardShown1');
   let cardShown2 = document.getElementById('cardShown2');
   // let random card image from the deck show when fight button is clicked
   let randomImage = deck[Math.floor(Math.random() * deck.length)].face;
   let randomImage2 = deck[Math.floor(Math.random() * deck.length)].face;


   cardShown.setAttribute('class', 'card ' + randomImage);
   cardShown2.setAttribute('class', 'card ' + randomImage2);
//    cardShown.setAttribute('src', cardImage);

   console.log(player1Deck[0]);
   console.log(player2Deck[0]);
}

function render () {
    // loop through each hand and create a div and append it to DOM
    //for (i = 0; i < deck.length; i++) {
        // append
//        document.getElementById('deck').append()

  //  }

}

function resetClick(event) {
    console.log(event);
    location.reaload();
}


    /**
     * 
     * check win
     * write a conditional:
     * if player1Hand > player2Hand
     * then pop both hands
     * and push to player1winningdeck
     * 
     */






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