<template>
  <main>
    <TheSubpageHeader :title="page.header.title" :subtitle="page.header.subtitle" buttonText="Mehr"><div></div></TheSubpageHeader>
    <section>
      <TheHeaderReflection />
    	<div class="container">
    		<div v-html="$md.render(page.body)" class="content"></div>
    	</div>
    </section>
    <TheFooter />
  </main>
</template>
<script>
import TheSubpageHeader from "@/components/TheSubpageHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheHeaderReflection from "@/components/TheHeaderReflection.vue"

export default {
  components: {
    TheSubpageHeader,
    TheFooter,
    TheHeaderReflection
  },
  data() {
    return {
      page: this.$store.state.pages.imprint
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
