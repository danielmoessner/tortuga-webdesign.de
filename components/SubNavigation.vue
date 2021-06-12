<template>
  <nav class="bg-white border-b sticky top-0 z-40">
    <div class="container">
      <div class="flex items-center h-12 md:h-16">
        <h1
          class="
            text-gray-800
            md:text-black
            font-medium
            text-lg
            md:text-xl
            leading-tight
            tracking-tight
          "
        >
          {{ text }}
        </h1>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "SubNavigation",
  props: {
    text: {
      type: String,
      default: "Subnavigation",
    },
  },
};
</script>
