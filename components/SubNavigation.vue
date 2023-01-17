<template>
  <nav class="sticky top-0 z-40 bg-white border-b">
    <div class="container" :class="{ small }">
      <div class="flex items-center h-12 md:h-16">
        <span
          class="text-lg font-medium leading-tight tracking-tight text-gray-800 md:text-black md:text-xl"
        >
          {{ text }}
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "SubNavigation",
  props: {
    small: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: "Subnavigation",
    },
  },
};
</script>
