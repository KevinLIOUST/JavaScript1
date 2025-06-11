let numMois = +prompt("Quel numéro du mois veux-tu afficher ? :");

if (isNaN(numMois)) {
    alert("Il faut entrer un nombre. :)");
} else if (numMois < 1 || numMois > 12) {
    alert("Il faut entrer un nombre entre 1 et 12 inclus. :)");
} else {
    switch (numMois) {
        case 1: alert("Janvier"); break;
        case 2: alert("Février"); break;
        case 3: alert("Mars"); break;
        case 4: alert("Avril"); break;
        case 5: alert("Mai"); break;
        case 6: alert("Juin"); break;
        case 7: alert("Juillet"); break;
        case 8: alert("Août"); break;
        case 9: alert("Septembre"); break;
        case 10: alert("Octobre"); break;
        case 11: alert("Novembre"); break;
        case 12: alert("Décembre"); break;
    }
}