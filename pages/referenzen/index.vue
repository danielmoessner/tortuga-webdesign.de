<template>
  <main class="">
    <SubNavigation :text="page?.title" class="bg-sunshine-100" />
    <!--  -->
    <SvgHeader
      width="800"
      top="-120"
      svg-name="referenzen"
      :title="page?.header.title"
      :subtitle="page?.header.subtitle"
    />
    <!---->
    <section class="relative pt-20 pb-24 bg-teal-800 md:pt-32 md:pb-40">
      <div class="container">
        <div
          v-for="year in portfolioPostsByYearSortedKeys"
          :key="year"
          class="mb-20 md:mb-40"
        >
          <h2
            class="mb-3 text-4xl font-black md:text-5xl text-sunshine-200 md:mb-6"
          >
            {{ year }}
          </h2>
          <div
            class="grid grid-cols-2 gap-4 sm:gap-8 md:gap-20 lg:gap-22 lg:grid-cols-3 xl:gap-25"
          >
            <div
              v-for="(item, index) in portfolioPostsByYear[parseInt(year)]"
              :key="index"
              class="portfolio--item"
            >
              <AnimateOnScroll :delay="index % 3">
                <ReferenceItem :portfolio-item="item" />
              </AnimateOnScroll>
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

<script setup lang="ts">
import { KeysOf } from "nuxt/dist/app/composables/asyncData";
import SubNavigation from "@/components/SubNavigation.vue";
import NewFooter from "@/components/NewFooter.vue";
import ReferenceItem from "@/components/ReferenceItem.vue";
import SvgHeader from "@/components/SvgHeader.vue";
import AnimateOnScroll from "@/components/AnimateOnScroll.vue";

definePageMeta({ layout: "new" });

const { data: page } = await useAsyncData("page", () =>
  queryContent("/page/portfolio").findOne(),
);

const { data: portfolioPosts } = await useAsyncData("portfolio", () =>
  queryContent("portfolio").where({ active: true }).sort({ date: 1 }).find(),
);

interface IPostsByYear {
  [key: number]: any;
}

const portfolioPostsByYear = computed<IPostsByYear>(() => {
  const postsByYear: IPostsByYear = {};

  portfolioPosts.value?.forEach((item) => {
    const year = new Date(item.date).getFullYear();
    year in postsByYear
      ? postsByYear[year].push(item)
      : (postsByYear[year] = [item]);
  });

  return postsByYear;
});

const portfolioPostsByYearSortedKeys = computed<KeysOf<IPostsByYear>>(() => {
  return Object.keys(portfolioPostsByYear.value).sort().reverse();
});
</script>
