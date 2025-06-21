<template>
  <div class="index-portfolio-post">
    <div class="columns" :style="columnsReversed">
      <div class="column is-5" :class="offsetPage">
        <div class="relative h-full">
          <BaseFrame class="h-full min-h-300">
            <div
              class="absolute w-full h-full overflow-hidden group border-radius-3"
              @mouseover="mouseover"
              @mouseleave="mouseleave"
            >
              <div
                class="absolute items-center justify-center invisible w-full h-full group-hover:visible bg-dark-75 is-hidden-touch is-flex"
                :class="{ 'is-invisible': isScrollable }"
              >
                <span class="has-text-centered has-text-white is-size-4"
                  ><b>Verwende X+Scrollen zum Interagieren</b></span
                >
              </div>
              <div
                class="w-full h-full no-scrollbar"
                :class="{
                  'overflow-y-hidden': !isScrollable,
                  'overflow-y-scroll': isScrollable,
                }"
              >
                <img
                  :data-src="work.image500"
                  :alt="work.title"
                  class="w-full is-block lazyload"
                />
              </div>
            </div>
          </BaseFrame>
        </div>
      </div>
      <div class="column is-4" :class="offsetText">
        <div class="index-portfolio-post-text">
          <div
            data-aos="fade-up"
            :data-aos-delay="aosDelay"
            data-aos-duration="600"
          >
            <h3 class="title is-4">{{ work.title }}</h3>
            <p class="mb-18">
              {{ work.description }}
            </p>
            <a href="/portfolio" class="button is-dark is-rounded is-outlined"
              >Alle Referenzen ansehen</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BaseFrame from "@/components/BaseFrame.vue";

export default {
  name: "IndexPortfolioPost",
  components: {
    BaseFrame,
  },
  props: {
    work: {
      required: true,
      type: Object,
    },
    index: {
      required: true,
      type: Number,
    },
  },
  data() {
    return {
      isScrollable: false,
      isMouseOver: false,
    };
  },
  computed: {
    columnsReversed() {
      return this.index % 2 == 0 ? { "flex-direction": "row-reverse" } : "";
    },
    offsetPage() {
      return this.index % 2 == 0 ? "is-offset-2" : "";
    },
    offsetText() {
      return this.index % 2 == 0 ? "is-offset-7" : "is-offset-2";
    },
    aosDelay() {
      return 100 - this.index * 100;
    },
  },
  mounted() {
    document.addEventListener(
      "keyup",
      function (event) {
        if (event.key === "x" || event.key === "X") this.setIsScrollable(false);
      }.bind(this),
    );
    document.addEventListener(
      "keydown",
      function (event) {
        if (event.key === "x" || event.key === "X") this.setIsScrollable(true);
      }.bind(this),
    );
  },
  methods: {
    mouseover() {
      this.isMouseOver = true;
    },
    mouseleave() {
      this.isMouseOver = false;
    },
    setIsScrollable(xKeyPressed) {
      xKeyPressed && this.isMouseOver
        ? (this.isScrollable = true)
        : (this.isScrollable = false);
    },
  },
};
</script>
<style lang="css" scoped>
.w-full {
  width: 100%;
}

.min-h-300 {
  min-height: 300px;
}

.h-full {
  height: 100%;
}

.overflow-y-hidden {
  overflow-y: hidden;
}

.overflow-y-scroll {
  overflow-y: scroll;
}

.block {
  display: block;
}

.no-scrollbar::-webkit-scrollbar {
  width: 0;
}

.index-portfolio-post {
  @include until($tablet) {
    margin-top: 5rem;
  }

  &-text {
    padding-top: 6rem;
    padding-bottom: 6rem;

    @include until($tablet) {
      padding: 0;
    }
  }
}

.mb-18 {
  margin-bottom: 1.8rem;
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.invisible {
  visibility: hidden;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.bg-dark-75 {
  background-color: rgba($dark, 0.5);
}

.group:hover .group-hover\:visible {
  visibility: visible;
}
</style>
