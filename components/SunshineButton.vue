<template>
  <div class="flex-inline px-3">
    <nuxt-link
      class="custom-button cursor-pointer border-0 active:bg-sunshine-200 active:text-sunshine-200 hover:bg-sunshine-300 hover:text-sunshine-300 relative bg-sunshine-400 text-sunshine-400 inline-flex transition duration-150 ease-in-out focus:outline-none"
      :to="to"
    >
      <div
        class="px-3 md:px-4 py-1 md:py-2 text-gray-800 text-sm md:text-base leading-6 font-bold"
      >
        {{ text }}
      </div>
      <TriangleSvg class="absolute transform right-0 translate-x-1/2" />
      <TriangleSvg
        class="absolute transform left-0 -translate-x-1/2 rotate-180"
      />
    </nuxt-link>
  </div>
</template>

<script>
import TriangleSvg from "@/components/TriangleSvg.vue";

export default {
  name: "TertiaryButton",
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
  },
};
</script>
