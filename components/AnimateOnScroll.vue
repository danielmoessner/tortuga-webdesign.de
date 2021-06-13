<template>
  <div
    class="transform transition ease-in-out"
    :class="[show ? to : from, duration, transitionDelay]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    delay: {
      type: Number,
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
      observer: null,
      show: false,
    };
  },
  computed: {
    transitionDelay() {
      let delay = this.delay * 100;
      return `delay-${delay}`;
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
    this.observer.disconnect();
  },
};
</script>
