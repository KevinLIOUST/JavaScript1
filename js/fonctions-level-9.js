let tabNombres = [10, 20, 30, 40];
let i = 0;

let affichageNombre = function () {
  let nombreAafficher = tabNombres[i];
  console.log("Le nombre " + tabNombres[i] + " est à l\'index " + i + " ! :)");
  i++;
  return nombreAafficher;
};

tabNombres.forEach((nombre) => {
  affichageNombre();
});
