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

<script setup lang="ts">
definePageMeta({ layout: "new" });

const { data: services } = await useAsyncData("service", () =>
  queryContent("service").find(),
);
</script>
