<template>
  <footer class="py-32" :class="bgColor">
    <div
      class="container grid grid-cols-2 md:grid-cols-3 gap-y-16 md:gap-y-20 lg:gap-y-4 lg:grid-cols-5 gap-4"
    >
      <div class="col-span-2 md:col-span-3 lg:col-span-2">
        <LogoSvg class="h-24 mb-10 max-w-full" :invert="invertLogo" />
        <h2 class="sr-only">Tortuga Webdesign</h2>
        <div class="text-lg pr-12" :class="textColor">
          <p>{{ $store.getters.footer.text }}</p>
        </div>
      </div>
      <div class="">
        <div>
          <h3 class="text-xl font-semibold mb-2" :class="textColor">
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
                text="Referenzen"
                to="/referenzen/"
                :color="linkColor"
                :hover-color="hoverColor"
              />
            </li>
            <!-- <li class="mb-2">
              <FooterLink
                text="Artikel"
                :color="linkColor"
                :hoverColor="hoverColor"
              />
            </li> -->
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
          <h3 class="text-xl font-semibold mb-2" :class="textColor">Kontakt</h3>
          <address class="not-italic" :class="textColor">
            <span class="font-medium inline-block py-1">Daniel Mössner</span>
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
            Albert-Schweitzer-Str. 17b <br />
            85375 Neufahrn b. Freising <br />
          </address>
        </div>
      </div>
      <div class="col-start-2 md:col-start-auto">
        <div class="text-right">
          <h3 class="text-xl font-semibold mb-2" :class="textColor">
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
<script>
import LogoSvg from "@/components/LogoSvg.vue";
import FooterLink from "@/components/FooterLink.vue";

export default {
  name: "NewFooter",
  components: {
    LogoSvg,
    FooterLink,
  },
  props: {
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
  },
};
</script>
