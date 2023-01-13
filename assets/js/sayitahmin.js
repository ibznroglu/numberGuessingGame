let randomNumber = 0;
      const btnGuess = document.querySelector(".btn-guess");
      const btnStart = document.querySelector(".btn-start");
      const numEl = document.querySelector("#txtNumber");
      const labelEl = document.querySelector("#lblResult");
      const health=document.querySelector("#health");
      let canEl = document.querySelector("#shot");
      const minRandomNumber = 1;
      const maxRAndomNumber = 100;
      canEl.value = 5;
      canEl.innerHTML = canEl.value;
      const start = () => {
        randomNumber = generateRandomNumber(minRandomNumber, maxRAndomNumber);
        btnGuess.style.display = "inline";
        btnStart.innerHTML = "Reset Game";
        labelEl.innerHTML = "";
        numEl.removeAttribute("disabled");
        numEl.focus();
        canEl.style.display = "inline";
        health.style.display = "inline";
        canEl.value = 5;
        canEl.innerHTML = canEl.value;
      };
      const reset = () => {
        btnGuess.style.display = "none";
        btnStart.innerHTML = "Start Game";
        numEl.setAttribute("disabled", "true");
      };
      const guess = () => {
        let num = Number(numEl.value);
        num = num || 0;
        /*
    if(!num){
        num = 0;
    }
    */
        if (num === randomNumber) {
          labelEl.innerHTML = "Congrats! You guessed the number";
          reset();
        } else if (num > randomNumber) {
          labelEl.innerHTML = "Your number is greater than the random number";
          canEl.innerHTML = canEl.value -= 1;
          healthBar();
        } else {
          labelEl.innerHTML = "Your number is lesser than the random number";
          canEl.innerHTML = canEl.value -= 1;
          healthBar();
        }
        numEl.value = "";
        numEl.focus();
      };
      numEl.addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
          guess();
        }
      });
      const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
      const healthBar = () => {
        if (canEl.value == 0) {
          labelEl.innerHTML = "Game Over";
          reset();
        }
      };
      //   const setShotIcons = (shot) => {
      //     let strHeart = "";
      //     for (let i = 1; i <= shot; i++) {
      //       strHeart += ":heart:";
      //     }
      //     return strHeart;
      //   };
      //   canEl.innerHTML = setShotIcons();