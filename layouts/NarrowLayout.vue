<template>
  <div>
    <NewNavigation small />
    <slot />
  </div>
</template>

<script setup lang="ts">
import NewNavigation from "@/components/NewNavigation.vue";
</script>
