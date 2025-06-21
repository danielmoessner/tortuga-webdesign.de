<template>
  <div class="sticky top-0 pt-24 sticky-info">
    <div data-aos="fade-up" data-aos-duration="600">
      <div class="mb-3">
        <RoundedTag :text="darkTag" class="whitespace-nowrap" />
        <RoundedTag
          v-for="(tag, index) in tags"
          :key="index"
          bg-color="bg-gray-100"
          text-color="text-black"
          :text="tag"
        />
      </div>
      <h2
        class="mb-6 text-2xl font-bold leading-tight tracking-tight text-black md:text-3xl"
      >
        {{ title }}
      </h2>
      <p
        class="mb-8 text-sm text-black md:text-base md:mb-12"
        v-html="description"
      />
      <slot />
    </div>
  </div>
</template>
<script>
import RoundedTag from "@/components/RoundedTag.vue";

export default {
  name: "StickyInfo",
  components: {
    RoundedTag,
  },
  props: {
    darkTag: {
      required: true,
      type: String,
    },
    tags: {
      required: true,
      type: Array,
    },
    title: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
  },
};
</script>
