// Création du tableau de princesses.
let tabDisneyPrincess = new Array("Cendrillon");

// Affichage du premier élément (cendrillon).
console.log(tabDisneyPrincess[0]);

// Amélioration

tabDisneyPrincess.push("Mulan", "Peach", "Peach", "Raiponse", "Belle", "Vaiana", "Daisy", "Jasmine");
let testTabDisneyPrincessLowerCase = tabDisneyPrincess.map(nom => nom.toLowerCase());

console.table(testTabDisneyPrincessLowerCase);

// Affichage du tableau.
// for (let i = 0; i < tabDisneyPrincess.length; i++) {
//     console.log(tabDisneyPrincess[i]);
// }

// On supprime l'élément qui se situe à l'index 2. (Peach)
tabDisneyPrincess.splice(indexOf("Peach"), 1);

// Comme on a supprimé Peach, faut faire attention, car les autres éléments se décalent vers la gauche.
// Si on veux supprimer Daisy, il faudra supprimer l'élément qui se trouve à l'index 5.
tabDisneyPrincess.splice(indexOf("Daisy"), 1);

// Affichage du tableau. après avoir supprimé les éléments.
// for (let i = 0; i < tabDisneyPrincess.length; i++) {
//     console.log(tabDisneyPrincess[i]);
// }

// On trie le tableau par ordre alphabétique.
tabDisneyPrincess.sort();

// tabDisneyPrincess.sort().reverse() pour inverser tous les éléments du tableau.

// tabDisneyPrincess.unshift("Harmonie") pour ajouter un élément au début du tableau. Et shift("Harmonie") pour ajouter un élément à la fin du tableau.

// Affichage du tableau. après avoir trié les éléments.
// for (let i = 0; i < tabDisneyPrincess.length; i++) {
//     console.log(tabDisneyPrincess[i]);
// }

console.log("Il y a " + tabDisneyPrincess.length + " princesses dans le tableau !!!! :) :) :) :)");

princess = tabDisneyPrincess.toString();
for (let i = 0; i < tabDisneyPrincess.length; i++) {
    console.log(princess);
}