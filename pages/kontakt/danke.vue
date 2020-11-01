<template>
  <main>
    <!---->
    <SubNavigation :text="page.thankYou.title" class="bg-sunshine-100" />
    <!---->
    <section class="pt-32 pb-40 relative bg-sunshine-200">
      <div
        class="absolute bg-no-repeat bg-cover w-full top-0 min-h-screen z-0"
        style="background-image: url('/kontakt.svg');background-size: 800px auto;background-position: 50% -105px;"
      ></div>
      <div class="container">
        <div class="">
          <div class="flex justify-center items-center flex-col">
            <h1
              class="text-gray-100 text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-none"
            >
              {{ page.thankYou.header.title }}
            </h1>
            <p
              class="max-w-xl text-center text-2xl md:text-3xl text-gray-200 font-light tracking-wide mb-10"
            >
              {{ page.thankYou.header.subtitle }}
            </p>
            <TealButton text="Jetzt zusammenarbeiten" class="mb-1" />
            <span class="tracking-wide text-sm font-light text-white"
              >Kostenloses Erstgespräch</span
            >
          </div>
        </div>
      </div>
    </section>
    <!---->
    <section class="pt-32 pb-40">
      <div class="message is-success">
        <div class="message-body">
          <h3 class="title is-4 color-inherit">
            {{ page.thankYou.text.title }}
          </h3>
          <p class="mb-02">
            {{ page.thankYou.text.text }}
          </p>
          <p class="">
            <nuxt-link class="" :to="page.thankYou.text.link.to">
              {{ page.thankYou.text.link.text }}
            </nuxt-link>
          </p>
        </div>
      </div>
    </section>
    <!---->
    <NewFooter />
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
    const page = await $content("page/contact").fetch();

    return {
      page,
    };
  },
  head() {
    return {
      title: this.page.thankYou.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.page.thankYou.description,
        },
      ],
    };
  },
};
</script>
