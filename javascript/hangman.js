const word = document.getElementById("word");
const worngLetter = document.getElementById("wrong-letter");
const playAgain = document.getElementById("play-btn");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");
const figureParts = document.querySelectorAll(".figure-part");

const words = [
  "student", 
  "international",
  "canada",
  "appartment", 
  "blog", 
  "lawyer", 
  "opportunity", 
  "house" 
];

let selectword = words[Math.floor(Math.random() * words.length)];
const correctLetters = [];
const wrongLetters = []; 

//display word function

function displayword(){
  word.innerHTML = ` 
    ${selectword.split("").map
      (letter => `<span class="letter">${
        correctLetters.includes(letter) 
          ? letter 
          : ""
      }</span>`
     )
    .join("")} 
  `;

  const innerword = word.innerText.replace(/\n/g, "");

  if(innerword === selectword){
    finalMessage.innerText = "Congratulation! You won :)";
    popup.style.display = "flex";
  }
}

//add wrong letter

function updateWrongLetters(){
  worngLetter.innerHTML = ` 
    ${wrongLetters.length > 0 
      ? "<p> Wrong </p>" 
      : ""
    }
    ${wrongLetters.map(
      (letter) => `<span> ${letter}</span>`
    )}
  `;

  //display man

  figureParts.forEach((part, index) => {
      const errors = wrongLetters.length;
      if(index < errors){
        part.style.display = "block";
      }
      else{
        part.style.display = "none";
      }
  });

  //check lost
  if(wrongLetters.length === figureParts.length){
    finalMessage.innerText = "You lost :(";
    popup.style.display = "flex";
  }
}


//Show notification
function shownotification(){
  notification.classList.add("play");
  setTimeout(() => {
    notification.classList.remove("play");
  }, 2000);
}

//add letter

window.addEventListener("keydown", (e) => {
  if(e.keyCode >= 65 && e.keyCode <= 90)
  {
    const letter = e.key;
    if(selectword.includes(letter)){
      
      if(!correctLetters.includes(letter)){
        correctLetters.push(letter);
        displayword();
      }
      else{
        shownotification();
      }

    }
    else{
      if(!wrongLetters.includes(letter)){
        wrongLetters.push(letter);
        updateWrongLetters();
      }
    }
  
  }
});

playAgain.addEventListener("click", () => {
  correctLetters.splice(0);
  wrongLetters.splice(0);
  selectword = words[Math.floor(Math.random() * words.length)];
  displayword();
  updateWrongLetters();
  popup.style.display = "none"; 
});

displayword();