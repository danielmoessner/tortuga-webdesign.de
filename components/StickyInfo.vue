<template>
  <div class="sticky-info sticky top-0 pt-24">
    <div data-aos="fade-up" data-aos-duration="600">
      <div class="mb-3">
        <RoundedTag :text="darkTag" />
        <RoundedTag
          v-for="(tag, index) in tags"
          :key="index"
          bg-color="bg-gray-100"
          text-color="text-black"
          :text="tag"
        />
      </div>
      <h2
        class="text-3xl tracking-tight leading-tight font-bold text-black mb-6"
      >
        {{ title }}
      </h2>
      <p class="mb-12 text-black" v-html="description"></p>
      <slot></slot>
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
