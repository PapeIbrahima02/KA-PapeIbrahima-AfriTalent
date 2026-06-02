// COMMIT 6
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


// COMMIT 7 
//==== Setion Hero (Accueil) ====
//======= Les compteurs de statistiques qui s'animent de 0 à leur valeur au scroll ======
// Freelances
// 1- creation de variable qui va observer les elements                                        
const observeur = new IntersectionObserver((entrer) => {                              // entrer, liste elements a surveille           
    entrer.forEach((entre) => {                                                       // forEach, examine chaque element 1 par 1

        // On verifie si l'element est visible
        if (entre.isIntersecting) {                                                    // Pour verifier si l'element est visible à l'écran 
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
if (statistiques) {                                                 // if, verifie d'abord avant d'observer
    observeur.observe(statistiques);                                      
};
// Entreprises
// 1- creation de variable qui va observer les elements
const observeur1 = new IntersectionObserver((entrer) => {                              // entrer, liste elements a surveille           
    entrer.forEach((entre) => {                                                       // forEach, examine chaque element 1 par 1

        // On verifie si l'element est visible
        if (entre.isIntersecting) {                                                    // Pour verifier si l'element est visible à l'écran 
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
if (statistiques1) {                                                    // if, permet de verifier d'abord avant d'observer
    observeur1.observe(statistiques1);                                   
};
// Missions réalisées
// 1- creation de variable qui va observer les elements
const observeur2 = new IntersectionObserver((entrer) => {                              // entrer, liste elements a surveille           
    entrer.forEach((entre) => {                                                       // forEach, examine chaque element 1 par 1

        // On verifie si l'element est visible
        if (entre.isIntersecting) {                                                    // Pour verifier si l'element est visible à l'écran 
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
if (statistiques2) {                                                    // if, verifie d'abord avant d'observer
    observeur2.observe(statistiques2);                                   

};
//==== Setion chiffres cles (A propos) ====
//======= Les compteurs de statistiques qui s'animent de 0 à leur valeur au scroll ======
// Freelance
// 1- creation de variable qui va observer les elements
const controleur = new IntersectionObserver((entrer) => {                              // entrer, liste elements a surveille           
    entrer.forEach((entre) => {                                                       // forEach, examine chaque element 1 par 1

        // On verifie si l'element est visible
        if (entre.isIntersecting) {                                                    // Pour verifier si l'element est visible à l'écran 
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
if (chiffres) {                                                             // if, verifie d'abord avant d'observer
    controleur.observe(chiffres);                                         
};
// Projets realises
// 1- creation de variable qui va observer les elements
const controleur1 = new IntersectionObserver((entrer) => {                              // entrer, liste elements a surveille           
    entrer.forEach((entre) => {                                                       // forEach, examine chaque element 1 par 1

        // On verifie si l'element est visible
        if (entre.isIntersecting) {                                                    // Pour verifier si l'element est visible à l'écran 
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
if(chiffres1) {                                                             // if, verifie d'abord avant d'observer
    controleur1.observe(chiffres1);                                           
};
// Entreprise partenaire
// 1- creation de variable qui va observer les elements
const controleur2 = new IntersectionObserver((entrer) => {                              // entrer, liste elements a surveille           
    entrer.forEach((entre) => {                                                       // forEach, examine chaque element 1 par 1

        // On verifie si l'element est visible
        if (entre.isIntersecting) {                                                    // Pour verifier si l'element est visible à l'écran 
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
if(chiffres2) {                                                             // if, permet de verifier d'abord avant d'observer
    controleur2.observe(chiffres2);                                           
};


//======= Sections qui apparaissent en fondu (fade-in) ========
    // creation de variable qui va observer les elements
const monObservateur = new IntersectionObserver((entrer) =>{                           // entrer, liste des elements a surveille
    entrer.forEach((entre) => {                                                        // forEach, examine chaque element 1 par 1

        // On verifie si l'element est visible
        if (entre.isIntersecting) {                                                     
            entre.target.classList.add("sectionFade-in");                               // Creation de classe CSS
        }
    });
});
    // Les elements a surveiller
const mesSection = document.querySelectorAll(".fade-in");
mesSection.forEach((section) => {                                                     // forEach, examine chaque element 1 par 1 (ici, section par section)
    monObservateur.observe(section);
});


// COMMIT 8
//===== filtrage dynamique des freelances ======
const filtre = document.querySelector("#filtre");
const cartes = document.querySelectorAll(".card");

if (filtre) {            // if, permet de verifier d'abord avant d'executer
    filtre.addEventListener("change", () => {                                               // On ecoute si l'utilisateur change de categorie
        let choix = filtre.value;                                                           // Pour recuperer la valeur choisie
        cartes.forEach((carte) => {                                                         // forEach, examine chaque element 1 par 1
            let categorie = carte.getAttribute("data-categorie");                           // Pour recuperer la categorie de la carte
            if (choix === "tous") {
                carte.style.display = "block";                                              // On affiche toutes les cartes
            }else if(choix === categorie) {
                carte.style.display = "block";                                            // On affiche seulement les cartes de la categorie concernee
            }else {
                carte.style.display = "none";                                             // Pour cacher les cartes non concernees
            }
        });
    });
};

// Validation du formulaire
const form = document.getElementById('inscriptionForm');
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const email = document.getElementById('mail');
const sujet = document.getElementById('sujet');
const message = document.getElementById('message');
const confirmation = document.getElementById('confirmation');

if (form) {                     // if, permet de verifier d'abord avant d'executer
    form.addEventListener('submit', function(event) {       // event, parametre permettant de stocker les infos declanchees par l'evenement submit 
        let valid = true;
        // Réinitialiser les messages d'erreur
        document.getElementById("nomErreur").textContent = '';
        document.getElementById("prenomErreur").textContent = '';
        document.getElementById("mailErreur").textContent = '';
        document.getElementById("sujetErreur").textContent = '';
        document.getElementById("messageErreur").textContent = '';

        // Validation du nom
        if (nom.value.trim() === "") {             // .trim(), permet de supprimer les espaces du debut et du fin
            document.getElementById("nomErreur").textContent = 'Le nom est requis.';
            valid = false;
        }

        // Validation du prenom
        if (prenom.value.trim() === '') {             // .trim(), permet de supprimer les espaces du debut et du fin
            document.getElementById('prenomErreur').textContent = 'Le prenom est requis.';
            valid = false;
        }

        // Validation de l'email
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(mail.value)) {                  //.test(), permet de verifier si la valeur du champ est respecte
            document.getElementById('mailErreur').textContent = 'Email invalide.';
            valid = false;
        }

         // Validation du sujet
        if (sujet.value === 'choix') {           
            document.getElementById('sujetErreur').textContent = 'Le sujet est requis.';
            valid = false;
        }

        // Validation du message
        if (message.value.length < 20) {
            document.getElementById("messageErreur").textContent = 'Le message doit contenir au moins 20 caractères.';
            valid = false;
        }

        if (!valid) {               // Si le formulaire n’est PAS valide
            event.preventDefault(); // Empêche la soumission du formulaire
        } else {
            // Afficher un message de succès
            confirmation.textContent = 'Message envoye !';
            // form.reset();         // permet de vider les champ du formulaire
        }
    });
};