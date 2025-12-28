<template>
  <div
    class="flex items-center justify-center min-w-full min-h-screen p-12 bg-teal-700"
  >
    <div class="">
      <h1 class="mb-1 text-3xl font-bold text-gray-100">
        {{ code }} - {{ title }}
      </h1>
      <p class="mb-12 text-gray-100">{{ message }}</p>
      <GrayButton to="/" text="Zur Startseite" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import GrayButton from "@/components/GrayButton.vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});
</script>
