<template>
  <main>
    <SubNavigation :text="page.title" class="bg-sunshine-100" />
    <!--  -->
    <section class="pt-32 pb-40 relative bg-sunshine-200">
      <div
        class="absolute min-h-screen z-0 mx-auto left-1/2 transform -translate-x-1/2"
        style="width: 900px; top: -165px"
        v-html="require('@/assets/svg/ueber-uns.svg?include')"
      ></div>
      <div class="container">
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
        <div class="grid grid-cols-7 gap-12">
          <div class="col-span-7 md:col-span-4">
            <div class="uppercase font-light text-white tracking-wide mb-3">
              <small>{{ page.about.pretitle }}</small>
            </div>
            <h2
              class="text-4xl text-white font-bold tracking-tight leading-tight"
            >
              {{ page.about.title }}
            </h2>
            <p class="text-lg text-gray-300 mb-10">{{ page.about.subtitle }}</p>
            <p class="text-lg text-gray-100">{{ page.about.text }}</p>
          </div>
          <div class="col-span-7 md:col-span-2 md:col-start-6 row-start-1">
            <div class="roun">
              <img
                class="rounded-full border-4 bg-white border-sunshine-500"
                :src="page.about.image"
                alt="Daniel Mössner"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- faq section -->
    <section class="pt-32 pb-40 bg-gray-100">
      <div class="container">
        <div class="flex flex-col items-center mb-20">
          <div class="max-w-xl">
            <h2 class="text-3xl font-bold text-center">
              {{ page.faq.title }}
            </h2>
          </div>
          <div class="max-w-xl">
            <div class="text-lg text-gray-800">
              {{ page.faq.subtitle }}
            </div>
          </div>
        </div>
        <div class="">
          <div class="">
            <BaseFaq
              v-for="(item, index) in page.faq.questions"
              :key="index"
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
import TealButton from "@/components/TealButton.vue";
import BaseFaq from "@/components/BaseFaq.vue";
import MetaTags from "@/mixins/MetaTags.js";

export default {
  components: {
    BaseFaq,
    TealButton,
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
