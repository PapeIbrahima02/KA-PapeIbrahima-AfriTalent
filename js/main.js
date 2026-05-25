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


//==== Setion Hero (Accueil) ====
//======= Les compteurs de statistiques qui s'animent de 0 à leur valeur au scroll ======
// Freelances
// 1- creation de variable qui va observer les elements                                        
const observeur = new IntersectionObserver((entries) => {                              // entries, liste elements a surveille           
    entries.forEach((entry) => {                                                       // forEach, examine chaque element 1 par 1

        // On verifie si l'element est visible
        if (entry.isIntersecting) {                                                    // Pour verifier si l'element est visible à l'écran 
            let cpt = 0;
            let arret = 2500;
            let interval = setInterval( () => {                                         // Methode pour appeller de manière répétée la fonction
                cpt += 25;                                                      
                document.querySelector("#compteur").textContent = ("+" + cpt);          // Pour modifier l'element html
                if(cpt >= arret) {
                    clearInterval(interval);                                            // Pour interrompre l'exécution répétée de la fonction                                     
                };
            }, 20);                                                                     // temps / vitesse en milli-seconde
        } 
    });
});
// 2- L'element a surveiller
let statistiques = document.querySelector("#compteur");
if (statistiques) observeur.observe(statistiques);

// Entreprises
// 1- creation de variable qui va observer les elements
const observeur1 = new IntersectionObserver((entries) => {                              // entries, liste elements a surveille           
    entries.forEach((entry) => {                                                       // forEach, examine chaque element 1 par 1

        // On verifie si l'element est visible
        if (entry.isIntersecting) {                                                    // Pour verifier si l'element est visible à l'écran 
            let cpt1 = 0;
            let arret1 = 800;
            let interval1 = setInterval( () => {                                         // Methode pour appeller de manière répétée la fonction
                cpt1 += 10;                                                      
                document.querySelector("#compteur1").textContent = ("+" + cpt1);          // Pour modifier l'element html
                if(cpt1 >= arret1) {
                    clearInterval(interval1);                                            // Pour interrompre l'exécution répétée de la fonction                                     
                };
            }, 20);                                                                     // temps / vitesse en milli-seconde
        } 
    });
});
// 2- L'element a surveiller
let statistiques1 = document.querySelector("#compteur1");
if (statistiques1) observeur1.observe(statistiques1);

// Missions réalisées
// 1- creation de variable qui va observer les elements
const observeur2 = new IntersectionObserver((entries) => {                              // entries, liste elements a surveille           
    entries.forEach((entry) => {                                                       // forEach, examine chaque element 1 par 1

        // On verifie si l'element est visible
        if (entry.isIntersecting) {                                                    // Pour verifier si l'element est visible à l'écran 
            let cpt2 = 0;
            let arret2 = 10500;
            let interval2 = setInterval( () => {                                         // Methode pour appeller de manière répétée la fonction
                cpt2 += 50;                                                      
                document.querySelector("#compteur2").textContent = ("+" + cpt2);          // Pour modifier l'element html
                if(cpt2 >= arret2) {
                    clearInterval(interval2);                                            // Pour interrompre l'exécution répétée de la fonction                                     
                };
            }, 0);                                                                     // temps / vitesse en milli-seconde
        } 
    });
});
// 2- L'element a surveiller
let statistiques2 = document.querySelector("#compteur2");
if (statistiques2) observeur2.observe(statistiques2);


//==== Setion chiffres cles (A propos) ====
//======= Les compteurs de statistiques qui s'animent de 0 à leur valeur au scroll ======
// Freelance
// 1- creation de variable qui va observer les elements
const controleur = new IntersectionObserver((entries) => {                              // entries, liste elements a surveille           
    entries.forEach((entry) => {                                                       // forEach, examine chaque element 1 par 1

        // On verifie si l'element est visible
        if (entry.isIntersecting) {                                                    // Pour verifier si l'element est visible à l'écran 
            let nbr = 0;
            let stop = 2500;
            let rappel = setInterval( () => {                                         // Methode pour appeller de manière répétée la fonction
                nbr += 25;                                                      
                document.querySelector("#free-lance").textContent = nbr;          // Pour modifier l'element html
                if(nbr >= stop) {
                    clearInterval(rappel);                                            // Pour interrompre l'exécution répétée de la fonction                                     
                };
            }, 20);                                                                     // temps / vitesse en milli-seconde
        } 
    });
});
// 2- L'element a surveiller
let chiffres = document.querySelector("#free-lance");
if (chiffres) controleur.observe(chiffres);                                         // if, verifie d'abord avant d'observer

// Projets realises
// 1- creation de variable qui va observer les elements
const controleur1 = new IntersectionObserver((entries) => {                              // entries, liste elements a surveille           
    entries.forEach((entry) => {                                                       // forEach, examine chaque element 1 par 1

        // On verifie si l'element est visible
        if (entry.isIntersecting) {                                                    // Pour verifier si l'element est visible à l'écran 
            let nbr1 = 0;
            let stop1 = 12000;
            let rappel1 = setInterval( () => {                                         // Methode pour appeller de manière répétée la fonction
                nbr1 += 50;                                                      
                document.querySelector("#projets").textContent = nbr1;          // Pour modifier l'element html
                if(nbr1 >= stop1) {
                    clearInterval(rappel1);                                            // Pour interrompre l'exécution répétée de la fonction                                     
                };
            }, 0);                                                                     // temps / vitesse en milli-seconde
        } 
    });
});
// 2- L'element a surveiller
let chiffres1 = document.querySelector("#projets");
if(chiffres1) controleur1.observe(chiffres1);                                        // if, verifie d'abord avant d'observer   

// Entreprise partenaire
// 1- creation de variable qui va observer les elements
const controleur2 = new IntersectionObserver((entries) => {                              // entries, liste elements a surveille           
    entries.forEach((entry) => {                                                       // forEach, examine chaque element 1 par 1

        // On verifie si l'element est visible
        if (entry.isIntersecting) {                                                    // Pour verifier si l'element est visible à l'écran 
            let nbr2 = 0;
            let stop2 = 800;
            let rappel2 = setInterval( () => {                                         // Methode pour appeller de manière répétée la fonction
                nbr2 += 10;                                                      
                document.querySelector("#entreprises").textContent = nbr2;          // Pour modifier l'element html
                if(nbr2 >= stop2) {
                    clearInterval(rappel2);                                            // Pour interrompre l'exécution répétée de la fonction                                     
                };
            }, 20);                                                                     // temps / vitesse en milli-seconde
        } 
    });
});
// 2- L'element a surveiller
let chiffres2 = document.querySelector("#entreprises");
if(chiffres2) controleur2.observe(chiffres2);                                        // if, permet de verifier d'abord avant d'observer   



//======= Sections qui apparaissent en fondu (fade-in) ========
    // creation de variable qui va observer les elements
const monObservateur = new IntersectionObserver((entries) =>{                           // entries, liste elements a surveille
    entries.forEach((entry) => {                                                        // forEach, examine chaque element 1 par 1

        // On verifie si l'element est visible
        if (entry.isIntersecting) {                                                     
            entry.target.classList.add("sectionFade-in");                               // Creation de classe CSS
        }
    });
});
    // Les elements a surveiller
const mesSection = document.querySelectorAll(".fade-in");
mesSection.forEach((section) => {
    monObservateur.observe(section);
});