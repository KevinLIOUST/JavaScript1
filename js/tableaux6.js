// Création du tableau de princesses.
let tabDisneyPrincess = new Array("Cendrillon", "Mulan", "Peach", "Raiponse", "Belle", "Vaiana", "Daisy", "Jasmine");

// Affichage du premier élément (cendrillon).
console.log(tabDisneyPrincess[0]);

// Affichage du tableau.
for (let i = 0; i < tabDisneyPrincess.length; i++) {
    console.log(tabDisneyPrincess[i]);
}

// On supprime l'élément qui se situe à l'index 2. (Peach)
tabDisneyPrincess.splice(2, 1);

// Comme on a supprimé Peach, faut faire attention, car les autres éléments se décalent vers la gauche.
// Si on veux supprimer Daisy, il faudra supprimer l'élément qui se trouve à l'index 5.
tabDisneyPrincess.splice(5, 1);

// Affichage du tableau. après avoir supprimé les éléments.
for (let i = 0; i < tabDisneyPrincess.length; i++) {
    console.log(tabDisneyPrincess[i]);
}

// On trie le tableau par ordre alphabétique.
tabDisneyPrincess.sort();

// Affichage du tableau. après avoir trié les éléments.
for (let i = 0; i < tabDisneyPrincess.length; i++) {
    console.log(tabDisneyPrincess[i]);
}

console.log("Il y a " + tabDisneyPrincess.length + " princesses dans le tableau !!!! :) :) :) :)");