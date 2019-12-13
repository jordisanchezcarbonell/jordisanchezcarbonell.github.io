var nombre = document.getElementById("nom");
var valor = document.getElementById("valor");

//Funcion para creear una cookie.
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//Funcion para obtener la cookie
/*
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
*/
//Comprobar si existe la cookie.
function checkCookie() {
  var user = getCookie(user);
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie(user, 0, 365);
    }
  }
}

function deleteCookie(name) {
  document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

//All cookies
var arrayCookies = [];
function cookiesPrueba(Nom, Valor) {
  this.Nom = Nom;
  this.Valor = Valor;
}
function listCookies() {
  var theCookies = document.cookie.split(";");
  var aString = "";
  for (var i = 1; i <= theCookies.length; i++) {
    aString += i + " " + theCookies[i - 1] + "\n";
  }
  return aString;
}

function ReadCookie() {
  var allcookies = document.cookie;

  var aString = "";
  // Get all the cookies pairs in an array
  cookiearray = allcookies.split(";");

  // Now take key value pair out of this array
  for (var i = 0; i < cookiearray.length; i++) {
    name = cookiearray[i].split("=")[0];
    value = cookiearray[i].split("=")[1];

    arrayCookies.push(new cookiesPrueba(name, value));
    /* nombre.innerHTML(name);
    valor.innerHTML(valor);*/
  }
  return arrayCookies;
}

function mostrar() {
  var array = getCookie();
  var byDate = array.slice(0);

  byDate.sort(function(a, b) {
    return parseInt(b.idcard) - parseInt(a.idcard);
  });

  return byDate;
}


function getCookie() {
  var key,val,res;
  //get all cookie
  var oldCookie = document.cookie.split(';');
  for (var i = 0; i < oldCookie.length; i++) {
      key = oldCookie[i].substr(0,oldCookie[i].indexOf("="));
      val = oldCookie[i].substr(oldCookie[i].indexOf("=")+1);
      key = key.replace(/^\s+|\s+$/g,"");
      //find "user_cookie"
      if(key == "user_cookie") {
          res = val;
      }
  }
  if (res == undefined) {
      return null;
  } else {
      res = JSON.parse(res);
      return res.user;
  }
}