<template>
  <section id="guide">
    <div class="section center small">
      <div class="container">
        <div class="level">
          <div class="level-left" data-aos="fade-up" data-aos-duration="600">
            <div class="header is-marginless">
              <h2 class="is-3 title">{{ guide.title }}</h2>
              <p class="subtitle">{{ guide.subtitle }}</p>
            </div>
          </div>
          <div class="level-right" data-aos="fade-up" data-aos-delay="100" data-aos-duration="600">
            <CtaButton />
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <IndexPortfolioPost v-for="(work, index) in blogPosts" :key="index" :work="work" :index="index" />
    </div>
  </section>
</template>
<script>
import CtaButton from "../components/CtaButton.vue";
import IndexPortfolioPost from "../components/IndexPortfolioPost.vue";

export default {
  name: "TheGuide",
  components: {
    CtaButton,
    IndexPortfolioPost
  },
  data() {
    return {
      blogPosts: this.$store.state.portfolioPosts.filter(post => post.featured == true),
      guide: this.$store.state.pages.home.guide
    }
  },
}

</script>
