<template>
  <div>
    <form
      class="columns is-multiline"
      name="lead"
      data-netlify="true"
      ref="leadGeneratorForm"
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
    <div ref="errorMessage" class="message is-danger" style="display: none">
      <div class="message-body">
        {{ download.error.message }}
      </div>
    </div>
    <div ref="successMessage" class="message is-success" style="display: none">
      <div class="message-body">
        <h3 class="title is-4 color-inherit">{{ download.success.title }}</h3>
        <p class="mb-02">{{ download.success.message }}</p>
        <p class="">
          <a class="" target="_blank" :href="download.link">{{
            download.action
          }}</a>
        </p>
      </div>
    </div>
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
  },
  methods: {
    submitForm(event) {
      const self = this;
      event.preventDefault();
      const form = this.$refs.leadGeneratorForm;
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
