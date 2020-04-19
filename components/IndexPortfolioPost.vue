<template>
  <div class="work container">
    <div class="work--left" :class="leftOrRight" @mouseover="mouseover" @mouseleave="mouseleave">
      <div class="work--hover-info" :class="{ 'is-visibility-hidden': isScrollable }">
        <span class="work--hover-info-text is-size-4"><b>Verwende X+Scrollen zum Interagieren</b></span>
      </div>
      <div class="work--image-div" :class="{ 'overflow-y-hidden': !isScrollable, 'overflow-y-scroll': isScrollable }">
        <img :src="work.image" :alt="work.title">
      </div>
    </div>
    <div class="container">
      <div class="work--content" data-aos="fade-up" :data-aos-delay="aosDelay" data-aos-duration="600">
        <div class="columns">
          <div class="column is-4" :class="offset">
            <h3 class="title is-4">{{ work.title }}</h3>
            <p class="work--text">
              {{ work.description }}
            </p>
            <a href="/referenzen" class="button is-dark is-rounded is-outlined">Alle Referenzen ansehen</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "IndexPortfolioPost",
  props: {
    work: {
      required: true
    },
    index: {
      required: true
    }
  },
  data() {
    return {
      isScrollable: false,
      isMouseOver: false
    }
  },
  computed: {
    leftOrRight() {
      return this.index % 2 == 0 ? "is-right" : "is-left";
    },
    offset() {
      return this.index % 2 == 0 ? "is-offset-1" : "is-offset-7";
    },
    aosDelay() {
      return 100 - this.index * 100;
    }
  },
  methods: {
    mouseover() {
      this.isMouseOver = true;
    },
    mouseleave() {
      this.isMouseOver = false;
    },
    setIsScrollable(xKeyPressed) {
      xKeyPressed && this.isMouseOver ? this.isScrollable = true : this.isScrollable = false;
    },
  },
  mounted() {
    document.addEventListener('keyup', function(event) {
      if (event.key === 'x' || event.key === 'X') this.setIsScrollable(false);
    }.bind(this))
    document.addEventListener('keydown', function(event) {
      if (event.key === 'x' || event.key === 'X') this.setIsScrollable(true);
    }.bind(this))
  }
}

</script>
<style scoped lang="scss">
.overflow-y-hidden {
  overflow-y: hidden;
}

.overflow-y-scroll {
  overflow-y: scroll;
}

.work {
  position: relative;
  margin-bottom: -1px;

  &--hover-info {
    background: rgba($dark, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    visibility: hidden;
  }

  &--left {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    z-index: 5;
    cursor: pointer;

    border: 5px solid #1f1d20;
    // position: relative;
    box-shadow: 0 0 2.8rem 0 #484847;

    &.is-right {
      left: 50%;
      direction: rtl;
    }

    @include until($tablet) {
      position: static;
      width: 100%;
      height: 380px;
    }

    &:hover {
      .work--hover-info {
        visibility: visible;
      }
    }
  }

  &--image-div {
    width: 100%;
    height: 100%;

    img {
      display: block;
    }

    &::-webkit-scrollbar {
      width: 0;
    }
  }

  &--image {
    display: block;
    min-height: 100%;

    img {
      display: block;
    }
  }

  &--hover-info-text {
    color: white;
  }

  &--content {
    padding: 8em 0;
  }

  &--text {
    margin-bottom: 1.8em;
  }

  @include until($tablet) {
    &--left {
      cursor: default;
    }
  }

  @include until($desktop) {
    &--left {
      cursor: default;
    }

    &--hover-info {
      display: none;
    }
  }
}

</style>
