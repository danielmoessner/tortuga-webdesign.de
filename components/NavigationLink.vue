<template>
  <nuxt-link
    class="text-gray-600 md:text-gray-200 md:hover:text-gray-100 text-lg p-2 md:ml-4 transition ease-in-out duration-150 font-medium"
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
      default: "/",
    },
    text: {
      type: String,
      default: "Startseite",
    },
  },
};
</script>

<style scoped>
.nuxt-link-exact-active {
  @apply text-gray-800;
}
@screen md {
  .nuxt-link-exact-active {
    @apply text-white;
  }
}
</style>
