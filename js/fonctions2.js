function direBonjourFormation(nom) {
    return `Bonjour ${nom} ! :) Bienvenue à la formation Développement Web et Web Mobile !!!! :) :) :) :)`;
}

console.log(direBonjourFormation("Kevin"));

function welcome() {
    let nom = prompt("Veuillez saisir votre nom :");
    let sentence = `Bonjour ${nom} ! :) Bienvenue à la formation DWWM !!!! :) :) :) :)`;
    document.write(sentence);
}

welcome();