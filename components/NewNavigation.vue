<template>
  <nav ref="navigation" class="bg-teal-700" :class="navigationClassList">
    <div class="container">
      <div class="flex justify-between items-center">
        <div class="flex justify-between items-center">
          <nuxt-link class="" to="/">
            <div class="h-16 p-4 bg-teal-800">
              <LogoSvg class="fill-current w-auto" :invert="true" />
            </div>
          </nuxt-link>
          <a
            class=""
            @click="showNav = !showNav"
            :class="{ 'is-active': showNav }"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="text-white" :class="{ 'is-active': showNav }">
          <div class="flex">
            <NavigationLink to="/index-neu/" text="Startseite" />
            <NavigationLink to="/ueber-uns/" text="Über uns" />
            <NavigationLink to="/referenzen/" text="Referenzen" />
            <NavigationLink to="/blog/" text="Blog" />
            <NavigationLink to="/kontakt/neu/" text="Kontakt" />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import CtaButton from "../components/CtaButton.vue";
import LogoSvg from "@/components/LogoSvg.vue";
import NavigationLink from "@/components/NavigationLink.vue";

export default {
  components: {
    CtaButton,
    LogoSvg,
    NavigationLink
  },
  name: "NewNavigation",
  data() {
    return {
      showNav: false,
      scrollTop: 0,
      isTop: true,
      isInvisible: false,
      isOut: false
    };
  },
  watch: {
    scrollTop: function(newValue, oldValue) {
      if (newValue <= 1) {
        this.isTop = true;
        this.isInvisible = false;
        this.isOut = false;
      } else if (newValue > oldValue) {
        this.isOut = true;
      } else {
        this.isInvisible = false;
        this.isOut = false;
      }

      if (newValue > 200 && this.isTop) {
        this.isInvisible = true;
        this.isTop = false;
      }
    }
  },
  computed: {
    navigationClassList() {
      return {
        "is-top": this.isTop,
        "is-out": this.isOut,
        "is-invisible": this.isInvisible
      };
    }
  },
  mounted() {
    const self = this;
    document.addEventListener("scroll", function() {
      self.scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    });
  }
};
</script>
<style lang="scss">
.the-navigation.navbar {
  width: 100%;
  transition: transform 0.6s, background-color 0.6s, opacity 0s;
  background-color: $white;

  a.navbar-item:hover {
    background: hsl(278, 20%, 92%);
    color: initial;
  }

  a.navbar-item:focus {
    background: transparent;
    color: initial;
  }

  a.navbar-item.nuxt-link-exact-active {
    color: #000;
  }

  .navbar-brand .navbar-item img {
    max-height: 3rem;

    @include until($tablet) {
      max-height: 2.4rem;
    }
  }

  &.is-out {
    transform: translateY(-61px);
  }

  &.is-top {
    position: absolute;
    background-color: transparent;
  }
}
</style>
