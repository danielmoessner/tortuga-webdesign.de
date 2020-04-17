<template>
  <section>
    <div class="container">
      <div class="header is-center">
        <div class="columns">
          <div class="column is-6 is-offset-3">
            <h2 class="title is-3" data-aos="fade-up">{{ title }}</h2>
          </div>
        </div>
        <div class="columns">
          <div class="column is-4 is-offset-4">
            <div class="subtitle" data-aos="fade-up" data-aos-delay="50">{{ subtitle }}</div>
          </div>
        </div>
      </div>
      <div class="columns">
        <PlanStep v-for="(step, index) in steps" :step="step" :key="index" :index="index" />
      </div>
      <br>
      <br>
      <br>
      <p class="has-text-center" data-aos="fade-up" data-aos-delay="200">{{ bottom }}</p>
    </div>
  </section>
</template>
<script>
import PlanStep from "../components/PlanStep.vue";

export default {
  name: "ThePlan",
  components: {
    PlanStep
  },
  props: {
    title: {
      required: true
    },
    subtitle: {
      required: true
    },
    steps: {
      required: true
    },
    bottom: {
      required: true
    }
  }
}

</script>
