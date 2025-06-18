let tabTaches = [];

function ajouterTache(description) {
  tabTaches.push(description);
}

function supprimerTache(id) {
  for (let i = 0; i < tabTaches.length; i++) {
    if (i == id) {
        tabTaches.splice(id, 1);
    }
  }
}

ajouterTache("Je télécharge Sword Art Online Gratuitement ! :)");
ajouterTache("Je télécharge FairyTail Gratuitement ! :)");
ajouterTache("Je télécharge Shingeki no Kyojin Gratuitement ! :)");
ajouterTache("Je télécharge Oshi no ko Gratuitement ! :)");

supprimerTache(2);
supprimerTache(2);
supprimerTache(0);

function afficherTaches() {
  for (let i = 0; i < tabTaches.length; i++) {
    console.log(tabTaches[i]);
  }
}

afficherTaches();
