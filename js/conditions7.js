let nb = +prompt("Veuillez entrer un nombre entier :");
let ternaire;

// je teste si c'est different de NaN
if (!isNaN(nb)) {
    alert("C'est bon ! :) C'est bien un nombre entier ! :)");

    // if (nb % 2 == 0) {
    //     alert("C'est un nombre pair ! :)");
    // } else {
    //     alert("C'est un nombre impair ! :)");
    // }
    ternaire = nb % 2 == 0 ? console.log("C'est un nombre pair ! :)") : console.log("C'est un nombre impair ! :)");

} else {
    alert("Vous devez entrer un nombre entier pour que ça marche. :)");
}