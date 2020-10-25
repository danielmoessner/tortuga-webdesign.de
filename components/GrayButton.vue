<template>
  <div class="flex-inline px-3">
    <nuxt-link
      class="custom-button cursor-pointer border-0 active:bg-gray-400 active:text-gray-400 hover:bg-gray-300 hover:text-gray-300 relative bg-gray-200 text-gray-200 inline-flex transition duration-150 ease-in-out focus:outline-none"
      :to="to"
    >
      <div class="px-4 py-2 text-gray-900 text-base leading-6 font-bold">
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
  name: "grayButton",
  components: {
    TriangleSvg
  },
  props: {
    to: {
      type: String,
      default: "#"
    },
    text: {
      type: String,
      default: "Click me"
    }
  }
};
</script>
