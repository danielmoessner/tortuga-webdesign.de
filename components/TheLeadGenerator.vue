<template>
  <!-- <base-frame :border="false"> -->
    <div class="has-background-black-ter is-paddingless overflow-hidden is-flex border-radius-6 shadow">
      <div class="w-50 has-background-primary is-flex justify-center items-center p-20">
        <div class="w-50 paper-shadow is-flex">
          <img src="~assets/images/leadgenerator.png" alt="Was macht eine gute Webseite aus?">
        </div>
      </div>
      <div class="w-50 px-50 py-60">
        <h2 class="title is-3 has-text-white mb-08">{{ leadGenerator.title }}</h2>
        <p class="mb-28 has-text-white">
          {{ leadGenerator.description }}
        </p>
        <nuxt-link :to="leadGenerator.link" class="button is-rounded is-light">{{ leadGenerator.action }}</nuxt-link>
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
