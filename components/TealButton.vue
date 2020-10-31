<template>
  <div class="flex-inline px-3">
    <component
      :is="which"
      class="custom-button cursor-pointer border-0 active:bg-teal-900 active:text-teal-900 hover:bg-teal-800 hover:text-teal-800 relative bg-teal-700 text-teal-700 inline-flex transition duration-150 ease-in-out focus:outline-none"
      :to="to"
      :href="href"
    >
      <div class="px-4 py-2 text-white text-base leading-6 font-bold">
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
  name: "TealButton",
  components: {
    JustA,
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
    href: {
      type: String,
      default: "",
    },
  },
  computed: {
    which() {
      return this.href == "" ? "nuxt-link" : "just-a";
    },
  },
};
</script>
