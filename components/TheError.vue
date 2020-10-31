<template>
  <div
    class="flex justify-center items-center p-12 min-h-screen min-w-full bg-teal-700"
  >
    <div class="">
      <h1 class="mb-1 text-3xl font-bold text-gray-100">
        {{ code }} - {{ title }}
      </h1>
      <p class="mb-12 text-gray-100">{{ message }}</p>
      <GrayButton to="/" text="Zur Startseite" />
    </div>
  </div>
</template>

<script>
import GrayButton from "@/components/GrayButton.vue";

export default {
  name: "TheError",
  components: {
    GrayButton,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
};
</script>
