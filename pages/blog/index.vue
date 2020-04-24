<template>
  <main>
    <TheSubpageHeader :title="page.header.title" :subtitle="page.header.subtitle" :buttonText="buttonText" />
    <section id="artikel">
      <TheHeaderReflection />
      <div id="start" class="container">
        <div class="columns is-multiline">
          <div class="column is-4" v-for="article in blogPosts" :key="article.slug">
            <ArticleCard :article="article" />
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
import ArticleCard from "@/components/ArticleCard.vue";

export default {
  components: {
    TheSubpageHeader,
    TheFooter,
    TheHeaderReflection,
    CtaButton,
    PortfolioShowcase,
    ArticleCard
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
      meta: [
        { hid: "description", name: "description", content: this.page.description }
      ]
    }
  },
  mounted() {}
}

</script>
