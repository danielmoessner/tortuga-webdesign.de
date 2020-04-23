<template>
  <div class="column">
    <div class="feature" data-aos="fade-up" :data-aos-delay="aosDelay" data-aos-duration="600">
      <span class="icon is-large has-text-dark" :style="{ marginLeft: proposition.icon.margin + 'px' }">
        <FontAwesomeIcon :icon="[proposition.icon.type, proposition.icon.name]" size="3x" />
      </span>
      <h3 class="title is-4">{{ proposition.title }}</h3>
      <p>{{ proposition.text }}</p>
    </div>
  </div>
</template>
<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserTie, faEye } from '@fortawesome/free-solid-svg-icons'
import { faSmileBeam } from '@fortawesome/free-regular-svg-icons'
library.add(faUserTie, faEye, faSmileBeam)

export default {
  components: {
    FontAwesomeIcon
  },
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
      return "fa-" + this.proposition.icon.name + " " + this.proposition.icon.type;
    },
    aosDelay() {
      return 300 + 100 * parseInt(this.index);
    },
  }
}

</script>
