<template>
  <section class="small" id="infos">
    <TheHeaderReflection />
    <div class="container">
      <div class="header is-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="600">
        <div class="columns">
          <div class="column is-6 is-offset-3">
            <h2 class="is-3 title">{{ title }}</h2>
          </div>
        </div>
        <div class="columns">
          <div class="column is-4 is-offset-4">
            <div class="subtitle">{{ subtitle }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
	import TheHeaderReflection from "../components/TheHeaderReflection.vue";

	export default {
		name: "TheStakes",
		components: {
			TheHeaderReflection
		},
		props: {
			title: {
				required: true
			},
			subtitle: {
				required: true
			}
		}
	}
</script>