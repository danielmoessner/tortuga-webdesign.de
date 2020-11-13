<template>
  <main class="overflow-hidden">
    <!---->
    <section
      class="bg-teal-800 bg-no-repeat bg-center"
      style="background-size: 1600px auto"
      :style="{
        'background-image': 'url(\'data:image/svg+xml;utf8,' + bgSvg + '\')',
      }"
    >
      <div
        class="bg-gradient-to-tr from-teal-800 md:from-transparent md:to-transparent md:via-transparent to-sunshine-400 via-teal-800 divide-y"
      >
        <div class="container">
          <div class="grid md:grid-cols-2 divide-y md:divide-y-0">
            <div
              v-for="(object, index) in page.header"
              :key="index"
              class="py-16 pr-8"
              :class="{ 'md:pl-8': index % 2 === 1 }"
            >
              <h2
                v-aos
                class="font-bold leading-tight tracking-tight text-gray-100 text-4xl md:text-5xl mb-1"
                :class="
                  index == 0 ? '' : index == 1 ? 'delay-200' : 'delay-400'
                "
              >
                {{ object.title }}
              </h2>
              <p
                v-aos
                class="text-xl delay-75 md:text-2xl text-gray-100 font-light tracking-wide mb-10"
                :class="
                  index == 0
                    ? 'delay-50'
                    : index == 1
                    ? 'delay-250'
                    : 'delay-450'
                "
              >
                {{ object.subtitle }}
              </p>
              <GrayButton
                v-aos
                :text="object.buttonText"
                :to="object.buttonLink"
                :class="
                  index == 0
                    ? 'delay-100'
                    : index == 1
                    ? 'delay-300'
                    : 'delay-500'
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!---->
    <section class="bg-gray-100 pt-20 pb-20 md:pt-32 md:pb-32">
      <div class="container">
        <div class="xl:flex xl:items-center xl:justify-between">
          <h2
            class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
          >
            <span v-aos class="block">{{ page.stakes.title }}</span>
            <span v-aos class="text-teal-700 delay-150 block">{{
              page.stakes.subtitle
            }}</span>
          </h2>
          <div class="mt-8 flex lg:flex-shrink-0 xl:mt-0">
            <div class="flex flex-wrap">
              <GrayButton
                v-aos
                class="mb-2 delay-50"
                href="#was-bringt-eine-webseite"
                :text="page.stakes.button"
              />
              <TealButton
                v-aos
                class="delay-200"
                text="Jetzt zusammenarbeiten"
                to="/kontakt/"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!---->
    <section
      id="was-bringt-eine-webseite"
      class="pt-32 pb-32 md:pt-48 md:pb-56 bg-teal-900"
    >
      <div class="container">
        <div class="max-w-3xl">
          <span
            v-aos
            class="block text-gray-200 text-sm md:text-base font-light uppercase tracking-wider leading-tight"
          >
            {{ page.value.pretitle }}
          </span>
          <h2
            v-aos
            class="delay-100 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-200 mb-6 lg:mb-4"
          >
            {{ page.value.title }}
          </h2>
          <p
            v-aos
            class="delay-150 text-gray-200 text-base md:text-lg max-w-xl"
          >
            {{ page.value.subtitle }}
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-y-12 md:gap-y-16 gap-x-8 mt-24">
          <div
            v-for="(proposition, index) in page.value.propositions"
            :key="index"
            v-aos
            :class="
              index == 0 ? 'delay-350' : index == 1 ? 'delay-500' : 'delay-650'
            "
          >
            <div class="flex-col">
              <h3
                class="text-gray-200 text-xl font-bold flex items-end mb-1 md:mb-6 relative z-10"
              >
                {{ proposition.title }}
              </h3>
              <p class="text-base md:text-lg text-gray-200">
                {{ proposition.text }}
              </p>
            </div>
          </div>
        </div>
        <div class="grid-cols-3 gap-8 hidden lg:grid">
          <div
            class="font-bold text-5xl xl:text-6xl text-teal-800 leading-none mt-8"
          >
            {{ page.value.bottomLeft }}
          </div>
          <div
            class="font-bold text-5xl xl:text-6xl text-teal-800 leading-none mt-8 col-span-2"
          >
            {{ page.value.bottomRight }}
          </div>
        </div>
      </div>
    </section>
    <!---->
    <section
      id="wir-bleiben-langfristig-an-ihrer-seite"
      class="pt-24 pb-32 md:pt-40 md:pb-48 bg-gray-100"
    >
      <div class="container">
        <h2
          v-aos
          class="text-2xl md:text-4xl tracking-tight font-bold mb-8 leading-tight"
        >
          {{ page.guide.title }}
        </h2>
        <div class="grid grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          <div
            class="items-center justify-center flex p-4 md:p-8 h-16 md:h-24 lg:h-32 lg:p-10"
          >
            <img
              v-aos
              src="/logos/thecornerhouse.opt.png"
              alt="The Corner House Logo"
              style="filter: invert(1)"
              class="w-auto h-auto max-h-full delay-100"
            />
          </div>
          <div
            class="items-center justify-center flex p-4 md:p-8 h-16 md:h-24 lg:h-32 lg:p-10"
          >
            <img
              v-aos
              src="/logos/francopioli.opt.png"
              alt="Franco Pioli Logo"
              class="w-auto h-auto max-h-full delay-200"
            />
          </div>
          <div
            class="items-center justify-center flex p-4 md:p-8 h-16 md:h-24 lg:h-32 lg:p-10"
          >
            <img
              v-aos
              src="/logos/susannesoelch.opt.png"
              alt="Susanne Sölch Logo"
              class="w-auto h-auto max-h-full delay-300"
            />
          </div>
          <div
            class="items-center justify-center flex p-4 md:p-8 h-16 md:h-24 lg:h-32 lg:p-10"
          >
            <img
              v-aos
              src="/logos/kues.opt.png"
              alt="Küs Logo"
              class="w-auto h-auto max-h-full delay-400"
            />
          </div>
          <div
            class="items-center justify-center flex p-4 md:p-8 h-16 md:h-24 lg:h-32 lg:p-10"
          >
            <img
              v-aos
              src="/logos/sn-trockenbau.opt.png"
              alt="SN Trockenbau Logo"
              class="w-auto h-auto max-h-full delay-500"
            />
          </div>
          <div
            class="items-center justify-center flex p-4 md:p-8 h-16 md:h-24 lg:h-32 lg:p-10"
          >
            <img
              v-aos
              src="/logos/schaetz.opt.png"
              alt="Schätz Logo"
              class="w-auto h-auto max-h-full delay-600"
              style="filter: invert(1)"
            />
          </div>
          <div
            class="items-center justify-center flex p-4 md:p-8 h-16 md:h-24 lg:h-32 lg:p-10"
          >
            <img
              v-aos
              src="/logos/rabe-sport.opt.png"
              alt="Rabe Sport Logo"
              class="w-auto h-auto max-h-full delay-700"
            />
          </div>
          <div
            class="items-center justify-center flex p-4 md:p-8 h-16 md:h-24 lg:h-32 lg:p-10"
          >
            <img
              v-aos
              src="/logos/qc.opt.png"
              alt="QC Quality Control Logo"
              class="w-auto h-auto max-h-full delay-800"
            />
          </div>
        </div>
        <div class="flex flex-wrap">
          <TealButton
            v-aos
            text="Jetzt zusammenarbeiten"
            to="/kontakt/"
            class="mb-2 delay-200"
          />
          <GrayButton
            v-aos
            class="delay-350"
            :text="page.guide.button"
            to="/referenzen/"
          />
        </div>
      </div>
    </section>
    <!---->
    <section
      id="der-weg-zur-perfekten-webseite"
      class="pt-24 pb-32 md:pt-48 md:pb-56 bg-teal-900"
    >
      <div class="container">
        <div class="max-w-xl">
          <span
            v-aos
            class="block text-gray-200 text-sm md:text-base font-light uppercase tracking-wider leading-tight"
          >
            {{ page.plan.pretitle }}
          </span>
          <h2
            v-aos
            class="delay-100 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-200 mb-6 lg:mb-4"
          >
            {{ page.plan.title }}
          </h2>
          <p v-aos class="delay-250 text-gray-200 text-base md:text-lg">
            {{ page.plan.subtitle }}
          </p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
          <div class="">
            <div v-aos class="flex">
              <div
                class="font-bold text-6xl text-sunshine-200 leading-none mr-6 flex items-start relative flex-col"
              >
                1.
                <div class="tracking-wide text-sm text-sunshine-200">
                  Schritt
                </div>
              </div>
              <div>
                <h3
                  class="text-gray-200 text-xl md:text-2xl font-bold flex items-end mb-2"
                >
                  {{ page.plan.steps[0].title }}
                </h3>
                <p class="text-base md:text-lg text-gray-200">
                  {{ page.plan.steps[0].text }}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div v-aos class="flex delay-150">
              <div
                class="font-bold text-6xl text-sunshine-300 leading-none mr-6 flex items-start relative flex-col"
              >
                2.
                <div class="tracking-wide text-sm text-sunshine-300">
                  Schritt
                </div>
              </div>
              <div>
                <h3
                  class="text-gray-200 text-xl md:text-2xl font-bold flex items-end mb-2"
                >
                  {{ page.plan.steps[1].title }}
                </h3>
                <p class="text-base md:text-lg text-gray-200">
                  {{ page.plan.steps[1].text }}
                </p>
              </div>
            </div>
          </div>
          <div class="">
            <div v-aos class="delay-300 flex">
              <div
                class="font-bold text-6xl text-sunshine-400 leading-none mr-6 flex items-start relative flex-col"
              >
                3.
                <div class="font-bold text-sm text-sunshine-400 tracking-wide">
                  Schritt
                </div>
              </div>
              <div>
                <h3
                  class="text-gray-200 text-xl md:text-2xl font-bold flex items-end mb-2"
                >
                  {{ page.plan.steps[2].title }}
                </h3>
                <p class="text-base md:text-lg text-gray-200">
                  {{ page.plan.steps[2].text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!---->
    <section class="pt-24 pb-32 md:pt-40 md:pb-48 bg-gray-100">
      <div class="container">
        <div class="flex items-center justify-center flex-col">
          <div class="max-w-2xl text-center flex-col flex items-center">
            <h2
              v-aos
              class="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight"
            >
              {{ page.leadGeneratorAd.title }}
            </h2>
            <p
              v-aos
              class="delay-150 text-sm sm:text-base md:text-lg leading-tight max-w-xl mb-12"
              v-html="page.leadGeneratorAd.htmlText"
            ></p>
            <div class="flex flex-wrap justify-center">
              <TealButton
                v-aos
                text="Jetzt zusammenarbeiten"
                to="/kontakt/"
                class="mb-2 delay-300"
              />
              <SunshineButton
                v-aos
                class="delay-100"
                :text="page.leadGeneratorAd.button"
                to="/was-macht-eine-gute-webseite-aus/"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!---->
    <NewFooter
      bg-color="bg-teal-900"
      text-color="text-white"
      link-color="text-sunshine-200"
      hover-color="text-sunshine-300"
      :invert-logo="true"
    />
    <!---->
  </main>
</template>
<script>
import NewFooter from "@/components/NewFooter.vue";
import GrayButton from "@/components/GrayButton.vue";
import TealButton from "@/components/TealButton.vue";
import SunshineButton from "@/components/SunshineButton.vue";
import MetaTags from "@/mixins/MetaTags.js";

export default {
  components: {
    SunshineButton,
    TealButton,
    GrayButton,
    NewFooter,
  },
  mixins: [MetaTags],
  layout: "new",
  async asyncData({ $content }) {
    const page = await $content("page/home").fetch();

    return {
      page,
    };
  },
  data() {
    return {
      headData: {
        script: [
          {
            src: "https://identity.netlify.com/v1/netlify-identity-widget.js",
            async: true,
          },
        ],
      },
    };
  },
  computed: {
    svgUrl() {
      return require("@/assets/svg/index.svg?include");
    },
    bgSvg() {
      return this.svgUrl.split("#").join("%23").replace("\n", "");
    },
  },
};
</script>
