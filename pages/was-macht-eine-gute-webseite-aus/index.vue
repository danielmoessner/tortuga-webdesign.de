<template>
  <main>
    <SubNavigation :text="page.title" class="bg-sunshine-100" />
    <!--  -->
    <section class="pt-32 pb-40 relative bg-sunshine-200">
      <div
        class="absolute min-h-screen z-0 left-1/2 transform -translate-x-1/2"
        style="width: 800px; top: -110px"
        v-html="require('@/assets/svg/hilfestellung.svg?include')"
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
            <span class="tracking-wide text-sm font-light text-white">
              Kostenloses Erstgespräch
            </span>
          </div>
        </div>
      </div>
    </section>
    <!---->
    <section class="pt-32 pb-40 bg-teal-800">
      <div class="container">
        <div class="flex flex-col justify-center items-center mb-24">
          <div class="text-center max-w-2xl flex flex-col items-center">
            <h2 class="font-bold text-gray-100 text-3xl mb-3 leading-tight">
              {{ page.stakes.title }}
            </h2>
            <p class="text-lg text-gray-100 max-w-lg">
              {{ page.stakes.subtitle }}
            </p>
          </div>
        </div>

        <div class="grid gap-y-16 md:gap-y-8 md:grid-cols-3 gap-8 mb-20">
          <div
            v-for="(proposition, index) in page.valuePropositions"
            :key="index"
          >
            <h3 class="text-2xl text-gray-100 font-bold mb-2">
              {{ proposition.title }}
            </h3>
            <p class="text-lg text-gray-200">{{ proposition.text }}</p>
          </div>
        </div>
        <div class="grid lg:grid-cols-3 gap-8">
          <div>
            <h2 class="text-3xl text-gray-100 font-bold">
              {{ page.form.title }}
            </h2>
          </div>
          <div class="lg:col-span-2">
            <div class="bg-sunshine-200 px-8 py-5 rounded-lg">
              <LeadGeneratorForm :download="page.form"
                ><TealButton :submit="true" :text="page.form.button"
              /></LeadGeneratorForm>
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
import LeadGeneratorForm from "@/components/LeadGeneratorForm.vue";
import MetaTags from "@/mixins/MetaTags.js";

export default {
  components: {
    LeadGeneratorForm,
    TealButton,
    NewFooter,
    SubNavigation,
  },
  mixins: [MetaTags],
  layout: "new",
  async asyncData({ $content }) {
    const page = await $content("page/leadGenerator").fetch();

    return {
      page,
    };
  },
  computed: {},
};
</script>
