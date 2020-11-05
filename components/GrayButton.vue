<template>
  <div class="flex-inline px-3">
    <component
      :is="which"
      class="custom-button cursor-pointer border-0 active:bg-gray-400 active:text-gray-400 hover:bg-gray-300 hover:text-gray-300 relative bg-gray-200 text-gray-200 inline-flex transition duration-150 ease-in-out focus:outline-none"
      :to="to"
      :href="href"
    >
      <div
        class="px-3 py-1 md:px-4 md:py-2 text-sm text-gray-900 md:text-base leading-6 font-bold"
      >
        {{ text }}
      </div>
      <TriangleSvg class="absolute transform right-0 translate-x-1/2" />
      <TriangleSvg
        class="absolute transform left-0 -translate-x-1/2 rotate-180"
      />
    </component>
  </div>
</template>

<script>
import TriangleSvg from "@/components/TriangleSvg.vue";
import JustA from "@/components/JustA.vue";

export default {
  name: "GrayButton",
  components: {
    TriangleSvg,
    JustA,
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
    href: {
      type: String,
      default: "",
    },
    target: {
      type: String,
      default: "_self",
    },
  },
  computed: {
    which() {
      return this.href == "" ? "nuxt-link" : "just-a";
    },
  },
};
</script>
