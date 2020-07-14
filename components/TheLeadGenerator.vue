<template>
  <!-- <base-frame :border="false"> -->
  <div class="has-background-black-ter is-paddingless overflow-hidden is-flex border-radius-6 shadow">
    <div class="columns is-gapless">
      <div class="column is-6 has-background-primary">
        <div class="is-flex justify-center items-center p-20 h-100">
          <div class="w-50 paper-shadow is-flex">
            <img src="~assets/images/leadgenerator.png" alt="Was macht eine gute Webseite aus?">
          </div>
        </div>
      </div>
      <div class="column is-6">
        <div class="lead-generator-text">
          <h2 class="title is-3 has-text-white mb-08">{{ leadGenerator.title }}</h2>
          <p class="mb-28 has-text-white">
            {{ leadGenerator.description }}
          </p>
          <nuxt-link :to="leadGenerator.link" class="button is-rounded is-light">{{ leadGenerator.action }}</nuxt-link>
        </div>
      </div>
    </div>
  </div>
  <!-- </base-frame> -->
</template>
<script>
import BaseFrame from "@/components/BaseFrame.vue";

export default {
  name: "TheLeadGenerator",
  components: {
    BaseFrame
  },
  props: {
    leadGenerator: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  }
}

</script>

<style lang="scss">
.lead-generator-text {
  padding-left: 5rem;
  padding-right: 5rem;
  padding-top: 6rem;
  padding-bottom: 6rem;
  @include mobile {
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}
</style>
