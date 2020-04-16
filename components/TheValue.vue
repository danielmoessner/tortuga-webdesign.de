<template>
  <section id="">
    <div class="container">
      <div class="columns">
        <div class="column is-5">
          <div class="header" data-aos="fade-up" data-aos-delay="250" data-aos-duration="600">
            <div class="pretitle"><small>{{ pretitle }}</small></div>
            <h2 class="is-3 title">{{ title }}</h2>
            <p class="subtitle">{{ subtitle }}</p>
          </div>
        </div>
      </div>
      <div class="columns">
        <ValueProposition v-for="(proposition, index) in propositions" :key="index" :proposition="proposition" :index="index" />
      </div>
    </div>
  </section>
</template>
<script>
import ValueProposition from "../components/ValueProposition.vue";

export default {
  name: "TheValue",
  props: {
    propositions: {
      required: true
    },
    pretitle: {
      required: true
    },
    title: {
      required: true
    },
    subtitle: {
      required: true
    }
  },
  components: {
    ValueProposition
  },
  methods: {
  }
}

</script>
