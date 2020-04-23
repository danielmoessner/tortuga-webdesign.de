<template>
  <div>
    <TheSubpageHeader :title="header.title" :subtitle="header.subtitle" :buttonText="header.buttonText" />
    <section id="kontakt">
    	<TheHeaderReflection />
      <div id="start" class="container">
        <div class="columns is-gapless">
          <div class="column is-4">
            <div class="info-box">
              <div class="info-box--content">
                <h2 class="info-box--title">Hier finden Sie uns:</h2>
                <address class="info-box--address">
                  <b>Tortuga Webdesign</b> <br>
                  Daniel Mössner <br>
                  Albert-Schweitzer-Str. 17b <br>
                  85375 Neufahrn b. Freising
                </address>
                <h2 class="info-box--title">Kontaktdaten:</h2>
                <p class="info-box--text">
                  <a class="info-box--link" href="mailto:kontakt@tortuga-webdesign.de">kontakt@tortuga-webdesign.de</a><br>
                  <a class="info-box--link" href="tel:004917638385646">0176 38385646</a>
                </p>
                <br>
                <!-- <div class="icons-box">
                <a class="icon-link" href="https://www.instagram.com/tortugawebdesign/" target="_blank">
                  <span class="icon is-medium">
                    <span class="fa-stack">
                      <i class="fas fa-circle fa-stack-2x fa-inverse"></i>
                      <i class="fab fa-instagram fa-stack-1x"></i>
                    </span>
                  </span>
                </a>
                <span class="icon is-medium">
                  <span class="fa-stack">
                    <i class="fas fa-circle fa-stack-2x fa-inverse"></i>
                    <i class="fab fa-xing fa-stack-1x"></i>
                  </span>
                </span>
                <span class="icon is-medium">
                  <span class="fa-stack">
                    <i class="fas fa-circle fa-stack-2x fa-inverse"></i>
                    <i class="fab fa-linkedin-in fa-stack-1x"></i>
                  </span>
                </span>
              </div> -->
              </div>
            </div>
          </div>
          <div class="column is-8">
            <div class="contact-form">
              <h2 class="title is-3">Kontaktaufnahme</h2>
              <form action="https://ex4d4.dmoe.tech/postforms/tortugawebdesignde/">
                <div class="field">
                  <label class="label">Vor- & Nachname</label>
                  <div class="control has-icons-left">
                    <input class="input" type="text" name="name" placeholder="z.B. Max Müller">
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-6">
                    <div class="field">
                      <label class="label">Geschäftliche Email</label>
                      <div class="control has-icons-left">
                        <input class="input" type="email" name="email" placeholder="z.B. max@mustermann.de">
                        <span class="icon is-small is-left">
                          <i class="fas fa-envelope"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="column is-6">
                    <div class="field">
                      <label class="label">Webseite (optional)</label>
                      <div class="control has-icons-left">
                        <input class="input" type="text" name="website" placeholder="z.B. www.mustermann.de">
                        <span class="icon is-small is-left">
                          <i class="fas fa-home"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="field">
                  <label class="label">Weitere Projektdetails (optional)</label>
                  <div class="control">
                    <textarea class="textarea" name="message" placeholder="Erzählen Sie uns mehr über Ihr Unternehmen oder Geschäft, Ihre Anforderungen und weitere Spezifika."></textarea>
                  </div>
                </div>
                <div class="field">
                  <label class="label">Datenschutz</label>
                  <div class="control">
                    <div class="checkbox">
                      <input type="checkbox" class="contact-form--checkbox-input" name="dataprotection" required>
                      <div>
                        Ich habe die <a href="/datenschutz">Informationen zur Datenverarbeitung</a> zur Kenntnis genommen. Meine angegebenen Daten werden zum Zweck der Bearbeitung meiner Anfrage von Tortuga Webdesign gespeichert.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="field is-grouped">
                  <div class="control">
                    <button class="button is-rounded is-primary">Absenden</button>
                  </div>
                </div>
              </form>
              <div class="contact-form--error-message">
                <div class="contact-form--message-body">
                  Da ist leider ein Fehler passiert. Bitte probieren Sie es noch einmal oder schreiben Sie uns eine E-Mail. Bitte beachten Sie das kein HTML-Text in der Nachricht enthalten sein darf.
                </div>
              </div>
              <div class="contact-form--success-message">
                <div class="contact-form--message-body">
                  Vielen Dank für Ihre Anfrage. Wir werden uns schnellstmöglich bei Ihnen melden.
                </div>
              </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170187.9866221967!2d11.496716990307563!3d48.203008313388644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e6df61b80d737%3A0xb6121f1e0704ba6a!2sTortuga+Webdesign!5e0!3m2!1sde!2sde!4v1551033670191" frameborder="0" style="border:0; width: 100%; height: 450px;" allowfullscreen=""></iframe>
          </div>
        </div>
      </div>
    </section>
    <TheFooter />
  </div>
</template>
<script>
import TheSubpageHeader from "../components/TheSubpageHeader.vue";
import TheFooter from "../components/TheFooter.vue";
import TheHeaderReflection from "../components/TheHeaderReflection.vue";

export default {
  components: {
    TheSubpageHeader, TheFooter, TheHeaderReflection
  },
  data() {
    return {
      header: {
        title: "Sind Sie bereit?",
        subtitle: "Kontakt",
        buttonText: "Jetzt loslegen"
      }
    }
  },
  head() {
    return {
      title: "Kontakt"
    }
  }
}

</script>
<style scoped lang="scss">
#kontakt {
  .columns:nth-child(1) {
    flex-direction: row-reverse;
  }
}

</style>
