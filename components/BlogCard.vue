<template>
  <div class="relative flex flex-col items-start group">
    <h2 class="text-base font-semibold tracking-tight text-gray-800">
      <nuxt-link
        :to="`/artikel/${slug}`"
        class="text-teal-700 hover:text-teal-800"
      >
        {{ title }}
      </nuxt-link>
    </h2>
    <time
      class="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-gray-400 pl-3.5"
      :datetime="date"
      ><span
        class="absolute inset-y-0 left-0 flex items-center"
        aria-hidden="true"
        ><span class="h-4 w-0.5 rounded-full bg-gray-200"></span></span
      >{{ date }}</time
    >
    <p class="relative z-10 mt-2 text-sm text-gray-600">
      <nuxt-link :to="`/artikel/${slug}`">
        {{ description }}
      </nuxt-link>
    </p>
    <nuxt-link
      aria-hidden="true"
      :to="`/artikel/${slug}`"
      class="relative z-10 flex items-center mt-4 text-sm font-medium text-teal-600 hover:text-teal-800"
    >
      {{ button }}
      <svg
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        class="w-4 h-4 ml-1 stroke-current"
      >
        <path
          d="M6.75 5.75 9.25 8l-2.5 2.25"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  description?: string;
  slug?: string;
  button?: string;
  date?: string;
}>();
</script>
