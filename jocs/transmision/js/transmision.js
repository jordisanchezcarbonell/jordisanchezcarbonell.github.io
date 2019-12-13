var v_paraules = {
    "Antena": "·- ··- ··-",
    "Amplificador modulador": "·- -- ·--· ·-·· ·· ··-· ·· -·-· ·- -·· --- ·-·   -- --- -·· ··- ·-·· ·- -·· --- ·-·",
    "Modulació": "-- --- -·· ··- ·-·· ·- ·-·- ·· ---",
    "Preamplificador audiofreqüència": "·--· ·-· · ·- -- ·--· ·-·· ·· ··-· ·· -·-· ·- -·· --- ·-·   ·- ··- -·· ·· --- ··-· ·-· · --·- ··- · -· -·-· ·· ·-",
    "Ones portadores": "--- -· · ···   ·--· --- ·-· - ·- -·· --- ·-· · ···",
    "Transmissor": "- ·-· ·- -· ··· -- ·· ··· ··· --- ·-·",
    "Membrana de plàstic": "-- · -- -··· ·-· ·- -· ·-   -·· ·   ·--· ·-·· ·- ··· - ·· -·-·",
    "Procesador d'audio": "·--· ·-· --- -·-· · ··· ·- -·· --- ·-·   -·· ·   ·- ··- -·· ·· ---",
    "Excitament": "· -··- -·-· ·· - ·- -- · -· -",
    "AM": "·- --",
    "FM": "··-. --"
};
var v_paraulesEndevinades = [];

var puntuacio = 0;
var vegades = 0;
var result = false;

var temp="";
window.onload = function() {
    var v_key = [];

    temp = getCookie();
    // Ensenyar modal: explicacio del joc
    $('#explicacioJoc').modal("show");
    if(temp!=null){
        console.log(temp[0].name+temp[0].idcard);
    }
    // Agafar els noms de v_paraules
    for(var key in v_paraules) {
        v_key.push(key);
    }
    var paraulaEscollida = paraulaRandom(v_key);

    var morseParaula = morseParaulaEscollida(v_key, paraulaEscollida);

    omplirBoxMorse(v_key, paraulaEscollida, morseParaula);

    // Quan prem els botons
    document.getElementById('morse1').onclick = function () {
        var boxMorse = document.getElementById('morse1');
        
        paraulaEscollida = comprovarMorse(v_key, boxMorse, paraulaEscollida, morseParaula);
    }

    document.getElementById('morse2').onclick = function () {
        var boxMorse = document.getElementById('morse2');
        
        paraulaEscollida = comprovarMorse(v_key, boxMorse, paraulaEscollida, morseParaula);
    }
}

function paraulaRandom(v_key) {
    var v_lletres = [];
    var random = null;
    
    if (v_key.length > 0) {
        random = v_key[Math.floor(Math.random()*v_key.length)];
    
        v_lletres = separarLletres(random);
        
        // Mostrar per pantalla la paraula random
        var boxParaula = document.getElementById("boxParaula");

        boxParaula.innerHTML = "";

        v_lletres.forEach(e => {
            boxParaula.innerHTML += e;
        });   
    }

    return random;
}

function separarLletres(random) {
    var v_lletres;
    var v_nou = [];

    v_lletres = random.split("");

    v_lletres.forEach(e => {
        if (e === " ") {
            e = "&nbsp;&nbsp;&nbsp;";
        } 
        else {
            e += " ";
        }

        v_nou.push(e);
    });

    return v_nou;
}

function morseParaulaEscollida(v_key, paraula) {
    var morse = null;

    v_key.forEach(e => {
        if (e === paraula) {
            morse = v_paraules[e];
        }
    });

    return morse;
}

function omplirBoxMorse(v_key, paraula, morse) {
    var num = Math.floor(Math.random() * 2) + 1;
    var contrari = 1;
    var morseRandom = "··- -· -·· · ··-· ·· -· · -··";

    if (num == 1) {
        contrari = 2;
    }

    // Mostrar per pantalla la paraula correcte en un box random
    var boxMorseCorrecte = document.getElementById("morse"+num);
    boxMorseCorrecte.innerHTML = morse;

    var boxMorseRandom = document.getElementById("morse"+contrari);
    morseRandom = agafarMorseRandom(v_key, paraula);
    boxMorseRandom.innerHTML = morseRandom;
}

function agafarMorseRandom(v_key, paraula) {
    var num = 0;
    var i = 0;
    var random = "";
    var randomMorse = "";
    
    // Eliminar del array la paraula ja escollida
    v_key.forEach(e => {
        if (e === paraula) {
            v_key.splice(i, 1);

            // Afegim la paraula a v_paraulesEndevinades
            v_paraulesEndevinades.push(e);

            // Agafar un altre morse
            num = Math.floor(Math.random() * v_key.length) + 0;

            random = v_key[num];
        }
        i++;
    });

    randomMorse = morseParaulaEscollida(v_key, random);

    return randomMorse;
}

function comprovarMorse(v_key, boxMorse, paraula, morseParaula) {
    var morse = boxMorse.textContent;

    if (v_paraules[paraula] === morse) {
        result = true;
    }
    
    calcularResultat();

    if (result) {
        boxMorse.style.backgroundColor = "#57B053";

        paraula = paraulaRandom(v_key);
        morseParaula = morseParaulaEscollida(v_key, paraula);
        omplirBoxMorse(v_key, paraula, morseParaula);

        setTimeout( function () {
            document.getElementById('morse1').style.backgroundColor = "#C00000";
            document.getElementById('morse2').style.backgroundColor = "#C00000";
        
            var resta = Object.keys(v_paraules).length - v_paraulesEndevinades.length;
            if (vegades === 7 || resta < 2 ) {
                endGame();
            }
        }, 500);

        result = false;
        vegades ++;
    }
    else {
        boxMorse.style.backgroundColor = "#333333";
    }

    return paraula;
}

function calcularResultat() {
    if (result) {
        puntuacio ++;
    }
    else {
        if (puntuacio > 0) {
            puntuacio --;
        }
    }

    var score = document.getElementById("score");
    score.innerHTML = puntuacio;
}

function endGame() {
    // Ensenyar modal: final del joc
    $('#modalFinal').modal("show");
    temp[0].idcard = temp[0].idcard + parseInt(document.getElementById("score").innerHTML);
    setCookie(temp[0].name,temp[0].idcard,365);

    console.log(temp[0].idcard);
}