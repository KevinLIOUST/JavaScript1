let messageGlobal = "Je suis global ! :)";

function afficherMessages() {
    let messageLocal = "Je suis local ! :)";

    console.log(messageGlobal);
    console.log(messageLocal);
}

console.log(messageLocal);

// Une erreur s'est produite lors de l'appel à la variable messageLocal dans le console.log().
// C'est normal, car la variable messageLocal est déclarée à l'intérieur d'une fonction. Et donc, elle ne peut être utilisée que dans la fonction, pas ailleurs ! :)