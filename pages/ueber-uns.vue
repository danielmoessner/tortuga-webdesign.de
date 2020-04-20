<template>
	<main>
		<TheSubpageHeader :title="" :subtitle="" :buttonText="" />
		<TheFooter />
	</main>
</template>

<script>
import TheSubpageHeader from "../components/TheSubpageHeader.vue";
import TheFooter from "../components/TheFooter.vue";
import TheHeaderReflection from "../components/TheHeaderReflection.vue";

export default {
  components: {
    TheSubpageHeader, TheFooter, TheHeaderReflection
  },
  data() {
    return {
    	page: this.$store.state.pages.about
    }
  },
  head() {
    return {
      title: this.page.title,
      description: this.page.description
    }
  }
}

</script>