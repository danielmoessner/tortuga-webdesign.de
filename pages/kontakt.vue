<template>
  <div>
    <TheSubpageHeader :title="header.title" :subtitle="header.subtitle" :buttonText="header.buttonText" />
    <section id="kontakt">
      <TheHeaderReflection />
      <div id="start" class="container">
        <div class="columns is-gapless">
          <div class="column is-4">
            <div class="info-box has-background-dark p-20">
              <div class="content">
                <h2 class="title is-3 has-text-white">Hier finden Sie uns:</h2>
                <address class="info-box--address has-text-white">
                  <b>Tortuga Webdesign</b> <br>
                  Daniel Mössner <br>
                  Albert-Schweitzer-Str. 17b <br>
                  85375 Neufahrn b. Freising
                </address>
                <h2 class="title is-3 has-text-white">Kontaktdaten:</h2>
                <p class="has-text-white">
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
            <div class="has-background-white-ter p-20">
              <h2 class="title is-3">Kontaktaufnahme</h2>
              <form action="https://ex4d4.dmoe.tech/postforms/tortugawebdesignde/">
                <div class="field mb-0 pt-10">
                  <label for="name" class="label">Vor- & Nachname</label>
                  <div class="control has-icons-left">
                    <input id="name" class="input" type="text" name="name" placeholder="z.B. Max Müller">
                    <span class="icon is-small is-left">
                      <FontAwesomeIcon icon="user" />
                    </span>
                  </div>
                </div>
                <div class="columns mb-0">
                  <div class="column py-0 is-6">
                    <div class="field mb-0 pt-10">
                      <label class="label" for="mail">Geschäftliche Email</label>
                      <div class="control has-icons-left">
                        <input id="mail" class="input" type="email" name="email" placeholder="z.B. max@mustermann.de">
                        <span class="icon is-small is-left">
                          <FontAwesomeIcon icon="envelope" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="column py-0 is-6">
                    <div class="field mb-0 pt-10">
                      <label class="label" for="website">Webseite (optional)</label>
                      <div class="control has-icons-left">
                        <input id="website" class="input" type="text" name="website" placeholder="z.B. www.mustermann.de">
                        <span class="icon is-small is-left">
                          <FontAwesomeIcon icon="home" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="field mb-0 pt-10">
                  <label class="label" for="message">Weitere Projektdetails (optional)</label>
                  <div class="control">
                    <textarea id="message" class="textarea" name="message" placeholder="Erzählen Sie uns mehr über Ihr Unternehmen oder Geschäft, Ihre Anforderungen und weitere Spezifika."></textarea>
                  </div>
                </div>
                <div class="field mb-0 pt-10">
                  <label class="label">Datenschutz</label>
                  <div class="control">
                    <div class="checkbox input">
                      <input id="dataprotection" type="checkbox" class="contact-form--checkbox-input" name="dataprotection" required>
                      <label for="dataprotection">
                        Ich habe die <a href="/datenschutz">Informationen zur Datenverarbeitung</a> zur Kenntnis genommen. Meine angegebenen Daten werden zum Zweck der Bearbeitung meiner Anfrage von Tortuga Webdesign gespeichert.
                      </label>
                    </div>
                  </div>
                </div>
                <div class="field mb-0 pt-10 is-grouped">
                  <div class="control">
                    <button class="button is-rounded is-primary">Absenden</button>
                  </div>
                </div>
              </form>
              <div class="message is-danger" style="display: none">
                <div class="message-body">
                  Da ist leider ein Fehler passiert. Bitte probieren Sie es noch einmal oder schreiben Sie uns eine E-Mail. Bitte beachten Sie das kein HTML-Text in der Nachricht enthalten sein darf.
                </div>
              </div>
              <div class="message is-success" style="display: none">
                <div class="message-body">
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
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHome, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
library.add(faHome, faEnvelope, faUser)

export default {
  components: {
    TheSubpageHeader,
    TheFooter,
    TheHeaderReflection,
    FontAwesomeIcon
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
<style lang="scss">
#kontakt {
  .columns:nth-child(1) {
    flex-direction: row-reverse;
  }
}

.pt-10 {
  padding-top: 1rem !important;
}

.mt-10 {
  margin-top: 1rem !important;
}

.mb-10 {
  margin-bottom: 1rem !important;
}

.mb-0 {
  margin-bottom: 0 !important;
}

.py-0 {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

form {

  .checkbox {
    display: flex;
    height: auto;

    input {
      margin-right: 10px;
      margin-left: 8px;
    }

    label {
      cursor: pointer;
    }
  }

  .button {
    margin-top: 1.4rem;
  }
}

.p-20 {
  padding: 2rem !important;
}

.contact-form--checkbox-input {
  min-width: 13px;
}

.info-box {
  display: flex;
  padding: 2rem;
  font-size: 1.2rem;
  position: sticky;
  top: 80px;

  &--address {
    font-style: normal;
  }

  &--link {
    color: $light;

    &:hover {
      color: $grey-light;
    }
  }
}

</style>
