<template>
  <div class="relative flex flex-col items-start group">
    <h2
      class="text-base font-semibold tracking-tight text-gray-800 dark:text-gray-100"
    >
      <div
        class="absolute z-0 transition scale-95 bg-gray-100 opacity-0 -inset-y-6 -inset-x-4 group-hover:scale-100 group-hover:opacity-100 dark:bg-gray-800/50 sm:-inset-x-6 sm:rounded-2xl"
      ></div>
      <nuxt-link :to="`/artikel/${slug}`"
        ><span
          class="absolute z-20 -inset-y-6 -inset-x-4 sm:-inset-x-6 sm:rounded-2xl"
        ></span
        ><span class="relative z-10">{{ title }}</span>
      </nuxt-link>
    </h2>
    <time
      class="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-gray-400 dark:text-gray-500 pl-3.5"
      datetime="2022-09-05"
      ><span
        class="absolute inset-y-0 left-0 flex items-center"
        aria-hidden="true"
        ><span
          class="h-4 w-0.5 rounded-full bg-gray-200 dark:bg-gray-500"
        ></span></span
      >{{ date }}</time
    >
    <p class="relative z-10 mt-2 text-sm text-gray-600 dark:text-gray-400">
      {{ description }}
    </p>
    <div
      aria-hidden="true"
      class="relative z-10 flex items-center mt-4 text-sm font-medium text-teal-600"
    >
      {{ button
      }}<svg
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
    </div>
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
