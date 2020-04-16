<template>
  <div class="column">
    <div class="feature" data-aos="fade-up" :data-aos-delay="getAosDelay()" data-aos-duration="600">
      <span class="icon is-large has-text-dark">
        <i class="fa-3x" :class="getIconClass()" :style="{ marginLeft: this.proposition.icon.margin + 'px' }"></i>
      </span>
      <h3 class="title is-4">{{ proposition.title }}</h3>
      <p>{{ proposition.text }}</p>
    </div>
  </div>
</template>

<script>
	import { fontAwesome } from "@fortawesome/fontawesome-free/js/all.js";

	export default {
		name: "ValueProposition",
		props: {
			proposition: {
				required: true
			},
			index: {
				required: true
			}
		},
		methods: {
			getIconClass() {
				return "fa-" + this.proposition.icon.name + " " + this.proposition.icon.type;
			},
			getAosDelay() {
				return 300 + 100 * parseInt(this.index);
			},
		}
	}
</script>
