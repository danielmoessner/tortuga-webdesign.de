<template>
  <main>
    <!---->
    <TheSubpageHeader :title="page.header.title" :subtitle="page.header.subtitle" buttonText="Mehr">
      <div></div>
    </TheSubpageHeader>
    <!---->
    <base-section class="top-medium">
      <template v-slot:no-container>
        <TheHeaderReflection />
      </template>
      <div v-html="$md.render(page.body)" class="content"></div>
    </base-section>
    <!---->
    <base-section>
      <TheFooter />
    </base-section>
    <!---->
  </main>
</template>
<script>
import TheSubpageHeader from "@/components/TheSubpageHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheHeaderReflection from "@/components/TheHeaderReflection.vue"
import BaseSection from "@/components/BaseSection.vue"

export default {
  components: {
    TheSubpageHeader,
    TheFooter,
    TheHeaderReflection,
    BaseSection
  },
  data() {
    return {
      page: this.$store.state.pages.dataProtection
    }
  },
  head() {
    return {
      title: this.page.title,
      meta: [
        { hid: "description", name: "description", content: this.page.description }
      ]
    }
  },
}

</script>
