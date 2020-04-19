<template>
  <main>
    <TheHeader />
    <!-- <BaseDivider /> -->
    <TheStakes />
    <TheValue />
    <!-- <BaseDivider /> -->
    <TheGuide />
    <ThePlan />
    <!-- <BaseDivider /> -->
    <TheFooter />
  </main>
</template>
<script>
import TheHeader from "../components/TheHeader.vue";
import TheStakes from "../components/TheStakes.vue";
import TheValue from "../components/TheValue.vue";
import BaseDivider from "../components/BaseDivider.vue";
import TheGuide from "../components/TheGuide.vue";
import ThePlan from "../components/ThePlan.vue";
import TheFooter from "../components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheStakes,
    TheValue,
    BaseDivider,
    TheGuide,
    ThePlan,
    TheFooter
  },
  data() {
    return {
      page: this.$store.state.pages.home
    }
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ],
      title: this.page.title,
      meta: [
        { hid: "description", name: "description", content: this.page.description }
      ]
    }
  }
}

</script>
