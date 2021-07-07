let conteur = 0;
let nombreDeBulleGenere = 0;

const bubbleMaker = () => {
  //création de la bulle
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");

  document.body.appendChild(bubble);

  //paramètres de taille et de positionnement à la création de la bulle
  const sizeOfBubble = `${Math.random() * 200 + 100}px`;
  bubble.style.height = sizeOfBubble;
  bubble.style.width = sizeOfBubble;

  bubble.style.top = `${Math.random() * 100 + 50}%`;
  bubble.style.left = `${Math.random() * 100}%`;

  //on recup la propriété left de l'animation pour lui donner une valeur pour le mouvement vers la droite et la gauche(valeur neg pour gauche et pos pour right)
  let leftOrRight = Math.random() > 0.5 ? 1 : -1; // on génére un chiffre aléatoire et une fois sur 2 renvoi 1 ou -1 grave a ternaire
  bubble.style.setProperty("--left", `${Math.random() * 100 * leftOrRight}%`);

  //supprimer la bulle si pas cliqué après un certain temps
  setTimeout(() => {
    bubble.remove();
  }, 5000);

  bubble.addEventListener("mouseenter", () => {
    conteur++;
    document.getElementById("h3_conteur_bursted").innerHTML = `BURSTED : ${conteur} / ${nombreDeBulleGenere}`;
    bubble.remove();
  });

  document.getElementById("h3_conteur_bursted").innerHTML = `BURSTED : ${conteur} / ${nombreDeBulleGenere}`;
  nombreDeBulleGenere++;
};

setTimeout(() => {
  let generateBubble = setInterval(() => {
    bubbleMaker();
    check = document.getElementById("test");

    if(check.innerHTML == 1){
      document.getElementById("h3_conteur_bursted").innerHTML = `BURSTED : ${conteur} / ${nombreDeBulleGenere} ... YOU LOOSE <br> Accuracy : ${Math.floor((conteur/nombreDeBulleGenere)*100)}%`;
      clearInterval(generateBubble);
      allbubble = document.querySelectorAll('span');
      for(i=0; i<allbubble.length; i++){7
        console.log(allbubble[i])
        allbubble[i].style.animationPlayState = 'paused';
        allbubble[i].style.display = "none";
      }
    }
    
  }, 100);
  
  
}, 10);

  

