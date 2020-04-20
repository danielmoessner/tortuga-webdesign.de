<template>
  <div ref="showcase" class="showcase" @mousemove="mousemove" @mouseover="mouseover" @mouseleave="mouseleave" :style="{ 'height': showcaseHeight }">
    <nuxt-link :to="detailPage" @click="mouseleave">
      <div class="tags">
        <span class="tag is-dark">{{ portfolioItem.title }}</span><br>
        <span class="tag is-light">{{ month }}</span>
        <span v-for="(tag, index) in portfolioItem.tags" :key="index" class="tag is-light">{{ tag }}</span>
      </div>
      <img class="showcase--height-set" ref="showcaseHeightSet" :src="portfolioItem.shortImage" :alt="portfolioItem.title">
      <div class="showcase--scroll">
        <div class="showcase--img" ref="showcaseImage" style="will-change: transform;">
          <img :src="portfolioItem.image" :alt="portfolioItem.title">
        </div>
      </div>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    portfolioItem: {
      required: true
    }
  },
  data() {
    return {
      months: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
      speed: 0,
      mousePosition: {
        x: -1,
        y: -1
      },
      showcaseLookedAt: false,
      showcaseInterval: "",
      showcaseHeight: 0
    }
  },
  computed: {
    detailPage() {
      return "/portfolio/" + this.portfolioItem.slug
    },
    showcase() {
      return this.$refs.showcase
    },
    showcaseImage() {
      return this.$refs.showcaseImage
    },
    showcaseHeightSet() {
      return this.$refs.showcaseHeightSet
    },
    showcaseImageStyleObject() {
      return {
        "will-change": this.showcaseLookedAt ? "transform" : "auto"
      }
    },
    showcaseImageRoute() {
      return this.showcaseHeightSet.offsetHeight - this.showcaseImage.offsetHeight
    },
    month() {
      const date = new Date(this.portfolioItem.date)
      return this.months[date.getMonth()] + " " + date.getFullYear()
    }
  },
  watch: {
    showcaseLookedAt: function(newValue, oldValue) {
      if (newValue === true) {
        this.showcaseInterval = setInterval(this.moveImage, 16)
      } else {
        clearInterval(this.showcaseInterval)
      }
    }
  },
  methods: {
    updateMousePosition(event) {
      const rect = this.showcase.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      const xProportion = x / rect.width
      const yProportion = y / rect.height
      this.mousePosition = { x: xProportion, y: yProportion }
    },
    updateSpeed() {
      let pos = this.mousePosition
      if (pos.y >= 0.45 && pos.y <= 0.55) {
        this.speed = 0
      } else {
        this.speed = -10 * (pos.y - 0.5)
      }
    },
    mousemove(event) {
      this.updateMousePosition(event)
      this.updateSpeed()
    },
    mouseover(event) {
      this.showcaseLookedAt = true
    },
    mouseleave(event) {
      this.showcaseLookedAt = false
    },
    moveImage() {
      if (this.showcaseImage === null) { return }

      function getTranslateY(obj) {
        const st = window.getComputedStyle(obj, null)
        const tr = st.getPropertyValue('-webkit-transform') ||
          st.getPropertyValue('-moz-transform') ||
          st.getPropertyValue('-ms-transform') ||
          st.getPropertyValue('-o-transform') ||
          st.getPropertyValue('transform') ||
          'fail...'
        let values = tr.split('(')[1]
        values = values.split(')')[0]
        values = values.split(',')
        return parseFloat(values[5])
      }
      const newPosition = getTranslateY(this.showcaseImage) + this.speed
      // check if it is allowed to move up or down and move it
      if (newPosition > 0) {
        this.showcaseImage.style.transform = 'translateY(0)'
      } else if (newPosition < this.showcaseImageRoute) {
        this.showcaseImage.style.transform = 'translateY(' + this.showcaseImageRoute + 'px)'
      } else {
        this.showcaseImage.style.transform = 'translateY(' + newPosition + 'px)'
      }
    }
  },
  mounted() {
    window.addEventListener('load', (event) => { this.showcaseHeight = this.showcase.offsetHeight + this.showcaseHeightSet.offsetHeight + "px" })
  }
}

</script>
<style lang="scss">
.showcase {
  border: 5px solid $dark;
  position: relative;
  display: block;
  box-shadow: 0 0 2.8rem 0 rgba($color3, 1);
  overflow: hidden;
  transition: height 0.6s;
  box-sizing: content-box;
  height: 0;

  &>img {
    display: block;
  }

  .tags {
    display: none;
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: 5;
  }

  &:hover {
    box-shadow: 0 0 2.8rem 0 rgba($color4, 1);

    .tags {
      display: block;
    }
  }

  &--height-set {
    display: block;
    opacity: 0;
    width: 100%;
    img {
      display: block;
    }
  }

  &--scroll {
    position: absolute;
    width: 100%;
    top: 0;
  }

  &--img {
    transform: translateY(0);
    display: block;

    img {
      display: block;
    }
  }

  @include until($tablet) {
    .tags {
      display: block;
    }
  }
}

</style>
