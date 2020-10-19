<template>
  <div>
    <form
      ref="contactForm"
      name="contact"
      data-netlify="true"
      method="GET"
      action="/kontakt/danke/"
    >
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label for="name" class="label">Vor- &amp; Nachname</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control has-icons-left">
              <input
                id="name"
                class="input"
                type="text"
                name="name"
                placeholder="Max Müller"
              />
              <span class="icon is-small is-left">
                <FontAwesomeIcon icon="user" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label" for="mail">Geschäftliche E-Mail</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control has-icons-left">
              <input
                id="mail"
                class="input"
                type="email"
                name="email"
                placeholder="max@mustermann.de"
              />
              <span class="icon is-small is-left">
                <FontAwesomeIcon icon="envelope" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label" for="website">Webseite (optional)</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control has-icons-left">
              <input
                id="website"
                class="input"
                type="text"
                name="website"
                placeholder="maxmustermann.de"
              />
              <span class="icon is-small is-left">
                <FontAwesomeIcon icon="home" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label" for="message"
            >Weitere Projektdetails (optional)</label
          >
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <textarea
                id="message"
                class="textarea"
                name="message"
                placeholder="Erzählen Sie uns mehr über Ihr Unternehmen oder Geschäft, Ihre Anforderungen und weitere Spezifika."
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label" for="message">Datenschutz</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <div class="checkbox input">
                <input
                  id="dataprotection"
                  type="checkbox"
                  class="contact-form--checkbox-input"
                  name="dataprotection"
                  required
                />
                <label for="dataprotection">
                  Ich habe die
                  <a href="/datenschutz">Informationen zur Datenverarbeitung</a>
                  zur Kenntnis genommen. Meine angegebenen Daten werden zum
                  Zweck der Bearbeitung meiner Anfrage von Tortuga Webdesign
                  gespeichert.
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label"></div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <button class="button is-rounded is-primary mt-08">
                Absenden
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faHome, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
library.add(faHome, faEnvelope, faUser);

export default {
  name: "ContactForm",
  components: {
    FontAwesomeIcon
  }
};
</script>
<style lang="scss">
.mt-08 {
  margin-top: 0.8rem;
}

.checkbox {
  display: flex;
  height: auto;

  input {
    margin-right: 10px;
    margin-left: 8px;
    min-width: 13px;
  }

  label {
    cursor: pointer;
  }
}

.field-label {
  flex-grow: 2;
}
</style>
