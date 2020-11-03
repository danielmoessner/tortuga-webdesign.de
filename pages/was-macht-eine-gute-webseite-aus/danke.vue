<template>
  <main class="overflow-hidden">
    <SubNavigation :text="page.thankYou.title" class="bg-sunshine-100" />
    <!--  -->
    <section class="pt-32 pb-40 relative bg-sunshine-200">
      <div
        class="absolute min-h-screen z-0 left-1/2 transform -translate-x-1/2"
        style="width: 800px; top: -110px"
        v-html="require('@/assets/svg/hilfestellung.svg?include')"
      ></div>
      <div class="container relative z-10">
        <div class="">
          <div class="flex justify-center items-center flex-col">
            <div
              class="text-gray-100 text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-none"
            >
              {{ page.thankYou.header.title }}
            </div>
            <h1
              class="max-w-xl text-center text-2xl md:text-3xl text-gray-200 font-light tracking-wide mb-10"
            >
              {{ page.thankYou.header.subtitle }}
            </h1>
            <TealButton
              text="Jetzt zusammenarbeiten"
              to="/kontakt/"
              class="mb-1"
            />
            <div class="tracking-wide text-sm font-light text-white">
              Kostenloses Erstgespräch
            </div>
          </div>
        </div>
      </div>
    </section>
    <!---->
    <section class="pt-32 pb-40">
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
import TealButton from "@/components/TealButton.vue";

export default {
  components: {
    TealButton,
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
