let messageEl= document.getElementById("message-el");
let sumEl= document.getElementById("sum-el");
// or this can be used let sumEl= document.querySelector("#sum-el");
let cardsEl= document.getElementById("cards-el");
let cards=[];
let sum= 0;
let hasBlackJack = false;
let isAlive = false;
let message="";
let player= {
    name : "You got",
    chips : 200
}
let playerEl=document.getElementById("player-el");
function getrandomcard() {
 let randomnum = Math.floor(Math.random()*13) +1 ;
if (randomnum===1)
     return 11;
else if (randomnum>10)
     return 10;
else
     return randomnum;
 }
    //logic is?
function startgame(){
let isAlive = true;
let firstCard = getrandomcard();
let secondCard= getrandomcard();
cards=[firstCard,secondCard];
sum = firstCard+secondCard;
    rendergame();
}
function rendergame(){
    cardsEl.textContent= "Cards: ";
   for(let i=0 ; i< cards.length;i++)
   {
       cardsEl.textContent+=cards[i] +" ";
   }
   // cardsEl.textContent="Cards: "+ cards[0]+ " "+cards[1];
   sumEl.textContent= "sum: " ;
   sumEl.textContent+=sum;
    if (sum <=20)
   {
    message= "Do you want to draw a new card?"
    hasBlackJack=false;
    isAlive=true;
   }
else if(sum===21)
   {
    message= "Wohoo ! you have got Blackjack!"
    hasBlackJack = true;
    playerEl.textContent=player.name+": $" + player.chips;
   }
else {
    message= "You are out of the game"
    isAlive=false;
    }
messageEl.textContent=message;
}

function newcard(){
    if(isAlive===true && hasBlackJack===false){
    let card=getrandomcard();
    cards.push(card);
    sum+=card;
    rendergame();
    }
}