<template>
  <main>
    <!---->
    <section
      class="bg-teal-800 bg-no-repeat bg-center"
      style="background-image: url('/drawing.svg');background-size: 1600px auto;">
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
                class="font-bold leading-tight tracking-tight text-gray-100 text-5xl mb-1"
              >
                {{ object.title }}
              </h2>
              <p class="text-2xl text-gray-100 font-light tracking-wide mb-10">
                {{ object.subtitle }}
              </p>
              <GrayButton
                :text="object.buttonText"
                :to="object.buttonLink"
                class="opacity-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!---->
    <section class="bg-gray-100 pt-32 pb-32">
      <div class="container">
        <div class="xl:flex xl:items-center xl:justify-between">
          <h2
            class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
          >
            {{ page.stakes.title }}
            <br />
            <span class="text-teal-700">{{ page.stakes.subtitle }}</span>
          </h2>
          <div class="mt-8 flex lg:flex-shrink-0 xl:mt-0">
            <div class="flex flex-wrap">
              <GrayButton
                class="mb-2"
                href="#was-bringt-eine-webseite"
                :text="page.stakes.button"
              />
              <TealButton text="Jetzt zusammenarbeiten" to="/kontakt/" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!---->
    <section id="was-bringt-eine-webseite" class="pt-48 pb-56 bg-teal-900">
      <div class="container">
        <div class="max-w-3xl">
          <span
            class="text-gray-200 font-light uppercase tracking-wider leading-tight"
          >
            {{ page.value.pretitle }}
          </span>
          <h2
            class="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-200 mb-6 lg:mb-4"
          >
            {{ page.value.title }}
          </h2>
          <p class="text-gray-200 text-base md:text-lg max-w-xl">
            {{ page.value.subtitle }}
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-y-16 gap-8 mt-24">
          <div
            v-for="(proposition, index) in page.value.propositions"
            :key="index"
            class=""
          >
            <div class="flex-col">
              <h3
                class="text-gray-200 text-xl font-bold flex items-end mb-3 md:mb-6 relative z-10"
              >
                {{ proposition.title }}
              </h3>
              <p class="text-lg text-gray-200">
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
      class="pt-40 pb-48 bg-gray-100"
    >
      <div class="container">
        <h2
          class="text-3xl md:text-4xl tracking-tight font-bold mb-8 leading-tight"
        >
          {{ page.guide.title }}
        </h2>
        <div class="grid grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          <div
            class="items-center justify-center flex p-4 md:p-8 h-16 md:h-24 lg:h-32 lg:p-10"
          >
            <img
              src="/logos/thecornerhouse.opt.png"
              alt="The Corner House Logo"
              style="filter: invert(1)"
              class="w-auto h-auto max-h-full"
            />
          </div>
          <div
            class="items-center justify-center flex p-4 md:p-8 h-16 md:h-24 lg:h-32 lg:p-10"
          >
            <img
              src="/logos/francopioli.opt.png"
              alt="Franco Pioli Logo"
              class="w-auto h-auto max-h-full"
            />
          </div>
          <div
            class="items-center justify-center flex p-4 md:p-8 h-16 md:h-24 lg:h-32 lg:p-10"
          >
            <img
              src="/logos/susannesoelch.opt.png"
              alt="Susanne Sölch Logo"
              class="w-auto h-auto max-h-full"
            />
          </div>
          <div
            class="items-center justify-center flex p-4 md:p-8 h-16 md:h-24 lg:h-32 lg:p-10"
          >
            <img
              src="/logos/kues.opt.png"
              alt="Küs Logo"
              class="w-auto h-auto max-h-full"
            />
          </div>
          <div
            class="items-center justify-center flex p-4 md:p-8 h-16 md:h-24 lg:h-32 lg:p-10"
          >
            <img
              src="/logos/sn-trockenbau.opt.png"
              alt="SN Trockenbau Logo"
              class="w-auto h-auto max-h-full"
            />
          </div>
          <div
            class="items-center justify-center flex p-4 md:p-8 h-16 md:h-24 lg:h-32 lg:p-10"
          >
            <img
              src="/logos/schaetz.opt.png"
              alt="Schätz Logo"
              class="w-auto h-auto max-h-full"
              style="filter: invert(1)"
            />
          </div>
          <div
            class="items-center justify-center flex p-4 md:p-8 h-16 md:h-24 lg:h-32 lg:p-10"
          >
            <img
              src="/logos/rabe-sport.opt.png"
              alt="Rabe Sport Logo"
              class="w-auto h-auto max-h-full"
            />
          </div>
          <div
            class="items-center justify-center flex p-4 md:p-8 h-16 md:h-24 lg:h-32 lg:p-10"
          >
            <img
              src="/logos/qc.opt.png"
              alt="QC Quality Control Logo"
              class="w-auto h-auto max-h-full"
            />
          </div>
        </div>
        <div class="flex flex-wrap">
          <TealButton
            text="Jetzt zusammenarbeiten"
            to="/kontakt/"
            class="mb-2"
          />
          <GrayButton :text="page.guide.button" to="/referenzen/" />
        </div>
      </div>
    </section>
    <!---->
    <section
      id="der-weg-zur-perfekten-webseite"
      class="pt-48 pb-56 bg-teal-900"
    >
      <div class="container">
        <div class="max-w-xl">
          <span
            class="text-gray-200 font-light uppercase tracking-wider leading-tight"
          >
            {{ page.plan.pretitle }}
          </span>
          <h2
            class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-200 mb-6 lg:mb-4"
          >
            {{ page.plan.title }}
          </h2>
          <p class="text-gray-200 text-base md:text-lg">
            {{ page.plan.subtitle }}
          </p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
          <div class="">
            <div class="flex">
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
            <div class="flex">
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
                  class="text-gray-200 text-2xl font-bold flex items-end mb-2"
                >
                  {{ page.plan.steps[1].title }}
                </h3>
                <p class="text-lg text-gray-200">
                  {{ page.plan.steps[1].text }}
                </p>
              </div>
            </div>
          </div>
          <div class="">
            <div class="flex">
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
                  class="text-gray-200 text-2xl font-bold flex items-end mb-2"
                >
                  {{ page.plan.steps[2].title }}
                </h3>
                <p class="text-lg text-gray-200">
                  {{ page.plan.steps[2].text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!---->
    <section class="pt-40 pb-48 bg-gray-100">
      <div class="container">
        <div class="flex items-center justify-center flex-col">
          <div class="max-w-2xl text-center flex-col flex items-center">
            <h2
              class="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight"
            >
              {{ page.leadGeneratorAd.title }}
            </h2>
            <p
              class="text-base sm:text-lg leading-tight max-w-xl mb-12"
              v-html="page.leadGeneratorAd.htmlText"
            ></p>
            <div class="flex flex-wrap justify-center">
              <TealButton
                text="Jetzt zusammenarbeiten"
                to="/kontakt/"
                class="mb-2"
              />
              <SunshineButton
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
};
</script>
