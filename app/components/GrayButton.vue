<template>
  <div class="px-3 flex-inline">
    <nuxt-link
      class="relative inline-flex text-gray-200 transition duration-150 ease-in-out bg-gray-200 border-0 cursor-pointer custom-button active:bg-gray-400 active:text-gray-400 hover:bg-gray-300 hover:text-gray-300 focus:outline-none"
      :to="to"
    >
      <div
        class="px-3 py-1 text-sm font-bold leading-6 text-gray-900 md:px-4 md:py-2 md:text-base"
      >
        {{ text }}
      </div>
      <TriangleSvg class="absolute right-0 transform translate-x-1/2" />
      <TriangleSvg
        class="absolute left-0 transform rotate-180 -translate-x-1/2"
      />
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import TriangleSvg from "@/components/TriangleSvg.vue";

export default {
  name: "GrayButton",
  components: {
    TriangleSvg,
  },
  props: {
    to: {
      type: String,
      default: "#",
    },
    text: {
      type: String,
      default: "Click me",
    },
    target: {
      type: String,
      default: "_self",
    },
  },
};
</script>
