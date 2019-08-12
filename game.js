const startGame = () => {
  let choice = prompt("Would you like to play a game? Enter: Y or N");   
    if (choice === "Y") {      
          const player = prompt("Enter your name.");
          const grant = "Almighty Grant";
        
           let playerHealth = 40;
          let grantHealth = 10;

            let decreaseHealth = () => {
              playerHealth -= Math.floor(Math.random() * 2) +1;
              grantHealth -= Math.floor(Math.random() * 2) +1;
            }


       
          let win = 0;

          while (playerHealth > 0 && win <3) {
              decreaseHealth();
          
              console.log(`${player}'s health is ${playerHealth}`);
              console.log(`${grant}'s health is ${grantHealth}`);

              if (grantHealth <= 0){
              win++;
              grantHealth = 10;
               if(win === 3){
                  console.log(`${player} WINS.`);
                  // break;
                } else{
                    console.log(`${player} defeated ${grant}. ${player} has ${win} out of 3 wins.`);
                  }
            }
            if (playerHealth <= 0) {
              console.log(`${grant} WINS.`);
              // break;
            }
        }

      if (choice === "N") {
        console.log("Bye Bye.");
        // break;
      }
        
     
    }else{
      console.log('your lost')
    }
}

startGame();