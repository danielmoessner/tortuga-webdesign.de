<template>
  <div class="column" data-aos="fade-up" :data-aos-delay="aosDelay">
    <div class="feature has-text-centered">
      <span class="icon is-large has-text-dark" :style="{ 'margin-left': step.icon.margin }">
        <FontAwesomeIcon :icon="[step.icon.type, step.icon.name]" size="3x" />
      </span>
      <h3 class="title is-4">{{ step.title }}</h3>
      <p>
        {{ step.text }}
      </p>
    </div>
  </div>
</template>
<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBullseye, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { faComments, faFileCode } from '@fortawesome/free-regular-svg-icons'
library.add(faBullseye, faPencilAlt, faComments, faFileCode)

export default {
  components: {
    FontAwesomeIcon
  },
  name: "PlanStep",
  props: {
    step: {
      required: true
    },
    index: {
      required: true
    }
  },
  computed: {
    aosDelay() {
      return this.index * 100 + 50;
    },
    iconClasses() {
      return this.step.icon.type + " fa-" + this.step.icon.name;
    }
  },
}

</script>
