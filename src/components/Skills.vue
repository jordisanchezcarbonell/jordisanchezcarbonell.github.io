<template>

  <div>
        <h3>SKILLS </h3>

    <ul class="skills-bar-container">
  
  <li>
    <div class="progressbar-title">
      <h4>HTML5</h4>
      <span class="percent" id="html-pourcent"></span>
    </div>
    <div class="bar-container">
      <span class="progressbar progressred" id="progress-html"></span>
    </div>
  </li>
  <li>
    <div class="progressbar-title">
      <h4>CSS / SASS</h4>
      <span class="percent" id="css-pourcent"></span>
    </div>
    <div class="bar-container">
      <span class="progressbar progressblue" id="progress-css"></span>
    </div>
  </li>
  
  <li>
    <div class="progressbar-title">
      <h4>JavaScript / jQuery</h4>
      <span class="percent" id="javascript-pourcent"></span>
    </div>
    <div class="bar-container">
      <span class="progressbar progresspurple" id="progress-javascript"></span>
    </div>
  </li>
  
  <li>
    <div class="progressbar-title">
      <h4>PHP/LARAVEL</h4>
      <span class="percent" id="php-pourcent"></span>
    </div>
    <div class="bar-container">
      <span class="progressbar progressorange" id="progress-php"></span>
    </div>
  </li>
   <li>
    <div class="progressbar-title">
      <h4>VUE/ VUEX</h4>
      <span class="percent" id="php-pourcent"></span>
    </div>
    <div class="bar-container">
      <span class="progressbar progressorange" id="progress-php"></span>
    </div>
  </li>
  <li>
    <div class="progressbar-title">
      <h4>AngularJS</h4>
      <span class="percent" id="angular-pourcent"></span>
    </div>
    <div class="bar-container">
      <span class="progressbar progressgreen" id="progress-angular"></span>
    </div>
  </li>
  
    
    <li>
    <div class="progressbar-title">
      <h4>Ionic</h4>
      <span class="percent" id="angular-pourcent"></span>
    </div>
    <div class="bar-container">
      <span class="progressbar progressgreen" id="progress-angular"></span>
    </div>
  </li>

 
  <li>
    <div class="progressbar-title">
      <h4>GITHUB/HAROKU</h4>
      <span class="percent" id="angular-pourcent"></span>
    </div>
    <div class="bar-container">
      <span class="progressbar progesprueba" id="progress-prueba"></span>
    </div>
  </li>

</ul>
  </div>
</template>

<script>
  export default {
    name: 'Skills',
    props: ['post']
  }

  /*Api
      <div class="first-paragraph" v-html="post.content">TEXTO DE PYEBA</div>

 */

</script>

<style scoped lang="scss">
  @import '@/styles/variables.scss';

$li-padding: 5px;

// colors
$background-color: #1a1a1a;
$progressbar-title-color: #6f6f6f;

$Primary: map-get($colors, secondary);

$animation-delay: .7s;

@mixin border-radius($radius){
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}



.skills-bar-container{
  width: 40%;
  min-width: 300px;
  top: 50%;
  left: 50%;
 // -webkit-transform: translate(-50%, -50%);
  //transform: translate(-50%, -50%);
  list-style:none;
  
  li{
    width: 100%;
    margin-bottom: 10px;
    margin-top: 10px;
    
    
    .progressbar-title{
      color: $progressbar-title-color;
      
      h3{
        display: inline-block;
      }
      .percent{
        position: absolute;
        right: $li-padding;
      }
    }// end progressbar-title
    
    .bar-container{
      background: #555;
      position: relative;
      width: 100%;
      height: 5px;
      margin-top: 5px;
      display: block;
      @include border-radius(5px);
      
      .progressbar{
        position:absolute;
        width:0%;
        height: 100%;
        @include border-radius(5px);

        -webkit-animation-duration: 2s;
        animation-duration: 2s;
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
      }
      #progress-html{
        -webkit-animation-name: progress-html;
        animation-name: progress-html;
        -webkit-animation-delay: $animation-delay;
        animation-delay: $animation-delay;
      }

      #progress-css{
        -webkit-animation-name: progress-css;
        animation-name: progress-css;
        -webkit-animation-delay: $animation-delay*2;
        animation-delay: $animation-delay*2;
      }

      #progress-javascript{
        -webkit-animation-name: progress-javascript;
        animation-name: progress-javascript;
        -webkit-animation-delay:$animation-delay*3;
        animation-delay: $animation-delay*3;
      }

      #progress-php{
        -webkit-animation-name: progress-php;
        animation-name: progress-php;
        -webkit-animation-delay: $animation-delay*4;
        animation-delay: $animation-delay*4;
      }

      #progress-angular{
        -webkit-animation-name: progress-angular;
        animation-name: progress-angular;
        -webkit-animation-delay: $animation-delay*5;
        animation-delay: $animation-delay*5;
      }
       #progress-prueba{
        -webkit-animation-name: progress-prueba;
        animation-name: progress-prueba;
        -webkit-animation-delay: $animation-delay*5;
        animation-delay: $animation-delay*5;
      }
    }// end bar-container
  }
}

.progressred{background-color:$Primary;}
.progressblue{background-color:$Primary;}
.progresspurple{background-color:$Primary;}
.progressorange{background-color:$Primary;}
.progressgreen{background-color:$Primary;}

.progesprueba{background-color:$Primary;}

@-webkit-keyframes progress-html{0%{width: 0%;} 100%{ width: 100%;}}
@-webkit-keyframes progress-css{0%{width: 0%;} 100%{ width: 90%;}}
@-webkit-keyframes progress-javascript{0%{width: 0%;} 100%{ width: 80%;}}
@-webkit-keyframes progress-php{0%{width: 0%;} 100%{ width: 75%;}}
@-webkit-keyframes progress-angular{0%{width: 0%;} 100%{ width: 65%;}}
@-webkit-keyframes progress-prueba {0%{width: 0%;} 100%{ width: 55%;}}

@-moz-keyframes progress-html{0%{width: 0%;} 100%{ width: 100%;}}
@-moz-keyframes progress-css{0%{width: 0%;} 100%{ width: 90%;}}
@-moz-keyframes progress-javascript{0%{width: 0%;} 100%{ width: 80%;}}
@-moz-keyframes progress-php{0%{width: 0%;} 100%{ width: 75%;}}
@-moz-keyframes progress-angular{0%{width: 0%;} 100%{ width: 65%;}}
@-moz-keyframes progress-prueba {0%{width: 0%;} 100%{ width: 55%;}}

@keyframes progress-html{0%{width: 0%;} 100%{ width: 100%;}}
@keyframes progress-css{0%{width: 0%;} 100%{ width: 90%;}}
@keyframes progress-javascript{0%{width: 0%;} 100%{ width: 80%;}}
@keyframes progress-php{0%{width: 0%;} 100%{ width: 75%;}}
@keyframes progress-angular{0%{width: 0%;} 100%{ width: 65%;}}
@keyframes progress-prueba {0%{width: 0%;} 100%{ width: 55%;}}


</style>
