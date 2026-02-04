<template>
  <main class="overflow-hidden">
    <section
      class="bg-teal-800 bg-center bg-no-repeat"
      style="background-size: 1600px auto"
      :style="{
        'background-image': 'url(/svg/index.svg)',
      }"
    >
      <div
        class="divide-y bg-linear-to-tr from-teal-800 md:from-transparent md:to-transparent md:via-transparent to-sunshine-400 via-teal-800"
      >
        <div class="container">
          <h1 class="sr-only">Leistungen</h1>
          <div class="grid divide-y md:grid-cols-2 md:divide-y-0">
            <div
              v-for="(object, index) in page?.meta.header"
              :key="index"
              class="py-16 pr-8"
              :class="{ 'md:pl-8': index % 2 === 1 }"
            >
              <AnimateOnScroll :delay="index as DelayInput">
                <h2
                  class="mb-1 text-4xl font-bold leading-tight tracking-tight text-gray-100 md:text-5xl"
                >
                  {{ object.title }}
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll :delay="(index + 1) as DelayInput">
                <p
                  class="mb-10 text-xl font-light tracking-wide text-gray-100 md:text-2xl"
                >
                  {{ object.subtitle }}
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll :delay="(index + 2) as DelayInput">
                <GrayButton :text="object.buttonText" :to="object.buttonLink" />
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="pt-20 pb-20 bg-gray-100 md:pt-32 md:pb-32">
      <div class="container">
        <div class="xl:flex xl:items-center xl:justify-between">
          <h2
            class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
          >
            <AnimateOnScroll>
              <span class="block">
                {{ page?.meta.stakes.title }}
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll :delay="1">
              <span class="block text-teal-700">
                {{ page?.meta.stakes.subtitle }}
              </span>
            </AnimateOnScroll>
          </h2>
          <div class="flex mt-8 lg:flex-shrink-0 xl:mt-0">
            <div class="flex flex-wrap">
              <AnimateOnScroll :delay="1">
                <GrayButton
                  class="mb-2 delay-50"
                  to="#was-bringt-eine-website"
                  :text="page?.meta.stakes.button"
                />
              </AnimateOnScroll>
              <AnimateOnScroll :delay="2">
                <TealButton text="Jetzt zusammenarbeiten" to="/kontakt/" />
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="was-bringt-eine-website"
      class="pt-32 pb-32 bg-teal-900 md:pt-48 md:pb-56"
    >
      <div class="container">
        <div class="max-w-3xl">
          <AnimateOnScroll>
            <span
              class="block text-sm font-light leading-tight tracking-wider text-gray-200 uppercase md:text-base"
            >
              {{ page?.meta.value.pretitle }}
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll :delay="1">
            <h2
              class="mb-6 text-3xl font-bold leading-tight text-gray-200 sm:text-4xl md:text-5xl lg:mb-4"
            >
              {{ page?.meta.value.title }}
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll :delay="2">
            <p class="max-w-xl text-base text-gray-200 delay-150 md:text-lg">
              {{ page?.meta.value.subtitle }}
            </p>
          </AnimateOnScroll>
        </div>
        <div class="grid mt-24 md:grid-cols-3 gap-y-12 md:gap-y-16 gap-x-8">
          <AnimateOnScroll
            v-for="(proposition, index) in page?.meta.value.propositions"
            :key="index"
            :delay="(index + 1) as DelayInput"
          >
            <div>
              <div class="flex-col">
                <h3
                  class="relative z-10 flex items-end mb-1 text-xl font-bold text-gray-200 md:mb-6"
                >
                  {{ proposition.title }}
                </h3>
                <p class="text-base text-gray-200 md:text-lg">
                  {{ proposition.text }}
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>

    <section
      id="wir-bleiben-langfristig-an-ihrer-seite"
      class="pt-24 pb-32 bg-gray-100 md:pt-40 md:pb-48"
    >
      <div class="container">
        <AnimateOnScroll>
          <h2
            class="mb-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl"
          >
            {{ page?.meta.guide.title }}
          </h2>
        </AnimateOnScroll>
        <div class="grid grid-cols-2 gap-8 mb-16 xl:grid-cols-4">
          <AnimateOnScroll
            v-for="(customer, index) in page?.meta.guide.customers"
            :key="customer.name"
            :delay="index as DelayInput"
            class="flex items-center justify-center h-16 p-4 md:h-24 md:p-8 lg:h-32 lg:p-10"
          >
            <img
              :src="customer.image"
              :alt="customer.name"
              class="max-w-full max-h-full delay-100"
            />
          </AnimateOnScroll>
        </div>
        <div class="flex flex-wrap">
          <AnimateOnScroll :delay="2">
            <TealButton
              text="Jetzt zusammenarbeiten"
              to="/kontakt/"
              class="mb-2"
            />
          </AnimateOnScroll>
          <AnimateOnScroll :delay="3">
            <GrayButton
              class=""
              :text="page?.meta.guide.button"
              to="/referenzen/"
            />
          </AnimateOnScroll>
        </div>
      </div>
    </section>

    <section
      id="der-weg-zur-perfekten-website"
      class="pt-24 pb-32 bg-teal-900 md:pt-48 md:pb-56"
    >
      <div class="container">
        <div class="max-w-xl">
          <AnimateOnScroll>
            <span
              class="block text-sm font-light leading-tight tracking-wider text-gray-200 uppercase md:text-base"
            >
              {{ page?.meta.plan.pretitle }}
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll :delay="1">
            <h2
              class="mb-6 text-3xl font-bold leading-tight text-gray-200 md:text-4xl lg:text-5xl lg:mb-4"
            >
              {{ page?.meta.plan.title }}
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll :delay="2">
            <p class="text-base text-gray-200 md:text-lg">
              {{ page?.meta.plan.subtitle }}
            </p>
          </AnimateOnScroll>
        </div>
        <div class="grid grid-cols-1 gap-12 mt-16 lg:grid-cols-3">
          <div class="">
            <AnimateOnScroll>
              <div class="flex">
                <div
                  class="relative flex flex-col items-start mr-6 text-6xl font-bold leading-none text-sunshine-200"
                >
                  1.
                  <div class="text-sm tracking-wide text-sunshine-200">
                    Schritt
                  </div>
                </div>
                <div>
                  <h3
                    class="flex items-end mb-2 text-xl font-bold text-gray-200 md:text-2xl"
                  >
                    {{ page?.meta.plan.steps[0].title }}
                  </h3>
                  <p class="text-base text-gray-200 md:text-lg">
                    {{ page?.meta.plan.steps[0].text }}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
          <div>
            <AnimateOnScroll :delay="1">
              <div class="flex">
                <div
                  class="relative flex flex-col items-start mr-6 text-6xl font-bold leading-none text-sunshine-300"
                >
                  2.
                  <div class="text-sm tracking-wide text-sunshine-300">
                    Schritt
                  </div>
                </div>
                <div>
                  <h3
                    class="flex items-end mb-2 text-xl font-bold text-gray-200 md:text-2xl"
                  >
                    {{ page?.meta.plan.steps[1].title }}
                  </h3>
                  <p class="text-base text-gray-200 md:text-lg">
                    {{ page?.meta.plan.steps[1].text }}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
          <div class="">
            <AnimateOnScroll :delay="2">
              <div class="flex">
                <div
                  class="relative flex flex-col items-start mr-6 text-6xl font-bold leading-none text-sunshine-400"
                >
                  3.
                  <div
                    class="text-sm font-bold tracking-wide text-sunshine-400"
                  >
                    Schritt
                  </div>
                </div>
                <div>
                  <h3
                    class="flex items-end mb-2 text-xl font-bold text-gray-200 md:text-2xl"
                  >
                    {{ page?.meta.plan.steps[2].title }}
                  </h3>
                  <p class="text-base text-gray-200 md:text-lg">
                    {{ page?.meta.plan.steps[2].text }}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>

    <section class="pt-24 pb-32 bg-gray-100 md:pt-40 md:pb-48">
      <div class="container">
        <div class="flex flex-col items-center justify-center">
          <div class="flex flex-col items-center max-w-2xl text-center">
            <AnimateOnScroll>
              <h2
                class="mb-4 text-3xl font-extrabold leading-tight tracking-tight md:text-4xl"
              >
                {{ page?.meta.leadGeneratorAd.title }}
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll :delay="1">
              <p
                class="max-w-xl mb-12 text-sm leading-tight sm:text-base md:text-lg"
                v-html="page?.meta.leadGeneratorAd.htmlText"
              />
            </AnimateOnScroll>
            <div class="flex flex-wrap justify-center">
              <AnimateOnScroll>
                <TealButton
                  text="Jetzt zusammenarbeiten"
                  to="/kontakt/"
                  class="mb-2 delay-300"
                />
              </AnimateOnScroll>
              <AnimateOnScroll :delay="1">
                <SunshineButton
                  :text="page?.meta.leadGeneratorAd.button"
                  to="/was-macht-eine-gute-website-aus"
                />
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </div>
    </section>

    <NewFooter
      bg-color="bg-teal-900"
      text-color="text-white"
      link-color="text-sunshine-200"
      hover-color="text-sunshine-300"
      :invert-logo="true"
    />
  </main>
</template>

<script lang="ts" setup>
import NewFooter from "@/components/NewFooter.vue";
import GrayButton from "@/components/GrayButton.vue";
import TealButton from "@/components/TealButton.vue";
import SunshineButton from "@/components/SunshineButton.vue";
import AnimateOnScroll, {
  type DelayInput,
} from "@/components/AnimateOnScroll.vue";

definePageMeta({ layout: "new" });

const { data: page } = await useAsyncData(() =>
  queryCollection("seiten").path("/page/home").first(),
);

useMeta(page);
</script>
