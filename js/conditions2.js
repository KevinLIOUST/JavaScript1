let nb = +prompt("Veuillez entrer un nombre entier :");

// je teste si c'est different de NaN
if (!(isNaN(nb) || nb == "")) {
    alert("C'est bon ! :) C'est bien un nombre entier ! :)");

    if (nb % 2 == 0) {
        alert("C'est un nombre pair ! :)");
    } else {
        alert("C'est un nombre impair ! :)");
    }

} else {
    alert("Vous devez entrer un nombre entier pour que ça marche. :)");
}