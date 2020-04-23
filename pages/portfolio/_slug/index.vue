<template>
  <main>
    <TheSubpageHeader :title="item.title" :subtitle="subtitle" :buttonText="buttonText" :buttonTarget="buttonTarget" :buttonHref="buttonHref" />
    <section id="start">
      <TheHeaderReflection />
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-3" data-sticky-container>
            <div class="sticky-info">
              <div data-aos="fade-up" data-aos-duration="600">
                <div class="tags">
                  <span class="tag is-dark">{{ itemDate }}</span>
                  <span v-for="(tag, index) in item.tags" :key="index" class="tag is-light">{{ tag }}</span>
                </div>
                <h2 class="sticky-info--title">{{ itemUrlClean }}</h2>
                <p class="sticky-info--text">{{ item.description }}</p>
                <a :href="item.url" target="_blank" class="sticky-info--button">Die Webseite besuchen</a>
              </div>
            </div>
          </div>
          <div class="column is-9">
            <div class="frame">
              <img :src="item.image" :alt="item.title">
            </div>
          </div>
          <div class="column is-12">
            <nuxt-link to="/portfolio" class="button is-dark is-rounded is-outlined" data-aos="fade-up" data-aos-duration="600">Zurück zu allen Referenzen</nuxt-link>
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
      buttonText: "Die Webseite besuchen",
      buttonTarget: "_blank",
      subtitle: "Referenz",
      months: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"]
    }
  },
  computed: {
    item() {
      return this.$store.state.portfolioPosts.filter(item => item.slug === this.slug)[0]
    },
    buttonHref() {
      return this.item.url
    },
    itemDate() {
      const date = new Date(this.item.date)
      return this.months[date.getMonth()] + " " + date.getFullYear()
    },
    itemUrlClean() {
      let url = this.item.url
      return url.replace('https://', '').replace('http://', '')
    }
  },
  head() {
    return {
      title: this.item.title,
      meta: [
        { hid: "description", name: "description", content: this.item.description }
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

  img {
    display: block;
  }

}

</style>
