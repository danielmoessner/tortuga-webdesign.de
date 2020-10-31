<template>
  <div class="px-3 inline-flex">
    <nuxt-link
      class="cursor-pointer border-0 hover:bg-red-600 hover:text-red-600 active:bg-red-700 active:text-red-700 relative bg-red-500 text-red-500 inline-flex transition duration-150 ease-in-out focus:outline-none"
      :to="to"
    >
      <div class="px-4 py-2 text-white text-base leading-6 font-bold">
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
  name: "RedButton",
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
