function permiereLettreMaj(texte) {

    // On récupère la première lettre du mot et on la met en majuscule.
    let premiereLettre = texte.charAt(0).toUpperCase();

    // On récupère le texte restant et on met tout le reste en minuscule
    let motSansPremiereLettre = texte.slice(1).toLowerCase();

    // On return le mot final en concatenant la première lettre et le restant
    return premiereLettre.concat(motSansPremiereLettre);
}

console.log(permiereLettreMaj("kevin"));