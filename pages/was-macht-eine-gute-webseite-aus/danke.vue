<template>
  <main>
    <!---->
    <TheSubpageHeader
      title="Vielen Dank für Ihr Interesse!"
      subtitle="Hilfestellung"
    />
    <!---->
    <base-section class="top-medium" id="kontakt">
      <template v-slot:no-container>
        <TheHeaderReflection />
      </template>
      <div class="message is-success">
        <div class="message-body">
          <h3 class="title is-4 color-inherit">
            {{ page.download.success.title }}
          </h3>
          <p class="mb-02">{{ page.download.success.message }}</p>
          <p class="">
            <a class="" target="_blank" :href="page.download.link">
              {{ page.download.action }}
            </a>
          </p>
        </div>
      </div>
    </base-section>
    <!---->
    <base-section>
      <TheFooter />
    </base-section>
    <!---->
  </main>
</template>
<script>
import BaseSection from "@/components/BaseSection.vue";
import ContactForm from "@/components/ContactForm.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheHeaderReflection from "@/components/TheHeaderReflection.vue";
import TheSubpageHeader from "@/components/TheSubpageHeader.vue";
import BaseButton from "@/components/BaseButton.vue";

export default {
  components: {
    BaseSection,
    BaseButton,
    ContactForm,
    TheFooter,
    TheHeaderReflection,
    TheSubpageHeader
  },
  data() {
    return {
      page: this.$store.state.pages.leadGenerator
    };
  },
  head() {
    return {
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
