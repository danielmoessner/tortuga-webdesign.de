<template>
  <nav class="bg-white border-b sticky top-0 z-50">
    <div class="container">
      <div class="flex items-center h-16">
        <h1 class="font-medium text-xl tracking-tight">{{ text }}</h1>
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
      default: "Subnavigation"
    }
  }
};
</script>
