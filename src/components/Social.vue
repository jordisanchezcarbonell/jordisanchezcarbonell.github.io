<template>
  <div class="social-wrap">
    <ul>
      <li>
        <a href="https://www.linkedin.com/in/jordi-sánchez-carbonell-baa83797" aria-label="Linkedin page " target="_blank">
          <i class="icon-linkedin-squared"></i>
        </a>
  
         <a href="https://twitter.com/BT_Kazukun" target="_blank" aria-label="Twitter page ">
            <i class=" twitter fab fa-twitter-square"></i>
        </a>

         <a href="https://github.com/jordisanchezcarbonell" aria-label="Github page " target="_blank">
          <i class="icon-github-squared"></i>
        </a>
  


   
      </li>
    </ul>



  </div>
  
</template>

<script>
export default {
  name: "Social",
  props: ["items", "user"],
  computed: {
    socialUrls() {
      return this.items.map((socialUrl) => {
        const [icon, url] = socialUrl.split(/\s*,\s*/)
        return { icon, url }
      })
    },
  },
}
</script>

<style scoped lang="scss">
  @import '@/styles/variables.scss';

 .social-wrap {
    li {
      
      display: inline-block !important; 
      margin-right: 10px !important;
    }

    i {
      font-size: 3rem !important;
    }
  }
  .twitter{
    font-size: 3rem !important;
  }
</style>
