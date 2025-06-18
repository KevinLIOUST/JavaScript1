function calculerPrixTotal(prixHT, tauxTVA) {
    if(isNaN(tauxTVA)) {
        tauxTVA = 0.20;
    }

    let prixTTC = prixHT + (prixHT * tauxTVA);

    return prixTTC;
}

console.log(calculerPrixTotal(400, 0.1));