<template>
<!--
  <section id="portfolio" class="my-portfolio position">
    <Title title="PORTFOLIO" description="MY LAST WORKS"/>

    <div class="section-content">
      <div class="portfolio-table controls">
        <ul class="breadcrumbs">
          <li class="filter" :class="{ active: isFiltered('all') }" @click="filter('all')">All work</li>
          <li class="filter" :class="{ active: isFiltered('blog') }" @click="filter('blog')">Blogs</li>
          <li class="filter" :class="{ active: isFiltered('shop') }" @click="filter('shop')">Internet Shop</li>
          <li class="filter" :class="{ active: isFiltered('landing') }" @click="filter('landing')">Landing Page</li>
        </ul>
      </div>

    

        
        <div class="col-md-4 col-lg-auto portfolio-item">
          <img  alt="Alt"/>
          <div class="portfolio-link">
            <a  class="popup_content" target="_blank">See</a>
          </div>
        </div>
      <div class="col-md-4 col-lg-auto portfolio-item">
          <img  class="imagentamaño" src="https://upload.wikimedia.org/wikipedia/en/6/63/IMG_%28business%29.svg" alt="Alt"/>
          <div class="portfolio-link">
            <a  class="popup_content" target="_blank">See</a>
          </div>
        </div>  <div class="col-md-4 col-lg-auto portfolio-item">
          <img  alt="Alt"/>
          <div class="portfolio-link">
            <a  class="popup_content" target="_blank">See</a>
          </div>
        </div>  <div class="col-md-4 col-lg-auto portfolio-item">
          <img  alt="Alt"/>
          <div class="portfolio-link">
            <a  class="popup_content" target="_blank">See</a>
          </div>
        </div>  <div class="col-md-4 col-lg-auto portfolio-item">
          <img  alt="Alt"/>
          <div class="portfolio-link">
            <a  class="popup_content" target="_blank">See</a>
          </div>
        </div>  <div class="col-md-4 col-lg-auto portfolio-item">
          <img  alt="Alt"/>
          <div class="portfolio-link">
            <a  class="popup_content" target="_blank">See</a>
          </div>
        </div>
  
    </div>
  </section>-->
   <section id="portfolio" class="my-portfolio position">
    <Title title="PORTFOLIO" description="MY LAST WORKS"/>
    <div class="section-content">
      <div class="portfolio-table controls">
        <ul class="breadcrumbs">
          <li class="filter" :class="{ active: isFiltered('all') }" @click="filter('all')">All work</li>
          <li class="filter" :class="{ active: isFiltered('C#') }" @click="filter('C#')">C#</li>
          <li class="filter" :class="{ active: isFiltered('Android') }" @click="filter('Android')">Android</li>
          <li class="filter" :class="{ active: isFiltered('JSC') }" @click="filter('JSC')">Javascript</li>
                    <li class="filter" :class="{ active: isFiltered('Vue') }" @click="filter('Vue')">Vue</li>

        </ul>
      </div>

      <transition-group name="filter" tag="div" class="row justify-content-center">
        <div class="col-md-4 col-lg-auto portfolio-item" v-for="post in filteredPosts" :key="post.id ">
          <img :src="post.media_url" alt="Alt"/>
         

          <div class="portfolio-link">
              <h1 align="center" class="textoTitulo">{{post.title}}</h1>
            <a aria-label="ver detalles" :href="post.site_url" class="popup_content" target="_blank">See</a>
          </div>
        </div>
      </transition-group>
    </div>
  </section>
</template>

<script>
  import Title from './Title'

  export default {
    name: 'Portfolio',
    props: ['category', 'posts'],
    components: {
      Title
    },
    data() {
      return {
        currentFilter: 'all'
      }
    },
    computed: {
      filteredPosts() {
        if (this.currentFilter === 'all') {
          return this.posts
        }

        return this.posts.filter(post => post.tags && post.tags.includes(this.currentFilter))
      }
    },
    methods: {
      isFiltered(name) {
        return this.currentFilter === name
      },

      filter(name) {
        this.currentFilter = name
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '@/styles/variables.scss';

  $bg-portfolio: map-get($colors, dark) !default;
  $btn: map-get($colors, secondary) !default;

  .filter-enter-active, .filter-leave-active, .filter-move {
    transition: all 1s;
  }
  .filter-enter, .filter-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  .filter-leave-active {
    position: absolute;
  }


  .my-portfolio {
    background-color: $bg-portfolio;
    color: map-get($colors, light);
  }

  /deep/ .text-wrapper {
    &:after {
      border-bottom: 1px solid map-get($colors, light);
    }
  }

  .breadcrumbs {
    text-align: center;

    li {
      display: inline-block;
      text-transform: uppercase;
      margin: 0 10px;
      color: lighten($bg-portfolio, 60%);
      cursor: pointer;

      &.active {
        color: map-get($colors, light);
        border-bottom: 1px solid $btn;
      }
    }
  }

  .portfolio-table {
    margin-bottom: 50px;
  }

  .portfolio-item {
    width: 300px;
    max-height: 250px;
    overflow: hidden;
    margin-bottom: 20px;

    img {
      width: 300px;
      height: 300px;    
      }
  }

  .portfolio-link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.8);
    text-align: center;
    padding-top: 60%;
    opacity: 0;
    transition: all .5s ease-out;
  
    &:hover {
      opacity: 1;
      padding-top: 30%;
    }

    a {
      background-color: transparent;
      border: 1px solid $btn;
      padding: 10px 35px;
      font-weight: 600;
      font-size: 2rem;
      display: inline-block;
      transition: all 0.5s sceal-out;

      &:hover {
        color: lighten($btn, 30%);
      }
    }

    .imagentamaño{
      width: 300px;
      height: 300px;
    }

    .textoTitulo{
      text-align: center;
      font-family: 'Roboto', sans-serif;
      font-size: 1.5rem !important;
            margin-bottom: 9vh;

    }
  }
</style>
