<template>
  <main>
    <SubNavigation :text="page.thankYou.title" class="bg-sunshine-100" />
    <!--  -->
    <section class="pt-32 pb-40 relative bg-sunshine-200">
      <div
        class="absolute bg-no-repeat bg-cover w-full top-0 min-h-screen z-0"
        style="background-image: url('/hilfestellung.svg');background-size: 800px auto;background-position: 50% -110px;"
      ></div>
      <div class="container">
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
            <TealButton text="Jetzt zusammenarbeiten" class="mb-1" />
            <div class="tracking-wide text-sm font-light text-white">
              Kostenloses Erstgespräch
            </div>
          </div>
        </div>
      </div>
    </section>
    <!---->
    <BaseSection id="kontakt" class="top-medium">
      <div class="message is-success">
        <div class="message-body">
          <h3 class="title is-4 color-inherit">
            {{ page.thankYou.text.title }}
          </h3>
          <p class="mb-02">{{ page.thankYou.text.text }}</p>
          <p class="">
            <a class="" target="_blank" :href="page.thankYou.text.link.to">
              {{ page.thankYou.text.link.text }}
            </a>
          </p>
        </div>
      </div>
    </BaseSection>
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
import BaseSection from "@/components/BaseSection.vue";
import SubNavigation from "@/components/SubNavigation.vue";
import NewFooter from "@/components/NewFooter.vue";
import TealButton from "@/components/TealButton.vue";

export default {
  components: {
    TealButton,
    NewFooter,
    SubNavigation,
    BaseSection,
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
