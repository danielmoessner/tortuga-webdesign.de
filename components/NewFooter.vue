<template>
  <footer class="bg-sunshine-300 py-32">
    <div class="container grid grid-cols-5 gap-4">
      <div class="col-span-2">
        <LogoSvg class="h-24 mb-10" :invert="false" />
        <div class="text-lg text-gray-800 pr-12">
          Viele Personen oder Unternehmen werden online nachteilig
          repräsentiert. Wir von Tortuga Webdesign liefern klar strukturierte &
          attraktive Webseiten, sodass Sie online modern dargestellt und von
          Webseitenbesuchern geliebt werden.
        </div>
      </div>
      <div class="">
        <div>
          <h3 class="text-gray-800 text-xl font-semibold mb-2">Navigation</h3>
          <ul class="">
            <li class="mb-2">
              <FooterLink text="Startseite" to="/index-neu/" />
            </li>
            <li class="mb-2">
              <FooterLink text="Über uns" />
            </li>
            <li class="mb-2">
              <FooterLink text="Referenzen" />
            </li>
            <li class="mb-2">
              <FooterLink text="Artikel" />
            </li>
            <li class="mb-2">
              <FooterLink text="Kontakt" />
            </li>
            <!-- <li class="mb-02">
              <ul class="py-03 md:py-none">
                <li><h4>Leistungen (demnächst aktiv)</h4></li>
                <li class="ml-10"><span>Webdesign</span></li>
                <li class="ml-10"><span>Google Ads</span></li>
                <li class="ml-10"><span>Beratung</span></li>
              </ul>
            </li> -->
          </ul>
        </div>
      </div>
      <div class="">
        <div>
          <h3 class="text-gray-800 text-xl font-semibold mb-2">Kontakt</h3>
          <address class="not-italic text-gray-800">
            <span class="font-medium">Daniel Mössner</span> <br />
            <FooterLink text="0176 3838 5646" /> <br />
            <FooterLink text="kontakt@tortuga-webdesign.de" /> <br />
            Albert-Schweitzer-Str. 17b <br />
            85375 Neufahrn b. Freising <br />
          </address>
        </div>
      </div>
      <div class="">
        <div class="text-right">
          <h3 class="text-gray-800 text-xl font-semibold mb-2">Rechtliches</h3>
          <ul>
            <li class="mb-2">
              <FooterLink text="Impressum" />
            </li>
            <li class="mb-2">
              <FooterLink text="Datenschutz" />
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
  name: "TheFooter",
  components: {
    LogoSvg,
    FooterLink
  }
};
</script>
