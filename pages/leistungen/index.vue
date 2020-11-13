<template>
  <div>
    <nuxt-link
      v-for="(service, index) in services"
      :key="index"
      :to="'/leistungen/' + service.slug + '/'"
    >
      {{ service.slug }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const services = await $content("service").fetch();

    return {
      services,
    };
  },
};
</script>
