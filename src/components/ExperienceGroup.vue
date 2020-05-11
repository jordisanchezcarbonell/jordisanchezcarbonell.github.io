<template>
  <div>
    <h3>{{ title }}</h3>

    <div class="resume-icon"><i :class="icon"></i></div>
    <div class="resume-item" >

      <div class="resume-description">
        <strong class="group-name" >Project ABP (Broggi):
</strong>
      </div>
      <div class="tipoghrafiasecundaria"><p>Medical incident management application</p></div>



      <div class="resume-description">
        <strong class="group-name" >Project ABP (Mnatec):
</strong>
      </div>
      <div class="tipoghrafiasecundaria" ><p>Make aplication web for sharing information the Radio</p></div>

      <div class="resume-description">
        <strong class="group-name" >Project ABP (Mnatec):
</strong>
      </div>
      <div class="tipoghrafiasecundaria">
        <p>Make aplication web for sharing information the Radio</p></div>

      <div class="resume-description">
        <strong class="group-name" >Project ABP (CepLauncher):
</strong>
      </div>
      <div class="tipoghrafiasecundaria">
        <p>Make aplication Android and Desktop for Sant Cugat</p>
        </div>


      <div class="resume-description">
        <strong class="group-name" >JAUSASLEGAL
</strong>
      </div>
      <div class="tipoghrafiasecundaria" ><p>Mysql, HTML, WordPress.</p></div>


      <div class="resume-description">
        <strong class="group-name" >VenusCoin
</strong>
      </div>
      <div class="tipoghrafiasecundaria"><p>Cybersecurity Consultant</p></div>









  </div>
  </div>
</template>

<script>
export default {
  name: "ExperienceGroup",
  props: ["icon", "title"],
};
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";

.position {
  position: relative;
}

.resume-icon {
  margin-bottom: 25px;

  i {
    font-size: 4rem;
    color: map-get($colors, secondary);
  }
}

.resume-item {
  margin-bottom: 25px;

  p {
    font-size: 1.5rem;
    margin-top: 0;
  }

  .resume-description {
    font-size: 1.7rem;
  }

  .year {
    font-weight: 600;
    margin-bottom: 5px;
  }
}
.tipoghrafiasecundaria{
  font-family: 'Roboto', sans-serif;
   color: map-get($colors, letra);
}
.group-name {
  color: map-get($colors, secondary);
}
</style>
