<template>
  <nuxt-link
    class="p-2 text-lg font-medium text-gray-600 transition duration-150 ease-in-out md:text-gray-200 md:hover:text-gray-100 md:ml-4"
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
@reference "@/assets/styles/tailwind.css";

.nuxt-link-exact-active {
  @apply text-gray-800;
}
@screen md {
  .nuxt-link-exact-active {
    @apply text-white;
  }
}
</style>
