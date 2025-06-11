let nb1 = 3;
let nb2 = 6;

while (Number(nb1) + Number(nb2) < 2025) {
    console.log(Number(nb1) + Number(nb2));
    nb2 = Number(nb1) + Number(nb2);
}