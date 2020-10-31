<template>
  <div class="flex justify-center items-center">
    <div class="flex w-48 h-24">
      <div
        class="w-24 h-24 flex items-center justify-center"
        :class="'bg-' + color1"
      >
        <div class="w-12 h-12" :class="'bg-' + color2"></div>
      </div>
      <div
        class="w-24 h-24 flex items-center justify-center"
        :class="'bg-' + color2"
      >
        <div class="w-12 h-12" :class="'bg-' + color1"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ColorCombination",
  props: {
    color1: {
      type: String,
      required: true,
    },
    color2: {
      type: String,
      required: true,
    },
  },
};
</script>
