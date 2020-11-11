<template>
  <main class="">
    <SubNavigation :text="page.title" class="bg-sunshine-100" />
    <!--  -->
    <SvgHeader
      width="800"
      top="-120"
      svg-name="referenzen"
      :title="page.header.title"
      :subtitle="page.header.subtitle"
    />
    <!---->
    <section class="pt-20 pb-24 md:pt-32 md:pb-40 bg-teal-800 relative">
      <div class="container">
        <div
          v-for="year in portfolioPostsByYearSortedKeys"
          :key="year"
          class="mb-20 md:mb-40"
        >
          <h2
            class="text-4xl md:text-5xl text-sunshine-200 font-black mb-3 md:mb-6"
          >
            {{ year }}
          </h2>
          <div
            class="grid gap-4 sm:gap-8 grid-cols-2 md:gap-20 lg:gap-22 lg:grid-cols-3 xl:gap-25"
          >
            <div
              v-for="(item, index) in portfolioPostsByYear[year]"
              :key="index"
              class="portfolio--item"
            >
              <ReferenceItem :portfolio-item="item" />
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
import SubNavigation from "@/components/SubNavigation.vue";
import NewFooter from "@/components/NewFooter.vue";
import ReferenceItem from "@/components/ReferenceItem.vue";
import MetaTags from "@/mixins/MetaTags.js";
import SvgHeader from "@/components/SvgHeader.vue";

export default {
  components: {
    SvgHeader,
    ReferenceItem,
    NewFooter,
    SubNavigation,
  },
  mixins: [MetaTags],
  layout: "new",
  async asyncData({ $content }) {
    const page = await $content("page/portfolio").fetch();
    const portfolioPosts = await $content("portfolio")
      .where({ active: true })
      .sortBy("date", "desc")
      .fetch();

    return {
      page,
      portfolioPosts,
    };
  },
  data() {
    return {
      buttonText: "Jetzt ansehen",
    };
  },
  computed: {
    portfolioPostsByYear() {
      const postsByYear = {};
      this.portfolioPosts.forEach((item) => {
        const year = new Date(item.date).getFullYear();
        year in postsByYear
          ? postsByYear[year].push(item)
          : (postsByYear[year] = [item]);
      });
      return postsByYear;
    },
    portfolioPostsByYearSortedKeys() {
      return Object.keys(this.portfolioPostsByYear).sort().reverse();
    },
  },
};
</script>
