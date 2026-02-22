<template>
  <div class="border-4 shadow-2xl border-sunshine-400 rounded-xl">
    <div class="relative z-10 overflow-hidden rounded-lg bg-sunshine-400">
      <div
        ref="showcase"
        class="box-content relative z-0 block overflow-hidden group"
        @mousemove="mousemove"
        @mouseover="mouseover"
        @mouseleave="mouseleave"
      >
        <nuxt-link :to="detailPage" @click="mouseleave">
          <div
            class="absolute top-0 z-20 pt-1 pl-1 transition duration-150 ease-in-out opacity-0 group-hover:opacity-100"
          >
            <span
              class="p-1 mb-1 mr-1 text-xs text-white bg-gray-800 rounded"
              >{{ portfolioItem.title }}</span
            ><br />
            <div>
              <span
                class="p-1 mb-1 mr-1 text-xs text-gray-900 bg-white rounded"
              >
                {{ month }}
              </span>
              <span
                v-for="(tag, index) in portfolioItem.tags"
                :key="index"
                class="p-1 mb-1 mr-1 text-xs text-gray-900 bg-white rounded"
              >
                {{ tag }}
              </span>
            </div>
          </div>
          <div
            ref="showcaseHeightSet"
            class="block w-full"
            :style="{ 'padding-top': height }"
          />
          <div class="absolute top-0 w-full">
            <div
              ref="showcaseImage"
              class="transform translate-y-0"
              style="will-change: transform"
              :style="{ transform: showcaseImageTransform }"
            >
              <nuxt-picture
                :src="portfolioItem.image"
                :alt="portfolioItem.title"
                width="420"
              />
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from "vue";

const props = defineProps({
  portfolioItem: {
    required: true,
    type: Object,
  },
});

const showcase = ref<HTMLElement | null>(null);
const showcaseImage = ref<HTMLElement | null>(null);
const showcaseHeightSet = ref<HTMLElement | null>(null);

const months = [
  "Jan",
  "Feb",
  "Mär",
  "Apr",
  "Mai",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Okt",
  "Nov",
  "Dez",
];

const mousePositionY = ref(0.5);
const showcaseLookedAt = ref(false);
const showcaseInterval = ref<ReturnType<typeof setInterval> | null>(null);
const showcaseScrollY = ref(0);

const height = computed(() => props.portfolioItem.height || "100%");
const showcaseImageTransform = computed(
  () => `translateY(${showcaseScrollY.value}px)`,
);
const detailPage = computed(() => `/referenzen/${props.portfolioItem.slug}/`);
const optimizedImageWebp = computed(() => {
  const url = props.portfolioItem.image as string | undefined;
  if (!url || typeof url !== "string") return null;
  if (!url.startsWith("/media/")) return null;

  const fileNameStart = url.lastIndexOf("/") + 1;
  const fileName = url.slice(fileNameStart);
  const dot = fileName.lastIndexOf(".");
  if (dot === -1) return null;
  const baseName = fileName.slice(0, dot);

  return `/media/opt/${baseName}.420.opt.webp`;
});

const optimizedImageFallback = computed(() => {
  const url = props.portfolioItem.image as string | undefined;
  if (!url || typeof url !== "string") return null;
  if (!url.startsWith("/media/")) return null;

  const fileNameStart = url.lastIndexOf("/") + 1;
  const fileName = url.slice(fileNameStart);
  const dot = fileName.lastIndexOf(".");
  if (dot === -1) return null;
  const baseName = fileName.slice(0, dot);
  const ext = fileName.slice(dot).toLowerCase();
  if (!ext || ![".jpg", ".jpeg", ".png"].includes(ext)) return null;

  return `/media/opt/${baseName}.860.opt${ext}`;
});
const month = computed(() => {
  const date = new Date(props.portfolioItem.date);
  return `${months[date.getMonth()]} ${date.getFullYear()}`;
});
const speed = computed(() => {
  if (mousePositionY.value >= 0.45 && mousePositionY.value <= 0.55) {
    return 0;
  } else {
    return -10 * (mousePositionY.value - 0.5);
  }
});
const showcaseImageRoute = computed(() => {
  if (!showcaseImage.value || !showcaseHeightSet.value) return 0;
  return Math.min(
    showcaseHeightSet.value.getBoundingClientRect().height -
      showcaseImage.value.getBoundingClientRect().height +
      0.3,
    0,
  );
});

watch(showcaseLookedAt, (newValue) => {
  if (newValue) {
    if (showcaseInterval.value === null)
      showcaseInterval.value = setInterval(moveImage, 16);
  } else {
    if (showcaseInterval.value !== null) clearInterval(showcaseInterval.value);
    showcaseInterval.value = null;
  }
});

function updateMousePosition(event: MouseEvent) {
  if (!showcase.value) return;
  const rect = showcase.value.getBoundingClientRect();
  const y = event.clientY - rect.top;
  const yProportion = y / rect.height;
  mousePositionY.value = yProportion;
}

function mousemove(event: MouseEvent) {
  updateMousePosition(event);
}

function mouseover() {
  showcaseLookedAt.value = true;
}

function mouseleave() {
  showcaseLookedAt.value = false;
}

function moveImage() {
  const newPosition = showcaseScrollY.value + speed.value;
  if (newPosition > 0) {
    showcaseScrollY.value = 0;
  } else if (newPosition <= showcaseImageRoute.value) {
    showcaseScrollY.value = showcaseImageRoute.value;
  } else {
    showcaseScrollY.value = newPosition;
  }
}
</script>
