<template>
  <main>
    <SubNavigation text="Kontakt" class="bg-sunshine-100" />
    <!--  -->
    <section class="pt-24 pb-32 bg-sunshine-300">
      <div class="container">
        <div class="">
          <h2
            class="text-6xl font-bold tracking-tight leading-tight text-teal-700 mb-2"
          >
            Wir freuen uns auf Sie!
          </h2>
          <p
            class="text-3xl font-light tracking-wide leading-tight max-w-xl mb-10"
          >
            Schreiben Sie uns ganz einfach eine E-Mail oder rufen Sie uns direkt
            an.
          </p>
          <TealButton text="Kontakt aufnehmen" to="#" />
        </div>
      </div>
    </section>
    <!---->
    <section class="pt-24 pb-32 bg-teal-700">
      <div class="container">
        <div class="grid grid-cols-3 gap-y-16 gap-x-8">
          <div>
            <h3 class="text-3xl font-bold text-gray-100">Kontaktdaten</h3>
          </div>
          <div>
            <h4 class="text-xl font-bold text-gray-100 mb-1">Telefon</h4>
            <p class="text-lg text-gray-200">Daniel Mössner</p>
            <a
              class="text-lg text-gray-200 underline hover:text-gray-100 active:text-white transition ease-in-out duration-150"
              href=""
              >0176 38385646</a
            >
          </div>
          <div>
            <h4 class="text-xl font-bold text-gray-100 mb-1">E-Mail</h4>
            <a
              class="text-lg text-gray-200 underline hover:text-gray-100 active:text-white transition ease-in-out duration-150"
              href=""
              >kontakt@tortuga-webdesign.de</a
            >
          </div>
          <div class="col-start-2">
            <h4 class="text-xl font-bold text-gray-100 mb-1">Adresse</h4>
            <address class="text-gray-200 text-lg not-italic">
              <span class="font-medium">Tortuga Webdesign</span> <br />
              Albert-Schweitzer-Str. 17b <br />
              85375 Neufahrn b. Freising
            </address>
          </div>
          <div class="col-start-1">
            <h3 class="text-3xl font-bold text-gray-100">Kontaktformular</h3>
          </div>
          <div class="col-span-2">
            <div class="p-4 bg-sunshine-300 rounded-lg overflow-hidden">
              <ContactForm><BlueButton text="Absenden"/></ContactForm>
            </div>
          </div>
          <div class="col-start-1">
            <h3 class="text-3xl font-bold text-gray-100">Maps</h3>
          </div>
          <div class="col-span-2">
            <div class="p-4 bg-sunshine-300 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170187.9866221967!2d11.496716990307563!3d48.203008313388644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e6df61b80d737%3A0xb6121f1e0704ba6a!2sTortuga+Webdesign!5e0!3m2!1sde!2sde!4v1551033670191"
                frameborder="0"
                style="border:0; width: 100%; height: 450px;"
                allowfullscreen=""
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--  -->
    <NewFooter />
    <!---->
  </main>
</template>
<script>
import BaseSection from "@/components/BaseSection.vue";
import ContactForm from "@/components/ContactForm.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheHeaderReflection from "@/components/TheHeaderReflection.vue";
import TheSubpageHeader from "@/components/TheSubpageHeader.vue";
import SubNavigation from "@/components/SubNavigation.vue";
import BlueButton from "@/components/BlueButton.vue";
import NewFooter from "@/components/NewFooter.vue";
import TealButton from "@/components/TealButton.vue";

export default {
  components: {
    TealButton,
    NewFooter,
    BlueButton,
    SubNavigation,
    BaseSection,
    ContactForm,
    TheFooter,
    TheHeaderReflection,
    TheSubpageHeader
  },
  layout: "new",
  data() {
    return {
      page: this.$store.state.pages.contact
    };
  },
  head() {
    return {
      title: this.page.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.page.description
        }
      ]
    };
  }
};
</script>
