function addition(nb1, nb2) {
    return nb1 + nb2;
}

let nb1 = +prompt("Veuillez entrer un nombre pour le 1 :");
let nb2 = +prompt("Veuillez entrer un nombre pour le 2 :");
let resultat = addition(nb1, nb2);

alert("Le résultat de l'addition est : " + nb1 + " + " + nb2 + " = " + resultat);