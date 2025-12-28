<template>
  <span class="rounded py-1 px-2 text-sm mb-2 mr-2 last:mr-0" :class="classes">
    {{ text }}
  </span>
</template>

<script>
export default {
  name: "RoundedTag",
  props: {
    text: {
      type: String,
      default: "",
    },
    bgColor: {
      type: String,
      default: "bg-teal-700",
    },
    textColor: {
      type: String,
      default: "text-white",
    },
  },
  computed: {
    classes() {
      return this.bgColor + " " + this.textColor;
    },
  },
};
</script>
