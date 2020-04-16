<template>
  <nav class="the-navigation navbar is-light is-top">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="../assets/images/tortuga-webdesign.svg" alt="Tortuga Webdesign Logo">
        </a>
        <a class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-end">
          <a class="navbar-item" href="/">
            Startseite
          </a>
          <a class="navbar-item" href="/ueber-uns">
            Über uns
          </a>
          <a class="navbar-item" href="/referenzen">
            Referenzen
          </a>
          <a class="navbar-item" href="/artikel">
            Artikel
          </a>
          <a class="navbar-item" href="/kontakt">
            Kontakt
          </a>
          <div class="navbar-item is-hidden-touch">
            <CtaButton />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import CtaButton from "../components/CtaButton.vue";

export default {
  components: {
    CtaButton
  },
  name: "TheNavigation",
  data() {
    return {
      showNav: false
    }
  },
  mounted() {
    // slide the navigation in and out
    let lastScrollTop = 0
    const navbar = document.querySelector('.the-navigation')
    document.addEventListener('scroll', function() {
      const st = window.pageYOffset || document.documentElement.scrollTop
      if (st === 0) {
        navbar.classList.add('is-top')
      }
      if (st > 200 && navbar.classList.contains('is-top')) {
        navbar.classList.add('is-invisible')
        navbar.classList.remove('is-top')
      }
      if (st > lastScrollTop) {
        navbar.classList.add('is-out')
      } else {
        navbar.classList.remove('is-invisible')
        navbar.classList.remove('is-out')
      }
      lastScrollTop = st <= 0 ? 0 : st
    })
  }
}

</script>
<style scoped lang="scss">
.the-navigation.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: $white;
  transition: transform 0.6s, background-color 0.6s, opacity 0s;
}

.navbar {
  &-brand img {
    max-height: 2.6rem;

    @include until($tablet) {
      max-height: 2.2rem;
    }
  }

  &.is-out {
    transform: translateY(-61px);
  }

  &.is-top {
    position: absolute;
    background-color: transparent;
    transform: translateY(0);
  }
}

</style>
