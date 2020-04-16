<template>
  <div>
    <TheNavigation />
    <nuxt />
  </div>
</template>

<script>
  import TheNavigation from "../components/TheNavigation";

  export default {
    components: {
      TheNavigation
    },
    head() {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ],
    }
  }
</script>

<style lang="scss">
  // automatically imports the main style sheet
</style>
