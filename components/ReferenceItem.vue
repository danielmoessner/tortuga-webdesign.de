<template>
  <div class="border-sunshine-400 border-4 rounded-xl shadow-2xl">
    <div class="bg-sunshine-400 rounded-lg overflow-hidden relative z-10">
      <div
        ref="showcase"
        class="relative block overflow-hidden box-content group z-0"
        @mousemove="mousemove"
        @mouseover="mouseover"
        @mouseleave="mouseleave"
      >
        <nuxt-link :to="detailPage" @click.native="mouseleave">
          <div
            class="absolute top-0 group-hover:opacity-100 opacity-0 transition ease-in-out duration-150 z-0 pl-1 pt-1"
          >
            <span
              class="bg-gray-800 text-white rounded p-1 text-xs mr-1 mb-1"
              >{{ portfolioItem.title }}</span
            ><br />
            <div>
              <span
                class="bg-white text-gray-900 rounded p-1 text-xs mr-1 mb-1"
              >
                {{ month }}
              </span>
              <span
                v-for="(tag, index) in portfolioItem.tags"
                :key="index"
                class="bg-white text-gray-900 rounded p-1 text-xs mr-1 mb-1"
              >
                {{ tag }}
              </span>
            </div>
          </div>
          <div
            ref="showcaseHeightSet"
            class="w-full block"
            :style="{ 'padding-top': height }"
          ></div>
          <div class="absolute w-full top-0">
            <div
              ref="showcaseImage"
              class="transform translate-y-0"
              style="will-change: transform"
              :style="{ transform: showcaseImageTransform }"
            >
              <img
                :src="require(`@/content/media/${portfolioItem.image}?lqip`)"
                :data-src="
                  require(`@/content/media/${portfolioItem.image}?resize&size=400`)
                "
                :alt="portfolioItem.title"
                class="lazyload block w-full blur-up"
              />
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
    showcaseImage() {
      return this.$refs.showcaseImage;
    },
    showcaseHeightSet() {
      return this.$refs.showcaseHeightSet;
    },
    showcaseImageRoute() {
      return Math.min(
        this.showcaseHeightSet.getBoundingClientRect().height -
          this.showcaseImage.getBoundingClientRect().height +
          0.3,
        0
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
};
</script>
