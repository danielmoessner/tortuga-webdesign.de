<template>
  <div>
    <TheError
      code="404"
      title="Seite nicht gefunden"
      message="Leider ist die gewünschte Seite nicht verfügbar."
    />
  </div>
</template>

<script setup lang="ts">
import TheError from "@/components/TheError.vue";
</script>
