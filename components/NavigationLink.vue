<template>
  <nuxt-link
    class="text-gray-200 hover:text-gray-100 text-lg p-2 ml-4 transition ease-in-out duration-150 font-medium"
    :to="to"
  >
    {{ text }}
  </nuxt-link>
</template>

<script>
export default {
  name: "NavigationLink",
  props: {
    to: {
      type: String,
      default: "/"
    },
    text: {
      type: String,
      default: "Startseite"
    }
  }
};
</script>

<style scoped>
.nuxt-link-exact-active {
  @apply text-white;
}
</style>
