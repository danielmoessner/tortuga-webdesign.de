<template>
  <main class="">
    <SubNavigation :text="title" class="bg-sunshine-100" />
    <!---->
    <SvgHeader
      :title="item.title"
      :sr-only-title="item.srOnlyTitle"
      subtitle="Leistung"
      top="-110"
      width="800"
      svg-name="hilfestellung"
    />
    <!---->
    <section class="relative pt-32 pb-40 z-0 bg-white">
      <div
        class="px-4 py-10 max-w-3xl mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-5xl"
      >
        <article
          class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto"
        >
          <nuxt-content :document="item"></nuxt-content>
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
  async asyncData({ $content, params, error }) {
    let item;
    try {
      // item = await $content("service", params.slug).fetch();
      item = await $content(`service/${params.slug}`).fetch();
    } catch (e) {
      error({ message: "Leistung nicht gefunden." });
    }

    return {
      item,
    };
  },
  computed: {
    title() {
      return `${this.item.title} - ${this.item.subtitle}`;
    },
    description() {
      return this.item.metaDescription;
    },
  },
};
</script>
