<template>
  <div
    class="transition ease-in-out transform"
    :class="[show ? to : from, duration, transitionDelay]"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";

export default defineNuxtComponent({
  props: {
    delay: {
      type: Number as PropType<0 | 1 | 2 | 3>,
      default: 0,
    },
    duration: {
      type: String,
      default: "duration-1000",
    },
    from: {
      type: String,
      default: "opacity-0 translate-y-10",
    },
    to: {
      type: String,
      default: "opacity-100 translate-y-0",
    },
  },
  data() {
    return {
      observer: null as IntersectionObserver | null,
      show: false,
    };
  },
  computed: {
    transitionDelay() {
      if (this.delay === 1) return "delay-[100ms]";
      if (this.delay === 2) return "delay-[200ms]";
      if (this.delay === 3) return "delay-[300ms]";
      return "";
    },
  },
  mounted() {
    this.observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          obs.disconnect();
          this.show = true;
        }
      },
      {
        threshold: 0.01,
        rootMargin: "0px 0px -10% 0px",
      },
    );
    this.observer.observe(this.$el);
  },
  unmounted() {
    this.observer?.disconnect();
  },
});
</script>
