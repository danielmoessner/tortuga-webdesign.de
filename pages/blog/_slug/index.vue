<template>
  <main>
    <TheSubpageHeader class="no-print" :title="article.title" :subtitle="subtitle" :buttonText="buttonText" :buttonOnclick="buttonOnclick" />
    <section>
      <TheHeaderReflection class="no-print" />
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-3 no-print" data-sticky-container>
            <div class="sticky-info">
              <div data-aos="fade-up" data-aos-duration="600">
                <div class="tags">
                  <span class="tag is-dark">{{ articleDate }}</span>
                  <span class="tag is-light" v-for="(tag, index) in article.tags" :key="index">#{{ tag }}</span>
                </div>
                <h2 class="sticky-info--title">
                  {{ article.title }}
                </h2>
                <p class="sticky-info--text">{{ article.description }}</p>
                <button class="sticky-info--button" onclick="window.print();return false;">Jetzt drucken</button>
              </div>
            </div>
          </div>
          <div class="column is-9">
            <div class="frame print-area">
              <img :src="article.image" alt="Artikelbild">
              <article v-html="$md.render(article.body)" class="frame--content content">
              </article>
            </div>
          </div>
          <div class="column is-12 no-print">
            <nuxt-link to="/blog" class="button is-dark is-rounded is-outlined" data-aos="fade-up" data-aos-duration="600">Zurück zu allen Artikeln</nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import TheSubpageHeader from "@/components/TheSubpageHeader.vue";
import TheHeaderReflection from "@/components/TheHeaderReflection.vue";

export default {
  components: {
    TheSubpageHeader,
    TheHeaderReflection
  },
  data() {
    return {
      slug: this.$route.params.slug,
      buttonText: "Jetzt drucken",
      buttonOnclick: "window.print();return false;",
      subtitle: "Artikel",
      months: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"]
    }
  },
  computed: {
    article() {
      return this.$store.state.blogPosts.filter(item => item.slug === this.slug)[0]
    },
    articleDate() {
      const date = new Date(this.article.date)
      return date.getDate() + ". " + this.months[date.getMonth()] + " " + date.getFullYear()
    },
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        { hid: "description", name: "description", content: this.article.description }
      ]
    }
  }
}

</script>
<style lang="scss">
.frame {
  border: 5px solid $dark;
  position: relative;
  display: block;
  box-shadow: 0 0 2.8rem 0 rgba($color3, 1);
  margin-bottom: 6rem;
  overflow: hidden;

  &--content {
    padding: 2rem 1rem;
  }

  img {
    display: block;
  }

}

@media print {
  .the-navigation.navbar {
    top: 0 !important;
    visibility: visible !important;
    position: absolute !important;
    transform: none !important;
  }

  .print-area {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 9999;
    background-color: #ffffff;
    box-shadow: none;
  }

  .no-print {
    display: none !important;
  }
}
.sticky-info {
  position: sticky;
  top: 100px;
  &--title {
    @extend .title;
    @extend .is-3;
    &.sticky-info--title {
      margin-bottom: 0.4rem;
    }
  }
  &--text {
    margin-bottom: 2rem;
  }
  &--button {
    @extend .button;
    @extend .is-dark;
    @extend .is-rounded;
    @extend .is-outlined;
  }
  @include until($tablet) {
    margin-bottom: 2.6rem;
  }
}
</style>
