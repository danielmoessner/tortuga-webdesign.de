<template>
  <div>
    <form
      class="columns is-multiline"
      name="lead"
      data-netlify="true"
      ref="leadGeneratorForm"
      method="GET"
      action="/was-macht-eine-gute-webseite-aus/danke/"
    >
      <div class="column is-6">
        <div class="field">
          <label for="name" class="label">Vorname</label>
          <div class="control has-icons-left">
            <input
              id="name"
              class="input"
              type="text"
              name="firstname"
              placeholder="Max / Susi"
            />
            <span class="icon is-small is-left">
              <FontAwesomeIcon icon="user" />
            </span>
          </div>
        </div>
      </div>
      <div class="column is-6">
        <div class="field">
          <label for="name" class="label">Nachname</label>
          <div class="control has-icons-left">
            <input
              id="name"
              class="input"
              type="text"
              name="lastname"
              placeholder="Müller"
            />
            <span class="icon is-small is-left">
              <FontAwesomeIcon icon="user-friends" />
            </span>
          </div>
        </div>
      </div>
      <div class="column is-6">
        <div class="field">
          <label class="label" for="mail">E-Mail</label>
          <div class="control has-icons-left">
            <input
              id="mail"
              class="input"
              type="email"
              name="email"
              placeholder="mueller@mail.de"
            />
            <span class="icon is-small is-left">
              <FontAwesomeIcon icon="envelope" />
            </span>
          </div>
        </div>
      </div>
      <div class="column is-6"></div>
      <div class="column is-6">
        <div class="field">
          <label class="label" for="message"
            >Dürfen wir Ihnen E-Mails schicken?</label
          >
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
                Ja, ich würde gerne Marketing E-Mails von Tortuga Webdesign
                erhalten.
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-6"></div>
      <div class="column is-6">
        <div class="field">
          <div class="control">
            <button class="button is-rounded is-light mt-40">
              {{ download.action }}
            </button>
          </div>
        </div>
      </div>
      <div class="column is-12">
        <p class="mt-18">
          <small>
            {{ download.note }}
          </small>
        </p>
      </div>
    </form>
  </div>
</template>
<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faHome,
  faEnvelope,
  faUser,
  faUserFriends
} from "@fortawesome/free-solid-svg-icons";
library.add(faEnvelope, faUser, faUserFriends);

export default {
  name: "LeadGeneratorForm",
  components: {
    FontAwesomeIcon
  },
  props: {
    download: {
      type: Object,
      required: true
    }
  }
};
</script>
<style lang="scss">
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
