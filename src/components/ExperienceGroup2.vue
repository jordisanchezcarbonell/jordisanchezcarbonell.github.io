<template>
  <div>
  <h3>{{ title }}</h3>

    <div class="resume-icon"><i :class="icon"></i></div>
    <div class="resume-item" >

      <div class="resume-description">
        <strong class="group-name" >Centre d’Estudis Politècnics
        </strong>
      </div>
      <div class="tipoghrafiasecundaria" ><p>Higher-technician in Web Applications Development-Studying</p></div>

      <div class="resume-description">
        <strong class="group-name" >Centre d’Estudis Politècnics
</strong>
      </div>
      <div class="tipoghrafiasecundaria"><p>Higher-technician in Multi-platform Software Development-Studying</p></div>   

      <div class="resume-description">
        <strong class="group-name" >Escola del Treball
</strong>
      </div>
      <div class="tipoghrafiasecundaria"><p>  Higher-technician in Telecommunication and IT systems, 2014 - 2016 </p></div>   
      
      <div class="resume-description">
        <strong class="group-name" >INCIBE
</strong>
      </div>
      <div class="tipoghrafiasecundaria"><p> Cybersecurity  for  Smes and freelance </p> </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "ExperienceGroup2",
  props: ["icon", "title"],
};
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";

.position {
  position: relative;
}
.tipoghrafiasecundaria{
  font-family: 'Roboto', sans-serif;
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

.group-name {
  color: map-get($colors, secondary);
}
</style>
