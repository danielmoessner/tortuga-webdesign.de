<template>
  <nuxt-link
    class="text-sm md:text-base py-1 text-teal-700 hover:text-teal-800 transition ease-in-out duration-150 font-medium inline-block"
    :class="linkColor"
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
      default: "Link",
    },
    to: {
      type: String,
      default: "#",
    },
    color: {
      type: String,
      default: "text-teal-700",
    },
    hoverColor: {
      type: String,
      default: "text-teal-800",
    },
  },
  computed: {
    linkColor() {
      return this.color + " hover:" + this.hoverColor;
    },
  },
};
</script>
