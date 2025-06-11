let genre = prompt("Veuillez entrer votre genre (f ou m) :");
let age = +prompt("Veuillez entrer votre âge :");

if (isNaN(age) && (genre != "f" && genre != "m")) {
    alert("Vous devez entrer les informations des deux ! :)");
} else if (isNaN(age)) {
    alert("Vous devez entrer les bonnes informations pour l'âge ! :)");
} else if (genre != "f" && genre != "m") {
    alert("Vous devez entrer les bonnes informations pour le genre (f ou m) ! :)");
} else {
    if (genre == "m" && age >= 18) {
        alert("Vous êtes adulte et un garçon ! :)");
    } else if (genre == "m" && age < 18) {
        alert("Vous êtes pas encore adulte et un garçon ! :)");
    } else if (genre == "f" && age >= 18) {
        alert("Vous êtes adulte et une fille ! :)");
    } else {
        alert("Vous êtes pas encore adulte et une fille ! :)");
    }
}