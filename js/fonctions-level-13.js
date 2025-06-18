function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function calculer(operation, a, b) {
  let resultat = 0;

  if (operation == "add") {
    resultat = add(a, b);
    return resultat;
  } else if (operation == "substract") {
    resultat = substract(a, b);
    return resultat;
  } else if (operation == "multiply") {
    resultat = multiply(a, b);
    return resultat;
  } else {
    if (b == 0) {
      console.log("Impossible de diviser par 0. :)");
    } else {
      resultat = divide(a, b);
      return resultat;
    }
  }
}

console.log(calculer("add", 37, 5));