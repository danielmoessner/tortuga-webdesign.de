<template>
  <a :href="href"><slot></slot></a>
</template>

<script>
export default {
  name: "JustA",
  props: {
    href: {
      type: String,
      default: "#",
    },
  },
};
</script>
