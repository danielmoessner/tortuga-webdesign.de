<template>
  <div>
    <form ref="contactForm" name="contact" data-netlify="true">
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
    <div ref="errorMessage" class="message is-danger" style="display: none">
      <div class="message-body">
        Da ist leider ein Fehler passiert. Bitte probieren Sie es noch einmal
        oder schreiben Sie uns eine E-Mail. Bitte beachten Sie das kein
        HTML-Text in der Nachricht enthalten sein darf.
      </div>
    </div>
    <div ref="successMessage" class="message is-success" style="display: none">
      <div class="message-body">
        Vielen Dank für Ihre Anfrage. Wir werden uns schnellstmöglich bei Ihnen
        melden.
      </div>
    </div>
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
  },
  methods: {
    submitContactForm(event) {
      const self = this;
      event.preventDefault();
      const form = this.$refs.contactForm;
      this.$refs.successMessage.style.display = "none";
      this.$refs.errorMessage.style.display = "none";
      const formData = new FormData(event.target);
      const data = {};
      formData.forEach(function(value, key) {
        data[key] = value;
      });
      fetch(form.action, {
        method: "post",
        mode: "cors",
        body: formData
      })
        .then(response => response.json())
        .then(function(response) {
          if (response.is_form_valid) {
            self.$refs.successMessage.style.display = "block";
            form.style.display = "none";
          } else {
            self.$refs.errorMessage.style.display = "block";
          }
        })
        .catch(function(error) {
          self.$refs.errorMessage.style.display = "block";
        });
    }
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
