<template>
  <footer class="footer has-background-white">
    <div class="container">
      <div class="columns">
        <div class="column is-two-fifths">
          <img src="~assets/images/logored.png">
          <div class="is-size-6">
            Viele Personen oder Unternehmen werden online nachteilig repräsentiert. Wir von Tortuga Webdesign liefern klar strukturierte & attraktive Webseiten, sodass Sie online modern dargestellt und von Webseitenbesuchern geliebt werden.
          </div>
        </div>
        <div class="column">
          <div>
            <h3>Navigation</h3>
            <ul>
              <li><a href="/">Startseite</a></li>
              <li><a href="/ueber-uns">Über uns</a></li>
              <li><a href="/referenzen">Referenzen</a></li>
              <li><a href="/artikel">Artikel</a></li>
              <li><a href="/kontakt">Kontakt</a></li>
              <li>
                <ul>
                  <h4>Leistungen (demnächst aktiv)</h4>
                  <li><a>Webdesign</a></li>
                  <li><a>Google Ads</a></li>
                  <li><a>Beratung</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="column">
          <div>
            <h3>Kontakt</h3>
            <address>
              Daniel Mössner <br>
              <a href="tel:004917638385646">0176 3838 5646</a> <br>
              <a href="mailto:kontakt@tortuga-webdesign.de">kontakt@tortuga-webdesign.de</a> <br>
              Albert-Schweitzer-Str. 17b <br>
              85375 Neufahrn b. Freising
            </address>
          </div>
        </div>
        <div class="column">
          <div>
            <h3>Rechtliches</h3>
            <ul>
              <li><a href="/impressum">Impressum</a></li>
              <li><a href="/datenschutz">Datenschutz</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "TheFooter"
}

</script>

<style lang="scss">
  .footer {
    margin-top: 12vh;
  }
</style>
