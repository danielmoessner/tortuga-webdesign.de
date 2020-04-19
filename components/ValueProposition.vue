<template>
  <div class="column">
    <div class="feature" data-aos="fade-up" :data-aos-delay="aosDelay" data-aos-duration="600">
      <span class="icon is-large has-text-dark">
        <i class="fa-3x" :class="iconClass" :style="{ marginLeft: this.proposition.proposition.icon.margin + 'px' }"></i>
      </span>
      <h3 class="title is-4">{{ proposition.proposition.title }}</h3>
      <p>{{ proposition.proposition.text }}</p>
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
  computed: {
    iconClass() {
      return "fa-" + this.proposition.proposition.icon.name + " " + this.proposition.proposition.icon.type;
    },
    aosDelay() {
      return 300 + 100 * parseInt(this.index);
    },
  }
}

</script>
