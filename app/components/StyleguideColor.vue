<template>
  <div
    class="h-12 relative flex items-center justify-center styleguide-color"
    :style="{ background: hexColor }"
    :class="{ 'font-bold underline': selected }"
  >
    {{ color }}
  </div>
</template>

<script>
export default {
  name: "StyleguideColor",
  props: {
    color: {
      type: String,
      required: true,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    hexColor() {
      return "#" + this.color;
    },
  },
};
</script>

<style>
.styleguide-color:nth-child(n + 6) {
  color: white;
}
</style>
