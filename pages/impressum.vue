<template>
  <main>
    <SubNavigation :text="page.title" class="bg-sunshine-100" />
    <!--  -->
    <section class="pt-32 pb-40 relative bg-sunshine-200">
      <div
        class="absolute min-h-screen z-0 left-1/2 transform -translate-x-1/2"
        style="width: 1000px; top: -30px"
        v-html="require('@/assets/svg/rechtliches.svg?include')"
      ></div>
      <div class="container">
        <div class="">
          <div class="flex justify-center items-center flex-col">
            <div
              class="text-gray-100 text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-none"
            >
              {{ page.header.title }}
            </div>
            <h1
              class="max-w-xl text-center text-2xl md:text-3xl text-gray-200 font-light tracking-wide mb-10"
            >
              {{ page.header.subtitle }}
            </h1>
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
    <section class="">
      <div
        class="px-4 py-10 max-w-3xl mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-5xl"
      >
        <article
          class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
        >
          <nuxt-content :document="page"></nuxt-content>
        </article>
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
import MetaTags from "@/mixins/MetaTags.js";

export default {
  components: {
    TealButton,
    NewFooter,
    SubNavigation,
  },
  mixins: [MetaTags],
  layout: "new",
  async asyncData({ $content }) {
    const page = await $content("page/imprint").fetch();

    return {
      page,
    };
  },
};
</script>
