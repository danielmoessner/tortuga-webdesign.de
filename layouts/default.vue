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
    }
  }
</script>

<style lang="scss">
  // automatically imports the main style sheet
</style>
