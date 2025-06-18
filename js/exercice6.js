let secret = 777;

console.log("Le type de secret est truc : " + typeof(secret)); // Une variable peut prendre n'importe quel type !!!! :) :) :) :)

let chaineNom = "Je m'appelle BOND";
let vraiOuFaux = false;
let nb = 85;
let nbFloat = 3.14;
let date = new Date();

console.log("La variable chaineNom = " + typeof(chaineNom)); // string
console.log("La variable vraiOuFaux = " + typeof(vraiOuFaux)); // boolean
console.log("La variable nb = " + typeof(nb)); // number
console.log("La variable nbFloat = " + typeof(nbFloat)); // number
console.log("La variable date = " + typeof(date)); // Object

let varIndefinie;

console.log("la variable varIndefinie est de type machin chouette : " + typeof(varIndefinie));
// C'est de type undefined

const incorruptible = "Président";
console.log("La variable incorruptible est de type bidule : " + typeof(incorruptible)); // string

incorruptible = "Sénateur"; // Impossible de changer la valeur, car c'est une constante, sa valeur changeras jamais.