<template>
  <nav ref="navigation" class="bg-teal-700 z-50 relative">
    <div class="container">
      <div
        class="flex flex-col md:flex-row justify-between items-center relative"
      >
        <div class="flex justify-between items-center w-full md:w-auto">
          <nuxt-link class="" to="/">
            <div class="h-16 p-4 bg-teal-800">
              <LogoSvg class="fill-current w-auto" :invert="true" />
            </div>
          </nuxt-link>
          <button
            type="button"
            aria-label="Menü Button"
            class="md:hidden inline-flex border border-transparent hover:border-gray-200 items-center justify-center p-2 rounded-md text-teal-800 bg-gray-200 hover:text-teal-800 focus:outline-none transition duration-150 ease-in-out"
            @click="showNav = !showNav"
          >
            <svg
              v-if="!showNav"
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-if="showNav"
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class="text-white md:block md:static absolute transform md:p-0 translate-y-full md:transform-none md:bg-transparent md:w-auto md:shadow-none right-0 bottom-0 bg-teal-800 z-50 px-6 w-64 py-6 rounded-lg shadow-lg"
          :class="{ hidden: !showNav }"
        >
          <div class="flex flex-col md:flex-row space-y-2 md:space-y-0">
            <NavigationLink
              to="/"
              text="Startseite"
              @click.native="showNav = false"
            />
            <NavigationLink
              to="/ueber-uns/"
              text="Über uns"
              @click.native="showNav = false"
            />
            <NavigationLink
              to="/referenzen/"
              text="Referenzen"
              @click.native="showNav = false"
            />
            <NavigationLink
              to="/kontakt/"
              text="Kontakt"
              @click.native="showNav = false"
            />
            <!-- <NavigationLink to="/blog/" text="Blog" /> -->
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import LogoSvg from "@/components/LogoSvg.vue";
import NavigationLink from "@/components/NavigationLink.vue";

export default {
  name: "NewNavigation",
  components: {
    LogoSvg,
    NavigationLink,
  },
  data() {
    return {
      showNav: false,
    };
  },
};
</script>
