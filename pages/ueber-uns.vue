<template>
  <main class="">
    <SubNavigation :text="page.title" class="bg-sunshine-100" />
    <!--  -->
    <SvgHeader
      top="-165"
      width="900"
      svg-name="ueber-uns"
      :title="page.header.title"
      :subtitle="page.header.subtitle"
    />
    <!---->
    <section class="pt-20 pb-20 md:pt-32 md:pb-40 bg-teal-800 relative">
      <div class="container">
        <div class="grid grid-cols-7 gap-12">
          <div class="col-span-7 md:col-span-4">
            <div
              v-aos
              class="before-enter uppercase font-light text-sm md:text-base text-white tracking-wider leading-tight"
            >
              <span>{{ page.about.pretitle }}</span>
            </div>
            <h2
              v-aos
              class="beofre-enter delay-100 text-3xl md:text-4xl text-white font-bold tracking-tight leading-tight mb-2"
            >
              {{ page.about.title }}
            </h2>
            <p
              v-aos
              class="before-enter delay-200 text-base md:text-lg text-gray-300 mb-10"
            >
              {{ page.about.subtitle }}
            </p>
            <p
              v-aos
              class="before-enter delay-300 text-base md:text-lg text-gray-100"
            >
              {{ page.about.text }}
            </p>
          </div>
          <div class="col-span-7 md:col-span-2 md:col-start-6 row-start-1">
            <div class="w-4/5 md:w-full mx-auto">
              <img
                v-aos
                class="before-enter rounded-full border-4 bg-white border-sunshine-500"
                :src="require(`@/content/media/${page.about.image}?sqlib`)"
                alt="Daniel Mössner"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- faq section -->
    <section class="pt-20 md:pt-32 pb-20 md:pb-40 bg-gray-100">
      <div class="container">
        <div class="flex flex-col items-center mb-10 md:mb-20">
          <div v-aos class="before-enter max-w-xl">
            <h2 class="text-2xl md:text-3xl font-bold text-center">
              {{ page.faq.title }}
            </h2>
          </div>
          <div v-aos class="before-enter delay-100 max-w-xl">
            <div class="text-base md:text-lg text-gray-800">
              {{ page.faq.subtitle }}
            </div>
          </div>
        </div>
        <div class="">
          <div class="">
            <BaseFaq
              v-for="(item, index) in page.faq.questions"
              :key="index"
              v-aos
              class="before-enter"
              :question="item.question"
              :answer="item.answer"
            />
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
import BaseFaq from "@/components/BaseFaq.vue";
import MetaTags from "@/mixins/MetaTags.js";
import SvgHeader from "@/components/SvgHeader.vue";

export default {
  components: {
    SvgHeader,
    BaseFaq,
    NewFooter,
    SubNavigation,
  },
  mixins: [MetaTags],
  layout: "new",
  async asyncData({ $content }) {
    const page = await $content("page/about").fetch();

    return {
      page,
    };
  },
  computed: {},
};
</script>
