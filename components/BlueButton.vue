<template>
  <div class="px-3 inline-flex">
    <nuxt-link
      class="
        cursor-pointer
        border-0
        hover:bg-blue-600 hover:text-blue-600
        active:bg-blue-700 active:text-blue-700
        relative
        bg-blue-500
        text-blue-500
        inline-flex
        transition
        duration-150
        ease-in-out
        focus:outline-none
      "
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
  name: "BlueButton",
  components: {
    TriangleSvg,
  },
  props: {
    text: {
      type: String,
      default: "Click me",
    },
    to: {
      type: String,
      default: "#",
    },
  },
};
</script>
