<template>
  <main>
    <TheSubpageHeader :title="page.header.title" :subtitle="page.header.subtitle" :buttonText="buttonText" />
    
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
      page: this.$store.state.pages.blog,
      blogPosts: this.$store.state.blogPosts,
      buttonText: "Jetzt umschauen"
    }
  },
  computed: {
    
  },
  head() {
    return {
      title: this.page.title,
      description: this.page.description
    }
  },
  mounted() {
  }
}

</script>
<style lang="scss" scoped>


</style>
