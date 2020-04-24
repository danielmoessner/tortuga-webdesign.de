<template>
  <div class="columns" :style="columnsReversed">
    <div class="column is-5" :class="offsetPage">
      <div class="work">
        <div class="work--page" @mouseover="mouseover" @mouseleave="mouseleave">
          <div class="work--hover-info" :class="{ 'is-invisible': isScrollable }">
            <span class="work--hover-info-text is-size-4"><b>Verwende X+Scrollen zum Interagieren</b></span>
          </div>
          <div class="work--image-div" :class="{ 'overflow-y-hidden': !isScrollable, 'overflow-y-scroll': isScrollable }">
            <img :src="work.image500" :alt="work.title">
          </div>
        </div>
      </div>
    </div>
    <div class="column is-4" :class="offsetText">
      <div class="work--content">
        <div data-aos="fade-up" :data-aos-delay="aosDelay" data-aos-duration="600">
          <h3 class="title is-4">{{ work.title }}</h3>
          <p class="work--text">
            {{ work.description }}
          </p>
          <a href="/referenzen" class="button is-dark is-rounded is-outlined">Alle Referenzen ansehen</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PortfolioShowcase from "@/components/PortfolioShowcase.vue";

export default {
  components: {
    PortfolioShowcase
  },
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
<style lang="scss">
.overflow-y-hidden {
  overflow-y: hidden;
}

.overflow-y-scroll {
  overflow-y: scroll;
}

.work {
  position: relative;
  height: 100%;

  &--hover-info {
    background: rgba($dark, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    visibility: hidden;
  }

  &--page {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 5;

    border: 5px solid #1f1d20;
    box-shadow: 0 0 2.8rem 0 #484847;

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
      width: 100%;
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

  @include until($desktop) {
    &--hover-info {
      display: none;
    }
  }
}

@include until($tablet) {
  .work--hover-info {
    display: none;
  }
}
  

</style>
