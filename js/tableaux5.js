let tabMoisFr = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");
let tabMoisEn = new Array("January", "February", "March", "April", "June", "July", "August", "September", "October", "November", "December");

let tabJourSemaineFr = new Array("Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche");
let tabJourSemaineEn = new Array("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday");

// C'est un tableau a 2 dimensions, ou un tableau de tableaux LOL !!!! :) :) :) :)
let tabCalendrier = [
    tabMoisFr,
    tabJourSemaineFr,
    tabMoisEn,
    tabJourSemaineEn
]

// nomTableau[][] : les premiers doubles crochets servent à sélectionner le tableau sur lequel on souhaite travailler à partir de l'indice 0.
// le 2° doubles crochets servent à sélectionner l'élément de ce tableau en question à partir de l'indice 0.
// Donc, le 0 correspond au 1° élément, le 1 au 2°, le 2 au 3°, etc.

// Affichage de Novembre
console.log(tabCalendrier[0][10]);

// Affichage de Friday
console.log(tabCalendrier[3][4]);

// Affichage de tous les mois en Anglais
for (let i = 0; i < tabCalendrier[2].length; i++) {
    console.log(tabCalendrier[2][i]);
}

// Affichage de tous les jours de la semaine en Français
for (let i = 0; i < tabCalendrier[1].length; i++) {
    console.log(tabCalendrier[1][i]);
}