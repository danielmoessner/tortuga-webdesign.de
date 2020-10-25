<template>
  <main>
    <!---->

    <!---->
    <section
      class="bg-teal-900 bg-no-repeat bg-center"
      style="background-image: url('/drawing.svg'); background-size: 85%;"
    >
      <div class="container">
        <div class="grid grid-cols-2">
          <div class="py-16 pr-8">
            <h2
              class="font-bold leading-tight tracking-tight text-gray-100 text-5xl mb-1"
            >
              Webseiten
            </h2>
            <p class="text-2xl text-gray-100 font-light tracking-wide mb-10">
              Klar strukturiert &amp; attraktiv
            </p>
            <GrayButton text="Mehr erfahren" />
          </div>
          <div class="py-16 pr-8 pl-8">
            <h2
              class="font-bold leading-tight tracking-tight text-gray-100 text-5xl mb-1"
            >
              CMS-Systeme
            </h2>
            <p class="text-2xl text-gray-100 font-light tracking-wide mb-10">
              Einfach &amp; funktional
            </p>
            <GrayButton text="Mehr erfahren" />
          </div>
          <div class="py-16 pr-8">
            <h2
              class="font-bold leading-tight tracking-tight text-gray-100 text-5xl mb-1"
            >
              Google Ads
            </h2>
            <p class="text-2xl text-gray-100 font-light tracking-wide mb-10">
              Ordentlich &amp; zielorientiert
            </p>
            <GrayButton text="Mehr erfahren" />
          </div>
        </div>
      </div>
    </section>
    <!---->
    <TheHeader />
    <!---->
    <base-section class="bottom-medium top-medium" id="infos">
      <template v-slot:no-container>
        <TheHeaderReflection />
      </template>
      <TheStakes :stakes="page.stakes" />
    </base-section>
    <!---->
    <base-section class="top-small" id="value">
      <TheValue :value="page.value" />
    </base-section>
    <!---->
    <base-section id="guide">
      <TheGuide />
    </base-section>
    <!---->
    <base-section>
      <ThePlan />
    </base-section>
    <!---->
    <base-section>
      <TheLeadGenerator :leadGenerator="page.leadGenerator" />
    </base-section>
    <!---->
    <NewFooter />
    <!---->
  </main>
</template>
<script>
import BaseSection from "@/components/BaseSection.vue";
import NewFooter from "@/components/NewFooter.vue";
import TheGuide from "@/components/TheGuide.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheHeaderReflection from "@/components/TheHeaderReflection.vue";
import TheLeadGenerator from "@/components/TheLeadGenerator.vue";
import ThePlan from "@/components/ThePlan.vue";
import TheStakes from "@/components/TheStakes.vue";
import TheValue from "@/components/TheValue.vue";
import GrayButton from "@/components/GrayButton.vue";

export default {
  layout: "new",
  components: {
    GrayButton,
    BaseSection,
    NewFooter,
    TheGuide,
    TheHeader,
    TheHeaderReflection,
    TheLeadGenerator,
    ThePlan,
    TheStakes,
    TheValue
  },
  data() {
    return {
      page: this.$store.state.pages.home
    };
  },
  head() {
    return {
      script: [
        {
          src: "https://identity.netlify.com/v1/netlify-identity-widget.js",
          async: true
        }
      ],
      title: this.page.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.page.description
        }
      ]
    };
  }
};
</script>
