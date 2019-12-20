


  const arrIconsTech = [
    { tool : 'javascript' , description : 'Lenguajes de Programación'},
    { tool : 'git' , description : 'Software de control de versiones'},
    { tool : 'sass' , description : 'Preprocesador CSS'},
    { tool : 'svg' , description : 'formato de gráficos vectoriales 2D de HTML5'},
    { tool : 'csharp' , description : 'Aplicaciones de Escritorio'},
    { tool : 'angular' , description : 'Aplicaciones de Escritorio'},

    { tool : 'android' , description : 'Aplicaciones de moviles android'},
    { tool : 'php' , description : 'Aplicaciones de moviles android'},
    { tool : 'apex' , description : 'Aplicaciones de moviles android'},
    { tool : 'cplus' , description : 'Aplicaciones de moviles android'},
    { tool : 'sqlserver' , description : 'Aplicaciones de moviles android'},
    { tool : 'mysql' , description : 'Aplicaciones de moviles android'},
    { tool : 'postman' , description : 'Aplicaciones de moviles android'},
    { tool : 'entityframework' , description : 'Aplicaciones de moviles android'},
    { tool : 'python' , description : 'Aplicaciones de moviles android'}







  ]
  for(var i =0;i<arrIconsTech.length;i++){
    var para = document.getElementById("imagenes");
    var Imagen = document.createElement('img');
    var generatedBall = document.createElement('FIGURE');
    var generatefigcaption = document.createElement('figcaption');

    var parrafo = document.createElement('p');
		var t = document.createTextNode(arrIconsTech[i].tool);   
		var descriptcion= document.createTextNode(arrIconsTech[i].description);   

    generatedBall.className="icon-tech-skill";
  
    Imagen.setAttribute("src","assets/images/"+arrIconsTech[i].tool+".png");
    Imagen.setAttribute("class","img-responsive");
    parrafo.appendChild(t);
    var total=generatedBall.appendChild(Imagen);
    generatefigcaption.appendChild(descriptcion);
    generatedBall.appendChild(parrafo);
    generatedBall.appendChild(generatefigcaption);
    
    para.appendChild(generatedBall);
   

  }

  particlesJS.load('particles-js', 'js/particles.json', function () {
    // console.log('callback - particles.js config loaded');
  })



  // Evento para whastapp
  document.getElementById("wpp").addEventListener("click",apiWhats,false);


  

  // $projectImg.on('click', showInfo);
  function apiWhats(){
    window.open("https://api.whatsapp.com/send?phone=34676564769&text=Hola%20me%20interesa%20tu%20perfil");
  
  
  }
  


