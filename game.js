const getDamage = () => {
  return Math.floor(Math.random() * 5) + 1;   
}


const startCombat = (player) => {
  const grant = "Almighty Grant";
        
  let playerHealth = 40;
  let grantHealth = 10;
  let win = 0;
  
  
  while (playerHealth > 0 && win < 3) {
    
    let attack = prompt('hit or end?');

    playerHealth -= getDamage();
    grantHealth -= getDamage();

    if (attack === 'hit' && win < 3) {
      
      console.log(`${player}'s health is ${playerHealth}`);
      console.log(`${grant}'s health is ${grantHealth}`);     

      if (grantHealth <= 0){
        win++;
        grantHealth = 10;
        if(win === 3){
          console.log(`${player} WINS.`);
        } else{
              console.log(`${player} defeated ${grant}. ${player} has ${win} out of 3 wins.`);
          }
      }
      if (playerHealth <= 0) {
        console.log(`${grant} WINS.`);
      }

    }else{
      console.log('GAME OVER');
      return;
    }
  }
}

const startGame = () => {
  let choice = prompt("Would you like to play a game? Enter: Y or N");   
    if (choice === "Y") {
      const player = prompt("Enter your name.");
      startCombat(player);
    } else{
      console.log('Your loss');
    }
}
startGame();
