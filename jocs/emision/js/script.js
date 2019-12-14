$(window).on("load", function() {
    $("#explicacioJoc").modal("show");

    var error = true;
    var user = "AAA";

    while (error) {
        error = false;

        user = prompt("Introdueix un nom (3 lletres):", "");

        if (user !== null) {
            if (user.length !== 3) {
                error = true;
            }
            if (user.toUpperCase() === "XXX" || user.toUpperCase() === "SEX" ) {
                error = true;
            }
            if (!isNaN(user)){
                error = true;
            }
        }
        else {
            error = true;
        }
    }

    //Nom de l'usuari, puntuació a 0 i la cookie caducarà quan passi 1 any
    setCookie(user, 0, 365);
});