// var nombre = document.getElementById("nom");
// var valor = document.getElementById("valor");
var jsonCookie = {};
/*
// Funcion para creear una cookie.
function setCookie(nomUser, score, exdays) {

  var d = new Date();

  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);

  var expires = "expires=" + d.toUTCString();

  var exist = checkCookie();

  if (!exist) {
      jsonCookie = {
          "user": [
              { "nom": nomUser, "valor": score }
          ]
      };
  }
  else {

      // "{"nom":"AAA","valor":0}"

      /*

      jsonCookie = {
          "user": [
              { "nom": "pol", "valor": 0 },
              { "nom": "bob", "valor": 15 }
          ]
      }

    
      var cookie = getCookie();
      deleteCookie();

      jsonCookie = cookie;
      // jsonCookie += {"nom": nomUser, "valor": score};

  }

   jsonCookie = JSON.stringify(jsonCookie);

  document.cookie = "cookie=" + JSON.stringify(jsonCookie) + ";" + expires + ";path=/";
}
  */
/*
//Funcion para obtener la cookie
function getCookie() {
  var cookie = document.cookie; // "cookie={"user":[{"nom":"AAA","valor":0}]}"

  var v_cookie = cookie.split("=");
  cookie = JSON.stringify(v_cookie[0]); // "{"user":[{"nom":"AAA","valor":0}]}"
  var hola = cookie;

  console.log(hola);
  // var name = "cookie=";
  // var decodedCookie = decodeURIComponent(document.cookie);
  // var ca = decodedCookie.split(";");
  
  // for (var i = 0; i < ca.length; i++) {
  //     var c = ca[i];

  //     while (c.charAt(0) == " ") {
  //         c = c.substring(1);
  //     }

  //     if (c.indexOf(name) == 0) {
  //         cookie = c.substring(name.length, c.length);

  //         if (cookie === "{}") {
  //             cookie = "";
  //         }
  //     }
  // }
  
  return cookie;
}
*/
//Comprobar si existe la cookie.
/*
function checkCookie() {
  var exist = false;
  
  var cookie = getCookie();

  if (cookie !== "") {
      exist = true;
  }

  return exist;
}
*/
// Eliminar la cookie
function deleteCookie() {
  document.cookie = "cookie=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

//All cookies
// var arrayCookies = [];

// function cookiesPrueba(Nom, Valor) {
//     this.Nom = Nom;
//     this.Valor = Valor;
// }

// function listCookies() {
//     var theCookies = document.cookie.split(";");
//     var aString = "";

//     for (var i = 1; i <= theCookies.length; i++) {
//         aString += i + " " + theCookies[i - 1] + "\n";
//     }

//     return aString;
// }

// function ReadCookie() {
//     var aString = "";
//     var allcookies = document.cookie;

//     // Get all the cookies pairs in an array
//     cookiearray = allcookies.split(";");

//     // Now take key value pair out of this array
//     for (var i = 0; i < cookiearray.length; i++) {
//         name = cookiearray[i].split("=")[0];
//         value = cookiearray[i].split("=")[1];

//         arrayCookies.push(new cookiesPrueba(name, value));
//         /* nombre.innerHTML(name);
//         valor.innerHTML(valor);*/
//     }

//     return arrayCookies;
// }

// function mostrar() {
//     var array = ReadCookie();
//     var byDate = array.slice(0);

//     byDate.sort(function(a, b) {
//         return parseInt(b.Valor) - parseInt(a.Valor);
//     });

//     return byDate;
// }



function setCookie(name,idcard,days) {
  var arr = new Array();
  var obj = new Object();

  //add new cookie data
  obj.name = name;
  obj.idcard = idcard;
  arr.push(obj);

  //get old cookie data
  var temp = getCookie();
  if (temp != null) {
      //concat new and old cookie data
      for (var i = 0; i < temp.length; i++) {
          var ob = new Object();
          ob.name = temp[i].name;
          ob.idcard = temp[i].idcard;
          arr.push(ob);
      }
  }
  var objWarp = new Object();
  objWarp.user = arr;
  var val = JSON.stringify(objWarp);

  //set cookie date expired
  var date = new Date();
  date.setTime(date.getTime()+(days*24*60*60*1000));
  var expires = "; expires="+date.toGMTString();
  //create cookie
  document.cookie = "user_cookie="+val+expires  + ";path=/";
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