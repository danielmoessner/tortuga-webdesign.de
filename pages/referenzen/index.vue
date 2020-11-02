<template>
  <main class="overflow-hidden">
    <SubNavigation :text="page.title" class="bg-sunshine-100" />
    <!--  -->
    <section class="pt-32 pb-40 relative bg-sunshine-200">
      <div
        class="absolute min-h-screen z-0 left-1/2 transform -translate-x-1/2"
        style="width: 800px; top: -120px"
        v-html="require('@/assets/svg/referenzen.svg?include')"
      ></div>
      <div class="container relative z-10">
        <div class="">
          <div class="flex justify-center items-center flex-col">
            <h1
              class="text-gray-100 text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-none"
            >
              {{ page.header.title }}
            </h1>
            <p
              class="max-w-xl text-center text-2xl md:text-3xl text-gray-200 font-light tracking-wide mb-10"
            >
              {{ page.header.subtitle }}
            </p>
            <TealButton
              text="Jetzt zusammenarbeiten"
              to="/kontakt/"
              class="mb-1"
            />
            <span class="tracking-wide text-sm font-light text-white"
              >Kostenloses Erstgespräch</span
            >
          </div>
        </div>
      </div>
    </section>
    <!---->
    <section class="pt-32 pb-40 bg-teal-800">
      <div class="container">
        <div
          v-for="year in portfolioPostsByYearSortedKeys"
          :key="year"
          class="mb-40"
        >
          <div class="text-5xl text-teal-600 font-black mb-6">
            {{ year }}
          </div>
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
import TealButton from "@/components/TealButton.vue";
import ReferenceItem from "@/components/ReferenceItem.vue";
import MetaTags from "@/mixins/MetaTags.js";

export default {
  components: {
    ReferenceItem,
    TealButton,
    NewFooter,
    SubNavigation,
  },
  mixins: [MetaTags],
  layout: "new",
  async asyncData({ $content }) {
    const page = await $content("page/portfolio").fetch();
    const portfolioPosts = await $content("portfolio").fetch();

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
