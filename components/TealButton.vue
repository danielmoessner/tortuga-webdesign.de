<template>
  <div class="flex-inline px-3">
    <component
      :is="which"
      class="custom-button cursor-pointer border-0 active:bg-teal-900 active:text-teal-900 hover:bg-teal-800 hover:text-teal-800 relative bg-teal-700 text-teal-700 inline-flex transition duration-150 ease-in-out focus:outline-none"
      :to="to"
      :href="href"
    >
      <div
        class="px-3 md:px-4 py-1 md:py-2 text-white text-sm md:text-base leading-6 font-bold"
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
import JustButton from "@/components/JustButton.vue";

export default {
  name: "TealButton",
  components: {
    JustA,
    JustButton,
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
    submit: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    which() {
      return this.submit
        ? "just-button"
        : this.href == ""
        ? "nuxt-link"
        : "just-a";
    },
  },
};
</script>
