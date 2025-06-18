let chaine1a10 = "";

for (let i = 1; i <= 10; i++) {
    if (i == 10) {
        chaine1a10 += i.toString();
    } else {
        chaine1a10 += i.toString() + "-";
    }
}

console.log(chaine1a10);