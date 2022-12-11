<template>
  <div class="px-3 flex-inline">
    <component
      :is="which"
      class="relative inline-flex text-teal-700 transition duration-150 ease-in-out bg-teal-700 border-0 cursor-pointer custom-button active:bg-teal-900 active:text-teal-900 hover:bg-teal-800 hover:text-teal-800 focus:outline-none"
      :to="to"
    >
      <div
        class="px-3 py-1 text-sm font-bold leading-6 text-white md:px-4 md:py-2 md:text-base"
      >
        {{ text }}
      </div>
      <TriangleSvg class="absolute right-0 transform translate-x-1/2" />
      <TriangleSvg
        class="absolute left-0 transform rotate-180 -translate-x-1/2"
      />
    </component>
  </div>
</template>

<script lang="ts" setup>
import TriangleSvg from "@/components/TriangleSvg.vue";
import JustButton from "@/components/JustButton.vue";

const props = defineProps({
  to: {
    type: String,
    default: "#",
  },
  text: {
    type: String,
    default: "Click me",
  },
  submit: {
    type: Boolean,
    default: false,
  },
});

const { submit } = toRefs(props);

const which = computed(() => {
  return submit.value ? JustButton : resolveComponent("NuxtLink");
});
</script>
