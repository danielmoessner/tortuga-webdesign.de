<template>
  <nuxt-link
    class="py-3 text-teal-700 hover:text-teal-800 transition ease-in-out duration-150 font-medium"
    :to="to"
    >{{ text }}</nuxt-link
  >
</template>

<script>
export default {
  name: "FooterLink",
  props: {
    text: {
      type: String,
      default: "Link"
    },
    to: {
      type: String,
      default: "#"
    }
  }
};
</script>
