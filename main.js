let theDeck = {
  theCards: [{
      cardName: "forest",
      cardNumber: 4
    },
    {
      cardName: "mountain",
      cardNumber: 4
    },
    {
      cardName: "lake",
      cardNumber: 4
    },
    {
      cardName: "plains",
      cardNumber: 4
    }
  ],
  cardTotal: 16,
  cardTypes: 4

};


function drawACard(aDeck) {
  let currentDraw = aDeck.theCards[Math.floor(Math.random() * aDeck.cardTypes)];
  if (currentDraw.cardNumber !== 0) {
    aDeck.cardTotal--;
    currentDraw.cardNumber--;
    let newTile = document.createElement('canvas');
    newTile.className = currentDraw.cardName;
    document.querySelector('.container').appendChild(newTile);
    return currentDraw.cardName;

  }
  else if(aDeck.cardTotal === 0){

  }
  else {
    drawACard(aDeck);
  }

}
let drawButton = document.createElement('button');
drawButton.addEventListener("click", function(){drawACard(theDeck)});
document.querySelector('header').appendChild(drawButton);


// while (theDeck.cardTotal > 0) {
//   console.log(drawACard(theDeck));
// }
