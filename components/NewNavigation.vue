<template>
  <nav ref="navigation" class="relative z-50 bg-teal-700">
    <div class="container" :class="{ small }">
      <div
        class="relative flex flex-col items-center justify-between md:flex-row"
      >
        <div class="flex items-center justify-between w-full md:w-auto">
          <nuxt-link class="" to="/">
            <div class="h-16 p-4 bg-teal-800">
              <LogoSvg :invert="true" />
              <span class="sr-only">Zur Startseite</span>
            </div>
          </nuxt-link>
          <button
            type="button"
            aria-label="Menü Button"
            class="inline-flex items-center justify-center p-2 text-teal-800 transition duration-150 ease-in-out bg-gray-200 border border-transparent rounded-md md:hidden hover:border-gray-200 hover:text-teal-800 focus:outline-none"
            @click="showNav = !showNav"
          >
            <svg
              v-if="!showNav"
              class="w-6 h-6"
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
              class="w-6 h-6"
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
          class="absolute bottom-0 right-0 z-50 w-full px-6 py-6 text-white transform translate-y-full border border-t-0 border-gray-200 rounded-lg rounded-t-none shadow-lg md:border-0 md:block md:static md:p-0 md:transform-none md:bg-transparent md:w-auto md:shadow-none bg-sunshine-100"
          :class="{ hidden: !showNav }"
        >
          <div class="flex flex-col space-y-2 md:flex-row md:space-y-0">
            <NavigationLink to="/" text="Startseite" @click="showNav = false" />
            <NavigationLink
              to="/ueber-uns/"
              text="Über uns"
              @click="showNav = false"
            />
            <NavigationLink
              to="/referenzen/"
              text="Referenzen"
              @click="showNav = false"
            />
            <NavigationLink
              to="/kontakt/"
              text="Kontakt"
              @click="showNav = false"
            />
            <!-- <NavigationLink to="/blog/" text="Blog" /> -->
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import LogoSvg from "@/components/LogoSvg.vue";
import NavigationLink from "@/components/NavigationLink.vue";

defineProps<{ small?: boolean }>();

const showNav = ref(false);
</script>
