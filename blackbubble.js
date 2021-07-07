const blackBubbleMaker = () => {
  //création de la bulle
  const blackBubble = document.createElement("span");
  blackBubble.classList.add("blackbubble");

  document.body.appendChild(blackBubble);

  //paramètres de taille et de positionnement à la création de la bulle
  const sizeOfBubble = `${Math.random() * 200 + 100}px`;
  blackBubble.style.height = sizeOfBubble;
  blackBubble.style.width = sizeOfBubble;

  blackBubble.style.top = `${Math.random() * 100 + 100}%`;
  blackBubble.style.left = `${Math.random() * 100}%`;

  //on recup la propriété left de l'animation pour lui donner une valeur pour le mouvement vers la droite et la gauche(valeur neg pour gauche et pos pour right)
  let leftOrRight = Math.random() > 0.5 ? 1 : -1; // on génére un chiffre aléatoire et une fois sur 2 renvoi 1 ou -1 grave a ternaire
  blackBubble.style.setProperty("--left", `${Math.random() * 100 * leftOrRight}%`);

  //supprimer la bulle si pas cliqué après un certain temps
  setTimeout(() => {
    blackBubble.remove();
  }, 8000);

  blackBubble.addEventListener("mouseenter", () => {
    check = document.getElementById("test");
    check.innerHTML = 1;
  })
};

setTimeout(() => {
    let generateBlackBubble = setInterval(() => {
        blackBubbleMaker();
      check = document.getElementById("test");

      if(check.innerHTML == 1){
        clearInterval(generateBlackBubble);
        allbubble = document.querySelectorAll('span');
        for(i=0; i<allbubble.length; i++){7
            console.log(allbubble[i])
            allbubble[i].style.animationPlayState = 'paused';
            allbubble[i].style.display = "none";
          }
      }
      
    }, 4000);
    
    
  }, 10);