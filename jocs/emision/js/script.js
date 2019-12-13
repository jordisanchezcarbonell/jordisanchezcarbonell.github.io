$(window).on("load", function() {
  $("#explicacioJoc").modal("show");

  var user = prompt("Please enter your name:", "");

    setCookie(user, 0, 365);
  
});
