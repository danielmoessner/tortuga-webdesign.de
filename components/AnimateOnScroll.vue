<template>
  <div
    ref="root"
    class="transition ease-in-out transform"
    :class="[show ? to : from, duration, transitionDelay]"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
export type DelayInput = 0 | 1 | 2 | 3;

const props = withDefaults(
  defineProps<{
    delay?: DelayInput;
    duration?: string;
    from?: string;
    to?: string;
  }>(),
  {
    delay: 0,
    duration: "duration-1000",
    from: "opacity-0 translate-y-10",
    to: "opacity-100 translate-y-0",
    ref,
  },
);

const observer = ref<IntersectionObserver | null>(null);
const show = ref(false);
const root = ref<HTMLElement>();

const transitionDelay = computed(() => {
  if (props.delay === 1) return "delay-[100ms]";
  if (props.delay === 2) return "delay-[200ms]";
  if (props.delay === 3) return "delay-[300ms]";
  return "";
});

onMounted(() => {
  observer.value = new IntersectionObserver(
    ([entry], obs) => {
      if (entry.isIntersecting) {
        obs.disconnect();
        show.value = true;
      }
    },
    {
      threshold: 0.01,
      rootMargin: "0px 0px -10% 0px",
    },
  );
  observer.value.observe(root.value as HTMLElement);
});

onUnmounted(() => {
  observer.value?.disconnect();
});
</script>
