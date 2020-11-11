<template>
  <main class="">
    <SubNavigation :text="page.thankYou.title" class="bg-sunshine-100" />
    <!--  -->
    <SvgHeader
      :title="page.thankYou.header.title"
      :subtitle="page.thankYou.header.subtitle"
      width="800"
      top="-110"
      svg-name="hilfestellung"
    />
    <!---->
    <section class="pt-24 pb-24 md:pt-32 md:pb-40 relative bg-white">
      <div class="container">
        <div class="bg-sunshine-200 border-sunshine-700 rounded-md border-l-4">
          <div class="p-6">
            <h2 class="text-2xl font-bold text-sunshine-900 mb-4">
              {{ page.thankYou.text.title }}
            </h2>
            <p class="mb-1 text-sunshine-900">
              {{ page.thankYou.text.text }}
            </p>
            <p class="">
              <a
                class="underline text-sunshine-900 hover:text-sunshine-600"
                :href="page.thankYou.text.link.to"
                target="_blank"
              >
                {{ page.thankYou.text.link.text }}
              </a>
            </p>
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
import SvgHeader from "@/components/SvgHeader.vue";

export default {
  components: {
    SvgHeader,
    NewFooter,
    SubNavigation,
  },
  layout: "new",
  async asyncData({ $content }) {
    const page = await $content("page/leadGenerator").fetch();

    return {
      page,
    };
  },
  head() {
    return {
      title: this.page.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.page.description,
        },
      ],
    };
  },
};
</script>
