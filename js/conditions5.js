let moyenne = +prompt("Entrer la moyenne /20 d'un stagiaire à l'afpa :");

if (isNaN(moyenne)) {
    alert("il faut entrer un nombre. :)");
} else if (moyenne <= 0) {
    alert("Un rendez-vous sera programmé en raison de la moyenne.");
} else if (moyenne >= 1 && moyenne <= 5) {
    alert("Trimestre insuffisant.");
} else if (moyenne >= 6 && moyenne <= 10) {
    alert("Trimestre moyen");
} else if (moyenne >= 11 && moyenne <= 13) {
    alert("Bon trimestre");
} else if (moyenne >= 14 && moyenne <= 18) {
    alert("Excellent trimestre");
} else if (moyenne >= 19 && moyenne <= 20) {
    alert("Félicitations");
} else {
    alert("Impossible d'avoir plus que 20.");
}