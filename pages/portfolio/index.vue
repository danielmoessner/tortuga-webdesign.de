<template>
  <main>
    <TheSubpageHeader :title="page.header.title" :subtitle="page.header.subtitle" :buttonText="buttonText" />
    <section id="referenzen" style="min-height: 500px;">
      <TheHeaderReflection />
      <div class="container">
        <div class="portfolio" v-for="year in portfolioPostsByYearSortedKeys" :key="year">
          <div class="portfolio--year">{{ year }}</div>
          <div class="portfolio--grid">
            <div v-for="(item, index) in portfolioPostsByYear[year]" :key="index" class="portfolio--item">
              <PortfolioShowcase :portfolioItem="item" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <TheFooter />
  </main>
</template>
<script>
import TheSubpageHeader from "@/components/TheSubpageHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheHeaderReflection from "@/components/TheHeaderReflection.vue";
import CtaButton from "@/components/CtaButton.vue";
import PortfolioShowcase from "@/components/PortfolioShowcase.vue";

export default {
  components: {
    TheSubpageHeader,
    TheFooter,
    TheHeaderReflection,
    CtaButton,
    PortfolioShowcase
  },
  data() {
    return {
      page: this.$store.state.pages.portfolio,
      portfolioPosts: this.$store.state.portfolioPosts,
      buttonText: "Jetzt ansehen",
      year: ""
    }
  },
  computed: {
    portfolioPostsByYear() {
      const postsByYear = {}
      this.portfolioPosts.forEach((item) => {
        const year = new Date(item.date).getFullYear()
        year in postsByYear ? postsByYear[year].push(item) : postsByYear[year] = [item]
      })
      return postsByYear
    },
    portfolioPostsByYearSortedKeys() {
      return Object.keys(this.portfolioPostsByYear).sort().reverse()
    }
  },
  head() {
    return {
      title: this.page.title,
      description: this.page.description
    }
  }
}

</script>
<style lang="scss" scoped>
.portfolio {
  margin-bottom: 8rem;

  &--grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
    grid-gap: 8rem;
    gap: 8rem;
  }

  &--year {
    font-weight: 600;
    font-size: 2.6rem;
  }

  @include until($tablet) {
    &--item {
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 3.2rem;
    }
  }
}

</style>
