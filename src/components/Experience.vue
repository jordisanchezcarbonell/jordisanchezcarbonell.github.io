<template>
  <section id="experience" class="my-cv position">
    <Title title="EXPERIENCE" description="MY KNOWLEDGE AND ACHIEVEMENT" />

    <AnimateWhenVisible name="fadeUp" :duration="1.5" class="section-content">
      <div class="container-fluid">
        <div class="row">
          <ExperienceGroup class="col-12 col-md left" icon="icon-briefcase" title="Jobs"/>
          <ExperienceGroup2 class="col-12 col-md right" icon="icon-graduation-cap" title="Education"/>
        </div>
      </div>
    </AnimateWhenVisible>
  </section>
</template>

<script>
  import Title from './Title'
  import ExperienceGroup from './ExperienceGroup'
  import ExperienceGroup2 from './ExperienceGroup2'


export default {
    name: 'Experience',
    props: ['category', 'posts'],
    components: {
      Title,
      ExperienceGroup,ExperienceGroup2
    }
  }
</script>

<style scoped lang="scss">
  @import '@/styles/variables.scss';

  $linear: map-get($colors, dark);

  .row {
    padding-top: 20px;
    text-align: center;
  }

  @media(min-width: #{map-get($breakpoints, small)}) {

    .left {
      text-align: right;
      border-right: 2px solid lighten($linear, 80%);
    }

    .right {
      text-align: left;
    }
  }

</style>
