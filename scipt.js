//math ceil est mieux car il arrondi… (math random c entre 0 et 1


///1. Le joueur doit choisir entre PPC
//2. L’ordinateur choisi (random)
//3. On compare
//4. Afficher le choix des joueurs et le gagnant.

//ce sont les 4 étapes, maintenant il faut détailler :

//1, nécessite un prompt où le choix est donné.

//stocké dans une variable.

//2, l’ordi doit choisir aléatoirement (**math.random**), il faudra alors attribuer un chiffre à PPC. 

///**math floor** aussi est utile. il faudra stocker son choix;

//3 comparer :

//opérateurs logique : si CJ === CO {égalité}

//sinon if (ciseau vs papier OU papier vs pierre OU pierre vs ciseau) {joueur gagne}

//else(l’ordi gagne).



//**donc il nous reste à faire les fonctions correspondantes !**

//les nommer et les appeler en les nommant.

//Mais je dois créer une fonction pour lancer toutes les fonction, une fonction démarrer !

//cette méthode c pas loin de l’algorithmique. step by step.

/*
function(start)
function(prompt)
function(random)
function(compare)
function(result)
function(affichage)


//Rôle 
//Permettre le choix (rapide) et son étendue des joueurs et aléatoire de l'ordinateur
//${expression}
//

let choixordinateur
let choixjoueur

function start() {
    const choixjoueur = prompt(papier, pierre, ciseaux).toLowerCase();
    const choixordinateur = getComputerChoice();
    console.log(`Le joueur a choisi: ${choixjoueur}`);
    console.log(`L'ordinateur a choisi: ${choixordinateur}`);

    const result = quigagne(choixjoueur, choixordinateur);
    console.log(result);
    }

   // on peut utilsier le prompt en faisant une variable CF = prompt
   /*autre façon de faire
   utiliser return choix = prompt(question)
  
   */


/*

   function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "C'est une égalité!";
    } else if (
        (playerChoice === 'pierre' && computerChoice === 'ciseaux') ||
        (playerChoice === 'ciseaux' && computerChoice === 'papier') ||
        (playerChoice === 'papier' && computerChoice === 'pierre')
    ) {
        return "Le joueur gagne!";
    } else {
        return "L'ordinateur gagne!";
    }
        ceil : plafond.
}*/
/*
const pierre = 1
const papier = 2
const ciseaux = 3
function CJ(choix) {
    return choix = prompt(question)
}
let question ="Choisissez entre pierre, papier et ciseaux : "
  
   console.log(prompt(question))

   function CO(choixOrdi) {
    
    return(choixOrdi)= Math.ceil(Math.random()*3)}

console.log(Co(""))tentative en groupe :*: */


/ créer 3 variables contenant pierre papier et ciseaux
// prompt pour choisir ce qu'on joue et y stocker dans une var
// L'ordinateur choisi à son tour : math.ceil et math.random et y stocker dans une var
// les conditions / comparer le choix du joueur et celui de l'ordi
// Afficher les choix, le résultat et le gagnant en alerte
//4 fonctions : choix joueur - choix ordi - comparer - afficher
//1 fonction qui lance les autres fonctions : lancement
const pierre = 1
const papier = 2
const ciseaux = 3
//rôle: stocker le choix du joueur
//paramètres : valeur choisie
//retour : choix
function CJ(){
        return prompt(question);
}
let question = "Choisissez entre pierre, papier et ciseaux : "
//rôle : stocker le choix de l'ordi
//paramètres : //
//retour : choix
function CO(){
        return Math.ceil(Math.random()*3)
}
//rôle : Comparer le choix de l'ordi et le choix du joueur avec des conditions
//paramètres : choix joueur et choix ordi
//retour : le résultat de la comparaison
/*
si choix joueur === choix ordi -> égalité
sinon si :
choix joueur == ciseaux ET  choix ordi === feuille OU
choix joueur == feuille ET  choix ordi === cailloux OU
choix joueur == cailloux ET  choix ordi === ciseaux  OU   -> Joueur gagne
Sinon -> ordi gagne */
function compare(CO,CJ){
    let result = ""
    if(CO==CJ){
         result = "égalité"
    }else if((CJ == papier && CO == ciseaux) || (CJ == ciseaux && CO == pierre) || (CJ == pierre && CO == papier)){
         result = "Joueur gagne"
    }else{
         result = "L'ordi gagne"
    }
    return result
}
//rôle : resultat
//paramètres : choix ordi et choix joueur
//retour : Afficher la comparaison
function afficher(CO,CJ, result){
        alert(`Le joueur a choisi ${CJ} et l'ordinateur a choisi ${CO}. Le resultat est ${result}`)
}
//rôle : lancer les autres fonctions dans l'ordre
// par : //
//retour : //
function jouer(){
    let choixJoueur=CJ()
    let choixOrdinateur=CO()
    let resultat= compare(choixOrdinateur, choixJoueur)
    afficher(choixOrdinateur, choixJoueur, resultat)
}

correction ludivine :


//role : donner la possibilité au joueur de chosir entre feuille, ciseaux et pierre 
//paramétre : non
// retour : le choix du joueur 

