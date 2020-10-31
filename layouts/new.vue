<template>
  <div>
    <NewNavigation />
    <nuxt />
  </div>
</template>

<script>
import NewNavigation from "@/components/NewNavigation.vue";

export default {
  components: {
    NewNavigation,
  },
};
</script>
