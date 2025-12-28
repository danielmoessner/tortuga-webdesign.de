<template>
  <main class="">
    <SubNavigation :text="page?.title" class="bg-sunshine-100" />
    <SvgHeader
      :title="page?.meta.header.title"
      :subtitle="page?.meta.header.subtitle"
      width="800"
      top="-110"
      svg-name="hilfestellung"
      :swap-heading-element="true"
    />
    <section class="relative pt-24 pb-24 bg-teal-800 md:pt-32 md:pb-40">
      <div class="container">
        <div class="flex flex-col items-center justify-center mb-24">
          <div class="flex flex-col items-center max-w-2xl text-center">
            <AnimateOnScroll>
              <h2
                class="mb-3 text-2xl font-bold leading-tight text-gray-100 md:text-3xl"
              >
                {{ page?.meta.stakes.title }}
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll :delay="1">
              <p class="max-w-lg text-base text-gray-100 md:text-lg">
                {{ page?.meta.stakes.subtitle }}
              </p>
            </AnimateOnScroll>
          </div>
        </div>

        <div class="grid gap-8 mb-20 gap-y-16 md:gap-y-8 md:grid-cols-3">
          <AnimateOnScroll
            v-for="(proposition, index) in page?.meta.valuePropositions"
            :key="index"
            :delay="index as DelayInput"
          >
            <div>
              <h3 class="mb-2 text-xl font-bold text-gray-100 md:text-2xl">
                {{ proposition.title }}
              </h3>
              <p class="text-base text-gray-200 md:text-lg">
                {{ proposition.text }}
              </p>
            </div>
          </AnimateOnScroll>
        </div>
        <div class="flex justify-center">
          <AnimateOnScroll>
            <h2 class="text-3xl font-bold text-gray-100 text-center">
              {{ page?.meta.form.title }}
            </h2>
            <div class="mt-5 text-center">
              <SunshineButton
                text="Zum PDF"
                href="/hilfestellungen/was-macht-eine-gute-webseite-aus.pdf"
              />
            </div>
          </AnimateOnScroll>
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
import SubNavigation from "@/components/SubNavigation.vue";
import NewFooter from "@/components/NewFooter.vue";
import SvgHeader from "@/components/SvgHeader.vue";
import AnimateOnScroll, {
  type DelayInput,
} from "@/components/AnimateOnScroll.vue";

definePageMeta({ layout: "new" });

const { data: page } = await useAsyncData("leadgenerator", () =>
  queryCollection("seiten").path("/page/leadgenerator").first(),
);

useMeta(page);
</script>
