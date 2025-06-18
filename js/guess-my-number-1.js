// Déclaration des variables (ingrédients à utiliser).
let nbAdeviner;
let nbHasard;
let nbEssais;
let nbVies;

// Le nombre de vies pour le niveau 1 (facile).
nbVies = 20;

// Pour tirer un nombre aléatiore
nbHasard = Math.floor(Math.random() * 100) + 1;

// On initialise le nombre d'essais à 1 pour le premier essai du joueur.
nbEssais = 1;

// Message de bienvenue pour le joueur.
alert("Coucou mon reuf ! :) Essaye de deviner mon nombre ! :) \n T'as " + nbVies + " vies pour gagner, sinon, t'as perdu la partie ! :)");

// Si le joueur à trouvé le nombre mystère du premier coup, alors il gagne directement.
if ((nbAdeviner == nbHasard)) {
    alert("BRAVO MON REUF !!!! T'AS TROUVE LE NOMBRE MYSTERE DU PREMIER COUP !!!!");

    // Sinon, le jeu continue jusqu'à que le joueur trouve le nombre mystère et qu'il y a plus de vies.
} else {
    while ((nbHasard != nbAdeviner) && (nbEssais < nbVies)) {

        // On regarde si c'est bien un nombre. Tant que c'est pas un nombre, on redemande à l'utilisateur un nombre.
        while (isNaN(nbAdeviner)) {
            nbAdeviner = +prompt("Il te faut un nombre. :) \n Il te reste " + nbVies + " essais pour gagner ! :) \n Essai " + nbEssais + " :");
        }

        // On incremente de 1 le nombre d'essais après chaque tentative et on drécrémente de 1 le nombre de vies avant de faire un GAME OVER.
        nbEssais++;
        nbVies--;

        if (nbAdeviner > nbHasard) {
            nbAdeviner = +prompt("C'est plus petit ! :) \n Il te reste " + nbVies + " essais pour gagner ! :) \n Essai " + nbEssais + " :");
        } else {
            nbAdeviner = +prompt("C'est plus grand ! :) \n Il te reste " + nbVies + " essais pour gagner ! :) \n Essai " + nbEssais + " :");
        }
    }

    if (nbEssais < nbVies) {
        alert("BRAVO MON REUF !!!! T'AS TROUVE LE NOMBRE MYSTERE EN " + nbEssais + " Essai(s) !!!! \n La bonne réponse est : " + nbHasard + " !!!!");
    } else {
        alert("Mon reuf, t'as perdu la partie ! ): T'as mis " + nbEssais + " essais. Le nombre a trouver était : " + nbHasard + ".")
    }
}