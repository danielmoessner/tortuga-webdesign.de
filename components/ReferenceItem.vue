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
              <img
                :src="portfolioItem.image"
                sizes="lg:860px"
                :alt="portfolioItem.title"
                class="block w-full"
              />
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default defineNuxtComponent({
  components: {},
  props: {
    portfolioItem: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      months: [
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
      ],
      mousePositionY: 0.5,
      showcaseLookedAt: false,
      showcaseInterval: "",
      showcaseScrollY: 0,
    };
  },
  computed: {
    height() {
      return this.portfolioItem.height || "100%";
    },
    showcaseImageTransform() {
      return "translateY(" + this.showcaseScrollY + "px)";
    },
    detailPage() {
      return "/referenzen/" + this.portfolioItem.slug + "/";
    },
    showcase() {
      return this.$refs.showcase;
    },
    showcaseImage(): HTMLDivElement | unknown {
      return this.$refs.showcaseImage;
    },
    showcaseHeightSet(): HTMLElement | unknown {
      return this.$refs.showcaseHeightSet;
    },
    showcaseImageRoute() {
      if (!this.showcaseImage || !this.showcaseHeightSet) return 0;
      return Math.min(
        this.showcaseHeightSet.getBoundingClientRect().height -
          this.showcaseImage.getBoundingClientRect().height +
          0.3,
        0,
      );
    },
    month() {
      const date = new Date(this.portfolioItem.date);
      return this.months[date.getMonth()] + " " + date.getFullYear();
    },
    speed() {
      if (this.mousePositionY >= 0.45 && this.mousePositionY <= 0.55) {
        return 0;
      } else {
        return -10 * (this.mousePositionY - 0.5);
      }
    },
  },
  watch: {
    showcaseLookedAt: function (newValue) {
      if (newValue === true) {
        if (this.showcaseInterval === "")
          this.showcaseInterval = setInterval(this.moveImage, 16);
      } else {
        clearInterval(this.showcaseInterval);
        this.showcaseInterval = "";
      }
    },
  },
  methods: {
    updateMousePosition(event) {
      const rect = this.showcase.getBoundingClientRect();
      const y = event.clientY - rect.top;
      const yProportion = y / rect.height;
      this.mousePositionY = yProportion;
    },
    mousemove(event) {
      this.updateMousePosition(event);
    },
    mouseover() {
      this.showcaseLookedAt = true;
    },
    mouseleave() {
      this.showcaseLookedAt = false;
    },
    moveImage() {
      const newPosition = this.showcaseScrollY + this.speed;
      if (newPosition > 0) {
        this.showcaseScrollY = 0;
      } else if (newPosition <= this.showcaseImageRoute) {
        this.showcaseScrollY = this.showcaseImageRoute;
      } else {
        this.showcaseScrollY = newPosition;
      }
    },
  },
});
</script>
