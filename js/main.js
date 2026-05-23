//==== Bouton Dark Mode avec localStorage ====
let darkMode = document.querySelector("#dark-mode");

if(localStorage.getItem("theme") === "dark") {                      // Verifier si le dark mod est active ou pas (false)
    document.body.classList.add("dark-mode")
};

darkMode.addEventListener("click", () => {                         // Quand on clique :
    document.body.classList.toggle("dark-mode")                    // Creation de classe CSS
    // Sauvegarder le thème
    if(document.body.classList.contains("dark-mode")) {           // Pour Verifier Si le body contient la classe dark mode ou si dark mode est active
        localStorage.setItem("theme", "dark")                    // On sauvegarde them = dark
    }else{                                                          
        localStorage.setItem("theme", "white")                   // On sauvegarde them = white
    }
});

//==== Changement de style du navbar au scroll ====
let navbar = document.querySelector("#navbar");
window.addEventListener("scroll", () => {                       // ecoute si l'utilisateur scroll
    if(window.scrollY > 50) {                                   // Si la distance du scroll est > 50 px :
        navbar.classList.add("navbar-scroll")                   // Creation de classe CSS
    }else{
        navbar.classList.remove("navbar-scroll")
    }
});

//==== Bouton retour en haut ====
let btnHaut = document.querySelector("#btn-Top");       
window.addEventListener("scroll", () => {                       // ecoute si l'utilisateur scroll
    if(window.scrollY > 300) {                                  // Si la distance du scroll est > 300 px :
        btnHaut.style.display = "block"                         // On affiche l'element 
    }else{
        btnHaut.style.display = "none"                          // On cache l'element
    }
});

btnHaut.addEventListener("click", () => {                       // ecoute si l'utilisateur click
   window.scrollTo({                                            // Methode qui Fait remonter la page
    top : 0,                                                    // defile en haut de la page
    behavior : "smooth"                                         // defilement fluide
   }); 
});