<template>
  <main class="">
    <SubNavigation :text="page.title" class="bg-sunshine-100" />
    <!--  -->
    <SvgHeader
      top="-30"
      width="1000"
      svg-name="rechtliches"
      :title="page.header.title"
      :subtitle="page.header.subtitle"
    />
    <!---->
    <section class="relative bg-white">
      <div
        class="
          px-4
          py-10
          max-w-3xl
          mx-auto
          sm:px-6 sm:py-12
          lg:max-w-4xl lg:py-16 lg:px-8
          xl:max-w-5xl
        "
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
import MetaTags from "@/mixins/MetaTags.js";
import SvgHeader from "@/components/SvgHeader.vue";

export default {
  components: {
    SvgHeader,
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
