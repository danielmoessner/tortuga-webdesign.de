<template>
  <section
    class="pt-32 pb-88 md:pb-96 -mb-56 relative bg-sunshine-200 overflow-hidden"
  >
    <div
      class="absolute min-h-screen z-10 left-1/2 transform -translate-x-1/2"
      :style="{ width: width + 'px', top: top + 'px' }"
    >
      <img
        class="w-4/5 pt-10 md:pt-0 mx-auto md:w-full"
        :src="require(`@/assets/svg/${svgName}.svg?data`)"
      />
    </div>
    <div class="container relative z-10">
      <div class="">
        <div class="flex justify-center items-center flex-col">
          <h1
            v-if="srOnlyTitle"
            class="sr-only text-5xl md:text-6xl font-extrabold"
          >
            {{ srOnlyTitle }}
          </h1>
          <AnimateOnScroll>
            <component
              :is="headingElement"
              class="
                text-gray-100 text-4xl
                sm:text-5xl
                md:text-6xl
                font-extrabold
                tracking-tight
                mb-4
                leading-none
              "
            >
              {{ title }}
            </component>
          </AnimateOnScroll>
          <AnimateOnScroll :delay="1">
            <component
              :is="subtitleElement"
              class="
                max-w-xl
                text-center text-xl
                sm:text-2xl
                md:text-3xl
                text-gray-200
                font-light
                tracking-wide
                mb-10
              "
            >
              {{ subtitle }}
            </component>
          </AnimateOnScroll>
          <slot>
            <AnimateOnScroll :delay="2">
              <TealButton
                text="Jetzt zusammenarbeiten"
                to="/kontakt/"
                class="mb-1"
              />
            </AnimateOnScroll>
            <AnimateOnScroll :delay="3">
              <span
                class="
                  block
                  tracking-wide
                  text-xs
                  md:text-sm
                  font-light
                  text-white
                "
              >
                Kostenloses Erstgespräch
              </span>
            </AnimateOnScroll>
          </slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TealButton from "@/components/TealButton.vue";
import AnimateOnScroll from "./AnimateOnScroll.vue";

export default {
  name: "SvgHeader",
  components: {
    TealButton,
    AnimateOnScroll,
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
      default: "Untertitel",
    },
    srOnlyTitle: {
      type: String,
      default: "",
    },
    swapHeadingElement: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    headingElement() {
      return this.srOnlyTitle ? "div" : this.swapHeadingElement ? "div" : "h1";
    },
    subtitleElement() {
      return this.srOnlyTitle ? "div" : this.swapHeadingElement ? "h1" : "div";
    },
  },
};
</script>
