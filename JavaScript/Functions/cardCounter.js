let count = 0;

function cardCounter(card) {
   if (card == 2 || card == 3 || card == 4 || card == 5 || card == 6) {
      count++;
   }
   if (card == 10 || card == "J" || card == "Q" || card == "K" || card == "A") {
      count--;
   }
   const getResult = (num) => num <= 0 ? "Hold" : "Bet"; 
   return `${count} ${getResult(count)}`
}