let addition = function(a, b) {
    return a + b;
}

let soustraction = function(a, b) {
    return a - b;
}

function executerOperation(nombre1, nombre2, operation) {
    // if (operation == addition()) {
    //     return addition(nombre1, nombre2);
    // } else {
    //     return soustraction(nombre1, nombre2);
    // }

    return operation(nombre1, nombre2);
}

console.log(executerOperation(3500, 100, addition));