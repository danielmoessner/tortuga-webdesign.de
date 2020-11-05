<template>
  <section class="pt-32 pb-96 -mb-56 relative bg-sunshine-200 overflow-hidden">
    <div
      class="absolute min-h-screen z-10 left-1/2 transform -translate-x-1/2"
      :style="{ width: width + 'px', top: top + 'px' }"
      v-html="require(`@/assets/svg/${svgName}.svg?include`)"
    ></div>
    <div class="container relative z-10">
      <div class="">
        <div class="flex justify-center items-center flex-col">
          <h1
            v-if="srOnlyTitle"
            class="sr-only text-5xl md:text-6xl font-extrabold"
          >
            {{ srOnlyTitle }}
          </h1>
          <component
            :is="headingElement"
            class="text-gray-100 text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-none"
          >
            {{ title }}
          </component>
          <div
            class="max-w-xl text-center text-2xl md:text-3xl text-gray-200 font-light tracking-wide mb-10"
          >
            {{ subtitle }}
          </div>
          <TealButton
            text="Jetzt zusammenarbeiten"
            to="/kontakt/"
            class="mb-1"
          />
          <span class="tracking-wide text-sm font-light text-white">
            Kostenloses Erstgespräch
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TealButton from "@/components/TealButton.vue";

export default {
  name: "SvgHeader",
  components: {
    TealButton,
  },
  props: {
    width: {
      type: String,
      default: "800",
    },
    top: {
      type: String,
      default: "0",
    },
    svgName: {
      type: String,
      default: "hilfestellung",
    },
    title: {
      type: String,
      default: "Titel",
    },
    subtitle: {
      type: String,
      default: "Untertitle",
    },
    srOnlyTitle: {
      type: String,
      default: "",
    },
  },
  computed: {
    headingElement() {
      return this.srOnlyTitle ? "div" : "h1";
    },
  },
};
</script>
