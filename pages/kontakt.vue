<template>
  <main>
    <!---->
    <TheSubpageHeader :title="page.header.title" :subtitle="page.header.subtitle" :buttonText="buttonText" />
    <!---->
    <base-section class="top-medium" id="kontakt">
      <template v-slot:no-container>
        <TheHeaderReflection />
      </template>
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
                <div class="icons-box">
                  <a class="icon-link" href="https://www.instagram.com/tortugawebdesign/" target="_blank">
                    <font-awesome-layers class="fa-2x">
                      <FontAwesomeIcon icon="circle" inverse />
                      <FontAwesomeIcon :icon="['fab', 'instagram']" transform="shrink-6" />
                    </font-awesome-layers>
                  </a>
                  <a class="icon-link" href="https://www.linkedin.com/in/danielmoessner/" target="_blank">
                    <font-awesome-layers class="fa-2x">
                      <FontAwesomeIcon icon="circle" inverse />
                      <FontAwesomeIcon :icon="['fab', 'linkedin-in']" transform="shrink-7" />
                    </font-awesome-layers>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-8">
            <div class="has-background-white-ter p-20">
              <h2 class="title is-3 mb-20">Kontaktaufnahme</h2>
              <ContactForm />
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170187.9866221967!2d11.496716990307563!3d48.203008313388644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e6df61b80d737%3A0xb6121f1e0704ba6a!2sTortuga+Webdesign!5e0!3m2!1sde!2sde!4v1551033670191" frameborder="0" style="border:0; width: 100%; height: 450px;" allowfullscreen=""></iframe>
          </div>
        </div>
      </div>
    </base-section>
    <!---->
    <base-section>
      <TheFooter />
    </base-section>
    <!---->
  </main>
</template>
<script>
import TheSubpageHeader from "../components/TheSubpageHeader.vue";
import TheFooter from "../components/TheFooter.vue";
import TheHeaderReflection from "../components/TheHeaderReflection.vue";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'
import { faHome, faEnvelope, faUser, faCircle } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
library.add(faHome, faEnvelope, faUser, faInstagram, faLinkedinIn, faCircle)
import BaseSection from "@/components/BaseSection.vue"
import ContactForm from "@/components/ContactForm.vue"

export default {
  components: {
    TheSubpageHeader,
    TheFooter,
    TheHeaderReflection,
    FontAwesomeIcon,
    FontAwesomeLayers,
    BaseSection,
    ContactForm
  },
  data() {
    return {
      page: this.$store.state.pages.contact,
      buttonText: "Jetzt loslegen"
    }
  },
  head() {
    return {
      title: this.page.title,
      meta: [
        { hid: "description", name: "description", content: this.page.description }
      ]
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

.mb-20 {
  margin-bottom: 2rem !important;
}

.p-20 {
  padding: 2rem !important;
}

.icons-box {
  max-height: 42px;
  overflow: hidden;
}

.icon-link {
  color: $dark;

  &:hover {
    color: $grey-dark;
  }
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
      color: $grey-lighter;
    }
  }
}

</style>