function choixJoueur(){
    let choixJ=prompt("Choisissez feuille, ciseaux ou pierre");
    return choixJ; 
}

//role : L'ordinateur choisis de maniére aléatoire un chiffre entre 1 et 3 
//paramétre : non
//retour : le choix de l'ordinateur sous forme de chaine de caractére 
function choixOrdi() {
   return Math.ceil(Math.random()*3);
}


//role : convertir les chiffres en mot 
//paramétre : le nbr choisi par l'ordi 
//retourne : le mot 
// 1=papier, 2=ciseaux, 3=pierre
function conversion(nbr){

    let choixO;
    if (nbr === 1){
    choixO="papier"
    }
    else if (nbr===2){
        choixO="ciseaux"
    }else if (nbr===3){
        choixO="pierre"
    }
return choixO;
}


//role: Comparer le choix du joueur et le choix de l'ordi 
// parametre : choix du joueur et choix de l'ordinateur 
// retour : le gagnant 

function compare(choixJoueur, choixOrdinateur){

    let result;

    if (choixJoueur === choixOrdinateur){
        result="égalité"
    }
    else if (
        (choixJoueur==="ciseaux"&&choixOrdinateur==="papier")||
        (choixJoueur==="papier"&&choixOrdinateur==="pierre")||
        (choixJoueur==="pierre"&&choixOrdinateur==="ciseaux")
    ){
        result="Vous avez gagné"
    }
    else {
        result="l'ordinateur gagne ! looser "
    }
    return result;
}

//role: Afficher les choix et le gagnants dans un alert
//paramétre : choix du joueur, choix de l'ordinateur, resultat
//retourne : 

function affiche(choixJ, choixO, resultat){
    alert(`choix du joueur:${choixJ} // chois de l'ordinateur: ${choixO} // ${resultat} `)
}

//role: lancer le jeu en lancant les fonctions dans le bon ordre 
// paramétre: non
//retour: non
function jouer(){
    let choixJ=choixJoueur();
    let nombre=choixOrdi();
    let choixO=conversion(nombre);
    let result=compare(choixJ,choixO);
    affiche(choixJ,choixO,result);
}

CORRECTION NICO

// varialbes globales : 
let choixJoueur, choixOrdi, nombreOrdi
// le joueur choisi entre pierre feuille et ciseau : 
function JoueurJoue() {
    // Role : permet au joueur de saisir son choix
    // parametre : aucun
    // retour le choix de l'utilisateur
    return prompt("Choisissez entre pierre , feuille, ou ciseau")
}

// Ordinateur choisis entre pierre (1) feuille (2), ciseau(3)
function OrdiJoue() {
    // Role : tire aléatoirement un nombre entier entre 1 et 3 
    // parametre: aucun 
    // retour: le nombre aleatoire entre 1 et 3
    return Math.ceil(Math.random() * 3)
}


// associer le nombre a un texte pour pouvoir comparer
function associer() {
    // Role: Associe le nombre tiré au sort a une valeur de texte
    // Ordinateur choisis entre pierre (1) feuille (2), ciseau(3)
    // parametres: aucun
    // retour le choix de l'ordinateur (chaine de caractere)
    if (nombreOrdi == 1) {
        return choixOrdi = "pierre"
    } else if (nombreOrdi == 2) {
        return choixOrdi = "feuille"
    } else if (nombreOrdi == 3) {
        return choixOrdi = "ciseau"
    }
}

// Il  ya égalité si le joueur a joué la meme chose que l'ordi
// Le joueur gagne dans les cas suivant :
// si le joueur a joué ciseau ET que le ordi a joué feuille
// OU le joueur a joué pierre ET l'ordi a joué Ciseau
// OU le joueur a joué feuille ET l'ordi a joué Pierre
// dans les autres cas c'est l'ordi qui gagne 

function compare() {
    // Role : compare le choix du joueur et de l'ordi
    // parametres: aucun
    // retour: le nom du gagnant (ou égalité)
    if (choixJoueur === choixOrdi) {
        return "égalité"
    } else if ((choixJoueur == "ciseau" && choixOrdi == "feuille") ||
        (choixJoueur == "pierre" && choixOrdi == "ciseau") ||
        (choixJoueur = "feuille" && choixOrdi == "pierre")) {
        return "joueur "
    } else {
       return "ordinateur"
    }
}


function afficheLeGagnant(gag){
    // Role afficher le gagnant et les choix du joueur et de l'ordi dans une popup
    // parametre : le gagnant 
    // retour: aucun
    if(gag == "égalité"){
        alert(`choix du joueur : ${choixJoueur} \n choix de l'ordi :${choixOrdi} \n Egalité !`)
    }else{
        alert(`choix du joueur : ${choixJoueur} \n choix de l'ordi :${choixOrdi}\n\n ${gag} gagne`)
    } 
}


function jouer(){
    // Role : lancer le scénario de jeu
    // parametres : aucun
    // retour : aucun
    choixJoueur = JoueurJoue()
    nombreOrdi = OrdiJoue()
    associer()
    let gagnant = compare()
    afficheLeGagnant(gagnant)
}






