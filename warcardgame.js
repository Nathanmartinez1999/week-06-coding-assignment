//this is my week 06 coding asighnment create a game of war


class player {
    constructor(name, deck) {
        this.name = name;
        this.deck = deck;
        this.totalPoints = 0;
    }
}

//game will shuffle the deck of cards and split it between 
//the two players evenly. each player should recive 26 cards

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];

    }
    return array;
}
const cardValueKey = {
    jack: 11,
    queen: 12,
    king: 13,
    ace: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
}
const mainDeck = ['king', 'king', 'king', 'king', 'queen', 'queen', 'queen', 'queen',
    'jack', 'jack', 'jack', 'jack', 10, 10, 10, 10, 9, 9, 9, 9, 8, 8, 8, 8,
    7, 7, 7, 7, 6, 6, 6, 6, 5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 3, 2, 2, 2, 2, 'ace', 'ace', 'ace', 'ace'];
console.log('New Deck off cards not shuffled:' + mainDeck);
console.log('the line ablove shows the full set of cards in a deck not shuffled but in order of highest card to lowest:');

shuffle(mainDeck);
//console.log(mainDeck);

//game will shuffle the deck of cards and split them evenly between both players
console.log('the code below will split the deck in half for both players:')
const player1 = new player('paul McCartney', []);
player1.deck = mainDeck.slice(0, 26);

const player2 = new player('john lennon', []);
player2.deck = mainDeck.slice(26, 52);

console.log(player1.deck);
console.log(player2.deck);

//console.log will start to compare the results of each round
//Each player will be rewarded a point at the end of each time they draw a card

playerOneCard = 0;
playerTwoCard = 0;
player1.score = 0;
player2.score = 0;

{
    for (let i = 0; i < player1.deck.length; i++) {
        playerOneCard = player1.deck[i];
        console.log('Pauls card delt:' + playerOneCard);
        playerTwoCard = player2.deck[i];
        console.log('Johns card delt:' + playerTwoCard);

        if (cardValueKey[playerOneCard] > cardValueKey[playerTwoCard]) {
            player1.score++;

        } else if (cardValueKey[playerTwoCard] > cardValueKey[playerOneCard]) {
            player2.score++;
        } else { }



        console.log('==========score at end of each round=========');
        console.log('Paul:' + player1.score);
        console.log('John:' + player2.score);
        console.log('==============================================');
    }

    console.log("======================================")
    console.log('final score for Paul:' + player1.score);
    console.log('final score for John:' + player2.score);

    if (player1.score > player2.score) {
        alert('paul is the winner of this game of War!!!');
    } else if (player2.score > player1.score) {
        alert('John is the winner of this game of war!!!');
    } else
        alert('The game ends in a tie Please play agin to declair a winner!');
}
