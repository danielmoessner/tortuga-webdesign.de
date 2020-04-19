<template>
  <div class="column" data-aos="fade-up" :data-aos-delay="aosDelay">
    <div class="feature is-center">
      <span class="icon is-large has-text-dark">
        <i class="fa-3x" :class="iconClasses" :style="{ 'margin-left': step.step.icon.margin }"></i>
      </span>
      <h3 class="title is-4">{{ step.step.title }}</h3>
      <p>
        {{ step.step.text }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
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
      return this.step.step.icon.type + " fa-" + this.step.step.icon.name;
    }
  },
}

</script>
