<template>
  <footer class="pt-20 pb-24 md:py-32" :class="bgColor">
    <div
      class="container grid grid-cols-2 gap-4 md:grid-cols-3 gap-y-16 md:gap-y-20 lg:gap-y-4 lg:grid-cols-5"
    >
      <div class="col-span-2 md:col-span-3 lg:col-span-2">
        <LogoSvg class="h-16 max-w-full mb-10 md:h-24" :invert="invertLogo" />
        <h2 class="sr-only">Footer</h2>
        <div class="pr-12 text-sm sm:text-base md:text-lg" :class="textColor">
          <p>{{ general?.footer.text }}</p>
        </div>
      </div>
      <div class="">
        <div>
          <h3 class="mb-2 text-lg font-semibold md:text-xl" :class="textColor">
            Navigation
          </h3>
          <ul class="">
            <li class="mb-2">
              <FooterLink
                text="Startseite"
                to="/"
                :color="linkColor"
                :hover-color="hoverColor"
              />
            </li>
            <li class="mb-2">
              <FooterLink
                text="Über uns"
                to="/ueber-uns/"
                :color="linkColor"
                :hover-color="hoverColor"
              />
            </li>
            <li class="mb-2">
              <FooterLink
                text="Preise"
                to="/preise/"
                :color="linkColor"
                :hover-color="hoverColor"
              />
            </li>
            <li class="mb-2">
              <FooterLink
                text="Referenzen"
                to="/referenzen/"
                :color="linkColor"
                :hover-color="hoverColor"
              />
            </li>
            <li class="mb-2">
              <FooterLink
                text="Artikel"
                to="/artikel/"
                :color="linkColor"
                :hover-color="hoverColor"
              />
            </li>
            <li class="mb-2">
              <FooterLink
                text="Kontakt"
                to="/kontakt/"
                :color="linkColor"
                :hover-color="hoverColor"
              />
            </li>
          </ul>
        </div>
      </div>
      <div class="">
        <div>
          <h3 class="mb-2 text-lg font-semibold md:text-xl" :class="textColor">
            Kontakt
          </h3>
          <address class="text-sm not-italic md:text-base" :class="textColor">
            <span class="inline-block py-1 text-sm font-medium md:text-base"
              >Daniel Mössner</span
            >
            <br />
            <FooterLink
              class=""
              text="0176 3838 5646"
              :color="linkColor"
              :hover-color="hoverColor"
            />
            <br />
            <FooterLink
              class="mb-3"
              text="kontakt@tortuga-webdesign.de"
              :color="linkColor"
              :hover-color="hoverColor"
            />
            <br />
            <span class="font-medium">Tortuga Webdesign </span><br />
            Trentiner Str. 30 <br />
            85375 Neufahrn b. Freising <br />
          </address>
        </div>
      </div>
      <div class="col-start-2 md:col-start-auto">
        <div class="text-right">
          <h3 class="mb-2 text-lg font-semibold md:text-xl" :class="textColor">
            Rechtliches
          </h3>
          <ul>
            <li class="mb-2">
              <FooterLink
                text="Impressum"
                :link-color="linkColor"
                :color="linkColor"
                :hover-color="hoverColor"
                to="/impressum/"
              />
            </li>
            <li class="mb-2">
              <FooterLink
                text="Datenschutz"
                :link-color="linkColor"
                :color="linkColor"
                :hover-color="hoverColor"
                to="/datenschutz/"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import LogoSvg from "@/components/LogoSvg.vue";
import FooterLink from "@/components/FooterLink.vue";

const { data: general } = await useAsyncData("footer", () =>
  queryContent("/page/general").findOne(),
);

defineProps({
  textColor: {
    type: String,
    default: "text-gray-800",
  },
  linkColor: {
    type: String,
    default: "text-teal-700",
  },
  bgColor: {
    type: String,
    default: "bg-sunshine-200",
  },
  hoverColor: {
    type: String,
    default: "text-teal-800",
  },
  invertLogo: {
    type: Boolean,
    default: false,
  },
});
</script>
