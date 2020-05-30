<template>
  <div class="box has-background-black-ter p-20 ">
    <div class="columns is-multiline">
      <!-- <div class="column">
        <div>
          <h2 class="title is-3 has-text-white mb-08">5 Punkte die Ihre Webseite erfüllen muss</h2>
          <p class="has-text-white">Finden Sie jetzt heraus wie Sie durch Ihre Onlinepräsenz mehr verdienen können.</p>
        </div>
      </div> -->
      <div class="column is-12">
        <form class="columns is-multiline" ref="contactForm" @submit="submitContactForm" action="https://ex4d4.dmoe.tech/postforms/tortugawebdesignde/">
          <div class="column is-4">
            <h2 class="title is-3 has-text-white">Download The Guide</h2>
          </div>
          <div class="column is-4">
            <div class="field">
              <label for="name" class="label has-text-white">Vor- & Nachname</label>
              <div class="control has-icons-left">
                <input id="name" class="input" type="text" name="name" placeholder="Max Müller">
                <span class="icon is-small is-left">
                  <FontAwesomeIcon icon="user" />
                </span>
              </div>
            </div>
          </div>
          <div class="column is-4 is-offset-4">
            <div class="field">
              <label class="label has-text-white" for="mail">Geschäftliche E-Mail</label>
              <div class="control has-icons-left">
                <input id="mail" class="input" type="email" name="email" placeholder="max@mustermann.de">
                <span class="icon is-small is-left">
                  <FontAwesomeIcon icon="envelope" />
                </span>
              </div>
            </div>
          </div>
          <div class="column is-4 is-offset-4">
            <div class="field">
              <label class="label has-text-white" for="message">Dürfen wir Ihnen E-Mails schicken?</label>
              <div class="control">
                <div class="checkbox input">
                  <input id="dataprotection" type="checkbox" class="contact-form--checkbox-input" name="dataprotection" required>
                  <label for="dataprotection">
                    Ja, ich würde gerne E-Mails von Tortuga Webdesign erhalten.
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-4 is-offset-4">
            <div class="field">
              <div class="control">
                <button class="button is-rounded is-light">Jetzt herunterladen</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheLeadGenerator"
}

</script>
<style lang="scss">
.p-20 {
  padding: 2.0rem;
}

.mb-08 {
  margin-bottom: 0.8rem !important;
}

.border-radius-15 {
  border-radius: 1.5rem;
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

</style>
