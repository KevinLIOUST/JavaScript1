let messageAprès2Secondes = "Ce message apparaît après 2 secondes !";

function afficherMessage() {
    console.log(messageAprès2Secondes);
}

setTimeout(() => {
    afficherMessage();
}, 2000);