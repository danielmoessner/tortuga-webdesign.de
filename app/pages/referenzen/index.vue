<template>
  <main class="">
    <SubNavigation :text="page?.title" class="bg-sunshine-100" />

    <SvgHeader
      width="800"
      top="-120"
      svg-name="referenzen"
      :title="page?.meta.header.title"
      :subtitle="page?.meta.header.subtitle"
    />

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
              <AnimateOnScroll :delay="(index % 3) as DelayInput">
                <ReferenceItem :portfolio-item="item" />
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

<script setup lang="ts">
import SubNavigation from "@/components/SubNavigation.vue";
import NewFooter from "@/components/NewFooter.vue";
import ReferenceItem from "@/components/ReferenceItem.vue";
import SvgHeader from "@/components/SvgHeader.vue";
import AnimateOnScroll, {
  type DelayInput,
} from "@/components/AnimateOnScroll.vue";

definePageMeta({ layout: "new" });

const { data: page } = await useAsyncData("page", () =>
  queryCollection("seiten").path("/page/portfolio").first(),
);

useMeta(page);

const { data: portfolioPosts } = await useAsyncData("portfolio", () =>
  queryCollection("referenzen")
    .where("active", "=", true)
    .order("date", "DESC")
    .all(),
);

interface IPostsByYear {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const portfolioPostsByYear = computed<IPostsByYear>(() => {
  const postsByYear: IPostsByYear = {};

  portfolioPosts.value?.forEach((item) => {
    const year = new Date(item.date).getFullYear();

    if (year in postsByYear) postsByYear[year].push(item);
    else postsByYear[year] = [item];
  });

  Object.keys(postsByYear).forEach((key) => {
    postsByYear[key] = postsByYear[key].sort(
      (a: { date: string }, b: { date: string }) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      },
    );
  });

  return postsByYear;
});

const portfolioPostsByYearSortedKeys = computed<string[]>(() => {
  return Object.keys(portfolioPostsByYear.value).sort().reverse();
});
</script>
