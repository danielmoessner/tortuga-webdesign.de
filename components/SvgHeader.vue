<template>
  <section
    class="relative pt-32 -mb-56 overflow-hidden pb-88 md:pb-96 bg-sunshine-200"
  >
    <div
      class="absolute z-10 min-h-screen transform -translate-x-1/2 left-1/2"
      :style="{ width: width + 'px', top: top + 'px' }"
    >
      <img
        class="w-4/5 pt-10 mx-auto md:pt-0 md:w-full"
        :src="svgUrl"
        alt="Header Bild"
      />
    </div>
    <div class="container relative z-10">
      <div class="">
        <div class="flex flex-col items-center justify-center">
          <h1
            v-if="srOnlyTitle"
            class="text-5xl font-extrabold sr-only md:text-6xl"
          >
            {{ srOnlyTitle }}
          </h1>
          <AnimateOnScroll>
            <component
              :is="headingElement"
              class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-100 sm:text-5xl md:text-6xl"
            >
              {{ title }}
            </component>
          </AnimateOnScroll>
          <AnimateOnScroll :delay="1">
            <component
              :is="subtitleElement"
              class="max-w-xl mb-10 text-xl font-light tracking-wide text-center text-gray-200 sm:text-2xl md:text-3xl"
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
                class="block text-xs font-light tracking-wide text-white md:text-sm"
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

<script lang="ts" setup>
import AnimateOnScroll from "./AnimateOnScroll.vue";
import TealButton from "@/components/TealButton.vue";
import rechtlichesSvg from "~/assets/svg/rechtliches.svg";
import ueberUnsSvg from "~/assets/svg/ueber-uns.svg";
import hilfestellungSvg from "~/assets/svg/hilfestellung.svg";
import referenzenSvg from "~/assets/svg/referenzen.svg";
import kontaktSvg from "~/assets/svg/kontakt.svg";

const props = defineProps({
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
});
const { srOnlyTitle, swapHeadingElement, svgName } = toRefs(props);

const svgUrl = computed(() => {
  if (svgName.value === "ueber-uns") return ueberUnsSvg;
  if (svgName.value === "rechtliches") return rechtlichesSvg;
  if (svgName.value === "hilfestellung") return hilfestellungSvg;
  if (svgName.value === "referenzen") return referenzenSvg;
  if (svgName.value === "kontakt") return kontaktSvg;
});

const headingElement = computed(() => {
  return srOnlyTitle.value ? "div" : swapHeadingElement.value ? "div" : "h1";
});

const subtitleElement = computed(() => {
  return srOnlyTitle.value ? "div" : swapHeadingElement.value ? "h1" : "div";
});
</script>
