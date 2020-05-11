<template>

  <div>
    <h3>FEW WORDS ABOUT ME </h3>
    <div class="first-paragraph" >
<p>
  <span style="font-weight: 400;">
 

        I am a hardworking, honest individual. I am a good timekeeper, always willing to learn new skills. 
        I am friendly, helpful and polite, have a good sense of humour. 
        I am able to work independently in busy environments and also within a team setting.I
        am a punctual and motivated individual who is able to work in a busy environment and produce high standards of work. 
        I am flexible, reliable and possess excellent time keeping skills.

 </span></p>
    </div>
              <AnimateWhenVisible name="fadeLeft" >
           <Skills></Skills>
          </AnimateWhenVisible>
  </div>
</template>

<script>
  import Skills from './Skills'

  export default {
    name: 'Description',
    props: ['post'],
     components: {
      Skills
    }
  }

  /*Api
      <div class="first-paragraph" v-html="post.content">TEXTO DE PYEBA</div>

 */
</script>

<style scoped lang="scss">
  @import '@/styles/variables.scss';

  .first-paragraph {
    /deep/ p:first-child {
      color: map-get($colors, letra);
    }
  }
</style>
